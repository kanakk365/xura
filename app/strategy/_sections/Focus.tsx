import Link from "next/link";

import { ArrowUpRight } from "../../components/icons";

type Bottleneck = {
  code: string;
  title: string;
  body: string;
};

const BOTTLENECKS: Bottleneck[] = [
  {
    code: "01",
    title: "Limited electrical capacity",
    body: "Most sites can't pull the power electrification demands from the meter they already have.",
  },
  {
    code: "02",
    title: "Prolonged interconnection",
    body: "Utility upgrades and interconnection queues stretch timelines by months, sometimes years.",
  },
  {
    code: "03",
    title: "Operational complexity",
    body: "Charging, storage, and site load all have to work as one system on live, occupied sites.",
  },
];

export function StrategyFocus() {
  return (
    <section id="focus" className="doc-section">
      <div className="doc-shell">
        <p className="kicker">Strategic focus</p>

        <h2 className="doc-h2 mt-4 max-w-[24ch]">
          Infrastructure that clears grid{" "}
          <span className="text-accent">bottlenecks</span>.
        </h2>

        <p className="doc-lead mt-3.5">
          Electrification is outpacing grid capacity. Sites run into limited
          power at the meter, slow interconnection, and operational friction
          that stalls projects before they start.
        </p>

        <div className="mt-9 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="doc-card flex flex-col p-6 sm:p-8">
            <span className="doc-tag w-fit">The Xura response</span>

            <p className="mt-5 text-[1.02rem] leading-[1.6] text-paper/80">
              Xura&rsquo;s response pairs rigorous feasibility assessment with
              integrated charging and energy storage &mdash; engineered for the
              site and grid constraints that actually exist.
            </p>

            <p className="mt-4 text-[0.95rem] leading-[1.6] text-mute">
              Feasibility first, then integrated charging plus energy storage,
              sized for the constraints in front of us rather than the grid we
              wish we had.
            </p>

            <div className="mt-auto pt-8">
              <Link href="/#solutions" className="doc-btn group">
                Explore our solutions
                <span
                  aria-hidden="true"
                  className="grid h-6 w-6 place-items-center rounded-full bg-ink text-accent transition-transform group-hover:translate-x-0.5"
                >
                  <ArrowUpRight />
                </span>
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[10px] border border-line bg-ink-2">
            <div className="flex items-center justify-between gap-3 border-b border-line px-6 py-4">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-accent">
                The bottleneck
              </span>
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-mute">
                Site &middot; grid
              </span>
            </div>

            <ol className="divide-y divide-line">
              {BOTTLENECKS.map((b) => (
                <li key={b.code} className="flex gap-4 p-6">
                  <span className="font-mono text-[0.72rem] font-bold leading-[1.6] text-accent">
                    {b.code}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.05rem] font-bold leading-[1.3] text-paper">
                      {b.title}
                    </h3>
                    <p className="mt-1.5 text-[0.88rem] leading-[1.55] text-mute">
                      {b.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
