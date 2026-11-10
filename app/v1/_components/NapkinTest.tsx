"use client";

import { animate, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";

import { SectionHead } from "./SectionHead";

const LADDER = [
  { code: "L1", title: "UL 9540A cell-level testing", body: "Characterizes gas composition and thermal-runaway energetics of individual LFP cells." },
  { code: "L2", title: "UL 9540A module-level containment", body: "Verifies non-propagation between adjacent cells inside a single sealed module." },
  { code: "L3", title: "UL 9540A unit & installation level", body: "Confirms zero cabinet-to-cabinet fire spread, zero flaming projectiles and full AHJ compliance." },
  {
    code: "L4+",
    title: "Above & beyond: the Napkin Test",
    body: "A raw paper napkin sits directly on the module during forced runaway (>840°C core). It does not scorch, smoke or ignite — staying well below paper's 232°C auto-ignition point.",
  },
];

export function NapkinTest() {
  const reduce = useReducedMotion();
  const [p, setP] = useState(0);
  const running = useRef<ReturnType<typeof animate> | null>(null);

  const trigger = () => {
    running.current?.stop();
    if (reduce) {
      setP(1);
      return;
    }
    setP(0);
    running.current = animate(0, 1, { duration: 2.6, ease: [0.4, 0, 0.2, 1], onUpdate: setP });
  };
  const reset = () => {
    running.current?.stop();
    setP(0);
  };

  const core = Math.round(30 + p * 810);
  const surface = Math.round(28 + p * 3);
  const hot = `rgb(${Math.round(60 + 195 * p)}, ${Math.round(40 + 90 * (1 - Math.abs(p - 0.5) * 2) * 0.8)}, 20)`;

  return (
    <section id="napkin-test" className="doc-section">
      <div className="doc-shell">
        <SectionHead
          kicker="Above & beyond UL 9540A"
          title={
            <>
              We don&rsquo;t just meet UL&nbsp;9540A. We pass the{" "}
              <span className="text-accent">Napkin Test</span>.
            </>
          }
          lead="Our storage meets UL 9540A and goes further on live-fire and thermal-isolation testing. Even with an internal cell forced into runaway above 840°C (1,544°F), our thermal barrier stops cell-to-cell propagation so well that a paper napkin resting on the enclosure stays untouched."
        />

        <div className="mt-9 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1.1fr]">
          <div className="doc-card flex flex-col p-6 sm:p-7">
            <div className="flex items-center justify-between gap-3">
              <span className="doc-tag">Testing hierarchy</span>
              <span className="font-mono text-[0.66rem] text-mute">4 of 4 passed</span>
            </div>
            <ol className="mt-5 flex flex-col">
              {LADDER.map((l, i) => (
                <li key={l.code} className={`flex gap-4 py-4 ${i > 0 ? "border-t border-line" : ""}`}>
                  <span className={`mt-0.5 grid h-7 w-9 flex-none place-items-center rounded-md border font-mono text-[0.7rem] font-bold ${i === 3 ? "border-accent bg-accent text-ink" : "border-line text-accent"}`}>
                    {l.code}
                  </span>
                  <div>
                    <h3 className="doc-h3 text-[1rem]">{l.title}</h3>
                    <p className="mt-1.5 text-[0.86rem] leading-[1.55] text-mute">{l.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="doc-figure flex flex-col">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-3.5">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-mute">
                Thermal containment lab <span className="text-accent">/</span> live simulator
              </span>
              <div className="flex gap-2">
                <button type="button" onClick={trigger} className="rounded-md bg-accent px-3.5 py-1.5 font-mono text-[0.7rem] font-bold text-ink transition-transform hover:-translate-y-px">
                  Trigger 840°C runaway
                </button>
                <button type="button" onClick={reset} className="rounded-md border border-line-strong px-3 py-1.5 font-mono text-[0.7rem] text-paper/80 transition-colors hover:border-accent hover:text-accent">
                  Reset
                </button>
              </div>
            </div>

            <div className="p-5">
              <svg viewBox="0 0 420 220" className="h-auto w-full" role="img" aria-label="Cross-section of a battery module with a paper napkin resting on top. During a forced runaway the napkin stays intact.">
                {/* napkin */}
                <g>
                  <rect x="90" y="40" width="240" height="14" rx="2" fill="#f4f1e8" stroke="rgba(255,255,255,0.5)" />
                  <path d="M120 47h60M210 47h80" stroke="#c9c4b4" strokeWidth="1" />
                </g>
                <text x="210" y="30" textAnchor="middle" className="fill-[#808080] font-mono" fontSize="10">PAPER NAPKIN · {p > 0.02 ? "UNCHARRED" : "READY"}</text>
                {/* lid + thermal barrier + module */}
                <rect x="70" y="56" width="280" height="10" rx="2" fill="#1d1d1d" stroke="rgba(255,255,255,0.18)" />
                <rect x="70" y="68" width="280" height="22" fill="rgba(139,251,3,0.10)" stroke="rgba(139,251,3,0.45)" strokeDasharray="4 4" />
                <text x="210" y="83" textAnchor="middle" className="fill-[#8bfb03] font-mono" fontSize="9">THERMAL BARRIER</text>
                <rect x="70" y="92" width="280" height="100" rx="3" fill="#0e0e0e" stroke="rgba(255,255,255,0.18)" />
                {[0, 1, 2, 3, 4].map((i) => (
                  <rect
                    key={i}
                    x={86 + i * 54}
                    y="106"
                    width="42"
                    height="72"
                    rx="3"
                    fill={i === 2 ? hot : "#181818"}
                    stroke={i === 2 && p > 0.02 ? "#ffb04a" : "rgba(255,255,255,0.14)"}
                    style={{ transition: "stroke 0.2s" }}
                  />
                ))}
                {p > 0.02 && (
                  <g>
                    <circle cx="212" cy="142" r={10 + p * 22} fill="#ff7a1a" opacity={0.18 + p * 0.25} />
                    <circle cx="212" cy="142" r={5 + p * 8} fill="#ffd27a" opacity={0.6} />
                  </g>
                )}
                <text x="212" y="206" textAnchor="middle" className="fill-[#808080] font-mono" fontSize="9">FORCED CORE CELL</text>
              </svg>

              <dl className="mt-4 grid grid-cols-3 gap-3">
                <Readout label="Forced core" value={`${core}°C`} hot={p > 0.02} />
                <Readout label="Lid / napkin" value={`${surface}°C`} />
                <Readout label="Neighbour cells" value="100% intact" />
              </dl>
            </div>

            <div className="doc-figcaption mt-auto">
              <span><b>FIG.</b> Cell runaway contained inside the module</span>
              <span>Illustrative simulation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Readout({ label, value, hot }: { label: string; value: string; hot?: boolean }) {
  return (
    <div className="rounded-lg border border-line bg-ink-2 px-3.5 py-3">
      <dt className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-mute">{label}</dt>
      <dd className={`mt-1.5 font-display text-[1.05rem] font-extrabold tabular-nums ${hot ? "text-[#ffb04a]" : "text-paper"}`}>{value}</dd>
    </div>
  );
}
