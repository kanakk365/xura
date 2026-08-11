const EXPERIENCE = [
  "Large-scale energy and infrastructure transactions",
  "Projects deployed across 30+ U.S. states",
  "Leadership roles in battery storage, EV charging, and grid-connected systems",
];

export function LeadershipOverview() {
  return (
    <section id="our-team" className="doc-section">
      <div className="doc-shell">
        <p className="kicker">Our team</p>

        <h2 className="doc-h2 mt-4 max-w-[24ch]">
          Experience across the full{" "}
          <span className="text-accent">project lifecycle</span>.
        </h2>

        <p className="doc-lead mt-3.5">
          The team has led the development, construction, and operation of
          battery storage, EV charging, and grid-connected energy systems across
          North America and the Caribbean &mdash; with a consistent focus on
          safety, reliability, and execution discipline.
        </p>

        <div className="mt-9 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="doc-card flex flex-col p-6 sm:p-8">
            <span className="doc-tag w-fit">Institutional rigor</span>
            <p className="mt-5 text-[0.98rem] leading-[1.65] text-mute">
              Xura applies institutional-grade rigor across system design,
              interconnection strategy, deployment, and long-term operations to
              ensure projects are delivered responsibly and perform as intended
              over time.
            </p>
            <div className="mt-auto flex flex-wrap gap-2.5 border-t border-line pt-6 sm:mt-8">
              <span className="doc-tag">North America</span>
              <span className="inline-flex items-center gap-2 rounded-md border border-line px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.06em] text-mute">
                Caribbean
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-[10px] border border-line bg-ink-2">
            <div className="flex items-center justify-between gap-3 border-b border-line px-6 py-4">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-accent">
                Team experience
              </span>
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-mute">
                Includes
              </span>
            </div>
            <ol className="divide-y divide-line">
              {EXPERIENCE.map((item, i) => (
                <li key={item} className="flex gap-4 p-6">
                  <span className="font-mono text-[0.72rem] font-bold leading-[1.6] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.95rem] leading-[1.6] text-paper/80">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
