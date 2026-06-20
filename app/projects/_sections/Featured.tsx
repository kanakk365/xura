"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

type Group = {
  label: string;
  tone: "muted" | "accent";
  items: string[];
};

const OVERVIEW =
  "High-traffic retail site designed to support fast EV charging despite limited grid capacity.";

const SPECS: { label: string; value: string }[] = [
  { label: "Storage", value: "660 kWh / 1.15 MW" },
  { label: "Charging", value: "6 × 200 kW DCFC" },
  { label: "Ports", value: "12 dual-port" },
  { label: "Interconnect", value: "Sub-5 MW" },
];

const GROUPS: Group[] = [
  {
    label: "The challenge",
    tone: "muted",
    items: [
      "Constrained electrical service",
      "High peak demand during retail hours",
      "Limited nearby DC fast charging options",
      "Interconnection delays would have stalled deployment",
    ],
  },
  {
    label: "Xura's solution",
    tone: "accent",
    items: [
      "660 kWh / 1.15 MW battery energy storage system",
      "Six 200 kW dual-port DC fast chargers",
      "Storage integrated to supplement grid capacity, manage demand, and stabilize operations",
      "Sub-5 MW design to reduce interconnection risk",
    ],
  },
  {
    label: "Why it works",
    tone: "muted",
    items: [
      "Strong vehicle traffic and dwell time",
      "Limited competing fast-charging supply",
      "Battery-backed charging improves uptime and throughput",
      "System sized to real site conditions, not theoretical demand",
    ],
  },
];

export function ProjectsFeatured() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="featured"
      ref={ref}
      className="relative bg-ink py-20 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.06]"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-10 lg:px-16">
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
          Featured project
        </motion.p>

        {/* Header — title, location, status */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.1, 1] }}
          className="flex flex-col gap-5 border-b border-paper/[0.08] pb-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <h2 className="font-display tracking-normal text-[clamp(2rem,5vw,3.75rem)] font-normal leading-[1.02] text-paper">
              Michael&rsquo;s Plaza
            </h2>
            <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-paper/70">
              <span className="inline-flex items-center gap-2">
                <PinIcon />
                Eatontown, New Jersey
              </span>
              <span aria-hidden="true" className="h-3 w-px bg-paper/15" />
              <span className="text-paper/55">
                Battery Energy Storage + Level 3 EV Charging
              </span>
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 lg:items-end">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/[0.08] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
              </span>
              Under construction
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-mute">
              Target COD &middot; Q4 2025
            </span>
          </div>
        </motion.div>

        {/* Overview + key specs */}
        <div className="mt-10 grid grid-cols-1 gap-x-16 gap-y-8 lg:mt-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.1, 1] }}
            className="max-w-xl font-display tracking-normal text-[clamp(1.35rem,2.6vw,1.85rem)] font-normal leading-[1.25] text-paper/85"
          >
            {OVERVIEW}
          </motion.p>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.2, 0.7, 0.1, 1] }}
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-paper/[0.08] bg-paper/[0.06] sm:grid-cols-4"
          >
            {SPECS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col gap-1.5 bg-ink-2 p-4 sm:p-5"
              >
                <dt className="font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-mute">
                  {s.label}
                </dt>
                <dd className="font-display tracking-normal text-[clamp(1rem,2vw,1.2rem)] font-normal leading-tight text-paper">
                  {s.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Gallery — given full width to breathe */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.35, ease: [0.2, 0.7, 0.1, 1] }}
          className="mt-12 flex flex-col gap-4 sm:mt-14"
        >
          <Frame label="Site render" className="aspect-[16/9] lg:aspect-[21/9]">
            <Image
              src="/1.png"
              alt="Michael's Plaza site render"
              fill
              sizes="(min-width: 1024px) 88vw, 100vw"
              className="object-cover"
            />
          </Frame>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Frame label="Aerial" className="aspect-[16/10]">
              <Image
                src="/2.png"
                alt="Michael's Plaza aerial view"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
            </Frame>
            <Frame label="Location" className="aspect-[16/10]">
              <Image
                src="/location-map.png"
                alt="Michael's Plaza location — Eatontown, New Jersey"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
            </Frame>
          </div>
        </motion.div>

        {/* Narrative — challenge, solution, why it works as a triptych */}
        <div className="mt-14 sm:mt-16 lg:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.7, 0.1, 1] }}
            className="mb-6 flex items-center gap-4 sm:mb-8"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
              Project breakdown
            </span>
            <span
              aria-hidden="true"
              className="h-px flex-1 bg-gradient-to-r from-paper/15 to-transparent"
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
            {GROUPS.map((g, i) => (
              <GroupCard
                key={g.label}
                group={g}
                index={i}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GroupCard({
  group,
  index,
  isInView,
}: {
  group: Group;
  index: number;
  isInView: boolean;
}) {
  const accent = group.tone === "accent";
  const delay = 0.3 + index * 0.1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.1, 1] }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-colors duration-500 sm:rounded-[24px] sm:p-7 ${
        accent
          ? "border-accent/25 bg-accent/[0.05]"
          : "border-paper/[0.08] bg-ink-2/60 hover:border-paper/20"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.05]"
      />

      <div className="relative mb-5 flex items-start justify-between gap-4">
        <p
          className={`flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] ${
            accent ? "text-accent" : "text-paper/70"
          }`}
        >
          {group.label}
        </p>
        <span
          className={`font-display text-[1.5rem] font-normal leading-none ${
            accent ? "text-accent/45" : "text-paper/15"
          }`}
        >
          0{index + 1}
        </span>
      </div>

      <div
        aria-hidden="true"
        className={`relative mb-5 h-px w-full ${
          accent ? "bg-accent/20" : "bg-paper/10"
        }`}
      />

      <ul className="relative flex flex-1 flex-col gap-3.5">
        {group.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            {accent ? (
              <span
                aria-hidden="true"
                className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15"
              >
                <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                  <path
                    d="M2 6.2 4.6 8.8 10 3.6"
                    stroke="#8bfb03"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            ) : (
              <span
                aria-hidden="true"
                className="mt-2 inline-block h-px w-3 shrink-0 bg-paper/30"
              />
            )}
            <span
              className={`text-[14px] leading-[1.55] ${
                accent ? "text-paper/85" : "text-paper/60"
              }`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function Frame({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-paper/[0.08] bg-[#070707] sm:rounded-[24px] ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 grid-lines opacity-[0.12]"
      />
      <div className="absolute inset-0">{children}</div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink/50 via-transparent to-transparent"
      />
      <span className="absolute bottom-3 left-3 z-20 inline-flex items-center gap-2 rounded-full border border-paper/15 bg-ink/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-paper/70 backdrop-blur-md">
        {label}
      </span>
    </div>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 text-accent"
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

