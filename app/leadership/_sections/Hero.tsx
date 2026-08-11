import { PageHero, type PageHeroStat } from "../../components/PageHero";

const HERO_STATS: PageHeroStat[] = [
  { figure: "30+", label: "U.S. states" },
  { figure: "$1B+", label: "RE transactions" },
  { figure: "100s", label: "Energy systems" },
  { figure: "Fortune 500", label: "Clients served" },
];

export function LeadershipHero() {
  return (
    <PageHero
      kicker="Leadership"
      title={
        <>
          Bringing together <span className="text-accent">proven leaders</span>{" "}
          to deliver at scale.
        </>
      }
      lead="Xura brings together experienced energy operators, infrastructure specialists, and project leaders to deliver complex electrification projects in real-world, grid-constrained environments."
      stats={HERO_STATS}
      secondary={{ label: "Meet the team", href: "#our-team" }}
    />
  );
}
