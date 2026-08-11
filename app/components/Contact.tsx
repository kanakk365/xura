"use client";

import { useState } from "react";

import { ArrowUpRight } from "./icons";

const SITE_TYPES = [
  "Fleet depot",
  "Commercial CRE",
  "Multifamily",
  "Industrial / other",
];

const TIMELINES = ["< 6 months", "6–12 months", "12+ months", "Exploring"];

const QUALIFIERS = [
  "Electrical infrastructure & capacity assessment",
  "Interconnection and permitting feasibility",
  "Right-sized system options before contracts",
];

const NEXT_STEPS = [
  "We review the property and its existing electrical service.",
  "We confirm what the utility can actually support at that site.",
  "You get right-sized options, before any design or capital commitment.",
];

export function Contact() {
  const [siteType, setSiteType] = useState(SITE_TYPES[0]);
  const [timeline, setTimeline] = useState(TIMELINES[1]);

  return (
    <section id="contact" className="doc-section">
      <div className="doc-shell">
        <p className="kicker">Contact</p>

        <h2 className="doc-h2 mt-4 max-w-[24ch]">
          Start with a <span className="text-accent">site review</span>.
        </h2>

        <p className="doc-lead mt-3.5">
          Every site presents different constraints. A site review provides the
          clarity needed to evaluate feasibility and define a realistic path
          forward &mdash; before design or capital decisions are made.
        </p>

        {/* Both cards stretch to the same height; the left card distributes
            its three blocks so it fills rather than leaving dead space. */}
        <div className="mt-9 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="doc-card flex flex-col bg-[linear-gradient(180deg,rgba(139,251,3,0.06),var(--ink-2))] p-6 sm:p-8">
            <span className="doc-tag w-fit">What you get</span>

            <ul className="mt-5 flex flex-col gap-3.5">
              {QUALIFIERS.map((line) => (
                <li key={line} className="flex items-start gap-3 text-[0.95rem] text-paper/80">
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

            <div className="mt-7 border-t border-line pt-6">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-accent">
                What happens next
              </p>
              <ol className="mt-4 flex flex-col gap-3.5">
                {NEXT_STEPS.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-px grid h-5 w-5 flex-none place-items-center rounded-[4px] border border-line font-mono text-[0.62rem] font-bold text-accent">
                      {i + 1}
                    </span>
                    <span className="text-[0.9rem] leading-[1.5] text-mute">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-auto border-t border-line pt-6">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-accent">
                Direct line
              </p>
              <p className="mt-3 font-display text-[1.4rem] font-extrabold leading-none text-paper">
                Tom Dwyer
              </p>
              <div className="mt-3.5 flex flex-col gap-2 font-mono text-[0.86rem]">
                <a
                  href="mailto:td@xura.co"
                  className="w-fit text-paper/80 transition-colors hover:text-accent"
                >
                  td@xura.co
                </a>
                <a
                  href="tel:+19176645625"
                  className="w-fit text-paper/80 transition-colors hover:text-accent"
                >
                  917-664-5625
                </a>
              </div>
              <p className="mt-5 text-[0.85rem] leading-[1.6] text-mute">
                No cost, no obligation. A 20-minute call is enough to tell you
                whether the site is worth pursuing.
              </p>
            </div>
          </div>

          <form
            className="doc-card flex flex-col gap-5 p-6 sm:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="doc-tag">Project intake</span>
              <span className="font-mono text-[0.68rem] text-mute">
                ~ 2 min
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Name" id="ct-name" placeholder="Jane Doe" />
              <Field label="Company" id="ct-company" placeholder="Acme Logistics" />
            </div>

            <Field
              label="Email"
              id="ct-email"
              type="email"
              placeholder="jane@acme.com"
            />

            <ChoiceGroup
              label="Site type"
              name="site-type"
              value={siteType}
              onChange={setSiteType}
              options={SITE_TYPES}
            />

            <ChoiceGroup
              label="Timeline"
              name="timeline"
              value={timeline}
              onChange={setTimeline}
              options={TIMELINES}
            />

            <div className="flex flex-col gap-2">
              <label htmlFor="ct-notes" className="doc-label">
                Notes
              </label>
              <textarea
                id="ct-notes"
                rows={3}
                placeholder="Service size, parking count, anything else..."
                className="doc-input resize-none"
              />
            </div>

            <button type="submit" className="doc-btn group mt-1 w-full">
              Request a site review
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
                  active ? "bg-accent" : "bg-mute-2"
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
