"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

type Project = {
  id: string;
  vertical: string;
  name: string;
  location: string;
  scope: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  diagram: (active: boolean) => React.ReactNode;
};

const PROJECTS: Project[] = [
  {
    id: "fleet-depot",
    vertical: "Fleet Depot",
    name: "Westside Logistics Hub",
    location: "Los Angeles, CA",
    scope: "24× 180kW DC fast charging, 1.4MWh BESS, microgrid controls",
    outcome:
      "Operational at 5MW peak through a 2.2MW service&mdash;no upgrade required.",
    metrics: [
      { label: "Stalls", value: "24" },
      { label: "BESS", value: "1.4 MWh" },
      { label: "Service", value: "2.2 MW" },
      { label: "Live", value: "11 mo" },
    ],
    diagram: (active) => (
      <g>
        <rect
          x="20"
          y="120"
          width="280"
          height="40"
          rx="4"
          fill={active ? "rgba(139,251,3,0.06)" : "rgba(255,255,255,0.03)"}
          stroke={active ? "#8bfb03" : "rgba(255,255,255,0.18)"}
          strokeDasharray="3 3"
        />
        {Array.from({ length: 8 }).map((_, i) => (
          <rect
            key={i}
            x={36 + i * 32}
            y="128"
            width="20"
            height="24"
            rx="1.5"
            fill={active ? "rgba(139,251,3,0.18)" : "rgba(255,255,255,0.08)"}
            stroke={active ? "#8bfb03" : "rgba(255,255,255,0.4)"}
            strokeWidth="1"
          />
        ))}
        <rect
          x="60"
          y="44"
          width="80"
          height="44"
          rx="4"
          fill={active ? "rgba(139,251,3,0.12)" : "rgba(255,255,255,0.04)"}
          stroke={active ? "#8bfb03" : "rgba(255,255,255,0.55)"}
          strokeWidth="1.4"
        />
        <text
          x="100"
          y="62"
          textAnchor="middle"
          fontSize="9"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          fill={active ? "#8bfb03" : "rgba(255,255,255,0.7)"}
          letterSpacing="1.5"
          fontWeight="600"
        >
          BESS
        </text>
        <text
          x="100"
          y="76"
          textAnchor="middle"
          fontSize="7"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          fill="rgba(255,255,255,0.55)"
          letterSpacing="1"
        >
          1.4 MWh
        </text>
        <rect
          x="180"
          y="44"
          width="80"
          height="44"
          rx="4"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="1.2"
        />
        <text
          x="220"
          y="62"
          textAnchor="middle"
          fontSize="9"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          fill="rgba(255,255,255,0.65)"
          letterSpacing="1.5"
          fontWeight="600"
        >
          UTILITY
        </text>
        <text
          x="220"
          y="76"
          textAnchor="middle"
          fontSize="7"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          fill="rgba(255,255,255,0.5)"
        >
          2.2 MW
        </text>
        <g
          stroke={active ? "#8bfb03" : "rgba(255,255,255,0.3)"}
          strokeDasharray="4 4"
          strokeLinecap="round"
          fill="none"
          className={active ? "trace-flow" : ""}
          strokeWidth="1.4"
        >
          <path d="M 100 88 L 100 105 Q 100 115 110 115 L 200 115 Q 220 115 220 105 L 220 88" />
          <path d="M 100 88 Q 100 100 100 110 L 100 120" />
          <path d="M 220 88 Q 220 100 160 110 L 160 120" />
        </g>
      </g>
    ),
  },
  {
    id: "commercial-cre",
    vertical: "Commercial Real Estate",
    name: "Skyline Tower",
    location: "Austin, TX",
    scope: "8× 350kW DC + 480kWh storage in tenant-funded structured deal",
    outcome:
      "Activated zero-CapEx for the building owner&mdash;tenants now charge under load-managed schedule.",
    metrics: [
      { label: "Stalls", value: "8" },
      { label: "BESS", value: "480 kWh" },
      { label: "Service", value: "1.4 MW" },
      { label: "CapEx", value: "$0" },
    ],
    diagram: (active) => (
      <g>
        <path
          d="M40 160 L40 60 L100 30 L160 60 L160 160 Z"
          fill={active ? "rgba(139,251,3,0.05)" : "rgba(255,255,255,0.03)"}
          stroke={active ? "#8bfb03" : "rgba(255,255,255,0.4)"}
          strokeWidth="1.4"
        />
        {Array.from({ length: 4 }).map((_, row) =>
          Array.from({ length: 3 }).map((_, col) => (
            <rect
              key={`${row}-${col}`}
              x={56 + col * 32}
              y={70 + row * 20}
              width="20"
              height="12"
              rx="1"
              fill={
                active && (row + col) % 2 === 0
                  ? "rgba(139,251,3,0.5)"
                  : "rgba(255,255,255,0.18)"
              }
            />
          )),
        )}
        <rect
          x="200"
          y="70"
          width="84"
          height="38"
          rx="4"
          fill={active ? "rgba(139,251,3,0.12)" : "rgba(255,255,255,0.04)"}
          stroke={active ? "#8bfb03" : "rgba(255,255,255,0.55)"}
          strokeWidth="1.4"
        />
        <text
          x="242"
          y="86"
          textAnchor="middle"
          fontSize="9"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          fill={active ? "#8bfb03" : "rgba(255,255,255,0.7)"}
          letterSpacing="1.4"
          fontWeight="600"
        >
          DC FAST
        </text>
        <text
          x="242"
          y="100"
          textAnchor="middle"
          fontSize="7"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          fill="rgba(255,255,255,0.55)"
        >
          8 × 350kW
        </text>
        <rect
          x="200"
          y="120"
          width="84"
          height="32"
          rx="4"
          fill="rgba(255,255,255,0.04)"
          stroke={active ? "#8bfb03" : "rgba(255,255,255,0.45)"}
          strokeDasharray="3 3"
        />
        <text
          x="242"
          y="140"
          textAnchor="middle"
          fontSize="8"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          fill="rgba(255,255,255,0.6)"
          letterSpacing="1"
          fontWeight="600"
        >
          BESS 480kWh
        </text>
        <g
          stroke={active ? "#8bfb03" : "rgba(255,255,255,0.3)"}
          strokeDasharray="4 4"
          strokeLinecap="round"
          fill="none"
          className={active ? "trace-flow" : ""}
          strokeWidth="1.4"
        >
          <path d="M 160 90 L 200 90" />
          <path d="M 160 130 L 200 130" />
          <path d="M 242 108 L 242 120" />
        </g>
      </g>
    ),
  },
  {
    id: "multifamily",
    vertical: "Multifamily",
    name: "The Beacon",
    location: "Brooklyn, NY",
    scope: "12× Level 2 + 6× DC fast staged behind 600kWh storage",
    outcome:
      "Avoided a 14-month service upgrade queue by shifting evening peak to off-peak charge cycles.",
    metrics: [
      { label: "L2 / DC", value: "12 / 6" },
      { label: "BESS", value: "600 kWh" },
      { label: "Avoided", value: "14 mo" },
      { label: "Service", value: "800 kW" },
    ],
    diagram: (active) => (
      <g>
        <rect
          x="40"
          y="40"
          width="200"
          height="120"
          rx="3"
          fill="rgba(255,255,255,0.02)"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
        <text
          x="50"
          y="56"
          fontSize="7"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          fill="rgba(255,255,255,0.5)"
          letterSpacing="1"
        >
          PARKING DECK
        </text>
        {Array.from({ length: 12 }).map((_, i) => {
          const col = i % 6;
          const row = Math.floor(i / 6);
          return (
            <g
              key={`l2-${i}`}
              transform={`translate(${56 + col * 28}, ${68 + row * 36})`}
            >
              <rect
                width="16"
                height="22"
                rx="1"
                fill={active ? "rgba(139,251,3,0.18)" : "rgba(255,255,255,0.06)"}
                stroke={active ? "#8bfb03" : "rgba(255,255,255,0.35)"}
                strokeWidth="1"
              />
              <circle
                cx="8"
                cy="6"
                r="1.5"
                fill={active ? "#8bfb03" : "rgba(255,255,255,0.5)"}
              />
            </g>
          );
        })}
        <rect
          x="240"
          y="46"
          width="44"
          height="48"
          rx="4"
          fill={active ? "rgba(139,251,3,0.12)" : "rgba(255,255,255,0.04)"}
          stroke={active ? "#8bfb03" : "rgba(255,255,255,0.55)"}
          strokeWidth="1.4"
        />
        <text
          x="262"
          y="68"
          textAnchor="middle"
          fontSize="9"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          fill={active ? "#8bfb03" : "rgba(255,255,255,0.7)"}
          letterSpacing="1.4"
          fontWeight="600"
        >
          BESS
        </text>
        <text
          x="262"
          y="80"
          textAnchor="middle"
          fontSize="7"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          fill="rgba(255,255,255,0.55)"
        >
          600kWh
        </text>
        <rect
          x="240"
          y="110"
          width="44"
          height="36"
          rx="4"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="1.2"
        />
        <text
          x="262"
          y="132"
          textAnchor="middle"
          fontSize="8"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          fill="rgba(255,255,255,0.65)"
          letterSpacing="1"
          fontWeight="600"
        >
          DC ×6
        </text>
        <g
          stroke={active ? "#8bfb03" : "rgba(255,255,255,0.3)"}
          strokeDasharray="4 4"
          strokeLinecap="round"
          fill="none"
          className={active ? "trace-flow" : ""}
          strokeWidth="1.4"
        >
          <path d="M 240 70 Q 220 70 220 90 L 220 100" />
          <path d="M 240 130 Q 220 130 220 110" />
        </g>
      </g>
    ),
  },
];

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="projects"
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
              Projects
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.1, 1] }}
              className="font-display tracking-normal text-[clamp(2rem,4.4vw,3.75rem)] font-normal leading-[1.05]  text-paper"
            >
              Real sites.{" "}
              <span className="italic text-accent">Real meters</span>
              .
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.1, 1] }}
            className="max-w-sm text-base leading-relaxed text-paper/60"
          >
            A few of the 200+ systems we&rsquo;ve put on the ground&mdash;each
            one designed around what the utility could actually deliver.
          </motion.p>
        </header>

        <ul className="flex flex-col gap-6 lg:gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={i}
              isInView={isInView}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
  isInView,
}: {
  project: Project;
  index: number;
  isInView: boolean;
}) {
  const reduce = useReducedMotion();
  const delay = 0.25 + index * 0.12;
  const reverse = index % 2 === 1;

  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.7, 0.1, 1] }}
      className="group relative overflow-hidden rounded-[32px] border border-paper/[0.08] bg-ink-2/60 transition-colors duration-500 hover:border-accent/30"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0  opacity-0 transition-opacity duration-700 group-hover:opacity-100"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.05]"
      />

      <div
        className={`relative grid grid-cols-1 gap-0 lg:grid-cols-[1fr_1.05fr] ${
          reverse ? "lg:[direction:rtl]" : ""
        }`}
      >
        <div className="relative flex flex-col justify-between gap-8 p-8 sm:p-10 lg:p-12 lg:[direction:ltr]">
          <div>
            <div className="mb-5 flex items-center gap-2 text-[10px] font-normal tracking-[0.3em] text-accent">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
              </span>
              {project.vertical}
              <span className="font-mono tracking-[0.2em] text-mute">
                · {String(index + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-display tracking-normal text-[clamp(1.7rem,2.8vw,2.55rem)] font-normal leading-[1.04]  text-paper">
              {project.name}
            </h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.08em] text-mute">
              {project.location}
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-paper/70">
              {project.scope}
            </p>
            <p
              className="mt-4 max-w-md text-sm leading-relaxed text-paper/55"
              dangerouslySetInnerHTML={{ __html: project.outcome }}
            />
          </div>

          <dl className="grid grid-cols-4 gap-x-3 gap-y-2 border-t border-paper/10 pt-6">
            {project.metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-1">
                <dt className="text-[10px] font-medium uppercase tracking-[0.1em] text-mute">
                  {m.label}
                </dt>
                <dd className="font-display tracking-normal text-lg font-normal leading-none  text-paper">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-[280px] overflow-hidden bg-[#080808] lg:[direction:ltr]">
          <div
            aria-hidden="true"
            className="absolute inset-0 grid-lines opacity-[0.18]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 "
          />
          <motion.svg
            viewBox="0 0 320 200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: reduce ? 1 : 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.1, delay: delay + 0.2 }}
          >
            {project.diagram(false)}
            <g className="opacity-0 transition-opacity duration-700 group-hover:opacity-100">
              {project.diagram(true)}
            </g>
          </motion.svg>

          <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-accent/30 bg-ink/70 px-3 py-1 backdrop-blur-md">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
            </span>
            <span className="font-mono text-[10px] font-normal tracking-[0.08em] text-accent">
              Live
            </span>
          </div>
        </div>
      </div>
    </motion.li>
  );
}
