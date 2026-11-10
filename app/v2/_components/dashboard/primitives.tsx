"use client";

import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { useEffect } from "react";

export const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

/** Number that ticks up from 0 once `active` flips true. Settles instantly under reduced motion. */
export function Counter({
  to,
  active,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.5,
}: {
  to: number;
  active: boolean;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) =>
    `${prefix}${v.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}${suffix}`,
  );

  useEffect(() => {
    if (!active) return;
    if (reduce) {
      mv.set(to);
      return;
    }
    const controls = animate(mv, to, { duration, ease: EASE });
    return () => controls.stop();
  }, [active, to, reduce, duration, mv]);

  return <motion.span>{text}</motion.span>;
}

/** Catmull-Rom → cubic Bézier smoothing through the given points. */
export function smoothPath(pts: { x: number; y: number }[]) {
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const t = 0.18;
    const c1x = p1.x + (p2.x - p0.x) * t;
    const c1y = p1.y + (p2.y - p0.y) * t;
    const c2x = p2.x - (p3.x - p1.x) * t;
    const c2y = p2.y - (p3.y - p1.y) * t;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }
  return d;
}
