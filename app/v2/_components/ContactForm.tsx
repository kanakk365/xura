"use client";

import { useState, type ReactNode } from "react";

import { ArrowUpRight } from "../../components/icons";
import { SectionHead } from "./SectionHead";

type Choice = { label: string; name: string; options: string[] };
type FieldDef = { label: string; id: string; type?: string; placeholder?: string };

export function ContactForm({
  kicker = "Contact",
  title,
  lead,
  tag,
  points,
  choices,
  fields,
  notesPlaceholder,
  submitLabel,
  idPrefix,
}: {
  kicker?: string;
  title: ReactNode;
  lead: string;
  tag: string;
  points: string[];
  choices: Choice[];
  fields: FieldDef[];
  notesPlaceholder: string;
  submitLabel: string;
  idPrefix: string;
}) {
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(choices.map((c) => [c.name, c.options[0]])),
  );

  return (
    <section id="contact" className="doc-section">
      <div className="doc-shell">
        <SectionHead kicker={kicker} title={title} lead={lead} />

        <div className="mt-9 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="doc-card flex flex-col bg-[linear-gradient(180deg,rgba(139,251,3,0.06),var(--ink-2))] p-6 sm:p-8">
            <span className="doc-tag w-fit">What you get</span>
            <ul className="mt-5 flex flex-col gap-3.5">
              {points.map((line) => (
                <li key={line} className="flex items-start gap-3 text-[0.95rem] text-paper/80">
                  <svg aria-hidden="true" width="19" height="19" viewBox="0 0 20 20" fill="none" className="mt-0.5 flex-none">
                    <path d="M4 10.5L8 14.5L16 5.5" stroke="#8bfb03" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-auto border-t border-line pt-6">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-accent">Direct line</p>
              <p className="mt-3 font-display text-[1.4rem] font-extrabold leading-none text-paper">Tom Dwyer</p>
              <div className="mt-3.5 flex flex-col gap-2 font-mono text-[0.86rem]">
                <a href="mailto:td@xura.co" className="w-fit text-paper/80 transition-colors hover:text-accent">td@xura.co</a>
                <a href="tel:+19176645625" className="w-fit text-paper/80 transition-colors hover:text-accent">917-664-5625</a>
              </div>
              <p className="mt-5 text-[0.85rem] leading-[1.6] text-mute">
                No cost, no obligation. A 20-minute call is enough to tell you whether it is worth pursuing.
              </p>
            </div>
          </div>

          <form className="doc-card flex flex-col gap-5 p-6 sm:p-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center justify-between gap-4">
              <span className="doc-tag">{tag}</span>
              <span className="font-mono text-[0.68rem] text-mute">~ 2 min</span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {fields.slice(0, 2).map((f) => (
                <Field key={f.id} {...f} id={`${idPrefix}-${f.id}`} />
              ))}
            </div>
            {fields.slice(2).map((f) => (
              <Field key={f.id} {...f} id={`${idPrefix}-${f.id}`} />
            ))}

            {choices.map((c) => (
              <fieldset key={c.name} className="flex flex-col gap-2">
                <legend className="doc-label mb-2">{c.label}</legend>
                <div className="flex flex-wrap gap-2">
                  {c.options.map((option) => {
                    const active = values[c.name] === option;
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
                          name={`${idPrefix}-${c.name}`}
                          value={option}
                          checked={active}
                          onChange={() => setValues((v) => ({ ...v, [c.name]: option }))}
                          className="sr-only"
                        />
                        <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-[2px] ${active ? "bg-accent" : "bg-mute-2"}`} />
                        {option}
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            ))}

            <div className="flex flex-col gap-2">
              <label htmlFor={`${idPrefix}-notes`} className="doc-label">Notes</label>
              <textarea id={`${idPrefix}-notes`} rows={3} placeholder={notesPlaceholder} className="doc-input resize-none" />
            </div>

            <button type="submit" className="doc-btn group mt-1 w-full">
              {submitLabel}
              <span aria-hidden="true" className="grid h-6 w-6 place-items-center rounded-full bg-ink text-accent transition-transform group-hover:translate-x-0.5">
                <ArrowUpRight />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text", placeholder }: FieldDef) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="doc-label">{label}</label>
      <input id={id} type={type} placeholder={placeholder} className="doc-input" />
    </div>
  );
}
