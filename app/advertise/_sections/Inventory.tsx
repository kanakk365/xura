"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Placement = {
  id: string;
  code: string;
  name: string;
  format: string;
  spec: string;
  description: string;
  diagram: "marquee" | "inflow" | "sidebar" | "footer" | "newsletter";
};

const PLACEMENTS: Placement[] = [
  {
    id: "marquee",
    code: "P-01",
    name: "Hero Marquee",
    format: "1440 × 120",
    spec: "PNG / SVG / WebM",
    description:
      "Top-of-page strip directly under the navigation. The first thing a reader sees on entry.",
    diagram: "marquee",
  },
  {
    id: "inflow",
    code: "P-02",
    name: "In-Flow Card",
    format: "960 × 540",
    spec: "Native bento card",
    description:
      "Drop-in card placed mid-article. Visually treated like editorial content for full attention.",
    diagram: "inflow",
  },
  {
    id: "sidebar",
    code: "P-03",
    name: "Sidebar Tile",
    format: "400 × 400",
    spec: "Sticky / persistent",
    description:
      "Square tile that follows the reader through long-form content on desktop layouts.",
    diagram: "sidebar",
  },
  {
    id: "footer",
    code: "P-04",
    name: "Footer Banner",
    format: "1200 × 200",
    spec: "Static / animated",
    description:
      "Wide banner above the global footer. Strong for awareness and brand recall.",
    diagram: "footer",
  },
  {
    id: "newsletter",
    code: "P-05",
    name: "Newsletter Sponsor",
    format: "1 / issue",
    spec: "Logo + 80 words",
    description:
      "Single sponsor mention in the bi-weekly briefing sent to operators and capital partners.",
    diagram: "newsletter",
  },
];

export function AdvertiseInventory() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="inventory"
      ref={ref}
      className="relative bg-ink py-20 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent"
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
              Inventory
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.1, 1] }}
              className="font-display tracking-normal text-[clamp(1.85rem,6vw,3.5rem)] font-normal leading-[1.05] text-paper"
            >
              Five surfaces, no{" "}
              <span className="italic text-accent">noise</span>.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.1, 1] }}
            className="max-w-sm text-[15px] leading-relaxed text-paper/60 sm:text-base"
          >
            We cap inventory deliberately. Each surface holds a single
            advertiser at a time, so creative lands in context &mdash; not in a
            crowd.
          </motion.p>
        </header>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {PLACEMENTS.map((p, i) => (
            <PlacementCard
              key={p.id}
              placement={p}
              index={i}
              isInView={isInView}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function PlacementCard({
  placement,
  index,
  isInView,
}: {
  placement: Placement;
  index: number;
  isInView: boolean;
}) {
  const delay = 0.3 + index * 0.08;
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.1, 1] }}
      className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-paper/[0.08] bg-ink-2/60 p-6 transition-colors duration-500 hover:bg-ink-2 sm:rounded-[28px] sm:p-7"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.04]"
      />

      <div className="relative flex items-center justify-between gap-3 text-[10px] font-medium uppercase tracking-[0.24em]">
        <span className="flex items-center gap-2 text-accent">
          <span className="relative inline-flex h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
          </span>
          Placement
        </span>
        <span className="font-mono tracking-[0.2em] text-mute">
          {placement.code}
        </span>
      </div>

      <div className="relative rounded-xl border border-paper/[0.08] bg-ink/70 p-4">
        <PlacementDiagram kind={placement.diagram} />
      </div>

      <div className="relative flex flex-col gap-3">
        <h3 className="font-display tracking-normal text-[clamp(1.25rem,2vw,1.55rem)] font-normal leading-[1.1] text-paper">
          {placement.name}
        </h3>
        <p className="text-[13.5px] leading-[1.55] text-paper/65">
          {placement.description}
        </p>
      </div>

      <dl className="relative mt-auto grid grid-cols-2 gap-x-3 border-t border-paper/10 pt-4">
        <div className="flex flex-col gap-1.5">
          <dt className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-mute">
            Format
          </dt>
          <dd className="font-display tracking-normal text-[14px] font-normal text-paper">
            {placement.format}
          </dd>
        </div>
        <div className="flex flex-col gap-1.5">
          <dt className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-mute">
            Spec
          </dt>
          <dd className="font-display tracking-normal text-[14px] font-normal text-paper">
            {placement.spec}
          </dd>
        </div>
      </dl>
    </motion.li>
  );
}

function PlacementDiagram({ kind }: { kind: Placement["diagram"] }) {
  const frame =
    "stroke-paper/15";
  const fill = "fill-paper/[0.05]";
  const accent = "fill-accent";
  const accentStroke = "stroke-accent";

  return (
    <svg
      viewBox="0 0 200 110"
      className="block h-[110px] w-full"
      aria-hidden="true"
    >
      <rect
        x="6"
        y="6"
        width="188"
        height="98"
        rx="8"
        className={frame}
        strokeWidth="1"
        fill="rgba(255,255,255,0.015)"
      />
      <line
        x1="6"
        y1="22"
        x2="194"
        y2="22"
        className={frame}
        strokeWidth="0.8"
        strokeDasharray="2 3"
      />

      {kind === "marquee" && (
        <>
          <rect
            x="14"
            y="28"
            width="172"
            height="14"
            rx="3"
            className={`${accent} ${accentStroke}`}
            fillOpacity="0.18"
            strokeWidth="0.8"
          />
          <rect x="14" y="48" width="100" height="6" rx="2" className={fill} />
          <rect x="14" y="58" width="120" height="6" rx="2" className={fill} />
          <rect x="14" y="70" width="80" height="6" rx="2" className={fill} />
          <rect x="14" y="86" width="172" height="14" rx="3" className={fill} />
        </>
      )}

      {kind === "inflow" && (
        <>
          <rect x="14" y="28" width="172" height="6" rx="2" className={fill} />
          <rect x="14" y="38" width="120" height="6" rx="2" className={fill} />
          <rect
            x="14"
            y="50"
            width="172"
            height="38"
            rx="4"
            className={`${accent} ${accentStroke}`}
            fillOpacity="0.18"
            strokeWidth="0.8"
          />
          <rect x="14" y="94" width="80" height="6" rx="2" className={fill} />
        </>
      )}

      {kind === "sidebar" && (
        <>
          <rect x="14" y="28" width="120" height="6" rx="2" className={fill} />
          <rect x="14" y="38" width="100" height="6" rx="2" className={fill} />
          <rect x="14" y="52" width="120" height="6" rx="2" className={fill} />
          <rect x="14" y="62" width="80" height="6" rx="2" className={fill} />
          <rect x="14" y="76" width="120" height="6" rx="2" className={fill} />
          <rect x="14" y="86" width="60" height="6" rx="2" className={fill} />
          <rect
            x="144"
            y="28"
            width="42"
            height="42"
            rx="4"
            className={`${accent} ${accentStroke}`}
            fillOpacity="0.18"
            strokeWidth="0.8"
          />
        </>
      )}

      {kind === "footer" && (
        <>
          <rect x="14" y="28" width="172" height="6" rx="2" className={fill} />
          <rect x="14" y="38" width="120" height="6" rx="2" className={fill} />
          <rect x="14" y="50" width="172" height="6" rx="2" className={fill} />
          <rect x="14" y="60" width="140" height="6" rx="2" className={fill} />
          <rect
            x="14"
            y="76"
            width="172"
            height="22"
            rx="4"
            className={`${accent} ${accentStroke}`}
            fillOpacity="0.18"
            strokeWidth="0.8"
          />
        </>
      )}

      {kind === "newsletter" && (
        <>
          <rect
            x="40"
            y="28"
            width="120"
            height="72"
            rx="6"
            className={frame}
            strokeWidth="0.8"
            fill="rgba(255,255,255,0.02)"
          />
          <rect x="48" y="36" width="60" height="5" rx="2" className={fill} />
          <rect x="48" y="46" width="104" height="4" rx="2" className={fill} />
          <rect x="48" y="54" width="92" height="4" rx="2" className={fill} />
          <rect
            x="48"
            y="66"
            width="104"
            height="20"
            rx="3"
            className={`${accent} ${accentStroke}`}
            fillOpacity="0.18"
            strokeWidth="0.8"
          />
          <rect x="48" y="90" width="56" height="4" rx="2" className={fill} />
        </>
      )}
    </svg>
  );
}
