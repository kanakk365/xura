import type { Metadata } from "next";

import { Nav } from "../_components/Nav";
import { SiteFooter } from "../_components/SiteFooter";
import { Advertising } from "../_ev/Advertising";
import { PartnerDashboard } from "../_ev/PartnerDashboard";
import { Contact } from "../_stage/Contact";
import { FAQ } from "../_stage/FAQ";
import { Hero } from "../_stage/Hero";
import { Problem } from "../_stage/Problem";
import { Projects } from "../_stage/Projects";
import { Solutions } from "../_stage/Solutions";
import { Strategy } from "../_stage/Strategy";

export const metadata: Metadata = {
  title: "Xura — Level 3 EV Charging",
  description:
    "Level 3 EV charging and battery storage for commercial and fleet facilities, with a live partner dashboard and advertising across the Xura network.",
};

export default function EvChargingPage() {
  return (
    <main className="flex flex-1 flex-col">
      <Nav cta={{ label: "Host a charging hub", href: "#contact" }} />
      <Hero />
      <Problem />
      <Solutions />
      <PartnerDashboard />
      <Projects />
      <Advertising />
      <Strategy />
      <FAQ />
      <Contact />
      <SiteFooter />
    </main>
  );
}
