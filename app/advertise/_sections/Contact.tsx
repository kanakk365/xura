"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";

import { ArrowUpRight } from "../../components/icons";

const TIERS = ["Pulse", "Surge", "Voltage", "Bespoke"];
const BUDGETS = ["< $5k / mo", "$5–25k / mo", "$25–100k / mo", "$100k+ / mo"];
const START_WINDOWS = ["Within 2 weeks", "This quarter", "Next quarter", "Exploring"];

export function AdvertiseContact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const reduce = useReducedMotion();
  const [tier, setTier] = useState(TIERS[1]);
  const [budget, setBudget] = useState(BUDGETS[1]);
  const [start, setStart] = useState(START_WINDOWS[1]);

  return (
    <section
      id="advertise-contact"
      ref={ref}
      className="relative bg-ink py-20 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.2, 0.7, 0.1, 1] }}
          className="relative overflow-hidden rounded-3xl border border-paper/[0.08] bg-ink-2/60 sm:rounded-[36px]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 grid-lines opacity-[0.08]"
          />

          <svg
            aria-hidden="true"
            viewBox="0 0 800 360"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full opacity-30"
          >
            <defs>
              <linearGradient id="advert-trace" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#8bfb03" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0 280 Q 200 220 400 240 T 800 180"
              stroke="url(#advert-trace)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              fill="none"
              initial={{ pathLength: reduce ? 1 : 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2.4, ease: [0.2, 0.7, 0.1, 1] }}
            />
            <motion.path
              d="M0 320 Q 240 360 480 300 T 800 240"
              stroke="url(#advert-trace)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              fill="none"
              initial={{ pathLength: reduce ? 1 : 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2.4, delay: 0.2, ease: [0.2, 0.7, 0.1, 1] }}
            />
          </svg>

          <div className="relative grid grid-cols-1 gap-10 p-6 sm:gap-12 sm:p-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:p-16">
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
                Reserve a slot
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.25 }}
                className="font-display tracking-normal text-[clamp(1.85rem,6vw,3.75rem)] font-normal leading-[1.05] text-paper"
              >
                Get a{" "}
                <span className="italic text-accent">media plan</span> in your
                inbox.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/65 sm:mt-7 sm:text-base"
              >
                Tell us a little about your brand, who you&rsquo;re trying to
                reach, and the slot you&rsquo;re eyeing. We&rsquo;ll come back
                with availability, pricing, and a creative checklist within 1
                business day.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="mt-9 flex flex-col gap-3 text-sm text-paper/70"
              >
                {[
                  "Inventory availability for your start window",
                  "Recommended placement mix for your goal",
                  "Creative spec sheet & launch checklist",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="mt-[7px] inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {line}
                  </li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.6 }}
                className="mt-10 inline-flex items-center gap-3 rounded-full border border-paper/[0.08] bg-paper/[0.02] px-4 py-2"
              >
                <span className="font-mono text-[10px] font-normal tracking-[0.24em] text-mute">
                  Direct
                </span>
                <span className="font-mono text-[11px] tracking-[0.1em] text-paper">
                  media@xura.com
                </span>
              </motion.div>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="relative flex flex-col gap-5 rounded-2xl border border-paper/[0.08] bg-ink/70 p-5 backdrop-blur-md sm:rounded-[28px] sm:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex items-center justify-between text-[10px] font-normal tracking-[0.3em]">
                <span className="flex items-center gap-2 text-accent">
                  <span className="relative inline-flex h-1.5 w-1.5">
                    <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
                  </span>
                  Media intake
                </span>
                <span className="font-mono tracking-[0.08em] text-mute">
                  ~ 90 sec
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field
                  label="Brand / Agency"
                  id="ad-brand"
                  placeholder="North Star Media"
                />
                <Field
                  label="Contact name"
                  id="ad-name"
                  placeholder="Jane Doe"
                />
              </div>

              <Field
                label="Work email"
                id="ad-email"
                type="email"
                placeholder="jane@brand.co"
              />

              <ChoiceGroup
                label="Tier of interest"
                value={tier}
                onChange={setTier}
                options={TIERS}
              />

              <ChoiceGroup
                label="Monthly budget"
                value={budget}
                onChange={setBudget}
                options={BUDGETS}
              />

              <ChoiceGroup
                label="Start window"
                value={start}
                onChange={setStart}
                options={START_WINDOWS}
              />

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="ad-notes"
                  className="font-mono text-[10px] font-normal tracking-[0.08em] text-mute"
                >
                  Campaign notes
                </label>
                <textarea
                  id="ad-notes"
                  rows={3}
                  placeholder="Goals, audience, creative direction, anything we should know..."
                  className="resize-none rounded-xl border border-paper/[0.08] bg-paper/[0.02] px-4 py-3 text-[16px] text-paper placeholder:text-mute focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/30 sm:text-sm"
                />
              </div>

              <button
                type="submit"
                className="group relative mt-2 inline-flex h-12 items-center justify-center gap-3 overflow-hidden rounded-full bg-accent px-6 text-sm font-normal tracking-[0.1em] text-ink transition-transform hover:-translate-y-0.5"
              >
                <span className="relative z-10">Request media plan</span>
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
        className="h-11 rounded-xl border border-paper/[0.08] bg-paper/[0.02] px-4 text-[16px] text-paper placeholder:text-mute focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/30 sm:text-sm"
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
