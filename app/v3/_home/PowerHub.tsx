"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";

import { EASE, Em, SectionHead, Segmented } from "../_components/primitives";
import { PowerHubFigure } from "../_figures/PowerHubFigure";

type Mode = "normal" | "peak" | "outage";

const HEAT = "#ff5a1f";

const MODES: Record<
  Mode,
  {
    label: string;
    note: string;
  }
> = {
  normal: {
    label: "Normal day",
    note: "The feeder and fuel cell carry the site while the battery recharges for the next peak.",
  },
  peak: {
    label: "Peak demand",
    note: "The 2.5C battery and linear generator cover the peak, so the feeder never needs a transformer upgrade.",
  },
  outage: {
    label: "Grid outage",
    note: "The UPS transfers in under 2 ms; fuel cell, linear generator and battery carry the site on their own.",
  },
};

const ASSETS: { key: string; name: string; status: Record<Mode, [string, number]> }[] = [
  { key: "grid", name: "Utility feeder", status: { normal: ["Importing", 4], peak: ["Held at feeder limit", 2], outage: ["Outage", 0] } },
  { key: "fc", name: "Solid-oxide fuel cell", status: { normal: ["Base load", 3], peak: ["Base load", 3], outage: ["Island mode", 4] } },
  { key: "lg", name: "Linear generator", status: { normal: ["Standby", 0], peak: ["Dispatched", 4], outage: ["Dispatched", 5] } },
  { key: "bess", name: "Battery storage · 2.5C", status: { normal: ["Charging", 3], peak: ["Discharging at 2.5C", 5], outage: ["Discharging at 2.5C", 5] } },
  { key: "ups", name: "Industrial UPS", status: { normal: ["Conditioning", 2], peak: ["Conditioning", 2], outage: ["Transferred < 2 ms", 5] } },
];

const ORDER: Mode[] = ["normal", "peak", "outage"];

export function PowerHub() {
  const [mode, setMode] = useState<Mode>("normal");
  const [readout, setReadout] = useState("Normal day · battery 78% charging");
  const onFigureMode = useCallback((next: Mode) => setMode(next), []);
  const m = MODES[mode];

  return (
    <section id="power-hub" className="op-section">
      <div className="op-shell">
        <SectionHead
          kicker="Xura integrated power hub"
          title={
            <>
              Generation and storage, <Em>behind one meter</Em>.
            </>
          }
          lead="Battery storage at 2.5C, a UPS that transfers in under 2 ms, a solid-oxide fuel cell and a linear generator, dispatched together to deliver Level 3 charging and peak shaving without waiting years for utility upgrades."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
          {/* Isometric cutaway: the object is the explanation */}
          <div className="op-plate">
            <div className="op-plate-bar">
              <span>
                <b>Fig 1</b>
                <span className="hidden sm:inline"> · Power hub, side off</span>
              </span>
              <span className="flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${mode === "outage" ? "bg-[#ff5a1f]" : "bg-accent"} op-blink`} />
                {m.label}
              </span>
            </div>
            <div className="flex flex-1 items-center overflow-hidden">
              <PowerHubFigure mode={mode} onMode={onFigureMode} onReadout={setReadout} />
            </div>
            <div className="op-plate-foot">
              <span className="shrink-0">
                <b>Illustrative</b>
                <span className="hidden sm:inline"> · press 1 · 2 · 3 or click</span>
                <span className="sm:hidden"> · tap to step</span>
              </span>
              <span className="min-w-0 truncate">{readout}</span>
            </div>
          </div>

          {/* Readout */}
          <div className="op-plate">
            <div className="border-b border-paper/[0.08] px-5 py-3">
              <div className="-mx-1 overflow-x-auto px-1 [scrollbar-width:none]">
                <Segmented
                  label="Dispatch scenario"
                  layoutId="ph-mode"
                  value={mode}
                  onChange={setMode}
                  options={ORDER.map((k) => ({ value: k, label: MODES[k].label }))}
                />
              </div>
            </div>
            <ul className="flex flex-1 flex-col">
              {ASSETS.map((a, i) => {
                const [status, level] = a.status[mode];
                const alert = a.key === "grid" && mode === "outage";
                return (
                  <li key={a.key} className={`flex flex-1 items-center gap-4 px-6 py-4 ${i > 0 ? "border-t border-paper/[0.07]" : ""}`}>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-[1.02rem] leading-tight text-paper">{a.name}</p>
                      <div className="relative mt-1 h-[18px] overflow-hidden">
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.p
                            key={status}
                            initial={{ y: 12, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -12, opacity: 0 }}
                            transition={{ duration: 0.28, ease: EASE }}
                            className={`truncate font-mono text-[0.68rem] uppercase tracking-[0.1em] ${alert ? "text-[#ff5a1f]" : level ? "text-accent" : "text-mute-2"}`}
                          >
                            {status}
                          </motion.p>
                        </AnimatePresence>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-end gap-[3px]" aria-hidden="true">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <motion.span
                          key={s}
                          className="block w-[5px] rounded-[1px]"
                          style={{ height: 8 + s * 4 }}
                          initial={false}
                          animate={{ backgroundColor: s < level ? (alert ? HEAT : "#8bfb03") : "rgba(255,255,255,0.12)" }}
                          transition={{ duration: 0.3, delay: s * 0.04 }}
                        />
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="border-t border-paper/[0.08] px-6 py-5">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={mode}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="min-h-[3.4em] text-[14px] leading-[1.6] text-paper/65"
                >
                  {m.note}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

