"use client";

import { motion } from "motion/react";
import { useState } from "react";

import { Count, EASE, Em, SectionHead } from "../_components/primitives";

/* Gallons per MW per day, from the client's model. */
const RATES = { evap: 15000, comm: 2200, neo: 180 };
const MAX = 25 * RATES.evap;

export function Water() {
  const [mw, setMw] = useState(12.5);
  const evap = Math.round(mw * RATES.evap);
  const comm = Math.round(mw * RATES.comm);
  const neo = Math.round(mw * RATES.neo);
  const less = (1 - RATES.neo / RATES.comm) * 100;
  const pct = ((mw - 4.9) / (25 - 4.9)) * 100;

  const rows = [
    { label: "Traditional evaporative data center", note: "High community resistance", v: evap, min: 12, tone: "bg-[#ff5a1f]/80", text: "text-[#ff8a5c]" },
    { label: "Typical commercial building", note: "Same energy envelope · municipal baseline", v: comm, min: 5, tone: "bg-paper/55", text: "text-paper" },
    { label: "NeoCloud alternative cooling", note: "Closed loop · less than commercial baseline", v: neo, min: 1.8, tone: "bg-accent", text: "text-accent" },
  ];

  return (
    <section id="water" className="op-section">
      <div className="op-shell">
        <SectionHead
          kicker="Alternative thermal engineering"
          title={
            <>
              Less water than a <Em>typical commercial building</Em>.
            </>
          }
          lead="Municipalities reject legacy data centers because evaporative towers consume hundreds of thousands of gallons of drinking water a day. Drag to compare across our 4.9 to 25 MW range."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <div className="op-plate">
            <div className="op-plate-bar">
              <span>
                <b>Daily water demand</b> · gallons
              </span>
              <span>4.9 – 25 MW</span>
            </div>
            <div className="px-6 pt-6 sm:px-8">
              <div className="flex items-end justify-between gap-4">
                <p className="op-label">Site power capacity</p>
                <p className="font-display text-[2.4rem] leading-none text-paper">
                  {mw.toFixed(1)}
                  <span className="ml-2 text-[11px] uppercase tracking-[0.16em] text-accent">MW</span>
                </p>
              </div>
              <input
                type="range"
                min={4.9}
                max={25}
                step={0.1}
                value={mw}
                onChange={(e) => setMw(+e.target.value)}
                aria-label="Site power capacity in megawatts"
                className="op-range mt-5"
                style={{ ["--pct" as string]: `${pct}%` }}
              />
              <div className="mt-1 flex justify-between op-label !text-[9px]">
                <span>4.9 MW</span>
                <span>15 MW</span>
                <span>25 MW</span>
              </div>
            </div>
            <ul className="flex flex-1 flex-col justify-center gap-7 px-6 py-8 sm:px-8">
              {rows.map((r) => (
                <li key={r.label}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <span className="font-display text-[1.02rem] text-paper">{r.label}</span>
                    <span className={`font-display text-[1.35rem] ${r.text}`}>
                      <Count value={r.v} duration={0.4} />
                      <span className="ml-1.5 text-[10px] uppercase tracking-[0.14em] text-mute">gal/day</span>
                    </span>
                  </div>
                  <div className="mt-2.5 h-3 overflow-hidden rounded-full bg-paper/[0.06]">
                    <motion.div
                      className={`h-full rounded-full ${r.tone}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.max(r.min, (r.v / MAX) * 100)}%` }}
                      transition={{ duration: 0.6, ease: EASE }}
                    />
                  </div>
                  <p className="mt-1.5 text-[12.5px] text-mute">{r.note}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="op-plate justify-between bg-[radial-gradient(120%_80%_at_100%_0%,rgba(139,251,3,0.14),transparent_60%)] p-7 sm:p-9">
            <div>
              <p className="op-label">At {mw.toFixed(1)} MW, NeoCloud uses</p>
              <p className="mt-5 font-display text-[clamp(3.6rem,7vw,5.4rem)] leading-[0.95] text-accent">
                {less.toFixed(1)}%
              </p>
              <p className="mt-3 font-display text-[1.4rem] leading-snug text-paper">less water than a commercial building of the same energy.</p>
            </div>
            <ul className="mt-8 flex flex-col border-y border-paper/[0.08]">
              {[
                { k: "Evaporative tower", v: RATES.evap, c: "text-[#ff8a5c]" },
                { k: "Commercial building", v: RATES.comm, c: "text-paper" },
                { k: "NeoCloud closed loop", v: RATES.neo, c: "text-accent" },
              ].map((r) => (
                <li key={r.k} className="flex items-baseline justify-between gap-4 border-t border-paper/[0.06] py-3 first:border-t-0">
                  <span className="text-[13.5px] text-paper/70">{r.k}</span>
                  <span className={`font-mono text-[12.5px] ${r.c}`}>{r.v.toLocaleString("en-US")} gal / MW / day</span>
                </li>
              ))}
            </ul>
            <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/[0.08]">
              <div className="bg-[#0b0b0b] px-4 py-4">
                <dt className="op-label !text-[9px]">Saved vs. evaporative</dt>
                <dd className="mt-1.5 font-display text-[1.25rem] text-paper">
                  <Count value={evap - neo} duration={0.4} />
                </dd>
              </div>
              <div className="bg-[#0b0b0b] px-4 py-4">
                <dt className="op-label !text-[9px]">Aquifer strain</dt>
                <dd className="mt-1.5 font-display text-[1.25rem] text-accent">Zero</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
