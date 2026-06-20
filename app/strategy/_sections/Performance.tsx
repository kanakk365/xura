"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Capability = {
  code: string;
  title: string;
  body: string;
};

const CAPABILITIES: Capability[] = [
  {
    code: "01",
    title: "24/7 grid oversight",
    body: "Every site is watched around the clock, so dispatch responds to grid conditions as they change.",
  },
  {
    code: "02",
    title: "Automated energy dispatch",
    body: "Charging and storage are dispatched automatically against load, price, and capacity signals.",
  },
  {
    code: "03",
    title: "Institutional-grade monitoring",
    body: "Lifecycle telemetry holds assets to the performance their design assumptions promised.",
  },
  {
    code: "04",
    title: "Operational discipline, built in",
    body: "The same operator team commissions and runs the site — accountability doesn't change hands.",
  },
];

const READOUTS = [
  { label: "Grid oversight", value: "Live", state: "ok" as const },
  { label: "Dispatch", value: "Auto", state: "ok" as const },
  { label: "Uptime", value: "99.9%", state: "ok" as const },
];

export function StrategyPerformance() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="performance"
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
              Performance &amp; operations
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.1, 1] }}
              className="font-display tracking-normal text-[clamp(1.85rem,5vw,3.5rem)] font-normal leading-[1.05] text-paper"
            >
              Always-on performance,{" "}
              <span className="italic text-accent">actively managed</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.2, 0.7, 0.1, 1] }}
              className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/65 sm:text-base"
            >
              24/7 grid oversight, automated energy dispatch, and
              institutional-grade monitoring keep assets performing in line with
              their design assumptions&mdash;across their full lifecycle.
            </motion.p>

            <ul className="mt-9 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              {CAPABILITIES.map((cap, i) => (
                <motion.li
                  key={cap.code}
                  initial={{ opacity: 0, y: 14 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.4 + i * 0.08,
                    ease: [0.2, 0.7, 0.1, 1],
                  }}
                  className="flex flex-col gap-2"
                >
                  <span className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    <span className="h-px w-4 bg-accent/50" />
                    {cap.code}
                  </span>
                  <span className="font-display tracking-normal text-[1.1rem] font-normal leading-tight text-paper">
                    {cap.title}
                  </span>
                  <span className="text-[13px] leading-[1.55] text-paper/60">
                    {cap.body}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.2, 0.7, 0.1, 1] }}
            className="relative h-fit overflow-hidden rounded-2xl border border-paper/[0.08] bg-ink-2/60 sm:rounded-[28px] lg:sticky lg:top-24"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 grid-lines opacity-[0.05]"
            />

            <div className="relative flex items-center justify-between gap-3 border-b border-paper/[0.07] px-6 py-5 sm:px-8">
              <span className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/75">
                <span className="relative inline-flex h-1.5 w-1.5">
                  <span className="absolute inset-0 rounded-full bg-accent soc-pulse" />
                </span>
                Site operations
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Live
              </span>
            </div>

            <div className="relative flex flex-col gap-px bg-paper/[0.05]">
              {READOUTS.map((r) => (
                <div
                  key={r.label}
                  className="flex items-center justify-between gap-4 bg-ink-2 px-6 py-4 sm:px-8"
                >
                  <span className="flex items-center gap-2.5 text-[13px] text-paper/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent soc-pulse" />
                    {r.label}
                  </span>
                  <span className="font-display tracking-normal text-[1.05rem] font-normal text-paper">
                    {r.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative border-t border-paper/[0.07] px-6 py-6 sm:px-8">
              <div className="mb-2 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-mute">
                <span>State of charge</span>
                <span className="text-accent">68%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-paper/[0.06]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "68%" } : {}}
                  transition={{ duration: 1.4, delay: 0.6, ease: [0.2, 0.7, 0.1, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-accent-dim to-accent"
                  style={{ filter: "drop-shadow(0 0 6px rgba(139,251,3,0.5))" }}
                />
              </div>
              <p className="mt-5 text-[12px] leading-relaxed text-paper/55">
                Automated dispatch balances charge against grid conditions in
                real time, holding reliability across the asset lifecycle.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
