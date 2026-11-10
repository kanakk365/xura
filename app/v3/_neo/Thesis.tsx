"use client";

import { motion } from "motion/react";

import { Check, EASE, Em, SectionHead } from "../_components/primitives";

const WISH = {
  tag: "High failure rate",
  title: "The wishing approach",
  sub: "Speculative 100MW+ megaprojects",
  body: "Massive campuses announced without verified interconnections, demanding millions of gallons of municipal water and fighting multi-year rezoning wars.",
  points: [
    { t: "5 to 8+ year interconnection queue", b: "New transmission lines and substations that stall indefinitely." },
    { t: "Excessive municipal water evaporation", b: "Evaporative cooling towers drain local aquifers and spark opposition." },
    { t: "Hostile zoning & permitting moratoriums", b: "New rules, variances and litigation that kill timelines." },
  ],
  outcome: "Unpredictable · stranded capital",
};

const REAL = {
  tag: "Realistic implementation",
  title: "The NeoCloud reality",
  sub: "Right-sized 4.9 to 25 MW modular sites",
  body: "Engineered around existing Northeast utility infrastructure, with an on-site clean microgrid and closed-loop waterless cooling that communities welcome.",
  points: [
    { t: "Existing utility power + integrated microgrid", b: "Available feeders plus fuel cells, linear generators and UL9540A batteries." },
    { t: "Less water than a typical commercial building", b: "Closed-loop cooling needs virtually no municipal water." },
    { t: "Zero new zoning rules required", b: "Controlled parcels across NY, NJ, CT and MA built for friction-free delivery." },
  ],
  outcome: "On-time · bankable execution",
};

/* Both columns are written into one grid row by row, so every point on the
   left is exactly as tall as its partner on the right. On mobile, CSS order
   regroups them into two stacked cards. */
export function Thesis() {
  const rows = 5; // head, 3 points, outcome
  const cell = (side: "w" | "r", row: number) => {
    const real = side === "r";
    const first = row === 0;
    const last = row === rows - 1;
    return `relative px-6 sm:px-8 border-x ${real ? "border-accent/35 bg-[rgba(139,251,3,0.035)]" : "border-paper/10 bg-[#0b0b0b]"} ${
      first ? "rounded-t-[24px] border-t pt-7" : "border-t border-t-paper/[0.07] pt-5"
    } ${last ? "rounded-b-[24px] border-b pb-6 mb-5 lg:mb-0" : "pb-5"} order-[var(--o)] lg:order-none`;
  };

  return (
    <section id="thesis" className="op-section">
      <div className="op-shell">
        <SectionHead
          kicker="The thesis · reality vs. wishing"
          title={
            <>
              Stop wishing for power that isn&rsquo;t there. <Em>Plan for reality</Em>.
            </>
          }
          lead="Across the country, massive data center proposals are collapsing under utility queues, water shortages and zoning referendums. NeoCloud removes execution risk by building inside existing envelopes."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-5">
          {[0, 1, 2, 3, 4].flatMap((row) =>
            (["w", "r"] as const).map((side) => {
              const d = side === "w" ? WISH : REAL;
              const real = side === "r";
              return (
                <motion.div
                  key={`${side}-${row}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8% 0px" }}
                  transition={{ duration: 0.6, delay: (real ? 0.15 : 0) + row * 0.06, ease: EASE }}
                  className={cell(side, row)}
                  style={{ ["--o" as string]: real ? rows + row + 1 : row + 1 }}
                >
                  {row === 0 && (
                    <>
                      <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.16em] ${real ? "bg-accent text-ink" : "border border-paper/15 text-mute"}`}>
                        {d.tag}
                      </span>
                      <h3 className={`mt-5 op-h3 ${real ? "" : "!text-paper/80"}`}>{real ? <Em>{d.title}</Em> : d.title}</h3>
                      <p className="mt-1 text-[14px] text-paper/80">{d.sub}</p>
                      <p className="mt-3 max-w-[52ch] text-[14px] leading-[1.65] text-mute">{d.body}</p>
                    </>
                  )}
                  {row > 0 && row < 4 && (
                    <div className="flex gap-4">
                      <span className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full ${real ? "bg-accent text-ink" : "border border-paper/15 text-paper/40"}`}>
                        {real ? (
                          <Check />
                        ) : (
                          <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
                            <path d="M6 6l12 12M18 6L6 18" />
                          </svg>
                        )}
                      </span>
                      <div>
                        <p className={`font-display text-[1.02rem] leading-snug ${real ? "text-paper" : "text-paper/70"}`}>{d.points[row - 1].t}</p>
                        <p className="mt-1 text-[13.5px] leading-[1.55] text-mute">{d.points[row - 1].b}</p>
                      </div>
                    </div>
                  )}
                  {row === 4 && (
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="op-label !text-[9px]">Planning outcome</span>
                      <span className={`font-display text-[1.05rem] ${real ? "italic text-accent" : "text-paper/55 line-through decoration-paper/30"}`}>{d.outcome}</span>
                    </div>
                  )}
                </motion.div>
              );
            }),
          )}
        </div>
      </div>
    </section>
  );
}
