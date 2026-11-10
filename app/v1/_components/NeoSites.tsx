"use client";

import { useState } from "react";

import { SectionHead } from "./SectionHead";

type State = "NY" | "NJ" | "CT" | "MA";

const SITES: {
  id: string;
  state: State;
  location: string;
  mw: string;
  utility: string;
  zoning: string;
}[] = [
  { id: "NY-LI-01", state: "NY", location: "Long Island / Metro NY Corridor", mw: "12.5 MW", utility: "Existing feeder + microgrid", zoning: "As-of-right industrial" },
  { id: "NY-HV-02", state: "NY", location: "Hudson Valley Fiber Hub", mw: "20.0 MW", utility: "Dual substation + fuel cells", zoning: "Permitted commercial" },
  { id: "NJ-CN-01", state: "NJ", location: "Central NJ Low-Latency Corridor", mw: "18.0 MW", utility: "Existing utility + linear gen", zoning: "As-of-right commercial" },
  { id: "CT-FC-01", state: "CT", location: "Fairfield County Edge Hub", mw: "4.9 MW", utility: "Immediate feeder + BESS", zoning: "As-of-right approved" },
  { id: "CT-HT-02", state: "CT", location: "I-91 Metro Tech Corridor", mw: "15.0 MW", utility: "Existing utility + microgrid", zoning: "As-of-right industrial" },
  { id: "MA-495-01", state: "MA", location: "I-495 New England Flagship", mw: "25.0 MW", utility: "Utility + full microgrid stack", zoning: "As-of-right technology park" },
];

const NODES: Record<State, { x: number; y: number; name: string }> = {
  NY: { x: 90, y: 120, name: "New York" },
  NJ: { x: 118, y: 220, name: "New Jersey" },
  CT: { x: 215, y: 150, name: "Connecticut" },
  MA: { x: 255, y: 70, name: "Massachusetts" },
};

const FILTERS: ("ALL" | State)[] = ["ALL", "NY", "NJ", "CT", "MA"];

export function NeoSites() {
  const [f, setF] = useState<"ALL" | State>("ALL");
  const shown = SITES.filter((s) => f === "ALL" || s.state === f);

  return (
    <section id="footprint" className="doc-section">
      <div className="doc-shell">
        <SectionHead
          kicker="Controlled site portfolio"
          title={
            <>
              Strategic control across the <span className="text-accent">Northeast</span>.
            </>
          }
          lead="We control sites across New York, New Jersey, Connecticut and Massachusetts — near ultra-low-latency fiber routes, with verified utility feeders and as-of-right zoning."
        />

        <div role="group" aria-label="Filter by state" className="mt-9 flex flex-wrap gap-2">
          {FILTERS.map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={f === s}
              onClick={() => setF(s)}
              className={`rounded-lg border px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] transition-colors ${f === s ? "border-accent bg-accent font-bold text-ink" : "border-line text-mute hover:border-line-strong"}`}
            >
              {s === "ALL" ? "All (4 states)" : s}
            </button>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[0.8fr_1.4fr]">
          <div className="doc-figure flex flex-col">
            <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-mute">
              <span>Northeast corridor topology</span>
              <span className="text-accent">4 states active</span>
            </div>
            <svg viewBox="0 0 340 290" className="h-auto w-full flex-1 p-3" role="img" aria-label="Schematic map of the four Northeast states with controlled sites">
              <g stroke="rgba(255,255,255,0.1)" strokeDasharray="3 5">
                <path d="M90 120 L118 220" />
                <path d="M90 120 L215 150" />
                <path d="M215 150 L255 70" />
                <path d="M118 220 L215 150" />
              </g>
              <path d="M90 120 L215 150 L255 70" fill="none" stroke="var(--accent)" strokeOpacity="0.45" strokeWidth="1.6" />
              {(Object.keys(NODES) as State[]).map((k) => {
                const n = NODES[k];
                const on = f === "ALL" || f === k;
                return (
                  <g key={k} style={{ cursor: "pointer", opacity: on ? 1 : 0.3, transition: "opacity 0.25s" }} onClick={() => setF(f === k ? "ALL" : k)}>
                    <circle cx={n.x} cy={n.y} r="22" fill="rgba(139,251,3,0.08)" stroke="var(--accent)" strokeOpacity={on ? 0.8 : 0.3} />
                    <circle cx={n.x} cy={n.y} r="5" fill="var(--accent)" />
                    <text x={n.x} y={n.y - 30} textAnchor="middle" className="fill-white font-mono" fontSize="11" fontWeight="700">{k}</text>
                    <text x={n.x} y={n.y + 40} textAnchor="middle" className="fill-[#808080] font-mono" fontSize="8.5">{n.name}</text>
                  </g>
                );
              })}
            </svg>
            <div className="doc-figcaption">
              <span><b>LATENCY</b> to NYC / BOS &lt; 2.5 ms</span>
              <span>Select a node to filter</span>
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {shown.map((s) => (
              <li key={s.id} className="doc-card flex flex-col !p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="doc-tag">{s.id}</span>
                  <span className="font-display text-[1.15rem] font-extrabold text-accent">{s.mw}</span>
                </div>
                <h3 className="doc-h3 mt-3 text-[1.02rem]">{s.location}</h3>
                <dl className="mt-4 flex flex-col gap-1.5 border-t border-line pt-3 text-[0.8rem]">
                  {[["Utility", s.utility], ["Zoning", s.zoning], ["Cooling", "Closed-loop waterless"], ["Safety", "UL9540A verified"]].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-3">
                      <dt className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-mute">{k}</dt>
                      <dd className="text-right text-paper/80">{v}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
