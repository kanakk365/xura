import Image from "next/image";

type Site = {
  name: string;
  location: string;
  capacity: string;
};

const SITES: Site[] = [
  { name: "White Horse Road", location: "Voorhees Township, NJ", capacity: "660 kW" },
  { name: "Connor Street", location: "Bronx, NY", capacity: "2 MW" },
  { name: "Hutchinson Avenue", location: "Bronx, NY", capacity: "4 MW" },
  { name: "Sayville Plaza", location: "Bohemia, NY", capacity: "660 kW" },
];

export function ProjectsPipeline() {
  return (
    <section id="pipeline" className="doc-section">
      <div className="doc-shell">
        <p className="kicker">Pipeline</p>

        <h2 className="doc-h2 mt-4 max-w-[24ch]">Project pipeline.</h2>

        <p className="doc-lead mt-3.5">
          Xura has built a robust pipeline of battery storage and EV charging
          projects, positioning us at the forefront of addressing regional grid
          constraints while capitalizing on attractive incentive structures.
        </p>

        <div className="mt-9 grid grid-cols-1 gap-4 lg:grid-cols-[1.3fr_1fr]">
          <figure className="doc-figure">
            <Image
              src="/pipeline-map.png"
              alt="Pipeline sites — future BESS deployments across the Northeast"
              width={962}
              height={503}
              sizes="(min-width: 1024px) 660px, 100vw"
              className="block h-auto w-full"
            />
            <figcaption className="doc-figcaption">
              <span>
                <b>Fig. 06</b> &mdash; Pipeline sites across the Northeast.
              </span>
              <span>300+ across NY &amp; NJ</span>
            </figcaption>
          </figure>

          <div className="doc-card flex flex-col p-6 sm:p-8">
            <span className="doc-tag w-fit">Portfolio approach</span>
            <p className="mt-5 text-[0.95rem] leading-[1.65] text-mute">
              This foundation reflects our disciplined approach to site
              selection and the scale of opportunities secured. We are now
              expanding into additional states, creating a diversified portfolio
              designed to deliver long-term stability and growth for investors.
            </p>
            <ul className="doc-list mt-auto border-t border-line pt-6 sm:mt-8">
              <li>Disciplined site selection</li>
              <li>Expanding beyond NY and NJ</li>
              <li>Diversified for long-term stability</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
              Selected sites
            </span>
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-accent">
              300+ across NY &amp; NJ
            </span>
          </div>

          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {SITES.map((site) => (
              <li key={site.name} className="flex flex-col bg-ink-2 p-5">
                <span className="font-display text-[1.5rem] font-extrabold leading-none text-accent">
                  {site.capacity}
                </span>
                <h3 className="mt-3.5 font-display text-[1.02rem] font-bold leading-tight text-paper">
                  {site.name}
                </h3>
                <p className="mt-1.5 flex items-center gap-2 text-[0.82rem] text-mute">
                  <PinIcon />
                  {site.location}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 shrink-0 text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
