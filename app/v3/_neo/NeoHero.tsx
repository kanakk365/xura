"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

import Threads from "../_bits/Threads";
import { Count, EASE, Em, GhostButton, Headline, Kicker, PrimaryButton, Segmented } from "../_components/primitives";
import { HeroFog } from "../_stage/HeroFog";

type Env = "4.9" | "12.5" | "25";

const STATS = [
  { figure: "4.9–25", unit: "MW", label: "Modular site sizing" },
  { figure: "UL", unit: "9540A", label: "Highest-tier battery safety" },
  { figure: "< Office", unit: "H₂O", label: "Alternative waterless cooling" },
  { figure: "4", unit: "states", label: "NY · NJ · CT · MA footprint" },
];

export function NeoHero() {
  return (
    <section className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      <div aria-hidden="true" className="grid-lines absolute inset-0 -z-30 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_45%,#000_20%,transparent_75%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-20 opacity-55 [mask-image:linear-gradient(to_bottom,transparent_0%,#000_25%,#000_70%,transparent_100%)]">
        <Threads color="#8bfb03" accentColor="#ffffff" amplitude={1.2} distance={0.25} lineCount={46} thickness={0.5} speed={0.35} angle={-8} brightness={0.9} fade={0.35} enableMouseInteraction parting={0.35} />
      </div>
      <HeroFog className="pointer-events-none absolute inset-0 -z-20 h-full w-full opacity-60 mix-blend-screen" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,5,0.88)_0%,rgba(5,5,5,0.55)_45%,rgba(5,5,5,0.15)_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-ink to-transparent" />
      <div aria-hidden="true" className="h-[72px] shrink-0" />

      <div className="op-shell grid flex-1 grid-cols-1 items-center gap-12 pb-16 pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.04fr)] lg:gap-16 lg:pb-20 lg:pt-12">
        <div className="min-w-0">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
            <Kicker>NeoCloud · Modular data centers</Kicker>
          </motion.div>
          <Headline as="h1" onLoad delay={0.12} className="op-h1 mt-7 max-w-[15ch]">
            While others wish for 100MW, we build the <Em>25MW reality</Em>.
          </Headline>
          <motion.p
            className="op-lead mt-7 max-w-[54ch]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: EASE }}
          >
            Legacy data centers stall on energy and water. NeoCloud builds right-sized 4.9 to 25 MW sites that pair existing
            utility power with a behind-the-meter microgrid of fuel cells, linear generators and UL9540A batteries, using less
            water than a typical commercial building.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: EASE }}
          >
            <PrimaryButton href="#sites">Explore Northeast sites</PrimaryButton>
            <GhostButton href="#thesis">Reality vs. wishing</GhostButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="min-w-0"
        >
          <EnvelopeSim />
        </motion.div>
      </div>

      <div className="border-t border-paper/10 bg-ink/50 backdrop-blur-md">
        <dl className="op-shell grid grid-cols-2 [&>*:nth-child(even)]:border-l [&>*:nth-child(even)]:pl-5 [&>*:nth-child(n+3)]:border-t [&>*]:border-paper/10 lg:grid-cols-4 lg:[&>*:not(:first-child)]:border-l lg:[&>*:not(:first-child)]:pl-8 lg:[&>*:nth-child(n+3)]:border-t-0">
          {STATS.map((s) => (
            <div key={s.label} className="flex min-w-0 flex-col gap-2 py-6 pr-5 lg:pr-8">
              <dd className="flex flex-wrap items-baseline gap-x-2">
                <span className="font-display text-[1.6rem] leading-none text-paper sm:text-[2.2rem]">{s.figure}</span>
                {s.unit && <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-accent sm:text-[11px]">{s.unit}</span>}
              </dd>
              <dt className="text-[10px] font-medium uppercase leading-snug tracking-[0.1em] text-mute sm:text-[11px]">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/** Digital twin of a site envelope. 40% existing utility, 60% microgrid,
 *  per the client's model; pods light up in proportion to IT load. */
function EnvelopeSim() {
  const [env, setEnv] = useState<Env>("25");
  const reduce = useReducedMotion();
  const mw = parseFloat(env);
  const utility = mw * 0.4;
  const micro = mw * 0.6;
  const PODS = 25;
  const lit = Math.round((mw / 25) * PODS);

  return (
    <div className="op-plate !bg-ink/75 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.95)] backdrop-blur-xl">
      <div className="op-plate-bar">
        <span>
          <b>NeoCloud-OS</b> / Northeast cluster
        </span>
        <span className="flex items-center gap-2">
          <span className="op-blink h-1.5 w-1.5 rounded-full bg-accent" />
          Live envelope
        </span>
      </div>

      <div className="flex flex-col gap-4 px-6 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="op-label">Simulate envelope</p>
        <Segmented
          label="Site envelope"
          layoutId="neo-env"
          value={env}
          onChange={setEnv}
          options={[
            { value: "4.9", label: "4.9 MW" },
            { value: "12.5", label: "12.5 MW" },
            { value: "25", label: "25 MW" },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 px-6 py-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        {/* supply */}
        <div className="flex flex-col justify-center gap-5">
          <Supply label="Existing utility" note="As-of-right distribution" value={utility} share={0.4} />
          <Supply label="Prime microgrid" note="Fuel cells + linear gen" value={micro} share={0.6} accent />
          <div className="rounded-2xl border border-paper/10 px-4 py-3">
            <p className="op-label !text-[9px]">UL9540A BESS</p>
            <p className="mt-1 text-[13px] text-paper/75">Millisecond buffering, zero thermal runaway</p>
          </div>
        </div>

        {/* pod cluster */}
        <div className="flex flex-col rounded-2xl border border-paper/10 bg-[#070707] p-4">
          <div className="grid flex-1 grid-cols-5 gap-1.5">
            {Array.from({ length: PODS }).map((_, i) => {
              const on = i < lit;
              return (
                <motion.span
                  key={i}
                  className="aspect-square rounded-[6px] border"
                  animate={{
                    backgroundColor: on ? "rgba(139,251,3,0.85)" : "rgba(255,255,255,0.03)",
                    borderColor: on ? "rgba(139,251,3,1)" : "rgba(255,255,255,0.1)",
                  }}
                  transition={{ duration: reduce ? 0 : 0.35, delay: reduce ? 0 : (on ? i : PODS - i) * 0.018 }}
                />
              );
            })}
          </div>
          <div className="mt-4 flex items-baseline justify-between gap-3">
            <span className="op-label !text-[9px]">IT load</span>
            <span className="font-display text-[1.9rem] leading-none text-paper">
              <Count value={mw} decimals={1} duration={0.6} />
              <span className="ml-1.5 text-[10px] uppercase tracking-[0.16em] text-accent">MW</span>
            </span>
          </div>
        </div>
      </div>

      <div className="op-plate-foot">
        <span>
          <b>No new substation</b> required
        </span>
        <span>WUE ~0.02 L/kWh · closed loop</span>
      </div>
    </div>
  );
}

function Supply({ label, note, value, share, accent }: { label: string; note: string; value: number; share: number; accent?: boolean }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-display text-[1rem] text-paper">{label}</span>
        <span className={`font-display text-[1.25rem] ${accent ? "text-accent" : "text-paper"}`}>
          {accent ? "+" : ""}
          <Count value={value} decimals={1} duration={0.6} />
          <span className="ml-1 text-[10px] uppercase tracking-[0.14em] text-mute">MW</span>
        </span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-paper/[0.07]">
        <motion.div
          className={`h-full rounded-full ${accent ? "bg-accent" : "bg-paper/60"}`}
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(100, (value / 15) * 100)}%` }}
          transition={{ duration: 0.8, ease: EASE }}
        />
      </div>
      <p className="mt-1.5 text-[12px] text-mute">{Math.round(share * 100)}% of envelope · {note}</p>
    </div>
  );
}
