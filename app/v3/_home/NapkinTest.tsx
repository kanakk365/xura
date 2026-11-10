"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Check, EASE, Em, SectionHead } from "../_components/primitives";

const HEAT = "#ff5a1f";
const CORE_MAX = 840;

const LADDER = [
  { level: "L1", title: "UL 9540A cell-level testing", body: "Characterizes gas composition and thermal-runaway energetics of individual LFP cells." },
  { level: "L2", title: "UL 9540A module-level containment", body: "Verifies non-propagation between adjacent cells inside a single sealed module." },
  { level: "L3", title: "UL 9540A unit & installation level", body: "Zero cabinet-to-cabinet fire spread, zero flaming projectiles, full AHJ compliance." },
  {
    level: "L4+",
    title: "Above & beyond: the Napkin Test",
    body: "A raw paper napkin on the module during forced runaway (>840 °C core) does not scorch, smoke or ignite. Paper auto-ignites at 232 °C.",
    hero: true,
  },
];

type Phase = "idle" | "running" | "done";

export function NapkinTest() {
  return (
    <section id="napkin" className="op-section">
      <div className="op-shell">
        <SectionHead
          kicker="Above & beyond UL 9540A"
          title={
            <>
              We don&rsquo;t just meet UL 9540A. We pass the <Em>Napkin Test</Em>.
            </>
          }
          lead="Even when a cell is deliberately forced into thermal runaway above 840 °C (1,544 °F), our thermal barrier stops cell-to-cell propagation so completely that a paper napkin resting on the enclosure stays untouched."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Ladder />
          <Lab />
        </div>
      </div>
    </section>
  );
}

function Ladder() {
  return (
    <div className="op-plate">
      <div className="op-plate-bar">
        <span>
          <b>Testing hierarchy</b>
        </span>
        <span>4 of 4 passed</span>
      </div>
      <ol className="flex flex-1 flex-col">
        {LADDER.map((r, i) => (
          <motion.li
            key={r.level}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
            className={`flex flex-1 gap-4 px-6 py-5 ${i > 0 ? "border-t border-line" : ""} ${r.hero ? "bg-[rgba(139,251,3,0.06)]" : ""}`}
          >
            <span
              className={`grid h-9 w-12 shrink-0 place-items-center rounded-full border font-mono text-[0.7rem] font-medium ${
                r.hero ? "border-accent bg-accent text-ink" : "border-line-strong text-paper/80"
              }`}
            >
              {r.level}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <h3 className={`font-display text-[1.08rem] leading-snug ${r.hero ? "italic text-accent" : "text-paper"}`}>{r.title}</h3>
                <span className="mt-0.5 flex shrink-0 items-center gap-1 font-mono text-[0.62rem] font-medium uppercase tracking-[0.12em] text-accent">
                  <Check /> Pass
                </span>
              </div>
              <p className="mt-1.5 text-[0.85rem] leading-[1.55] text-mute">{r.body}</p>
            </div>
          </motion.li>
        ))}
      </ol>
      <div className="op-plate-foot">
        <span>
          <b>Urban & retail safe</b> · zero fire propagation
        </span>
      </div>
    </div>
  );
}

function Lab() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-25% 0px" });
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("idle");
  const [core, setCore] = useState(30);
  const raf = useRef<number>(0);

  const run = useCallback(() => {
    cancelAnimationFrame(raf.current);
    if (reduce) {
      setCore(CORE_MAX);
      setPhase("done");
      return;
    }
    setPhase("running");
    const start = performance.now();
    const dur = 3400;
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      setCore(30 + eased * (CORE_MAX - 30));
      if (k < 1) raf.current = requestAnimationFrame(tick);
      else setPhase("done");
    };
    raf.current = requestAnimationFrame(tick);
  }, [reduce]);

  const reset = () => {
    cancelAnimationFrame(raf.current);
    setPhase("idle");
    setCore(30);
  };

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(run, 700);
    return () => clearTimeout(t);
  }, [inView, run]);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const heat = (core - 30) / (CORE_MAX - 30);
  const surface = 28 + heat * 9.4;
  const neighbor = Math.round(30 + heat * 5);

  const cells = [
    { name: "Cell 01", t: Math.round(29 + heat * 4), state: "Isolated" },
    { name: "Cell 02", t: neighbor, state: "No spread" },
    { name: "Test cell", t: Math.round(core), state: phase === "idle" ? "Standby" : phase === "running" ? "Runaway" : "Contained", test: true },
    { name: "Cell 04", t: neighbor, state: "No spread" },
    { name: "Cell 05", t: Math.round(29 + heat * 4), state: "Safe" },
  ];

  return (
    <div ref={ref} className="op-plate">
      <div className="op-plate-bar">
        <span>
          <b className="hidden sm:inline">Thermal containment lab</b>
          <b className="sm:hidden">Thermal lab</b>
        </span>
        <div className="flex shrink-0 items-center gap-2 normal-case tracking-normal">
          <button
            type="button"
            onClick={run}
            disabled={phase === "running"}
            className="h-8 rounded-full bg-accent px-4 text-[11px] tracking-[0.08em] text-ink transition-opacity disabled:opacity-50"
          >
            {phase === "running" ? "Running…" : (<><span className="sm:hidden">Trigger</span><span className="hidden sm:inline">Trigger 840 °C runaway</span></>)}
          </button>
          <button
            type="button"
            onClick={reset}
            className="h-8 rounded-full border border-paper/20 px-4 text-[11px] tracking-[0.08em] text-paper/80 transition-colors hover:border-accent hover:text-accent"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="relative flex flex-1 items-center px-4 py-6 sm:px-6">
        <svg viewBox="0 0 560 280" className="block w-full" role="img" aria-label={`Battery module cross-section. Test cell at ${Math.round(core)} degrees; napkin surface at ${surface.toFixed(1)} degrees.`}>
          <defs>
            <radialGradient id="nt-glow">
              <stop offset="0%" stopColor={HEAT} stopOpacity="0.9" />
              <stop offset="60%" stopColor={HEAT} stopOpacity="0.25" />
              <stop offset="100%" stopColor={HEAT} stopOpacity="0" />
            </radialGradient>
            <pattern id="nt-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(139,251,3,0.45)" strokeWidth="2" />
            </pattern>
          </defs>

          {/* napkin */}
          <motion.path
            d="M150 46 Q170 38 200 44 T260 42 T320 45 T380 41 T410 46 L406 62 Q380 58 350 63 T290 60 T230 63 T170 60 L150 62 Z"
            fill="#f4f1ea"
            stroke="rgba(255,255,255,0.6)"
            animate={{ y: [0, -1.5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <text x="280" y="28" textAnchor="middle" fontSize="9" letterSpacing="1.6" className="fill-[#808080] font-mono">1-PLY PAPER NAPKIN ON SURFACE</text>

          {/* lid + shield */}
          <rect x="40" y="66" width="480" height="10" rx="2" fill="#2a2a2a" />
          <rect x="40" y="78" width="480" height="18" fill="url(#nt-hatch)" stroke="rgba(139,251,3,0.5)" />

          {/* runaway glow */}
          <circle cx="280" cy="168" r="120" fill="url(#nt-glow)" opacity={heat * 0.85} />

          {/* cells */}
          {cells.map((c, i) => {
            const x = 52 + i * 94;
            const hot = c.test && phase !== "idle";
            return (
              <g key={c.name}>
                <rect
                  x={x} y="106" width="80" height="128" rx="6"
                  fill={hot ? `rgba(255,90,31,${0.15 + heat * 0.55})` : "#101010"}
                  stroke={hot ? HEAT : "rgba(255,255,255,0.22)"}
                  strokeWidth={hot ? 2 : 1}
                />
                {/* barrier walls between cells */}
                {i < 4 && <rect x={x + 82} y="106" width="10" height="128" fill="url(#nt-hatch)" opacity="0.8" />}
                <text x={x + 40} y="132" textAnchor="middle" fontSize="8.5" letterSpacing="1.2" className="fill-[#808080] font-mono">
                  {c.name.toUpperCase()}
                </text>
                <text x={x + 40} y="176" textAnchor="middle" fontSize="20" fontWeight="800" fill={hot ? "#fff" : "#e8e8e8"} className="font-display">
                  {c.t}°
                </text>
                <text x={x + 40} y="212" textAnchor="middle" fontSize="8" fontWeight="700" letterSpacing="1.2" fill={hot ? HEAT : "#8bfb03"} className="font-mono">
                  {c.state.toUpperCase()}
                </text>
              </g>
            );
          })}
          <rect x="40" y="240" width="480" height="8" rx="2" fill="#1d1d1d" />
          <text x="280" y="270" textAnchor="middle" fontSize="9" letterSpacing="1.6" className="fill-[#5d5d5d] font-mono">
            MULTI-LAYER AEROGEL & CERAMIC THERMAL SHIELD
          </text>
        </svg>
      </div>

      <dl className="grid grid-cols-1 border-t border-line sm:grid-cols-3 [&>*+*]:border-t [&>*+*]:border-line sm:[&>*+*]:border-l sm:[&>*+*]:border-t-0">
        <Gauge label="Forced core spike" value={`${Math.round(core)} °C`} note={phase === "idle" ? "Normal" : "Runaway forced"} hot={phase !== "idle"} />
        <Gauge label="Lid / napkin temp" value={`${surface.toFixed(1)} °C`} note="Touch safe" />
        <Gauge label="Napkin & neighbours" value="100%" note="Intact · ignition 232 °C" />
      </dl>
    </div>
  );
}

function Gauge({ label, value, note, hot }: { label: string; value: string; note: string; hot?: boolean }) {
  return (
    <div className="flex min-w-0 flex-col gap-2 px-6 py-5">
      <dt className="op-label">{label}</dt>
      <dd className="font-display text-[1.8rem] font-normal leading-none" style={{ color: hot ? HEAT : "#fff" }}>
        {value}
      </dd>
      <dd className="text-[0.76rem] text-mute">{note}</dd>
    </div>
  );
}
