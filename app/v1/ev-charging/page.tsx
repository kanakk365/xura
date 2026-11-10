import type { Metadata } from "next";

import { FAQ } from "../../components/FAQ";
import { Problem } from "../../components/Problem";
import { Projects } from "../../components/Projects";
import { Solutions } from "../../components/Solutions";
import { Strategy } from "../../components/Strategy";
import { Advertising } from "../_components/Advertising";
import { ContactForm } from "../_components/ContactForm";
import { PageHero } from "../_components/PageHero";
import { PartnerDashboard } from "../_components/PartnerDashboard";
import { SiteFooter } from "../_components/SiteFooter";

export const metadata: Metadata = {
  title: "Xura — Level 3 EV Charging",
  description:
    "Level 3 DC fast charging, buffered by storage and engineered inside the capacity your meter already delivers. Partner dashboard and charger-screen advertising included.",
};

export default function EvChargingPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        kicker="Level 3 EV Charging"
        title={
          <>
            Fast charging, built for today&rsquo;s <span className="text-accent">grid</span>.
          </>
        }
        lead={
          <>
            Xura designs and delivers Level&nbsp;3 DC fast charging for
            commercial and fleet facilities &mdash; buffered by battery storage
            and engineered around real site conditions, not theoretical grid
            availability.
          </>
        }
        primary={{ label: "Request a site review", href: "#contact" }}
        secondary={{ label: "See the partner dashboard", href: "#partner-dashboard" }}
        image="/heroimg.png"
        fog
        stats={[
          { figure: "200+", label: "Energy systems deployed" },
          { figure: "6–12", suffix: "MO", label: "To energized, with approvals" },
          { figure: "UL", suffix: "9540A", label: "Safety-certified storage" },
        ]}
      />
      <Problem />
      <Solutions />
      <Projects />
      <Strategy />
      <PartnerDashboard />
      <Advertising />
      <FAQ />
      <ContactForm
        title={
          <>
            Start with a <span className="text-accent">site review</span>.
          </>
        }
        lead="Every site presents different constraints. A site review gives you the clarity to judge feasibility and a realistic path forward — before design or capital decisions are made."
        tag="Project intake"
        points={[
          "Electrical infrastructure & capacity assessment",
          "Interconnection and permitting feasibility",
          "Right-sized charging options before contracts",
        ]}
        fields={[
          { label: "Name", id: "name", placeholder: "Jane Doe" },
          { label: "Company", id: "company", placeholder: "Acme Logistics" },
          { label: "Email", id: "email", type: "email", placeholder: "jane@acme.com" },
        ]}
        choices={[
          { label: "Site type", name: "site", options: ["Fleet depot", "Commercial CRE", "Multifamily", "Industrial / other"] },
          { label: "Timeline", name: "time", options: ["< 6 months", "6–12 months", "12+ months", "Exploring"] },
        ]}
        notesPlaceholder="Service size, parking count, anything else..."
        submitLabel="Request a site review"
        idPrefix="ev"
      />
      <SiteFooter />
    </main>
  );
}
