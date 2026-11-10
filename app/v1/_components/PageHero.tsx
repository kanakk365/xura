import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { HeroFog } from "../../components/HeroFog";
import { ArrowUpRight } from "../../components/icons";
import { Nav } from "./Nav";

export type Stat = { figure: string; suffix?: string; label: string };
type Cta = { label: string; href: string };

/** Hero for the three v1 pages — same idiom as the live homepage hero. */
export function PageHero({
  kicker,
  title,
  lead,
  stats,
  primary,
  secondary,
  image,
  fog = false,
  aside,
}: {
  kicker: string;
  title: ReactNode;
  lead: ReactNode;
  stats: Stat[];
  primary: Cta;
  secondary?: Cta;
  image?: string;
  fog?: boolean;
  aside?: ReactNode;
}) {
  return (
    <section className="relative isolate flex w-full flex-col bg-ink">
      {image ? (
        <div className="absolute inset-0 -z-30 hidden overflow-hidden sm:block">
          <Image src={image} alt="" fill priority sizes="100vw" className="origin-top scale-[1.12] object-cover object-top" />
        </div>
      ) : (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-30 grid-lines opacity-[0.07]" />
      )}
      {fog && (
        <HeroFog className="pointer-events-none absolute inset-0 -z-20 h-full w-full opacity-90 mix-blend-screen" />
      )}
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 ${
          image
            ? "bg-[linear-gradient(90deg,rgba(5,5,5,0.88)_0%,rgba(5,5,5,0.62)_38%,rgba(5,5,5,0.28)_68%,rgba(5,5,5,0.12)_100%)]"
            : "bg-[radial-gradient(120%_70%_at_50%_0%,rgba(139,251,3,0.08)_0%,rgba(5,5,5,0)_62%)]"
        }`}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-ink via-ink/70 to-transparent" />

      <Nav />

      <div className="doc-shell grid flex-1 items-center gap-10 py-20 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="kicker">{kicker}</p>
          <h1 className="doc-h1 mt-5 max-w-[17ch]">{title}</h1>
          <p className="doc-lead mt-5 max-w-[58ch]">{lead}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={primary.href} className="doc-btn group">
              {primary.label}
              <span aria-hidden="true" className="grid h-6 w-6 place-items-center rounded-full bg-ink text-accent transition-transform group-hover:translate-x-0.5">
                <ArrowUpRight />
              </span>
            </Link>
            {secondary && (
              <Link href={secondary.href} className="doc-btn-ghost">
                {secondary.label}
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-[2px] bg-accent" />
              </Link>
            )}
          </div>
        </div>
        {aside && <div className="hidden lg:block">{aside}</div>}
      </div>

      <div className="relative border-t border-line bg-ink/60 backdrop-blur-sm">
        <dl className={`doc-shell grid grid-cols-2 divide-line sm:divide-x ${stats.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4"}`}>
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1.5 py-6 sm:px-8 sm:first:pl-0 sm:last:pr-0">
              <dd className="flex items-baseline gap-2">
                <span className="font-display text-[1.7rem] font-extrabold leading-none text-paper sm:text-[2rem]">{stat.figure}</span>
                {stat.suffix && <span className="font-mono text-[0.78rem] font-bold text-accent">{stat.suffix}</span>}
              </dd>
              <dt className="text-[0.82rem] text-mute">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
