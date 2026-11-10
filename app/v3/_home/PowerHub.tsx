"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { EASE, Em, SectionHead, Segmented } from "../_components/primitives";

type Mode = "normal" | "peak" | "outage";
type PathKey = "grid" | "fc" | "lg" | "chg" | "bld" | "tel";

const HEAT = "#ff5a1f";

/* Geometry: three sources on the left, the hub in the middle, two loads and
   the dispatch link on the right. All paths are orthogonal with soft corners. */
const PATHS: Record<PathKey, string> = {
  grid: "M144 64 H180 Q190 64 190 74 V120 Q190 130 200 130 H236",
  fc: "M144 190 H236",
  lg: "M144 316 H180 Q190 316 190 306 V260 Q190 250 200 250 H236",
  chg: "M404 130 H440 Q450 130 450 120 V74 Q450 64 460 64 H496",
  bld: "M404 250 H440 Q450 250 450 260 V306 Q450 316 460 316 H496",
  tel: "M404 190 H496",
};

const MODES: Record<
  Mode,
  {
    label: string;
    flows: Partial<Record<PathKey, number>>; // seconds per packet trip; lower is busier
    soc: [number, number];
    note: string;
  }
> = {
  normal: {
    label: "Normal day",
    flows: { grid: 1.9, fc: 2.4, chg: 2.1, bld: 2.6, tel: 3.2 },
    soc: [0.42, 0.94],
    note: "The feeder and fuel cell carry the site while the battery recharges for the next peak.",
  },
  peak: {
    label: "Peak demand",
    flows: { grid: 3.2, fc: 2.2, lg: 1.7, chg: 1.1, bld: 1.6, tel: 3.2 },
    soc: [0.94, 0.36],
    note: "The 2.5C battery and linear generator cover the peak, so the feeder never needs a transformer upgrade.",
  },
  outage: {
    label: "Grid outage",
    flows: { fc: 1.6, lg: 1.3, chg: 1.4, bld: 1.5, tel: 3.2 },
    soc: [0.9, 0.3],
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
  const [pinned, setPinned] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-15% 0px" });
  const reduce = useReducedMotion();

  // Walk through the three scenarios until the visitor picks one.
  useEffect(() => {
    if (pinned || reduce || !inView) return;
    const t = setTimeout(() => setMode((m) => ORDER[(ORDER.indexOf(m) + 1) % ORDER.length]), 6500);
    return () => clearTimeout(t);
  }, [mode, pinned, reduce, inView]);

  const m = MODES[mode];
  const live = inView && !reduce;

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

        <div ref={ref} className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
          {/* Flow diagram */}
          <div className="op-plate">
            <div className="op-plate-bar">
              <span>
                <b>Power hub</b> · live dispatch
              </span>
              <span className="flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${mode === "outage" ? "bg-[#ff5a1f]" : "bg-accent"} op-blink`} />
                {m.label}
              </span>
            </div>
            <div className="flex flex-1 items-center px-3 py-5 sm:px-6">
              <svg viewBox="0 0 640 380" className="block w-full" role="img" aria-label={`Power hub dispatch diagram, ${m.label}: ${m.note}`}>
                <defs>
                  <pattern id="ph-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.9" fill="rgba(255,255,255,0.06)" />
                  </pattern>
                  <radialGradient id="ph-glow">
                    <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#8bfb03" stopOpacity="0" />
                  </radialGradient>
                  <filter id="ph-blur" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.2" />
                  </filter>
                </defs>
                <rect width="640" height="380" fill="url(#ph-grid)" />
                <motion.ellipse
                  cx="320" cy="190" rx="190" ry="150" fill="url(#ph-glow)"
                  animate={{ opacity: mode === "outage" ? 0.55 : 1 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Wires and energy packets */}
                {(Object.keys(PATHS) as PathKey[]).map((k) => {
                  const dur = m.flows[k];
                  const on = dur !== undefined;
                  const broken = k === "grid" && mode === "outage";
                  const tel = k === "tel";
                  return (
                    <g key={k}>
                      <path d={PATHS[k]} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={tel ? 1.2 : 3} strokeLinecap="round" />
                      <motion.path
                        d={PATHS[k]}
                        fill="none"
                        strokeWidth={tel ? 1.2 : 2}
                        strokeLinecap="round"
                        strokeDasharray={tel ? "2 5" : broken ? "4 7" : undefined}
                        initial={false}
                        animate={{
                          stroke: broken ? HEAT : "#8bfb03",
                          strokeOpacity: on ? (tel ? 0.7 : 0.55) : broken ? 0.8 : 0,
                        }}
                        transition={{ duration: 0.45, ease: EASE }}
                        className={tel && live ? "op-flow" : ""}
                      />
                      {live && on && !tel &&
                        [0, 1, 2].map((i) => (
                          <g key={`${mode}-${i}`}>
                            <circle r="5" fill="#8bfb03" opacity="0.5" filter="url(#ph-blur)">
                              <animateMotion dur={`${dur}s`} begin={`${-(dur / 3) * i}s`} repeatCount="indefinite" path={PATHS[k]} calcMode="linear" />
                            </circle>
                            <circle r="2.4" fill="#eaffd0">
                              <animateMotion dur={`${dur}s`} begin={`${-(dur / 3) * i}s`} repeatCount="indefinite" path={PATHS[k]} calcMode="linear" />
                            </circle>
                          </g>
                        ))}
                    </g>
                  );
                })}

                {/* Outage marker on the feeder */}
                <AnimatePresence>
                  {mode === "outage" && (
                    <motion.g
                      key="x"
                      initial={{ opacity: 0, scale: 0.4 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.4 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      style={{ transformOrigin: "190px 97px", transformBox: "view-box" }}
                    >
                      <circle cx="190" cy="97" r="11" fill="#0a0a0a" stroke={HEAT} strokeWidth="1.5" />
                      <path d="M185 92 L195 102 M195 92 L185 102" stroke={HEAT} strokeWidth="2" strokeLinecap="round" />
                    </motion.g>
                  )}
                </AnimatePresence>

                {/* Sources */}
                <Node x={16} y={34} title="UTILITY" sub="13.2 kV" active={mode !== "outage"} alert={mode === "outage"}>
                  <path d="M30 80 L38 50 L46 80 M33 70 H43 M35 60 H41" fill="none" strokeWidth="1.6" strokeLinejoin="round" />
                </Node>
                <Node x={16} y={160} title="FUEL CELL" sub="Solid oxide" active>
                  {[0, 1, 2, 3].map((i) => (
                    <rect key={i} x={28} y={175 + i * 7} width={20} height={4} rx={1} strokeWidth="1.4" fill="none" />
                  ))}
                </Node>
                <Node x={16} y={286} title="LINEAR GEN" sub="Dispatchable" active={mode !== "normal"}>
                  <rect x={27} y={302} width={22} height={28} rx={11} fill="none" strokeWidth="1.5" />
                  <motion.rect
                    x={31} width={14} height={4} rx={1}
                    animate={live && mode !== "normal" ? { y: [306, 322, 306] } : { y: 314 }}
                    transition={live && mode !== "normal" ? { duration: 0.5, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
                    className="fill-current"
                  />
                </Node>

                {/* Hub */}
                <rect x="236" y="96" width="168" height="188" rx="14" fill="#0b0b0b" stroke="rgba(139,251,3,0.55)" strokeWidth="1.5" />
                <text x="320" y="121" textAnchor="middle" fontSize="9.5" letterSpacing="2.4" fill="#8bfb03" className="font-mono">
                  POWER HUB
                </text>
                {[0, 1, 2, 3].map((i) => (
                  <g key={i}>
                    <rect x={256 + i * 34} y={136} width={26} height={88} rx={4} fill="#121212" stroke="rgba(255,255,255,0.16)" />
                    <motion.rect
                      x={259 + i * 34} y={139} width={20} height={82} rx={2}
                      fill="#8bfb03"
                      style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
                      initial={false}
                      animate={
                        live
                          ? { scaleY: [m.soc[0] + i * 0.015, m.soc[1] - i * 0.015], opacity: 0.85 }
                          : { scaleY: m.soc[1], opacity: 0.85 }
                      }
                      transition={live ? { duration: 6.2, ease: "linear" } : { duration: 0.6, ease: EASE }}
                    />
                  </g>
                ))}
                <text x="320" y="241" textAnchor="middle" fontSize="8.5" letterSpacing="1.6" fill="#b5b5b5" className="font-mono">
                  BESS · {mode === "normal" ? "CHARGE ▲" : "DISCHARGE ▼"}
                </text>
                <motion.rect
                  x="256" y="252" width="128" height="20" rx="10"
                  initial={false}
                  animate={{ fill: mode === "outage" ? "#8bfb03" : "#141414", stroke: mode === "outage" ? "#8bfb03" : "rgba(255,255,255,0.18)" }}
                  transition={{ duration: 0.25 }}
                />
                <text x="320" y="265.5" textAnchor="middle" fontSize="8.5" fontWeight="700" letterSpacing="1.6" fill={mode === "outage" ? "#050505" : "#808080"} className="font-mono">
                  UPS · &lt;2 MS
                </text>

                {/* Loads */}
                <Node x={496} y={34} title="LEVEL 3" sub="NACS + CCS1" active right>
                  <rect x={590} y={50} width={16} height={28} rx={3} fill="none" strokeWidth="1.5" />
                  <path d="M594 57 h8 M606 66 q6 0 6 6 v6" fill="none" strokeWidth="1.5" strokeLinecap="round" />
                </Node>
                <Node x={496} y={160} title="XURA-GIS" sub="Fiber link" active right muted>
                  <path d="M590 190 q8 -12 16 0 t16 0" fill="none" strokeWidth="1.5" transform="translate(-8 0)" />
                </Node>
                <Node x={496} y={286} title="SITE LOAD" sub="Peak shaving" active right>
                  <path d="M588 330 V306 L598 298 L608 306 V330 Z M596 330 V318 H602 V330" fill="none" strokeWidth="1.5" strokeLinejoin="round" />
                </Node>
              </svg>
            </div>
            <div className="op-plate-foot">
              <span>
                <b>Illustrative</b> dispatch, not live site data
              </span>
              <span>Packets show direction and relative load</span>
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
                  onChange={(v) => {
                    setPinned(true);
                    setMode(v);
                  }}
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

function Node({
  x,
  y,
  title,
  sub,
  active,
  alert,
  right,
  muted,
  children,
}: {
  x: number;
  y: number;
  title: string;
  sub: string;
  active?: boolean;
  alert?: boolean;
  right?: boolean;
  muted?: boolean;
  children: React.ReactNode;
}) {
  const color = alert ? HEAT : active ? (muted ? "#b5b5b5" : "#8bfb03") : "rgba(255,255,255,0.3)";
  const tx = right ? x + 14 : x + 50;
  return (
    <g>
      <motion.rect
        x={x} y={y} width="128" height="60" rx="10"
        fill="#0b0b0b"
        initial={false}
        animate={{ stroke: alert ? HEAT : active ? "rgba(139,251,3,0.45)" : "rgba(255,255,255,0.14)" }}
        transition={{ duration: 0.35 }}
      />
      <g stroke={color} color={color} style={{ transition: "stroke 0.35s, color 0.35s" }}>
        {children}
      </g>
      <text x={tx} y={y + 27} fontSize="9.5" fontWeight="700" letterSpacing="1.4" fill={alert ? HEAT : active ? "#ffffff" : "#808080"} className="font-mono">
        {title}
      </text>
      <text x={tx} y={y + 42} fontSize="8.5" letterSpacing="0.6" fill="#808080" className="font-mono">
        {sub}
      </text>
    </g>
  );
}
