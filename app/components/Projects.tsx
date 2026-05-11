"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef } from "react";

type Step = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  tagline: string;
  description: string;
  meta: { label: string; value: string }[];
  tag: string;
  visual: () => React.ReactNode;
};

const STEPS: Step[] = [
  {
    id: "site-evaluation",
    number: "01",
    eyebrow: "Site Evaluation",
    title: "Understand the property first.",
    tagline: "Walk the asset.",
    description:
      "We evaluate the physical site, existing electrical infrastructure, and how the property operates day to day—before a single drawing is produced.",
    meta: [
      { label: "Inputs", value: "Site walk" },
      { label: "Mapped", value: "Day-of-use" },
      { label: "Out", value: "Site brief" },
    ],
    tag: "EVAL",
    visual: () => <SiteEvaluationVisual />,
  },
  {
    id: "grid-review",
    number: "02",
    eyebrow: "Grid Review",
    title: "Define what’s feasible.",
    tagline: "Test the utility.",
    description:
      "Grid capacity, interconnection requirements, and permitting considerations are assessed early—establishing realistic boundaries, not theoretical ones.",
    meta: [
      { label: "Pulled", value: "Capacity" },
      { label: "Aligned", value: "Permit AHJ" },
      { label: "Out", value: "Feasibility" },
    ],
    tag: "GRID",
    visual: () => <GridReviewVisual />,
  },
  {
    id: "system-design",
    number: "03",
    eyebrow: "System Design",
    title: "Right-size the solution.",
    tagline: "Engineer to constraints.",
    description:
      "Charging and storage are designed around site conditions, usage patterns, and long-term performance—never around assumptions or stock configurations.",
    meta: [
      { label: "Sized", value: "BESS" },
      { label: "Verified", value: "UL 9540A" },
      { label: "Out", value: "IFC set" },
    ],
    tag: "DESIGN",
    visual: () => <SystemDesignVisual />,
  },
  {
    id: "delivery-operation",
    number: "04",
    eyebrow: "Delivery & Operation",
    title: "Build what will last.",
    tagline: "Operate the asset.",
    description:
      "Projects move forward with clear scope, coordinated approvals, and systems designed to be built, permitted, and operated reliably—long after commissioning.",
    meta: [
      { label: "Permitting", value: "Ready" },
      { label: "Monitored", value: "24 / 7" },
      { label: "Uptime", value: "99.5%" },
    ],
    tag: "LIVE",
    visual: () => <OperationVisual />,
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15%" });
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    mass: 0.4,
  });

  return (
    <section id="projects" ref={sectionRef} className="relative bg-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent"
      />

      <div className="relative pt-24 sm:pt-28 lg:pt-36">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <header className="flex flex-col gap-6 pb-10 lg:flex-row lg:items-end lg:justify-between lg:pb-14">
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
                Approach
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.2, 0.7, 0.1, 1],
                }}
                className="font-display tracking-normal text-[clamp(2rem,4.4vw,3.75rem)] font-normal leading-[1.05] text-paper"
              >
                Designed for{" "}
                <span className="italic text-accent">
                  fleet-level operations
                </span>
                .
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.2, 0.7, 0.1, 1],
              }}
              className="max-w-sm text-base leading-relaxed text-paper/60"
            >
              Fleet electrification exposes grid, load, and scheduling
              constraints early. Every site walks the same disciplined
              arc&mdash;and each step compounds on the last.
            </motion.p>
          </header>
        </div>
      </div>

      {reduce ? (
        <FallbackList />
      ) : (
        <div
          ref={stickyRef}
          className="relative"
          style={{ height: `${STEPS.length * 100}vh` }}
        >
          <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
            <ProgressRail
              total={STEPS.length}
              progress={smoothProgress}
            />
            <div className="relative mx-auto h-[min(82vh,640px)] w-full max-w-[1360px] px-4 sm:px-10 lg:h-[min(70vh,560px)] lg:px-16">
              {STEPS.map((step, i) => (
                <StickyCard
                  key={step.id}
                  step={step}
                  index={i}
                  total={STEPS.length}
                  progress={smoothProgress}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="h-16 sm:h-20 lg:h-24" />
    </section>
  );
}

function StickyCard({
  step,
  index,
  total,
  progress,
}: {
  step: Step;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const segment = total > 1 ? 1 / (total - 1) : 1;
  const entryStart = (index - 1) * segment;
  const entryEnd = index * segment;
  const exitStart = index * segment;
  const exitEnd = (index + 1) * segment;

  const isFirst = index === 0;
  const isLast = index === total - 1;

  const y = useTransform(
    progress,
    isFirst ? [0, 1] : [entryStart, entryEnd],
    isFirst ? ["0%", "0%"] : ["100%", "0%"],
  );

  const scale = useTransform(
    progress,
    isLast ? [0, 1] : [exitStart, exitEnd],
    isLast ? [1, 1] : [1, 0.88],
  );

  const rotate = useTransform(
    progress,
    isLast ? [0, 1] : [exitStart, exitEnd],
    isLast ? [0, 0] : [0, 3],
  );

  const filter = useTransform(
    progress,
    isLast ? [0, 1] : [exitStart, exitEnd],
    isLast
      ? ["brightness(1) saturate(1)", "brightness(1) saturate(1)"]
      : ["brightness(1) saturate(1)", "brightness(0.55) saturate(0.6)"],
  );

  return (
    <motion.article
      style={{ y, scale, rotate, filter, zIndex: index + 1 }}
      className="absolute inset-0 origin-center px-4 sm:px-10 lg:px-16"
    >
      <CardSurface step={step} index={index} total={total} />
    </motion.article>
  );
}

function CardSurface({
  step,
  index,
  total,
}: {
  step: Step;
  index: number;
  total: number;
}) {
  const reverse = index % 2 === 1;
  return (
    <div
      className={`group relative h-full overflow-hidden rounded-[24px] border border-paper/[0.07] bg-ink-2 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)] sm:rounded-[28px] ${
        reverse ? "lg:[direction:rtl]" : ""
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.04]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent"
      />

      <div className="relative grid h-full grid-cols-1 lg:grid-cols-[0.92fr_1.08fr]">
        <DetailSide step={step} index={index} total={total} />
        <div className="relative min-h-[240px] overflow-hidden bg-[#070707] lg:min-h-0 lg:[direction:ltr]">
          <VisualFrame tag={step.tag} number={step.number}>
            {step.visual()}
          </VisualFrame>
        </div>
      </div>
    </div>
  );
}

function DetailSide({
  step,
  index,
  total,
}: {
  step: Step;
  index: number;
  total: number;
}) {
  return (
    <div className="relative grid grid-rows-[auto_1fr_auto] gap-5 p-6 sm:gap-6 sm:p-8 lg:gap-7 lg:p-9 lg:[direction:ltr]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-5 select-none font-display text-[clamp(6rem,11vw,10.5rem)] italic leading-[0.82] text-paper/[0.04] sm:right-6 sm:top-6 lg:right-7 lg:top-6"
      >
        {step.number}
      </div>

      <div className="relative flex items-center gap-2.5 text-[10px] font-normal uppercase tracking-[0.3em] text-accent">
        <span className="relative inline-flex h-1.5 w-1.5">
          <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
        </span>
        {step.eyebrow}
        <span className="font-mono tracking-[0.2em] text-mute">
          &middot; {step.number} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <div className="relative flex flex-col justify-end">
        <p className="mb-3 flex items-center gap-2.5 font-display text-[13px] italic leading-none tracking-[0.01em] text-accent/85">
          <span className="block h-px w-5 bg-accent/55" />
          {step.tagline}
        </p>
        <h3 className="font-display tracking-normal text-[clamp(1.55rem,2.3vw,2.15rem)] font-normal leading-[1.06] text-paper">
          {step.title}
        </h3>
        <p className="mt-4 max-w-[420px] text-[13.5px] leading-[1.55] text-paper/65 sm:text-[14px]">
          {step.description}
        </p>
      </div>

      <dl className="relative grid grid-cols-3 gap-x-3 border-t border-paper/10 pt-4">
        {step.meta.map((m) => (
          <div key={m.label} className="flex flex-col gap-1.5">
            <dt className="text-[9px] font-medium uppercase tracking-[0.14em] text-mute">
              {m.label}
            </dt>
            <dd className="font-display tracking-normal text-[15px] font-normal leading-none text-paper">
              {m.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function VisualFrame({
  tag,
  number,
  children,
}: {
  tag: string;
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#070707]">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid-lines opacity-[0.18]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(70%_60%_at_70%_25%,rgba(139,251,3,0.06),transparent_60%)]"
      />

      <CornerTick className="absolute left-4 top-4" />
      <CornerTick className="absolute bottom-4 right-4 rotate-180" />

      <div className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full border border-accent/25 bg-ink/75 px-2.5 py-1 backdrop-blur-md">
        <span className="relative inline-flex h-1.5 w-1.5">
          <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
        </span>
        <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-accent">
          {tag}
        </span>
      </div>

      <div className="absolute inset-0">{children}</div>

      <XuraStamp number={number} />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"
      />
    </div>
  );
}

function CornerTick({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none h-3 w-3 ${className}`}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M 1 6 L 1 1 L 6 1"
        stroke="rgba(139,251,3,0.4)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function XuraStamp({ number }: { number: string }) {
  return (
    <div className="absolute bottom-4 left-4 z-10 flex items-end gap-2.5">
      <div className="flex items-baseline gap-1.5">
        <span className="font-display text-[19px] leading-none italic text-paper/85">
          Xura
        </span>
        <span className="block h-[3px] w-[3px] rounded-full bg-accent" />
      </div>
      <span className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-mute">
        X &middot; P{number} &middot; 2025
      </span>
    </div>
  );
}

function ProgressRail({
  total,
  progress,
}: {
  total: number;
  progress: MotionValue<number>;
}) {
  return (
    <div className="pointer-events-none absolute left-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
      {Array.from({ length: total }).map((_, i) => (
        <ProgressDot key={i} index={i} total={total} progress={progress} />
      ))}
    </div>
  );
}

function ProgressDot({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const segment = total > 1 ? 1 / (total - 1) : 1;
  const center = index * segment;
  const opacity = useTransform(
    progress,
    [center - segment * 0.6, center, center + segment * 0.6],
    [0.25, 1, 0.25],
  );
  const scale = useTransform(
    progress,
    [center - segment * 0.6, center, center + segment * 0.6],
    [1, 1.6, 1],
  );
  return (
    <motion.span
      style={{ opacity, scale }}
      className="block h-1.5 w-1.5 rounded-full bg-accent"
    />
  );
}

function FallbackList() {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16">
      <ul className="flex flex-col gap-6 lg:gap-8">
        {STEPS.map((step, i) => (
          <li key={step.id} className="h-[640px]">
            <CardSurface step={step} index={i} total={STEPS.length} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Per-step visuals                                                    */
/* ------------------------------------------------------------------ */

function SiteEvaluationVisual() {
  return (
    <svg
      viewBox="0 0 320 240"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="translate(38, 46)">
        <circle r="13" fill="none" stroke="rgba(255,255,255,0.18)" />
        <path
          d="M 0 -9 L 2.6 0 L 0 9 L -2.6 0 Z"
          fill="rgba(255,255,255,0.55)"
        />
        <text
          x="0"
          y="-17"
          textAnchor="middle"
          fontSize="7"
          fill="rgba(255,255,255,0.55)"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          letterSpacing="1.5"
        >
          N
        </text>
      </g>

      <path
        d="M 84 90 L 244 78 L 268 132 L 248 196 L 112 206 L 72 156 Z"
        fill="rgba(139,251,3,0.04)"
        stroke="#8bfb03"
        strokeWidth="1.4"
        strokeDasharray="5 4"
      />

      <g transform="translate(228, 70)">
        <rect
          x="0"
          y="0"
          width="40"
          height="14"
          rx="2"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.42)"
          strokeWidth="1"
        />
        <text
          x="20"
          y="-5"
          textAnchor="middle"
          fontSize="6.5"
          fill="rgba(255,255,255,0.55)"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          letterSpacing="1.3"
        >
          SERVICE
        </text>
        <line
          x1="20"
          y1="14"
          x2="20"
          y2="22"
          stroke="rgba(255,255,255,0.32)"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
      </g>

      {[
        [128, 122, "P01"],
        [184, 110, "P02"],
        [214, 168, "P03"],
        [142, 180, "P04"],
      ].map(([cx, cy, label], i) => (
        <g key={i}>
          <circle
            cx={cx as number}
            cy={cy as number}
            r="10"
            fill="rgba(139,251,3,0.08)"
          />
          <circle
            cx={cx as number}
            cy={cy as number}
            r="3"
            fill="#8bfb03"
            className="soc-pulse"
          />
          <line
            x1={(cx as number) + 3}
            y1={(cy as number) - 3}
            x2={(cx as number) + 24}
            y2={(cy as number) - 18}
            stroke="rgba(139,251,3,0.55)"
            strokeWidth="0.8"
          />
          <circle
            cx={(cx as number) + 24}
            cy={(cy as number) - 18}
            r="1.6"
            fill="#8bfb03"
          />
          <text
            x={(cx as number) + 30}
            y={(cy as number) - 14}
            fontSize="6.5"
            fill="rgba(139,251,3,0.95)"
            fontFamily="ui-monospace, SFMono-Regular, monospace"
            letterSpacing="1"
          >
            {label as string}
          </text>
        </g>
      ))}

      <g stroke="rgba(255,255,255,0.22)" strokeWidth="0.7">
        <line x1="84" y1="62" x2="244" y2="62" />
        <line x1="84" y1="56" x2="84" y2="68" />
        <line x1="244" y1="56" x2="244" y2="68" />
      </g>
      <text
        x="164"
        y="58"
        textAnchor="middle"
        fontSize="6.5"
        fill="rgba(255,255,255,0.45)"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        letterSpacing="1"
      >
        218&apos; FRONTAGE
      </text>

      <text
        x="38"
        y="226"
        fontSize="6.5"
        fill="rgba(255,255,255,0.35)"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        letterSpacing="1.2"
      >
        40.21&deg;N &middot; 74.06&deg;W &middot; ELEV 24FT
      </text>
    </svg>
  );
}

function GridReviewVisual() {
  return (
    <svg
      viewBox="0 0 320 240"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <g stroke="rgba(255,255,255,0.22)" strokeWidth="1" fill="none">
        <path d="M 28 54 L 80 62 L 132 54 L 184 62 L 236 54 L 292 62" />
        {[80, 132, 184, 236].map((x) => (
          <g key={x}>
            <line x1={x} y1="62" x2={x} y2="80" />
            <path
              d={`M ${x - 7} 80 L ${x + 7} 80 L ${x + 5} 92 L ${x - 5} 92 Z`}
              fill="rgba(255,255,255,0.05)"
            />
            <line
              x1={x - 4}
              y1="80"
              x2={x - 4}
              y2="92"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="0.6"
            />
            <line
              x1={x + 4}
              y1="80"
              x2={x + 4}
              y2="92"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="0.6"
            />
          </g>
        ))}
      </g>

      <rect
        x="40"
        y="116"
        width="240"
        height="92"
        rx="4"
        fill="rgba(255,255,255,0.02)"
        stroke="rgba(255,255,255,0.22)"
        strokeDasharray="3 3"
      />
      <text
        x="52"
        y="134"
        fontSize="7"
        fill="rgba(255,255,255,0.5)"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        letterSpacing="1.4"
      >
        UTILITY ASSESSMENT
      </text>

      <rect
        x="52"
        y="146"
        width="216"
        height="14"
        rx="2"
        fill="rgba(255,255,255,0.05)"
        stroke="rgba(255,255,255,0.32)"
        strokeWidth="1"
      />
      <rect
        x="54"
        y="148"
        width="98"
        height="10"
        rx="1"
        fill="#8bfb03"
        opacity="0.85"
      />
      <rect
        x="155"
        y="148"
        width="50"
        height="10"
        rx="1"
        fill="#8bfb03"
        opacity="0.32"
        className="soc-pulse"
      />
      <line
        x1="207"
        y1="142"
        x2="207"
        y2="164"
        stroke="rgba(139,251,3,0.5)"
        strokeWidth="0.6"
        strokeDasharray="2 2"
      />

      <text
        x="52"
        y="176"
        fontSize="7"
        fill="rgba(255,255,255,0.5)"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        letterSpacing="1"
      >
        EXISTING
      </text>
      <text
        x="155"
        y="176"
        fontSize="7"
        fill="rgba(139,251,3,0.95)"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        letterSpacing="1"
      >
        + HEADROOM
      </text>
      <text
        x="268"
        y="176"
        textAnchor="end"
        fontSize="7"
        fill="rgba(255,255,255,0.35)"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        letterSpacing="1"
      >
        CEILING
      </text>

      <text
        x="52"
        y="200"
        fontSize="22"
        fill="rgba(255,255,255,0.92)"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        fontWeight="600"
        letterSpacing="0"
      >
        2.2
      </text>
      <text
        x="92"
        y="200"
        fontSize="8"
        fill="rgba(255,255,255,0.42)"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        letterSpacing="1"
      >
        MW AVAILABLE
      </text>
      <text
        x="216"
        y="200"
        fontSize="9"
        fill="rgba(139,251,3,0.9)"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        letterSpacing="1.2"
      >
        AHJ &middot; ALIGNED
      </text>
    </svg>
  );
}

function SystemDesignVisual() {
  return (
    <svg
      viewBox="0 0 320 240"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect
        x="38"
        y="58"
        width="76"
        height="50"
        rx="4"
        fill="rgba(139,251,3,0.1)"
        stroke="#8bfb03"
        strokeWidth="1.4"
      />
      <text
        x="76"
        y="80"
        textAnchor="middle"
        fontSize="9"
        fill="#8bfb03"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        letterSpacing="1.4"
        fontWeight="600"
      >
        BESS
      </text>
      <text
        x="76"
        y="94"
        textAnchor="middle"
        fontSize="7"
        fill="rgba(139,251,3,0.75)"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
      >
        660 kWh
      </text>

      <rect
        x="206"
        y="58"
        width="76"
        height="50"
        rx="4"
        fill="rgba(255,255,255,0.04)"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="1.4"
      />
      <text
        x="244"
        y="80"
        textAnchor="middle"
        fontSize="9"
        fill="rgba(255,255,255,0.85)"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        letterSpacing="1.4"
        fontWeight="600"
      >
        DC FAST
      </text>
      <text
        x="244"
        y="94"
        textAnchor="middle"
        fontSize="7"
        fill="rgba(255,255,255,0.55)"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
      >
        6 &times; 200kW
      </text>

      <rect
        x="124"
        y="130"
        width="72"
        height="44"
        rx="4"
        fill="rgba(255,255,255,0.04)"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="1.2"
        strokeDasharray="3 3"
      />
      <text
        x="160"
        y="150"
        textAnchor="middle"
        fontSize="8"
        fill="rgba(255,255,255,0.7)"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        letterSpacing="1.3"
        fontWeight="600"
      >
        CONTROLLER
      </text>
      <text
        x="160"
        y="164"
        textAnchor="middle"
        fontSize="7"
        fill="rgba(255,255,255,0.5)"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
      >
        UL 9540A
      </text>

      <rect
        x="38"
        y="184"
        width="76"
        height="22"
        rx="3"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.32)"
        strokeWidth="1"
      />
      <text
        x="76"
        y="199"
        textAnchor="middle"
        fontSize="7"
        fill="rgba(255,255,255,0.55)"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        letterSpacing="1.2"
      >
        SWITCHGEAR
      </text>

      <rect
        x="206"
        y="184"
        width="76"
        height="22"
        rx="3"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.32)"
        strokeWidth="1"
      />
      <text
        x="244"
        y="199"
        textAnchor="middle"
        fontSize="7"
        fill="rgba(255,255,255,0.55)"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        letterSpacing="1.2"
      >
        UTILITY METER
      </text>

      <g
        stroke="#8bfb03"
        strokeDasharray="4 4"
        strokeLinecap="round"
        fill="none"
        strokeWidth="1.4"
        className="trace-flow"
      >
        <path d="M 114 84 L 124 84 Q 138 84 138 100 L 138 130" />
        <path d="M 206 84 L 196 84 Q 182 84 182 100 L 182 130" />
        <path d="M 138 174 L 138 184 L 96 184" />
        <path d="M 182 174 L 182 184 L 224 184" />
      </g>
    </svg>
  );
}

function OperationVisual() {
  return (
    <svg
      viewBox="0 0 320 240"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect
        x="38"
        y="50"
        width="244"
        height="60"
        rx="4"
        fill="rgba(255,255,255,0.02)"
        stroke="rgba(255,255,255,0.22)"
        strokeDasharray="3 3"
      />
      <text
        x="50"
        y="66"
        fontSize="7"
        fill="rgba(255,255,255,0.5)"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        letterSpacing="1.4"
      >
        TELEMETRY &middot; 24H
      </text>

      <path
        d="M 50 96 L 70 92 L 86 98 L 102 84 L 118 90 L 134 78 L 150 88 L 166 76 L 182 86 L 198 80 L 214 90 L 232 84 L 252 92 L 270 88"
        stroke="#8bfb03"
        strokeWidth="1.4"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M 50 96 L 70 92 L 86 98 L 102 84 L 118 90 L 134 78 L 150 88 L 166 76 L 182 86 L 198 80 L 214 90 L 232 84 L 252 92 L 270 88 L 270 104 L 50 104 Z"
        fill="rgba(139,251,3,0.08)"
        stroke="none"
      />
      <circle cx="270" cy="88" r="2.4" fill="#8bfb03" className="soc-pulse" />

      <g transform="translate(38, 130)">
        <rect
          width="116"
          height="76"
          rx="4"
          fill="rgba(255,255,255,0.02)"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1"
        />
        <text
          x="12"
          y="18"
          fontSize="7"
          fill="rgba(255,255,255,0.5)"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          letterSpacing="1.3"
        >
          UPTIME
        </text>
        <text
          x="12"
          y="46"
          fontSize="22"
          fill="rgba(255,255,255,0.95)"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          fontWeight="600"
        >
          99.5
        </text>
        <text
          x="58"
          y="46"
          fontSize="9"
          fill="rgba(139,251,3,0.85)"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          letterSpacing="1.2"
        >
          %
        </text>
        <text
          x="12"
          y="64"
          fontSize="7"
          fill="rgba(255,255,255,0.4)"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          letterSpacing="1"
        >
          MONITORED 24 / 7
        </text>
      </g>

      <g transform="translate(166, 130)">
        <rect
          width="116"
          height="76"
          rx="4"
          fill="rgba(255,255,255,0.02)"
          stroke="rgba(139,251,3,0.32)"
          strokeWidth="1"
        />
        <text
          x="12"
          y="18"
          fontSize="7"
          fill="rgba(139,251,3,0.85)"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          letterSpacing="1.3"
        >
          DISPATCH
        </text>
        <g transform="translate(12, 26)">
          {[
            [0, 26],
            [16, 18],
            [32, 30],
            [48, 14],
            [64, 22],
            [80, 12],
          ].map(([x, h], i) => (
            <rect
              key={i}
              x={x}
              y={36 - (h as number)}
              width="10"
              height={h as number}
              rx="1"
              fill={
                i === 3 || i === 5 ? "#8bfb03" : "rgba(255,255,255,0.25)"
              }
            />
          ))}
        </g>
        <text
          x="12"
          y="68"
          fontSize="7"
          fill="rgba(255,255,255,0.4)"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          letterSpacing="1"
        >
          PEAK SHAVE &middot; LIVE
        </text>
      </g>
    </svg>
  );
}
