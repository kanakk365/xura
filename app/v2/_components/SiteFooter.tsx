import Image from "next/image";
import Link from "next/link";

const COLUMNS = [
  {
    heading: "Pages",
    links: [
      { label: "Home", href: "/v2" },
      { label: "EV Charging", href: "/v2/ev-charging" },
      { label: "Neo Cloud", href: "/v2/neocloud" },
    ],
  },
  {
    heading: "EV Charging",
    links: [
      { label: "Partner dashboard", href: "/v2/ev-charging#partner-dashboard" },
      { label: "Advertise", href: "/v2/ev-charging#advertise" },
      { label: "Contact", href: "/v2/ev-charging#contact" },
    ],
  },
  {
    heading: "Reports",
    links: [
      { label: "Energy & Grid Investment Report", href: "/ev-report" },
      { label: "Youth Sports Investment Report", href: "/youth-sports-report" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t-0 bg-ink pt-20 sm:pt-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent" />
      <div className="doc-shell">
        <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.8fr_1fr]">
          <div>
            <Link href="/v2" className="flex w-fit items-center" aria-label="Xura home">
              <Image src="/xura_logo.png" alt="Xura" width={875} height={200} className="h-8 w-auto" />
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-paper/60">
              Realistic distributed energy infrastructure at the intersection of
              energy, real estate and transportation &mdash; EV charging,
              storage, on-site generation and modular compute power.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-paper/[0.08] bg-paper/[0.02] px-4 py-2">
              <span className="font-mono text-[10px] tracking-[0.24em] text-mute">Operated by</span>
              <span className="font-mono text-[11px] tracking-[0.1em] text-paper">Charge Capital Partners</span>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="font-mono text-[10px] tracking-[0.3em] text-mute">{col.heading}</p>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-paper/70 transition-colors hover:text-paper">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div aria-hidden="true" className="select-none overflow-hidden pb-4 text-center leading-none" style={{ fontFamily: "var(--font-mark)", fontSize: "clamp(40px, 11vw, 160px)", letterSpacing: "0.22em", color: "rgba(255,255,255,0.05)", WebkitTextStroke: "1px rgba(255,255,255,0.12)", transform: "scaleX(1.2)" }}>
          XURA
        </div>

        <div className="border-t border-paper/[0.06] py-6">
          <p className="max-w-4xl text-[0.78rem] leading-[1.7] text-mute">
            Site figures, dashboards and timelines shown on these pages are
            indicative or illustrative and subject to a preliminary engineering
            review. Feasibility, economics and schedule vary by market, grid
            conditions and incentive availability. Nothing here constitutes an
            offer; any transaction is subject to definitive agreements.
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-paper/[0.06] py-6 text-[0.78rem] text-mute sm:flex-row sm:items-center">
          <span>&copy; {new Date().getFullYear()} Xura Partners. All rights reserved.</span>
          <a href="#" className="font-mono transition-colors hover:text-accent">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
