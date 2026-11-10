"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { EASE, Em, SectionHead } from "../_components/primitives";

const LAYERS = [
  {
    n: 4,
    title: "UL9540A safe battery storage",
    tag: "Zero propagation",
    body: "Meets the highest UL9540A fire and thermal-runaway standards, and buffers millisecond transients for AI and cloud workloads.",
  },
  {
    n: 3,
    title: "Dispatchable linear generators",
    tag: "Dynamic load following",
    body: "Low-temperature, fuel-flexible linear prime movers ramp up and down in seconds to match compute demand without combustion spikes.",
  },
  {
    n: 2,
    title: "High-efficiency fuel cells",
    tag: "24/7 clean baseload",
    body: "Electrochemical generation without combustion: quiet, continuous baseload power with near-zero NOx or particulates.",
  },
  {
    n: 1,
    title: "Existing utility power foundation",
    tag: "Immediate interconnect",
    body: "Uses the utility envelope already available at our controlled sites, avoiding five-year substation upgrades and transmission delays.",
  },
];

const ALL = {
  title: "Integrated system harmony",
  tag: "99.999% availability",
  body: "Existing utility distribution, fuel cells, linear generators and UL9540A batteries combine so NeoCloud deploys 4.9 to 25 MW without waiting on grid expansion.",
};

export function Layers() {
  const [sel, setSel] = useState<number | "all">("all");
  const spec = sel === "all" ? ALL : LAYERS.find((l) => l.n === sel)!;

  return (
    <section id="architecture" className="op-section">
      <div className="op-shell">
        <SectionHead
          kicker="Modular power architecture"
          title={
            <>
              Four layers of power, <Em>engineered as one</Em>.
            </>
          }
          lead="Select a layer to see how NeoCloud pairs existing utility capacity with a resilient behind-the-meter microgrid."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="op-plate">
            <div className="op-plate-bar">
              <span>
                <b>Hardware stack</b>
              </span>
              <button
                type="button"
                onClick={() => setSel("all")}
                aria-pressed={sel === "all"}
                className={`rounded-full px-3 py-1 text-[10px] tracking-[0.16em] transition-colors ${sel === "all" ? "bg-accent text-ink" : "border border-paper/15 text-paper/70 hover:text-paper"}`}
              >
                SHOW ALL 4
              </button>
            </div>
            <ul className="flex flex-1 flex-col">
              {LAYERS.map((l, i) => {
                const on = sel === l.n || sel === "all";
                const active = sel === l.n;
                return (
                  <li key={l.n} className={`flex flex-1 ${i > 0 ? "border-t border-paper/[0.07]" : ""}`}>
                    <button
                      type="button"
                      onClick={() => setSel(l.n)}
                      onMouseEnter={() => setSel(l.n)}
                      aria-pressed={active}
                      className={`relative flex w-full items-center gap-4 px-6 py-5 text-left transition-colors sm:px-7 ${active ? "bg-accent/[0.06]" : "hover:bg-white/[0.02]"}`}
                    >
                      <span className={`font-mono text-[11px] tracking-[0.1em] ${on ? "text-accent" : "text-mute-2"}`}>L0{l.n}</span>
                      <span className="min-w-0 flex-1">
                        <span className={`block font-display text-[1.08rem] leading-snug ${on ? "text-paper" : "text-paper/50"}`}>{l.title}</span>
                        <span className="mt-1 block text-[12px] uppercase tracking-[0.14em] text-mute">{l.tag}</span>
                      </span>
                      {active && <motion.span layoutId="layer-bar" className="absolute inset-y-3 left-0 w-[2px] rounded-full bg-accent" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="op-plate">
            <div className="flex flex-1 items-center justify-center px-4 pt-6">
              <Stack sel={sel} />
            </div>
            <div className="border-t border-paper/[0.08] px-6 py-5 sm:px-8">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={String(sel)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="min-h-[104px]"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="font-display text-[1.15rem] text-paper">{spec.title}</p>
                    <span className="text-[10px] uppercase tracking-[0.16em] text-accent">{spec.tag}</span>
                  </div>
                  <p className="mt-2 max-w-[60ch] text-[14px] leading-[1.6] text-mute">{spec.body}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stack({ sel }: { sel: number | "all" }) {
  const cx = 230;
  const hw = 150; // half width
  const hh = 56; // half height of top face
  const depth = 16;
  const labels = ["UTILITY", "FUEL CELLS", "LINEAR GEN", "UL9540A BESS"];

  return (
    <svg viewBox="0 0 520 400" className="block w-full max-w-[560px]" role="img" aria-label="Exploded isometric stack of the four NeoCloud power layers">
      {[1, 2, 3, 4].map((n) => {
        const on = sel === "all" || sel === n;
        const lift = sel === n ? -14 : 0;
        const y = 330 - (n - 1) * 82;
        const top = `M${cx} ${y - hh} L${cx + hw} ${y} L${cx} ${y + hh} L${cx - hw} ${y} Z`;
        const left = `M${cx - hw} ${y} L${cx} ${y + hh} L${cx} ${y + hh + depth} L${cx - hw} ${y + depth} Z`;
        const right = `M${cx} ${y + hh} L${cx + hw} ${y} L${cx + hw} ${y + depth} L${cx} ${y + hh + depth} Z`;
        return (
          <motion.g key={n} animate={{ y: lift, opacity: on ? 1 : 0.35 }} transition={{ duration: 0.45, ease: EASE }}>
            <path d={left} fill={on ? "#1f3a05" : "#111"} stroke={on ? "#8bfb03" : "rgba(255,255,255,0.15)"} strokeWidth="1" />
            <path d={right} fill={on ? "#2b5207" : "#151515"} stroke={on ? "#8bfb03" : "rgba(255,255,255,0.15)"} strokeWidth="1" />
            <path d={top} fill={on ? "rgba(139,251,3,0.14)" : "#0c0c0c"} stroke={on ? "#8bfb03" : "rgba(255,255,255,0.18)"} strokeWidth="1.2" />
            {/* modules on the top face */}
            {Array.from({ length: n === 1 ? 3 : 5 }).map((_, k, arr) => {
              const mx = cx + (k - (arr.length - 1) / 2) * 44;
              return (
                <path
                  key={k}
                  d={`M${mx - 18} ${y} L${mx} ${y - 7} L${mx + 18} ${y} L${mx} ${y + 7} Z`}
                  fill={on ? "#8bfb03" : "rgba(255,255,255,0.1)"}
                  opacity={on ? 0.8 : 1}
                />
              );
            })}
            <line x1={cx + hw} y1={y} x2={cx + hw + 22} y2={y} stroke={on ? "#8bfb03" : "rgba(255,255,255,0.2)"} />
            <text x={cx + hw + 28} y={y + 3.5} fontSize="10" letterSpacing="1.6" fill={on ? "#8bfb03" : "#5d5d5d"} className="font-mono">
              L0{n} {labels[n - 1]}
            </text>
          </motion.g>
        );
      })}
      {/* vertical bus */}
      <line x1={cx} y1={60} x2={cx} y2={385} stroke="rgba(139,251,3,0.35)" strokeDasharray="3 5" className="op-flow" />
    </svg>
  );
}
