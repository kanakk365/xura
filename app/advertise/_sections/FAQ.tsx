"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type FAQItem = {
  tag: string;
  question: string;
  answer: string;
};

const FAQ_DATA: FAQItem[] = [
  {
    tag: "Fit",
    question: "Who actually runs ads on Xura?",
    answer:
      "Categories that intersect with our readers — EV charging hardware, battery cells, EPC firms, software for energy operators, infrastructure capital, and adjacent B2B services. We curate fit before accepting briefs.",
  },
  {
    tag: "Pricing",
    question: "Why flat pricing instead of CPM auctions?",
    answer:
      "Auctions optimize for volume, not relevance. We cap inventory and price by tier so advertisers get predictable cost and predictable context — and so the site doesn't turn into a feed of competing ads.",
  },
  {
    tag: "Formats",
    question: "What ad formats and assets do you accept?",
    answer:
      "Static (PNG, SVG), short loops (WebM, animated SVG), and native cards using our component shell. No third-party scripts, no autoplay audio, no pop-ups. All creative must pass our accessibility and weight checks.",
  },
  {
    tag: "Launch",
    question: "How fast can a campaign go live?",
    answer:
      "Typical brief-to-launch is five business days. Express launches in 48 hours are available on Surge and Voltage when creative is ready and inventory is open.",
  },
  {
    tag: "Reporting",
    question: "How are impressions verified?",
    answer:
      "We use IAB-aligned viewability standards (50% pixels in view for one second for static, two for video). Reports include verified impressions, viewability rate, CTR, and per-surface breakdown.",
  },
  {
    tag: "Targeting",
    question: "Can I target a specific audience segment?",
    answer:
      "On Surge we offer audience segment targeting (e.g. fleet, CRE, capital). Voltage adds persona-level filtering and 1:1 deterministic targeting for high-intent campaigns.",
  },
  {
    tag: "Policy",
    question: "What's your editorial policy?",
    answer:
      "We don't run ads for fossil-fuel marketing, ICE vehicles, or claims that misrepresent grid or emissions data. Editorial team reviews every creative before approval.",
  },
  {
    tag: "Cancellation",
    question: "What are the commitment terms?",
    answer:
      "Pulse runs in 30-day flights. Surge requires a 90-day commitment. Voltage is a 6-month minimum with a 30-day pause window. Bespoke is negotiated annually.",
  },
];

export function AdvertiseFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="advertise-faq" className="doc-section">
      <div className="doc-shell">
        <p className="kicker">FAQ</p>

        <h2 className="doc-h2 mt-4 max-w-[24ch]">
          Questions media <span className="text-accent">buyers</span> ask first.
        </h2>

        <p className="doc-lead mt-3.5">
          The most common things brand marketers, programmatic teams, and agency
          planners want answered before booking.
        </p>

        <ul className="mt-9 divide-y divide-line overflow-hidden rounded-[10px] border border-line bg-ink-2">
          {FAQ_DATA.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `adv-faq-panel-${i}`;
            const buttonId = `adv-faq-button-${i}`;

            return (
              <li key={item.question}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center gap-5 px-5 py-4 text-left transition-colors hover:bg-white/[0.02] sm:px-7"
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
      </div>
    </section>
  );
}
