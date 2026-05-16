import Image from "next/image";

import { HeroFog } from "./HeroFog";
import { Navbar } from "./Navbar";
import { Stat } from "./Stat";
import { ArrowUpRight } from "./icons";

const HERO_STATS = [
  { figure: "200+", label: "Energy systems deployed" },
  { figure: "6–12", label: "With approvals", suffix: "MO" },
  { figure: "UL", label: "Safety-certified", suffix: "9540A" },
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-ink grain">
      <div className="absolute inset-0 -z-30 hidden sm:block">
        <Image
          src="/heroimg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
      </div>

      <HeroFog className="pointer-events-none absolute inset-0 -z-20 h-full w-full opacity-90 mix-blend-screen" />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(130%_90%_at_50%_45%,rgba(5,5,5,0.2)_0%,rgba(5,5,5,0.6)_55%,rgba(5,5,5,0.92)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-ink/90 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-20"
        style={{
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          maskImage:
            "linear-gradient(to top, black 0%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 0%, black 30%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-10"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          maskImage:
            "linear-gradient(to top, black 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 0%, black 40%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-ink via-ink/85 to-transparent"
      />

      <Navbar />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col items-center justify-center px-5 pb-24 pt-10 text-center sm:items-start sm:px-10 sm:pb-28 sm:pt-12 sm:text-left lg:px-16">
        <p
          className="rise mb-7 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-mute sm:mb-7 sm:self-start sm:text-[11px]"
          style={{ ["--rise-delay" as string]: "120ms" }}
        >
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
            <span className="absolute -inset-1 rounded-full bg-accent/30 blur-[3px]" />
          </span>
          Site-Level Energy Infrastructure
        </p>

        <h1
          className="rise font-display tracking-normal text-paper"
          style={{ ["--rise-delay" as string]: "240ms" }}
        >
          <span className="block max-w-[16ch] text-[clamp(2.75rem,10vw,5rem)] font-normal leading-[1.05] ">
            Built for today&rsquo;s{" "}
            <span className="italic text-accent">grid</span>{" "}
            constraints.
          </span>
        </h1>

        <p
          className="rise mt-7 max-w-[19rem] text-balance text-[13px] leading-relaxed text-paper/70 sm:mt-7 sm:max-w-xl sm:text-base"
          style={{ ["--rise-delay" as string]: "420ms" }}
        >
          <span className="hidden sm:inline">
            Xura designs and delivers Level&nbsp;3 EV charging and battery
            energy storage for commercial and fleet facilities&mdash;engineered
            around real site conditions, not theoretical grid availability.
          </span>
          <span className="sm:hidden">
            Level&nbsp;3 EV charging and battery storage&mdash;engineered
            around real site conditions.
          </span>
        </p>

        <div
          className="rise mt-10 flex flex-col items-center gap-3 sm:mt-9 sm:flex-row sm:flex-wrap"
          style={{ ["--rise-delay" as string]: "560ms" }}
        >
          <a
            href="#contact"
            className="group relative inline-flex h-12 w-56 items-center justify-center gap-3 overflow-hidden rounded-full bg-accent px-6 text-sm font-normal tracking-[0.1em] text-ink transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            <span className="relative z-10">Contact Us</span>
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
          <a
            href="#solutions"
            className="inline-flex h-12 w-56 items-center justify-center gap-3 rounded-full border border-paper/20 bg-paper/[0.03] px-6 text-sm font-normal tracking-[0.1em] text-paper backdrop-blur-md transition-colors hover:border-paper/40 hover:bg-paper/[0.08] sm:w-auto"
          >
            Explore Solutions
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-accent"
            />
          </a>
        </div>

        <div
          className="rise mt-16 grid w-full max-w-3xl grid-cols-3 gap-x-2 gap-y-5 border-t border-paper/10 pt-7 text-left sm:mt-16 sm:gap-x-6 sm:gap-y-6 sm:pt-7"
          style={{ ["--rise-delay" as string]: "720ms" }}
        >
          {HERO_STATS.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
