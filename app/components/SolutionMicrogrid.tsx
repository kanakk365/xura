function MiniStat({
  label,
  value,
  unit,
  accent,
}: {
  label: string;
  value: string;
  unit: string;
  accent?: boolean;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-mute">
        {label}
      </span>
      <span
        className={`font-display tracking-normal text-2xl font-normal leading-none ${
          accent ? "text-accent" : "text-paper"
        }`}
      >
        {value}
        <span className="ml-1 font-body text-[10px] font-medium text-mute">
          {unit}
        </span>
      </span>
    </div>
  );
}

function BreakerSymbol({
  cx,
  cy,
  closed = true,
}: {
  cx: number;
  cy: number;
  closed?: boolean;
}) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r="4.4"
        fill="#080808"
        stroke={closed ? "#8bfb03" : "rgba(255,255,255,0.45)"}
        strokeWidth="0.9"
      />
      {closed ? (
        <line
          x1={cx - 2.4}
          y1={cy + 1.2}
          x2={cx + 2.4}
          y2={cy - 1.2}
          stroke="#8bfb03"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      ) : (
        <line
          x1={cx - 2.4}
          y1={cy - 1.6}
          x2={cx + 2.4}
          y2={cy - 1.6}
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      )}
    </g>
  );
}

function Block({
  x,
  y,
  w,
  h,
  label,
  spec,
  active = false,
  variant = "load",
  children,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  spec: string;
  active?: boolean;
  variant?: "source" | "load" | "store";
  children: React.ReactNode;
}) {
  const strokeColor = active ? "#8bfb03" : "rgba(255,255,255,0.32)";
  const fillColor = active
    ? "rgba(139,251,3,0.08)"
    : variant === "source"
      ? "rgba(255,255,255,0.025)"
      : "rgba(255,255,255,0.015)";
  return (
    <g
      style={
        active
          ? { filter: "drop-shadow(0 0 5px rgba(139,251,3,0.4))" }
          : undefined
      }
    >
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="2.4"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="0.9"
      />
      {/* corner ticks for SCADA feel */}
      <path
        d={`M ${x + 1.6} ${y + 5} L ${x + 1.6} ${y + 1.6} L ${x + 5} ${y + 1.6}`}
        stroke={strokeColor}
        strokeOpacity="0.7"
        strokeWidth="0.6"
        fill="none"
      />
      <path
        d={`M ${x + w - 1.6} ${y + 5} L ${x + w - 1.6} ${y + 1.6} L ${x + w - 5} ${y + 1.6}`}
        stroke={strokeColor}
        strokeOpacity="0.7"
        strokeWidth="0.6"
        fill="none"
      />
      <path
        d={`M ${x + 1.6} ${y + h - 5} L ${x + 1.6} ${y + h - 1.6} L ${x + 5} ${y + h - 1.6}`}
        stroke={strokeColor}
        strokeOpacity="0.7"
        strokeWidth="0.6"
        fill="none"
      />
      <path
        d={`M ${x + w - 1.6} ${y + h - 5} L ${x + w - 1.6} ${y + h - 1.6} L ${x + w - 5} ${y + h - 1.6}`}
        stroke={strokeColor}
        strokeOpacity="0.7"
        strokeWidth="0.6"
        fill="none"
      />
      {/* status LED top-right */}
      <circle
        cx={x + w - 6}
        cy={y + 5.5}
        r="1.4"
        fill={active ? "#8bfb03" : "rgba(255,255,255,0.45)"}
        className={active ? "pulse-dot" : ""}
      />
      <text
        x={x + 6}
        y={y + 9}
        fontSize="6.4"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        fill={active ? "#8bfb03" : "rgba(255,255,255,0.7)"}
        letterSpacing="1.6"
        fontWeight="700"
      >
        {label}
      </text>
      <text
        x={x + 6}
        y={y + h - 4}
        fontSize="5.4"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        fill="rgba(255,255,255,0.55)"
        letterSpacing="1.2"
      >
        {spec}
      </text>
      {children}
    </g>
  );
}

export function SolutionMicrogrid() {
  return (
    <div className="group relative h-full min-h-[340px] overflow-hidden bg-[#080808]">
      <div
        aria-hidden="true"
        className="absolute inset-0 "
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 grid-lines opacity-[0.13]"
      />

      <div className="absolute inset-0 flex items-center justify-center pt-10 pb-[160px]">
        <svg
          viewBox="0 0 480 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[96%] max-w-[500px]"
        >
          <defs>
            <linearGradient id="grid-flow-down" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8bfb03" stopOpacity="1" />
              <stop offset="100%" stopColor="#8bfb03" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="grid-flow-up" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#8bfb03" stopOpacity="1" />
              <stop offset="100%" stopColor="#8bfb03" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="grid-flow-h" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#8bfb03" stopOpacity="1" />
              <stop offset="100%" stopColor="#8bfb03" stopOpacity="0.2" />
            </linearGradient>
            <pattern
              id="solar-cells"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
            >
              <rect width="4" height="4" fill="rgba(139,251,3,0.05)" />
              <line
                x1="0"
                y1="0"
                x2="4"
                y2="0"
                stroke="rgba(139,251,3,0.45)"
                strokeWidth="0.3"
              />
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="4"
                stroke="rgba(139,251,3,0.45)"
                strokeWidth="0.3"
              />
            </pattern>
          </defs>

          {/* === SOURCES (top row) === */}

          {/* UTIL source */}
          <Block
            x={20}
            y={14}
            w={86}
            h={28}
            label="UTIL"
            spec="480V · 1200A"
            active
            variant="source"
          >
            {/* mini transformer symbol */}
            <g transform="translate(74 28)">
              <circle cx="0" cy="0" r="3.6" fill="none" stroke="#8bfb03" strokeWidth="0.7" />
              <circle cx="5" cy="0" r="3.6" fill="none" stroke="#8bfb03" strokeWidth="0.7" />
            </g>
          </Block>

          {/* PV source */}
          <Block
            x={376}
            y={14}
            w={86}
            h={28}
            label="SOLAR"
            spec="120 kW · DC"
            variant="source"
          >
            <rect
              x={426}
              y={20}
              width={16}
              height={16}
              fill="url(#solar-cells)"
              stroke="rgba(139,251,3,0.45)"
              strokeWidth="0.4"
            />
          </Block>

          {/* === wires from sources DOWN to bus === */}

          {/* UTIL feeder */}
          <g>
            <line x1="63" y1="42" x2="63" y2="56" stroke="rgba(255,255,255,0.25)" strokeWidth="0.9" />
            <BreakerSymbol cx={63} cy={60.5} closed />
            <line
              x1="63"
              y1="65"
              x2="63"
              y2="85"
              stroke="url(#grid-flow-down)"
              strokeWidth="1.4"
              strokeDasharray="3 3"
              className="trace-flow"
            />
          </g>

          {/* PV feeder */}
          <g>
            <line x1="419" y1="42" x2="419" y2="56" stroke="rgba(255,255,255,0.25)" strokeWidth="0.9" />
            <BreakerSymbol cx={419} cy={60.5} closed />
            <line
              x1="419"
              y1="65"
              x2="419"
              y2="85"
              stroke="url(#grid-flow-down)"
              strokeWidth="1.4"
              strokeDasharray="3 3"
              className="trace-flow"
            />
          </g>

          {/* === MAIN BUS at y=85 === */}
          <line
            x1="40"
            y1="85"
            x2="442"
            y2="85"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1.6"
          />
          {/* bus tick markers */}
          {[63, 130, 240, 350, 419].map((x) => (
            <line
              key={`tick-${x}`}
              x1={x}
              y1={82}
              x2={x}
              y2={88}
              stroke="rgba(255,255,255,0.55)"
              strokeWidth="1"
            />
          ))}
          {/* live overlay on bus */}
          <line
            x1="60"
            y1="85"
            x2="420"
            y2="85"
            stroke="url(#grid-flow-h)"
            strokeWidth="1.4"
            strokeDasharray="6 5"
            className="trace-flow"
            opacity="0.85"
          />

          {/* bus label */}
          <text
            x="46"
            y="80"
            fontSize="5.4"
            fontFamily="ui-monospace, SFMono-Regular, monospace"
            fill="rgba(255,255,255,0.5)"
            letterSpacing="1.4"
          >
            AC BUS · 480V
          </text>

          {/* === CONTROLLER BADGE (floating over bus) === */}
          <g
            transform="translate(240 85)"
            style={{ filter: "drop-shadow(0 0 6px rgba(139,251,3,0.55))" }}
          >
            <rect
              x="-36"
              y="-13"
              width="72"
              height="20"
              rx="3"
              fill="#080808"
              stroke="#8bfb03"
              strokeWidth="1.1"
            />
            <text
              x="-30"
              y="-4"
              fontSize="5.6"
              fontFamily="ui-monospace, SFMono-Regular, monospace"
              fill="rgba(139,251,3,0.6)"
              letterSpacing="1.4"
            >
              EMS · v3.1
            </text>
            <text
              x="-30"
              y="3.5"
              fontSize="7"
              fontFamily="ui-monospace, SFMono-Regular, monospace"
              fill="#8bfb03"
              letterSpacing="1.4"
              fontWeight="700"
            >
              CONTROLLER
            </text>
            <circle cx="28" cy="-3" r="1.4" fill="#8bfb03" className="pulse-dot" />
            <circle cx="22" cy="-3" r="1.2" fill="rgba(255,255,255,0.35)" />
          </g>

          {/* === Branch breakers from bus down to loads === */}

          {/* BESS branch */}
          <g>
            <line x1="90" y1="85" x2="90" y2="105" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <BreakerSymbol cx={90} cy={109.5} closed />
            <line
              x1="90"
              y1="114"
              x2="90"
              y2="138"
              stroke="url(#grid-flow-down)"
              strokeWidth="1.4"
              strokeDasharray="3 3"
              className="trace-flow"
            />
          </g>

          {/* DCFC branch */}
          <g>
            <line x1="240" y1="105" x2="240" y2="108" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <BreakerSymbol cx={240} cy={112} closed />
            <line
              x1="240"
              y1="116"
              x2="240"
              y2="138"
              stroke="url(#grid-flow-down)"
              strokeWidth="1.4"
              strokeDasharray="3 3"
              className="trace-flow"
              style={{ animationDelay: "0.25s" }}
            />
          </g>

          {/* LOAD branch */}
          <g>
            <line x1="390" y1="85" x2="390" y2="105" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <BreakerSymbol cx={390} cy={109.5} closed />
            <line
              x1="390"
              y1="114"
              x2="390"
              y2="138"
              stroke="url(#grid-flow-down)"
              strokeWidth="1.4"
              strokeDasharray="3 3"
              className="trace-flow"
              style={{ animationDelay: "0.5s" }}
            />
          </g>

          {/* === LOADS (bottom row) === */}

          {/* BESS */}
          <Block
            x={48}
            y={138}
            w={86}
            h={32}
            label="BESS"
            spec="215 kWh"
            active
            variant="store"
          >
            {/* SOC bar */}
            <rect
              x={56}
              y={156}
              width={70}
              height={4}
              rx="0.6"
              fill="rgba(255,255,255,0.08)"
            />
            <rect
              x={56}
              y={156}
              width={51}
              height={4}
              rx="0.6"
              fill="#8bfb03"
              className="soc-pulse"
            />
            <text
              x={130}
              y={159.5}
              textAnchor="end"
              fontSize="5.4"
              fontFamily="ui-monospace, SFMono-Regular, monospace"
              fill="#8bfb03"
              fontWeight="700"
              letterSpacing="0.8"
            >
              73%
            </text>
          </Block>

          {/* DCFC */}
          <Block
            x={198}
            y={138}
            w={86}
            h={32}
            label="DCFC"
            spec="240 kW · 3 ports"
            active
            variant="load"
          >
            {/* 3 port indicators */}
            <g transform="translate(204 156)">
              <rect width="22" height="5" rx="0.5" fill="rgba(255,255,255,0.06)" />
              <rect width="22" height="5" rx="0.5" fill="#8bfb03" opacity="0.9" />
              <rect x="26" width="22" height="5" rx="0.5" fill="rgba(255,255,255,0.06)" />
              <rect x="26" width="14" height="5" rx="0.5" fill="#8bfb03" opacity="0.7" />
              <rect x="52" width="22" height="5" rx="0.5" fill="rgba(255,255,255,0.06)" />
            </g>
          </Block>

          {/* LOAD */}
          <Block
            x={348}
            y={138}
            w={86}
            h={32}
            label="LOAD"
            spec="42 kW · facility"
            variant="load"
          >
            {/* facility icon */}
            <g transform="translate(425 154)" stroke="rgba(255,255,255,0.55)" strokeWidth="0.7" fill="none">
              <path d="M -6 4 L -6 -4 L 0 -7 L 6 -4 L 6 4 Z" />
              <line x1="-3" y1="4" x2="-3" y2="0" />
              <line x1="3" y1="4" x2="3" y2="0" />
            </g>
          </Block>

        </svg>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7">
        <div className="mb-4 flex items-center gap-6 sm:gap-8">
          <MiniStat label="import" value="42" unit="kW" />
          <MiniStat label="store" value="18" unit="kW" accent />
          <MiniStat label="deliver" value="240" unit="kW" />
        </div>
        <h3 className="font-display tracking-normal text-xl font-normal leading-tight  text-paper sm:text-[1.65rem]">
          One controller, three roles.
        </h3>
        <p className="mt-2 max-w-md text-xs leading-relaxed text-paper/60 sm:text-sm">
          Storage, charging, and grid interaction coordinated under your
          service ceiling — automatically.
        </p>
      </div>
    </div>
  );
}
