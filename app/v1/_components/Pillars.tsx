import { SectionHead } from "./SectionHead";

const PILLARS = [
  {
    code: "01",
    title: "Viable utility interconnections",
    body: "The platform maps distribution-feeder hosting capacity, substation thermal headroom and existing commercial service drops — finding sites where power can connect quickly without a multi-year utility rebuild.",
    key: "Queue risk",
    value: "Eliminated",
  },
  {
    code: "02",
    title: "Pre-cleared zoning approval",
    body: "Automated municipal-code and parcel-envelope analysis confirms our compact 350 to 2,500 sq ft Power Hubs qualify for streamlined, as-of-right permitting — compressing years into about six months from LOI.",
    key: "Turnaround",
    value: "~6 months",
  },
  {
    code: "03",
    title: "High-capacity fiber routes",
    body: "Lit and dark fiber is overlaid onto energy parcels, enabling ultra-low-latency telemetry, autonomous microgrid dispatch, edge compute and 99.99% uptime payment and charger orchestration.",
    key: "Connectivity",
    value: "Redundant fiber",
  },
  {
    code: "04",
    title: "Generation & safe storage",
    body: "Where grid power is constrained, Xura deploys solid-oxide fuel cells, linear generators, industrial UPS and 2.5C battery storage engineered above and beyond UL 9540A.",
    key: "Safety tier",
    value: "Napkin tested",
  },
];

export function Pillars() {
  return (
    <section id="platform" className="doc-section">
      <div className="doc-shell">
        <SectionHead
          kicker="Proprietary intelligence platform"
          title={
            <>
              How Xura turns energy ambition into{" "}
              <span className="text-accent">realistic</span> deployment.
            </>
          }
          lead="Most energy and EV infrastructure projects fail because developers pick parcels blindly and get trapped in utility queues or zoning battles. Xura's platform pre-validates four pillars before anything is built."
        />

        <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2">
          {PILLARS.map((p) => (
            <article key={p.code} className="doc-card flex flex-col p-6 sm:p-7">
              <span className="doc-tag w-fit">Pillar {p.code}</span>
              <h3 className="doc-h3 mt-4 text-[1.25rem]">{p.title}</h3>
              <p className="mt-3 text-[0.92rem] leading-[1.6] text-mute">{p.body}</p>
              <div className="mt-auto pt-6">
                <div className="flex items-baseline justify-between gap-3 border-t border-line pt-4">
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-mute">{p.key}</span>
                  <span className="font-display text-[1.05rem] font-extrabold text-accent">{p.value}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
