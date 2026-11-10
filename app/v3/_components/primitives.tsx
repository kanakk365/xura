"use client";

import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const EASE = [0.16, 1, 0.3, 1] as const;

/** Stage kicker: pulsing green dot, small tracked caps. */
export function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`flex max-w-full items-center gap-3 text-[10px] font-medium uppercase leading-[1.5] tracking-[0.2em] text-mute sm:text-[11px] ${className}`}>
      <span className="relative inline-flex h-2 w-2 shrink-0">
        <span className="pulse-dot absolute inset-0 rounded-full bg-accent" />
        <span className="absolute -inset-1 rounded-full bg-accent/30 blur-[3px]" />
      </span>
      <span className="min-w-0">{children}</span>
    </p>
  );
}

/** Section header in the stage layout: kicker and heading on the left, lead
 *  paragraph aligned to the heading's baseline on the right. */
export function SectionHead({
  kicker,
  title,
  lead,
  id,
}: {
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
}) {
  return (
    <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
      <Reveal className="min-w-0 max-w-[46rem]">
        <Kicker>{kicker}</Kicker>
        <h2 id={id} className="op-h2 mt-5">
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.08} className="lg:max-w-[26rem] lg:shrink-0">
          <p className="op-lead">{lead}</p>
        </Reveal>
      )}
    </header>
  );
}

/** Italic green emphasis, the stage site's signature in headings. */
export function Em({ children }: { children: ReactNode }) {
  return <span className="italic text-accent">{children}</span>;
}

/** Fades content up the first time it scrolls into view. Content is visible
 *  by default for reduced motion. */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  ...rest
}: { children: ReactNode; delay?: number; y?: number } & HTMLMotionProps<"div">) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Counts a number up when it enters the viewport and re-tweens when the
 *  value changes. */
export function Count({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.2,
  className,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });
  const reduce = useReducedMotion();
  const from = useRef(0);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(from.current, value, {
      duration,
      ease: EASE,
      onUpdate: (v) => setShown(v),
    });
    from.current = value;
    return () => controls.stop();
  }, [inView, value, reduce, duration]);

  const text = (reduce ? value : shown).toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return (
    <span ref={ref} className={className}>
      {prefix}
      {text}
      {suffix}
    </span>
  );
}

/** Segmented control with a sliding pill. */
export function Segmented<T extends string>({
  options,
  value,
  onChange,
  label,
  layoutId,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  label: string;
  layoutId: string;
}) {
  return (
    <div className="op-seg isolate" role="group" aria-label={label}>
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={o.value === value}
          onClick={() => onChange(o.value)}
        >
          {o.value === value && (
            <motion.span
              layoutId={layoutId}
              className="op-seg-pill"
              transition={{ type: "spring", stiffness: 420, damping: 36 }}
            />
          )}
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="op-btn group">
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="grid h-8 w-8 place-items-center rounded-full bg-ink text-accent transition-transform duration-200 group-hover:translate-x-0.5"
      >
        <Arrow />
      </span>
    </a>
  );
}

export function GhostButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="op-btn-ghost">
      {children}
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
    </a>
  );
}
