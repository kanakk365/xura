"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const OVERSIZED = [
  "Capital tied up in capacity that never gets used",
  "Higher operational overhead and maintenance surface",
  "Utility upgrades you may never actually need",
];

const RIGHTSIZED = [
  "Capital matched to real, measured site demand",
  "Lower operational and capital risk over the asset life",
  "Efficiency gains without forced grid upgrades",
];

export function StrategyRightSized() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="right-sized"
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
        <div className="grid grid-cols-1 gap-10 sm:gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="flex flex-col lg:sticky lg:top-24 lg:self-start">
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
              Right-sized infrastructure
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.1, 1] }}
              className="font-display tracking-normal text-[clamp(1.85rem,5vw,3.5rem)] font-normal leading-[1.05] text-paper"
            >
              Sized for the site,{" "}
              <span className="italic text-accent">not the spec sheet</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.2, 0.7, 0.1, 1] }}
              className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/65 sm:text-base"
            >
              We prioritize systems that match actual site demand over
              speculative oversizing. That discipline is why the strategy
              matters: it reduces capital and operational risk while supporting
              efficiency&mdash;without unnecessary utility upgrades.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.2, 0.7, 0.1, 1] }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
          >
            <Ledger
              variant="muted"
              tag="Oversized"
              caption="The speculative default"
              items={OVERSIZED}
            />
            <Ledger
              variant="accent"
              tag="Right-sized"
              caption="The Xura approach"
              items={RIGHTSIZED}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Ledger({
  variant,
  tag,
  caption,
  items,
}: {
  variant: "muted" | "accent";
  tag: string;
  caption: string;
  items: string[];
}) {
  const accent = variant === "accent";

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-2xl border p-6 sm:rounded-[28px] sm:p-8 ${
        accent
          ? "border-accent/30 bg-accent/[0.05]"
          : "border-paper/[0.08] bg-ink/50"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.04]"
      />

      <div className="relative flex items-center justify-between gap-3">
        <span
          className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
            accent ? "text-accent" : "text-mute"
          }`}
        >
          {tag}
        </span>
        <span
          className={`inline-flex h-1.5 w-1.5 rounded-full ${
            accent ? "bg-accent" : "bg-paper/25"
          }`}
        />
      </div>

      <p className="relative mt-2 font-display tracking-normal text-[1.25rem] font-normal leading-tight text-paper">
        {caption}
      </p>

      <ul className="relative mt-6 flex flex-col gap-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            {accent ? (
              <span
                aria-hidden="true"
                className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/20"
              >
                <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                  <path
                    d="M2 6.2 4.6 8.8 10 3.6"
                    stroke="#8bfb03"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            ) : (
              <span
                aria-hidden="true"
                className="mt-2 inline-block h-px w-3 shrink-0 bg-paper/30"
              />
            )}
            <span
              className={`text-[13.5px] leading-[1.55] ${
                accent ? "text-paper/85" : "text-paper/55"
              }`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
