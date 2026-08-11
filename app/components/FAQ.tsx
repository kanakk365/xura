"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
  tag: string;
};

const FAQ_DATA: FAQItem[] = [
  {
    tag: "Storage",
    question: "What is battery energy storage in a commercial setting?",
    answer:
      "Battery energy storage systems (BESS) store electricity on-site and discharge it when needed to support operations, manage demand, or supplement limited grid capacity. In commercial and fleet environments, storage is often used to enable electrification where utility power alone is insufficient.",
  },
  {
    tag: "Grid",
    question: "Why is energy storage becoming more important for electrification?",
    answer:
      "As electrification demand increases, many sites face constrained grid capacity and long interconnection timelines. Battery storage helps bridge this gap by allowing sites to operate within existing electrical limits rather than relying on uncertain utility upgrades.",
  },
  {
    tag: "System",
    question: "Is battery storage a standalone solution or part of a larger system?",
    answer:
      "At Xura, battery storage is treated as enabling infrastructure, not a standalone asset. It is deployed when it improves feasibility, reliability, or performance of site-level electrification, often alongside Level 3 EV charging and load management.",
  },
  {
    tag: "Site fit",
    question: "When does it make sense to add battery storage to a site?",
    answer:
      "Battery storage is typically considered when electrical capacity is limited, peak demand would trigger costly upgrades, high-power charging must occur within defined windows, or operational reliability is critical. Each site receives individual evaluation.",
  },
  {
    tag: "Upgrades",
    question: "How does battery storage help avoid utility upgrades?",
    answer:
      "By supplying power during peak demand or charging windows, battery storage can reduce strain on the grid connection. This allows sites to support higher loads without increasing their utility service size, avoiding costly and time-consuming upgrades in many cases.",
  },
  {
    tag: "Design",
    question: "How does Xura approach the design of battery energy storage systems?",
    answer:
      "Xura designs storage systems around real site conditions, including load profiles, operating schedules, and grid constraints. Systems are sized and configured to support long-term performance rather than theoretical capacity.",
  },
  {
    tag: "Safety",
    question: "What about safety and long-term operation?",
    answer:
      "Safety and operational reliability are core considerations. Xura designs storage systems with appropriate controls, monitoring, and operational discipline to ensure assets operate safely and perform as intended over time.",
  },
  {
    tag: "Customers",
    question: "Who benefits most from battery energy storage?",
    answer:
      "Battery energy storage benefits fleet and logistics operations, commercial properties with constrained power, sites deploying high-power EV charging, and properties seeking predictable, reliable electrification.",
  },
  {
    tag: "Process",
    question: "How does a battery storage project typically begin?",
    answer:
      "Projects usually start with a site review to assess electrical infrastructure, operating requirements, and feasibility before design or capital decisions are made.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="doc-section">
      <div className="doc-shell">
        <p className="kicker">FAQ</p>

        <h2 className="doc-h2 mt-4 max-w-[24ch]">
          Things owners ask <span className="text-accent">first</span>.
        </h2>

        <p className="doc-lead mt-3.5">
          Real questions from real conversations with property owners, fleet
          operators, and capital partners.
        </p>

        {/* One list, hairline-divided. Previously each question was its own
            bordered box with a 120px tag pill, which read as clutter. */}
        <ul className="mt-9 divide-y divide-line overflow-hidden rounded-[10px] border border-line bg-ink-2">
          {FAQ_DATA.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;

            return (
              <li key={item.question}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="group flex w-full items-center gap-5 px-5 py-4 text-left transition-colors hover:bg-white/[0.02] sm:px-7"
                  >
                    <span
                      className={`flex-1 font-display text-[1rem] font-bold leading-[1.35] transition-colors sm:text-[1.05rem] ${
                        isOpen ? "text-accent" : "text-paper"
                      }`}
                    >
                      {item.question}
                    </span>

                    <span className="hidden font-mono text-[0.62rem] uppercase tracking-[0.16em] text-mute md:block">
                      {item.tag}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`grid h-6 w-6 flex-none place-items-center transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-accent" : "text-mute"
                      }`}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M2 5L7 10L12 5"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[80ch] px-5 pb-6 text-[0.95rem] leading-[1.7] text-paper/70 sm:px-7">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <div className="doc-callout mt-6">
          Every site is different. The only reliable answer comes from a
          <b> no-cost site review</b> — electrical capacity, interconnection,
          and constructability assessed against your actual property.
        </div>
      </div>
    </section>
  );
}
