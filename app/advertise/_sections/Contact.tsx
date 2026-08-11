"use client";

import { useState } from "react";

import { ArrowUpRight } from "../../components/icons";

const TIERS = ["Pulse", "Surge", "Voltage", "Bespoke"];
const BUDGETS = ["< $5k / mo", "$5–25k / mo", "$25–100k / mo", "$100k+ / mo"];
const START_WINDOWS = ["Within 2 weeks", "This quarter", "Next quarter", "Exploring"];

const DELIVERABLES = [
  "Inventory availability for your start window",
  "Recommended placement mix for your goal",
  "Creative spec sheet & launch checklist",
];

export function AdvertiseContact() {
  const [tier, setTier] = useState(TIERS[1]);
  const [budget, setBudget] = useState(BUDGETS[1]);
  const [start, setStart] = useState(START_WINDOWS[1]);

  return (
    <section id="advertise-contact" className="doc-section">
      <div className="doc-shell">
        <p className="kicker">Contact</p>

        <h2 className="doc-h2 mt-4 max-w-[24ch]">
          Get a <span className="text-accent">media plan</span> in your inbox.
        </h2>

        <p className="doc-lead mt-3.5">
          Tell us a little about your brand, who you&rsquo;re trying to reach,
          and the slot you&rsquo;re eyeing. We&rsquo;ll come back with
          availability, pricing, and a creative checklist within 1 business day.
        </p>

        <div className="mt-9 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="doc-card flex flex-col bg-[linear-gradient(180deg,rgba(139,251,3,0.06),var(--ink-2))] p-6 sm:p-8">
            <span className="doc-tag w-fit">What you get back</span>

            <ul className="mt-5 flex flex-col gap-3.5">
              {DELIVERABLES.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 text-[0.95rem] text-paper/80"
                >
                  <svg
                    aria-hidden="true"
                    width="19"
                    height="19"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="mt-0.5 flex-none"
                  >
                    <path
                      d="M4 10.5L8 14.5L16 5.5"
                      stroke="#8bfb03"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-auto border-t border-line pt-6">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-accent">
                Direct
              </p>
              <a
                href="mailto:media@xura.com"
                className="mt-3 block w-fit font-mono text-[0.95rem] text-paper/80 transition-colors hover:text-accent"
              >
                media@xura.com
              </a>
              <p className="mt-5 text-[0.85rem] leading-[1.6] text-mute">
                One business day turnaround. No auction, no bidding, no surprise
                rate cards.
              </p>
            </div>
          </div>

          <form
            className="doc-card flex flex-col gap-5 p-6 sm:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="doc-tag">Media brief</span>
              <span className="font-mono text-[0.68rem] text-mute">~ 2 min</span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Brand" id="ad-brand" placeholder="Acme Energy" />
              <Field label="Name" id="ad-name" placeholder="Jane Doe" />
            </div>

            <Field
              label="Work email"
              id="ad-email"
              type="email"
              placeholder="jane@brand.co"
            />

            <ChoiceGroup
              label="Tier of interest"
              name="ad-tier"
              value={tier}
              onChange={setTier}
              options={TIERS}
            />

            <ChoiceGroup
              label="Monthly budget"
              name="ad-budget"
              value={budget}
              onChange={setBudget}
              options={BUDGETS}
            />

            <ChoiceGroup
              label="Start window"
              name="ad-start"
              value={start}
              onChange={setStart}
              options={START_WINDOWS}
            />

            <div className="flex flex-col gap-2">
              <label htmlFor="ad-notes" className="doc-label">
                Campaign notes
              </label>
              <textarea
                id="ad-notes"
                rows={3}
                placeholder="Goals, audience, creative direction..."
                className="doc-input resize-none"
              />
            </div>

            <button type="submit" className="doc-btn group mt-1 w-full">
              Request a media plan
              <span
                aria-hidden="true"
                className="grid h-6 w-6 place-items-center rounded-full bg-ink text-accent transition-transform group-hover:translate-x-0.5"
              >
                <ArrowUpRight />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="doc-label">
        {label}
      </label>
      <input id={id} type={type} placeholder={placeholder} className="doc-input" />
    </div>
  );
}

function ChoiceGroup({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="doc-label mb-2">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = option === value;
          return (
            <label
              key={option}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-lg border px-3.5 py-2 text-[0.85rem] transition-colors duration-200 ${
                active
                  ? "border-accent bg-[var(--accent-wash)] text-accent"
                  : "border-line bg-[#080808] text-mute hover:border-line-strong"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={option}
                checked={active}
                onChange={() => onChange(option)}
                className="sr-only"
              />
              <span
                aria-hidden="true"
                className={`h-1.5 w-1.5 rounded-[2px] ${
                  active ? "bg-accent" : "bg-mute"
                }`}
              />
              {option}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
