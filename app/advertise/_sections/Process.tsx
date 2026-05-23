"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Step = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  body: string;
  duration: string;
};

const STEPS: Step[] = [
  {
    id: "brief",
    number: "01",
    title: "Brief & match.",
    tagline: "Day 1.",
    body: "Share your goals, audience, and creative direction. We match you with the right tier and confirm available inventory windows.",
    duration: "~24 hrs",
  },
  {
    id: "creative",
    number: "02",
    title: "Creative & sign-off.",
    tagline: "Day 2–4.",
    body: "Upload creative or use our design team. Our editorial reviewer ensures fit, accessibility, and load performance before approval.",
    duration: "48–72 hrs",
  },
  {
    id: "schedule",
    number: "03",
    title: "Schedule & QA.",
    tagline: "Day 4–5.",
    body: "We slot your campaign into the inventory calendar, run pre-flight QA on all device classes, and confirm tracking with you.",
    duration: "~24 hrs",
  },
  {
    id: "live",
    number: "04",
    title: "Launch & monitor.",
    tagline: "Day 5+.",
    body: "Your campaign goes live with real-time delivery telemetry. Reporting cadence follows your tier — daily through weekly briefs.",
    duration: "Ongoing",
  },
];

export function AdvertiseProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="process"
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
              Process
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.1, 1] }}
              className="font-display tracking-normal text-[clamp(1.85rem,6vw,3.5rem)] font-normal leading-[1.05] text-paper"
            >
              From brief to{" "}
              <span className="italic text-accent">live</span> in five days.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.1, 1] }}
            className="max-w-sm text-[15px] leading-relaxed text-paper/60 sm:text-base"
          >
            No RFPs, no waterfalls. Four predictable steps with a media planner
            staying close from kickoff to launch.
          </motion.p>
        </header>

        <ol className="relative grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-accent/0 via-paper/10 to-accent/0 md:hidden"
          />
          {STEPS.map((s, i) => (
            <StepCard
              key={s.id}
              step={s}
              index={i}
              total={STEPS.length}
              isInView={isInView}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
  total,
  isInView,
}: {
  step: Step;
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
      className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-paper/[0.08] bg-ink-2/60 p-6 transition-colors duration-500 hover:bg-ink-2 sm:rounded-[28px] sm:p-7"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.04]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-4 select-none font-display text-[clamp(3rem,5vw,4.5rem)] italic leading-[0.82] text-paper/[0.05]"
      >
        {step.number}
      </div>

      <div className="relative flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.3em] text-accent">
        <span className="relative inline-flex h-1.5 w-1.5">
          <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
        </span>
        Step
        <span className="font-mono tracking-[0.2em] text-mute">
          &middot; {step.number} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <div className="relative flex flex-col gap-2.5">
        <p className="flex items-center gap-2.5 font-display text-[13px] italic leading-none text-accent/85">
          <span className="block h-px w-5 bg-accent/55" />
          {step.tagline}
        </p>
        <h3 className="font-display tracking-normal text-[clamp(1.25rem,1.75vw,1.55rem)] font-normal leading-[1.1] text-paper">
          {step.title}
        </h3>
      </div>

      <p className="relative text-[13px] leading-[1.55] text-paper/65">
        {step.body}
      </p>

      <div className="relative mt-auto flex items-center justify-between gap-3 border-t border-paper/10 pt-4">
        <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-mute">
          Duration
        </span>
        <span className="font-display tracking-normal text-[14px] font-normal text-paper">
          {step.duration}
        </span>
      </div>
    </motion.li>
  );
}
