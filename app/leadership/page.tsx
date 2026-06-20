import type { Metadata } from "next";

import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { LeadershipHero } from "./_sections/Hero";
import { LeadershipOverview } from "./_sections/Overview";
import { LeadershipPartnerships } from "./_sections/Partnerships";
import { LeadershipTeam } from "./_sections/Team";

export const metadata: Metadata = {
  title: "Leadership — Xura | Proven Operators in Energy Infrastructure",
  description:
    "Xura brings together experienced energy operators, infrastructure specialists, and project leaders — with institutional-grade rigor across battery storage, EV charging, and grid-connected systems in 30+ states.",
};

export default function LeadershipPage() {
  return (
    <main className="flex flex-1 flex-col">
      <LeadershipHero />
      <LeadershipOverview />
      <LeadershipPartnerships />
      <LeadershipTeam />

      <Contact />
      <Footer />
    </main>
  );
}
