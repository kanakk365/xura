"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

type Step = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  meta: { label: string; value: string }[];
  tag: string;
  image: string;
};

const STEPS: Step[] = [
  {
    id: "site-evaluation",
    number: "01",
    eyebrow: "Site Evaluation",
    title: "Understand the property first.",
    description:
      "We evaluate the physical site, existing electrical infrastructure, and how the property operates day to day — before a single drawing is produced.",
    meta: [
      { label: "Physical", value: "Site" },
      { label: "Existing", value: "Electrical" },
      { label: "Day-to-day", value: "Operations" },
    ],
    tag: "EVAL",
    image: "/1.png",
  },
  {
    id: "grid-review",
    number: "02",
    eyebrow: "Grid Review",
    title: "Define what’s feasible.",
    description:
      "Grid capacity, interconnection requirements, and permitting considerations are assessed early — establishing realistic boundaries, not theoretical ones.",
    meta: [
      { label: "Grid", value: "Capacity" },
      { label: "Utility", value: "Interconnect" },
      { label: "AHJ", value: "Permitting" },
    ],
    tag: "GRID",
    image: "/2.png",
  },
  {
    id: "system-design",
    number: "03",
    eyebrow: "System Design",
    title: "Right-size the solution.",
    description:
      "Charging and storage are designed around site conditions, usage patterns, and long-term performance — never around assumptions or stock configurations.",
    meta: [
      { label: "Site", value: "Conditions" },
      { label: "Usage", value: "Patterns" },
      { label: "Long-term", value: "Performance" },
    ],
    tag: "DESIGN",
    image: "/3.png",
  },
  {
    id: "delivery-operation",
    number: "04",
    eyebrow: "Delivery & Operation",
    title: "Build what will last.",
    description:
      "Projects move forward with clear scope, coordinated approvals, and systems designed to be built, permitted, and operated reliably — long after commissioning.",
    meta: [
      { label: "Scope", value: "Defined" },
      { label: "Approvals", value: "Coordinated" },
      { label: "Operate", value: "Reliably" },
    ],
    tag: "LIVE",
    image: "/4.png",
  },
];

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="projects" ref={ref} className="doc-section">
      <div className="doc-shell">
        <p className="kicker">Approach</p>

        <h2 className="doc-h2 mt-4 max-w-[24ch]">
          Designed for{" "}
          <span className="text-accent">fleet-level operations</span>.
        </h2>

        <p className="doc-lead mt-3.5">
          Fleet electrification exposes grid, load, and scheduling constraints
          early. Every site walks the same disciplined arc &mdash; and each step
          compounds on the last.
        </p>

        {/* Index strip — one bordered band split into four equal cells by
            hairlines, so the four phases read at a glance before the detail. */}
        <ol className="mt-9 grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.id} className="flex flex-col gap-3 bg-ink-2 p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mark text-[1.9rem] leading-none text-accent">
                  {step.number}
                </span>
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-mute">
                  {step.tag}
                </span>
              </div>
              <p className="font-display text-[1.02rem] font-bold leading-[1.25] text-paper">
                {step.eyebrow}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col gap-4">
          {STEPS.map((step, i) => (
            <motion.article
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.08,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className="doc-figure grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]"
            >
              <div className="order-2 flex flex-col p-6 sm:p-8 lg:order-1">
                <span className="doc-tag w-fit">
                  {step.tag} &middot; {step.number} /{" "}
                  {String(STEPS.length).padStart(2, "0")}
                </span>

                <h3 className="doc-h3 mt-4 text-[1.35rem]">{step.title}</h3>

                <p className="mt-3 max-w-[46ch] text-[0.92rem] leading-[1.6] text-mute">
                  {step.description}
                </p>

                <dl className="mt-auto grid grid-cols-3 gap-x-3 border-t border-line pt-4 sm:mt-6">
                  {step.meta.map((m) => (
                    <div key={m.label} className="flex flex-col gap-1.5">
                      <dt className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-mute">
                        {m.label}
                      </dt>
                      <dd className="font-display text-[0.95rem] font-bold leading-none text-paper">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="relative order-1 aspect-[16/10] overflow-hidden border-b border-line bg-[#080808] lg:order-2 lg:aspect-auto lg:border-b-0 lg:border-l">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
