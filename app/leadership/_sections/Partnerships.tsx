type Partner = {
  id: string;
  category: string;
  stat: string;
  body: string;
  mark: "energy" | "realestate" | "construction";
};

const PARTNERS: Partner[] = [
  {
    id: "energy",
    category: "Clean energy",
    stat: "100s",
    body: "Delivered hundreds of clean energy systems for Fortune 500 clients across 30+ states.",
    mark: "energy",
  },
  {
    id: "realestate",
    category: "Real estate",
    stat: "$1B+",
    body: "Executed $1B+ in institutional real estate transactions with disciplined underwriting and asset management.",
    mark: "realestate",
  },
  {
    id: "construction",
    category: "Construction",
    stat: "MF · CC",
    body: "Construction partner specializing in multifamily and commercial projects, providing execution support for energy and infrastructure deployments.",
    mark: "construction",
  },
];

export function LeadershipPartnerships() {
  return (
    <section id="partnerships" className="doc-section">
      <div className="doc-shell">
        <p className="kicker">Partnerships</p>

        <h2 className="doc-h2 mt-4 max-w-[24ch]">
          Institutional-grade{" "}
          <span className="text-accent">partnerships</span>.
        </h2>

        <p className="doc-lead mt-3.5">
          Backed by operators with proven track records across energy, capital,
          and construction &mdash; the depth that turns plans into delivered
          infrastructure.
        </p>

        <ul className="mt-9 grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-line bg-line md:grid-cols-3">
          {PARTNERS.map((p) => (
            <li key={p.id} className="flex flex-col bg-ink-2 p-6 sm:p-8">
              <span className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-[rgba(139,251,3,0.08)]">
                <PartnerMark mark={p.mark} />
              </span>

              <span className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
                {p.category}
              </span>

              <span className="mt-2 font-display text-[2rem] font-extrabold leading-none text-accent">
                {p.stat}
              </span>

              <p className="mt-4 text-[0.9rem] leading-[1.6] text-mute">
                {p.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PartnerMark({ mark }: { mark: Partner["mark"] }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (mark === "construction") {
    return (
      <span className="font-mono text-[0.72rem] font-bold tracking-[0.04em] text-accent">
        MF
      </span>
    );
  }

  if (mark === "energy") {
    return (
      <svg viewBox="0 0 48 48" className="h-6 w-6 text-accent" {...common}>
        <path d="M26 12 18 26h7l-2 10 9-14h-7l1-10Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className="h-6 w-6 text-accent" {...common}>
      <path d="M10 40V18l10-6 10 6v22" />
      <path d="M30 40V24l8-5v21" />
      <path d="M8 40h34" />
    </svg>
  );
}
