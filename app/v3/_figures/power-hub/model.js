// Pure model of the Power Hub figure: which source runs, which way each cable
// carries power, how the battery's state of charge moves and where the UPS
// transfer switch points. The build, the live page and the readout all read
// this one module. Figures are illustrative, not site telemetry.

export const SCENARIOS = ["normal", "peak", "outage"];

export const LABEL = { normal: "Normal day", peak: "Peak demand", outage: "Grid outage" };

// Seconds per pulse along a cable (lower is busier); a missing route is idle.
// "in" flows toward the busbar, "out" flows away from it.
export const FLOWS = {
  normal: {
    grid: [1.6, "in"],
    "riser.fc": [2.2, "in"],
    "riser.rack1": [2.4, "out"],
    "riser.rack2": [2.4, "out"],
    "riser.ups": [1.8, "in"],
    feeder: [1.8, "out"],
    "hose.1": [2, "out"],
    "hose.2": [2.4, "out"],
  },
  peak: {
    grid: [2.8, "in"],
    "riser.fc": [2, "in"],
    "riser.lg": [1.4, "in"],
    "riser.rack1": [1.2, "in"],
    "riser.rack2": [1.2, "in"],
    "riser.ups": [2.6, "in"],
    feeder: [1, "out"],
    "hose.1": [1.1, "out"],
    "hose.2": [1.1, "out"],
  },
  outage: {
    "riser.fc": [1.5, "in"],
    "riser.lg": [1.1, "in"],
    "riser.rack1": [1.2, "in"],
    "riser.rack2": [1.2, "in"],
    feeder: [1.2, "out"],
    "hose.1": [1.3, "out"],
    "hose.2": [1.6, "out"],
  },
};

// State of charge: the battery recharges on a normal day and carries the
// peak or the outage. Rates are per second of figure time (the figure runs
// a day's swing in a few seconds).
export const SOC_RATE = { normal: 0.045, peak: -0.06, outage: -0.05 };
export const SOC_RANGE = [0.22, 0.96];

// Transfer switch: −1 on the grid contact, +1 on the island (hub) contact.
// A real static transfer completes in under 2 ms; the figure eases it.
export const SWITCH = { normal: -1, peak: -1, outage: 1 };

export const RUNNING = {
  normal: { grid: true, fc: true, lg: false },
  peak: { grid: true, fc: true, lg: true },
  outage: { grid: false, fc: true, lg: true },
};

export function stepSoc(soc, scenario, dt) {
  const next = soc + SOC_RATE[scenario] * dt;
  return Math.min(SOC_RANGE[1], Math.max(SOC_RANGE[0], next));
}

export function readout(scenario, soc) {
  const pct = Math.round(soc * 100);
  const dir = SOC_RATE[scenario] > 0 ? "charging" : "discharging";
  return `${LABEL[scenario]} · battery ${pct}% ${dir}`;
}

export function ariaOf(scenario, soc) {
  const run = RUNNING[scenario];
  const sources = [run.grid && "utility feeder", run.fc && "fuel cell", run.lg && "linear generator"].filter(Boolean).join(", ");
  const sw = SWITCH[scenario] < 0 ? "on the grid contact" : "transferred to island";
  return `${LABEL[scenario]}: sources ${sources}; battery at ${Math.round(soc * 100)} percent and ${SOC_RATE[scenario] > 0 ? "charging" : "discharging"}; UPS switch ${sw}.`;
}
