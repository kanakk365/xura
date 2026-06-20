"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Credential = {
  id: string;
  title: string;
  body: string;
  icon: "shield" | "badge" | "wave" | "layers";
};

const CREDENTIALS: Credential[] = [
  {
    id: "record",
    title: "Proven record",
    body: "Hundreds of deployments with zero fire or explosion incidents — safety demonstrated in the field, not just on paper.",
    icon: "shield",
  },
  {
    id: "ul",
    title: "UL 9540A certified",
    body: "Validated against the industry's most rigorous fire-propagation test standard for energy storage systems.",
    icon: "badge",
  },
  {
    id: "monitoring",
    title: "Advanced monitoring",
    body: "Continuous, real-time monitoring detects thermal and electrical anomalies long before they can become events.",
    icon: "wave",
  },
  {
    id: "protection",
    title: "Layered protection",
    body: "Independent safety systems contain faults at the cell, pack, and site level so no single failure can escalate.",
    icon: "layers",
  },
];

export function StrategySafety() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="safety"
      ref={ref}
      className="relative bg-ink py-20 sm:py-28 lg:py-36"
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
              Safety
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.1, 1] }}
              className="font-display tracking-normal text-[clamp(1.85rem,5vw,3.5rem)] font-normal leading-[1.05] text-paper"
            >
              We don&rsquo;t just meet safety standards&mdash;{" "}
              <span className="italic text-accent">we set them</span>.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.1, 1] }}
            className="max-w-sm text-[15px] leading-relaxed text-paper/60 sm:text-base"
          >
            Energy storage on a live site only earns trust one way: a record you
            can verify, backed by certification and layered protection.
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.2, 0.7, 0.1, 1] }}
          className="relative mb-4 flex flex-col items-start gap-5 overflow-hidden rounded-2xl border border-accent/25 bg-accent/[0.05] p-6 sm:flex-row sm:items-center sm:gap-8 sm:rounded-[28px] sm:p-9"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 grid-lines opacity-[0.05]"
          />
          <div className="relative flex items-baseline gap-2">
            <span className="font-display tracking-normal text-[clamp(3rem,9vw,5rem)] font-normal leading-none text-accent">
              Zero
            </span>
          </div>
          <p className="relative max-w-xl text-[15px] leading-relaxed text-paper/80 sm:text-[17px]">
            Fire or explosion incidents across{" "}
            <span className="text-paper">hundreds of deployments</span>. Safety
            isn&rsquo;t a feature we add at the end&mdash;it&rsquo;s the
            baseline every Xura system is engineered to.
          </p>
        </motion.div>

        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CREDENTIALS.map((c, i) => (
            <CredentialCard
              key={c.id}
              credential={c}
              index={i}
              isInView={isInView}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

function CredentialCard({
  credential,
  index,
  isInView,
}: {
  credential: Credential;
  index: number;
  isInView: boolean;
}) {
  const delay = 0.35 + index * 0.1;

  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.2, 0.7, 0.1, 1] }}
      className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-paper/[0.08] bg-ink-2/60 p-6 transition-colors duration-500 hover:bg-ink-2 sm:rounded-[28px] sm:p-7"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.04]"
      />

      <span className="relative grid h-11 w-11 place-items-center rounded-xl border border-accent/25 bg-accent/[0.08] text-accent">
        <CredentialIcon icon={credential.icon} />
      </span>

      <h3 className="relative font-display tracking-normal text-[1.3rem] font-normal leading-tight text-paper">
        {credential.title}
      </h3>

      <p className="relative text-[13px] leading-[1.6] text-paper/65">
        {credential.body}
      </p>
    </motion.li>
  );
}

function CredentialIcon({ icon }: { icon: Credential["icon"] }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (icon === "shield") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" {...common}>
        <path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }
  if (icon === "badge") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" {...common}>
        <circle cx="12" cy="9" r="5.5" />
        <path d="m9 13-1.5 7L12 18l4.5 2L15 13" />
      </svg>
    );
  }
  if (icon === "wave") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" {...common}>
        <path d="M3 12h3l2-6 4 14 3-10 2 4h4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" {...common}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  );
}
