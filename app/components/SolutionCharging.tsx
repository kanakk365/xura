function SpecChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-paper/[0.08] bg-paper/[0.02] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-paper/70">
      <span className="h-1 w-1 rounded-full bg-accent" />
      {children}
    </span>
  );
}

const COS30 = 0.8660254037844387;
const SIN30 = 0.5;
const LOT_X = 140;
const LOT_Y = 180;

function iso(wx: number, wy: number): [number, number] {
  return [LOT_X + (wx - wy) * COS30, LOT_Y + (wx + wy) * SIN30];
}

const STALL_W = 42;
const STALL_D = 52;
const COLS = 4;
const ROWS = 2;

type StallCell = { col: number; row: number };
const STALLS: StallCell[] = Array.from({ length: ROWS }, (_, row) =>
  Array.from({ length: COLS }, (_, col) => ({ col, row })),
).flat();

function stallTransform(col: number, row: number) {
  const [tx, ty] = iso(col * STALL_W, row * STALL_D);
  return `matrix(0.866 0.5 -0.866 0.5 ${tx} ${ty})`;
}

// Iso 3D pedestal tower (Svg4-inspired). Anchored at base back-left corner (px, py)
// in screen space. Renders FRONT, RIGHT, and TOP faces with white strokes and a
// subtle gradient fill. The pedestal stands upright (height = H in screen units).
function ChargerTower({
  px,
  py,
  active = false,
}: {
  px: number;
  py: number;
  active?: boolean;
}) {
  const W = 18;
  const D = 18;
  const H = 56;
  const Dx = D * COS30; // D * 0.866
  const Dy = D * SIN30; // D * 0.5
  const Wx = W * COS30;
  const Wy = W * SIN30;

  // top face: rect W x D under matrix(0.866 0.5 -0.866 0.5 px py-H)
  // front face: rect W x H under matrix(0.866 0.5 0 1 px-Dx py+Dy-H)
  // right face: rect D x H under matrix(-0.866 0.5 0 1 px+Wx py+Wy-H)

  const strokeColor = active ? "#8bfb03" : "rgba(139,251,3,0.45)";
  const accentStroke = active ? "#8bfb03" : "rgba(255,255,255,0.4)";

  return (
    <g
      style={
        active
          ? { filter: "drop-shadow(0 0 6px rgba(139,251,3,0.35))" }
          : undefined
      }
    >
      {/* ground shadow */}
      <ellipse
        cx={px + Wx / 2 - Dx / 2}
        cy={py + Wy / 2 + Dy / 2 + 4}
        rx="14"
        ry="4"
        fill="#000"
        opacity="0.55"
      />

      {/* front face — rect W x H */}
      <g transform={`matrix(0.866 0.5 0 1 ${px - Dx} ${py + Dy - H})`}>
        <rect
          x="0.5"
          y="0.5"
          width={W - 1}
          height={H - 1}
          rx="3"
          fill={active ? "url(#tower-active-fill)" : "url(#tower-idle-fill)"}
          stroke={strokeColor}
          strokeWidth="1.4"
        />
        {/* subtle inner trace */}
        <line
          x1="3"
          y1="14"
          x2={W - 3}
          y2="14"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="0.4"
        />
        {/* charging status bar (active only) */}
        {active && (
          <g>
            <rect
              x="3"
              y="20"
              width={W - 6}
              height="2.2"
              rx="0.5"
              fill="rgba(255,255,255,0.1)"
            />
            <rect
              x="3"
              y="20"
              width={(W - 6) * 0.7}
              height="2.2"
              rx="0.5"
              fill="#8bfb03"
              className="soc-pulse"
            />
          </g>
        )}
        {/* cable port slot (lower portion) */}
        <rect
          x="3"
          y={H - 22}
          width={W - 6}
          height="6"
          rx="1"
          fill="#060606"
          stroke={accentStroke}
          strokeWidth="0.5"
        />
        <rect
          x="4.5"
          y={H - 20.5}
          width={W - 9}
          height="3"
          rx="0.5"
          fill={active ? "#5da302" : "rgba(255,255,255,0.18)"}
        />
        {/* lower vents */}
        <line x1="3" y1={H - 10} x2={W - 3} y2={H - 10} stroke="rgba(255,255,255,0.18)" strokeWidth="0.4" />
        <line x1="3" y1={H - 7} x2={W - 3} y2={H - 7} stroke="rgba(255,255,255,0.18)" strokeWidth="0.4" />
        <line x1="3" y1={H - 4} x2={W - 3} y2={H - 4} stroke="rgba(255,255,255,0.18)" strokeWidth="0.4" />
      </g>

      {/* right face — rect D x H */}
      <g transform={`matrix(-0.866 0.5 0 1 ${px + Wx} ${py + Wy - H})`}>
        <rect
          x="0.5"
          y="0.5"
          width={D - 1}
          height={H - 1}
          rx="3"
          fill={active ? "url(#tower-active-side)" : "url(#tower-idle-side)"}
          stroke={strokeColor}
          strokeWidth="1.4"
        />
        {/* subtle vertical seam */}
        <line
          x1={D / 2}
          y1="4"
          x2={D / 2}
          y2={H - 4}
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="0.4"
        />
      </g>

      {/* top face — rect W x D rounded */}
      <g transform={`matrix(0.866 0.5 -0.866 0.5 ${px} ${py - H})`}>
        <rect
          x="0.5"
          y="0.5"
          width={W - 1}
          height={D - 1}
          rx="3"
          fill={active ? "rgba(139,251,3,0.22)" : "rgba(139,251,3,0.06)"}
          stroke={active ? "#8bfb03" : "rgba(139,251,3,0.55)"}
          strokeWidth="1.4"
        />
      </g>

      {/* charge symbol on top face */}
      <g
        transform={`translate(${px + Wx / 2 - Dx / 2} ${py + Wy / 2 + Dy / 2 - H})`}
      >
        <path
          d="M -3 -4 L 1 -4 L -1 0 L 3 0 L -1 5"
          stroke={active ? "#8bfb03" : "#ffffff"}
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

    </g>
  );
}


// Iso 3D container (Svg5-inspired). Used for BESS at the upper-right.
function IsoContainer({
  x,
  y,
  W = 64,
  D = 48,
  H = 38,
}: {
  x: number;
  y: number;
  W?: number;
  D?: number;
  H?: number;
}) {
  const Dx = D * COS30;
  const Dy = D * SIN30;
  const Wx = W * COS30;
  const Wy = W * SIN30;
  return (
    <g style={{ filter: "drop-shadow(0 0 6px rgba(139,251,3,0.3))" }}>
      {/* front face */}
      <g transform={`matrix(0.866 0.5 0 1 ${x - Dx} ${y + Dy - H})`}>
        <rect
          x="0.5"
          y="0.5"
          width={W - 1}
          height={H - 1}
          rx="3"
          fill="url(#bess-front-fill)"
          stroke="#8bfb03"
          strokeWidth="1.4"
        />
        {/* cell grid */}
        {Array.from({ length: 2 }).map((_, row) =>
          Array.from({ length: 4 }).map((_, col) => {
            const cx2 = 6 + col * 13;
            const cy2 = 8 + row * 13;
            const live = (row + col) % 2 === 0;
            return (
              <rect
                key={`bess-c-${row}-${col}`}
                x={cx2}
                y={cy2}
                width="10"
                height="10"
                rx="1"
                fill={live ? "rgba(139,251,3,0.28)" : "rgba(139,251,3,0.04)"}
                stroke={live ? "#8bfb03" : "rgba(139,251,3,0.45)"}
                strokeWidth="0.5"
              />
            );
          }),
        )}
      </g>
      {/* right face */}
      <g transform={`matrix(-0.866 0.5 0 1 ${x + Wx} ${y + Wy - H})`}>
        <rect
          x="0.5"
          y="0.5"
          width={D - 1}
          height={H - 1}
          rx="3"
          fill="url(#bess-side-fill)"
          stroke="rgba(139,251,3,0.55)"
          strokeWidth="1.3"
        />
        {/* status LEDs on side */}
        <circle cx="6" cy="6" r="1.4" fill="#8bfb03" className="pulse-dot" />
        <circle cx="6" cy="12" r="1.1" fill="rgba(255,255,255,0.5)" />
        <circle cx="6" cy="17" r="1.1" fill="rgba(255,255,255,0.32)" />
        {/* vertical seam */}
        <line x1={D / 2} y1="6" x2={D / 2} y2={H - 6} stroke="rgba(255,255,255,0.18)" strokeWidth="0.4" />
      </g>
      {/* top face */}
      <g transform={`matrix(0.866 0.5 -0.866 0.5 ${x} ${y - H})`}>
        <rect
          x="0.5"
          y="0.5"
          width={W - 1}
          height={D - 1}
          rx="3"
          fill="rgba(139,251,3,0.1)"
          stroke="#8bfb03"
          strokeWidth="1.4"
        />
        {/* top vents */}
        <line x1="6" y1={D * 0.3} x2={W - 6} y2={D * 0.3} stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
        <line x1="6" y1={D * 0.5} x2={W - 6} y2={D * 0.5} stroke="rgba(255,255,255,0.35)" strokeWidth="0.5" />
        <line x1="6" y1={D * 0.7} x2={W - 6} y2={D * 0.7} stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
      </g>

    </g>
  );
}

// Small iso card used for the Utility source (upper-left).
function IsoUtilityCard({ x, y }: { x: number; y: number }) {
  const W = 30;
  const D = 30;
  const H = 18;
  const Dx = D * COS30;
  const Dy = D * SIN30;
  const Wx = W * COS30;
  const Wy = W * SIN30;
  return (
    <g style={{ filter: "drop-shadow(0 0 5px rgba(139,251,3,0.3))" }}>
      {/* front face */}
      <g transform={`matrix(0.866 0.5 0 1 ${x - Dx} ${y + Dy - H})`}>
        <rect x="0.5" y="0.5" width={W - 1} height={H - 1} rx="2.5" fill="url(#util-front-fill)" stroke="#8bfb03" strokeWidth="1.3" />
      </g>
      {/* right face */}
      <g transform={`matrix(-0.866 0.5 0 1 ${x + Wx} ${y + Wy - H})`}>
        <rect x="0.5" y="0.5" width={D - 1} height={H - 1} rx="2.5" fill="url(#util-side-fill)" stroke="rgba(139,251,3,0.6)" strokeWidth="1.2" />
      </g>
      {/* top face */}
      <g transform={`matrix(0.866 0.5 -0.866 0.5 ${x} ${y - H})`}>
        <rect x="0.5" y="0.5" width={W - 1} height={D - 1} rx="2.5" fill="rgba(139,251,3,0.1)" stroke="#8bfb03" strokeWidth="1.3" />
      </g>
      {/* lightning symbol on top */}
      <g transform={`translate(${x + Wx / 2 - Dx / 2} ${y + Wy / 2 + Dy / 2 - H})`}>
        <path
          d="M -3 -5 L 1 -5 L -1 0 L 3 0 L -1 6"
          stroke="#8bfb03"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  );
}

export function SolutionCharging() {
  return (
    <div className="group relative h-full min-h-[540px] overflow-hidden bg-[#080808]">
      <div
        aria-hidden="true"
        className="absolute inset-0 "
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 grid-lines opacity-[0.12]"
      />

      <div className="absolute inset-0 flex items-start justify-center pt-10 pb-[170px]">
        <svg
          viewBox="0 0 480 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[96%] max-w-[440px] transition-transform duration-700 ease-out group-hover:-translate-y-1"
        >
          <defs>
            <linearGradient id="bus-flow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#8bfb03" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#8bfb03" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="feeder-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#8bfb03" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="tower-active-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#5da302" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="tower-idle-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#5da302" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="tower-active-side" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#5da302" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="tower-idle-side" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#5da302" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="car-top-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#5da302" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="car-front-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#5da302" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="car-side-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#5da302" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="car-roof-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#5da302" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="bess-front-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#5da302" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="bess-side-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#5da302" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="util-front-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#5da302" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="util-side-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#5da302" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="current-flow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8bfb03" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#8bfb03" stopOpacity="1" />
              <stop offset="100%" stopColor="#8bfb03" stopOpacity="0.95" />
            </linearGradient>
            <radialGradient id="pulse-glow">
              <stop offset="0%" stopColor="#8bfb03" stopOpacity="1" />
              <stop offset="60%" stopColor="#8bfb03" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8bfb03" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* === Platform (the parking lot floor as a raised iso platform) === */}
          {/* Platform thickness — front side face (lower-left edge) */}
          <path
            d={`M ${iso(-10, 114).join(" ")} L ${iso(178, 114).join(" ")} L ${iso(178, 114)[0]} ${iso(178, 114)[1] + 7} L ${iso(-10, 114)[0]} ${iso(-10, 114)[1] + 7} Z`}
            fill="#050505"
            stroke="rgba(139,251,3,0.25)"
            strokeWidth="0.8"
          />
          {/* Platform thickness — right side face (lower-right edge) */}
          <path
            d={`M ${iso(178, -10).join(" ")} L ${iso(178, 114).join(" ")} L ${iso(178, 114)[0]} ${iso(178, 114)[1] + 7} L ${iso(178, -10)[0]} ${iso(178, -10)[1] + 7} Z`}
            fill="#080808"
            stroke="rgba(139,251,3,0.25)"
            strokeWidth="0.8"
          />
          {/* Platform top face */}
          <path
            d={`M ${iso(-10, -10).join(" ")} L ${iso(178, -10).join(" ")} L ${iso(178, 114).join(" ")} L ${iso(-10, 114).join(" ")} Z`}
            fill="#0e0e0e"
            stroke="#8bfb03"
            strokeOpacity="0.45"
            strokeWidth="1"
          />

          {/* === Parking spaces — grid of stall outlines on the platform.
                  Stalls closest to the chargers (back row, cols 2 & 3) are highlighted. === */}
          {STALLS.map((s) => {
            const isActive =
              (s.col === 2 && s.row === 0) || (s.col === 3 && s.row === 0);
            return (
              <rect
                key={`stall-${s.col}-${s.row}`}
                width={STALL_W}
                height={STALL_D}
                transform={stallTransform(s.col, s.row)}
                fill={
                  isActive ? "rgba(139,251,3,0.1)" : "rgba(255,255,255,0.018)"
                }
                stroke={isActive ? "#8bfb03" : "rgba(139,251,3,0.3)"}
                strokeWidth={isActive ? "1.3" : "0.7"}
                strokeDasharray={isActive ? "0" : "2 3"}
                style={
                  isActive
                    ? { filter: "drop-shadow(0 0 5px rgba(139,251,3,0.45))" }
                    : undefined
                }
              />
            );
          })}

          {/* --- Utility (top-left, grid source) --- */}
          <IsoUtilityCard x={48} y={55} />

          {/* --- BESS box (upper-right, the "box" — source for chargers) --- */}
          <IsoContainer x={400} y={92} W={64} D={48} H={38} />

          {/* --- Utility → BESS service feeder (static low-emphasis) --- */}
          <path
            d="M 70 78 Q 240 55 388 100"
            stroke="rgba(139,251,3,0.32)"
            strokeWidth="0.9"
            strokeDasharray="3 4"
            fill="none"
          />

          {/* --- Charging Station: 2 iso towers just outside back edge of parking lot,
                  aligned behind the highlighted stalls (col 2 and col 3, row 0) --- */}
          <ChargerTower px={iso(96, -34)[0]} py={iso(96, -34)[1]} active />
          <ChargerTower px={iso(138, -34)[0]} py={iso(138, -34)[1]} active />

          {/* --- Wire 1: BESS → Charger 1 (left tower) --- */}
          <g>
            <path
              d="M 432 130 Q 350 152 268 164"
              stroke="rgba(139,251,3,0.22)"
              strokeWidth="1.3"
              fill="none"
            />
            <path
              d="M 432 130 Q 350 152 268 164"
              stroke="url(#current-flow)"
              strokeWidth="1.7"
              strokeDasharray="6 4"
              className="trace-flow"
              fill="none"
              style={{ filter: "drop-shadow(0 0 4px rgba(139,251,3,0.55))" }}
            />
            <circle r="5.5" fill="url(#pulse-glow)" opacity="0.85">
              <animateMotion
                dur="2.2s"
                repeatCount="indefinite"
                path="M 432 130 Q 350 152 268 164"
              />
            </circle>
            <circle
              r="2.6"
              fill="#8bfb03"
              style={{ filter: "drop-shadow(0 0 6px rgba(139,251,3,0.95))" }}
            >
              <animateMotion
                dur="2.2s"
                repeatCount="indefinite"
                path="M 432 130 Q 350 152 268 164"
              />
            </circle>
            <circle r="2" fill="#8bfb03" opacity="0.6">
              <animateMotion
                dur="2.2s"
                repeatCount="indefinite"
                begin="-1.1s"
                path="M 432 130 Q 350 152 268 164"
              />
            </circle>
          </g>

          {/* --- Wire 2: BESS → Charger 2 (right tower) --- */}
          <g>
            <path
              d="M 432 130 Q 372 170 305 185"
              stroke="rgba(139,251,3,0.22)"
              strokeWidth="1.3"
              fill="none"
            />
            <path
              d="M 432 130 Q 372 170 305 185"
              stroke="url(#current-flow)"
              strokeWidth="1.7"
              strokeDasharray="6 4"
              className="trace-flow"
              fill="none"
              style={{ filter: "drop-shadow(0 0 4px rgba(139,251,3,0.55))" }}
            />
            <circle r="5.5" fill="url(#pulse-glow)" opacity="0.85">
              <animateMotion
                dur="2.2s"
                repeatCount="indefinite"
                begin="-0.55s"
                path="M 432 130 Q 372 170 305 185"
              />
            </circle>
            <circle
              r="2.6"
              fill="#8bfb03"
              style={{ filter: "drop-shadow(0 0 6px rgba(139,251,3,0.95))" }}
            >
              <animateMotion
                dur="2.2s"
                repeatCount="indefinite"
                begin="-0.55s"
                path="M 432 130 Q 372 170 305 185"
              />
            </circle>
            <circle r="2" fill="#8bfb03" opacity="0.6">
              <animateMotion
                dur="2.2s"
                repeatCount="indefinite"
                begin="-1.65s"
                path="M 432 130 Q 372 170 305 185"
              />
            </circle>
          </g>

          {/* static connector dots at BESS output and each charger top */}
          <circle
            cx="432"
            cy="130"
            r="2.6"
            fill="#8bfb03"
            style={{ filter: "drop-shadow(0 0 5px rgba(139,251,3,0.75))" }}
          />
          <circle
            cx="268"
            cy="164"
            r="2.2"
            fill="#8bfb03"
            style={{ filter: "drop-shadow(0 0 5px rgba(139,251,3,0.75))" }}
          />
          <circle
            cx="305"
            cy="185"
            r="2.2"
            fill="#8bfb03"
            style={{ filter: "drop-shadow(0 0 5px rgba(139,251,3,0.75))" }}
          />
        </svg>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-64 bg-gradient-to-t from-[#080808] via-[#080808]/85 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7">
        <h3 className="font-display tracking-normal text-xl font-normal leading-tight text-paper sm:text-[1.65rem]">
          Sized to your service.
        </h3>
        <p className="mt-2 max-w-sm text-xs leading-relaxed text-paper/60 sm:text-sm">
          Level&nbsp;3 DC fast charging, staged with on-site storage when your
          service can&rsquo;t carry the load alone.
        </p>
      </div>
    </div>
  );
}
