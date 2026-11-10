"use client";

import ElectricBorder from "../_bits/ElectricBorder";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";

import { Arrow, Check, Count, EASE, Em, SectionHead } from "../_components/primitives";

const STATS = [
  { value: 84, suffix: "K", unit: "/mo", label: "Monthly readers" },
  { text: "6:42", label: "Avg session" },
  { value: 71, suffix: "%", label: "Decision-makers" },
  { value: 12, suffix: "+", label: "US metros" },
];

const AUDIENCE = [
  { label: "Fleet operators", meta: "Logistics, last-mile, transit", share: 34 },
  { label: "CRE owners & developers", meta: "Industrial, retail, multifamily", share: 27 },
  { label: "Capital partners", meta: "Infra funds, IPPs, family offices", share: 22 },
  { label: "Engineers & EPC", meta: "Designers, integrators, AHJs", share: 17 },
];

type Slot = "marquee" | "inflow" | "sidebar" | "footer" | "newsletter";
const PLACEMENTS: { id: Slot; code: string; name: string; format: string; spec: string }[] = [
  { id: "marquee", code: "P-01", name: "Hero marquee", format: "1440 × 120", spec: "PNG / SVG / WebM" },
  { id: "inflow", code: "P-02", name: "In-flow card", format: "960 × 540", spec: "Native card" },
  { id: "sidebar", code: "P-03", name: "Sidebar tile", format: "400 × 400", spec: "Sticky" },
  { id: "footer", code: "P-04", name: "Footer banner", format: "1200 × 200", spec: "Static / animated" },
  { id: "newsletter", code: "P-05", name: "Newsletter sponsor", format: "1 / issue", spec: "Logo + 80 words" },
];

const PACKAGES = [
  {
    name: "Pulse",
    tagline: "Single surface, steady cadence.",
    price: 1500,
    impressions: "50K",
    placements: "1 rotating slot",
    features: ["1 placement at a time", "Static or looping creative", "Monthly performance brief", "30-day commitment"],
    cta: "Start with Pulse",
  },
  {
    name: "Surge",
    tagline: "Multi-surface, measured.",
    price: 4800,
    impressions: "180K",
    placements: "2 surfaces + newsletter",
    features: ["2 simultaneous placements", "A/B creative variants", "Weekly analytics dashboard", "90-day commitment"],
    cta: "Choose Surge",
    featured: true,
  },
  {
    name: "Voltage",
    tagline: "Full footprint, owned audience.",
    price: 11000,
    impressions: "500K",
    placements: "3 surfaces + marquee",
    features: ["Exclusive hero marquee window", "Unlimited creative refresh", "Sponsored case study each quarter", "Account manager + planner"],
    cta: "Reserve Voltage",
  },
];

export function Advertising() {
  return (
    <section id="advertise" className="op-section">
      <div className="op-shell">
        <SectionHead
          kicker="Advertise with Xura"
          title={
            <>
              Reach the people <Em>scoping</Em> the grid.
            </>
          }
          lead="Operators, CRE owners and capital partners actively scoping site-level energy. Not just impressions: buyers."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Audience />
          <Inventory />
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
          {PACKAGES.map((p, i) => {
            const card = (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              className={`op-plate p-7 sm:p-8 ${p.featured ? "!border-accent/50 bg-[radial-gradient(120%_70%_at_50%_0%,rgba(139,251,3,0.12),transparent_70%)]" : ""}`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="op-h3">{p.name}</h3>
                {p.featured && <span className="rounded-full bg-accent px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-ink">Most chosen</span>}
              </div>
              <p className="mt-2 text-[14px] text-mute">{p.tagline}</p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-[2.6rem] leading-none text-paper">
                  <Count value={p.price} prefix="$" />
                </span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-mute">/ month</span>
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/[0.08]">
                <div className="bg-[#0b0b0b] px-4 py-3">
                  <dt className="op-label !text-[9px]">Impressions</dt>
                  <dd className="mt-1 font-display text-[1.05rem] text-paper">{p.impressions}</dd>
                </div>
                <div className="bg-[#0b0b0b] px-4 py-3">
                  <dt className="op-label !text-[9px]">Placements</dt>
                  <dd className="mt-1 text-[13px] leading-snug text-paper">{p.placements}</dd>
                </div>
              </dl>
              <ul className="mt-6 flex flex-col gap-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] leading-snug text-paper/70">
                    <span className="mt-0.5 text-accent">
                      <Check />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div aria-hidden="true" className="min-h-8 flex-1" />
              <a href="#contact" className={`${p.featured ? "op-btn" : "op-btn-ghost"} w-full justify-between !pl-6 !pr-2`}>
                {p.cta}
                <span className={`grid h-8 w-8 place-items-center rounded-full ${p.featured ? "bg-ink text-accent" : "bg-paper/10 text-paper"}`}>
                  <Arrow />
                </span>
              </a>
            </motion.article>
            );
            return p.featured ? (
              <ElectricBorder
                key={p.name}
                color="#8bfb03"
                borderRadius={28}
                speed={0.7}
                chaos={0.35}
                thickness={1.2}
                strands={2}
                glow={0.5}
                intensity={0.7}
                className="flex [&>article]:flex-1"
              >
                {card}
              </ElectricBorder>
            ) : (
              card
            );
          })}
        </div>

        <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-[24px] border border-paper/10 px-7 py-5 sm:flex-row sm:items-center">
          <p className="text-[15px] text-paper/65">
            <span className="text-paper">Bespoke partnerships</span> for annual commitments, co-branded content, events or category
            exclusivity.
          </p>
          <a href="/advertise" className="op-btn-ghost shrink-0">
            Full media kit
          </a>
        </div>
      </div>
    </section>
  );
}

function Audience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();
  const show = inView || !!reduce;
  return (
    <div ref={ref} className="op-plate">
      <div className="op-plate-bar">
        <span>
          <b>Audience</b>
        </span>
        <span>Last 90 days</span>
      </div>
      <dl className="grid grid-cols-2 border-b border-paper/[0.08] sm:grid-cols-4 [&>*+*]:border-paper/[0.08] [&>*:nth-child(even)]:border-l sm:[&>*+*]:border-l [&>*:nth-child(n+3)]:border-t sm:[&>*:nth-child(n+3)]:border-t-0">
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col gap-2 px-5 py-5">
            <dd className="font-display text-[1.8rem] leading-none text-paper">
              {"text" in s ? s.text : <Count value={show ? s.value! : 0} suffix={s.suffix} />}
              {s.unit && <span className="ml-1 text-[10px] uppercase tracking-[0.14em] text-accent">{s.unit}</span>}
            </dd>
            <dt className="op-label !text-[9px]">{s.label}</dt>
          </div>
        ))}
      </dl>
      <ul className="flex flex-1 flex-col justify-around px-6 py-5">
        {AUDIENCE.map((a, i) => (
          <li key={a.label} className="py-2.5">
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-display text-[1.02rem] text-paper">{a.label}</span>
              <span className="font-display text-[1.2rem] text-accent">
                <Count value={show ? a.share : 0} suffix="%" duration={1} />
              </span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-paper/[0.07]">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: show ? `${(a.share / 34) * 100}%` : 0 }}
                transition={{ duration: 1.1, delay: 0.1 + i * 0.12, ease: EASE }}
              />
            </div>
            <p className="mt-1.5 text-[12.5px] text-mute">{a.meta}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Inventory() {
  const [slot, setSlot] = useState<Slot>("marquee");
  const on = (s: Slot) => slot === s;
  const fill = (s: Slot) => (on(s) ? "#8bfb03" : "rgba(255,255,255,0.06)");
  const stroke = (s: Slot) => (on(s) ? "#8bfb03" : "rgba(255,255,255,0.12)");

  return (
    <div className="op-plate">
      <div className="op-plate-bar">
        <span>
          <b>Inventory</b> · one advertiser per surface
        </span>
        <span>5 surfaces</span>
      </div>
      <div className="grid flex-1 grid-cols-1 sm:grid-cols-[minmax(0,1fr)_200px]">
        <ul className="flex flex-col">
          {PLACEMENTS.map((p, i) => (
            <li key={p.id} className={i > 0 ? "border-t border-paper/[0.06]" : ""}>
              <button
                type="button"
                onMouseEnter={() => setSlot(p.id)}
                onFocus={() => setSlot(p.id)}
                onClick={() => setSlot(p.id)}
                aria-pressed={on(p.id)}
                className={`flex w-full items-center gap-4 px-6 py-4 text-left transition-colors ${on(p.id) ? "bg-accent/[0.06]" : "hover:bg-white/[0.02]"}`}
              >
                <span className={`font-mono text-[10px] tracking-[0.1em] ${on(p.id) ? "text-accent" : "text-mute-2"}`}>{p.code}</span>
                <span className="min-w-0 flex-1">
                  <span className={`block font-display text-[1rem] ${on(p.id) ? "text-paper" : "text-paper/75"}`}>{p.name}</span>
                  <span className="block truncate font-mono text-[10.5px] text-mute">
                    {p.format} · {p.spec}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className="hidden items-center justify-center border-l border-paper/[0.08] p-5 sm:flex">
          <svg viewBox="0 0 160 250" className="w-full max-w-[170px]" role="img" aria-label="Page wireframe highlighting the selected placement">
            <rect x="1" y="1" width="158" height="248" rx="10" fill="#0b0b0b" stroke="rgba(255,255,255,0.14)" />
            <rect x="10" y="10" width="140" height="8" rx="3" fill="rgba(255,255,255,0.1)" />
            <motion.rect animate={{ fill: fill("marquee") }} x="10" y="24" width="140" height="16" rx="3" stroke={stroke("marquee")} />
            <rect x="10" y="48" width="96" height="10" rx="3" fill="rgba(255,255,255,0.12)" />
            {[64, 74, 84].map((y) => (
              <rect key={y} x="10" y={y} width="96" height="5" rx="2" fill="rgba(255,255,255,0.06)" />
            ))}
            <motion.rect animate={{ fill: fill("inflow") }} x="10" y="98" width="96" height="54" rx="4" stroke={stroke("inflow")} />
            {[160, 170, 180].map((y) => (
              <rect key={y} x="10" y={y} width="96" height="5" rx="2" fill="rgba(255,255,255,0.06)" />
            ))}
            <motion.rect animate={{ fill: fill("sidebar") }} x="114" y="48" width="36" height="36" rx="4" stroke={stroke("sidebar")} />
            <motion.rect animate={{ fill: fill("newsletter") }} x="114" y="94" width="36" height="58" rx="4" stroke={stroke("newsletter")} strokeDasharray="3 3" />
            <motion.rect animate={{ fill: fill("footer") }} x="10" y="200" width="140" height="22" rx="3" stroke={stroke("footer")} />
            <rect x="10" y="230" width="140" height="10" rx="3" fill="rgba(255,255,255,0.06)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
