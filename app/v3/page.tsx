import type { Metadata } from "next";

import { Nav } from "./_components/Nav";
import { Assess } from "./_components/Assess";
import { Em } from "./_components/primitives";
import { SiteFooter } from "./_components/SiteFooter";
import { SpecBand } from "./_components/SpecBand";
import { Statement } from "./_components/Statement";
import { HomeHero } from "./_home/HomeHero";
import { HubSizer } from "./_home/HubSizer";
import { NapkinTest } from "./_home/NapkinTest";
import { Pillars } from "./_home/Pillars";
import { PowerHub } from "./_home/PowerHub";
import { SolutionsExplorer } from "./_home/SolutionsExplorer";

export const metadata: Metadata = {
  title: "Xura — Realistic Distributed Energy Infrastructure",
  description:
    "Xura deploys bankable energy infrastructure: pre-validated interconnection, zoning and fiber, with generation and storage that goes beyond UL 9540A.",
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <Nav />
      <HomeHero />
      <SpecBand
        label="Xura at a glance"
        top={["UL 9540A + Napkin tested", "2.5C discharge", "$0 landlord capex", "~6 months to energization"]}
        bottom={["350–2,500 sq ft power hubs", "NACS + CCS1", "Lit & dark fiber", "As-of-right zoning"]}
      />
      <Statement
        kicker="Why projects fail"
        text="Most energy and EV infrastructure projects fail because developers pick parcels blindly, then get trapped in utility queues or zoning battles."
        foot="Xura works the other way round: every site is screened for power, zoning, fiber and storage before anything is built."
      />
      <Pillars />
      <PowerHub />
      <NapkinTest />
      <SolutionsExplorer />
      <HubSizer />
      <Assess
        kicker="Assess your site"
        title={
          <>
            Screen your parcel in <Em>48 hours</Em>.
          </>
        }
        lead="Send an address or a portfolio. Our platform checks utility feeder capacity, zoning and fiber, then matches the right hardware to the site."
        coversTitle="What the screening covers"
        covers={[
          { title: "Utility interconnection", body: "Feeder hosting capacity, substation headroom and existing service drops." },
          { title: "As-of-right zoning", body: "Parcel envelope and code analysis for a 350–2,500 sq ft Power Hub." },
          { title: "Fiber proximity", body: "Lit and dark fiber routes for telemetry, dispatch and payments." },
          { title: "Storage & generation fit", body: "UL 9540A + Napkin tested BESS, UPS, fuel cell or linear generator." },
        ]}
        formTitle="Platform screening"
        fields={[
          { kind: "text", name: "email", label: "Work email", placeholder: "you@company.com", type: "email", required: true },
          { kind: "text", name: "address", label: "Property address or interest", placeholder: "123 Commerce Blvd, Edison NJ" },
          {
            kind: "select",
            name: "interest",
            label: "Primary solution interest",
            options: [
              "Full Xura Power Hub",
              "Battery energy storage",
              "UPS solution",
              "Solid-oxide fuel cell",
              "Linear generator",
              "Level 3 charging with 2.5C",
            ],
          },
          { kind: "textarea", name: "notes", label: "Notes", placeholder: "Parcel size, parking count, timeline…" },
        ]}
        submit="Run platform assessment"
        success={{
          title: "Site screening started.",
          body: "Our underwriting team is checking interconnection, zoning, fiber and storage fit for your site. We'll reply within 48 hours.",
        }}
      />
      <SiteFooter />
    </main>
  );
}
