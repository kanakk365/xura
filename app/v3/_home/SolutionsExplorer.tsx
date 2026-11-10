"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState, type ReactNode } from "react";

import { EASE, Em, GhostButton, PrimaryButton, SectionHead } from "../_components/primitives";

type Solution = {
  id: string;
  short: string;
  tag: string;
  title: string;
  body: string;
  specs: { label: string; value: string }[];
  cta: string;
  secondary?: { label: string; href: string };
  figure: string;
};

const SOLUTIONS: Solution[] = [
  {
    id: "bess",
    short: "Battery storage",
    tag: "Safe energy storage",
    title: "Battery energy storage system",
    body: "Modular, liquid-cooled BESS forms the backbone of every Power Hub. Built on ultra-stable LFP chemistry inside our thermal-shield architecture, it exceeds UL 9540A and passes the Napkin Test with zero cell-to-cell propagation.",
    specs: [
      { label: "Discharge rate", value: "Up to 2.5C" },
      { label: "Safety rating", value: "UL 9540A + Napkin" },
      { label: "Applications", value: "Peak shave · EV · VPP" },
    ],
    cta: "Request BESS spec sheet",
    secondary: { label: "View the Napkin Test", href: "#napkin" },
    figure: "XURA-BESS / Modular liquid-cooled enclosure",
  },
  {
    id: "ups",
    short: "UPS system",
    tag: "Mission-critical power quality",
    title: "Industrial & AI-grade UPS",
    body: "Solid-state double-conversion UPS eliminates voltage sags, harmonic distortion and grid micro-outages, bridging the gap in under 2 ms while fuel cells, linear generators and BESS transition into islanded mode.",
    specs: [
      { label: "Transfer time", value: "0 ms / < 2 ms" },
      { label: "Efficiency", value: "Up to 98.6%" },
      { label: "Architecture", value: "Hot-swap N+1" },
    ],
    cta: "Configure UPS protection",
    figure: "XURA-UPS / Zero-latency double conversion",
  },
  {
    id: "fuelcell",
    short: "Fuel cell",
    tag: "24/7 primary on-site generation",
    title: "Solid-oxide fuel cell",
    body: "Inspired by the Bloom Energy Server, our solid-oxide deployment generates continuous baseload power on site where grid capacity falls short. Electrochemical, not combustion: natural gas, biogas or hydrogen in, near-zero NOx and SOx out, and no water in normal operation.",
    specs: [
      { label: "Conversion", value: "Electrochemical" },
      { label: "Water usage", value: "Zero operational" },
      { label: "Power density", value: "325 kW+ blocks" },
    ],
    cta: "Assess site for baseload",
    figure: "XURA-SOFC / Bloom-inspired architecture",
  },
  {
    id: "linear",
    short: "Linear generator",
    tag: "Fuel-flexible dispatchable power",
    title: "Dispatchable linear generator",
    body: "Modeled on the Mainspring architecture: non-flame linear prime movers convert linear motion directly into electricity through copper coils. They ramp instantly to follow EV and building load spikes, and run on natural gas, biogas, RNG or 100% hydrogen.",
    specs: [
      { label: "Fuel flexibility", value: "NG · Biogas · H₂" },
      { label: "Dispatchability", value: "Fast load-following" },
      { label: "NOx emissions", value: "Near-zero" },
    ],
    cta: "Evaluate linear generator fit",
    figure: "XURA-LIN / Linear oscillator core",
  },
  {
    id: "ev",
    short: "Level 3 (2.5C)",
    tag: "The new gas station for CRE",
    title: "Level 3 ultra-fast charging, 2.5C boost",
    body: "Conventional Level 3 chargers overwhelm local transformers and trigger demand charges. Xura pairs dual-cable dispensers with 2.5C battery storage. Each charger has native NACS and CCS1, serves two cars at once, and scales from 3 to 20 chargers on a 350 to 2,500 sq ft Power Hub.",
    specs: [
      { label: "Battery boost", value: "2.5C discharge" },
      { label: "Connectors", value: "Native NACS + CCS1" },
      { label: "Landlord lease", value: "10 + 10 yr · $0 capex" },
    ],
    cta: "Host a 2.5C charging hub",
    secondary: { label: "Size your hub", href: "#sizer" },
    figure: "XURA-EV / Battery-buffered Level 3 hub",
  },
];

export function SolutionsExplorer() {
  const [active, setActive] = useState(0);

  return (
    <section id="solutions" className="op-section">
      <div className="op-shell">
        <SectionHead
          kicker="Hardware & generation portfolio"
          title={
            <>
              Five building blocks. <Em>One</Em> Power Hub.
            </>
          }
          lead="High-safety battery storage, industrial UPS, solid-oxide fuel cells, linear generators and 2.5C Level 3 charging, combined to fit each site's real constraints."
        />

        <div className="op-plate mt-14">
          <div role="tablist" aria-label="Xura solutions" className="flex overflow-x-auto border-b border-line [scrollbar-width:none] lg:grid lg:grid-cols-5">
            {SOLUTIONS.map((s, i) => {
              const on = i === active;
              return (
                <button
                  key={s.id}
                  role="tab"
                  id={`sol-tab-${s.id}`}
                  aria-selected={on}
                  aria-controls={`sol-panel-${s.id}`}
                  onClick={() => setActive(i)}
                  className={`relative flex min-w-[180px] items-center gap-3 px-6 py-5 text-left transition-colors lg:min-w-0 ${
                    i > 0 ? "border-l border-line" : ""
                  } ${on ? "bg-[rgba(139,251,3,0.05)]" : "hover:bg-white/[0.02]"}`}
                >
                  <span className={`font-mono text-[0.66rem] font-medium tracking-[0.1em] ${on ? "text-accent" : "text-mute-2"}`}>0{i + 1}</span>
                  <span className={`font-display text-[0.98rem] leading-tight ${on ? "text-paper" : "text-paper/55"}`}>
                    {s.short}
                  </span>
                  {on && (
                    <motion.span layoutId="sol-underline" className="absolute inset-x-0 bottom-[-1px] h-[2px] bg-accent" transition={{ type: "spring", stiffness: 420, damping: 38 }} />
                  )}
                </button>
              );
            })}
          </div>

          {/* All panels share one grid cell, so the plate is always as tall as
              the tallest panel and switching tabs never shifts the page. */}
          <div className="grid">
            {SOLUTIONS.map((s, i) => (
              <Panel key={s.id} s={s} index={i} active={i === active} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Panel({ s, index, active }: { s: Solution; index: number; active: boolean }) {
  const reduce = useReducedMotion();
  return (
    <div
      role="tabpanel"
      id={`sol-panel-${s.id}`}
      aria-labelledby={`sol-tab-${s.id}`}
      aria-hidden={!active}
      inert={!active}
      className={`col-start-1 row-start-1 grid grid-cols-1 lg:grid-cols-2 ${active ? "visible" : "invisible"}`}
    >
      <motion.figure
        initial={false}
        animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: reduce ? 1 : 0.98 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="flex min-w-0 flex-col border-b border-line bg-ink lg:border-b-0 lg:border-r"
      >
        <div className="flex flex-1 items-center justify-center p-6 sm:p-8">
          <svg viewBox="0 0 480 340" className="block w-full max-w-[520px]" role="img" aria-label={s.figure}>
            <FigureGrid />
            {active && FIGURES[s.id]}
          </svg>
        </div>
        <figcaption className="op-plate-foot !mt-0">
          <span>
            <b>Fig. 0{index + 1}</b> {s.figure}
          </span>
        </figcaption>
      </motion.figure>

      <motion.div
        initial={false}
        animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: reduce ? 0 : 16 }}
        transition={{ duration: 0.55, delay: active ? 0.05 : 0, ease: EASE }}
        className="flex min-w-0 flex-col p-7 sm:p-10 lg:p-12"
      >
        <p className="op-label !text-accent">
          Solution 0{index + 1} · {s.tag}
        </p>
        <h3 className="mt-5 font-display text-[clamp(1.6rem,2.6vw,2.25rem)] font-normal leading-[1.08] text-paper">
          {s.title}
        </h3>
        <p className="mt-5 max-w-[58ch] text-[15px] leading-[1.7] text-paper/60">{s.body}</p>

        <dl className="op-cells mt-8 grid-cols-1 sm:grid-cols-3">
          {s.specs.map((sp) => (
            <div key={sp.label} className="flex flex-col gap-2 px-5 py-4">
              <dt className="op-label">{sp.label}</dt>
              <dd className="font-display text-[1.05rem] leading-tight text-paper">{sp.value}</dd>
            </div>
          ))}
        </dl>

        <div aria-hidden="true" className="min-h-8 flex-1" />
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <PrimaryButton href="#contact">{s.cta}</PrimaryButton>
          {s.secondary && <GhostButton href={s.secondary.href}>{s.secondary.label}</GhostButton>}
        </div>
      </motion.div>
    </div>
  );
}

function FigureGrid() {
  return (
    <>
      <defs>
        <pattern id="sf-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="rgba(255,255,255,0.035)" />
        </pattern>
      </defs>
      <rect width="480" height="340" fill="url(#sf-grid)" />
    </>
  );
}

const G = "#8bfb03";
const LINE = "rgba(255,255,255,0.22)";
const label = (x: number, y: number, t: string, color = "#808080", anchor: "start" | "middle" | "end" = "middle") => (
  <text x={x} y={y} textAnchor={anchor} fontSize="9" letterSpacing="1.4" fill={color} className="font-mono">
    {t}
  </text>
);

const FIGURES: Record<string, ReactNode> = {
  bess: (
    <g>
      {[0, 1].map((r) => {
        const x = 70 + r * 180;
        return (
          <g key={r}>
            <rect x={x} y="50" width="150" height="230" rx="8" fill="#0e0e0e" stroke={LINE} />
            {Array.from({ length: 8 }).map((_, m) => (
              <g key={m}>
                <rect x={x + 14} y={64 + m * 26} width="122" height="18" rx="3" fill="#151515" stroke="rgba(255,255,255,0.1)" />
                <motion.rect
                  x={x + 16} y={66 + m * 26} height="14" rx="2" fill={G}
                  initial={{ width: 0 }}
                  animate={{ width: 118 * (m === 0 && r === 1 ? 0.84 : 1) }}
                  transition={{ duration: 0.6, delay: 0.1 + (7 - m) * 0.08 + r * 0.25, ease: EASE }}
                  opacity={0.75}
                />
              </g>
            ))}
            {label(x + 75, 300, r === 0 ? "LFP RACK A" : "LFP RACK B")}
          </g>
        );
      })}
      <path d="M40 80 H70 M40 250 H70 M40 80 V250" stroke={G} strokeWidth="2" fill="none" className="op-flow" />
      <path d="M440 80 H400 M440 250 H400 M440 80 V250" stroke={G} strokeWidth="2" fill="none" className="op-flow" />
      {label(240, 30, "LIQUID CHILLER LOOP", G)}
      <rect x="196" y="316" width="88" height="20" rx="4" fill="rgba(139,251,3,0.1)" stroke={G} />
      {label(240, 330, "SOC 98.4%", G)}
    </g>
  ),
  ups: (
    <g>
      <defs>
        <clipPath id="ups-clip">
          <rect x="40" y="40" width="400" height="90" />
        </clipPath>
      </defs>
      <rect x="40" y="40" width="400" height="90" rx="6" fill="#0e0e0e" stroke={LINE} />
      <g clipPath="url(#ups-clip)">
        <motion.path
          d={`M0 85 ${Array.from({ length: 12 })
            .map((_, i) => `Q ${i * 80 + 20} 45 ${i * 80 + 40} 85 T ${i * 80 + 80} 85`)
            .join(" ")}`}
          stroke={G} strokeWidth="2.5" fill="none"
          animate={{ x: [0, -80] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
      </g>
      {label(240, 152, "PURE SINE · 60.00 Hz LOCKED · THD < 1.2%", G)}
      {[0, 1, 2, 3].map((i) => {
        const x = 40 + i * 104;
        const spare = i === 3;
        return (
          <g key={i}>
            <rect x={x} y="176" width="88" height="110" rx="6" fill={spare ? "transparent" : "#0e0e0e"} stroke={spare ? G : LINE} strokeDasharray={spare ? "5 4" : undefined} />
            {!spare && [0, 1, 2].map((l) => (
              <motion.circle key={l} cx={x + 22 + l * 22} cy="200" r="4" fill={G}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, delay: (i + l) * 0.2 }} />
            ))}
            {!spare && <rect x={x + 14} y="220" width="60" height="44" rx="3" fill="#151515" stroke="rgba(255,255,255,0.08)" />}
            {label(x + 44, 304, spare ? "N+1 BAY" : `INVERTER 0${i + 1}`, spare ? G : "#808080")}
          </g>
        );
      })}
      {label(240, 330, "STATIC SWITCH · 0.0 ms TRANSFER", "#5d5d5d")}
    </g>
  ),
  fuelcell: (
    <g>
      <path d="M20 280 H440" stroke={LINE} strokeWidth="2" />
      <path d="M30 250 H96" stroke={G} strokeWidth="2.5" className="op-flow" />
      {label(30, 240, "H₂ / BIOGAS / NG", G, "start")}
      {[0, 1, 2, 3].map((i) => {
        const x = 110 + i * 78;
        return (
          <g key={i}>
            <rect x={x} y="60" width="62" height="210" rx="6" fill="#0e0e0e" stroke={LINE} />
            {Array.from({ length: 14 }).map((_, p) => (
              <motion.rect
                key={p} x={x + 10} y={78 + p * 12} width="42" height="6" rx="1.5" fill={G}
                initial={{ opacity: 0.12 }}
                animate={{ opacity: [0.15, 0.85, 0.15] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: p * 0.08 + i * 0.3 }}
              />
            ))}
            {label(x + 31, 50, `SOFC-0${i + 1}`)}
          </g>
        );
      })}
      <path d="M422 160 H470" stroke={G} strokeWidth="2.5" className="op-flow" />
      {label(240, 310, "CERAMIC STACK · ZERO COMBUSTION · ZERO WATER", G)}
    </g>
  ),
  linear: (
    <g>
      <rect x="40" y="110" width="400" height="120" rx="60" fill="#0e0e0e" stroke={LINE} />
      {Array.from({ length: 9 }).map((_, i) => (
        <motion.rect
          key={i} x={96 + i * 34} y="118" width="16" height="104" rx="3" fill="none" stroke={G}
          animate={{ strokeOpacity: [0.2, 0.95, 0.2] }}
          transition={{ duration: 1.1, repeat: Infinity, delay: Math.abs(4 - i) * 0.08 }}
        />
      ))}
      <motion.rect x="66" y="150" width="150" height="40" rx="8" fill="#1d1d1d" stroke="rgba(255,255,255,0.4)"
        animate={{ x: [66, 96, 66] }} transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }} />
      <motion.rect x="264" y="150" width="150" height="40" rx="8" fill="#1d1d1d" stroke="rgba(255,255,255,0.4)"
        animate={{ x: [264, 234, 264] }} transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }} />
      <motion.circle cx="240" cy="170" r="16" fill={G}
        animate={{ scale: [0.6, 1.15, 0.6], opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }} />
      {label(140, 96, "MAGNET SHAFT L →")}
      {label(340, 96, "← MAGNET SHAFT R")}
      {label(240, 262, "LINEAR MOTION → ELECTRICITY · NO GEARBOX", G)}
      {label(240, 290, "230–460 kW MODULAR · H₂ & RNG READY", "#5d5d5d")}
    </g>
  ),
  ev: (
    <g>
      <rect x="30" y="100" width="120" height="150" rx="8" fill="#0e0e0e" stroke={G} />
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.rect key={i} x="46" y={214 - i * 24} width="88" height="16" rx="2" fill={G}
          initial={{ opacity: 0.15 }} animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.18 }} />
      ))}
      {label(90, 88, "POWER HUB · 2.5C", G)}
      <path d="M150 175 H250" stroke={G} strokeWidth="3" className="op-flow" />
      <rect x="250" y="70" width="70" height="200" rx="10" fill="#141414" stroke={LINE} />
      <rect x="262" y="88" width="46" height="54" rx="4" fill="#0a0a0a" stroke={G} />
      {label(285, 120, "350kW", G)}
      <path d="M320 170 C360 170 360 120 400 120" stroke="#e8e8e8" strokeWidth="3" fill="none" />
      <path d="M320 210 C360 210 360 250 400 250" stroke="#e8e8e8" strokeWidth="3" fill="none" />
      <motion.circle r="4" fill={G} animate={{ cx: [320, 400], cy: [170, 120] }} transition={{ duration: 1, repeat: Infinity, ease: "easeIn" }} />
      <motion.circle r="4" fill={G} animate={{ cx: [320, 400], cy: [210, 250] }} transition={{ duration: 1, repeat: Infinity, ease: "easeIn", delay: 0.5 }} />
      <rect x="400" y="102" width="56" height="36" rx="6" fill="rgba(139,251,3,0.1)" stroke={G} />
      <rect x="400" y="232" width="56" height="36" rx="6" fill="rgba(139,251,3,0.1)" stroke={G} />
      {label(428, 124, "NACS", G)}
      {label(428, 254, "CCS1", G)}
      {label(285, 300, "TWO CARS AT ONCE · NO ADAPTERS")}
    </g>
  ),
};
