"use client";

import { Fragment } from "react";

import ScrollVelocity from "../_bits/ScrollVelocity";

function Diamond() {
  return <span aria-hidden="true" className="mx-[0.55em] inline-block h-[0.22em] w-[0.22em] rotate-45 bg-accent align-middle" />;
}

function Row({ items }: { items: string[] }) {
  return (
    <span className="inline-flex items-center">
      {items.map((t, i) => (
        <Fragment key={t}>
          {i > 0 && <Diamond />}
          <span>{t}</span>
        </Fragment>
      ))}
    </span>
  );
}

/** Two counter-running spec lines between the hero and the first section.
 *  Speed follows scroll velocity; the second line is outlined. */
export function SpecBand({ label, top, bottom }: { label: string; top: string[]; bottom: string[] }) {
  return (
    <section aria-label={label} className="relative overflow-hidden border-y border-paper/[0.08] bg-[#070707] py-7 sm:py-9">
      <p className="sr-only">{[...top, ...bottom].join(", ")}</p>
      <div aria-hidden="true" className="flex flex-col gap-3 font-display uppercase">
        <ScrollVelocity
          texts={[<Row key="a" items={top} />, <Row key="b" items={bottom} />]}
          velocity={38}
          numCopies={4}
          separator={<Diamond />}
          fadeEdges
          outlineAlternate
          skewWithVelocity={4}
          fontSize="clamp(1.6rem, 4vw, 3.5rem)"
          fontWeight={400}
          color="#ffffff"
          className="tracking-[-0.01em]"
          scrollerClassName="!drop-shadow-none"
        />
      </div>
    </section>
  );
}
