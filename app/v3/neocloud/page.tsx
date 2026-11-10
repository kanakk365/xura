import type { Metadata } from "next";

import { Nav } from "../_components/Nav";
import { Assess } from "../_components/Assess";
import { Em } from "../_components/primitives";
import { SiteFooter } from "../_components/SiteFooter";
import { SpecBand } from "../_components/SpecBand";
import { Statement } from "../_components/Statement";
import { Certainty } from "../_neo/Certainty";
import { Layers } from "../_neo/Layers";
import { NeoHero } from "../_neo/NeoHero";
import { Sites } from "../_neo/Sites";
import { Thesis } from "../_neo/Thesis";
import { Water } from "../_neo/Water";

export const metadata: Metadata = {
  title: "NeoCloud by Xura — 4.9 to 25 MW Modular Data Centers",
  description:
    "Right-sized 4.9 to 25 MW modular data centers across NY, NJ, CT and MA: existing utility power plus a behind-the-meter microgrid, UL9540A storage and closed-loop cooling.",
};

export default function NeoCloudPage() {
  return (
    <main className="flex flex-1 flex-col">
      <Nav cta={{ label: "Reserve capacity", href: "#contact" }} />
      <NeoHero />
      <SpecBand
        label="NeoCloud at a glance"
        top={["4.9 MW", "12.5 MW", "18 MW", "25 MW", "Behind-the-meter microgrid"]}
        bottom={["New York", "New Jersey", "Connecticut", "Massachusetts", "UL9540A storage"]}
      />
      <Statement
        kicker="The bottleneck"
        text="Most 100 MW plans wait on power and water that do not exist yet. NeoCloud is sized to what a site already has."
        foot="Existing utility power, a microgrid of fuel cells, linear generators and UL9540A batteries, and closed-loop cooling that uses less water than a typical commercial building."
      />
      <Thesis />
      <Layers />
      <Water />
      <Sites />
      <Certainty />
      <Assess
        kicker="Reserve modular capacity"
        title={
          <>
            Ready to build <Em>in reality</Em>?
          </>
        }
        lead="Choose a state and power envelope to receive site readiness packages, utility feeder studies and UL9540A microgrid specifications."
        coversTitle="What the data room includes"
        covers={[
          { title: "Site readiness package", body: "Controlled parcels across NY, NJ, CT and MA with as-of-right zoning." },
          { title: "Utility feeder studies", body: "The existing envelope available at each site, without substation upgrades." },
          { title: "Microgrid schematics", body: "Fuel cells, linear generators and UL9540A battery integration." },
          { title: "Water & power specs", body: "Closed-loop cooling performance against commercial baselines." },
        ]}
        formTitle="Northeast portfolio inquiry"
        fields={[
          { kind: "text", name: "email", label: "Work email", placeholder: "you@company.com", type: "email", required: true },
          {
            kind: "select",
            name: "state",
            label: "Target state",
            options: ["New York (NY)", "New Jersey (NJ)", "Connecticut (CT)", "Massachusetts (MA)", "Multi-state cluster"],
          },
          {
            kind: "select",
            name: "capacity",
            label: "Capacity envelope",
            options: ["4.9 MW modular site", "12.5 MW modular site", "18.0 MW modular site", "25.0 MW flagship site"],
          },
          { kind: "textarea", name: "notes", label: "Requirements / timeline", placeholder: "Workload type, timing, density…" },
        ]}
        submit="Request engineering & site package"
        success={{
          title: "Portfolio request logged.",
          body: "Our Northeast infrastructure team is preparing your engineering dossier and will be in touch shortly.",
        }}
      />
      <SiteFooter />
    </main>
  );
}
