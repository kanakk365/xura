"use client";

import { useEffect, useRef } from "react";

import "./power-hub/power-hub.css";
import { DATA, SVG } from "./power-hub/art.js";
import { mountPowerHub } from "./power-hub/live.js";

export type Scenario = "normal" | "peak" | "outage";

type Controller = ReturnType<typeof mountPowerHub>;

// One object for the life of the page: a new { __html } per render makes React
// replace the drawing and drop every attribute the live module has set.
const ART = { __html: SVG };

/** The isometric Power Hub (built by figures/power-hub/build.mjs). The live
 *  module drives pulses, battery lights, the transfer switch and the
 *  generator; React only chooses the scenario and hears back from the tour. */
export function PowerHubFigure({
  mode,
  onMode,
  onReadout,
}: {
  mode: Scenario;
  onMode: (mode: Scenario, byUser: boolean) => void;
  onReadout: (text: string) => void;
}) {
  const stage = useRef<HTMLDivElement>(null);
  const ctl = useRef<Controller | null>(null);
  const handlers = useRef({ onMode, onReadout });
  const initial = useRef(mode);

  useEffect(() => {
    handlers.current = { onMode, onReadout };
  }, [onMode, onReadout]);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const c = mountPowerHub(el, DATA, {
      initial: initial.current,
      say: (text: string) => handlers.current.onReadout(text),
      onScenario: (s: string, byUser: boolean) => handlers.current.onMode(s as Scenario, byUser),
    });
    ctl.current = c;
    return () => {
      c.destroy();
      ctl.current = null;
    };
  }, []);

  useEffect(() => {
    const c = ctl.current;
    if (c && c.scenario !== mode) c.set(mode, true);
  }, [mode]);

  return (
    <div className="iso ph-wrap w-full scale-[1.12] sm:scale-100">
      <div
        ref={stage}
        className="iso-stage ph-stage"
        tabIndex={0}
        role="group"
        aria-label="Power Hub cutaway. Press 1, 2 or 3 for normal, peak or outage; click to step through."
      >
        <div dangerouslySetInnerHTML={ART} />
        <span className="ph-sr" role="status" aria-live="polite" data-status />
      </div>
    </div>
  );
}
