type Cell = string | boolean;

type Row = {
  label: string;
  values: [Cell, Cell, Cell, Cell];
};

type Group = {
  title: string;
  rows: Row[];
};

const COLUMNS = ["Pulse", "Surge", "Voltage", "Bespoke"] as const;
const HIGHLIGHT_COL = 1;

const GROUPS: Group[] = [
  {
    title: "Inventory",
    rows: [
      { label: "Footer banner", values: [true, true, true, true] },
      { label: "Sidebar tile", values: [true, true, true, true] },
      { label: "In-flow card", values: [false, true, true, true] },
      { label: "Hero marquee window", values: [false, false, true, true] },
      { label: "Newsletter sponsor", values: [false, true, true, true] },
      { label: "Co-branded editorial", values: [false, false, false, true] },
    ],
  },
  {
    title: "Reach",
    rows: [
      {
        label: "Guaranteed impressions / mo",
        values: ["50K", "180K", "500K", "Custom"],
      },
      {
        label: "Concurrent placements",
        values: ["1", "2", "3 + marquee", "Custom"],
      },
      {
        label: "Audience targeting",
        values: ["Default", "Segment", "Persona", "1:1 list"],
      },
      {
        label: "Category exclusivity",
        values: [false, false, "Quarterly", "Annual"],
      },
    ],
  },
  {
    title: "Creative & ops",
    rows: [
      {
        label: "Creative variants",
        values: ["1", "2 (A/B)", "Unlimited", "Unlimited"],
      },
      {
        label: "Refresh cadence",
        values: ["Monthly", "Bi-weekly", "Anytime", "Anytime"],
      },
      {
        label: "Creative QA review",
        values: ["Standard", "Priority", "Priority", "Concierge"],
      },
      {
        label: "Sponsored case study",
        values: [false, false, "1 / quarter", "Custom"],
      },
    ],
  },
  {
    title: "Analytics & support",
    rows: [
      {
        label: "Performance brief",
        values: ["Monthly", "Weekly", "Real-time", "Real-time"],
      },
      { label: "Custom dashboard", values: [false, true, true, true] },
      { label: "Attribution exports", values: [false, false, true, true] },
      { label: "Dedicated media planner", values: [false, false, true, true] },
    ],
  },
];

export function AdvertiseComparison() {
  return (
    <section id="comparison" className="doc-section">
      <div className="doc-shell">
        <p className="kicker">Comparison</p>

        <h2 className="doc-h2 mt-4 max-w-[24ch]">
          The full <span className="text-accent">spec sheet</span>.
        </h2>

        <p className="doc-lead mt-3.5">
          Every line item across every tier. No fine print or off-deck add-ons.
        </p>

        <div className="mt-9 overflow-x-auto rounded-[10px] border border-line bg-ink-2">
          <table className="w-full min-w-[46rem] border-collapse text-left">
            <caption className="sr-only">
              Feature comparison across Pulse, Surge, Voltage and Bespoke tiers
            </caption>
            <thead>
              <tr className="border-b border-line">
                <th
                  scope="col"
                  className="w-[34%] px-6 py-4 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mute"
                >
                  Feature
                </th>
                {COLUMNS.map((col, i) => (
                  <th
                    key={col}
                    scope="col"
                    className={`px-4 py-4 text-center font-display text-[0.95rem] font-bold ${
                      i === HIGHLIGHT_COL ? "text-accent" : "text-paper"
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            {GROUPS.map((group) => (
              <tbody key={group.title}>
                <tr className="border-b border-line bg-ink/60">
                  <th
                    scope="colgroup"
                    colSpan={5}
                    className="px-6 py-2.5 text-left font-mono text-[0.6rem] uppercase tracking-[0.2em] text-accent"
                  >
                    {group.title}
                  </th>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.label} className="border-b border-line">
                    <th
                      scope="row"
                      className="px-6 py-3.5 text-left text-[0.9rem] font-normal text-paper/80"
                    >
                      {row.label}
                    </th>
                    {row.values.map((v, i) => (
                      <td
                        key={i}
                        className={`px-4 py-3.5 text-center text-[0.85rem] ${
                          i === HIGHLIGHT_COL
                            ? "bg-[rgba(139,251,3,0.04)]"
                            : ""
                        }`}
                      >
                        <CellValue value={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </section>
  );
}

function CellValue({ value }: { value: Cell }) {
  if (value === true) {
    return (
      <>
        <span className="sr-only">Included</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 12 12"
          className="mx-auto h-4 w-4"
          fill="none"
        >
          <path
            d="M2 6.2 4.6 8.8 10 3.6"
            stroke="#8bfb03"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </>
    );
  }

  if (value === false) {
    return (
      <>
        <span className="sr-only">Not included</span>
        <span aria-hidden="true" className="mx-auto block h-px w-3.5 bg-mute" />
      </>
    );
  }

  return <span className="font-mono text-mute">{value}</span>;
}
