"use client";

import { useState } from "react";

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
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section id="packages" className="doc-section">
      <div className="doc-shell">
        <p className="kicker">Packages</p>

        <h2 className="doc-h2 mt-4 max-w-[24ch]">
          Pick the cadence that <span className="text-accent">fits</span> your
          campaign.
        </h2>

        <p className="doc-lead mt-3.5">
          Three transparent tiers and a bespoke track. Prices are flat &mdash;
          no auction, no bidding, no surprise rate cards.
        </p>

        <div
          role="tablist"
          aria-label="Billing period"
          className="mt-7 inline-flex items-center rounded-lg border border-line bg-ink-2 p-1"
        >
          {(["monthly", "quarterly"] as Billing[]).map((b) => {
            const active = billing === b;
            return (
              <button
                key={b}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setBilling(b)}
                className={`inline-flex h-9 items-center gap-2 rounded-md px-5 font-mono text-[0.68rem] font-medium uppercase tracking-[0.14em] transition-colors ${
                  active ? "bg-accent text-ink" : "text-mute hover:text-paper"
                }`}
              >
                {b === "monthly" ? "Monthly" : "Quarterly"}
                {b === "quarterly" && (
                  <span
                    className={`rounded px-1.5 py-px text-[0.58rem] font-bold ${
                      active
                        ? "bg-ink/20 text-ink"
                        : "bg-[rgba(139,251,3,0.15)] text-accent"
                    }`}
                  >
                    -12%
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {PACKAGES.map((pkg) => {
            const price =
              billing === "quarterly"
                ? Math.round(pkg.monthly * 0.88)
                : pkg.monthly;

            return (
              <article
                key={pkg.id}
                className={`flex flex-col rounded-[10px] border p-6 sm:p-7 ${
                  pkg.featured
                    ? "border-accent bg-[linear-gradient(180deg,rgba(139,251,3,0.07),var(--ink-2))]"
                    : "border-line bg-ink-2"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-[1.6rem] font-extrabold leading-none text-paper">
                      {pkg.name}
                    </h3>
                    <p className="mt-2 text-[0.88rem] text-mute">
                      {pkg.tagline}
                    </p>
                  </div>
                  {pkg.badge && (
                    <span className="doc-tag flex-none">{pkg.badge}</span>
                  )}
                </div>

                <div className="mt-6 flex items-baseline gap-2 border-t border-line pt-6">
                  <span className="font-display text-[2.4rem] font-extrabold leading-none text-paper">
                    ${price.toLocaleString()}
                  </span>
                  <span className="font-mono text-[0.72rem] text-mute">
                    / mo
                  </span>
                </div>
                <p className="mt-2 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-mute">
                  {billing === "quarterly"
                    ? "Billed quarterly"
                    : "Billed monthly"}
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
                  <div className="bg-ink p-3.5">
                    <dt className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-mute">
                      Impressions
                    </dt>
                    <dd className="mt-1 font-display text-[1rem] font-bold text-paper">
                      {pkg.impressions}
                    </dd>
                  </div>
                  <div className="bg-ink p-3.5">
                    <dt className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-mute">
                      Placements
                    </dt>
                    <dd className="mt-1 font-display text-[1rem] font-bold text-paper">
                      {pkg.placements}
                    </dd>
                  </div>
                </dl>

                <p className="mt-5 text-[0.88rem] leading-[1.55] text-mute">
                  {pkg.description}
                </p>

                <ul className="doc-list mt-5 border-t border-line pt-5">
                  {pkg.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`group mt-auto pt-7 ${
                    pkg.featured ? "" : ""
                  }`}
                >
                  <span
                    className={`inline-flex w-full items-center justify-center gap-3 rounded-[11px] px-6 py-3.5 font-display text-[0.95rem] font-extrabold transition-colors ${
                      pkg.featured
                        ? "bg-accent text-ink hover:bg-accent-dim"
                        : "border border-line-strong text-paper hover:border-accent hover:text-accent"
                    }`}
                  >
                    {pkg.cta}
                    <ArrowUpRight />
                  </span>
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-6 rounded-[10px] border border-line bg-ink-2 p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="doc-tag w-fit">{ENTERPRISE.name}</span>
            <h3 className="doc-h3 mt-4 text-[1.35rem]">{ENTERPRISE.tagline}</h3>
            <p className="mt-3 max-w-[46ch] text-[0.92rem] leading-[1.6] text-mute">
              {ENTERPRISE.description}
            </p>
            <a href="#contact" className="doc-btn group mt-6">
              Talk to the media team
              <span
                aria-hidden="true"
                className="grid h-6 w-6 place-items-center rounded-full bg-ink text-accent transition-transform group-hover:translate-x-0.5"
              >
                <ArrowUpRight />
              </span>
            </a>
          </div>

          <ul className="doc-list border-t border-line pt-6 sm:columns-2 sm:gap-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            {ENTERPRISE.features.map((f) => (
              <li key={f} className="break-inside-avoid">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
