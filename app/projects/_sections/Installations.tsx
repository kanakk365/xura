"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export function ProjectsInstallations() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="installations"
      ref={ref}
      className="relative bg-ink-2/40 py-20 sm:py-28 lg:py-36"
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
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.1, 1] }}
            className="order-2 border-l border-paper/15 pl-6 sm:pl-8 lg:order-1"
          >
            <p className="mb-4 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-mute">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
                <span className="absolute -inset-1 rounded-full bg-accent/30 blur-[3px]" />
              </span>
              Track record
            </p>
            <h2 className="font-display tracking-normal text-[clamp(1.85rem,5vw,3.5rem)] font-normal leading-[1.05] text-paper">
              Past Installations
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-paper/70 sm:text-base">
              Proven execution partner with a strong track record of completing
              hundreds of installations for Fortune 500 clients, supported by an
              active footprint across the Northeast.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-paper/[0.08] bg-paper/[0.02] px-4 py-3">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-accent/30 bg-accent/[0.08]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path
                    d="M3.5 12h17M12 3.2c2.6 2.4 2.6 14.2 0 17.6M12 3.2c-2.6 2.4-2.6 14.2 0 17.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="flex flex-col">
                <span className="font-display tracking-normal text-[1.05rem] font-normal leading-none text-paper">
                  Woodhollow
                </span>
                <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.24em] text-mute">
                  Energy Group
                </span>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.2, 0.7, 0.1, 1] }}
            className="relative order-1 overflow-hidden rounded-2xl border border-paper/[0.08] bg-[#070707] sm:rounded-[28px] lg:order-2"
          >
            <Image
              src="/installations-map.png"
              alt="Completed installations across New York and Connecticut"
              width={965}
              height={398}
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="block h-auto w-full"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-paper/[0.06] sm:rounded-[28px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
