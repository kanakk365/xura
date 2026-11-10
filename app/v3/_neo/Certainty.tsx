"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

import { Check, EASE, Em, SectionHead } from "../_components/primitives";

const LEVELS = [
  { level: "Cell level", result: "Verified pass" },
  { level: "Module level", result: "Contained" },
  { level: "Installation", result: "UL9540A compliant" },
];

const STEPS = [4.9, 12.5, 25];

const PRINCIPLES = [
  {
    title: "No new zoning rules",
    body: "Our footprint, power envelope and water use mirror or beat standard commercial buildings, so we avoid contentious rezoning variances.",
  },
  {
    title: "Fuel cells + linear generators",
    body: "A behind-the-meter microgrid bridges local utility power with continuous solid-oxide fuel cells and dispatchable linear generators.",
  },
  {
    title: "Realistic implementation",
    body: "No project failure from insufficient utility power, excessive water demand or community permitting blockades.",
  },
];

export function Certainty() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();
  const show = inView || !!reduce;

  return (
    <section id="certainty" className="op-section">
      <div className="op-shell">
        <SectionHead
          kicker="Engineered for certainty"
          title={
            <>
              Every obstacle removed <Em>before groundbreaking</Em>.
            </>
          }
          lead="Modular systems built around existing power, UL9540A storage and waterless cooling turn speculative masterplans into bankable deployments."
        />

        <div ref={ref} className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="op-plate p-7 sm:p-9">
            <p className="op-label !text-accent">UL9540A tested & verified</p>
            <h3 className="op-h3 mt-4 max-w-[26ch]">Safe batteries that meet the highest UL9540A standards.</h3>
            <p className="mt-4 max-w-[56ch] text-[15px] leading-[1.7] text-paper/60">
              Fire safety is paramount in Northeast municipalities. Our storage is tested at cell, module, unit and installation level:
              zero thermal-runaway propagation and full compliance with local fire marshals.
            </p>
            <div aria-hidden="true" className="min-h-8 flex-1" />
            <ol className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {LEVELS.map((l, i) => (
                <motion.li
                  key={l.level}
                  initial={{ opacity: 0, y: 12 }}
                  animate={show ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15, ease: EASE }}
                  className="flex flex-col gap-3 rounded-2xl border border-paper/10 bg-[#0b0b0b] px-4 py-4"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-ink">
                    <Check />
                  </span>
                  <span className="op-label !text-[9px]">{l.level}</span>
                  <span className="font-display text-[1rem] leading-tight text-paper">{l.result}</span>
                </motion.li>
              ))}
            </ol>
          </div>

          <div className="op-plate p-7 sm:p-9">
            <p className="op-label !text-accent">Modular sweet spot</p>
            <h3 className="op-h3 mt-4 max-w-[26ch]">4.9 to 25 MW of modular density.</h3>
            <p className="mt-4 max-w-[56ch] text-[15px] leading-[1.7] text-paper/60">
              Small enough to fit existing utility capacity and commercial parcels; powerful enough for high-density AI training,
              inference and enterprise cloud clusters.
            </p>
            <div aria-hidden="true" className="min-h-8 flex-1" />
            <div className="grid grid-cols-3 items-end gap-3">
              {STEPS.map((mw, i) => (
                <div key={mw} className="flex flex-col items-stretch gap-3">
                  <div className="relative h-[150px] overflow-hidden rounded-2xl border border-paper/10 bg-[#0b0b0b]">
                    <motion.div
                      className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(139,251,3,0.85),rgba(139,251,3,0.35))]"
                      initial={{ height: 0 }}
                      animate={{ height: show ? `${(mw / 25) * 100}%` : 0 }}
                      transition={{ duration: 0.9, delay: 0.2 + i * 0.18, ease: EASE }}
                    />
                  </div>
                  <p className="font-display text-[1.3rem] leading-none text-paper">
                    {mw}
                    <span className="ml-1 text-[10px] uppercase tracking-[0.14em] text-accent">MW</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="op-cells mt-5 grid-cols-1 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-7 sm:p-8"
            >
              <span className="font-mono text-[10px] tracking-[0.16em] text-accent">0{i + 1}</span>
              <h3 className="mt-4 font-display text-[1.25rem] leading-snug text-paper">{p.title}</h3>
              <p className="mt-3 text-[14.5px] leading-[1.65] text-mute">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
