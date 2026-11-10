"use client";

import { useState } from "react";

import { SectionHead } from "./SectionHead";

const LAYERS = [
  {
    n: "04",
    title: "UL9540A safe battery storage",
    tag: "Zero propagation",
    body: "Meets the highest UL9540A fire and thermal-runaway testing standards, and gives AI and cloud workloads instantaneous, millisecond transient buffering.",
  },
  {
    n: "03",
    title: "Dispatchable linear generators",
    tag: "Dynamic load following",
    body: "Low-temperature, fuel-flexible linear prime movers that ramp up and down in seconds to match compute demand, without combustion spikes.",
  },
  {
    n: "02",
    title: "High-efficiency fuel cells",
    tag: "24/7 clean baseload",
    body: "Electrochemical generation without combustion: whisper-quiet, continuous baseload with near-zero NOx and particulate emissions.",
  },
  {
    n: "01",
    title: "Existing utility power foundation",
    tag: "Immediate interconnect",
    body: "Uses the utility power envelope already available at our controlled sites, avoiding five-year substation upgrades and transmission delays.",
  },
];

export function NeoLayers() {
  const [sel, setSel] = useState<number | null>(null);

  return (
    <section id="microgrid" className="doc-section">
      <div className="doc-shell">
        <SectionHead
          kicker="Modular power architecture"
          title={
            <>
              Four layers of power harmony. <span className="text-accent">Engineered as one</span>.
            </>
          }
          lead="Select a layer to inspect how NeoCloud pairs existing utility capacity with a resilient behind-the-meter microgrid."
        />

        <div className="mt-9 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => setSel(null)}
              className={`rounded-lg border px-4 py-2.5 text-left font-mono text-[0.72rem] uppercase tracking-[0.14em] transition-colors ${sel === null ? "border-accent text-accent" : "border-line text-mute hover:border-line-strong"}`}
            >
              Show all 4 layers
            </button>
            {LAYERS.map((l, idx) => {
              const active = sel === idx;
              return (
                <button
                  key={l.n}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSel(active ? null : idx)}
                  className={`doc-card text-left transition-colors ${active ? "!border-accent bg-[var(--accent-wash)]" : "hover:border-line-strong"}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="doc-tag">Layer {l.n}</span>
                    <span className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-accent">{l.tag}</span>
                  </div>
                  <h3 className="doc-h3 mt-3">{l.title}</h3>
                  <p className="mt-2 text-[0.86rem] leading-[1.55] text-mute">{l.body}</p>
                </button>
              );
            })}
          </div>

          <div className="doc-figure flex flex-col">
            <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-mute">
              <span>Exploded hardware stack <span className="text-accent">/</span> {sel === null ? "all 4 modules active" : `layer ${LAYERS[sel].n}`}</span>
              <span className="hidden text-accent sm:inline">N+1 islandable</span>
            </div>

            <div className="flex flex-1 items-center justify-center p-5">
              <svg viewBox="0 0 400 340" className="h-auto w-full max-w-[440px]" role="img" aria-label="Exploded stack of four power layers">
                {LAYERS.map((l, idx) => {
                  const y = 20 + idx * 78;
                  const on = sel === null || sel === idx;
                  const hot = sel === idx;
                  return (
                    <g key={l.n} style={{ transition: "opacity 0.3s", opacity: on ? 1 : 0.22 }}>
                      {/* slab: top face + front face */}
                      <path d={`M 60 ${y + 20} L 200 ${y} L 340 ${y + 20} L 200 ${y + 40} Z`} fill={hot ? "rgba(139,251,3,0.22)" : "#181818"} stroke={hot ? "var(--accent)" : "rgba(255,255,255,0.22)"} strokeWidth="1.4" />
                      <path d={`M 60 ${y + 20} L 60 ${y + 34} L 200 ${y + 54} L 200 ${y + 40} Z`} fill="#0e0e0e" stroke="rgba(255,255,255,0.14)" />
                      <path d={`M 340 ${y + 20} L 340 ${y + 34} L 200 ${y + 54} L 200 ${y + 40} Z`} fill="#080808" stroke="rgba(255,255,255,0.14)" />
                      <text x="200" y={y + 24} textAnchor="middle" className="font-mono" fontSize="10" fill={hot ? "var(--accent)" : "#808080"}>
                        LAYER {l.n}
                      </text>
                      <rect x="150" y={y + 8} width="6" height="6" rx="1.5" fill="var(--accent)" opacity={on ? 1 : 0.4} />
                    </g>
                  );
                })}
                <path d="M 200 6 V 334" stroke="rgba(139,251,3,0.35)" strokeDasharray="3 5" />
              </svg>
            </div>

            <div className="border-t border-line px-5 py-4">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-accent">Integrated system harmony &middot; 99.999% availability</p>
              <p className="mt-2 text-[0.85rem] leading-[1.55] text-mute">
                By combining existing utility distribution with fuel cells, linear generators and UL9540A batteries, NeoCloud deploys 4.9 to 25 MW sites without waiting on utility grid expansion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
