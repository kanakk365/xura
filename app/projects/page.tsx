import type { Metadata } from "next";

import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { ProjectsFeatured } from "./_sections/Featured";
import { ProjectsHero } from "./_sections/Hero";
import { ProjectsInstallations } from "./_sections/Installations";
import { ProjectsPipeline } from "./_sections/Pipeline";
import { ProjectsStatement } from "./_sections/Statement";

export const metadata: Metadata = {
  title: "Projects — Xura | From Constraints to Execution",
  description:
    "How Xura evaluates site constraints, designs around grid limitations, and delivers reliable electrification — featuring Michael's Plaza and a 300+ site pipeline across NY and NJ.",
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-1 flex-col">
      <ProjectsHero />
      <ProjectsFeatured />
      <ProjectsStatement />
      <ProjectsPipeline />
      <ProjectsInstallations />
      <Contact />
      <Footer />
    </main>
  );
}
