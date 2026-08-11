import Image from "next/image";

import { HeroFog } from "./HeroFog";
import { Navbar } from "./Navbar";
import { ArrowUpRight } from "./icons";

const HERO_STATS = [
  { figure: "200+", label: "Energy systems deployed" },
  { figure: "6–12", suffix: "MO", label: "To energized, with approvals" },
  { figure: "UL", suffix: "9540A", label: "Safety-certified storage" },
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] w-full flex-col bg-ink">
      {/* Photograph sits lowest. origin-top + scale anchors the frame to the
          top of the image and lets it run off the bottom, which drops the
          subject down the screen — the source is only 1023x682, so
          object-position alone has barely 40px of travel to work with. */}
      <div className="absolute inset-0 -z-30 hidden overflow-hidden sm:block">
        <Image
          src="/heroimg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="origin-top scale-[1.12] object-cover object-top"
        />
      </div>

      {/* WebGL smoke, screen-blended over the photograph. */}
      <HeroFog className="pointer-events-none absolute inset-0 -z-20 h-full w-full opacity-90 mix-blend-screen" />

      {/* Scrim: dark under the copy on the left, clearing to the right so the
          smoke stays visible. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,5,0.88)_0%,rgba(5,5,5,0.62)_38%,rgba(5,5,5,0.28)_68%,rgba(5,5,5,0.12)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-ink via-ink/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-ink/80 to-transparent"
      />

      <Navbar />

      <div className="doc-shell flex flex-1 flex-col justify-center py-20">
        <p className="kicker">Site-Level Energy Infrastructure</p>

        <h1 className="doc-h1 mt-5 max-w-[16ch]">
          Built for today&rsquo;s <span className="text-accent">grid</span>{" "}
          constraints.
        </h1>

        <p className="doc-lead mt-5 max-w-[58ch] text-[1.05rem]">
          Xura designs and delivers Level&nbsp;3 EV charging and battery energy
          storage for commercial and fleet facilities &mdash; engineered around
          real site conditions, not theoretical grid availability.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="#contact" className="doc-btn group">
            Request a site review
            <span
              aria-hidden="true"
              className="grid h-6 w-6 place-items-center rounded-full bg-ink text-accent transition-transform group-hover:translate-x-0.5"
            >
              <ArrowUpRight />
            </span>
          </a>
          <a href="#solutions" className="doc-btn-ghost">
            Explore solutions
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-[2px] bg-accent"
            />
          </a>
        </div>
      </div>

      {/* One measured band across the foot of the hero, divided by hairlines —
          not three floating cards. */}
      <div className="relative border-t border-line bg-ink/60 backdrop-blur-sm">
        <dl className="doc-shell grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1.5 py-6 sm:px-8 sm:first:pl-0 sm:last:pr-0"
            >
              <dd className="flex items-baseline gap-2">
                <span className="font-display text-[2rem] font-extrabold leading-none text-paper">
                  {stat.figure}
                </span>
                {stat.suffix && (
                  <span className="font-mono text-[0.8rem] font-bold text-accent">
                    {stat.suffix}
                  </span>
                )}
              </dd>
              <dt className="text-[0.82rem] text-mute">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
