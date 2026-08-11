type AudienceSegment = {
  id: string;
  code: string;
  label: string;
  share: number;
  meta: string;
};

const SEGMENTS: AudienceSegment[] = [
  {
    id: "fleet",
    code: "01",
    label: "Fleet operators",
    share: 34,
    meta: "Logistics, last-mile, transit",
  },
  {
    id: "cre",
    code: "02",
    label: "CRE owners & developers",
    share: 27,
    meta: "Industrial, retail, multifamily",
  },
  {
    id: "capital",
    code: "03",
    label: "Capital partners",
    share: 22,
    meta: "Infra funds, IPPs, family offices",
  },
  {
    id: "engineers",
    code: "04",
    label: "Engineers & EPC",
    share: 17,
    meta: "Designers, integrators, AHJs",
  },
];

export function AdvertiseAudience() {
  return (
    <section id="audience" className="doc-section">
      <div className="doc-shell">
        <p className="kicker">Audience</p>

        <h2 className="doc-h2 mt-4 max-w-[24ch]">
          Who actually opens <span className="text-accent">xura.com</span>.
        </h2>

        <p className="doc-lead mt-3.5">
          We don&rsquo;t chase impressions. Xura&rsquo;s readership is a narrow
          band of high-intent buyers &mdash; the people writing checks,
          permitting projects, and signing site agreements.
        </p>

        <div className="mt-9 overflow-hidden rounded-[10px] border border-line bg-ink-2">
          <div className="flex items-center justify-between gap-3 border-b border-line px-6 py-4">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-accent">
              Composition
            </span>
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-mute">
              Last 90 days
            </span>
          </div>

          <dl className="divide-y divide-line">
            {SEGMENTS.map((s) => (
              <div key={s.id} className="flex flex-col gap-3 p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <dt className="flex items-baseline gap-3">
                    <span className="font-mono text-[0.72rem] font-bold text-accent">
                      {s.code}
                    </span>
                    <span className="font-display text-[1.05rem] font-bold leading-tight text-paper">
                      {s.label}
                    </span>
                  </dt>
                  <dd className="font-display text-[1.35rem] font-extrabold leading-none text-accent">
                    {s.share}%
                  </dd>
                </div>

                <div
                  className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]"
                  role="presentation"
                >
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: `${s.share}%` }}
                  />
                </div>

                <p className="text-[0.85rem] text-mute">{s.meta}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
