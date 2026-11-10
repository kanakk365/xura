import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "./_components/ContactForm";
import { HardwareSolutions } from "./_components/HardwareSolutions";
import { NapkinTest } from "./_components/NapkinTest";
import { PageHero } from "./_components/PageHero";
import { Pillars } from "./_components/Pillars";
import { SectionHead } from "./_components/SectionHead";
import { SiteConfigurator } from "./_components/SiteConfigurator";
import { SiteFooter } from "./_components/SiteFooter";

export const metadata: Metadata = {
  title: "Xura — Realistic Distributed Energy Infrastructure",
  description:
    "Xura deploys realistic, bankable distributed energy infrastructure: a proprietary site platform, UL 9540A + Napkin-tested storage, on-site generation and 2.5C Level 3 charging.",
};

const READINESS = [
  { k: "Proprietary platform", v: "Pre-vetted", t: "4 core vectors", b: "Every site is screened for feeder headroom, as-of-right zoning, fiber and modular generation fit." },
  { k: "Battery thermal safety", v: "Napkin tested", t: "Beyond UL 9540A", b: "A paper napkin on the casing stays uncharred during an 840°C core event." },
  { k: "High-speed discharge", v: "Level 3 + grid", t: "2.5C peak output", b: "Ultra-fast NACS and CCS1 charging and peak shaving without waiting on transformer upgrades." },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        kicker="Energy · Real estate · Transportation"
        title={
          <>
            Deploying <span className="text-accent">realistic</span> energy infrastructure.
          </>
        }
        lead="Xura is a distributed energy company focused on realistic, bankable infrastructure. Our proprietary platform finds viable utility interconnections, zoning approvals, high-capacity fiber, and the generation and ultra-safe storage to match."
        primary={{ label: "Explore the five solutions", href: "#solutions" }}
        secondary={{ label: "See the Napkin Test", href: "#napkin-test" }}
        stats={[
          { figure: "350–2,500", suffix: "SQ FT", label: "Power Hub footprint" },
          { figure: "~6", suffix: "MO", label: "From LOI to operational" },
          { figure: "2.5C", label: "Peak discharge rate" },
        ]}
        aside={
          <div className="flex flex-col gap-3">
            {READINESS.map((r) => (
              <div key={r.k} className="doc-card bg-ink-2/90 backdrop-blur-sm !p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mute">{r.k}</span>
                  <span className="doc-tag">{r.v}</span>
                </div>
                <p className="mt-2.5 font-display text-[1.2rem] font-extrabold leading-none">{r.t}</p>
                <p className="mt-2 text-[0.8rem] leading-[1.5] text-mute">{r.b}</p>
              </div>
            ))}
          </div>
        }
      />
      <Pillars />
      <NapkinTest />
      <HardwareSolutions />
      <SiteConfigurator />

      <section className="doc-section">
        <div className="doc-shell">
          <SectionHead
            kicker="Two ways in"
            title={
              <>
                Pick the <span className="text-accent">workload</span>.
              </>
            }
          />
          <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Link href="/v1/ev-charging" className="doc-card group block p-7 transition-colors hover:border-accent">
              <span className="doc-tag">Level 3 EV charging</span>
              <h3 className="doc-h3 mt-4 text-[1.4rem]">Charging that fits inside your meter.</h3>
              <p className="mt-3 text-[0.92rem] text-mute">Storage-buffered DC fast charging, a partner dashboard for hosts, and charger-screen advertising.</p>
              <span className="mt-6 inline-block font-mono text-[0.78rem] text-accent">View EV Charging &rarr;</span>
            </Link>
            <Link href="/v1/neocloud" className="doc-card group block p-7 transition-colors hover:border-accent">
              <span className="doc-tag">Neo Cloud</span>
              <h3 className="doc-h3 mt-4 text-[1.4rem]">4.9 to 25 MW modular data centers.</h3>
              <p className="mt-3 text-[0.92rem] text-mute">Right-sized sites across NY, NJ, CT and MA, powered by existing utility capacity and a behind-the-meter microgrid.</p>
              <span className="mt-6 inline-block font-mono text-[0.78rem] text-accent">View Neo Cloud &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <ContactForm
        title={
          <>
            Assess your <span className="text-accent">site</span> or hardware need.
          </>
        }
        lead="Send an address or an infrastructure interest. Our underwriting team screens utility interconnection, zoning envelope, fiber proximity and storage configuration."
        tag="Platform screening"
        points={[
          "Utility feeder capacity and interconnection screen",
          "As-of-right zoning and permitting envelope",
          "Fiber proximity and the right-sized hardware mix",
        ]}
        fields={[
          { label: "Name", id: "name", placeholder: "Jane Doe" },
          { label: "Company", id: "company", placeholder: "Acme Properties" },
          { label: "Work email", id: "email", type: "email", placeholder: "jane@acme.com" },
          { label: "Property address or interest", id: "addr", placeholder: "123 Main St, Hicksville NY" },
        ]}
        choices={[
          {
            label: "Primary solution interest",
            name: "interest",
            options: ["Full Power Hub", "Battery storage", "UPS", "Fuel cell", "Linear generator", "Level 3 charging"],
          },
        ]}
        notesPlaceholder="Service size, parcel details, timeline..."
        submitLabel="Run platform assessment"
        idPrefix="home"
      />
      <SiteFooter />
    </main>
  );
}
