import Image from "next/image";

export function ProjectsInstallations() {
  return (
    <section id="installations" className="doc-section">
      <div className="doc-shell">
        <p className="kicker">Track record</p>

        <h2 className="doc-h2 mt-4 max-w-[24ch]">Past installations.</h2>

        <p className="doc-lead mt-3.5">
          Proven execution partner with a strong track record of completing
          hundreds of installations for Fortune 500 clients, supported by an
          active footprint across the Northeast.
        </p>

        <div className="mt-9 grid grid-cols-1 items-start gap-4 lg:grid-cols-[1fr_1.3fr]">
          <div className="doc-card flex h-full flex-col p-6 sm:p-8">
            <span className="doc-tag w-fit">Delivery partner</span>

            <div className="mt-6 flex items-center gap-3">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-lg border border-line bg-[rgba(139,251,3,0.08)]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path
                    d="M3.5 12h17M12 3.2c2.6 2.4 2.6 14.2 0 17.6M12 3.2c-2.6 2.4-2.6 14.2 0 17.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="flex flex-col">
                <span className="font-display text-[1.15rem] font-bold leading-none text-paper">
                  Woodhollow
                </span>
                <span className="mt-1.5 font-mono text-[0.58rem] uppercase tracking-[0.22em] text-mute">
                  Energy Group
                </span>
              </span>
            </div>

            <ul className="doc-list mt-auto border-t border-line pt-6 sm:mt-8">
              <li>Hundreds of completed installations</li>
              <li>Fortune 500 client base</li>
              <li>Active footprint across the Northeast</li>
            </ul>
          </div>

          <figure className="doc-figure">
            <Image
              src="/installations-map.png"
              alt="Completed installations across New York and Connecticut"
              width={965}
              height={398}
              sizes="(min-width: 1024px) 660px, 100vw"
              className="block h-auto w-full"
            />
            <figcaption className="doc-figcaption">
              <span>
                <b>Fig. 02</b> &mdash; Completed installations, New York and
                Connecticut.
              </span>
              <span>Woodhollow Energy Group</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
