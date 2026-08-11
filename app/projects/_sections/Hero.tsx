import { PageHero, type PageHeroStat } from "../../components/PageHero";

const HERO_STATS: PageHeroStat[] = [
  { figure: "300+", label: "Site pipeline" },
  { figure: "NY · NJ", label: "Active markets" },
  { figure: "100s", label: "Completed installs" },
  { figure: "Fortune 500", label: "Clients served" },
];

export function ProjectsHero() {
  return (
    <PageHero
      kicker="Projects"
      title={
        <>
          From constraints to <span className="text-accent">execution</span>.
        </>
      }
      lead="These examples illustrate how Xura evaluates site constraints, designs around grid limitations, and delivers reliable electrification solutions for commercial and fleet-driven properties."
      stats={HERO_STATS}
      secondary={{ label: "View the pipeline", href: "#pipeline" }}
    />
  );
}
