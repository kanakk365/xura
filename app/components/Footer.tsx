import Image from "next/image";
import Link from "next/link";

const FOOTER_COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Explore",
    links: [
      { label: "Solutions", href: "/#solutions" },
      { label: "Strategy", href: "/strategy" },
      { label: "Leadership", href: "/leadership" },
      { label: "Projects", href: "/projects" },
    ],
  },
  {
    heading: "Engage",
    links: [
      { label: "Advertise", href: "/advertise" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/#contact" },
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

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink pt-16">
      <div className="doc-shell">
        <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.7fr_1fr]">
          <div>
            <Link href="/" className="flex w-fit items-center" aria-label="Xura home">
              <Image
                src="/xura_logo.png"
                alt="Xura"
                width={875}
                height={200}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-md text-[0.92rem] leading-[1.7] text-mute">
              Site-level energy infrastructure for commercial and fleet
              facilities. EV charging, battery storage, and microgrid
              configuration &mdash; designed around your meter, not against it.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-lg border border-line bg-ink-2 px-4 py-2.5">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
                Operated by
              </span>
              <span className="font-mono text-[0.75rem] text-paper/80">
                Charge Capital Partners
              </span>
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-accent">
                {col.heading}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.9rem] text-mute transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-line py-6">
          <p className="max-w-4xl text-[0.78rem] leading-[1.7] text-mute">
            Site figures and timelines shown on this page are indicative and
            subject to a preliminary engineering review. Feasibility, economics,
            and schedule vary by market, grid conditions, and incentive
            availability. Nothing here constitutes an offer; any transaction is
            subject to definitive agreements.
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-line py-6 text-[0.78rem] text-mute sm:flex-row sm:items-center">
          <span>
            &copy; {new Date().getFullYear()} Xura Partners. All rights
            reserved.
          </span>
          <a href="#" className="font-mono transition-colors hover:text-accent">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
