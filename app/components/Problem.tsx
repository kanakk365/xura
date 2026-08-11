"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const DEMAND_POINTS = [
  { x: 60, y: 200 },
  { x: 130, y: 184 },
  { x: 200, y: 158 },
  { x: 270, y: 122 },
  { x: 340, y: 86 },
  { x: 410, y: 56 },
  { x: 480, y: 36 },
];

const GRID_POINTS = [
  { x: 60, y: 196 },
  { x: 130, y: 188 },
  { x: 200, y: 178 },
  { x: 270, y: 168 },
  { x: 340, y: 156 },
  { x: 410, y: 146 },
  { x: 480, y: 138 },
];

const buildPath = (points: { x: number; y: number }[]) =>
  points.reduce((acc, p, i, arr) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const prev = arr[i - 1];
    const cx = (prev.x + p.x) / 2;
    return `${acc} Q ${cx} ${prev.y} ${cx} ${(prev.y + p.y) / 2} T ${p.x} ${p.y}`;
  }, "");

const DEMAND_PATH = buildPath(DEMAND_POINTS);
const GRID_PATH = buildPath(GRID_POINTS);
const DEMAND_AREA = `${DEMAND_PATH} L 480 220 L 60 220 Z`;

const CONSTRAINTS = [
  {
    code: "01",
    title: "Limited capacity at the meter",
    body: "Available service is fixed. New load has to fit inside what the existing connection already delivers.",
  },
  {
    code: "02",
    title: "Costly utility upgrades",
    body: "Increasing service size means transformer, feeder, and sometimes substation work — paid for by the site.",
  },
  {
    code: "03",
    title: "Unpredictable interconnect timelines",
    body: "Queue positions and study cycles move. A schedule built on an assumed energization date is not a schedule.",
  },
  {
    code: "04",
    title: "Constraints vary site to site",
    body: "Two properties on the same road can have entirely different answers. Feasibility is established per site.",
  },
];

export function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const reduce = useReducedMotion();

  return (
    <section id="problem" ref={ref} className="doc-section">
      <div className="doc-shell">
        <p className="kicker">The Constraint</p>

        <h2 className="doc-h2 mt-4 max-w-[24ch]">
          Demand is <span className="text-accent">accelerating</span>. Grid
          expansion is not.
        </h2>

        <p className="doc-lead mt-3.5">
          Utilities can&rsquo;t expand fast enough to meet near-term
          electrification load. We design around what the meter delivers today,
          not around an upgrade that may or may not arrive.
        </p>

        {/* Chart sits beside the constraints rather than spanning the column,
            which keeps it at a readable figure size instead of a banner. */}
        {/* Both columns stretch to the same height; the chart centres itself
            in whatever height the constraint ledger sets. */}
        <div className="mt-9 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <figure className="doc-figure flex flex-col">
          <div className="flex flex-1 flex-col justify-center p-5">
            <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.66rem] uppercase tracking-[0.14em]">
              <span className="flex items-center gap-2 text-accent">
                <span className="h-2 w-2 rounded-[2px] bg-accent" />
                Site load demand
              </span>
              <span className="flex items-center gap-2 text-mute">
                <span className="h-2 w-2 rounded-[2px] bg-mute" />
                Utility capacity
              </span>
            </div>

            <svg
              viewBox="0 0 540 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              role="img"
              aria-label="Site load demand rising steeply while utility capacity rises slowly, opening a widening gap."
              className="block w-full"
            >
              <defs>
                <linearGradient id="problem-demand-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#8bfb03" stopOpacity="0" />
                </linearGradient>
              </defs>

              <g stroke="rgba(255,255,255,0.08)" strokeWidth="1">
                {[40, 80, 120, 160, 200].map((y) => (
                  <line key={y} x1="40" x2="500" y1={y} y2={y} />
                ))}
              </g>

              <motion.path
                d={GRID_PATH}
                stroke="rgba(255,255,255,0.45)"
                strokeWidth="1.6"
                strokeDasharray="4 4"
                fill="none"
                initial={{ pathLength: reduce ? 1 : 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.4, ease: [0.2, 0.7, 0.1, 1] }}
              />

              <motion.path
                d={DEMAND_AREA}
                fill="url(#problem-demand-fill)"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              />

              <motion.path
                d={DEMAND_PATH}
                stroke="#8bfb03"
                strokeWidth="2.4"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: reduce ? 1 : 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.6, delay: 0.2, ease: [0.2, 0.7, 0.1, 1] }}
              />

              <motion.g
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                {DEMAND_POINTS.map((p, i) => (
                  <circle key={`d-${i}`} cx={p.x} cy={p.y} r="3.2" fill="#8bfb03" />
                ))}
                {GRID_POINTS.map((p, i) => (
                  <circle
                    key={`g-${i}`}
                    cx={p.x}
                    cy={p.y}
                    r="2.4"
                    fill="rgba(255,255,255,0.55)"
                  />
                ))}

                {/* The gap is the whole argument — label it plainly. */}
                <line
                  x1="480"
                  x2="480"
                  y1="36"
                  y2="138"
                  stroke="#8bfb03"
                  strokeOpacity="0.6"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <rect
                  x="488"
                  y="74"
                  width="44"
                  height="26"
                  rx="4"
                  fill="#080808"
                  stroke="#8bfb03"
                  strokeWidth="1"
                />
                <text
                  x="510"
                  y="91"
                  textAnchor="middle"
                  fontFamily="ui-monospace, SFMono-Regular, monospace"
                  fontSize="9"
                  fill="#8bfb03"
                  letterSpacing="1"
                  fontWeight="700"
                >
                  GAP
                </text>
              </motion.g>
            </svg>
          </div>

          <figcaption className="doc-figcaption">
            <span>
              <b>Fig. 01</b> &mdash; Site load demand vs. available utility
              capacity.
            </span>
            <span>Indicative</span>
          </figcaption>
        </figure>

          {/* Constraints as a numbered ledger, not four standalone cards. */}
          <ol className="divide-y divide-line overflow-hidden rounded-[10px] border border-line bg-ink-2">
            {CONSTRAINTS.map((c) => (
              <li key={c.code} className="flex gap-4 p-5">
                <span className="font-mono text-[0.72rem] font-bold leading-[1.6] text-accent">
                  {c.code}
                </span>
                <div>
                  <h3 className="font-display text-[1rem] font-bold leading-[1.3] text-paper">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-[0.88rem] leading-[1.55] text-mute">
                    {c.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
