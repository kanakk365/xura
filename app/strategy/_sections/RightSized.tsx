const OVERSIZED = [
  "Capital tied up in capacity that never gets used",
  "Higher operational overhead and maintenance surface",
  "Utility upgrades you may never actually need",
];

const RIGHTSIZED = [
  "Capital matched to real, measured site demand",
  "Lower operational and capital risk over the asset life",
  "Efficiency gains without forced grid upgrades",
];

export function StrategyRightSized() {
  return (
    <section id="right-sized" className="doc-section">
      <div className="doc-shell">
        <p className="kicker">Right-sized infrastructure</p>

        <h2 className="doc-h2 mt-4 max-w-[24ch]">
          Sized for the site,{" "}
          <span className="text-accent">not the spec sheet</span>.
        </h2>

        <p className="doc-lead mt-3.5">
          We prioritize systems that match actual site demand over speculative
          oversizing. That discipline is why the strategy matters: it reduces
          capital and operational risk while supporting efficiency &mdash;
          without unnecessary utility upgrades.
        </p>

        <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Ledger
            tag="Oversized"
            caption="The speculative default"
            items={OVERSIZED}
          />
          <Ledger
            accent
            tag="Right-sized"
            caption="The Xura approach"
            items={RIGHTSIZED}
          />
        </div>
      </div>
    </section>
  );
}

function Ledger({
  accent,
  tag,
  caption,
  items,
}: {
  accent?: boolean;
  tag: string;
  caption: string;
  items: string[];
}) {
  return (
    <div
      className={`flex flex-col rounded-[10px] border p-6 sm:p-8 ${
        accent
          ? "border-accent bg-[rgba(139,251,3,0.05)]"
          : "border-line bg-ink-2"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={`font-mono text-[0.62rem] uppercase tracking-[0.2em] ${
            accent ? "text-accent" : "text-mute"
          }`}
        >
          {tag}
        </span>
        <span
          aria-hidden="true"
          className={`h-1.5 w-1.5 rounded-[2px] ${
            accent ? "bg-accent" : "bg-mute"
          }`}
        />
      </div>

      <p className="mt-3 font-display text-[1.2rem] font-bold leading-tight text-paper">
        {caption}
      </p>

      <ul className="mt-6 flex flex-col gap-3.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            {accent ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 12 12"
                className="mt-1 h-3.5 w-3.5 flex-none"
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
            ) : (
              <span
                aria-hidden="true"
                className="mt-2.5 h-px w-3.5 flex-none bg-mute"
              />
            )}
            <span
              className={`text-[0.9rem] leading-[1.55] ${
                accent ? "text-paper/85" : "text-mute"
              }`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
