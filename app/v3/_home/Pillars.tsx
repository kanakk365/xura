"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

import { EASE, Em, SectionHead } from "../_components/primitives";

type Pillar = {
  code: string;
  title: string;
  body: string;
  metricLabel: string;
  metric: string;
  glyph: (on: boolean) => React.ReactNode;
};

const stroke = (on: boolean) => (on ? "#8bfb03" : "rgba(255,255,255,0.25)");

const PILLARS: Pillar[] = [
  {
    code: "Pillar 01",
    title: "Viable utility interconnections",
    body: "We map distribution feeder hosting capacity, substation thermal headroom and existing commercial service drops, finding sites where power connects quickly without multi-year utility rebuilds.",
    metricLabel: "Queue risk",
    metric: "Eliminated",
    glyph: (on) => (
      <>
        <path d="M6 40 L22 8 L38 40" fill="none" stroke={stroke(on)} strokeWidth="2" strokeLinejoin="round" />
        <path d="M11 30 H33 M14 22 H30" stroke={stroke(on)} strokeWidth="2" />
        <motion.path d="M38 16 H58" stroke="#8bfb03" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: on ? 1 : 0 }} transition={{ duration: 0.8, delay: 0.3, ease: EASE }} />
        <rect x="58" y="10" width="12" height="12" rx="2" fill="none" stroke={stroke(on)} strokeWidth="2" />
      </>
    ),
  },
  {
    code: "Pillar 02",
    title: "Pre-cleared zoning approval",
    body: "Automated code and parcel-envelope analysis qualifies our compact 350 to 2,500 sq ft Power Hubs for as-of-right permitting, compressing timelines from years to about six months from LOI.",
    metricLabel: "Turnaround",
    metric: "~6 months",
    glyph: (on) => (
      <>
        <rect x="6" y="8" width="64" height="32" rx="3" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeDasharray="5 4" />
        <motion.rect x="40" y="18" width="20" height="14" rx="2" fill="#8bfb03" initial={{ scale: 0 }} animate={{ scale: on ? 1 : 0 }} style={{ transformOrigin: "50px 25px" }} transition={{ duration: 0.5, delay: 0.3, ease: EASE }} />
        <path d="M14 30 l5 5 l9 -11" fill="none" stroke={stroke(on)} strokeWidth="2.4" strokeLinecap="round" />
      </>
    ),
  },
  {
    code: "Pillar 03",
    title: "High-capacity fiber routes",
    body: "Lit and dark fiber is overlaid directly onto energy parcels, enabling low-latency telemetry, autonomous microgrid dispatch, edge compute and 99.99% uptime payment and charger orchestration.",
    metricLabel: "Connectivity",
    metric: "Redundant fiber",
    glyph: (on) => (
      <>
        <path d="M4 16 C24 16 28 32 48 32 S 66 18 72 18" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <path d="M4 32 C24 32 28 16 48 16 S 66 30 72 30" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <motion.path d="M4 16 C24 16 28 32 48 32 S 66 18 72 18" fill="none" stroke="#8bfb03" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: on ? 1 : 0 }} transition={{ duration: 1, delay: 0.3, ease: EASE }} />
        <motion.path d="M4 32 C24 32 28 16 48 16 S 66 30 72 30" fill="none" stroke="#8bfb03" strokeWidth="2" strokeOpacity="0.55" initial={{ pathLength: 0 }} animate={{ pathLength: on ? 1 : 0 }} transition={{ duration: 1, delay: 0.5, ease: EASE }} />
      </>
    ),
  },
  {
    code: "Pillar 04",
    title: "Generation & safe storage",
    body: "Where grid power is constrained, Xura deploys solid-oxide fuel cells, linear generators, industrial UPS and 2.5C battery storage engineered above and beyond UL 9540A.",
    metricLabel: "Safety tier",
    metric: "Napkin tested",
    glyph: (on) => (
      <>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={6 + i * 17} y="10" width="13" height="30" rx="2" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
            <motion.rect
              x={8 + i * 17} width="9" rx="1" fill="#8bfb03"
              initial={{ height: 0, y: 38 }}
              animate={{ height: on ? 26 - i * 3 : 0, y: on ? 38 - (26 - i * 3) : 38 }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: EASE }}
            />
          </g>
        ))}
      </>
    ),
  },
];

export function Pillars() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();
  const on = inView || !!reduce;

  return (
    <section id="platform" className="op-section">
      <div className="op-shell">
        <SectionHead
          kicker="Proprietary platform"
          title={
            <>
              Four pillars, <Em>verified</Em> before a shovel moves.
            </>
          }
          lead="Most energy and EV projects fail because developers pick parcels blindly, then get trapped in utility queues or zoning battles. Xura's platform pre-validates four mandatory pillars before deployment."
        />

        <div ref={ref} className="op-cells mt-14 grid-cols-1 md:grid-cols-2">
          {PILLARS.map((p, i) => (
            <motion.article
              key={p.code}
              initial={reduce ? false : { opacity: 0 }}
              animate={on ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group flex flex-col p-7 transition-colors duration-300 hover:bg-[#101010] sm:p-9 lg:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="op-label !text-accent">{p.code}</span>
                <svg viewBox="0 0 76 48" className="h-12 w-[76px] shrink-0" aria-hidden="true">
                  {p.glyph(on)}
                </svg>
              </div>
              <h3 className="op-h3 mt-6">
                {p.title}
              </h3>
              <p className="mt-4 max-w-[54ch] text-[15px] leading-[1.7] text-paper/60">{p.body}</p>
              <div aria-hidden="true" className="min-h-7 flex-1" />
              <div className="flex items-center justify-between gap-4 border-t border-paper/10 pt-5">
                <span className="op-label">{p.metricLabel}</span>
                <span className="font-display text-[1.15rem] italic text-accent">{p.metric}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
