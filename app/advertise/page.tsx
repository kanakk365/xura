import type { Metadata } from "next";

import { Footer } from "../components/Footer";
import { AdvertiseAudience } from "./_sections/Audience";
import { AdvertiseComparison } from "./_sections/Comparison";
import { AdvertiseContact } from "./_sections/Contact";
import { AdvertiseFAQ } from "./_sections/FAQ";
import { AdvertiseHero } from "./_sections/Hero";
import { AdvertiseInventory } from "./_sections/Inventory";
import { AdvertisePackages } from "./_sections/Packages";
import { AdvertiseProcess } from "./_sections/Process";

export const metadata: Metadata = {
  title: "Advertise on Xura — Media Kit & Packages",
  description:
    "Reach operators, CRE owners, and capital partners scoping site-level energy projects. Choose a campaign package or design custom inventory across the Xura network.",
};

export default function AdvertisePage() {
  return (
    <main className="flex flex-1 flex-col">
      <AdvertiseHero />
      <AdvertiseAudience />
      <AdvertiseInventory />
      <AdvertisePackages />
      <AdvertiseComparison />
      <AdvertiseProcess />
      <AdvertiseFAQ />
      <AdvertiseContact />
      <Footer />
    </main>
  );
}
