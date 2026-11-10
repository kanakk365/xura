// Illustrative figures for the partner dashboard mock. Everything is
// deterministic (no Math.random) so server and client render identically.

export type RangeKey = "7D" | "30D" | "90D";

export const RANGES: RangeKey[] = ["7D", "30D", "90D"];

const POINTS: Record<RangeKey, number> = { "7D": 7, "30D": 30, "90D": 90 };

function wave(i: number, n: number, base: number, weekend: number) {
  const trend = 1 + (i / n) * 0.16;
  const dow = i % 7 >= 5 ? weekend : 1;
  const noise = 0.07 * Math.sin(i * 1.9) + 0.05 * Math.cos(i * 0.7 + 1);
  return Math.round(base * trend * dow * (1 + noise));
}

export function sessionSeries(range: RangeKey) {
  const n = POINTS[range];
  const current = Array.from({ length: n }, (_, i) => wave(i, n, 380, 1.22));
  const previous = Array.from({ length: n }, (_, i) =>
    Math.round(wave(i + 3, n, 322, 1.18) * 0.97),
  );
  return { current, previous };
}

export const KPIS: Record<
  RangeKey,
  {
    sessions: number;
    kwh: number;
    revenue: number;
    uptime: number;
    deltas: [string, string, string, string];
  }
> = {
  "7D": {
    sessions: 2940,
    kwh: 74200,
    revenue: 11080,
    uptime: 99.4,
    deltas: ["+8.2%", "+9.6%", "+11.4%", "+0.2 pt"],
  },
  "30D": {
    sessions: 12480,
    kwh: 318200,
    revenue: 47320,
    uptime: 99.2,
    deltas: ["+12.4%", "+14.1%", "+15.8%", "+0.3 pt"],
  },
  "90D": {
    sessions: 37110,
    kwh: 951600,
    revenue: 139840,
    uptime: 99.1,
    deltas: ["+21.7%", "+23.0%", "+26.2%", "+0.5 pt"],
  },
};

// Share of charger-hours occupied, by hour of day (00–23).
export const HOURLY = [
  6, 4, 3, 3, 5, 9, 18, 31, 44, 52, 56, 61, 66, 63, 58, 60, 72, 84, 91, 78,
  58, 38, 22, 11,
];

export const REVENUE_SPLIT = [
  { label: "Charging sessions", share: 68 },
  { label: "Charger-screen advertising", share: 21 },
  { label: "Demand-response & VPP", share: 11 },
];

export const SITES = [
  { name: "Hicksville Retail Plaza", city: "Long Island, NY", chargers: 8, sessions: 3120, uptime: 99.6, revenue: 12410 },
  { name: "Newark Logistics Hub", city: "Newark, NJ", chargers: 12, sessions: 2980, uptime: 99.3, revenue: 11870 },
  { name: "Stamford Fleet Depot", city: "Stamford, CT", chargers: 6, sessions: 2240, uptime: 99.1, revenue: 8630 },
  { name: "Garden State Travel Plaza", city: "Woodbridge, NJ", chargers: 10, sessions: 1930, uptime: 98.8, revenue: 7340 },
  { name: "Hudson Valley Park & Ride", city: "Poughkeepsie, NY", chargers: 4, sessions: 1360, uptime: 99.4, revenue: 4820 },
  { name: "Albany Medical Campus", city: "Albany, NY", chargers: 4, sessions: 850, uptime: 99.0, revenue: 2250 },
];
