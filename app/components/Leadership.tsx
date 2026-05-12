"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Discipline = {
  id: string;
  number: string;
  label: string;
  title: string;
  body: string;
  glyph: (active: boolean) => React.ReactNode;
};

const DISCIPLINES: Discipline[] = [
  {
    id: "real-estate",
    number: "01",
    label: "Real Estate",
    title: "Operators who have built the assets your sites sit on.",
    body: "Underwriting, leasing, and capital structuring across commercial real estate. We read a parcel the way an owner does, not the way a vendor pitches it.",
    glyph: (active) => (
      <g>
        <defs>
          <radialGradient id="lead-grad-1" cx="0.5" cy="0.4">
            <stop
              offset="0%"
              stopColor={active ? "#8bfb03" : "rgba(255,255,255,0.18)"}
              stopOpacity="0.7"
            />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle cx="80" cy="64" r="46" fill="url(#lead-grad-1)" />
        <g
          stroke={active ? "#8bfb03" : "rgba(255,255,255,0.45)"}
          strokeWidth="1.2"
          fill="none"
        >
          <rect x="40" y="42" width="80" height="52" rx="2" strokeDasharray="3 4" />
          <rect x="52" y="54" width="14" height="14" />
          <rect x="74" y="54" width="14" height="14" />
          <rect x="96" y="54" width="14" height="14" />
          <rect x="52" y="74" width="14" height="14" />
          <rect x="74" y="74" width="14" height="14" />
          <rect x="96" y="74" width="14" height="14" />
        </g>
        <g
          stroke={active ? "#8bfb03" : "rgba(255,255,255,0.55)"}
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        >
          <line x1="40" y1="100" x2="120" y2="100" />
        </g>
      </g>
    ),
  },
  {
    id: "energy",
    number: "02",
    label: "Energy Engineering",
    title: "Engineers who have planned the utility you're connecting to.",
    body: "Interconnection studies, load modeling, BESS sizing, and controls. The same people who write the feasibility memo see the system commissioned.",
    glyph: (active) => (
      <g>
        <defs>
          <radialGradient id="lead-grad-2" cx="0.5" cy="0.4">
            <stop
              offset="0%"
              stopColor={active ? "#8bfb03" : "rgba(255,255,255,0.18)"}
              stopOpacity="0.7"
            />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle cx="80" cy="64" r="46" fill="url(#lead-grad-2)" />
        <g
          stroke={active ? "#8bfb03" : "rgba(255,255,255,0.45)"}
          strokeWidth="1.2"
          fill="none"
        >
          <circle cx="80" cy="64" r="36" strokeDasharray="3 4" />
        </g>
        <g
          stroke={active ? "#8bfb03" : "rgba(255,255,255,0.7)"}
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 86 42 L 70 66 L 82 66 L 74 86 L 92 60 L 80 60 Z" />
        </g>
        <g
          stroke={active ? "#8bfb03" : "rgba(255,255,255,0.55)"}
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        >
          <line x1="22" y1="64" x2="34" y2="64" />
          <line x1="126" y1="64" x2="138" y2="64" />
        </g>
      </g>
    ),
  },
  {
    id: "construction",
    number: "03",
    label: "Construction & Ops",
    title: "Field leaders who have commissioned the sites running today.",
    body: "EPC scopes, AHJ navigation, and long-term operations. They know what the install crew will tolerate at 2am — and what the equipment needs at year five.",
    glyph: (active) => (
      <g>
        <defs>
          <radialGradient id="lead-grad-3" cx="0.5" cy="0.4">
            <stop
              offset="0%"
              stopColor={active ? "#8bfb03" : "rgba(255,255,255,0.18)"}
              stopOpacity="0.7"
            />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle cx="80" cy="64" r="46" fill="url(#lead-grad-3)" />
        <g
          stroke={active ? "#8bfb03" : "rgba(255,255,255,0.45)"}
          strokeWidth="1.2"
          fill="none"
        >
          <polygon
            points="80,28 122,48 122,100 38,100 38,48"
            strokeDasharray="3 4"
          />
        </g>
        <g
          stroke={active ? "#8bfb03" : "rgba(255,255,255,0.65)"}
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        >
          <line x1="62" y1="68" x2="98" y2="68" />
          <line x1="62" y1="80" x2="98" y2="80" />
          <line x1="62" y1="92" x2="98" y2="92" />
        </g>
      </g>
    ),
  },
];

export function Leadership() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="leadership"
      ref={ref}
      className="relative bg-ink py-24 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <header className="mb-14 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
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
              Leadership
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.1, 1] }}
              className="font-display tracking-normal text-[clamp(2rem,4.4vw,3.75rem)] font-normal leading-[1.05] text-paper"
            >
              Built by{" "}
              <span className="italic text-accent">operators</span>
              .
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.1, 1] }}
            className="max-w-sm text-base leading-relaxed text-paper/60"
          >
            Real estate, energy, and construction operators who have deployed
            infrastructure in constrained, real-world environments. The team
            you talk to is the team who&rsquo;s done it.
          </motion.p>
        </header>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-4">
          {DISCIPLINES.map((d, i) => (
            <DisciplineCard
              key={d.id}
              discipline={d}
              index={i}
              isInView={isInView}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function DisciplineCard({
  discipline,
  index,
  isInView,
}: {
  discipline: Discipline;
  index: number;
  isInView: boolean;
}) {
  const delay = 0.3 + index * 0.12;

  return (
    <motion.li
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.2, 0.7, 0.1, 1] }}
      className="group relative overflow-hidden rounded-[28px] border border-paper/[0.08] bg-ink-2/60 transition-colors duration-500 hover:border-accent/30"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.06]"
      />

      <div className="relative flex h-full flex-col gap-7 p-7 sm:p-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#080808]">
          <div
            aria-hidden="true"
            className="absolute inset-0 grid-lines opacity-[0.18]"
          />
          <svg
            viewBox="0 0 160 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
          >
            {discipline.glyph(false)}
            <g className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {discipline.glyph(true)}
            </g>
          </svg>

          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-paper/15 bg-ink/70 px-3 py-1 backdrop-blur-md">
            <span className="font-mono text-[10px] font-normal tracking-[0.08em] text-paper/70">
              {discipline.label}
            </span>
          </div>

          <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-ink/70 px-3 py-1 backdrop-blur-md">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
            </span>
            <span className="font-mono text-[10px] font-normal tracking-[0.08em] text-accent">
              {discipline.number}
            </span>
          </div>
        </div>

        <div>
          <h3 className="font-display tracking-normal text-[clamp(1.3rem,1.9vw,1.55rem)] font-normal leading-[1.15] text-paper">
            {discipline.title}
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-paper/65">
            {discipline.body}
          </p>
        </div>
      </div>
    </motion.li>
  );
}
