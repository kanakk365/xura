"use client";

import { useState } from "react";

import { SectionHead } from "./SectionHead";

export function SiteConfigurator() {
  const [chargers, setChargers] = useState(6);

  const footprint = Math.round(350 + ((chargers - 3) / 17) * (2500 - 350));
  const boost = (chargers * 0.25).toFixed(2);
  const pct = ((chargers - 3) / 17) * 100;

  const tiles = [
    { label: "Power hub footprint", value: `${footprint.toLocaleString()} sq ft`, sub: "Can sit up to 500 ft from the parking stalls" },
    { label: "2.5C BESS peak boost", value: `${boost} MW`, sub: "UL 9540A + Napkin tested LFP storage" },
    { label: "Turnaround", value: "~6 months", sub: "From signed LOI to operational Power Hub" },
    { label: "Contract structure", value: "10 + 10 years", sub: "$0 landlord CapEx · guaranteed lease + revenue share" },
  ];

  return (
    <section id="configurator" className="doc-section">
      <div className="doc-shell">
        <SectionHead
          kicker="Real estate & infrastructure estimator"
          title={
            <>
              Size your Xura <span className="text-accent">Power Hub</span> in seconds.
            </>
          }
          lead="From a compact 3-charger urban retail corner (350 sq ft Power Hub) to a 20-charger regional travel plaza (2,500 sq ft), see how 2.5C discharge scales with zero capital outlay from the property owner."
        />

        <div className="doc-card mt-9 p-6 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <label htmlFor="vs-chargers" className="doc-label">Dual-port Level 3 chargers (3 to 20)</label>
              <p className="mt-2 font-display text-[2rem] font-extrabold leading-none tabular-nums">
                {chargers} <span className="text-[1rem] font-bold text-mute">chargers</span>
              </p>
            </div>
            <p className="font-mono text-[0.78rem] text-accent">Serves {chargers * 2} EVs simultaneously</p>
          </div>

          <input
            id="vs-chargers"
            type="range"
            min={3}
            max={20}
            step={1}
            value={chargers}
            onChange={(e) => setChargers(Number(e.target.value))}
            className="mt-6 h-1.5 w-full cursor-pointer appearance-none rounded-full accent-[#8bfb03]"
            style={{ background: `linear-gradient(to right, var(--accent) ${pct}%, rgba(255,255,255,0.1) ${pct}%)` }}
          />
          <div className="mt-2 flex justify-between font-mono text-[0.62rem] text-mute">
            <span>3 (min)</span>
            <span>10</span>
            <span>20 (max)</span>
          </div>

          <dl className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {tiles.map((t) => (
              <div key={t.label} className="stat-tile">
                <dt className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-mute">{t.label}</dt>
                <dd className="n mt-3 text-[1.5rem] tabular-nums">{t.value}</dd>
                <dd className="l">{t.sub}</dd>
              </div>
            ))}
          </dl>

          <div className="doc-callout mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <span>
              Have an existing parcel or portfolio? The Xura platform can screen an address for utility feeder capacity, zoning and fiber in <b>48 hours</b>.
            </span>
            <a href="#contact" className="doc-btn flex-none !px-5 !py-3 !text-[0.9rem]">Run a free site assessment</a>
          </div>
        </div>
      </div>
    </section>
  );
}
