"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export function ProjectsStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      ref={ref}
      className="relative bg-ink-2/40 py-20 sm:py-28 lg:py-32"
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
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.2, 0.7, 0.1, 1] }}
          className="relative grid grid-cols-1 overflow-hidden rounded-3xl border border-paper/[0.08] bg-ink-2/60 sm:rounded-[36px] lg:grid-cols-[1fr_1.1fr]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 grid-lines opacity-[0.05]"
          />

          <div className="relative z-20 flex flex-col justify-center gap-6 p-7 sm:p-12 lg:p-16">
            <p className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-mute">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
                <span className="absolute -inset-1 rounded-full bg-accent/30 blur-[3px]" />
              </span>
              No grid expansion
            </p>
            <h2 className="font-display tracking-normal text-[clamp(1.85rem,4.5vw,3.25rem)] font-normal leading-[1.05] text-paper">
              Designed to perform{" "}
              <span className="italic text-accent">without grid expansion</span>.
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-paper/65 sm:text-base">
              This project was executed within fixed electrical limits and
              defined operating schedules&mdash;proof that the right design
              clears the bottleneck instead of waiting on the utility.
            </p>
          </div>

          <div className="relative min-h-[260px] overflow-hidden sm:min-h-[340px] lg:min-h-[460px]">
            <Image
              src="/3.png"
              alt="Site operating within fixed electrical limits"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-2 via-ink-2/20 to-transparent lg:via-ink-2/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 grid-lines opacity-[0.12]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
