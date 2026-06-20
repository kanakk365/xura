"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const EXPERIENCE = [
  "Large-scale energy and infrastructure transactions",
  "Projects deployed across 30+ U.S. states",
  "Leadership roles in battery storage, EV charging, and grid-connected systems",
];

export function LeadershipOverview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="our-team"
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
              Our team
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.1, 1] }}
              className="font-display tracking-normal text-[clamp(1.85rem,5vw,3.5rem)] font-normal leading-[1.05] text-paper"
            >
              Experience across the full{" "}
              <span className="italic text-accent">project lifecycle</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.2, 0.7, 0.1, 1] }}
              className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/65 sm:text-base"
            >
              The team has led the development, construction, and operation of
              battery storage, EV charging, and grid-connected energy systems
              across North America and the Caribbean&mdash;with a consistent
              focus on safety, reliability, and execution discipline.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.2, 0.7, 0.1, 1] }}
              className="mt-4 max-w-md text-[15px] leading-relaxed text-paper/65 sm:text-base"
            >
              Xura applies institutional-grade rigor across system design,
              interconnection strategy, deployment, and long-term operations to
              ensure projects are delivered responsibly and perform as intended
              over time.
            </motion.p>
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
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Team experience
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                Includes
              </span>
            </div>

            <ol className="relative">
              {EXPERIENCE.map((item, i) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-paper/[0.06] px-6 py-5 sm:px-8 sm:py-6"
                >
                  <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-paper/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14.5px] leading-[1.55] text-paper/80">
                    {item}
                  </span>
                </li>
              ))}
            </ol>

            <div className="relative flex flex-wrap items-center gap-2.5 px-6 py-6 sm:px-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                North America
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-paper/[0.1] bg-paper/[0.02] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/70">
                <span className="h-1.5 w-1.5 rounded-full bg-paper/40" />
                Caribbean
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
