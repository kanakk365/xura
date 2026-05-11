"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import { useRef, useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
  tag: string;
};

const FAQ_DATA: FAQItem[] = [
  {
    tag: "Storage",
    question: "Why pair charging with battery storage?",
    answer:
      "Most sites can't pull peak charging load directly from the meter. A right-sized BESS lets us shift load away from the service constraint, so chargers run on demand without a costly upgrade.",
  },
  {
    tag: "Process",
    question: "How long does a typical project take?",
    answer:
      "Six to twelve months from kickoff to live operation, including utility approvals. We sequence engineering and procurement in parallel so AHJ cycles aren't on the critical path.",
  },
  {
    tag: "Capital",
    question: "Do you provide capital for the project?",
    answer:
      "Yes—through Charge Capital Partners. We can structure host-site, lease, or PPA-style deals so the property owner has zero CapEx while still keeping operating leverage on the system.",
  },
  {
    tag: "Safety",
    question: "Are your battery systems safe to install on site?",
    answer:
      "Every system is built around UL 9540A-tested components with explicit setback, fire-suppression, and ventilation design reviewed by the AHJ. Safety dictates siting, not the other way around.",
  },
  {
    tag: "Operate",
    question: "Who operates the system once it's commissioned?",
    answer:
      "We do—through the lifecycle. Continuous monitoring, software updates, preventative maintenance, and warranty service are all included in the operating agreement.",
  },
  {
    tag: "Start",
    question: "What do you need from us to start?",
    answer:
      "A meter reading, a utility bill, and rough plans of the site. Within two weeks we can return a feasibility memo with right-sized system options and an honest read on the interconnection path.",
  },
];

export function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section
      id="faq"
      ref={ref}
      className="relative bg-ink py-24 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
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
              className="font-display tracking-normal text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.05]  text-paper"
            >
              Things owners ask{" "}
              <span className="italic text-accent">first</span>
              .
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.1, 1] }}
              className="mt-7 max-w-md text-base leading-relaxed text-paper/65"
            >
              Real questions from real conversations with property owners,
              fleet operators, and capital partners.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-10 hidden lg:block"
            >
              <svg
                viewBox="0 0 280 80"
                fill="none"
                className="w-[280px]"
                aria-hidden="true"
              >
                <motion.path
                  d="M4 70 C 60 70 60 16 130 16 S 220 70 276 70"
                  stroke="rgba(139,251,3,0.4)"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                  fill="none"
                  initial={{ pathLength: reduce ? 1 : 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{
                    duration: 2,
                    delay: 0.4,
                    ease: [0.2, 0.7, 0.1, 1],
                  }}
                />
                <circle cx="4" cy="70" r="3" fill="#8bfb03" />
                <circle cx="276" cy="70" r="3" fill="#8bfb03" />
                <circle cx="130" cy="16" r="2.5" fill="#8bfb03" />
                <circle
                  cx="130"
                  cy="16"
                  r="6"
                  stroke="#8bfb03"
                  strokeOpacity="0.4"
                  fill="none"
                />
              </svg>
            </motion.div>
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
                    delay: 0.25 + i * 0.07,
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
                    className="flex w-full items-center gap-4 px-6 py-5 text-left sm:px-7 sm:py-6"
                  >
                    <span className="hidden shrink-0 rounded-full border border-paper/[0.08] bg-paper/[0.02] px-2.5 py-1 text-[10px] font-medium tracking-[0.08em] text-paper/65 md:inline-flex md:items-center md:gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {item.tag}
                    </span>
                    <span className="flex-1 font-display tracking-normal text-lg font-normal text-paper sm:text-xl">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.2, 0.7, 0.1, 1] }}
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
                        isOpen
                          ? "border-accent/50 bg-accent/10 text-accent"
                          : "border-paper/15 bg-paper/[0.03] text-paper/70"
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
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
                        transition={{
                          duration: 0.4,
                          ease: [0.2, 0.7, 0.1, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-6 sm:px-7 sm:pb-7 sm:pl-[5.5rem]">
                          <div className="mb-5 flex items-center gap-3">
                            <div className="h-px flex-1 bg-paper/10" />
                            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-mute">
                              Answer
                            </span>
                            <div className="h-px flex-1 bg-paper/10" />
                          </div>
                          <p className="max-w-2xl text-base leading-relaxed text-paper/75">
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
                      transition={{
                        duration: 0.6,
                        ease: [0.2, 0.7, 0.1, 1],
                      }}
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
