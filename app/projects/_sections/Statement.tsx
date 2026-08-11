import Image from "next/image";

export function ProjectsStatement() {
  return (
    <section className="doc-section">
      <div className="doc-shell">
        <p className="kicker">No grid expansion</p>

        <h2 className="doc-h2 mt-4 max-w-[24ch]">
          Designed to perform{" "}
          <span className="text-accent">without grid expansion</span>.
        </h2>

        <p className="doc-lead mt-3.5">
          This project was executed within fixed electrical limits and defined
          operating schedules &mdash; proof that the right design clears the
          bottleneck instead of waiting on the utility.
        </p>

        <figure className="doc-figure mt-9">
          <div className="relative aspect-[16/9] lg:aspect-[21/9]">
            <Image
              src="/3.png"
              alt="Site operating within fixed electrical limits"
              fill
              sizes="(min-width: 1024px) 1180px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="doc-figcaption">
            <span>
              <b>Fig. 01</b> &mdash; Site delivered inside existing electrical
              limits, without a utility upgrade.
            </span>
            <span>Xura</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
