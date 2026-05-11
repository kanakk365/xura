"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";

import { ArrowUpRight } from "./icons";

const SITE_TYPES = [
  "Fleet depot",
  "Commercial CRE",
  "Multifamily",
  "Industrial / other",
];

const TIMELINES = ["< 6 months", "6–12 months", "12+ months", "Exploring"];

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const reduce = useReducedMotion();
  const [siteType, setSiteType] = useState(SITE_TYPES[0]);
  const [timeline, setTimeline] = useState(TIMELINES[1]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-ink py-24 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.2, 0.7, 0.1, 1] }}
          className="relative overflow-hidden rounded-[36px] border border-paper/[0.08] bg-ink-2/60"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 grid-lines opacity-[0.08]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 "
          />

          <svg
            aria-hidden="true"
            viewBox="0 0 800 360"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full opacity-30"
          >
            <defs>
              <linearGradient id="contact-trace" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#8bfb03" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0 280 Q 200 220 400 240 T 800 180"
              stroke="url(#contact-trace)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              fill="none"
              initial={{ pathLength: reduce ? 1 : 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2.4, ease: [0.2, 0.7, 0.1, 1] }}
            />
            <motion.path
              d="M0 320 Q 240 360 480 300 T 800 240"
              stroke="url(#contact-trace)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              fill="none"
              initial={{ pathLength: reduce ? 1 : 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{
                duration: 2.4,
                delay: 0.2,
                ease: [0.2, 0.7, 0.1, 1],
              }}
            />
          </svg>

          <div className="relative grid grid-cols-1 gap-12 p-8 sm:p-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:p-16">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mb-6 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-mute"
              >
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
                  <span className="absolute -inset-1 rounded-full bg-accent/30 blur-[3px]" />
                </span>
                Contact
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.25 }}
                className="font-display tracking-normal text-[clamp(2.1rem,4.4vw,3.75rem)] font-normal leading-[1.05] text-paper"
              >
                Send us a meter and a parcel.{" "}
                <span className="italic text-accent">
                    We&rsquo;ll send back a plan
                  </span>
                .
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="mt-7 max-w-md text-base leading-relaxed text-paper/65"
              >
                Two-week feasibility memo with right-sized system options and
                an honest read on the interconnection path&mdash;before any
                contracts.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="mt-9 flex flex-col gap-3 text-sm text-paper/70"
              >
                {[
                  "Honest feasibility — yes/no, not a sales pitch",
                  "Right-sized system options with budgets",
                  "Capital structure if you need it",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="mt-[7px] inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {line}
                  </li>
                ))}
              </motion.ul>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="relative flex flex-col gap-5 rounded-[28px] border border-paper/[0.08] bg-ink/70 p-6 backdrop-blur-md sm:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex items-center justify-between text-[10px] font-normal tracking-[0.3em]">
                <span className="flex items-center gap-2 text-accent">
                  <span className="relative inline-flex h-1.5 w-1.5">
                    <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
                  </span>
                  Project intake
                </span>
                <span className="font-mono tracking-[0.08em] text-mute">
                  ~ 2 min
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Name" id="ct-name" placeholder="Jane Doe" />
                <Field
                  label="Company"
                  id="ct-company"
                  placeholder="Acme Logistics"
                />
              </div>

              <Field
                label="Email"
                id="ct-email"
                type="email"
                placeholder="jane@acme.com"
              />

              <ChoiceGroup
                label="Site type"
                value={siteType}
                onChange={setSiteType}
                options={SITE_TYPES}
              />

              <ChoiceGroup
                label="Timeline"
                value={timeline}
                onChange={setTimeline}
                options={TIMELINES}
              />

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="ct-notes"
                  className="font-mono text-[10px] font-normal tracking-[0.08em] text-mute"
                >
                  Notes
                </label>
                <textarea
                  id="ct-notes"
                  rows={3}
                  placeholder="Service size, parking count, anything else..."
                  className="resize-none rounded-xl border border-paper/[0.08] bg-paper/[0.02] px-4 py-3 text-sm text-paper placeholder:text-mute focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/30"
                />
              </div>

              <button
                type="submit"
                className="group relative mt-2 inline-flex h-12 items-center justify-center gap-3 overflow-hidden rounded-full bg-accent px-6 text-sm font-normal tracking-[0.1em] text-ink transition-transform hover:-translate-y-0.5"
              >
                <span className="relative z-10">Request feasibility memo</span>
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
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-[10px] font-normal tracking-[0.08em] text-mute"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="h-11 rounded-xl border border-paper/[0.08] bg-paper/[0.02] px-4 text-sm text-paper placeholder:text-mute focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/30"
      />
    </div>
  );
}

function ChoiceGroup({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-mono text-[10px] font-normal tracking-[0.08em] text-mute">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((option) => {
          const active = option === value;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`relative inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.1em] transition-colors duration-200 ${
                active
                  ? "border-accent/50 bg-accent/10 text-accent"
                  : "border-paper/[0.08] bg-paper/[0.02] text-paper/65 hover:border-paper/20"
              }`}
            >
              <span
                className={`h-1 w-1 rounded-full ${
                  active ? "bg-accent" : "bg-paper/35"
                }`}
              />
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
