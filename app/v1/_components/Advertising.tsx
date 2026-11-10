import { AdvertiseAudience } from "../../advertise/_sections/Audience";
import { AdvertiseComparison } from "../../advertise/_sections/Comparison";
import { AdvertiseContact } from "../../advertise/_sections/Contact";
import { AdvertiseFAQ } from "../../advertise/_sections/FAQ";
import { AdvertiseInventory } from "../../advertise/_sections/Inventory";
import { AdvertisePackages } from "../../advertise/_sections/Packages";
import { AdvertiseProcess } from "../../advertise/_sections/Process";
import { SectionHead } from "./SectionHead";

const STATS = [
  { figure: "84K", suffix: "/MO", label: "Monthly readers" },
  { figure: "6:42", suffix: "", label: "Avg session" },
  { figure: "71%", suffix: "", label: "Decision-makers" },
  { figure: "12+", suffix: "", label: "US metros" },
];

/**
 * The existing /advertise offering, brought across whole. The page hero is
 * replaced by this section intro (the original hero carries the old navbar);
 * every other section is imported unchanged from app/advertise/_sections.
 */
export function Advertising() {
  return (
    <div id="advertise">
      <section className="doc-section">
        <div className="doc-shell">
          <SectionHead
            kicker="Advertise with Xura"
            title={
              <>
                Put your brand on the screen at the{" "}
                <span className="text-accent">charger</span>.
              </>
            }
            lead="Operators, CRE owners and capital partners actively scoping site-level energy — and drivers with a charge-time to fill. Not just impressions, but buyers."
          />

          <dl className="mt-9 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="stat-tile">
                <dd className="n">
                  {s.figure}
                  {s.suffix && <span className="ml-1.5 font-mono text-[0.78rem] font-bold text-accent">{s.suffix}</span>}
                </dd>
                <dt className="l">{s.label}</dt>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#advertise-contact" className="doc-btn">Request the media kit</a>
            <a href="#packages" className="doc-btn-ghost">View packages</a>
          </div>
        </div>
      </section>

      <AdvertiseAudience />
      <AdvertiseInventory />
      <AdvertisePackages />
      <AdvertiseComparison />
      <AdvertiseProcess />
      <AdvertiseFAQ />
      <AdvertiseContact />
    </div>
  );
}
