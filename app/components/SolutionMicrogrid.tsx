"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const ACCENT = "#8bfb03";
const TRACE_COLOR = "rgba(139,251,3,0.28)";
const PULSE_COLOR = "#8bfb03";
const NODE_COLOR = "rgba(139,251,3,0.7)";
const GRID_COLOR = "rgba(255,255,255,0.06)";

interface CircuitNode {
  id: string;
  x: number;
  y: number;
  label: string;
  icon: ReactNode;
  status?: "active" | "processing";
  size?: "sm" | "md" | "lg";
}

interface CircuitConnection {
  from: string;
  to: string;
  delay?: number;
}

const VIEW_W = 480;
const VIEW_H = 160;

const NODES: CircuitNode[] = [
  {
    id: "ems",
    x: 240,
    y: 35,
    label: "EMS",
    status: "active",
    size: "lg",
    icon: <CpuIcon />,
  },
  {
    id: "store",
    x: 80,
    y: 115,
    label: "Store",
    status: "active",
    icon: <BatteryIcon />,
  },
  {
    id: "charge",
    x: 240,
    y: 115,
    label: "Charge",
    status: "processing",
    icon: <PlugIcon />,
  },
  {
    id: "grid",
    x: 400,
    y: 115,
    label: "Grid",
    status: "active",
    icon: <BoltIcon />,
  },
];

const CONNECTIONS: CircuitConnection[] = [
  { from: "ems", to: "store", delay: 0 },
  { from: "ems", to: "charge", delay: 0.25 },
  { from: "ems", to: "grid", delay: 0.5 },
];

function nodeSize(size?: CircuitNode["size"]) {
  switch (size) {
    case "sm":
      return 26;
    case "lg":
      return 44;
    default:
      return 34;
  }
}

function calculatePath(from: CircuitNode, to: CircuitNode): string {
  const fromR = nodeSize(from.size) / 2 + 4;
  const toR = nodeSize(to.size) / 2 + 4;
  const dx = to.x - from.x;
  const dy = to.y - from.y;

  if (Math.abs(dx) > Math.abs(dy)) {
    const startX = from.x + (dx > 0 ? fromR : -fromR);
    const endX = to.x + (dx > 0 ? -toR : toR);
    const midX = from.x + dx / 2;
    return `M ${startX} ${from.y} H ${midX} V ${to.y} H ${endX}`;
  } else {
    const startY = from.y + (dy > 0 ? fromR : -fromR);
    const endY = to.y + (dy > 0 ? -toR : toR);
    const midY = from.y + dy / 2;
    return `M ${from.x} ${startY} V ${midY} H ${to.x} V ${endY}`;
  }
}

export function SolutionMicrogrid() {
  const nodeMap = new Map(NODES.map((n) => [n.id, n]));
  const pathLen = 360;
  const pulseSpeed = 5;

  return (
    <div className="group relative h-full min-h-[340px] overflow-hidden bg-[#080808] sm:min-h-[420px]">
      {/* Circuit canvas — centred in the figure plate */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div
          className="relative w-full"
          style={{
            maxWidth: 560,
            aspectRatio: `${VIEW_W} / ${VIEW_H}`,
          }}
        >
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0 h-full w-full"
            style={{ overflow: "visible" }}
          >
            <defs>
              <filter
                id="circuitGlow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <pattern
                id="circuitDots"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="0.6" fill={GRID_COLOR} />
              </pattern>
            </defs>

            {/* Dot grid background */}
            <rect width={VIEW_W} height={VIEW_H} fill="url(#circuitDots)" />

            {/* Connections */}
            {CONNECTIONS.map((conn, i) => {
              const fromNode = nodeMap.get(conn.from);
              const toNode = nodeMap.get(conn.to);
              if (!fromNode || !toNode) return null;
              const d = calculatePath(fromNode, toNode);
              const drawDelay = (conn.delay ?? i * 0.2) + 0.2;

              return (
                <g key={`${conn.from}-${conn.to}`}>
                  {/* Base trace */}
                  <motion.path
                    d={d}
                    fill="none"
                    stroke={TRACE_COLOR}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                    transition={{ duration: 1, delay: drawDelay }}
                  />
                  {/* Animated electric pulse */}
                  <motion.path
                    d={d}
                    fill="none"
                    stroke={PULSE_COLOR}
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#circuitGlow)"
                    strokeDasharray={`${pathLen * 0.1} ${pathLen * 0.9}`}
                    initial={{ strokeDashoffset: pathLen }}
                    animate={{ strokeDashoffset: -pathLen }}
                    transition={{
                      duration: pulseSpeed,
                      repeat: Infinity,
                      ease: "linear",
                      delay: drawDelay + 0.4,
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Nodes (DOM elements positioned over SVG) */}
          {NODES.map((node, i) => {
            const size = nodeSize(node.size);
            return (
              <motion.div
                key={node.id}
                className="absolute flex items-center justify-center"
                style={{
                  left: `calc(${(node.x / VIEW_W) * 100}% - ${size / 2}px)`,
                  top: `calc(${(node.y / VIEW_H) * 100}% - ${size / 2}px)`,
                  width: size,
                  height: size,
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                transition={{
                  delay: i * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 240,
                  damping: 18,
                }}
              >
                {/* Background fill */}
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    backgroundColor: NODE_COLOR,
                    opacity: node.status === "processing" ? 0.18 : 0.14,
                  }}
                />
                {node.status === "processing" && (
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    style={{ backgroundColor: NODE_COLOR }}
                    animate={{ opacity: [0.15, 0.4, 0.15] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                  />
                )}

                {/* Border */}
                <div
                  className="absolute inset-0 rounded-lg border-2"
                  style={{ borderColor: NODE_COLOR }}
                />

                {/* Active glow */}
                {node.status === "active" && (
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    style={{
                      boxShadow: `0 0 18px ${ACCENT}55, inset 0 0 8px ${ACCENT}22`,
                    }}
                    animate={{ opacity: [0.55, 1, 0.55] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                  />
                )}

                {/* Icon */}
                <div
                  className="relative z-10 flex items-center justify-center"
                  style={{ color: ACCENT }}
                >
                  {node.icon}
                </div>

                {/* Label */}
                <div
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.12em]"
                  style={{ color: ACCENT }}
                >
                  {node.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Title and specs now live in the card body below the figure. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-24 bg-gradient-to-t from-[#080808] to-transparent"
      />
    </div>
  );
}

function CpuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="17" height="10" rx="1.5" />
      <line x1="22" y1="11" x2="22" y2="13" />
      <line x1="6" y1="11" x2="6" y2="13" />
      <line x1="10" y1="11" x2="10" y2="13" />
      <line x1="14" y1="11" x2="14" y2="13" />
    </svg>
  );
}

function PlugIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}
