"use client";

import { motion } from "motion/react";
import { useState } from "react";

import { EASE, Em, SectionHead, Segmented } from "../_components/primitives";

type St = "all" | "NY" | "NJ" | "CT" | "MA";

const SITES: { st: Exclude<St, "all">; name: string; mw: string; peak: number; x: number; y: number; note: string }[] = [
  { st: "NY", name: "New York", mw: "12.5–20 MW", peak: 20, x: 214, y: 214, note: "Low-latency fiber · verified feeder" },
  { st: "NJ", name: "New Jersey", mw: "18 MW", peak: 18, x: 132, y: 296, note: "As-of-right zoning · verified feeder" },
  { st: "CT", name: "Connecticut", mw: "4.9–15 MW", peak: 15, x: 330, y: 168, note: "Scales in modular step blocks" },
  { st: "MA", name: "Massachusetts", mw: "25 MW", peak: 25, x: 452, y: 96, note: "Flagship 25 MW envelope" },
];

export function Sites() {
  const [st, setSt] = useState<St>("all");
  const on = (s: string) => st === "all" || st === s;

  return (
    <section id="sites" className="op-section">
      <div className="op-shell">
        <SectionHead
          kicker="Controlled site portfolio"
          title={
            <>
              Strategic control across <Em>the Northeast</Em>.
            </>
          }
          lead="Sites across New York, New Jersey, Connecticut and Massachusetts, positioned near ultra-low-latency fiber with verified utility feeders and as-of-right zoning."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          <div className="op-plate">
            <div className="op-plate-bar">
              <span>
                <b>Northeast corridor</b> · schematic
              </span>
              <span>Latency to NYC / BOS &lt; 2.5 ms</span>
            </div>
            <div className="flex flex-1 items-center px-3 py-4 sm:px-5">
              <svg viewBox="0 0 560 380" className="block w-full" role="img" aria-label="Schematic map of NeoCloud sites in NJ, NY, CT and MA connected by fiber">
                <defs>
                  <pattern id="ns-dots" width="14" height="14" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.07)" />
                  </pattern>
                  <radialGradient id="ns-glow">
                    <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#8bfb03" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <path d="M0 0 H560 V380 H0 Z" fill="url(#ns-dots)" />
                {/* stylised coastline */}
                <path
                  d="M20 370 C80 352 120 330 160 318 C200 306 220 270 252 252 C300 226 336 212 380 196 C420 182 446 168 478 150 C506 134 530 140 552 120"
                  fill="none"
                  stroke="rgba(255,255,255,0.14)"
                  strokeWidth="1.5"
                />
                <text x="470" y="200" fontSize="9" letterSpacing="2" fill="#5d5d5d" className="font-mono">ATLANTIC</text>

                {/* fiber trunk */}
                <path id="ns-trunk" d="M132 296 C160 260 186 236 214 214 C258 190 296 178 330 168 C380 150 420 118 452 96" fill="none" stroke="rgba(139,251,3,0.25)" strokeWidth="2" />
                <path d="M132 296 C160 260 186 236 214 214 C258 190 296 178 330 168 C380 150 420 118 452 96" fill="none" stroke="#8bfb03" strokeWidth="2" className="op-flow" />

                {/* metro hubs */}
                {[
                  { x: 236, y: 252, t: "NYC" },
                  { x: 474, y: 128, t: "BOS" },
                ].map((h) => (
                  <g key={h.t}>
                    <path d={`M${h.x} ${h.y - 6} L${h.x + 6} ${h.y} L${h.x} ${h.y + 6} L${h.x - 6} ${h.y} Z`} fill="#e8e8e8" />
                    <text x={h.x + 11} y={h.y + 4} fontSize="9.5" letterSpacing="1.6" fill="#b5b5b5" className="font-mono">{h.t}</text>
                  </g>
                ))}

                {SITES.map((s) => {
                  const active = on(s.st);
                  const r = 7 + s.peak * 0.5;
                  return (
                    <g key={s.st} className="cursor-pointer" onClick={() => setSt(st === s.st ? "all" : s.st)}>
                      <motion.circle cx={s.x} cy={s.y} r={r * 3} fill="url(#ns-glow)" animate={{ opacity: active ? 1 : 0 }} transition={{ duration: 0.4 }} />
                      {active && (
                        <motion.circle
                          cx={s.x} cy={s.y} r={r} fill="none" stroke="#8bfb03"
                          animate={{ r: [r, r * 2.2], opacity: [0.7, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                        />
                      )}
                      <motion.circle
                        cx={s.x} cy={s.y} r={r}
                        animate={{ fill: active ? "#8bfb03" : "#151515", stroke: active ? "#8bfb03" : "rgba(255,255,255,0.3)" }}
                        strokeWidth="1.5"
                        transition={{ duration: 0.35 }}
                      />
                      <text x={s.x} y={s.y + 4} textAnchor="middle" fontSize="10" fontWeight="700" fill={active ? "#050505" : "#808080"} className="font-mono">
                        {s.st}
                      </text>
                      <text x={s.x} y={s.y - r - 10} textAnchor="middle" fontSize="10" letterSpacing="1" fill={active ? "#ffffff" : "#5d5d5d"} className="font-mono">
                        {s.mw}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
            <div className="op-plate-foot">
              <span>
                <b>4 states</b> active
              </span>
              <span>Select a node to filter</span>
            </div>
          </div>

          <div className="op-plate">
            <div className="flex items-center justify-between gap-3 border-b border-paper/[0.08] px-5 py-3">
              <div className="-mx-1 overflow-x-auto px-1 [scrollbar-width:none]">
                <Segmented
                  label="Filter by state"
                  layoutId="ns-filter"
                  value={st}
                  onChange={setSt}
                  options={[
                    { value: "all", label: "All" },
                    { value: "NY", label: "NY" },
                    { value: "NJ", label: "NJ" },
                    { value: "CT", label: "CT" },
                    { value: "MA", label: "MA" },
                  ]}
                />
              </div>
            </div>
            <ul className="flex flex-1 flex-col">
              {SITES.map((s, i) => {
                const active = on(s.st);
                return (
                  <motion.li
                    key={s.st}
                    animate={{ opacity: active ? 1 : 0.35 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className={`flex flex-1 ${i > 0 ? "border-t border-paper/[0.07]" : ""}`}
                  >
                    <button type="button" onClick={() => setSt(st === s.st ? "all" : s.st)} className="flex w-full items-center gap-4 px-6 py-4 text-left hover:bg-white/[0.02]">
                      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full font-mono text-[11px] ${active ? "bg-accent text-ink" : "border border-paper/15 text-mute"}`}>
                        {s.st}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-[1.05rem] text-paper">{s.name}</span>
                        <span className="block truncate text-[12.5px] text-mute">{s.note}</span>
                      </span>
                      <span className="shrink-0 font-display text-[1.05rem] text-accent">{s.mw}</span>
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
