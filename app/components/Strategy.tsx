"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Principle = {
  id: string;
  number: string;
  title: string;
  body: string;
};

const PRINCIPLES: Principle[] = [
  {
    id: "integrated",
    number: "01",
    title: "Integrated infrastructure",
    body: "Storage, charging, and load control are designed to operate as a single, coordinated system — never as standalone parts bolted together.",
  },
  {
    id: "site-selection",
    number: "02",
    title: "Site selection as risk management",
    body: "Only sites with validated electrical capacity, interconnection, and constructability move forward. Feasibility is the first gate, not the last check.",
  },
  {
    id: "operator-led",
    number: "03",
    title: "Operator-led execution",
    body: "Xura stays directly involved from design through operations. The team that scopes the site is the team that commissions and runs it.",
  },
  {
    id: "performance",
    number: "04",
    title: "Long-term performance focus",
    body: "Assets are engineered for durability, actively monitored, and optimized over time — built to perform in line with their design assumptions long after commissioning.",
  },
];

export function Strategy() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="strategy"
      ref={ref}
      className="relative bg-ink py-20 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.05]"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-10 lg:px-16">
        <header className="mb-10 flex flex-col gap-6 sm:mb-14 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.1, 1] }}
              className="mb-5 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-mute"
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
                <span className="absolute -inset-1 rounded-full bg-accent/30 blur-[3px]" />
              </span>
              Strategy
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.1, 1] }}
              className="font-display tracking-normal text-[clamp(1.85rem,6vw,3.75rem)] font-normal leading-[1.05] text-paper"
            >
              An{" "}
              <span className="italic text-accent">execution-first</span>{" "}
              approach.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.1, 1] }}
            className="max-w-sm text-[15px] leading-relaxed text-paper/60 sm:text-base"
          >
            Built around a simple constraint&mdash;the grid can&rsquo;t expand
            fast enough to meet near-term electrification demand. Four
            principles keep delivery honest.
          </motion.p>
        </header>

        <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-paper/[0.08] bg-paper/[0.06] sm:rounded-[28px] md:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <PrincipleCard
              key={p.id}
              principle={p}
              index={i}
              total={PRINCIPLES.length}
              isInView={isInView}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

function PrincipleCard({
  principle,
  index,
  total,
  isInView,
}: {
  principle: Principle;
  index: number;
  total: number;
  isInView: boolean;
}) {
  const delay = 0.3 + index * 0.1;

  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.2, 0.7, 0.1, 1] }}
      className="group relative bg-ink-2/70 transition-colors duration-500 hover:bg-ink-2"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.04]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-7 top-7 select-none font-display text-[clamp(4.5rem,7vw,7rem)] italic leading-[0.82] text-paper/[0.04]"
      >
        {principle.number}
      </div>

      <div className="relative flex h-full flex-col gap-5 p-6 sm:gap-6 sm:p-10 lg:p-12">
        <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-accent">
          <span className="relative inline-flex h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
          </span>
          Principle
          <span className="font-mono tracking-[0.2em] text-mute">
            &middot; {principle.number} / {String(total).padStart(2, "0")}
          </span>
        </div>

        <h3 className="max-w-md font-display tracking-normal text-[clamp(1.35rem,4.2vw,2rem)] font-normal leading-[1.1] text-paper">
          {principle.title}
        </h3>

        <p className="max-w-md text-[14px] leading-[1.6] text-paper/65 sm:text-[14.5px]">
          {principle.body}
        </p>

        <div className="mt-auto flex items-center gap-3 pt-2">
          <span className="block h-px flex-1 bg-paper/10 transition-colors duration-500 group-hover:bg-accent/30" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
            Xura
          </span>
        </div>
      </div>
    </motion.li>
  );
}
