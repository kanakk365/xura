"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { EASE, Odometer, Em, PrimaryButton, SectionHead } from "../_components/primitives";

const MIN = 3;
const MAX = 20;

/** Formulas from the client's draft estimator. */
function size(chargers: number) {
  return {
    evs: chargers * 2,
    sqft: Math.round(350 + ((chargers - MIN) / (MAX - MIN)) * (2500 - 350)),
    mw: chargers * 0.25,
  };
}

export function HubSizer() {
  const [chargers, setChargers] = useState(6);
  const { evs, sqft, mw } = size(chargers);
  const pct = ((chargers - MIN) / (MAX - MIN)) * 100;

  return (
    <section id="sizer" className="op-section">
      <div className="op-shell">
        <SectionHead
          kicker="Real estate & infrastructure estimator"
          title={
            <>
              Size your Power Hub <Em>in seconds</Em>.
            </>
          }
          lead="From a 3-charger urban retail corner to a 20-charger regional travel plaza, the 2.5C architecture scales with zero capital outlay from the property owner."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          {/* Control + live site plan */}
          <div className="op-plate">
            <div className="op-plate-bar">
              <span>
                <b>Dual-port Level 3 chargers</b>
              </span>
              <span>3 – 20</span>
            </div>

            <div className="px-6 pt-7 sm:px-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <p className="font-display text-[clamp(2.6rem,5vw,3.6rem)] leading-none text-paper">
                  <Odometer value={chargers} />
                  <span className="ml-3 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">chargers</span>
                </p>
                <p className="op-label pb-1">
                  Serves <span className="text-paper">{evs} EVs</span> at once
                </p>
              </div>
              <input
                type="range"
                min={MIN}
                max={MAX}
                step={1}
                value={chargers}
                onChange={(e) => setChargers(+e.target.value)}
                aria-label="Number of dual-port Level 3 chargers"
                className="op-range mt-6"
                style={{ ["--pct" as string]: `${pct}%` }}
              />
              <div className="mt-1 flex justify-between op-label !text-[9px]">
                <span>3 · min</span>
                <span>10</span>
                <span>20 · max</span>
              </div>
            </div>

            <div className="flex flex-1 items-center px-4 pb-4 pt-6 sm:px-6">
              <SitePlan chargers={chargers} sqft={sqft} />
            </div>

            <div className="op-plate-foot">
              <span>
                <b>Hub</b> can sit up to 500 ft from the stalls
              </span>
              <span>Plan view · indicative</span>
            </div>
          </div>

          {/* Outputs: a 2 x 2 grid that always matches the plate's height */}
          <div className="flex flex-col gap-5">
            <dl className="op-cells flex-1 grid-cols-2 grid-rows-2">
              <Output label="Power Hub footprint" note="Compact pad, placed off the stalls">
                <Odometer value={sqft} />
                <Unit>sq ft</Unit>
              </Output>
              <Output label="2.5C BESS peak boost" note="UL 9540A + Napkin tested LFP">
                <Odometer value={mw} decimals={2} />
                <Unit>MW</Unit>
              </Output>
              <Output label="Turnaround" note="From signed LOI to operating hub">
                ~6
                <Unit>months</Unit>
              </Output>
              <Output label="Contract" note="$0 landlord capex · lease + rev share">
                10+10
                <Unit>years</Unit>
              </Output>
            </dl>
            <div className="op-plate flex-row flex-wrap items-center justify-between gap-5 p-6 sm:p-7">
              <p className="max-w-[34ch] text-[15px] leading-[1.6] text-paper/65">
                Have a parcel or a portfolio? We screen feeder capacity, zoning and fiber in{" "}
                <span className="text-paper">48 hours</span>.
              </p>
              <PrimaryButton href="#contact">Run free assessment</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Unit({ children }: { children: React.ReactNode }) {
  return <span className="ml-2 text-[10px] font-medium uppercase tracking-[0.16em] text-accent sm:text-[11px]">{children}</span>;
}

function Output({ label, note, children }: { label: string; note: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between gap-6 p-5 sm:p-7">
      <dt className="op-label">{label}</dt>
      <div>
        <dd className="font-display text-[clamp(1.7rem,3vw,2.5rem)] leading-none text-paper">{children}</dd>
        <dd className="mt-3 text-[13px] leading-snug text-mute">{note}</dd>
      </div>
    </div>
  );
}

/** Plan view: stalls in two rows either side of the chargers, the hub pad
 *  scaling with its footprint. */
function SitePlan({ chargers, sqft }: { chargers: number; sqft: number }) {
  const W = 560;
  const H = 230;
  const cols = 10;
  const stallW = 34;
  const gap = 4;
  const startX = 24;
  const hub = 30 + ((sqft - 350) / 2150) * 52; // 30–82 px side
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block w-full" role="img" aria-label={`Plan view with ${chargers} chargers serving ${chargers * 2} stalls and a ${sqft} square foot Power Hub.`}>
      <defs>
        <pattern id="hs-grid" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M16 0H0V16" fill="none" stroke="rgba(255,255,255,0.03)" />
        </pattern>
      </defs>
      <rect width={W} height={H} fill="url(#hs-grid)" />
      <rect x="10" y="10" width="400" height="210" rx="10" fill="none" stroke="rgba(255,255,255,0.12)" strokeDasharray="5 5" />
      <text x="20" y="28" fontSize="8.5" letterSpacing="1.6" fill="#5d5d5d" className="font-mono">PARKING</text>

      <AnimatePresence initial={false}>
        {Array.from({ length: chargers }).map((_, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;
          const x = startX + col * (stallW + gap);
          const baseY = row === 0 ? 40 : 128;
          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.35, ease: EASE }}
              style={{ transformOrigin: `${x + stallW / 2}px ${baseY + 40}px` }}
            >
              <rect x={x} y={baseY} width={stallW} height="34" rx="3" fill="rgba(139,251,3,0.08)" stroke="rgba(139,251,3,0.45)" />
              <rect x={x + stallW / 2 - 5} y={baseY + 36} width="10" height="10" rx="2" fill="#8bfb03" />
              <rect x={x} y={baseY + 48} width={stallW} height="34" rx="3" fill="rgba(139,251,3,0.08)" stroke="rgba(139,251,3,0.45)" />
            </motion.g>
          );
        })}
      </AnimatePresence>

      {/* feeder from hub */}
      <path d={`M410 115 H${470 - hub / 2}`} stroke="#8bfb03" strokeWidth="2" className="op-flow" />
      <motion.rect
        animate={{ x: 470 - hub / 2, y: 115 - hub / 2, width: hub, height: hub }}
        transition={{ duration: 0.45, ease: EASE }}
        rx="6"
        fill="#8bfb03"
      />
      <text x="470" y={H - 14} textAnchor="middle" fontSize="8.5" letterSpacing="1.6" fill="#8bfb03" className="font-mono">
        POWER HUB
      </text>
    </svg>
  );
}
