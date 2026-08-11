type Principle = {
  id: string;
  number: string;
  title: string;
  body: string;
};

const PRINCIPLES: Principle[] = [
  {
    id: "integrated",
    number: "01",
    title: "Integrated infrastructure",
    body: "Storage, charging, and load control are designed to operate as a single, coordinated system — never as standalone parts bolted together.",
  },
  {
    id: "site-selection",
    number: "02",
    title: "Site selection as risk management",
    body: "Only sites with validated electrical capacity, interconnection, and constructability move forward. Feasibility is the first gate, not the last check.",
  },
  {
    id: "operator-led",
    number: "03",
    title: "Operator-led execution",
    body: "Xura stays directly involved from design through operations. The team that scopes the site is the team that commissions and runs it.",
  },
  {
    id: "performance",
    number: "04",
    title: "Long-term performance focus",
    body: "Assets are engineered for durability, actively monitored, and optimized over time — built to perform in line with their design assumptions long after commissioning.",
  },
];

export function StrategyPrinciples() {
  return (
    <section id="principles" className="doc-section">
      <div className="doc-shell">
        <p className="kicker">Operating principles</p>

        <h2 className="doc-h2 mt-4 max-w-[24ch]">
          Principles that keep delivery{" "}
          <span className="text-accent">honest</span>.
        </h2>

        <p className="doc-lead mt-3.5">
          Four principles govern how every Xura site moves from feasibility to a
          working, monitored asset.
        </p>

        <ol className="mt-9 grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-line bg-line md:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <li key={p.id} className="flex flex-col bg-ink-2 p-6 sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mark text-[2rem] leading-none text-accent">
                  {p.number}
                </span>
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-mute">
                  Principle {p.number} /{" "}
                  {String(PRINCIPLES.length).padStart(2, "0")}
                </span>
              </div>

              <h3 className="doc-h3 mt-5 text-[1.22rem]">{p.title}</h3>

              <p className="mt-2.5 text-[0.92rem] leading-[1.6] text-mute">
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
