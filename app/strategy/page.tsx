import type { Metadata } from "next";

import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { StrategyFocus } from "./_sections/Focus";
import { StrategyHero } from "./_sections/Hero";
import { StrategyPerformance } from "./_sections/Performance";
import { StrategyPrinciples } from "./_sections/Principles";
import { StrategyRightSized } from "./_sections/RightSized";
import { StrategySafety } from "./_sections/Safety";

export const metadata: Metadata = {
  title: "Strategy — Xura | An Execution-First Approach to Electrification",
  description:
    "Xura's strategy clears grid bottlenecks with right-sized, integrated charging and energy storage — feasibility-first execution engineered for the site and grid constraints that actually exist.",
};

export default function StrategyPage() {
  return (
    <main className="flex flex-1 flex-col">
      <StrategyHero />
      <StrategyFocus />
      <StrategyPrinciples />
      <StrategyRightSized />
      <StrategyPerformance />
      <StrategySafety />
      <Contact />
      <Footer />
    </main>
  );
}
