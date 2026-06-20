import Link from "next/link";

import { Navbar } from "../../components/Navbar";
import { ArrowUpRight } from "../../components/icons";

type HeroStat = {
  figure: string;
  label: string;
};

const HERO_STATS: HeroStat[] = [
  { figure: "30+", label: "U.S. states" },
  { figure: "$1B+", label: "RE transactions" },
  { figure: "100s", label: "Energy systems" },
  { figure: "Fortune 500", label: "Clients served" },
];

export function LeadershipHero() {
  return (
    <section className="relative isolate flex min-h-[88svh] w-full flex-col overflow-hidden bg-ink grain">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 grid-lines opacity-[0.08]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[65vh] bg-[radial-gradient(120%_70%_at_50%_0%,rgba(139,251,3,0.12)_0%,rgba(5,5,5,0)_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-20 h-[55vh] bg-[radial-gradient(120%_60%_at_50%_100%,rgba(139,251,3,0.05)_0%,rgba(5,5,5,0)_60%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(130%_90%_at_50%_45%,rgba(5,5,5,0.2)_0%,rgba(5,5,5,0.55)_55%,rgba(5,5,5,0.92)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-ink/90 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-ink via-ink/80 to-transparent"
      />

      <Navbar />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col items-center justify-center mt-26 px-5 py-10 text-center sm:px-10 sm:py-14 lg:px-16">
        <p
          className="rise mb-7 inline-flex items-center gap-2.5 rounded-full border border-paper/15 bg-paper/[0.03] px-4 py-2 text-[10.5px] font-medium uppercase tracking-[0.22em] text-paper/70 backdrop-blur-md"
          style={{ ["--rise-delay" as string]: "120ms" }}
        >
          <span className="relative inline-flex h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
            <span className="absolute -inset-1 rounded-full bg-accent/30 blur-[3px]" />
          </span>
          Leadership
          <span aria-hidden="true" className="h-3 w-px bg-paper/15" />
          <span className="text-mute">Our team</span>
        </p>

        <h1
          className="rise font-display tracking-normal text-paper"
          style={{ ["--rise-delay" as string]: "240ms" }}
        >
          <span className="mx-auto block text-balance text-[clamp(2.5rem,8vw,4.75rem)] font-normal leading-[1.05] sm:max-w-[20ch]">
            Bringing together{" "}
            <span className="italic text-accent">proven leaders</span> to deliver
            at scale.
          </span>
        </h1>

        <p
          className="rise mx-auto mt-7 max-w-[22rem] text-balance text-[13px] leading-relaxed text-paper/70 sm:mt-7 sm:max-w-2xl sm:text-base"
          style={{ ["--rise-delay" as string]: "420ms" }}
        >
          Xura brings together experienced energy operators, infrastructure
          specialists, and project leaders to deliver complex electrification
          projects in real-world, grid-constrained environments.
        </p>

        <div
          className="rise mt-10 flex flex-col items-center gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:justify-center"
          style={{ ["--rise-delay" as string]: "560ms" }}
        >
          <a
            href="#contact"
            className="group relative inline-flex h-12 w-56 items-center justify-center gap-3 overflow-hidden rounded-full bg-accent px-6 text-sm font-normal tracking-[0.1em] text-ink transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            <span className="relative z-10">Request a site review</span>
            <span
              aria-hidden="true"
              className="relative z-10 grid h-7 w-7 place-items-center rounded-full bg-ink text-accent transition-transform group-hover:translate-x-0.5"
            >
              <ArrowUpRight />
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full bg-paper transition-transform duration-500 group-hover:translate-x-0"
            />
          </a>
          <Link
            href="#team"
            className="inline-flex h-12 w-56 items-center justify-center gap-3 rounded-full border border-paper/20 bg-paper/[0.03] px-6 text-sm font-normal tracking-[0.1em] text-paper backdrop-blur-md transition-colors hover:border-paper/40 hover:bg-paper/[0.08] sm:w-auto"
          >
            Meet the team
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-accent"
            />
          </Link>
        </div>

        <div
          className="rise mt-16 grid w-full max-w-4xl grid-cols-2 gap-x-2 gap-y-8 border-t border-paper/10 pt-7 text-center sm:mt-16 sm:gap-x-6 sm:gap-y-6 sm:pt-7 lg:grid-cols-4"
          style={{ ["--rise-delay" as string]: "720ms" }}
        >
          {HERO_STATS.map((stat) => (
            <HeroStatTile key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroStatTile({ figure, label }: HeroStat) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="font-display tracking-normal font-normal leading-none text-paper whitespace-nowrap text-[1.6rem] sm:text-[2rem] lg:text-[2.15rem]">
        {figure}
      </span>
      <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-mute sm:text-[11px]">
        {label}
      </span>
    </div>
  );
}
