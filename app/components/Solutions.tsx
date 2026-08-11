import type { ReactNode } from "react";

import { SolutionCharging } from "./SolutionCharging";
import { SolutionMicrogrid } from "./SolutionMicrogrid";
import { SolutionStorage } from "./SolutionStorage";

export function Solutions() {
  return (
    <section id="solutions" className="doc-section">
      <div className="doc-shell">
        <p className="kicker">Solutions</p>

        <h2 className="doc-h2 mt-4 max-w-[24ch]">
          Three systems for sites the{" "}
          <span className="text-accent">grid</span>{" "}
          hasn&rsquo;t caught up to.
        </h2>

        <p className="doc-lead mt-3.5">
          Every Xura deployment starts from the same constraint &mdash; you have
          a site, the utility doesn&rsquo;t have time. We engineer around it.
        </p>

        {/* Uniform full-width rows, matching the Approach section: figure on
            one side, specification on the other. No ragged column heights. */}
        <div className="mt-9 flex flex-col gap-4">
          <SolutionRow
            index="01"
            tag="Storage"
            title="Storage that survives audit."
            body="UL 9540A-tested systems with onboard BMS, NFPA 855 siting, and 24/7 telemetry. Sized against your load profile, not a catalogue configuration."
            specs={[
              "UL 9540A-tested cells and enclosures",
              "NFPA 855 siting and separation",
              "Onboard battery management system",
              "24/7 remote monitoring and telemetry",
            ]}
            figure={<SolutionStorage />}
          />

          <SolutionRow
            index="02"
            tag="Charging"
            title="Level 3 charging inside your service."
            body="DC fast charging deployed within the capacity the meter already delivers — buffered by storage so peak draw never triggers a utility upgrade."
            specs={[
              "DC fast charging, storage-buffered",
              "Deployed within existing service size",
              "Load management across dispensers",
              "No increase to utility service size",
            ]}
            figure={<SolutionCharging />}
            reverse
          />

          <SolutionRow
            index="03"
            tag="Microgrid"
            title="Load control that holds under stress."
            body="Storage, charging, and site load coordinated as one system, so the site keeps operating when the grid connection is the binding constraint."
            specs={[
              "Coordinated storage, charging, and load",
              "Peak shaving against demand charges",
              "Continuity through constrained periods",
              "One controller across all three roles",
            ]}
            figure={<SolutionMicrogrid />}
          />
        </div>
      </div>
    </section>
  );
}

function SolutionRow({
  index,
  tag,
  title,
  body,
  specs,
  figure,
  reverse,
}: {
  index: string;
  tag: string;
  title: string;
  body: string;
  specs: string[];
  figure: ReactNode;
  reverse?: boolean;
}) {
  return (
    <article className="doc-figure grid grid-cols-1 lg:grid-cols-[1fr_1.15fr]">
      <div
        className={`flex flex-col p-6 sm:p-8 ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <span className="doc-tag w-fit">
          {tag} &middot; {index} / 03
        </span>

        <h3 className="doc-h3 mt-4 text-[1.35rem]">{title}</h3>

        <p className="mt-3 max-w-[46ch] text-[0.92rem] leading-[1.6] text-mute">
          {body}
        </p>

        <ul className="doc-list mt-auto border-t border-line pt-5 sm:mt-6">
          {specs.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        </ul>
      </div>

      <div
        className={`relative border-b border-line bg-[#080808] lg:border-b-0 ${
          reverse
            ? "lg:order-1 lg:border-r"
            : "lg:order-2 lg:border-l"
        }`}
      >
        {figure}
      </div>
    </article>
  );
}
