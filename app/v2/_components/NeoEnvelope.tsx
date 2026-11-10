"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

import { SectionHead } from "./SectionHead";

const ENVELOPES = [
  { mw: 4.9, utility: 3.0, fuelCell: 0.9, linear: 0.5, bess: 0.5 },
  { mw: 12.5, utility: 7.0, fuelCell: 2.5, linear: 1.5, bess: 1.5 },
  { mw: 25.0, utility: 13.5, fuelCell: 5.5, linear: 3.5, bess: 2.5 },
];

const LAYERS = [
  { key: "utility", label: "Existing utility power", tone: "var(--accent)" },
  { key: "fuelCell", label: "Solid-oxide fuel cells", tone: "rgba(139,251,3,0.62)" },
  { key: "linear", label: "Linear generators", tone: "rgba(139,251,3,0.38)" },
  { key: "bess", label: "UL9540A batteries", tone: "rgba(255,255,255,0.4)" },
] as const;

export function NeoEnvelope() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(2);
  const env = ENVELOPES[i];

  return (
    <section id="envelope" className="doc-section">
      <div className="doc-shell">
        <SectionHead
          kicker="Modular site sizing"
          title={
            <>
              One architecture, <span className="text-accent">three</span> envelopes.
            </>
          }
          lead="Choose a site envelope to see how existing utility capacity and the on-site microgrid combine. No new utility substation is required at any size."
        />

        <div className="doc-figure mt-9">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-3.5">
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-mute">
              NeoCloud-OS <span className="text-accent">/</span> digital-twin telemetry &middot; Northeast cluster
            </span>
            <div role="tablist" aria-label="Site envelope" className="flex overflow-hidden rounded-md border border-line">
              {ENVELOPES.map((e, idx) => (
                <button
                  key={e.mw}
                  role="tab"
                  aria-selected={i === idx}
                  onClick={() => setI(idx)}
                  className={`px-3.5 py-1.5 font-mono text-[0.7rem] transition-colors ${i === idx ? "bg-accent font-bold text-ink" : "text-mute hover:text-paper"}`}
                >
                  {e.mw.toFixed(1)} MW
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 p-5 sm:p-7 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-mute">Power mix at full load</p>
              <p className="mt-2 font-display text-[2.6rem] font-extrabold leading-none tabular-nums">
                {env.mw.toFixed(1)} <span className="text-[1.2rem] text-accent">MW</span>
              </p>

              <div className="mt-6 flex h-9 w-full overflow-hidden rounded-md border border-line bg-white/[0.03]" role="img" aria-label={`Power mix for a ${env.mw} MW site`}>
                {LAYERS.map((l) => (
                  <motion.div
                    key={l.key}
                    className="h-full border-r border-ink last:border-r-0"
                    style={{ background: l.tone }}
                    initial={false}
                    animate={{ width: `${(env[l.key] / env.mw) * 100}%` }}
                    transition={reduce ? { duration: 0 } : { duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                  />
                ))}
              </div>

              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {LAYERS.map((l) => (
                  <li key={l.key} className="flex items-center justify-between gap-3 rounded-lg border border-line bg-ink-2 px-4 py-3 text-[0.85rem] text-mute">
                    <span className="flex items-center gap-2.5">
                      <i className="h-2 w-2 rounded-[2px]" style={{ background: l.tone }} />
                      {l.label}
                    </span>
                    <b className="font-mono text-paper tabular-nums">{env[l.key].toFixed(1)} MW</b>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <div className="stat-tile">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-mute">Cooling water usage</span>
                <p className="n mt-3 text-[1.6rem]">68% less H₂O</p>
                <span className="l">than a standard commercial building drawing the same energy.</span>
              </div>
              <div className="stat-tile">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-mute">BESS safety standard</span>
                <p className="n mt-3 text-[1.6rem]">UL9540A</p>
                <span className="l">Cell, module, unit and installation-level fire-safety testing.</span>
              </div>
              <div className="doc-callout !py-3.5 text-[0.88rem]">
                <b>No new utility substation required</b> at {env.mw.toFixed(1)} MW.
              </div>
            </div>
          </div>

          <div className="doc-figcaption">
            <span><b>FIG.</b> Site power mix by envelope</span>
            <span>Indicative split &middot; subject to site study</span>
          </div>
        </div>
      </div>
    </section>
  );
}
