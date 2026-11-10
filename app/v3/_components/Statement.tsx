"use client";

import ScrollReveal from "../_bits/ScrollReveal";
import { Kicker, Reveal } from "./primitives";

/** One sentence read at the pace of the scroll: each word lifts out of the
 *  dark as it is reached, so the claim lands before the evidence below it. */
export function Statement({ kicker, text, foot }: { kicker: string; text: string; foot?: string }) {
  return (
    <section className="op-section">
      <div className="op-shell grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-16">
        <Reveal className="lg:pt-4">
          <Kicker>{kicker}</Kicker>
        </Reveal>
        <div className="min-w-0">
          <ScrollReveal
            enableBlur
            baseOpacity={0.1}
            blurStrength={6}
            baseRotation={0}
            highlightColor="#8bfb03"
            containerClassName="!my-0"
            textClassName="font-display !font-normal !text-[clamp(1.7rem,3.6vw,3.25rem)] !leading-[1.18] tracking-[-0.02em] text-paper"
            wordAnimationEnd="bottom 55%"
          >
            {text}
          </ScrollReveal>
          {foot && (
            <Reveal delay={0.1}>
              <p className="mt-10 max-w-[52ch] border-l-2 border-accent pl-5 text-[15px] leading-[1.7] text-paper/60">{foot}</p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
