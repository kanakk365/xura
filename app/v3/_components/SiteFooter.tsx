import Image from "next/image";
import Link from "next/link";

const COLUMNS = [
  {
    heading: "Platform",
    links: [
      { label: "Home", href: "/v3" },
      { label: "EV Charging", href: "/v3/ev-charging" },
      { label: "Neo Cloud", href: "/v3/neocloud" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Strategy", href: "/strategy" },
      { label: "Leadership", href: "/leadership" },
    ],
  },
  {
    heading: "Partners",
    links: [
      { label: "Host a charging hub", href: "/v3/ev-charging#contact" },
      { label: "Partner dashboard", href: "/v3/ev-charging#dashboard" },
      { label: "Advertise", href: "/v3/ev-charging#advertise" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative bg-ink pt-20 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-paper/15 before:to-transparent">
      <div className="op-shell">
        <div className="grid grid-cols-2 gap-10 pb-12 lg:grid-cols-[1.6fr_repeat(3,minmax(0,1fr))]">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/v3" aria-label="Xura home" className="inline-flex">
              <Image src="/xura_logo.png" alt="Xura" width={875} height={200} className="h-8 w-auto" />
            </Link>
            <p className="mt-6 max-w-[40ch] text-[0.92rem] leading-[1.7] text-mute">
              Realistic distributed energy infrastructure, at the intersection of energy, real estate and
              transportation.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-paper/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-mute">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              UL 9540A + Napkin Tested
            </p>
          </div>
          {COLUMNS.map((c) => (
            <div key={c.heading}>
              <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-mute">{c.heading}</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[0.9rem] text-paper/70 transition-colors hover:text-accent">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-paper/10 py-6">
          <p className="max-w-[110ch] text-[0.76rem] leading-[1.6] text-mute-2">
            Site figures, timelines and dashboard values shown are indicative or sample data and subject to engineering
            review. Nothing here constitutes an offer; any transaction is subject to definitive agreements.
          </p>
        </div>
        <div className="flex flex-col gap-2 border-t border-paper/10 py-6 text-[0.76rem] text-mute sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; 2026 Xura Inc. All rights reserved.</span>
          <span className="font-mono">Energy · Real estate · Transportation</span>
        </div>
      </div>
    </footer>
  );
}
