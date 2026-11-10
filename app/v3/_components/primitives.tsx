"use client";

import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import {
  Children,
  Fragment,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

import Counter from "../_bits/Counter";
import Magnet from "../_bits/Magnet";

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
      <div className="min-w-0 max-w-[46rem]">
        <Reveal y={10}>
          <Kicker>{kicker}</Kicker>
        </Reveal>
        <Headline as="h2" id={id} className="op-h2 mt-5" delay={0.06}>
          {title}
        </Headline>
      </div>
      {lead && (
        <Reveal delay={0.08} className="lg:max-w-[26rem] lg:shrink-0">
          <p className="op-lead">{lead}</p>
        </Reveal>
      )}
    </header>
  );
}

type Piece = { text: string; accent: boolean; gap: boolean };

/** Flattens a heading (strings, fragments and <Em>) into words, remembering
 *  which words carry the italic accent and whether a space precedes each one,
 *  so "<Em>Test</Em>." keeps its full stop attached. */
function flatten(node: ReactNode, accent: boolean, out: Piece[], state = { space: false }) {
  Children.forEach(node, (child) => {
    if (typeof child === "string" || typeof child === "number") {
      for (const m of String(child).matchAll(/(\s*)(\S+)/g)) {
        out.push({ text: m[2], accent, gap: out.length > 0 && (m[1].length > 0 || state.space) });
        state.space = false;
      }
      if (/\s$/.test(String(child))) state.space = true;
      return;
    }
    if (isValidElement(child)) {
      const el = child as ReactElement<{ children?: ReactNode }>;
      flatten(el.props.children, accent || el.type === Em, out, state);
    }
  });
  return out;
}

/** Heading whose words rise out of a mask one after another, the stage site's
 *  type with a single authored entrance. Words stay real text for readers and
 *  search, and reduced motion renders the heading as-is. */
export function Headline({
  as = "h2",
  children,
  className = "",
  id,
  delay = 0,
  onLoad = false,
}: {
  as?: "h1" | "h2" | "h3";
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  /** Play immediately (heroes) instead of when scrolled into view. */
  onLoad?: boolean;
}) {
  const reduce = useReducedMotion();
  const words = flatten(children, false, []);
  const Tag = motion[as];
  const step = Math.min(0.06, 0.5 / Math.max(words.length, 1));
  return (
    <Tag
      id={id}
      className={className}
      initial={reduce ? false : "hidden"}
      {...(onLoad ? { animate: "shown" } : { whileInView: "shown", viewport: { once: true, margin: "-8% 0px" } })}
      transition={{ staggerChildren: step, delayChildren: delay }}
    >
      {words.map((w, i) => (
        <Fragment key={i}>
          {w.gap ? " " : null}
          <span className="-mb-[0.16em] -mr-[0.08em] inline-block overflow-hidden pb-[0.16em] pr-[0.08em] align-top">
            <motion.span
              className={`inline-block ${w.accent ? "italic text-accent" : ""}`}
              variants={{ hidden: { y: "108%" }, shown: { y: "0%" } }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              {w.text}
            </motion.span>
          </span>
        </Fragment>
      ))}
    </Tag>
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

/** Odometer digits for numbers that change while you watch (sliders, site
 *  switchers): each digit rolls to its new value, so the change is legible. */
export function Odometer({
  value,
  decimals = 0,
  prefix,
  suffix,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <Counter
      value={value}
      decimals={decimals}
      prefix={prefix}
      suffix={suffix}
      fontSize="1em"
      fontWeight="inherit"
      duration={0.6}
      bounce={0.15}
      stagger={0.03}
      intro={false}
    />
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
    <Magnet magnetStrength={4} maxOffset={10} padding={40} innerClassName="grid">
      <a href={href} className="op-btn group">
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="grid h-8 w-8 place-items-center rounded-full bg-ink text-accent transition-transform duration-200 group-hover:translate-x-0.5"
      >
          <Arrow />
        </span>
      </a>
    </Magnet>
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
