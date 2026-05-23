"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef, useState } from "react";

import { ArrowUpRight } from "../../components/icons";

type Billing = "monthly" | "quarterly";

type Package = {
  id: string;
  name: string;
  tagline: string;
  monthly: number;
  badge?: string;
  featured?: boolean;
  impressions: string;
  placements: string;
  description: string;
  features: string[];
  cta: string;
};

const PACKAGES: Package[] = [
  {
    id: "pulse",
    name: "Pulse",
    tagline: "Single surface, steady cadence.",
    monthly: 1500,
    impressions: "50K",
    placements: "1 rotating slot",
    description:
      "Run a single surface (footer or sidebar) at a steady cadence with a monthly performance brief.",
    features: [
      "1 placement at a time",
      "Static or looping creative",
      "Monthly performance brief",
      "Standard creative review",
      "30-day commitment",
    ],
    cta: "Start with Pulse",
  },
  {
    id: "surge",
    name: "Surge",
    tagline: "Multi-surface, measured.",
    monthly: 4800,
    badge: "Most chosen",
    featured: true,
    impressions: "180K",
    placements: "2 surfaces + newsletter",
    description:
      "Two simultaneous placements with A/B creative, weekly analytics, and one sponsor mention in the bi-weekly briefing.",
    features: [
      "2 simultaneous placements",
      "Up to 2 creative variants (A/B)",
      "Weekly analytics dashboard",
      "Newsletter mention every 4 weeks",
      "Priority creative review",
      "90-day commitment",
    ],
    cta: "Choose Surge",
  },
  {
    id: "voltage",
    name: "Voltage",
    tagline: "Full footprint, owned audience.",
    monthly: 11000,
    impressions: "500K",
    placements: "3 surfaces + marquee",
    description:
      "Three placements plus an exclusive hero marquee window, unlimited creative refresh, and a sponsored case study slot.",
    features: [
      "3 placements + hero marquee window",
      "Unlimited creative refresh",
      "Sponsored case study (1 / quarter)",
      "Dedicated audience targeting",
      "Real-time analytics + alerts",
      "Account manager + media planner",
    ],
    cta: "Reserve Voltage",
  },
];

const ENTERPRISE = {
  name: "Bespoke",
  tagline: "Custom-built media partnership.",
  description:
    "For brands with annual commitments, co-branded content, event sponsorships, or category exclusivity. Built around your media plan, not a pre-set tier.",
  features: [
    "Tailored placement mix",
    "Co-branded editorial collabs",
    "Event & roundtable sponsorship",
    "Category exclusivity available",
    "Custom analytics & attribution",
    "Direct line to media team",
  ],
};

export function AdvertisePackages() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section
      id="packages"
      ref={ref}
      className="relative bg-ink py-20 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.05]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-32 -z-10 h-[420px] w-[820px] -translate-x-1/2 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(139,251,3,0.10),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-10 lg:px-16">
        <header className="mb-10 flex flex-col items-center gap-6 text-center sm:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.1, 1] }}
            className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-mute"
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
              <span className="absolute -inset-1 rounded-full bg-accent/30 blur-[3px]" />
            </span>
            Packages
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.1, 1] }}
            className="max-w-3xl font-display tracking-normal text-[clamp(1.85rem,6vw,3.75rem)] font-normal leading-[1.05] text-paper"
          >
            Pick the cadence that{" "}
            <span className="italic text-accent">fits</span> your campaign.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.1, 1] }}
            className="max-w-xl text-[15px] leading-relaxed text-paper/60 sm:text-base"
          >
            Three transparent tiers and a bespoke track. Prices are flat &mdash;
            no auction, no bidding, no surprise rate cards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-2"
          >
            <BillingToggle value={billing} onChange={setBilling} />
          </motion.div>
        </header>

        <ul className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
          {PACKAGES.map((pkg, i) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              billing={billing}
              index={i}
              isInView={isInView}
            />
          ))}
        </ul>

        <EnterpriseCard isInView={isInView} />
      </div>
    </section>
  );
}

function BillingToggle({
  value,
  onChange,
}: {
  value: Billing;
  onChange: (v: Billing) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Billing cadence"
      className="relative inline-flex items-center rounded-full border border-paper/[0.08] bg-paper/[0.04] p-1"
    >
      {(["monthly", "quarterly"] as Billing[]).map((b) => {
        const active = value === b;
        return (
          <button
            key={b}
            role="tab"
            aria-selected={active}
            type="button"
            onClick={() => onChange(b)}
            className={`relative isolate inline-flex h-9 items-center gap-2 rounded-full px-5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
              active ? "text-ink" : "text-paper/65 hover:text-paper"
            }`}
          >
            {active && (
              <motion.span
                layoutId="billing-bg"
                aria-hidden="true"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                className="absolute inset-0 -z-10 rounded-full bg-accent shadow-[0_6px_18px_-6px_rgba(139,251,3,0.55)]"
              />
            )}
            <span>{b === "monthly" ? "Monthly" : "Quarterly"}</span>
            {b === "quarterly" && (
              <span
                className={`rounded-full px-1.5 py-px font-mono text-[9px] font-semibold tracking-[0.14em] transition-colors duration-300 ${
                  active
                    ? "bg-ink/20 text-ink"
                    : "bg-accent/15 text-accent"
                }`}
              >
                -12%
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

function PackageCard({
  pkg,
  billing,
  index,
  isInView,
}: {
  pkg: Package;
  billing: Billing;
  index: number;
  isInView: boolean;
}) {
  const delay = 0.4 + index * 0.1;
  const monthlyEffective =
    billing === "quarterly" ? Math.round(pkg.monthly * 0.88) : pkg.monthly;
  const billedNote =
    billing === "quarterly"
      ? `Billed $${(monthlyEffective * 3).toLocaleString()} every 3 mo.`
      : "Billed monthly.";

  return (
    <motion.li
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.2, 0.7, 0.1, 1] }}
      className={`relative ${pkg.featured ? "lg:-mt-4" : ""}`}
    >
      <div
        className={`h-full rounded-[28px] p-[4px] sm:rounded-[36px] sm:p-[5px] ${
          pkg.featured
            ? "bg-[linear-gradient(135deg,rgba(139,251,3,0.55),rgba(139,251,3,0.05)_55%,rgba(255,255,255,0.04))] shadow-[0_30px_80px_-30px_rgba(139,251,3,0.45)]"
            : "bg-ink-2"
        }`}
      >
        <div
          className={`h-full rounded-[24px] border p-[2px] sm:rounded-[32px] ${
            pkg.featured ? "border-accent/30" : "border-paper/10"
          }`}
        >
          <div
            className={`relative h-full overflow-hidden rounded-[22px] border p-7 sm:rounded-[30px] sm:p-9 ${
              pkg.featured
                ? "border-accent/15 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(139,251,3,0.08),rgba(14,14,14,1)_60%)]"
                : "border-paper/[0.05] bg-ink-2"
            }`}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 grid-lines opacity-[0.05]"
            />

            <div className="relative flex items-start justify-between gap-3">
              <div className="flex flex-col gap-2">
                <span
                  className={`flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.24em] ${
                    pkg.featured ? "text-accent" : "text-mute"
                  }`}
                >
                  <span className="relative inline-flex h-1.5 w-1.5">
                    <span
                      className={`absolute inset-0 rounded-full ${
                        pkg.featured ? "bg-accent pulse-dot" : "bg-paper/30"
                      }`}
                    />
                  </span>
                  Tier
                </span>
                <h3 className="font-display tracking-normal text-[clamp(1.85rem,3vw,2.4rem)] font-normal leading-none text-paper">
                  {pkg.name}
                </h3>
                <p className="font-display text-[14px] italic leading-none text-accent/85">
                  {pkg.tagline}
                </p>
              </div>
              {pkg.badge && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[9.5px] font-medium uppercase tracking-[0.18em] text-accent">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {pkg.badge}
                </span>
              )}
            </div>

            <div className="relative mt-7 flex items-baseline gap-2">
              <span className="font-mono text-[14px] font-medium text-paper/60">
                $
              </span>
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={`${pkg.id}-${monthlyEffective}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.2, 0.7, 0.1, 1] }}
                  className="font-display tracking-normal text-[clamp(2.6rem,5.2vw,3.6rem)] font-normal leading-none text-paper"
                >
                  {monthlyEffective.toLocaleString()}
                </motion.span>
              </AnimatePresence>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute">
                / mo
              </span>
            </div>
            <p className="relative mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-mute">
              {billedNote}
            </p>

            <p className="relative mt-6 max-w-md text-[13.5px] leading-[1.55] text-paper/70 sm:text-[14px]">
              {pkg.description}
            </p>

            <dl className="relative mt-6 grid grid-cols-2 gap-x-3 rounded-2xl border border-paper/[0.08] bg-ink/40 p-4">
              <div className="flex flex-col gap-1.5">
                <dt className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-mute">
                  Impressions
                </dt>
                <dd className="font-display tracking-normal text-[16px] font-normal text-paper">
                  {pkg.impressions}
                  <span className="ml-1 font-mono text-[10px] text-mute">
                    /mo
                  </span>
                </dd>
              </div>
              <div className="flex flex-col gap-1.5">
                <dt className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-mute">
                  Placements
                </dt>
                <dd className="font-display tracking-normal text-[16px] font-normal text-paper">
                  {pkg.placements}
                </dd>
              </div>
            </dl>

            <ul className="relative mt-6 flex flex-col gap-3 text-[13.5px] text-paper/75">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckMark featured={pkg.featured} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="relative mt-8">
              <a
                href="#advertise-contact"
                className={`group relative inline-flex h-12 w-full items-center justify-center gap-3 overflow-hidden rounded-full text-sm font-normal tracking-[0.1em] transition-transform hover:-translate-y-0.5 ${
                  pkg.featured
                    ? "bg-accent text-ink"
                    : "border border-paper/15 bg-paper/[0.02] text-paper hover:border-paper/30"
                }`}
              >
                <span className="relative z-10">{pkg.cta}</span>
                <span
                  aria-hidden="true"
                  className={`relative z-10 grid h-7 w-7 place-items-center rounded-full transition-transform group-hover:translate-x-0.5 ${
                    pkg.featured ? "bg-ink text-accent" : "bg-paper/10 text-paper"
                  }`}
                >
                  <ArrowUpRight />
                </span>
                {pkg.featured && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-paper transition-transform duration-500 group-hover:translate-x-0"
                  />
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
}

function CheckMark({ featured }: { featured?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`mt-[3px] grid h-4 w-4 shrink-0 place-items-center rounded-full ${
        featured ? "bg-accent/15" : "bg-paper/[0.06]"
      }`}
    >
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none">
        <path
          d="M2 6.2 4.6 8.8 10 3.6"
          stroke={featured ? "#8bfb03" : "rgba(255,255,255,0.85)"}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function EnterpriseCard({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay: 0.85, ease: [0.2, 0.7, 0.1, 1] }}
      className="relative mt-5 overflow-hidden rounded-3xl border border-paper/[0.08] bg-ink-2/70 p-7 sm:rounded-[32px] sm:p-10 lg:p-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.05]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-8 top-8 select-none font-display text-[clamp(5rem,9vw,8rem)] italic leading-[0.82] text-paper/[0.05]"
      >
        ∞
      </div>

      <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
        <div className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 text-[10px] font-medium uppercase tracking-[0.24em] text-accent">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
            </span>
            Enterprise &middot; Custom
          </span>
          <h3 className="font-display tracking-normal text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.05] text-paper">
            {ENTERPRISE.name}
          </h3>
          <p className="font-display text-[15px] italic text-accent/85">
            {ENTERPRISE.tagline}
          </p>
          <p className="max-w-md text-[14.5px] leading-[1.6] text-paper/70">
            {ENTERPRISE.description}
          </p>
          <div className="mt-3">
            <a
              href="#advertise-contact"
              className="group relative inline-flex h-12 items-center gap-3 overflow-hidden rounded-full bg-accent px-6 text-sm font-normal tracking-[0.1em] text-ink transition-transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">Design a media plan</span>
              <span
                aria-hidden="true"
                className="relative z-10 grid h-7 w-7 place-items-center rounded-full bg-ink text-accent transition-transform group-hover:translate-x-0.5"
              >
                <ArrowUpRight />
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-paper transition-transform duration-500 group-hover:translate-x-0"
              />
            </a>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {ENTERPRISE.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 rounded-2xl border border-paper/[0.06] bg-ink/40 p-4"
            >
              <CheckMark featured />
              <span className="text-[13.5px] leading-snug text-paper/80">
                {f}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
