import type { Metadata } from "next";

import { ContactForm } from "../_components/ContactForm";
import { NeoEnvelope } from "../_components/NeoEnvelope";
import { NeoLayers } from "../_components/NeoLayers";
import { NeoSites } from "../_components/NeoSites";
import { NeoWater } from "../_components/NeoWater";
import { PageHero } from "../_components/PageHero";
import { SectionHead } from "../_components/SectionHead";
import { SiteFooter } from "../_components/SiteFooter";

export const metadata: Metadata = {
  title: "Xura Neo Cloud — 4.9 to 25 MW Modular Data Centers",
  description:
    "Right-sized 4.9 MW to 25 MW modular data centers across NY, NJ, CT and MA, powered by existing utility capacity and a behind-the-meter microgrid with closed-loop cooling.",
};

const WISHING = [
  { t: "5 to 8+ year utility interconnection queue", b: "Requires new transmission lines and substations that stall indefinitely." },
  { t: "Excessive municipal water evaporation", b: "Evaporative cooling towers drain local aquifers and spark immediate community opposition." },
  { t: "Hostile zoning and permitting moratoriums", b: "New zoning rules, variances and environmental litigation that kill timelines." },
];

const REALITY = [
  { t: "Existing utility power + integrated microgrid", b: "Available utility feeders combined with solid-oxide fuel cells, linear generators and UL9540A batteries." },
  { t: "Less water than a typical commercial building", b: "Closed-loop cooling needs virtually no municipal water compared with an office property of equal energy." },
  { t: "Zero new zoning rules required", b: "Controlled parcels across NY, NJ, CT and MA, designed for friction-free implementation." },
];

const BENTO = [
  { t: "No new zoning rules", b: "Footprint, power envelope and water use mirror or beat standard commercial buildings, so we avoid contentious rezoning variances." },
  { t: "Fuel cells + linear generation", b: "A behind-the-meter microgrid bridges local utility power with continuous fuel cells and dispatchable linear generators." },
  { t: "Realistic implementation", b: "Removes project failure caused by insufficient utility power, excessive water demand or community permitting blockades." },
];

export default function NeoCloudPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        kicker="Modular infrastructure · NY, NJ, CT & MA"
        title={
          <>
            While others wish for 100&nbsp;MW, we build the 25&nbsp;MW <span className="text-accent">reality</span>.
          </>
        }
        lead="Legacy data centers meet fierce resistance over energy and water demand. NeoCloud solves the bottleneck with right-sized 4.9 to 25 MW modular systems — existing utility power plus a behind-the-meter microgrid of fuel cells, linear generators and UL9540A batteries — using less water than a typical commercial building."
        primary={{ label: "Explore controlled Northeast sites", href: "#footprint" }}
        secondary={{ label: "See reality vs. wishing", href: "#reality" }}
        stats={[
          { figure: "4.9–25", suffix: "MW", label: "Modular site sizing" },
          { figure: "UL9540A", label: "Highest-tier battery safety" },
          { figure: "< Office", suffix: "H₂O", label: "Alternative waterless cooling" },
          { figure: "NY·NJ·CT·MA", label: "Controlled Northeast footprint" },
        ]}
      />

      <NeoEnvelope />

      <section id="reality" className="doc-section">
        <div className="doc-shell">
          <SectionHead
            kicker="The thesis · Reality vs. wishing"
            title={
              <>
                Stop wishing for power that isn&rsquo;t there. Plan for <span className="text-accent">reality</span>.
              </>
            }
            lead="Across the country, massive data-center proposals are collapsing under utility queue delays, municipal water shortages and zoning referendums. NeoCloud removes execution risk by building within existing envelopes."
          />

          <div className="mt-9 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <article className="doc-card flex flex-col p-6 sm:p-8">
              <span className="doc-tag w-fit !bg-white/[0.06] !text-mute">High failure rate</span>
              <h3 className="doc-h3 mt-4 text-[1.4rem]">The &ldquo;wishing&rdquo; approach</h3>
              <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-mute">Speculative 100 MW+ megaprojects</p>
              <p className="mt-3 text-[0.92rem] text-mute">
                Announcing massive campuses without verified utility interconnections, demanding millions of gallons of municipal water, and fighting multi-year rezoning wars.
              </p>
              <ul className="mt-6 flex flex-col gap-4 border-t border-line pt-5">
                {WISHING.map((w) => (
                  <li key={w.t} className="flex gap-3">
                    <span aria-hidden="true" className="mt-1 grid h-5 w-5 flex-none place-items-center rounded-[4px] border border-line font-mono text-[0.7rem] text-mute">×</span>
                    <div>
                      <p className="text-[0.92rem] font-semibold text-paper">{w.t}</p>
                      <p className="mt-1 text-[0.84rem] leading-[1.5] text-mute">{w.b}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-6 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-mute">
                Planning outcome: <span className="text-paper/80">unpredictable / stranded capital</span>
              </p>
            </article>

            <article className="doc-card flex flex-col !border-accent bg-[linear-gradient(180deg,rgba(139,251,3,0.08),var(--ink-2))] p-6 sm:p-8">
              <span className="doc-tag w-fit">Realistic implementation</span>
              <h3 className="doc-h3 mt-4 text-[1.4rem]">The NeoCloud reality</h3>
              <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">Right-sized 4.9 to 25 MW modular sites</p>
              <p className="mt-3 text-[0.92rem] text-paper/70">
                Engineered around existing Northeast utility infrastructure, enhanced by an on-site clean microgrid and closed-loop waterless cooling that communities welcome.
              </p>
              <ul className="mt-6 flex flex-col gap-4 border-t border-line pt-5">
                {REALITY.map((w) => (
                  <li key={w.t} className="flex gap-3">
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-0.5 flex-none">
                      <path d="M4 10.5L8 14.5L16 5.5" stroke="#8bfb03" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <p className="text-[0.92rem] font-semibold text-paper">{w.t}</p>
                      <p className="mt-1 text-[0.84rem] leading-[1.5] text-paper/60">{w.b}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-6 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent">
                Planning outcome: on-time / bankable execution
              </p>
            </article>
          </div>
        </div>
      </section>

      <NeoLayers />
      <NeoWater />
      <NeoSites />

      <section id="safety" className="doc-section">
        <div className="doc-shell">
          <SectionHead
            kicker="Engineered for certainty"
            title={
              <>
                Every obstacle removed before <span className="text-accent">groundbreaking</span>.
              </>
            }
            lead="By designing modular systems around existing power, ultra-safe UL9540A storage and waterless cooling, NeoCloud turns speculative masterplans into bankable deployments."
          />

          <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-6">
            <article className="doc-card flex flex-col p-6 sm:p-7 md:col-span-4">
              <span className="doc-tag w-fit">UL9540A tested &amp; verified</span>
              <h3 className="doc-h3 mt-4 text-[1.3rem]">Safe battery systems that meet the highest UL9540A testing standards.</h3>
              <p className="mt-3 text-[0.92rem] leading-[1.6] text-mute">
                Fire safety is paramount in Northeast municipalities. Our modular storage undergoes UL9540A testing at the cell, module, unit and installation level — ensuring zero thermal-runaway propagation and full compliance with local fire marshals.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[["Cell level", "Verified pass"], ["Module level", "Contained"], ["Installation", "UL9540A compliant"]].map(([k, v]) => (
                  <div key={k} className="stat-tile !p-4">
                    <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-mute">{k}</p>
                    <p className="mt-2.5 font-display text-[1rem] font-extrabold text-paper">{v}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="doc-card flex flex-col p-6 sm:p-7 md:col-span-2">
              <span className="doc-tag w-fit">Modular sweet spot</span>
              <h3 className="doc-h3 mt-4 text-[1.2rem]">4.9 to 25 MW modular density</h3>
              <p className="mt-3 text-[0.88rem] leading-[1.6] text-mute">
                Small enough to fit existing utility capacity and commercial parcels; powerful enough for high-density AI training, inference and enterprise cloud clusters.
              </p>
              <p className="mt-auto border-t border-line pt-4 font-mono text-[0.72rem] text-accent">4.9 MW → 12.5 MW → 25 MW</p>
            </article>

            {BENTO.map((b) => (
              <article key={b.t} className="doc-card md:col-span-2">
                <h3 className="doc-h3">{b.t}</h3>
                <p className="mt-2.5 text-[0.86rem] leading-[1.55] text-mute">{b.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="doc-section">
        <div className="doc-shell">
          <div className="doc-banner !py-10">
            <p className="kicker justify-center">Deploy without delay</p>
            <p className="mt-4 font-display text-[clamp(1.6rem,3.6vw,2.4rem)] font-extrabold leading-[1.1]">Ready to build in reality?</p>
            <p className="mx-auto mt-3 max-w-[60ch] font-body text-[0.95rem] font-normal text-paper/70">
              Review our controlled 4.9 to 25 MW sites across New York, New Jersey, Connecticut and Massachusetts, complete with microgrid schematics and UL9540A safety documentation.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#contact" className="doc-btn">Request Northeast site data room</a>
              <a href="#water" className="doc-btn-ghost">Review water &amp; power specs</a>
            </div>
          </div>
        </div>
      </section>

      <ContactForm
        title={
          <>
            Reserve <span className="text-accent">modular capacity</span>.
          </>
        }
        lead="Select a target state and power envelope to receive site-readiness packages, utility feeder studies and UL9540A microgrid specifications."
        tag="Northeast portfolio inquiry"
        points={[
          "Site-readiness package for your target state",
          "Utility feeder study and microgrid schematic",
          "UL9540A safety documentation",
        ]}
        fields={[
          { label: "Name", id: "name", placeholder: "Jane Doe" },
          { label: "Company", id: "company", placeholder: "Acme Compute" },
          { label: "Work email", id: "email", type: "email", placeholder: "jane@acme.com" },
        ]}
        choices={[
          { label: "Target state", name: "state", options: ["New York", "New Jersey", "Connecticut", "Massachusetts", "Multi-state cluster"] },
          { label: "Capacity envelope", name: "mw", options: ["4.9 MW", "12.5 MW", "18.0 MW", "25.0 MW"] },
        ]}
        notesPlaceholder="Project requirements and timeline..."
        submitLabel="Request engineering & site package"
        idPrefix="neo"
      />
      <SiteFooter />
    </main>
  );
}
