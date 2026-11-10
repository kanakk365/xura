"use client";

import { useState } from "react";

import { SectionHead } from "./SectionHead";

// Gallons per day per MW (from the source model).
const EVAP = 15000;
const COMM = 2200;
const NEO = 180;
const MAX = 25 * EVAP;

export function NeoWater() {
  const [mw, setMw] = useState(12.5);
  const pct = ((mw - 4.9) / (25 - 4.9)) * 100;

  const bars = [
    { label: "Traditional evaporative data center", note: "High community resistance", gal: Math.round(mw * EVAP), min: 12, hot: false },
    { label: "Typical commercial building (same energy envelope)", note: "Municipal baseline", gal: Math.round(mw * COMM), min: 5, hot: false },
    { label: "NeoCloud alternative cooling", note: "Less than commercial baseline", gal: Math.round(mw * NEO), min: 1.8, hot: true },
  ];

  return (
    <section id="water" className="doc-section">
      <div className="doc-shell">
        <SectionHead
          kicker="Alternative thermal engineering"
          title={
            <>
              Less water than a typical <span className="text-accent">commercial building</span>.
            </>
          }
          lead="Municipalities reject legacy data centers because evaporative cooling towers consume hundreds of thousands of gallons of drinking water a day. Drag the slider to compare daily water demand across our 4.9 to 25 MW range."
        />

        <div className="doc-card mt-9 p-6 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <label htmlFor="vs-mw" className="doc-label">Site power capacity (4.9 to 25.0 MW)</label>
              <p className="mt-2 font-display text-[2rem] font-extrabold leading-none tabular-nums">
                {mw.toFixed(1)} <span className="text-[1rem] font-bold text-mute">MW</span>
              </p>
            </div>
            <p className="font-mono text-[0.72rem] text-mute">Equivalent energy baseline</p>
          </div>

          <input
            id="vs-mw"
            type="range"
            min={4.9}
            max={25}
            step={0.1}
            value={mw}
            onChange={(e) => setMw(Number(e.target.value))}
            className="mt-6 h-1.5 w-full cursor-pointer appearance-none rounded-full accent-[#8bfb03]"
            style={{ background: `linear-gradient(to right, var(--accent) ${pct}%, rgba(255,255,255,0.1) ${pct}%)` }}
          />
          <div className="mt-2 flex justify-between font-mono text-[0.62rem] text-mute">
            <span>4.9 MW</span>
            <span>15.0 MW</span>
            <span>25.0 MW</span>
          </div>

          <ul className="mt-8 flex flex-col gap-6">
            {bars.map((b) => (
              <li key={b.label}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <div>
                    <p className="text-[0.92rem] font-semibold text-paper">{b.label}</p>
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-mute">{b.note}</p>
                  </div>
                  <p className={`font-display text-[1.25rem] font-extrabold tabular-nums ${b.hot ? "text-accent" : "text-paper"}`}>
                    {b.gal.toLocaleString()} <span className="font-mono text-[0.68rem] font-medium text-mute">gal / day</span>
                  </p>
                </div>
                <div className="mt-2.5 h-3 overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className={`h-full rounded-full transition-[width] duration-300 ease-out ${b.hot ? "bg-accent" : "bg-white/35"}`}
                    style={{ width: `${Math.max(b.min, (b.gal / MAX) * 100)}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>

          <div className="doc-callout mt-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <span>
              At <b>{mw.toFixed(1)} MW</b>, NeoCloud uses <b>91.8% less water</b> than a typical commercial building needing the same energy &mdash; removing municipal water resistance entirely.
            </span>
            <span className="doc-tag flex-none">Zero aquifer strain</span>
          </div>
        </div>
      </div>
    </section>
  );
}
