import { PageHero, type PageHeroStat } from "../../components/PageHero";

const HERO_STATS: PageHeroStat[] = [
  { figure: "100s", label: "Deployments" },
  { figure: "Zero", label: "Safety incidents" },
  { figure: "UL", suffix: "9540A", label: "Certified" },
  { figure: "24/7", label: "Monitoring" },
];

export function StrategyHero() {
  return (
    <PageHero
      kicker="Strategy"
      title={
        <>
          An <span className="text-accent">execution-first</span> approach to
          site-level electrification.
        </>
      }
      lead={
        <>
          Xura&rsquo;s strategy is built around a simple constraint &mdash; the
          grid can&rsquo;t expand fast enough to meet near-term electrification
          demand. So we engineer around it.
        </>
      }
      stats={HERO_STATS}
      secondary={{ label: "Explore solutions", href: "/#solutions" }}
    />
  );
}
