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
import Image from "next/image";
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
  image: string;
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
      { label: "Physical", value: "Site" },
      { label: "Existing", value: "Electrical" },
      { label: "Day-to-day", value: "Operations" },
    ],
    tag: "EVAL",
    image: "/1.png",
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
      { label: "Grid", value: "Capacity" },
      { label: "Utility", value: "Interconnect" },
      { label: "AHJ", value: "Permitting" },
    ],
    tag: "GRID",
    image: "/2.png",
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
      { label: "Site", value: "Conditions" },
      { label: "Usage", value: "Patterns" },
      { label: "Long-term", value: "Performance" },
    ],
    tag: "DESIGN",
    image: "/3.png",
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
      { label: "Scope", value: "Defined" },
      { label: "Approvals", value: "Coordinated" },
      { label: "Operate", value: "Reliably" },
    ],
    tag: "LIVE",
    image: "/4.png",
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

  const exitOpacity = useTransform(smoothProgress, [0.85, 1.0], [1, 0]);
  const exitY = useTransform(smoothProgress, [0.85, 1.0], ["0%", "-18%"]);

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
            <motion.div
              style={{ opacity: exitOpacity, y: exitY }}
              className="relative flex h-full w-full items-center justify-center"
            >
              <ProgressRail
                total={STEPS.length}
                progress={smoothProgress}
              />
              <div className="relative mx-auto h-[min(82vh,640px)] w-full max-w-[1360px] overflow-hidden px-4 sm:px-10 lg:h-[min(70vh,560px)] lg:px-16">
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
            </motion.div>
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
  const ENTRY_END = 0.78;
  const segment = total > 1 ? ENTRY_END / (total - 1) : ENTRY_END;
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
            <Image
              src={step.image}
              alt={step.title}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
              priority={index === 0}
            />
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

      <div className="absolute bottom-4 left-4 z-10">
        <span className="font-mono text-[8.5px] uppercase tracking-[0.24em] text-paper/55">
          PHASE &middot; {number}
        </span>
      </div>

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

