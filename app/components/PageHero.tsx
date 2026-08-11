import Link from "next/link";
import type { ReactNode } from "react";

import { Navbar } from "./Navbar";
import { ArrowUpRight } from "./icons";

export type PageHeroStat = {
  figure: string;
  label: string;
  suffix?: string;
};

/**
 * Shared hero for the secondary pages. Same document idiom as the homepage —
 * mono kicker, heavy Archivo headline, lead, actions, and a hairline-divided
 * stat band across the foot — but without the photographic plate.
 */
export function PageHero({
  kicker,
  title,
  lead,
  stats,
  primary = { label: "Request a site review", href: "#contact" },
  secondary,
}: {
  kicker: string;
  title: ReactNode;
  lead: ReactNode;
  stats?: PageHeroStat[];
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative isolate flex w-full flex-col bg-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 grid-lines opacity-[0.07]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh] bg-[radial-gradient(120%_70%_at_50%_0%,rgba(139,251,3,0.08)_0%,rgba(5,5,5,0)_62%)]"
      />

      <Navbar />

      <div className="doc-shell flex flex-1 flex-col justify-center py-20 sm:py-24">
        <p className="kicker">{kicker}</p>

        <h1 className="doc-h1 mt-5 max-w-[20ch] text-[clamp(2.2rem,5.2vw,3.8rem)]">
          {title}
        </h1>

        <p className="doc-lead mt-5 max-w-[62ch]">{lead}</p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href={primary.href} className="doc-btn group">
            {primary.label}
            <span
              aria-hidden="true"
              className="grid h-6 w-6 place-items-center rounded-full bg-ink text-accent transition-transform group-hover:translate-x-0.5"
            >
              <ArrowUpRight />
            </span>
          </Link>
          {secondary && (
            <Link href={secondary.href} className="doc-btn-ghost">
              {secondary.label}
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-[2px] bg-accent"
              />
            </Link>
          )}
        </div>
      </div>

      {stats && stats.length > 0 && (
        <div className="relative border-t border-line">
          <dl
            className={`doc-shell grid grid-cols-2 divide-line sm:divide-x ${
              stats.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4"
            }`}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1.5 py-6 sm:px-8 sm:first:pl-0 sm:last:pr-0"
              >
                <dd className="flex items-baseline gap-2">
                  <span className="font-display text-[1.7rem] font-extrabold leading-none text-paper sm:text-[2rem]">
                    {stat.figure}
                  </span>
                  {stat.suffix && (
                    <span className="font-mono text-[0.78rem] font-bold text-accent">
                      {stat.suffix}
                    </span>
                  )}
                </dd>
                <dt className="text-[0.82rem] text-mute">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      )}
    </section>
  );
}
