type Credential = {
  id: string;
  title: string;
  body: string;
  icon: "shield" | "badge" | "wave" | "layers";
};

const CREDENTIALS: Credential[] = [
  {
    id: "record",
    title: "Proven record",
    body: "Hundreds of deployments with zero fire or explosion incidents — safety demonstrated in the field, not just on paper.",
    icon: "shield",
  },
  {
    id: "ul",
    title: "UL 9540A certified",
    body: "Validated against the industry's most rigorous fire-propagation test standard for energy storage systems.",
    icon: "badge",
  },
  {
    id: "monitoring",
    title: "Advanced monitoring",
    body: "Continuous, real-time monitoring detects thermal and electrical anomalies long before they can become events.",
    icon: "wave",
  },
  {
    id: "protection",
    title: "Layered protection",
    body: "Independent safety systems contain faults at the cell, pack, and site level so no single failure can escalate.",
    icon: "layers",
  },
];

export function StrategySafety() {
  return (
    <section id="safety" className="doc-section">
      <div className="doc-shell">
        <p className="kicker">Safety</p>

        <h2 className="doc-h2 mt-4 max-w-[26ch]">
          We don&rsquo;t just meet safety standards &mdash;{" "}
          <span className="text-accent">we set them</span>.
        </h2>

        <p className="doc-lead mt-3.5">
          Energy storage on a live site only earns trust one way: a record you
          can verify, backed by certification and layered protection.
        </p>

        <div className="doc-callout mt-9 flex flex-col items-start gap-5 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
          <span className="font-display text-[clamp(3rem,8vw,4.5rem)] font-extrabold leading-none text-accent">
            Zero
          </span>
          <p className="text-[1rem] leading-[1.6] text-paper/80">
            Fire or explosion incidents across{" "}
            <span className="font-semibold text-paper">
              hundreds of deployments
            </span>
            . Safety isn&rsquo;t a feature we add at the end &mdash; it&rsquo;s
            the baseline every Xura system is engineered to.
          </p>
        </div>

        <ol className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {CREDENTIALS.map((c) => (
            <li key={c.id} className="flex flex-col bg-ink-2 p-6">
              <span className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-[rgba(139,251,3,0.08)] text-accent">
                <CredentialIcon icon={c.icon} />
              </span>
              <h3 className="mt-4 font-display text-[1.08rem] font-bold leading-[1.3] text-paper">
                {c.title}
              </h3>
              <p className="mt-2 text-[0.88rem] leading-[1.55] text-mute">
                {c.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CredentialIcon({ icon }: { icon: Credential["icon"] }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (icon === "shield") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" {...common}>
        <path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }
  if (icon === "badge") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" {...common}>
        <circle cx="12" cy="9" r="5.5" />
        <path d="m9 13-1.5 7L12 18l4.5 2L15 13" />
      </svg>
    );
  }
  if (icon === "wave") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" {...common}>
        <path d="M3 12h3l2-6 4 14 3-10 2 4h4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" {...common}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  );
}
