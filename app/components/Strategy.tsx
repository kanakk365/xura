"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

type PatternKind = "rings" | "grid" | "dots" | "lines";

type Phase = {
  id: string;
  title: string;
  body: string;
  image: string;
  pattern: PatternKind;
};

const PHASES: Phase[] = [
  {
    id: "evaluate",
    title: "Site Evaluation",
    body: "Physical assessment, operational analysis, and load profile capture — straight from the meter, the panel, and how the site actually runs.",
    image: "/strategy-01.png",
    pattern: "rings",
  },
  {
    id: "review",
    title: "Grid Review",
    body: "Capacity and interconnection feasibility checked against your real tariff, queue, and service ceiling — not nameplate assumptions.",
    image: "/strategy-02.png",
    pattern: "grid",
  },
  {
    id: "design",
    title: "System Design",
    body: "Right-size storage, charging, and controls around real conditions. We pick equipment because it fits, not because it's on the shelf.",
    image: "/strategy-03.png",
    pattern: "dots",
  },
  {
    id: "deliver",
    title: "Delivery & Operation",
    body: "Construction, commissioning, and long-term operations. You get a system that runs — not a binder you have to figure out.",
    image: "/strategy-04.png",
    pattern: "lines",
  },
];

function PatternBg({ kind }: { kind: PatternKind }) {
  if (kind === "rings") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 400 320"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        {[40, 80, 120, 160, 200].map((r) => (
          <circle
            key={r}
            cx="200"
            cy="160"
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        ))}
      </svg>
    );
  }

  if (kind === "grid") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 400 320"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <pattern
            id="grid-pat"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pat)" />
      </svg>
    );
  }

  if (kind === "dots") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 400 320"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <pattern
            id="dots-pat"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="12" cy="12" r="1.2" fill="rgba(255,255,255,0.1)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-pat)" />
      </svg>
    );
  }

  // lines (diagonal hatching)
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 320"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <pattern
          id="lines-pat"
          width="22"
          height="22"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-30)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="22"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#lines-pat)" />
    </svg>
  );
}

export function Strategy() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="strategy"
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
              Strategy
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.1, 1] }}
              className="font-display tracking-normal text-[clamp(2rem,4.4vw,3.75rem)] font-normal leading-[1.05]  text-paper"
            >
              Four phases, one{" "}
              <span className="italic text-accent">predictable</span>{" "}
              outcome.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.1, 1] }}
            className="max-w-sm text-base leading-relaxed text-paper/60"
          >
            We sequence every project the same way&mdash;so you know what
            you&rsquo;re getting and when, before steel ever moves.
          </motion.p>
        </header>

        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {PHASES.map((phase, i) => (
            <PhaseCard
              key={phase.id}
              phase={phase}
              index={i}
              isInView={isInView}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

function PhaseCard({
  phase,
  index,
  isInView,
}: {
  phase: Phase;
  index: number;
  isInView: boolean;
}) {
  const delay = 0.3 + index * 0.1;

  return (
    <motion.li
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.2, 0.7, 0.1, 1] }}
      className="group"
    >
      <article className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-paper/[0.08] bg-ink-2/70 transition-colors duration-500 hover:border-paper/20">
        {/* image area with subtle background pattern */}
        <div className="relative aspect-[5/4] w-full overflow-hidden bg-[#0e0e0e]">
          <PatternBg kind={phase.pattern} />

          {/* hero image (transparent PNG) */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative h-full w-full">
              <Image
                src={phase.image}
                alt={phase.title}
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                className="object-contain object-center transition-transform duration-700 ease-out group-hover:-translate-y-1"
                priority={index < 2}
              />
            </div>
          </div>

          {/* soft ground vignette */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-6 bottom-3 h-12 rounded-full bg-[radial-gradient(50%_100%_at_50%_50%,rgba(0,0,0,0.55)_0%,transparent_80%)]"
          />
        </div>

        {/* text area */}
        <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
          <h3 className="font-display tracking-normal text-[clamp(1.35rem,1.8vw,1.75rem)] font-normal leading-tight  text-paper">
            {phase.title}
          </h3>
          <p className="text-sm leading-relaxed text-paper/60">{phase.body}</p>
        </div>
      </article>
    </motion.li>
  );
}
