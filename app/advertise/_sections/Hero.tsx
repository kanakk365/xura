import { PageHero, type PageHeroStat } from "../../components/PageHero";

const HERO_STATS: PageHeroStat[] = [
  { figure: "84K", suffix: "/MO", label: "Monthly readers" },
  { figure: "6:42", label: "Avg session" },
  { figure: "71%", label: "Decision-makers" },
  { figure: "12+", label: "US metros" },
];

export function AdvertiseHero() {
  return (
    <PageHero
      kicker="Advertise with Xura"
      title={
        <>
          Reach the people <span className="text-accent">scoping</span> the
          grid.
        </>
      }
      lead="Operators, CRE owners, and capital partners actively scoping site-level energy — not just impressions, but buyers."
      stats={HERO_STATS}
      primary={{ label: "Request the media kit", href: "#contact" }}
      secondary={{ label: "View packages", href: "#packages" }}
    />
  );
}
