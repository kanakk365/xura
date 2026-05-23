"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

type AudienceSegment = {
  id: string;
  code: string;
  label: string;
  share: number;
  meta: string;
};

const SEGMENTS: AudienceSegment[] = [
  {
    id: "fleet",
    code: "01",
    label: "Fleet operators",
    share: 34,
    meta: "Logistics, last-mile, transit",
  },
  {
    id: "cre",
    code: "02",
    label: "CRE owners & developers",
    share: 27,
    meta: "Industrial, retail, multifamily",
  },
  {
    id: "capital",
    code: "03",
    label: "Capital partners",
    share: 22,
    meta: "Infra funds, IPPs, family offices",
  },
  {
    id: "engineers",
    code: "04",
    label: "Engineers & EPC",
    share: 17,
    meta: "Designers, integrators, AHJs",
  },
];

export function AdvertiseAudience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const reduce = useReducedMotion();

  return (
    <section
      id="audience"
      ref={ref}
      className="relative bg-ink py-20 sm:py-28 lg:py-32"
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
        <header className="mb-10 flex flex-col gap-6 sm:mb-14 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
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
              Audience
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.1, 1] }}
              className="font-display tracking-normal text-[clamp(1.85rem,6vw,3.5rem)] font-normal leading-[1.05] text-paper"
            >
              Who actually opens{" "}
              <span className="italic text-accent">xura.com</span>.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.1, 1] }}
            className="max-w-sm text-[15px] leading-relaxed text-paper/60 sm:text-base"
          >
            We don&rsquo;t chase impressions. Xura&rsquo;s readership is a
            narrow band of high-intent buyers &mdash; the people writing checks,
            permitting projects, and signing site agreements.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.05fr_1fr] lg:gap-5">
          <div className="relative overflow-hidden rounded-2xl border border-paper/[0.08] bg-ink-2/60 p-6 sm:rounded-[28px] sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 grid-lines opacity-[0.04]"
            />

            <div className="relative mb-7 flex items-center justify-between gap-3 text-[10px] font-normal tracking-[0.3em]">
              <span className="flex items-center gap-2 text-paper/70">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Composition
              </span>
              <span className="font-mono tracking-[0.2em] text-mute">
                Last 90 days
              </span>
            </div>

            <ol className="relative flex flex-col gap-5">
              {SEGMENTS.map((s, i) => (
                <SegmentBar
                  key={s.id}
                  segment={s}
                  delay={0.3 + i * 0.1}
                  isInView={isInView}
                  reduce={reduce ?? false}
                />
              ))}
            </ol>

            <div className="relative mt-8 flex items-center gap-3 border-t border-paper/10 pt-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                Source
              </span>
              <span className="h-px flex-1 bg-paper/10" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/70">
                First-party analytics
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <MetricCard
              eyebrow="Reach"
              value="84K"
              unit="readers / mo"
              copy="Unique monthly visitors across desktop and mobile."
              delay={0.35}
              isInView={isInView}
            />
            <MetricCard
              eyebrow="Quality"
              value="6:42"
              unit="avg session"
              copy="Visitors stay deep &mdash; long enough to read full case studies."
              delay={0.45}
              isInView={isInView}
            />
            <MetricCard
              eyebrow="Intent"
              value="71%"
              unit="decision-makers"
              copy="Title-verified directors, VPs, principals, and asset owners."
              delay={0.55}
              isInView={isInView}
            />
            <MetricCard
              eyebrow="Geography"
              value="12+"
              unit="US metros"
              copy="Concentrated in markets with active fleet electrification."
              delay={0.65}
              isInView={isInView}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SegmentBar({
  segment,
  delay,
  isInView,
  reduce,
}: {
  segment: AudienceSegment;
  delay: number;
  isInView: boolean;
  reduce: boolean;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.1, 1] }}
      className="flex flex-col gap-2.5"
    >
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-mute">
            {segment.code}
          </span>
          <span className="font-display tracking-normal text-[clamp(1rem,1.4vw,1.2rem)] font-normal text-paper">
            {segment.label}
          </span>
        </div>
        <span className="font-display text-[clamp(1.1rem,1.6vw,1.4rem)] italic text-accent">
          {segment.share}%
        </span>
      </div>

      <div className="relative h-[6px] overflow-hidden rounded-full bg-paper/[0.05]">
        <motion.div
          initial={{ width: reduce ? `${segment.share}%` : 0 }}
          animate={isInView ? { width: `${segment.share}%` } : {}}
          transition={{ duration: 1.1, delay: delay + 0.1, ease: [0.2, 0.7, 0.1, 1] }}
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent/70 to-accent shadow-[0_0_12px_rgba(139,251,3,0.45)]"
        />
      </div>

      <p className="text-[12px] leading-snug text-paper/55">{segment.meta}</p>
    </motion.li>
  );
}

function MetricCard({
  eyebrow,
  value,
  unit,
  copy,
  delay,
  isInView,
}: {
  eyebrow: string;
  value: string;
  unit: string;
  copy: string;
  delay: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.1, 1] }}
      className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-paper/[0.08] bg-ink-2/50 p-5 transition-colors duration-500 hover:bg-ink-2 sm:rounded-[24px] sm:p-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.04]"
      />
      <div className="relative flex items-center gap-2 text-[9.5px] font-medium uppercase tracking-[0.24em] text-accent">
        <span className="h-1 w-1 rounded-full bg-accent" />
        {eyebrow}
      </div>
      <div className="relative flex items-baseline gap-2">
        <span className="font-display tracking-normal text-[clamp(1.85rem,3vw,2.5rem)] font-normal leading-none text-paper">
          {value}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-mute">
          {unit}
        </span>
      </div>
      <p
        className="relative mt-auto text-[12.5px] leading-snug text-paper/65"
        dangerouslySetInnerHTML={{ __html: copy }}
      />
    </motion.div>
  );
}
