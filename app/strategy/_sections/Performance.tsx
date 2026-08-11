type Capability = {
  code: string;
  title: string;
  body: string;
};

const CAPABILITIES: Capability[] = [
  {
    code: "01",
    title: "24/7 grid oversight",
    body: "Every site is watched around the clock, so dispatch responds to grid conditions as they change.",
  },
  {
    code: "02",
    title: "Automated energy dispatch",
    body: "Charging and storage are dispatched automatically against load, price, and capacity signals.",
  },
  {
    code: "03",
    title: "Institutional-grade monitoring",
    body: "Lifecycle telemetry holds assets to the performance their design assumptions promised.",
  },
  {
    code: "04",
    title: "Operational discipline, built in",
    body: "The same operator team commissions and runs the site — accountability doesn't change hands.",
  },
];

const READOUTS = [
  { label: "Grid oversight", value: "Live" },
  { label: "Dispatch", value: "Auto" },
  { label: "Uptime", value: "99.9%" },
];

export function StrategyPerformance() {
  return (
    <section id="performance" className="doc-section">
      <div className="doc-shell">
        <p className="kicker">Performance &amp; operations</p>

        <h2 className="doc-h2 mt-4 max-w-[24ch]">
          Always-on performance,{" "}
          <span className="text-accent">actively managed</span>.
        </h2>

        <p className="doc-lead mt-3.5">
          24/7 grid oversight, automated energy dispatch, and
          institutional-grade monitoring keep assets performing in line with
          their design assumptions &mdash; across their full lifecycle.
        </p>

        <div className="mt-9 grid grid-cols-1 gap-4 lg:grid-cols-[1.1fr_1fr]">
          <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-2">
            {CAPABILITIES.map((cap) => (
              <li key={cap.code} className="flex flex-col bg-ink-2 p-6">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-accent">
                  {cap.code}
                </span>
                <h3 className="mt-3 font-display text-[1.05rem] font-bold leading-[1.3] text-paper">
                  {cap.title}
                </h3>
                <p className="mt-2 text-[0.88rem] leading-[1.55] text-mute">
                  {cap.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="flex h-fit flex-col overflow-hidden rounded-[10px] border border-line bg-ink-2">
            <div className="flex items-center justify-between gap-3 border-b border-line px-6 py-4">
              <span className="flex items-center gap-2.5 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
                <span className="h-1.5 w-1.5 rounded-full bg-accent soc-pulse" />
                Site operations
              </span>
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-accent">
                Live
              </span>
            </div>

            <dl className="divide-y divide-line">
              {READOUTS.map((r) => (
                <div
                  key={r.label}
                  className="flex items-center justify-between gap-4 px-6 py-4"
                >
                  <dt className="text-[0.9rem] text-mute">{r.label}</dt>
                  <dd className="font-display text-[1.05rem] font-bold text-paper">
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="border-t border-line px-6 py-6">
              <div className="mb-2.5 flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-[0.2em]">
                <span className="text-mute">State of charge</span>
                <span className="text-accent">68%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
                <div className="h-full w-[68%] rounded-full bg-accent" />
              </div>
              <p className="mt-5 text-[0.85rem] leading-[1.6] text-mute">
                Automated dispatch balances charge against grid conditions in
                real time, holding reliability across the asset lifecycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
