"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { HeroFog } from "../_stage/HeroFog";
import { Check, Count, EASE, Em, GhostButton, Kicker, PrimaryButton } from "../_components/primitives";

const PILLARS = [
  { code: "01", title: "Interconnection", detail: "Feeder & transformer capacity", result: "Viable feeder verified" },
  { code: "02", title: "Zoning approval", detail: "As-of-right parcel screening", result: "350–2,500 sq ft ready" },
  { code: "03", title: "Fiber backbone", detail: "Low-latency telemetry & AI", result: "Lit & dark fiber mapped" },
  { code: "04", title: "2.5C fast discharge", detail: "Level 3 EV & grid dispatch", result: "NACS + CCS1 dual port" },
];

const STATS = [
  { value: 2500, prefix: "350–", unit: "sq ft", label: "Compact Power Hub footprint" },
  { value: 6, prefix: "~", unit: "months", label: "From signed LOI to energization" },
  { value: 2.5, decimals: 1, unit: "C", label: "Peak battery discharge rate" },
  { value: 0, prefix: "$", unit: "capex", label: "To the landlord · 10 + 10 yr lease" },
];

export function HomeHero() {
  return (
    <section className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-30">
        <Image src="/1.png" alt="" fill priority sizes="100vw" className="object-cover object-[center_40%]" />
      </div>
      <HeroFog className="pointer-events-none absolute inset-0 -z-20 h-full w-full opacity-70 mix-blend-screen" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,5,0.9)_0%,rgba(5,5,5,0.66)_40%,rgba(5,5,5,0.3)_100%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-ink via-ink/85 to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-ink/90 to-transparent" />
      <div aria-hidden="true" className="h-[72px] shrink-0" />

      <div className="op-shell grid flex-1 grid-cols-1 items-center gap-12 pb-16 pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.04fr)] lg:gap-16 lg:pb-20 lg:pt-12">
        <div className="min-w-0">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
            <Kicker>Distributed energy infrastructure</Kicker>
          </motion.div>
          <motion.h1
            className="op-h1 mt-7 max-w-[14ch]"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
          >
            Deploying <Em>realistic</Em> energy infrastructure.
          </motion.h1>
          <motion.p
            className="op-lead mt-7 max-w-[52ch] !text-paper/70"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: EASE }}
          >
            Xura is a distributed energy company deploying bankable infrastructure. Our proprietary platform has already
            identified viable utility interconnections, zoning approvals, high-capacity fiber, and the generation and
            ultra-safe storage each site needs.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: EASE }}
          >
            <PrimaryButton href="#solutions">Explore the 5 solutions</PrimaryButton>
            <GhostButton href="#napkin">See the Napkin Test</GhostButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="min-w-0"
        >
          <UnderwritingPlate />
        </motion.div>
      </div>

      <div className="border-t border-paper/10 bg-ink/50 backdrop-blur-md">
        <dl className="op-shell grid grid-cols-2 [&>*:nth-child(even)]:border-l [&>*:nth-child(even)]:pl-5 [&>*:nth-child(n+3)]:border-t lg:grid-cols-4 lg:[&>*:not(:first-child)]:border-l lg:[&>*:not(:first-child)]:pl-8 lg:[&>*:nth-child(n+3)]:border-t-0">
          {STATS.map((s) => (
            <div key={s.label} className="flex min-w-0 flex-col gap-2 border-line py-6 pr-5 lg:pr-8">
              <dd className="flex items-baseline gap-2">
                <Count
                  value={s.value}
                  decimals={s.decimals ?? 0}
                  prefix={s.prefix}
                  className="font-display text-[1.9rem] font-normal leading-none text-paper sm:text-[2.6rem]"
                />
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-accent sm:text-[11px]">{s.unit}</span>
              </dd>
              <dt className="text-[10px] font-medium uppercase leading-snug tracking-[0.1em] text-mute sm:text-[11px]">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/** The four-pillar underwriting run. Each pillar resolves in turn and lights
 *  the matching part of the parcel schematic, then the run repeats. */
function UnderwritingPlate() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [step, setStep] = useState(reduce ? 4 : 0);

  useEffect(() => {
    if (reduce || !inView) return;
    const t = setTimeout(() => setStep((s) => (s >= 4 ? 0 : s + 1)), step === 4 ? 5200 : step === 0 ? 700 : 1150);
    return () => clearTimeout(t);
  }, [step, inView, reduce]);

  const lit = (i: number) => step > i;

  return (
    <div ref={ref} className="op-plate !bg-ink/75 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.95)] backdrop-blur-xl">
      <div className="op-plate-bar">
        <span>
          <b>XURA-GIS</b> &nbsp;/ Site underwriting
        </span>
        <span className="flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${step >= 4 ? "bg-accent" : "op-blink bg-accent"}`} />
          {step >= 4 ? "Cleared" : "Screening"}
        </span>
      </div>

      {/* Parcel schematic */}
      <div className="relative border-b border-line">
        <svg viewBox="0 0 560 230" className="block w-full" role="img" aria-label="Parcel schematic showing utility feeder, zoning envelope, fiber route and Power Hub with chargers.">
          <defs>
            <pattern id="hh-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20 0H0V20" fill="none" stroke="rgba(255,255,255,0.035)" />
            </pattern>
          </defs>
          <rect width="560" height="230" fill="url(#hh-grid)" />

          {/* street */}
          <line x1="0" y1="206" x2="560" y2="206" stroke="rgba(255,255,255,0.14)" strokeWidth="14" />
          <line x1="0" y1="206" x2="560" y2="206" stroke="rgba(255,255,255,0.25)" strokeDasharray="10 10" />
          <text x="18" y="226" className="fill-[#5d5d5d] font-mono" fontSize="8.5" letterSpacing="1.5">COMMERCIAL ROAD</text>

          {/* 02 zoning envelope */}
          <motion.rect
            x="120" y="34" width="300" height="148" rx="4"
            fill={lit(1) ? "rgba(139,251,3,0.05)" : "transparent"}
            stroke={lit(1) ? "#8bfb03" : "rgba(255,255,255,0.22)"}
            strokeDasharray="6 5"
            animate={{ strokeOpacity: lit(1) ? 0.9 : 0.6 }}
            transition={{ duration: 0.5 }}
          />
          <text x="130" y="50" fontSize="8.5" letterSpacing="1.5" className={`font-mono ${lit(1) ? "fill-[#8bfb03]" : "fill-[#808080]"}`}>
            PARCEL · AS-OF-RIGHT
          </text>

          {/* 01 utility feeder */}
          <line x1="0" y1="18" x2="470" y2="18" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
          <motion.line
            x1="0" y1="18" x2="470" y2="18" stroke="#8bfb03" strokeWidth="2"
            initial={false}
            animate={{ pathLength: lit(0) ? 1 : 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          />
          <rect x="458" y="8" width="24" height="22" rx="3" fill="#0e0e0e" stroke={lit(0) ? "#8bfb03" : "rgba(255,255,255,0.3)"} />
          <text x="470" y="23" textAnchor="middle" fontSize="9" className={`font-mono ${lit(0) ? "fill-[#8bfb03]" : "fill-[#808080]"}`}>T</text>
          <path d="M470 30 V96 H404" fill="none" stroke={lit(0) ? "#8bfb03" : "rgba(255,255,255,0.18)"} strokeWidth="2" className={lit(0) ? "op-flow" : ""} />
          <text x="18" y="12" fontSize="8.5" letterSpacing="1.5" className="fill-[#808080] font-mono">FEEDER 13.2 kV</text>

          {/* 03 fiber */}
          <path d="M560 160 H436 V128 H404" fill="none" stroke={lit(2) ? "#8bfb03" : "rgba(255,255,255,0.18)"} strokeWidth="1.5" strokeDasharray="2 4" className={lit(2) ? "op-flow" : ""} />
          <text x="552" y="152" textAnchor="end" fontSize="8.5" letterSpacing="1.5" className={`font-mono ${lit(2) ? "fill-[#8bfb03]" : "fill-[#808080]"}`}>FIBER</text>

          {/* 04 hub + chargers */}
          <rect x="344" y="84" width="60" height="56" rx="4" fill={lit(3) ? "#8bfb03" : "#141414"} stroke={lit(3) ? "#8bfb03" : "rgba(255,255,255,0.3)"} />
          <text x="374" y="109" textAnchor="middle" fontSize="8" fontWeight="700" letterSpacing="1" className={`font-mono ${lit(3) ? "fill-[#050505]" : "fill-[#808080]"}`}>POWER</text>
          <text x="374" y="121" textAnchor="middle" fontSize="8" fontWeight="700" letterSpacing="1" className={`font-mono ${lit(3) ? "fill-[#050505]" : "fill-[#808080]"}`}>HUB</text>
          {[0, 1, 2, 3].map((i) => {
            const x = 150 + i * 46;
            return (
              <g key={i}>
                <path
                  d={`M344 ${126} H${x + 9} V146`}
                  fill="none"
                  stroke={lit(3) ? "#8bfb03" : "rgba(255,255,255,0.12)"}
                  strokeWidth="1.2"
                  className={lit(3) ? "op-flow" : ""}
                />
                <rect x={x} y="146" width="18" height="26" rx="2.5" fill="#0e0e0e" stroke={lit(3) ? "#8bfb03" : "rgba(255,255,255,0.3)"} />
                <rect x={x + 5} y="151" width="8" height="5" rx="1" fill={lit(3) ? "#8bfb03" : "rgba(255,255,255,0.2)"} />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Pillar ledger */}
      <ol className="grid grid-cols-1 sm:grid-cols-2">
        {PILLARS.map((p, i) => {
          const done = lit(i);
          const active = step === i;
          return (
            <li
              key={p.code}
              className={`relative flex min-w-0 gap-3 px-[18px] py-4 ${i % 2 === 1 ? "sm:border-l sm:border-line" : ""} ${i > 0 ? "border-t border-line" : ""} ${i === 1 ? "sm:border-t-0" : ""}`}
            >
              <span
                className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border font-mono text-[0.62rem] font-medium transition-colors duration-300 ${
                  done ? "border-accent bg-accent text-ink" : active ? "border-accent text-accent" : "border-line-strong text-mute"
                }`}
              >
                {done ? <Check /> : p.code}
              </span>
              <div className="min-w-0">
                <p className="font-display text-[0.95rem] font-normal leading-tight text-paper">{p.title}</p>
                <p className="mt-0.5 truncate text-[0.78rem] text-mute">{p.detail}</p>
                <div className="relative mt-2 h-[18px] overflow-hidden">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.p
                      key={done ? "done" : active ? "run" : "wait"}
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -12, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className={`truncate font-mono text-[0.66rem] font-medium uppercase tracking-[0.1em] ${
                        done ? "text-accent" : active ? "op-blink text-paper/70" : "text-mute-2"
                      }`}
                    >
                      {done ? p.result : active ? "Screening…" : "Queued"}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
              {active && (
                <motion.span
                  layoutId="hh-progress"
                  className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.1, ease: "linear" }}
                />
              )}
            </li>
          );
        })}
      </ol>

      <div className="op-plate-foot">
        <span>
          <b>{Math.min(step, 4)} / 4</b> pillars verified
        </span>
        <span>Zero landlord capex · 10 + 10 yr lease</span>
      </div>
    </div>
  );
}
