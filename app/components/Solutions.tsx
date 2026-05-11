import { BentoShell } from "./BentoShell";
import { SolutionCharging } from "./SolutionCharging";
import { SolutionMicrogrid } from "./SolutionMicrogrid";
import { SolutionStorage } from "./SolutionStorage";

export function Solutions() {
  return (
    <section
      id="solutions"
      className="relative bg-ink py-24 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent"
      />

      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <header className="mb-12 flex flex-col gap-7 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-mute">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
                <span className="absolute -inset-1 rounded-full bg-accent/30 blur-[3px]" />
              </span>
              Solutions
            </p>
            <h2 className="font-display tracking-normal text-[clamp(2rem,4.4vw,3.75rem)] font-normal leading-[1.05]  text-paper">
              Three systems for sites the{" "}
              <span className="italic text-accent">grid</span>{" "}
              hasn&rsquo;t caught up to.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-paper/60">
            Every Xura deployment starts with the same constraint — you have
            a site, the utility doesn&rsquo;t have time. We engineer around
            it.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.15fr_1fr] lg:gap-5">
          <div className="lg:row-span-2">
            <BentoShell>
              <SolutionStorage />
            </BentoShell>
          </div>
          <BentoShell>
            <SolutionCharging />
          </BentoShell>
          <BentoShell>
            <SolutionMicrogrid />
          </BentoShell>
        </div>
      </div>
    </section>
  );
}
