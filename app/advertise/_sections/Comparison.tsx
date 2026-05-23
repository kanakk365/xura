"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Cell = string | boolean;

type Row = {
  label: string;
  values: [Cell, Cell, Cell, Cell];
};

type Group = {
  title: string;
  rows: Row[];
};

const COLUMNS = ["Pulse", "Surge", "Voltage", "Bespoke"] as const;
const HIGHLIGHT_COL = 1;

const GROUPS: Group[] = [
  {
    title: "Inventory",
    rows: [
      { label: "Footer banner", values: [true, true, true, true] },
      { label: "Sidebar tile", values: [true, true, true, true] },
      { label: "In-flow card", values: [false, true, true, true] },
      { label: "Hero marquee window", values: [false, false, true, true] },
      { label: "Newsletter sponsor", values: [false, true, true, true] },
      { label: "Co-branded editorial", values: [false, false, false, true] },
    ],
  },
  {
    title: "Reach",
    rows: [
      {
        label: "Guaranteed impressions / mo",
        values: ["50K", "180K", "500K", "Custom"],
      },
      {
        label: "Concurrent placements",
        values: ["1", "2", "3 + marquee", "Custom"],
      },
      {
        label: "Audience targeting",
        values: ["Default", "Segment", "Persona", "1:1 list"],
      },
      {
        label: "Category exclusivity",
        values: [false, false, "Quarterly", "Annual"],
      },
    ],
  },
  {
    title: "Creative & ops",
    rows: [
      {
        label: "Creative variants",
        values: ["1", "2 (A/B)", "Unlimited", "Unlimited"],
      },
      {
        label: "Refresh cadence",
        values: ["Monthly", "Bi-weekly", "Anytime", "Anytime"],
      },
      { label: "Creative QA review", values: ["Standard", "Priority", "Priority", "Concierge"] },
      { label: "Sponsored case study", values: [false, false, "1 / quarter", "Custom"] },
    ],
  },
  {
    title: "Analytics & support",
    rows: [
      { label: "Performance brief", values: ["Monthly", "Weekly", "Real-time", "Real-time"] },
      { label: "Custom dashboard", values: [false, true, true, true] },
      { label: "Attribution exports", values: [false, false, true, true] },
      { label: "Dedicated media planner", values: [false, false, true, true] },
    ],
  },
];

export function AdvertiseComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="comparison"
      ref={ref}
      className="relative bg-ink py-20 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-10 lg:px-16">
        <header className="mb-10 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
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
              Compare
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.1, 1] }}
              className="font-display tracking-normal text-[clamp(1.85rem,6vw,3.5rem)] font-normal leading-[1.05] text-paper"
            >
              The full{" "}
              <span className="italic text-accent">spec sheet</span>.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.1, 1] }}
            className="max-w-sm text-[15px] leading-relaxed text-paper/60 sm:text-base"
          >
            Every line item across every tier. No fine print or off-deck
            add-ons.
          </motion.p>
        </header>

        <div className="hidden lg:block">
          <DesktopTable isInView={isInView} />
        </div>
        <div className="lg:hidden">
          <MobileTable />
        </div>
      </div>
    </section>
  );
}

function DesktopTable({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.2, 0.7, 0.1, 1] }}
      className="relative overflow-hidden rounded-[28px] border border-paper/[0.08] bg-ink-2/60"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.04]"
      />

      <div className="relative grid grid-cols-[1.4fr_repeat(4,1fr)] items-end gap-px bg-paper/[0.05] px-px pt-px">
        <div className="flex items-end bg-ink-2 px-7 pb-5 pt-7">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
            Feature
          </span>
        </div>
        {COLUMNS.map((c, idx) => (
          <div
            key={c}
            className={`flex flex-col gap-1.5 px-6 pb-5 pt-7 ${
              idx === HIGHLIGHT_COL ? "bg-accent/[0.05]" : "bg-ink-2"
            }`}
          >
            <span
              className={`font-mono text-[9.5px] uppercase tracking-[0.2em] ${
                idx === HIGHLIGHT_COL ? "text-accent" : "text-mute"
              }`}
            >
              Tier &middot; 0{idx + 1}
            </span>
            <span className="font-display tracking-normal text-[1.35rem] font-normal leading-none text-paper">
              {c}
            </span>
          </div>
        ))}
      </div>

      {GROUPS.map((g) => (
        <div key={g.title} className="relative">
          <div className="grid grid-cols-[1.4fr_repeat(4,1fr)] items-center gap-px bg-paper/[0.05] px-px">
            <div className="bg-ink-2/90 px-7 py-3">
              <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-accent">
                {g.title}
              </span>
            </div>
            {COLUMNS.map((_, idx) => (
              <div
                key={idx}
                className={`py-3 ${
                  idx === HIGHLIGHT_COL ? "bg-accent/[0.04]" : "bg-ink-2/90"
                }`}
              />
            ))}
          </div>
          {g.rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[1.4fr_repeat(4,1fr)] items-center gap-px bg-paper/[0.05] px-px"
            >
              <div className="flex items-center bg-ink-2 px-7 py-4 text-[13.5px] text-paper/80">
                {row.label}
              </div>
              {row.values.map((v, idx) => (
                <div
                  key={idx}
                  className={`flex h-full items-center px-6 py-4 ${
                    idx === HIGHLIGHT_COL ? "bg-accent/[0.04]" : "bg-ink-2"
                  }`}
                >
                  <CellRender value={v} highlight={idx === HIGHLIGHT_COL} />
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}

      <div className="grid grid-cols-[1.4fr_repeat(4,1fr)] items-center gap-px bg-paper/[0.05] px-px pb-px">
        <div className="bg-ink-2 px-7 py-5 text-[12px] text-paper/55">
          Every tier includes IAB-compliant tracking and SSL-only creative.
        </div>
        {COLUMNS.map((c, idx) => (
          <div
            key={c}
            className={`px-6 py-5 ${
              idx === HIGHLIGHT_COL ? "bg-accent/[0.04]" : "bg-ink-2"
            }`}
          >
            <a
              href="#advertise-contact"
              className={`inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors ${
                idx === HIGHLIGHT_COL
                  ? "text-accent hover:text-paper"
                  : "text-paper/70 hover:text-accent"
              }`}
            >
              Choose {c}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function MobileTable() {
  return (
    <div className="flex flex-col gap-4">
      {COLUMNS.map((c, idx) => (
        <div
          key={c}
          className={`relative overflow-hidden rounded-2xl border ${
            idx === HIGHLIGHT_COL
              ? "border-accent/30 bg-accent/[0.04]"
              : "border-paper/[0.08] bg-ink-2/60"
          }`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 grid-lines opacity-[0.04]"
          />
          <div className="relative flex items-center justify-between gap-3 px-5 py-4">
            <div className="flex flex-col gap-1">
              <span
                className={`font-mono text-[9.5px] uppercase tracking-[0.2em] ${
                  idx === HIGHLIGHT_COL ? "text-accent" : "text-mute"
                }`}
              >
                Tier &middot; 0{idx + 1}
              </span>
              <span className="font-display tracking-normal text-[1.3rem] font-normal leading-none text-paper">
                {c}
              </span>
            </div>
            <a
              href="#advertise-contact"
              className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent"
            >
              Pick &rarr;
            </a>
          </div>
          <div className="relative border-t border-paper/[0.06] px-5 py-4">
            {GROUPS.map((g) => (
              <div key={g.title} className="mb-4 last:mb-0">
                <p className="mb-2 font-mono text-[9.5px] uppercase tracking-[0.22em] text-accent">
                  {g.title}
                </p>
                <dl className="flex flex-col gap-2">
                  {g.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-4 text-[12.5px]"
                    >
                      <dt className="text-paper/65">{row.label}</dt>
                      <dd>
                        <CellRender
                          value={row.values[idx]}
                          highlight={idx === HIGHLIGHT_COL}
                        />
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function CellRender({
  value,
  highlight,
}: {
  value: Cell;
  highlight?: boolean;
}) {
  if (value === true) {
    return (
      <span
        aria-label="Included"
        className={`grid h-5 w-5 place-items-center rounded-full ${
          highlight ? "bg-accent/20" : "bg-paper/[0.06]"
        }`}
      >
        <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
          <path
            d="M2 6.2 4.6 8.8 10 3.6"
            stroke={highlight ? "#8bfb03" : "rgba(255,255,255,0.9)"}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }
  if (value === false) {
    return (
      <span
        aria-label="Not included"
        className="inline-block h-px w-3 bg-paper/25"
      />
    );
  }
  return (
    <span
      className={`font-display tracking-normal text-[14px] font-normal ${
        highlight ? "text-paper" : "text-paper/85"
      }`}
    >
      {value}
    </span>
  );
}
