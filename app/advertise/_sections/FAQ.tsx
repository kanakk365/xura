"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef, useState } from "react";

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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="advertise-faq"
      ref={ref}
      className="relative bg-ink py-20 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.1, 1] }}
              className="mb-5 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-mute"
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
                <span className="absolute -inset-1 rounded-full bg-accent/30 blur-[3px]" />
              </span>
              FAQ
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.1, 1] }}
              className="font-display tracking-normal text-[clamp(1.85rem,6vw,3.5rem)] font-normal leading-[1.05] text-paper"
            >
              Questions media{" "}
              <span className="italic text-accent">buyers</span> ask first.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.1, 1] }}
              className="mt-7 max-w-md text-base leading-relaxed text-paper/65"
            >
              The most common things brand marketers, programmatic teams, and
              agency planners want answered before booking.
            </motion.p>
          </div>

          <ul className="flex flex-col gap-2">
            {FAQ_DATA.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.li
                  key={item.question}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.25 + i * 0.06,
                    ease: [0.2, 0.7, 0.1, 1],
                  }}
                  className={`group relative overflow-hidden rounded-2xl border transition-colors duration-500 ${
                    isOpen
                      ? "border-accent/35 bg-ink-2/80"
                      : "border-paper/[0.08] bg-ink-2/40 hover:border-paper/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-3 px-5 py-4 text-left sm:gap-4 sm:px-7 sm:py-6"
                  >
                    <span className="hidden shrink-0 rounded-full border border-paper/[0.08] bg-paper/[0.02] px-2.5 py-1 text-[10px] font-medium tracking-[0.08em] text-paper/65 md:inline-flex md:items-center md:gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {item.tag}
                    </span>
                    <span className="flex-1 font-display tracking-normal text-[16px] font-normal text-paper sm:text-xl">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.2, 0.7, 0.1, 1] }}
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors duration-300 sm:h-9 sm:w-9 ${
                        isOpen
                          ? "border-accent/50 bg-accent/10 text-accent"
                          : "border-paper/15 bg-paper/[0.03] text-paper/70"
                      }`}
                      aria-hidden="true"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M7 1V13M1 7H13"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.2, 0.7, 0.1, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 sm:px-7 sm:pb-7 sm:pl-[5.5rem]">
                          <div className="mb-4 flex items-center gap-3 sm:mb-5">
                            <div className="h-px flex-1 bg-paper/10" />
                            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-mute">
                              Answer
                            </span>
                            <div className="h-px flex-1 bg-paper/10" />
                          </div>
                          <p className="max-w-2xl text-[14.5px] leading-relaxed text-paper/75 sm:text-base">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {isOpen && (
                    <motion.div
                      aria-hidden="true"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.1, 1] }}
                      className="absolute inset-x-6 bottom-0 h-px origin-left bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0"
                    />
                  )}
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
