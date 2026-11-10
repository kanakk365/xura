"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

import { Count, EASE, Em, SectionHead, Segmented } from "../_components/primitives";

/* ---------- sample data ---------------------------------------------------- */

type SiteKey = "retail" | "travel" | "fleet";

const SITES: Record<SiteKey, { name: string; chargers: number; seed: number; scale: number; nacs: number }> = {
  retail: { name: "Retail plaza", chargers: 6, seed: 7, scale: 1, nacs: 0.58 },
  travel: { name: "Travel plaza", chargers: 12, seed: 19, scale: 2.1, nacs: 0.64 },
  fleet: { name: "Fleet depot", chargers: 4, seed: 31, scale: 0.72, nacs: 0.41 },
};

function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function buildSite(key: SiteKey) {
  const site = SITES[key];
  const r = rng(site.seed);
  // 30 days of MWh delivered with a gentle upward trend and weekend lift
  const daily = Array.from({ length: 30 }, (_, i) => {
    const weekend = i % 7 === 5 || i % 7 === 6 ? 1.18 : 1;
    return +(site.scale * (1.15 + i * 0.012) * weekend * (0.86 + r() * 0.28)).toFixed(2);
  });
  // utilisation by hour (0–1)
  const hourly = Array.from({ length: 24 }, (_, h) => {
    const commute = Math.exp(-((h - 8) ** 2) / 6) * 0.55 + Math.exp(-((h - 17.5) ** 2) / 7) * 0.75;
    const midday = Math.exp(-((h - 12.5) ** 2) / 10) * 0.35;
    const base = key === "fleet" ? (h < 6 || h > 21 ? 0.7 : 0.15) : 0.06;
    return Math.min(0.96, base + commute + midday + r() * 0.08);
  });
  const mwh = daily.reduce((a, b) => a + b, 0);
  const sessions = Math.round(mwh * 1000 / 38.5);
  const revenue = Math.round(mwh * 1000 * 0.11);
  const chargers = Array.from({ length: Math.min(site.chargers, 6) }, (_, i) => {
    const busy = r();
    return {
      id: `L3-${String(i + 1).padStart(2, "0")}`,
      port: i % 2 === 0 ? "NACS" : "CCS1",
      kw: busy > 0.3 ? Math.round(90 + r() * 240) : 0,
      soc: Math.round(20 + r() * 70),
    };
  });
  return { site, daily, hourly, mwh, sessions, revenue, uptime: 99.2 + r() * 0.7, chargers };
}

/* ---------- section --------------------------------------------------------- */

export function PartnerDashboard() {
  const [key, setKey] = useState<SiteKey>("retail");
  const data = useMemo(() => buildSite(key), [key]);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();
  const show = inView || !!reduce;

  return (
    <section id="dashboard" className="op-section">
      <div className="op-shell">
        <SectionHead
          kicker="Partner dashboard"
          title={
            <>
              Every kWh and every dollar, <Em>in real time</Em>.
            </>
          }
          lead="Hosts see their site the way we do: sessions, energy delivered, revenue share and uptime, streamed from the hub. Shown here with sample data."
        />

        <motion.div
          ref={ref}
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="mt-14 rounded-[28px] bg-ink-2 p-[4px] sm:rounded-[40px] sm:p-[5px]"
        >
          <div className="rounded-[26px] border border-paper/10 p-[2px] sm:rounded-[37px]">
            <div className="overflow-hidden rounded-[24px] border border-paper/[0.05] bg-[#080808] sm:rounded-[34px]">
              {/* window bar */}
              <div className="flex flex-col gap-4 border-b border-paper/[0.08] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                <div className="flex items-center gap-3">
                  <span className="relative inline-flex h-2 w-2">
                    <span className="pulse-dot absolute inset-0 rounded-full bg-accent" />
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-paper/80">Xura partner</span>
                  <span className="rounded-full border border-paper/15 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-mute">
                    Sample data
                  </span>
                </div>
                <div className="-mx-1 overflow-x-auto px-1 [scrollbar-width:none]">
                  <Segmented
                    label="Choose a site"
                    layoutId="pd-site"
                    value={key}
                    onChange={setKey}
                    options={(Object.keys(SITES) as SiteKey[]).map((k) => ({ value: k, label: `${SITES[k].name} · ${SITES[k].chargers}` }))}
                  />
                </div>
              </div>

              {/* KPIs */}
              <dl className="grid grid-cols-2 border-b border-paper/[0.08] lg:grid-cols-4 [&>*:nth-child(even)]:border-l [&>*:nth-child(n+3)]:border-t lg:[&>*:not(:first-child)]:border-l lg:[&>*:nth-child(n+3)]:border-t-0 [&>*]:border-paper/[0.08]">
                <Kpi label="Sessions · 30 days" delta="+12.4%">
                  <Count value={show ? data.sessions : 0} />
                </Kpi>
                <Kpi label="Energy delivered" delta="+9.1%" unit="MWh">
                  <Count value={show ? data.mwh : 0} decimals={1} />
                </Kpi>
                <Kpi label="Your revenue share" delta="+14.8%">
                  <Count value={show ? data.revenue : 0} prefix="$" />
                </Kpi>
                <Kpi label="Charger uptime" delta="SLA 99%" unit="%">
                  <Count value={show ? data.uptime : 0} decimals={2} />
                </Kpi>
              </dl>

              {/* row 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <Panel className="lg:col-span-2 lg:border-r" title="Energy delivered" meta="Daily · last 30 days · MWh">
                  <AreaChart values={data.daily} show={show} />
                </Panel>
                <Panel className="border-t lg:border-t-0" title="Session mix" meta="By connector">
                  <Donut nacs={data.site.nacs} show={show} />
                </Panel>
              </div>

              {/* row 2 */}
              <div className="grid grid-cols-1 border-t border-paper/[0.08] lg:grid-cols-3">
                <Panel className="lg:col-span-2 lg:border-r" title="Utilisation by hour" meta="Average · share of ports in use">
                  <HourBars values={data.hourly} show={show} />
                </Panel>
                <Panel className="border-t lg:border-t-0" title="Live chargers" meta={`${data.chargers.filter((c) => c.kw > 0).length} of ${data.chargers.length} charging`}>
                  <LiveChargers chargers={data.chargers} show={show} siteKey={key} />
                </Panel>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- pieces ------------------------------------------------------------ */

function Kpi({ label, delta, unit, children }: { label: string; delta: string; unit?: string; children: React.ReactNode }) {
  return (
    <div className="flex min-w-0 flex-col gap-3 px-5 py-5 sm:px-7 sm:py-6">
      <dt className="op-label leading-snug">{label}</dt>
      <dd className="flex items-baseline gap-2">
        <span className="font-display text-[clamp(1.6rem,2.8vw,2.4rem)] leading-none text-paper">{children}</span>
        {unit && <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-accent">{unit}</span>}
      </dd>
      <dd className="w-fit rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.06em] text-accent">{delta}</dd>
    </div>
  );
}

function Panel({ title, meta, className = "", children }: { title: string; meta: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={`flex min-w-0 flex-col border-paper/[0.08] p-5 sm:p-7 ${className}`}>
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-[1.1rem] text-paper">{title}</h3>
        <span className="op-label !text-[9px]">{meta}</span>
      </div>
      <div className="flex flex-1 flex-col justify-center">{children}</div>
    </div>
  );
}

const W = 640;
const H = 230;
const PAD = { l: 34, r: 12, t: 12, b: 26 };

function AreaChart({ values, show }: { values: number[]; show: boolean }) {
  const [hover, setHover] = useState<number | null>(null);
  const max = Math.ceil(Math.max(...values) * 1.15);
  const x = (i: number) => PAD.l + (i / (values.length - 1)) * (W - PAD.l - PAD.r);
  const y = (v: number) => PAD.t + (1 - v / max) * (H - PAD.t - PAD.b);
  const line = values.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
  const area = `${line} L${x(values.length - 1)} ${H - PAD.b} L${x(0)} ${H - PAD.b} Z`;
  const ticks = [0, max / 2, max];

  const onMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * W;
    const i = Math.round(((px - PAD.l) / (W - PAD.l - PAD.r)) * (values.length - 1));
    setHover(Math.max(0, Math.min(values.length - 1, i)));
  };

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block w-full touch-none" onPointerMove={onMove} onPointerLeave={() => setHover(null)} role="img" aria-label="Daily energy delivered over 30 days">
      <defs>
        <linearGradient id="pd-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#8bfb03" stopOpacity="0" />
        </linearGradient>
        <clipPath id="pd-reveal">
          <motion.rect x="0" y="0" height={H} initial={{ width: 0 }} animate={{ width: show ? W : 0 }} transition={{ duration: 1.6, ease: EASE }} />
        </clipPath>
      </defs>
      {ticks.map((t) => (
        <g key={t}>
          <line x1={PAD.l} x2={W - PAD.r} y1={y(t)} y2={y(t)} stroke="rgba(255,255,255,0.06)" />
          <text x={PAD.l - 8} y={y(t) + 3} textAnchor="end" fontSize="9" fill="#5d5d5d" className="font-mono">{t.toFixed(t % 1 ? 1 : 0)}</text>
        </g>
      ))}
      {[0, 7, 14, 21, 29].map((i) => (
        <text key={i} x={x(i)} y={H - 8} textAnchor="middle" fontSize="9" fill="#5d5d5d" className="font-mono">D{i + 1}</text>
      ))}
      <g clipPath="url(#pd-reveal)">
        <motion.path animate={{ d: area }} transition={{ duration: 0.7, ease: EASE }} fill="url(#pd-area)" />
        <motion.path animate={{ d: line }} transition={{ duration: 0.7, ease: EASE }} fill="none" stroke="#8bfb03" strokeWidth="2.2" strokeLinejoin="round" />
      </g>
      {hover !== null && (
        <g pointerEvents="none">
          <line x1={x(hover)} x2={x(hover)} y1={PAD.t} y2={H - PAD.b} stroke="rgba(255,255,255,0.25)" strokeDasharray="3 3" />
          <circle cx={x(hover)} cy={y(values[hover])} r="5" fill="#050505" stroke="#8bfb03" strokeWidth="2" />
          <g transform={`translate(${Math.min(x(hover) + 10, W - 104)} ${Math.max(y(values[hover]) - 40, 4)})`}>
            <rect width="94" height="34" rx="8" fill="#141414" stroke="rgba(255,255,255,0.14)" />
            <text x="10" y="14" fontSize="8.5" fill="#808080" className="font-mono">DAY {hover + 1}</text>
            <text x="10" y="27" fontSize="11" fill="#fff" className="font-mono">{values[hover].toFixed(2)} MWh</text>
          </g>
        </g>
      )}
    </svg>
  );
}

function Donut({ nacs, show }: { nacs: number; show: boolean }) {
  const r = 70;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row lg:flex-col xl:flex-row">
      <svg viewBox="0 0 180 180" className="h-[170px] w-[170px] shrink-0 -rotate-90" role="img" aria-label={`NACS ${Math.round(nacs * 100)} percent, CCS1 ${Math.round((1 - nacs) * 100)} percent`}>
        <circle cx="90" cy="90" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="18" />
        {[
          { start: 0, len: nacs, color: "#8bfb03", op: 1 },
          { start: nacs, len: 1 - nacs, color: "#e8e8e8", op: 0.55 },
        ].map((seg, i) => (
          <motion.circle
            key={i}
            cx="90" cy="90" r={r} fill="none" stroke={seg.color} strokeOpacity={seg.op} strokeWidth="18"
            initial={{ strokeDasharray: `0 ${c}` }}
            animate={{
              strokeDasharray: `${show ? Math.max(0, seg.len * c - 4) : 0} ${c}`,
              strokeDashoffset: -seg.start * c,
            }}
            transition={{ duration: 1.1, delay: i * 0.2, ease: EASE }}
          />
        ))}
      </svg>
      <ul className="flex w-full flex-col gap-4">
        {[
          { label: "NACS (Tesla)", v: nacs, color: "bg-accent" },
          { label: "CCS1", v: 1 - nacs, color: "bg-paper/55" },
        ].map((s) => (
          <li key={s.label} className="flex items-center justify-between gap-4 border-b border-paper/[0.08] pb-3 last:border-0">
            <span className="flex items-center gap-2.5 text-[14px] text-paper/75">
              <span className={`h-2.5 w-2.5 rounded-full ${s.color}`} />
              {s.label}
            </span>
            <span className="font-display text-[1.3rem] text-paper">
              <Count value={show ? Math.round(s.v * 100) : 0} suffix="%" duration={0.8} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HourBars({ values, show }: { values: number[]; show: boolean }) {
  const peak = values.indexOf(Math.max(...values));
  const BH = 170;
  const bw = (W - PAD.l - PAD.r) / 24;
  return (
    <svg viewBox={`0 0 ${W} ${BH + 26}`} className="block w-full" role="img" aria-label={`Hourly utilisation, peaking at ${peak}:00`}>
      {[0, 0.5, 1].map((t) => (
        <g key={t}>
          <line x1={PAD.l} x2={W - PAD.r} y1={BH * (1 - t) + 4} y2={BH * (1 - t) + 4} stroke="rgba(255,255,255,0.06)" />
          <text x={PAD.l - 8} y={BH * (1 - t) + 7} textAnchor="end" fontSize="9" fill="#5d5d5d" className="font-mono">{t * 100}%</text>
        </g>
      ))}
      {values.map((v, h) => {
        const hgt = v * (BH - 6);
        return (
          <motion.rect
            key={h}
            x={PAD.l + h * bw + bw * 0.18}
            width={bw * 0.64}
            rx="3"
            fill={h === peak ? "#8bfb03" : "rgba(139,251,3,0.32)"}
            initial={{ height: 0, y: BH + 4 }}
            animate={{ height: show ? hgt : 0, y: show ? BH + 4 - hgt : BH + 4 }}
            transition={{ duration: 0.8, delay: show ? h * 0.025 : 0, ease: EASE }}
          />
        );
      })}
      {[0, 6, 12, 18, 23].map((h) => (
        <text key={h} x={PAD.l + h * bw + bw / 2} y={BH + 22} textAnchor="middle" fontSize="9" fill="#5d5d5d" className="font-mono">
          {String(h).padStart(2, "0")}:00
        </text>
      ))}
    </svg>
  );
}

function LiveChargers({ chargers, show, siteKey }: { chargers: { id: string; port: string; kw: number; soc: number }[]; show: boolean; siteKey: string }) {
  const [tick, setTick] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce || !show) return;
    const t = setInterval(() => setTick((v) => v + 1), 2200);
    return () => clearInterval(t);
  }, [reduce, show]);

  return (
    <ul className="flex flex-col">
      <AnimatePresence mode="popLayout" initial={false}>
        {chargers.map((c, i) => {
          const live = c.kw > 0;
          const kw = live ? Math.max(40, Math.round(c.kw + Math.sin(tick + i * 1.7) * 18)) : 0;
          return (
            <motion.li
              key={`${siteKey}-${c.id}`}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
              className="flex items-center gap-3 border-b border-paper/[0.06] py-2.5 last:border-0"
            >
              <span className={`h-2 w-2 shrink-0 rounded-full ${live ? "pulse-dot bg-accent" : "bg-paper/25"}`} />
              <span className="w-14 shrink-0 font-mono text-[11px] text-paper/80">{c.id}</span>
              <span className="w-10 shrink-0 font-mono text-[10px] text-mute">{c.port}</span>
              <span className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-paper/[0.07]">
                <motion.span
                  className="absolute inset-y-0 left-0 rounded-full bg-accent"
                  animate={{ width: show && live ? `${(kw / 350) * 100}%` : "0%" }}
                  transition={{ duration: 0.9, ease: EASE }}
                />
              </span>
              <span className={`w-16 shrink-0 text-right font-mono text-[11px] ${live ? "text-paper" : "text-mute"}`}>
                {live ? `${kw} kW` : "Ready"}
              </span>
            </motion.li>
          );
        })}
      </AnimatePresence>
    </ul>
  );
}
