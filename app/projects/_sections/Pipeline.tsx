"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

type Site = {
  name: string;
  location: string;
  capacity: string;
};

const SITES: Site[] = [
  { name: "White Horse Road", location: "Voorhees Township, NJ", capacity: "660 kW" },
  { name: "Connor Street", location: "Bronx, NY", capacity: "2 MW" },
  { name: "Hutchinson Avenue", location: "Bronx, NY", capacity: "4 MW" },
  { name: "Sayville Plaza", location: "Bohemia, NY", capacity: "660 kW" },
];

export function ProjectsPipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="pipeline"
      ref={ref}
      className="relative bg-ink py-20 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.05]"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.2, 0.7, 0.1, 1] }}
            className="relative overflow-hidden rounded-2xl border border-paper/[0.08] bg-[#070707] sm:rounded-[28px]"
          >
            <Image
              src="/pipeline-map.png"
              alt="Pipeline sites — future BESS deployments across the Northeast"
              width={962}
              height={503}
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="block h-auto w-full"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-paper/[0.06] sm:rounded-[28px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0.7, 0.1, 1] }}
            className="border-l border-paper/15 pl-6 sm:pl-8"
          >
            <p className="mb-4 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-mute">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
                <span className="absolute -inset-1 rounded-full bg-accent/30 blur-[3px]" />
              </span>
              Pipeline
            </p>
            <h2 className="font-display tracking-normal text-[clamp(1.85rem,5vw,3.5rem)] font-normal leading-[1.05] text-paper">
              Project Pipeline
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-paper/70 sm:text-base">
              Xura has built a robust pipeline of battery storage and EV charging
              projects, positioning us at the forefront of addressing regional
              grid constraints while capitalizing on attractive incentive
              structures.
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-paper/70 sm:text-base">
              This foundation reflects our disciplined approach to site selection
              and scale of opportunities secured. We are now expanding into
              additional states, creating a diversified portfolio designed to
              deliver long-term stability and growth for investors.
            </p>
          </motion.div>
        </div>

        <div className="mt-12 sm:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.7, 0.1, 1] }}
            className="mb-5 flex items-center justify-between gap-4"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
              Selected sites
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
              300+ across NY &amp; NJ
            </span>
          </motion.div>

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {SITES.map((site, i) => (
              <SiteCard
                key={site.name}
                site={site}
                index={i}
                isInView={isInView}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SiteCard({
  site,
  index,
  isInView,
}: {
  site: Site;
  index: number;
  isInView: boolean;
}) {
  const delay = 0.35 + index * 0.08;

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.1, 1] }}
      className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-paper/[0.08] bg-ink-2/60 p-5 transition-colors duration-500 hover:border-accent/30 sm:p-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.05]"
      />
      <span className="relative font-display tracking-normal text-[1.6rem] font-normal leading-none text-accent">
        {site.capacity}
      </span>
      <div className="relative mt-1">
        <h3 className="font-display tracking-normal text-[1.1rem] font-normal leading-tight text-paper">
          {site.name}
        </h3>
        <p className="mt-1.5 flex items-center gap-2 text-[12px] text-paper/55">
          <PinIcon />
          {site.location}
        </p>
      </div>
    </motion.li>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 shrink-0 text-accent/80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
