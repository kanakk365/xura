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

export function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const reduce = useReducedMotion();

  return (
    <section
      id="problem"
      ref={ref}
      className="relative bg-ink py-24 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.07]"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div className="flex flex-col">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.1, 1] }}
              className="mb-6 inline-flex items-center gap-3 self-start text-[11px] font-medium uppercase tracking-[0.2em] text-mute"
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
                <span className="absolute -inset-1 rounded-full bg-accent/30 blur-[3px]" />
              </span>
              The Constraint
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.1, 1] }}
              className="font-display tracking-normal text-[clamp(2rem,4.6vw,3.9rem)] font-normal leading-[1.05]  text-paper"
            >
              Demand is{" "}
              <span className="italic text-accent">accelerating</span>
              . Grid expansion is not.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.2, 0.7, 0.1, 1] }}
              className="mt-7 max-w-md text-base leading-relaxed text-paper/65"
            >
              Utilities can&rsquo;t expand fast enough to meet electrification
              load. Most sites already have less capacity than the project
              spec assumes. We design around what the meter can deliver
              today&mdash;not what it should deliver in seven years.
            </motion.p>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-paper/10 pt-7 sm:max-w-md">
              <Constraint
                code="01"
                label="Limited available capacity at the meter"
                delay={0.45}
                isInView={isInView}
              />
              <Constraint
                code="02"
                label="Costly utility upgrades"
                delay={0.55}
                isInView={isInView}
              />
              <Constraint
                code="03"
                label="Unpredictable interconnect timelines"
                delay={0.65}
                isInView={isInView}
              />
              <Constraint
                code="04"
                label="Constraints vary site to site"
                delay={0.75}
                accent
                isInView={isInView}
              />
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] border border-paper/10 bg-ink-2/60 p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between text-[10px] font-normal tracking-[0.3em]">
                <span className="flex items-center gap-2 text-paper/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Load vs. capacity
                </span>
                <span className="font-mono tracking-[0.2em] text-mute">
                  Trend
                </span>
              </div>

              <svg
                viewBox="0 0 540 260"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                <defs>
                  <linearGradient
                    id="problem-demand-fill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.32" />
                    <stop offset="100%" stopColor="#8bfb03" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="problem-demand-line"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#8bfb03" stopOpacity="1" />
                  </linearGradient>
                </defs>

                <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
                  {[40, 80, 120, 160, 200].map((y) => (
                    <line key={y} x1="40" x2="500" y1={y} y2={y} />
                  ))}
                </g>

                <motion.path
                  d={GRID_PATH}
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="1.5"
                  strokeDasharray="3 4"
                  fill="none"
                  initial={{ pathLength: reduce ? 1 : 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.6, ease: [0.2, 0.7, 0.1, 1] }}
                />

                <motion.path
                  d={DEMAND_AREA}
                  fill="url(#problem-demand-fill)"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
                />

                <motion.path
                  d={DEMAND_PATH}
                  stroke="url(#problem-demand-line)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: reduce ? 1 : 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{
                    duration: 1.8,
                    delay: 0.3,
                    ease: [0.2, 0.7, 0.1, 1],
                  }}
                  style={{ filter: "drop-shadow(0 0 6px rgba(139,251,3,0.6))" }}
                />

                <motion.g
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  {DEMAND_POINTS.map((p, i) => (
                    <g key={`d-${i}`}>
                      <circle cx={p.x} cy={p.y} r="3" fill="#8bfb03" />
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r="6"
                        fill="none"
                        stroke="#8bfb03"
                        strokeOpacity="0.3"
                        strokeWidth="1"
                      />
                    </g>
                  ))}
                  {GRID_POINTS.map((p, i) => (
                    <circle
                      key={`g-${i}`}
                      cx={p.x}
                      cy={p.y}
                      r="2.2"
                      fill="rgba(255,255,255,0.55)"
                    />
                  ))}
                </motion.g>

                <motion.g
                  initial={{ opacity: 0, y: 6 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  <line
                    x1="480"
                    x2="480"
                    y1="36"
                    y2="138"
                    stroke="#8bfb03"
                    strokeOpacity="0.5"
                    strokeWidth="1"
                    strokeDasharray="2 3"
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
                    fontSize="8"
                    fill="#8bfb03"
                    letterSpacing="1"
                    fontWeight="700"
                  >
                    GAP
                  </text>
                </motion.g>

                <g
                  fontFamily="ui-monospace, SFMono-Regular, monospace"
                  fontSize="8"
                  letterSpacing="1.5"
                >
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    <rect
                      x="48"
                      y="22"
                      width="120"
                      height="18"
                      rx="9"
                      fill="rgba(139,251,3,0.08)"
                      stroke="rgba(139,251,3,0.35)"
                    />
                    <circle cx="58" cy="31" r="2" fill="#8bfb03" />
                    <text x="68" y="34" fill="#8bfb03" fontWeight="600">
                      SITE LOAD DEMAND
                    </text>
                  </motion.g>
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.55 }}
                  >
                    <rect
                      x="180"
                      y="22"
                      width="138"
                      height="18"
                      rx="9"
                      fill="rgba(255,255,255,0.04)"
                      stroke="rgba(255,255,255,0.18)"
                    />
                    <circle
                      cx="190"
                      cy="31"
                      r="2"
                      fill="rgba(255,255,255,0.7)"
                    />
                    <text
                      x="200"
                      y="34"
                      fill="rgba(255,255,255,0.7)"
                      fontWeight="600"
                    >
                      UTILITY CAPACITY
                    </text>
                  </motion.g>
                </g>
              </svg>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[28px] "
              />
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 -z-10 rounded-[36px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Constraint({
  code,
  label,
  delay,
  accent,
  isInView,
}: {
  code: string;
  label: string;
  delay: number;
  accent?: boolean;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.1, 1] }}
      className="flex flex-col gap-2"
    >
      <span
        className={`font-mono text-[10px] font-medium uppercase tracking-[0.2em] ${
          accent ? "text-accent" : "text-paper/55"
        }`}
      >
        {code}
      </span>
      <span
        className={`font-display tracking-normal text-[clamp(0.95rem,1.15vw,1.05rem)] font-normal leading-[1.25] ${
          accent ? "text-accent" : "text-paper"
        }`}
      >
        {label}
      </span>
    </motion.div>
  );
}
