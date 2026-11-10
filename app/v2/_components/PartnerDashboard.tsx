"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";

import { AreaChart, Donut, HourBars } from "./dashboard/Charts";
import {
  HOURLY,
  KPIS,
  RANGES,
  REVENUE_SPLIT,
  SITES,
  sessionSeries,
  type RangeKey,
} from "./dashboard/data";
import { Counter, EASE } from "./dashboard/primitives";
import { SectionHead } from "./SectionHead";

const SITE_SCALE: Record<RangeKey, number> = { "7D": 0.235, "30D": 1, "90D": 2.97 };

export function PartnerDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });
  const reduce = useReducedMotion();
  const [range, setRange] = useState<RangeKey>("30D");

  const kpi = KPIS[range];
  const { current, previous } = sessionSeries(range);
  const scale = SITE_SCALE[range];
  const maxSessions = Math.max(...SITES.map((s) => s.sessions));

  const tiles = [
    { label: "Charging sessions", node: <Counter to={kpi.sessions} active={inView} />, delta: kpi.deltas[0] },
    { label: "Energy delivered", node: <Counter to={kpi.kwh} active={inView} suffix=" kWh" />, delta: kpi.deltas[1] },
    { label: "Host revenue share", node: <Counter to={kpi.revenue} active={inView} prefix="$" />, delta: kpi.deltas[2] },
    { label: "Network uptime", node: <Counter to={kpi.uptime} active={inView} decimals={1} suffix="%" />, delta: kpi.deltas[3] },
  ];

  return (
    <section id="partner-dashboard" ref={ref} className="doc-section">
      <div className="doc-shell">
        <SectionHead
          kicker="Partner Dashboard"
          title={
            <>
              Every session, kilowatt-hour and dollar &mdash;{" "}
              <span className="text-accent">in view</span>.
            </>
          }
          lead="Site hosts get a live portal for the chargers on their property: sessions, energy delivered, revenue share, uptime and utilisation, broken out by site. The view below is illustrative."
        />

        <div className="doc-figure mt-9">
          {/* window chrome */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-5">
            <div className="flex items-center gap-3">
              <span className="flex gap-1.5" aria-hidden="true">
                <i className="h-2 w-2 rounded-[2px] bg-accent" />
                <i className="h-2 w-2 rounded-[2px] bg-white/20" />
                <i className="h-2 w-2 rounded-[2px] bg-white/20" />
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-mute">
                Xura partner portal <span className="text-accent">/</span> Host dashboard
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden rounded-md border border-line px-2.5 py-1 font-mono text-[0.66rem] text-mute sm:inline">
                All sites &middot; 6
              </span>
              <div role="tablist" aria-label="Date range" className="flex overflow-hidden rounded-md border border-line">
                {RANGES.map((r) => (
                  <button
                    key={r}
                    role="tab"
                    aria-selected={range === r}
                    onClick={() => setRange(r)}
                    className={`px-3 py-1 font-mono text-[0.68rem] transition-colors ${
                      range === r ? "bg-accent font-bold text-ink" : "text-mute hover:text-paper"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 p-4 sm:p-5">
            {/* KPI tiles */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {tiles.map((t) => (
                <div key={t.label} className="stat-tile">
                  <span className="n block text-[1.55rem] tabular-nums sm:text-[1.8rem]">{t.node}</span>
                  <span className="l flex items-center justify-between gap-2">
                    {t.label}
                    <b className="font-mono text-[0.68rem] font-bold text-accent">{t.delta}</b>
                  </span>
                </div>
              ))}
            </div>

            {/* sessions + revenue split */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.7fr_1fr]">
              <div className="doc-card p-4 sm:p-5">
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="doc-h3 text-[1rem]">Sessions per day</h3>
                  <span className="flex items-center gap-4 font-mono text-[0.64rem] text-mute">
                    <span className="flex items-center gap-1.5"><i className="h-0.5 w-4 bg-accent" />This period</span>
                    <span className="flex items-center gap-1.5"><i className="h-0 w-4 border-t border-dashed border-white/40" />Prior</span>
                  </span>
                </div>
                <AreaChart key={range} current={current} previous={previous} active={inView} unitLabel="Sessions per day" />
              </div>

              <div className="doc-card flex flex-col p-4 sm:p-5">
                <h3 className="doc-h3 text-[1rem]">Revenue by stream</h3>
                <div className="my-4">
                  <Donut
                    key={range}
                    slices={REVENUE_SPLIT}
                    active={inView}
                    centre={
                      <div>
                        <span className="block font-display text-[1.45rem] font-extrabold leading-none tabular-nums">
                          <Counter to={Math.round(kpi.revenue / 0.4)} active={inView} prefix="$" />
                        </span>
                        <span className="mt-1 block font-mono text-[0.6rem] uppercase tracking-[0.14em] text-mute">gross</span>
                      </div>
                    }
                  />
                </div>
                <ul className="mt-auto flex flex-col gap-2.5">
                  {REVENUE_SPLIT.map((s, i) => (
                    <li key={s.label} className="flex items-center justify-between gap-3 text-[0.82rem] text-mute">
                      <span className="flex items-center gap-2.5">
                        <i
                          className="h-2 w-2 rounded-[2px]"
                          style={{ background: ["var(--accent)", "rgba(139,251,3,0.55)", "rgba(139,251,3,0.25)"][i] }}
                        />
                        {s.label}
                      </span>
                      <b className="font-mono text-paper">{s.share}%</b>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-line pt-3 font-mono text-[0.64rem] leading-[1.6] text-mute">
                  Host share: <b className="text-accent">40%</b> of gross, paid monthly.
                </p>
              </div>
            </div>

            {/* hourly + per-site */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr]">
              <div className="doc-card p-4 sm:p-5">
                <div className="mb-3 flex items-baseline justify-between gap-2">
                  <h3 className="doc-h3 text-[1rem]">Utilisation by hour</h3>
                  <span className="font-mono text-[0.64rem] text-mute">Peak &middot; 18:00</span>
                </div>
                <HourBars values={HOURLY} active={inView} />
              </div>

              <div className="doc-card p-4 sm:p-5">
                <div className="mb-4 flex items-baseline justify-between gap-2">
                  <h3 className="doc-h3 text-[1rem]">Per-site breakdown</h3>
                  <span className="font-mono text-[0.64rem] text-mute">Sessions &middot; uptime &middot; host share</span>
                </div>
                <ul className="flex flex-col gap-3.5">
                  {SITES.map((s, i) => {
                    const sessions = Math.round(s.sessions * scale);
                    return (
                      <li key={s.name}>
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="min-w-0 truncate text-[0.84rem] font-semibold text-paper">
                            {s.name}
                            <span className="ml-2 hidden font-mono text-[0.62rem] font-normal text-mute xl:inline">{s.chargers} chargers</span>
                          </span>
                          <span className="flex flex-none items-baseline gap-3 font-mono text-[0.7rem]">
                            <span className="text-paper/80">{sessions.toLocaleString()}</span>
                            <span className="text-mute">{s.uptime}%</span>
                            <span className="w-[4.6rem] text-right font-bold text-accent">${Math.round(s.revenue * scale).toLocaleString()}</span>
                          </span>
                        </div>
                        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                          <motion.div
                            key={range}
                            className="h-full origin-left rounded-full bg-accent"
                            style={{ width: `${(s.sessions / maxSessions) * 100}%` }}
                            initial={reduce ? false : { scaleX: 0 }}
                            animate={{ scaleX: inView || reduce ? 1 : 0 }}
                            transition={{ duration: 0.9, ease: EASE, delay: reduce ? 0 : 0.15 + i * 0.08 }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="doc-figcaption">
            <span><b>FIG.</b> Partner dashboard &mdash; sample host portfolio, six sites</span>
            <span>Illustrative data &middot; not actual results</span>
          </div>
        </div>
      </div>
    </section>
  );
}
