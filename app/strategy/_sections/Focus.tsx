"use client";

import { motion, useInView } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

import { ArrowUpRight } from "../../components/icons";

type Bottleneck = {
  code: string;
  title: string;
  body: string;
};

const BOTTLENECKS: Bottleneck[] = [
  {
    code: "01",
    title: "Limited electrical capacity",
    body: "Most sites can't pull the power electrification demands from the meter they already have.",
  },
  {
    code: "02",
    title: "Prolonged interconnection",
    body: "Utility upgrades and interconnection queues stretch timelines by months, sometimes years.",
  },
  {
    code: "03",
    title: "Operational complexity",
    body: "Charging, storage, and site load all have to work as one system on live, occupied sites.",
  },
];

export function StrategyFocus() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="focus"
      ref={ref}
      className="relative bg-ink py-20 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.06]"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 sm:gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div className="flex flex-col">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.1, 1] }}
              className="mb-4 inline-flex items-center gap-3 self-start text-[11px] font-medium uppercase tracking-[0.2em] text-mute"
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
                <span className="absolute -inset-1 rounded-full bg-accent/30 blur-[3px]" />
              </span>
              Strategic focus
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.1, 1] }}
              className="font-display tracking-normal text-[clamp(1.85rem,5vw,3.5rem)] font-normal leading-[1.05] text-paper"
            >
              Infrastructure that clears grid{" "}
              <span className="italic text-accent">bottlenecks</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.2, 0.7, 0.1, 1] }}
              className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/65 sm:text-base"
            >
              Electrification is outpacing grid capacity. Sites run into limited
              power at the meter, slow interconnection, and operational
              friction that stalls projects before they start.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.2, 0.7, 0.1, 1] }}
              className="mt-4 max-w-md text-[15px] leading-relaxed text-paper/65 sm:text-base"
            >
              Xura&rsquo;s response pairs rigorous feasibility assessment with
              integrated charging and energy storage&mdash;engineered for the
              site and grid constraints that actually exist.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.2, 0.7, 0.1, 1] }}
              className="mt-9"
            >
              <Link
                href="/#solutions"
                className="group inline-flex h-11 items-center gap-2.5 rounded-full border border-accent/40 bg-accent/10 px-5 text-[12px] font-medium uppercase tracking-[0.12em] text-accent transition-colors hover:bg-accent hover:text-ink"
              >
                Explore our solutions
                <span className="grid h-5 w-5 place-items-center transition-transform group-hover:translate-x-0.5">
                  <ArrowUpRight />
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.2, 0.7, 0.1, 1] }}
            className="relative overflow-hidden rounded-2xl border border-paper/[0.08] bg-ink-2/60 sm:rounded-[28px]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 grid-lines opacity-[0.05]"
            />

            <div className="relative flex items-center justify-between gap-3 border-b border-paper/[0.07] px-6 py-5 sm:px-8">
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/70">
                <span className="h-1.5 w-1.5 rounded-full bg-paper/40" />
                The bottleneck
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                Site &middot; grid
              </span>
            </div>

            <ol className="relative">
              {BOTTLENECKS.map((b) => (
                <li
                  key={b.code}
                  className="flex gap-4 border-b border-paper/[0.06] px-6 py-5 sm:px-8 sm:py-6"
                >
                  <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-paper/40">
                    {b.code}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-display tracking-normal text-[1.15rem] font-normal leading-tight text-paper sm:text-[1.25rem]">
                      {b.title}
                    </span>
                    <span className="text-[13.5px] leading-[1.55] text-paper/60">
                      {b.body}
                    </span>
                  </div>
                </li>
              ))}
            </ol>

            <div className="relative px-6 py-6 sm:px-8 sm:py-7">
              <div className="rounded-2xl border border-accent/25 bg-accent/[0.06] p-5 sm:p-6">
                <span className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  <span className="relative inline-flex h-1.5 w-1.5">
                    <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
                  </span>
                  The Xura response
                </span>
                <p className="mt-3 text-[14px] leading-[1.6] text-paper/80">
                  Feasibility first, then integrated charging plus energy
                  storage&mdash;sized for the constraints in front of us, not
                  the grid we wish we had.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
