"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Leader = {
  id: string;
  name: string;
  title: string;
  background: string;
  initials: string;
  credentials: string[];
  portrait: (active: boolean) => React.ReactNode;
};

const LEADERS: Leader[] = [
  {
    id: "founder",
    name: "Jaime Echeverria",
    title: "Founder & Principal",
    background:
      "Twenty years across commercial real estate, energy assets, and project finance. Underwrote and built across 4M+ sqft before launching Xura.",
    initials: "JE",
    credentials: ["CRE · 20Y", "PE · Energy", "MBA"],
    portrait: (active) => (
      <g>
        <defs>
          <radialGradient id="leader-grad-1" cx="0.5" cy="0.4">
            <stop
              offset="0%"
              stopColor={active ? "#8bfb03" : "rgba(255,255,255,0.18)"}
              stopOpacity="0.7"
            />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle cx="80" cy="64" r="46" fill="url(#leader-grad-1)" />
        <g
          stroke={active ? "#8bfb03" : "rgba(255,255,255,0.4)"}
          strokeWidth="1.2"
          fill="none"
        >
          <circle cx="80" cy="64" r="58" strokeDasharray="3 4" />
          <circle cx="80" cy="64" r="38" />
        </g>
        <g
          stroke={active ? "#8bfb03" : "rgba(255,255,255,0.55)"}
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        >
          <line x1="80" y1="14" x2="80" y2="22" />
          <line x1="80" y1="106" x2="80" y2="114" />
          <line x1="22" y1="64" x2="30" y2="64" />
          <line x1="130" y1="64" x2="138" y2="64" />
        </g>
      </g>
    ),
  },
  {
    id: "energy",
    name: "Marisol Vargas",
    title: "Head of Energy Engineering",
    background:
      "Former utility planning lead. Designed interconnection studies for the projects she now sequences for clients.",
    initials: "MV",
    credentials: ["PE", "Utility 12Y", "BESS"],
    portrait: (active) => (
      <g>
        <defs>
          <radialGradient id="leader-grad-2" cx="0.5" cy="0.4">
            <stop
              offset="0%"
              stopColor={active ? "#8bfb03" : "rgba(255,255,255,0.18)"}
              stopOpacity="0.7"
            />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle cx="80" cy="64" r="46" fill="url(#leader-grad-2)" />
        <g
          stroke={active ? "#8bfb03" : "rgba(255,255,255,0.4)"}
          strokeWidth="1.2"
          fill="none"
        >
          <rect x="22" y="22" width="116" height="84" rx="3" strokeDasharray="3 4" />
          <rect x="42" y="42" width="76" height="44" rx="2" />
        </g>
        <g
          stroke={active ? "#8bfb03" : "rgba(255,255,255,0.55)"}
          strokeWidth="1.2"
          fill="none"
        >
          <line x1="22" y1="64" x2="42" y2="64" />
          <line x1="118" y1="64" x2="138" y2="64" />
          <line x1="80" y1="22" x2="80" y2="42" />
          <line x1="80" y1="86" x2="80" y2="106" />
        </g>
      </g>
    ),
  },
  {
    id: "ops",
    name: "Daniel Park",
    title: "Head of Construction & Ops",
    background:
      "Field operator who has commissioned 80+ DC fast charging sites. Knows what the install crew will and won't tolerate at 2am.",
    initials: "DP",
    credentials: ["Ops 15Y", "EPC", "OSHA-30"],
    portrait: (active) => (
      <g>
        <defs>
          <radialGradient id="leader-grad-3" cx="0.5" cy="0.4">
            <stop
              offset="0%"
              stopColor={active ? "#8bfb03" : "rgba(255,255,255,0.18)"}
              stopOpacity="0.7"
            />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle cx="80" cy="64" r="46" fill="url(#leader-grad-3)" />
        <g
          stroke={active ? "#8bfb03" : "rgba(255,255,255,0.4)"}
          strokeWidth="1.2"
          fill="none"
        >
          <polygon
            points="80,18 138,52 138,108 22,108 22,52"
            strokeDasharray="3 4"
          />
          <polygon points="80,38 118,60 118,98 42,98 42,60" />
        </g>
        <g
          stroke={active ? "#8bfb03" : "rgba(255,255,255,0.55)"}
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        >
          <line x1="60" y1="76" x2="100" y2="76" />
          <line x1="60" y1="86" x2="100" y2="86" />
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
              className="font-display tracking-normal text-[clamp(2rem,4.4vw,3.75rem)] font-normal leading-[1.05]  text-paper"
            >
              Operator-led.{" "}
              <span className="italic text-accent">Owner-aligned</span>
              .
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.1, 1] }}
            className="max-w-sm text-base leading-relaxed text-paper/60"
          >
            We&rsquo;ve underwritten the deal, planned the utility, and
            commissioned the site. The team you talk to is the team who&rsquo;s
            done it.
          </motion.p>
        </header>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-4">
          {LEADERS.map((leader, i) => (
            <LeaderCard
              key={leader.id}
              leader={leader}
              index={i}
              isInView={isInView}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function LeaderCard({
  leader,
  index,
  isInView,
}: {
  leader: Leader;
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
        className="pointer-events-none absolute inset-0  opacity-0 transition-opacity duration-700 group-hover:opacity-100"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.06]"
      />

      <div className="relative flex flex-col gap-7 p-7 sm:p-8">
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
            {leader.portrait(false)}
            <g className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {leader.portrait(true)}
            </g>
          </svg>

          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-paper/15 bg-ink/70 px-3 py-1 backdrop-blur-md">
            <span className="font-mono text-[10px] font-normal tracking-[0.08em] text-paper/70">
              {leader.initials}
            </span>
          </div>

          <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-ink/70 px-3 py-1 backdrop-blur-md">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
            </span>
            <span className="font-mono text-[10px] font-normal tracking-[0.08em] text-accent">
              0{index + 1}
            </span>
          </div>
        </div>

        <div>
          <h3 className="font-display tracking-normal text-2xl font-normal leading-[1.04]  text-paper">
            {leader.name}
          </h3>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
            {leader.title}
          </p>

          <div className="grid overflow-hidden grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100">
            <p className="mt-4 overflow-hidden text-sm leading-relaxed text-paper/65">
              {leader.background}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-1.5">
            {leader.credentials.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1.5 rounded-full border border-paper/[0.08] bg-paper/[0.02] px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-paper/65"
              >
                <span className="h-1 w-1 rounded-full bg-accent" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.li>
  );
}
