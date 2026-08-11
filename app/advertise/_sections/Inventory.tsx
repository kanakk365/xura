type Placement = {
  id: string;
  code: string;
  name: string;
  format: string;
  spec: string;
  description: string;
};

const PLACEMENTS: Placement[] = [
  {
    id: "marquee",
    code: "P-01",
    name: "Hero Marquee",
    format: "1440 × 120",
    spec: "PNG / SVG / WebM",
    description:
      "Top-of-page strip directly under the navigation. The first thing a reader sees on entry.",
  },
  {
    id: "inflow",
    code: "P-02",
    name: "In-Flow Card",
    format: "960 × 540",
    spec: "Native bento card",
    description:
      "Drop-in card placed mid-article. Visually treated like editorial content for full attention.",
  },
  {
    id: "sidebar",
    code: "P-03",
    name: "Sidebar Tile",
    format: "400 × 400",
    spec: "Sticky / persistent",
    description:
      "Square tile that follows the reader through long-form content on desktop layouts.",
  },
  {
    id: "footer",
    code: "P-04",
    name: "Footer Banner",
    format: "1200 × 200",
    spec: "Static / animated",
    description:
      "Wide banner above the global footer. Strong for awareness and brand recall.",
  },
  {
    id: "newsletter",
    code: "P-05",
    name: "Newsletter Sponsor",
    format: "1 / issue",
    spec: "Logo + 80 words",
    description:
      "Single sponsor mention in the bi-weekly briefing sent to operators and capital partners.",
  },
];

export function AdvertiseInventory() {
  return (
    <section id="inventory" className="doc-section">
      <div className="doc-shell">
        <p className="kicker">Inventory</p>

        <h2 className="doc-h2 mt-4 max-w-[24ch]">
          Five surfaces, no <span className="text-accent">noise</span>.
        </h2>

        <p className="doc-lead mt-3.5">
          We cap inventory deliberately. Each surface holds a single advertiser
          at a time, so creative lands in context &mdash; not in a crowd.
        </p>

        {/* Rate-card style table on desktop, stacked cards on small screens. */}
        <div className="mt-9 overflow-hidden rounded-[10px] border border-line bg-ink-2">
          <div className="hidden grid-cols-[5.5rem_1fr_9rem_10rem] gap-4 border-b border-line px-6 py-3.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mute lg:grid">
            <span>Code</span>
            <span>Placement</span>
            <span>Format</span>
            <span>Spec</span>
          </div>

          <ul className="divide-y divide-line">
            {PLACEMENTS.map((p) => (
              <li
                key={p.id}
                className="grid grid-cols-1 gap-x-4 gap-y-2 px-6 py-5 lg:grid-cols-[5.5rem_1fr_9rem_10rem] lg:items-baseline"
              >
                <span className="font-mono text-[0.72rem] font-bold text-accent">
                  {p.code}
                </span>

                <div>
                  <h3 className="font-display text-[1.05rem] font-bold leading-tight text-paper">
                    {p.name}
                  </h3>
                  <p className="mt-1.5 max-w-[52ch] text-[0.88rem] leading-[1.55] text-mute">
                    {p.description}
                  </p>
                </div>

                <span className="font-mono text-[0.8rem] text-paper/80">
                  {p.format}
                </span>
                <span className="font-mono text-[0.8rem] text-mute">
                  {p.spec}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
