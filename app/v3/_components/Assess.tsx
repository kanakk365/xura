"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type FormEvent, type ReactNode } from "react";

import { Arrow, Check, EASE, SectionHead } from "./primitives";

type Field =
  | { kind: "text"; name: string; label: string; placeholder: string; type?: string; required?: boolean }
  | { kind: "select"; name: string; label: string; options: string[] }
  | { kind: "textarea"; name: string; label: string; placeholder: string };

/** Contact block shared by all three pages: a "what you get" plate on the
 *  left and the intake form on the right, always the same height. */
export function Assess({
  kicker,
  title,
  lead,
  covers,
  coversTitle,
  formTitle,
  fields,
  submit,
  success,
}: {
  kicker: string;
  title: ReactNode;
  lead: string;
  coversTitle: string;
  covers: { title: string; body: string }[];
  formTitle: string;
  fields: Field[];
  submit: string;
  success: { title: string; body: string };
}) {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="op-section">
      <div className="op-shell">
        <SectionHead kicker={kicker} title={title} lead={lead} />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="op-plate bg-[radial-gradient(120%_80%_at_0%_0%,rgba(139,251,3,0.09),transparent_60%)]">
            <div className="op-plate-bar">
              <span>
                <b>{coversTitle}</b>
              </span>
            </div>
            <ul className="flex flex-1 flex-col">
              {covers.map((c, i) => (
                <li key={c.title} className={`flex flex-1 gap-4 px-6 py-5 sm:px-8 ${i > 0 ? "border-t border-paper/[0.07]" : ""}`}>
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/12 text-accent ring-1 ring-accent/40">
                    <Check />
                  </span>
                  <div>
                    <p className="font-display text-[1.05rem] leading-snug text-paper">{c.title}</p>
                    <p className="mt-1 text-[14px] leading-[1.6] text-mute">{c.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-1 border-t border-paper/[0.08] sm:grid-cols-2">
              <div className="px-6 py-5 sm:px-8">
                <p className="op-label">Direct line</p>
                <p className="mt-2 font-display text-[1.15rem] text-paper">Tom Dwyer</p>
              </div>
              <div className="flex flex-col justify-center gap-1 border-t border-paper/[0.08] px-6 py-5 font-mono text-[13px] text-paper/80 sm:border-l sm:border-t-0 sm:px-8">
                <a href="mailto:td@xura.co" className="hover:text-accent">td@xura.co</a>
                <a href="tel:9176645625" className="hover:text-accent">917-664-5625</a>
              </div>
            </div>
          </div>

          <div className="op-plate">
            <div className="op-plate-bar">
              <span>
                <b>{formTitle}</b>
              </span>
              <span>~2 min</span>
            </div>
            <div className="relative grid min-w-0 flex-1 grid-cols-1">
              <AnimatePresence initial={false} mode="popLayout">
                {sent ? (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="col-start-1 row-start-1 flex flex-col items-start justify-center gap-5 p-8 sm:p-10"
                    role="status"
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-ink">
                      <Check className="h-6 w-6" />
                    </span>
                    <h3 className="op-h3">{success.title}</h3>
                    <p className="max-w-[46ch] text-[15px] leading-[1.65] text-paper/60">{success.body}</p>
                    <button type="button" onClick={() => setSent(false)} className="op-btn-ghost mt-2">
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="col-start-1 row-start-1 flex min-w-0 flex-col gap-5 p-6 sm:p-8"
                  >
                    {fields.map((f) => (
                      <label key={f.name} className={`flex min-w-0 flex-col gap-2 ${f.kind === "textarea" ? "flex-1" : ""}`}>
                        <span className="op-label">{f.label}</span>
                        {f.kind === "text" && (
                          <input
                            name={f.name}
                            type={f.type ?? "text"}
                            required={f.required}
                            placeholder={f.placeholder}
                            className="op-input"
                          />
                        )}
                        {f.kind === "select" && (
                          <select name={f.name} className="op-input op-select" defaultValue={f.options[0]}>
                            {f.options.map((o) => (
                              <option key={o}>{o}</option>
                            ))}
                          </select>
                        )}
                        {f.kind === "textarea" && (
                          <textarea name={f.name} placeholder={f.placeholder} rows={3} className="op-input min-h-[96px] flex-1 resize-none" />
                        )}
                      </label>
                    ))}
                    <button type="submit" className="op-btn group mt-1 !h-auto min-h-12 w-full justify-between gap-3 py-2 text-left !whitespace-normal">
                      <span className="pl-1">{submit}</span>
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-accent transition-transform group-hover:translate-x-0.5">
                        <Arrow />
                      </span>
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
