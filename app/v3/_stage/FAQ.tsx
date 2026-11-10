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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section
      id="faq"
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
              className="font-display tracking-normal text-[clamp(1.85rem,6vw,3.5rem)] font-normal leading-[1.05]  text-paper"
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
