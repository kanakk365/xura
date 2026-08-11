import Image from "next/image";
import type { ReactNode } from "react";

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
  return (
    <section id="featured" className="doc-section">
      <div className="doc-shell">
        <p className="kicker">Featured project</p>

        <div className="mt-4 flex flex-col gap-5 border-b border-line pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="doc-h2">Michael&rsquo;s Plaza</h2>
            <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.9rem] text-mute">
              <span className="inline-flex items-center gap-2">
                <PinIcon />
                Eatontown, New Jersey
              </span>
              <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
              <span>Battery Energy Storage + Level 3 EV Charging</span>
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 lg:items-end">
            <span className="doc-tag">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Under construction
            </span>
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-mute">
              Target COD &middot; Q4 2025
            </span>
          </div>
        </div>

        <p className="mt-8 max-w-[52ch] font-display text-[1.35rem] font-bold leading-[1.3] text-paper">
          {OVERVIEW}
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-4">
          {SPECS.map((s) => (
            <div key={s.label} className="flex flex-col gap-1.5 bg-ink-2 p-5">
              <dt className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-mute">
                {s.label}
              </dt>
              <dd className="font-display text-[1.05rem] font-bold leading-tight text-paper">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-4 flex flex-col gap-4">
          <Frame
            caption="Fig. 03"
            label="Site render"
            className="aspect-[16/9] lg:aspect-[21/9]"
          >
            <Image
              src="/1.png"
              alt="Michael's Plaza site render"
              fill
              sizes="(min-width: 1024px) 1180px, 100vw"
              className="object-cover"
            />
          </Frame>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Frame caption="Fig. 04" label="Aerial" className="aspect-[16/10]">
              <Image
                src="/2.png"
                alt="Michael's Plaza aerial view"
                fill
                sizes="(min-width: 1024px) 580px, 100vw"
                className="object-cover"
              />
            </Frame>
            <Frame caption="Fig. 05" label="Location" className="aspect-[16/10]">
              <Image
                src="/location-map.png"
                alt="Michael's Plaza location — Eatontown, New Jersey"
                fill
                sizes="(min-width: 1024px) 580px, 100vw"
                className="object-cover"
              />
            </Frame>
          </div>
        </div>

        <div className="mt-10">
          <p className="kicker">Project breakdown</p>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            {GROUPS.map((g) => {
              const accent = g.tone === "accent";
              return (
                <div
                  key={g.label}
                  className={`flex flex-col rounded-[10px] border p-6 ${
                    accent
                      ? "border-accent bg-[rgba(139,251,3,0.05)]"
                      : "border-line bg-ink-2"
                  }`}
                >
                  <span
                    className={`font-mono text-[0.62rem] uppercase tracking-[0.2em] ${
                      accent ? "text-accent" : "text-mute"
                    }`}
                  >
                    {g.label}
                  </span>
                  <ul className="doc-list mt-5">
                    {g.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Frame({
  caption,
  label,
  className,
  children,
}: {
  caption: string;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <figure className="doc-figure">
      <div className={`relative ${className ?? ""}`}>{children}</div>
      <figcaption className="doc-figcaption">
        <span>
          <b>{caption}</b> &mdash; {label}
        </span>
        <span>Michael&rsquo;s Plaza</span>
      </figcaption>
    </figure>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
