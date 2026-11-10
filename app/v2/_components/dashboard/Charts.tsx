"use client";

import { motion, useReducedMotion } from "motion/react";
import { useId, useState } from "react";

import { EASE, smoothPath } from "./primitives";

/* ------------------------------------------------------------------ */
/* Area / line chart — line draws in, area wipes in, hover crosshair.   */
/* ------------------------------------------------------------------ */

const W = 640;
const H = 250;
const PAD = { l: 46, r: 14, t: 16, b: 30 };

export function AreaChart({
  current,
  previous,
  active,
  unitLabel,
}: {
  current: number[];
  previous: number[];
  active: boolean;
  unitLabel: string;
}) {
  const reduce = useReducedMotion();
  const uid = useId().replace(/:/g, "");
  const [hover, setHover] = useState<number | null>(null);

  const n = current.length;
  const rawMax = Math.max(...current, ...previous);
  const step = rawMax > 1000 ? 200 : 100;
  const max = Math.ceil((rawMax * 1.08) / step) * step;
  const plotW = W - PAD.l - PAD.r;
  const plotH = H - PAD.t - PAD.b;

  const x = (i: number) => PAD.l + (i / (n - 1)) * plotW;
  const y = (v: number) => PAD.t + plotH - (v / max) * plotH;

  const cur = current.map((v, i) => ({ x: x(i), y: y(v) }));
  const prev = previous.map((v, i) => ({ x: x(i), y: y(v) }));
  const linePath = smoothPath(cur);
  const prevPath = smoothPath(prev);
  const areaPath = `${linePath} L ${x(n - 1)} ${PAD.t + plotH} L ${x(0)} ${PAD.t + plotH} Z`;

  const ticks = [0, 1, 2, 3, 4].map((t) => (max / 4) * t);
  const labelEvery = n <= 7 ? 1 : n <= 30 ? 5 : 15;

  const onMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * W;
    const i = Math.round(((px - PAD.l) / plotW) * (n - 1));
    setHover(Math.min(n - 1, Math.max(0, i)));
  };

  const h = hover;
  const tipX = h === null ? 0 : Math.min(Math.max(cur[h].x, PAD.l + 62), W - PAD.r - 62);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full touch-pan-y"
      role="img"
      aria-label={`${unitLabel}: ${current[n - 1].toLocaleString()} on the latest day, up from ${previous[n - 1].toLocaleString()} in the prior period.`}
      onPointerMove={onMove}
      onPointerLeave={() => setHover(null)}
    >
      <defs>
        <linearGradient id={`${uid}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.32" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
        <clipPath id={`${uid}-clip`}>
          <motion.rect
            x={0}
            y={0}
            height={H}
            initial={reduce ? false : { width: 0 }}
            animate={{ width: active ? W : reduce ? W : 0 }}
            transition={{ duration: 1.5, ease: EASE }}
          />
        </clipPath>
      </defs>

      {/* grid + y labels */}
      {ticks.map((t) => (
        <g key={t}>
          <line x1={PAD.l} x2={W - PAD.r} y1={y(t)} y2={y(t)} stroke="rgba(255,255,255,0.07)" strokeDasharray={t === 0 ? undefined : "2 5"} />
          <text x={PAD.l - 10} y={y(t) + 3.5} textAnchor="end" className="fill-[#808080] font-mono" fontSize="10">
            {Math.round(t).toLocaleString()}
          </text>
        </g>
      ))}

      {/* x labels */}
      {current.map((_, i) =>
        i % labelEvery === 0 ? (
          <text key={i} x={x(i)} y={H - 8} textAnchor="middle" className="fill-[#808080] font-mono" fontSize="10">
            {n <= 7 ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i] : `D${i + 1}`}
          </text>
        ) : null,
      )}

      {/* previous period */}
      <motion.path
        d={prevPath}
        fill="none"
        stroke="rgba(255,255,255,0.32)"
        strokeWidth="1.5"
        strokeDasharray="4 5"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: active || reduce ? 1 : 0 }}
        transition={{ duration: 1.5, ease: EASE }}
      />

      {/* area wipe */}
      <path d={areaPath} fill={`url(#${uid}-fill)`} clipPath={`url(#${uid}-clip)`} />

      {/* current period line */}
      <motion.path
        d={linePath}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: active || reduce ? 1 : 0 }}
        transition={{ duration: 1.5, ease: EASE }}
      />

      {h !== null && (
        <g pointerEvents="none">
          <line x1={cur[h].x} x2={cur[h].x} y1={PAD.t} y2={PAD.t + plotH} stroke="rgba(255,255,255,0.25)" />
          <circle cx={cur[h].x} cy={cur[h].y} r="4.5" fill="var(--ink)" stroke="var(--accent)" strokeWidth="2" />
          <g transform={`translate(${tipX - 60} ${Math.max(PAD.t, cur[h].y - 54)})`}>
            <rect width="120" height="42" rx="6" fill="#0e0e0e" stroke="rgba(255,255,255,0.18)" />
            <text x="10" y="17" className="fill-[#808080] font-mono" fontSize="9.5">
              {n <= 7 ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][h] : `Day ${h + 1}`}
            </text>
            <text x="10" y="33" className="fill-white font-display" fontSize="13" fontWeight="800">
              {current[h].toLocaleString()}
              <tspan className="fill-[#808080]" fontSize="10" fontWeight="500">{`  vs ${previous[h].toLocaleString()}`}</tspan>
            </text>
          </g>
        </g>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Utilisation by hour — bars grow from the baseline, staggered.        */
/* ------------------------------------------------------------------ */

const BW = 640;
const BH = 220;
const BPAD = { l: 34, r: 8, t: 14, b: 26 };

export function HourBars({ values, active }: { values: number[]; active: boolean }) {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState<number | null>(null);
  const plotW = BW - BPAD.l - BPAD.r;
  const plotH = BH - BPAD.t - BPAD.b;
  const slot = plotW / values.length;
  const bar = slot * 0.64;
  const peak = Math.max(...values);

  return (
    <svg
      viewBox={`0 0 ${BW} ${BH}`}
      className="h-auto w-full"
      role="img"
      aria-label={`Charger utilisation by hour of day. Peak is ${peak}% at ${values.indexOf(peak)}:00.`}
      onPointerLeave={() => setHover(null)}
    >
      {[0, 25, 50, 75, 100].map((t) => {
        const yy = BPAD.t + plotH - (t / 100) * plotH;
        return (
          <g key={t}>
            <line x1={BPAD.l} x2={BW - BPAD.r} y1={yy} y2={yy} stroke="rgba(255,255,255,0.07)" strokeDasharray={t === 0 ? undefined : "2 5"} />
            <text x={BPAD.l - 8} y={yy + 3.5} textAnchor="end" className="fill-[#808080] font-mono" fontSize="10">
              {t}%
            </text>
          </g>
        );
      })}

      {values.map((v, i) => {
        const hgt = (v / 100) * plotH;
        const bx = BPAD.l + i * slot + (slot - bar) / 2;
        const isPeak = v >= 70;
        return (
          <g key={i} onPointerEnter={() => setHover(i)}>
            <rect x={BPAD.l + i * slot} y={BPAD.t} width={slot} height={plotH} fill="transparent" />
            <motion.rect
              x={bx}
              y={BPAD.t + plotH - hgt}
              width={bar}
              height={hgt}
              rx="2"
              fill="var(--accent)"
              fillOpacity={hover === i ? 1 : isPeak ? 0.95 : 0.4}
              style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
              initial={reduce ? false : { scaleY: 0 }}
              animate={{ scaleY: active || reduce ? 1 : 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: reduce ? 0 : i * 0.03 }}
            />
          </g>
        );
      })}

      {values.map((_, i) =>
        i % 3 === 0 ? (
          <text key={i} x={BPAD.l + i * slot + slot / 2} y={BH - 8} textAnchor="middle" className="fill-[#808080] font-mono" fontSize="10">
            {String(i).padStart(2, "0")}
          </text>
        ) : null,
      )}

      {hover !== null && (
        <g pointerEvents="none">
          <rect
            x={Math.min(Math.max(BPAD.l + hover * slot + slot / 2 - 44, BPAD.l), BW - BPAD.r - 88)}
            y={BPAD.t - 2}
            width="88"
            height="22"
            rx="5"
            fill="#0e0e0e"
            stroke="rgba(255,255,255,0.18)"
          />
          <text
            x={Math.min(Math.max(BPAD.l + hover * slot + slot / 2, BPAD.l + 44), BW - BPAD.r - 44)}
            y={BPAD.t + 13}
            textAnchor="middle"
            className="fill-white font-mono"
            fontSize="10.5"
          >
            {String(hover).padStart(2, "0")}:00 · {values[hover]}%
          </text>
        </g>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Donut — arcs sweep in one after another.                             */
/* ------------------------------------------------------------------ */

export function Donut({
  slices,
  active,
  centre,
}: {
  slices: { label: string; share: number }[];
  active: boolean;
  centre: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const r = 54;
  const circ = 2 * Math.PI * r;
  const shades = ["var(--accent)", "rgba(139,251,3,0.55)", "rgba(139,251,3,0.25)"];
  const starts = slices.map((_, i) => slices.slice(0, i).reduce((a, s) => a + s.share, 0));

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[210px]">
      <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90" role="img" aria-label={slices.map((s) => `${s.label} ${s.share}%`).join(", ")}>
        <circle cx="70" cy="70" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="14" />
        {slices.map((s, i) => {
          const len = (s.share / 100) * circ;
          const gap = 3;
          const offset = (starts[i] / 100) * circ;
          return (
            <motion.circle
              key={s.label}
              cx="70"
              cy="70"
              r={r}
              fill="none"
              stroke={shades[i]}
              strokeWidth="14"
              strokeDashoffset={-offset}
              initial={reduce ? false : { strokeDasharray: `0 ${circ}` }}
              animate={{ strokeDasharray: active || reduce ? `${Math.max(len - gap, 0)} ${circ}` : `0 ${circ}` }}
              transition={{ duration: 0.9, ease: EASE, delay: reduce ? 0 : 0.2 + i * 0.25 }}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">{centre}</div>
    </div>
  );
}
