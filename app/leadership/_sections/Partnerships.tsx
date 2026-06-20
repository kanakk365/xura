"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Partner = {
  id: string;
  category: string;
  stat: string;
  body: string;
  mark: "energy" | "realestate" | "construction";
};

const PARTNERS: Partner[] = [
  {
    id: "energy",
    category: "Clean energy",
    stat: "100s",
    body: "Delivered hundreds of clean energy systems for Fortune 500 clients across 30+ states.",
    mark: "energy",
  },
  {
    id: "realestate",
    category: "Real estate",
    stat: "$1B+",
    body: "Executed $1B+ in institutional real estate transactions with disciplined underwriting and asset management.",
    mark: "realestate",
  },
  {
    id: "construction",
    category: "Construction",
    stat: "MF · CC",
    body: "Construction partner specializing in multifamily and commercial projects, providing execution support for energy and infrastructure deployments.",
    mark: "construction",
  },
];

export function LeadershipPartnerships() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="partnerships"
      ref={ref}
      className="relative bg-ink-2/40 py-20 sm:py-28 lg:py-36"
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
        <header className="mb-10 flex flex-col items-center gap-5 text-center sm:mb-14 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.1, 1] }}
            className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-mute"
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
              <span className="absolute -inset-1 rounded-full bg-accent/30 blur-[3px]" />
            </span>
            Partnerships
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.1, 1] }}
            className="max-w-3xl font-display tracking-normal text-[clamp(1.85rem,5vw,3.5rem)] font-normal leading-[1.05] text-paper"
          >
            Institutional-grade{" "}
            <span className="italic text-accent">partnerships</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.1, 1] }}
            className="max-w-xl text-[15px] leading-relaxed text-paper/60 sm:text-base"
          >
            Backed by operators with proven track records across energy, capital,
            and construction&mdash;the depth that turns plans into delivered
            infrastructure.
          </motion.p>
        </header>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {PARTNERS.map((p, i) => (
            <PartnerCard key={p.id} partner={p} index={i} isInView={isInView} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function PartnerCard({
  partner,
  index,
  isInView,
}: {
  partner: Partner;
  index: number;
  isInView: boolean;
}) {
  const delay = 0.3 + index * 0.1;

  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.2, 0.7, 0.1, 1] }}
      className="group relative flex h-full flex-col gap-7 overflow-hidden rounded-2xl border border-paper/[0.08] bg-ink/50 p-7 transition-colors duration-500 hover:border-accent/30 sm:rounded-[28px] sm:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.05]"
      />

      <div className="relative flex items-center justify-between gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
          {partner.category}
        </span>
        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
      </div>

      <div className="relative grid h-24 place-items-center rounded-xl border border-paper/[0.08] bg-[#080808]">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid-lines opacity-[0.18] rounded-xl"
        />
        <PartnerMark mark={partner.mark} />
      </div>

      <div className="relative">
        <span className="font-display tracking-normal text-[clamp(1.6rem,4vw,2.1rem)] font-normal leading-none text-paper">
          {partner.stat}
        </span>
        <p className="mt-4 text-[13.5px] leading-[1.6] text-paper/65">
          {partner.body}
        </p>
      </div>
    </motion.li>
  );
}

function PartnerMark({ mark }: { mark: Partner["mark"] }) {
  if (mark === "construction") {
    return (
      <span className="relative flex items-center gap-3 font-mono text-paper">
        <span className="text-[1.6rem] font-medium tracking-[0.05em]">MF</span>
        <span className="h-7 w-px bg-paper/25" />
        <span className="text-[1.6rem] font-medium tracking-[0.05em] text-accent">
          CC
        </span>
      </span>
    );
  }

  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (mark === "energy") {
    return (
      <svg viewBox="0 0 48 48" className="relative h-10 w-10 text-accent" {...common}>
        <circle cx="24" cy="24" r="18" strokeOpacity="0.35" strokeDasharray="3 4" />
        <path d="M26 12 18 26h7l-2 10 9-14h-7l1-10Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className="relative h-10 w-10 text-accent" {...common}>
      <path d="M10 40V18l10-6 10 6v22" />
      <path d="M30 40V24l8-5v21" />
      <path d="M16 24h4M16 30h4M16 36h4" strokeOpacity="0.6" />
      <path d="M8 40h34" />
    </svg>
  );
}
