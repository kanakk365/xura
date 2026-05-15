"use client";

import { motion } from "motion/react";
import { HeroTopSvg } from "./HeroTopSvg";
import { HeroMiddleSvg } from "./HeroMiddleSvg";
import { HeroBottomSvg } from "./HeroBottomSvg";

const EXPLOSION = {
  duration: 0.85,
  initialDelay: 0.6,
} as const;

const FINAL_Y = {
  top: -108,
  middle: 0,
  bottom: 108,
} as const;

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

// Per-corner connector positions, ported from design_reff.md (HeroAnimation).
// Each entry is one dotted line — x is offset from container center, y is its
// vertical top. Values are scaled 0.744× from the reference (which renders the
// SVGs at natural sizes ~753 wide; we render the top SVG at 560 wide).
const CORNERS = {
  topToMiddle: [
    { x: 246, y: 245 },
    { x: -120, y: 245 },
  ],
  middleToBottom: [
    { x: 247, y: 393 },
    { x: -120, y: 393 },
  ],
} as const;

const LINE_HEIGHT = 100;

function ConnectingLine({
  x,
  topOffset,
  height,
  delay,
  direction,
}: {
  x: number;
  topOffset: number;
  height: number;
  delay: number;
  direction: "up" | "down";
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `calc(50% + ${x}px)`,
        top: topOffset,
        transformOrigin: direction === "up" ? "bottom center" : "top center",
      }}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{
        duration: EXPLOSION.duration,
        ease: EASE_OUT,
        delay,
      }}
    >
      <svg
        width="2"
        height={height}
        viewBox={`0 0 2 ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="1"
          y1="0"
          x2="1"
          y2={height}
          stroke="rgba(139,251,3,0.5)"
          strokeDasharray="6 6"
          strokeWidth="1"
        />
      </svg>
    </motion.div>
  );
}

export function SolutionStorage() {
  const lineHeight = LINE_HEIGHT;

  return (
    <div className="group relative h-full min-h-[900px] overflow-hidden bg-[#080808]">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid-lines opacity-[0.08]"
      />

      <div className="absolute inset-x-0 top-0 bottom-[200px] overflow-hidden">
        <div className="relative flex h-full flex-col items-center justify-start pt-32 -translate-x-10">
          {/* === Top: the diamond-lattice illustration with iso cards === */}
          <motion.div
            className="relative z-30 flex justify-center"
            initial={{ y: 0 }}
            animate={{ y: FINAL_Y.top }}
            transition={{
              duration: EXPLOSION.duration,
              ease: EASE_OUT,
              delay: EXPLOSION.initialDelay,
            }}
          >
            <HeroTopSvg className="w-full max-w-[560px] h-auto" />
          </motion.div>

          {/* Connector lines top → middle */}
          <div className="absolute inset-0 z-25 pointer-events-none">
            {CORNERS.topToMiddle.map((corner, index) => (
              <ConnectingLine
                key={`top-middle-${index}`}
                x={corner.x}
                topOffset={corner.y}
                height={lineHeight}
                delay={EXPLOSION.initialDelay}
                direction="up"
              />
            ))}
          </div>

          {/* === Middle: the platform with 4 iso cards === */}
          <div className="relative z-20 flex justify-center -mt-52 ml-32">
            <HeroMiddleSvg className="w-full max-w-[370px] h-auto" />
          </div>

          {/* Connector lines middle → bottom */}
          <div className="absolute inset-0 z-15 pointer-events-none">
            {CORNERS.middleToBottom.map((corner, index) => (
              <ConnectingLine
                key={`middle-bottom-${index}`}
                x={corner.x}
                topOffset={corner.y}
                height={lineHeight}
                delay={EXPLOSION.initialDelay}
                direction="down"
              />
            ))}
          </div>

          {/* === Bottom: the stacked iso staircase === */}
          <motion.div
            className="relative z-10 flex justify-center -mt-60 ml-2"
            initial={{ y: 0 }}
            animate={{ y: FINAL_Y.bottom }}
            transition={{
              duration: EXPLOSION.duration,
              ease: EASE_OUT,
              delay: EXPLOSION.initialDelay,
            }}
          >
            <HeroBottomSvg className="w-full max-w-[492px] h-auto" />
          </motion.div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-44 bg-gradient-to-t from-[#080808] via-[#080808]/85 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7">
        <h3 className="font-display tracking-normal text-xl font-normal leading-tight text-paper sm:text-[1.65rem]">
          Storage that survives audit.
        </h3>
        <p className="mt-2 max-w-sm text-xs leading-relaxed text-paper/60 sm:text-sm">
          UL&nbsp;9540A-tested systems with onboard BMS, NFPA&nbsp;855 siting,
          and 24/7 telemetry.
        </p>
      </div>
    </div>
  );
}
