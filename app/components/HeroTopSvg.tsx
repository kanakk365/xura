import { useId } from "react";
import { HeroFyntBlock } from "./HeroFyntBlock";

interface HeroTopSvgProps {
  width?: number;
  height?: number;
  className?: string;
}

export function HeroTopSvg({
  width = 753,
  height = 436,
  className,
}: HeroTopSvgProps) {
  const id = useId();
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 753 436"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      className={className}
    >
      {/* === Big diamond lattice background — kept verbatim, colour set to our ink === */}
      <path
        d="M706.207 242.346c1.333.77 1.333 2.695 0 3.464l-34.814 20.1c-.33.191-.737.191-1.067 0l-.318-.183a.43.43 0 0 0-.433 0l-.116.067a.356.356 0 0 0 0 .616.355.355 0 0 1 0 .616l-54.162 31.271c-.33.19-.737.19-1.067 0l-.317-.183a.43.43 0 0 0-.433 0l-.116.066a.357.357 0 0 0 0 .617.356.356 0 0 1 0 .616l-54.162 31.27a1.07 1.07 0 0 1-1.068 0l-.317-.183a.44.44 0 0 0-.433 0l-.116.067a.356.356 0 0 0 0 .616.357.357 0 0 1 0 .617l-54.162 31.27c-.33.191-.737.191-1.067 0l-.318-.183a.44.44 0 0 0-.433 0l-.116.067a.356.356 0 0 0 0 .616.355.355 0 0 1 0 .616l-37.785 21.816a2 2 0 0 1-2 0l-38.012-21.946a.305.305 0 0 1 0-.529.306.306 0 0 0 0-.53l-.191-.11a.44.44 0 0 0-.433 0l-.242.14a.92.92 0 0 1-.918-.001l-54.312-31.357a.305.305 0 0 1 0-.529.306.306 0 0 0 0-.53l-.191-.11a.43.43 0 0 0-.432 0l-.243.14a.92.92 0 0 1-.918 0l-54.312-31.357a.306.306 0 0 1 .001-.53.306.306 0 0 0 0-.529l-.191-.111a.44.44 0 0 0-.433 0l-.243.14a.92.92 0 0 1-.917 0l-54.312-31.357a.306.306 0 0 1 0-.53.305.305 0 0 0 0-.529l-.19-.11a.43.43 0 0 0-.433 0l-.242.14a.92.92 0 0 1-.918-.001l-34.739-20.056c-1.333-.769-1.333-2.694 0-3.464l242.821-140.192a2 2 0 0 1 2 0z"
        fill="#0e0e0e"
        stroke="rgba(139,251,3,0.2)"
      />

      {/* Connector lines hint */}
      <path
        d="M709.209 292.798a2 2 0 0 1-1 1.732l-36.091 20.837a1.626 1.626 0 0 1-2.438-1.408v-2.066a.433.433 0 0 0-.867 0v4.227c0 .715-.381 1.375-1 1.732l-51.791 29.902a1.626 1.626 0 0 1-2.438-1.408v-2.067a.432.432 0 0 0-.865 0v4.227a2 2 0 0 1-1 1.732l-51.791 29.901a1.626 1.626 0 0 1-2.439-1.407v-2.066a.433.433 0 0 0-.866 0v4.226c0 .715-.381 1.375-1 1.733l-51.791 29.902a1.625 1.625 0 0 1-2.438-1.408v-2.066a.433.433 0 0 0-.867 0v4.227c0 .715-.381 1.375-1 1.732l-34.138 19.71c-1.334.77-3-.192-3-1.732v-45.256a2 2 0 0 1 1-1.732l242.82-140.192c1.333-.77 3 .192 3 1.732z"
        fill="#080808"
        stroke="rgba(139,251,3,0.18)"
      />

      <path
        d="M461.385 386.001c.619.358 1 1.018 1 1.732v45.257c0 1.54-1.667 2.502-3 1.733l-33.81-19.521a2 2 0 0 1-1-1.732v-5.065a.433.433 0 0 0-.866 0v2.485c0 1.437-1.556 2.336-2.802 1.617l-51.428-29.692a2 2 0 0 1-1-1.732v-5.065a.433.433 0 1 0-.865 0v2.486c0 1.437-1.556 2.335-2.801 1.617l-51.428-29.693a2 2 0 0 1-1-1.732v-5.065a.433.433 0 0 0-.866 0v2.485c0 1.438-1.557 2.337-2.802 1.618l-51.428-29.692a2 2 0 0 1-1-1.732v-5.065a.433.433 0 0 0-.866 0v2.484c0 1.438-1.557 2.337-2.802 1.618l-36.057-20.817a2 2 0 0 1-1-1.732v-45.257c0-1.54 1.667-2.502 3-1.732z"
        fill="#080808"
        stroke="rgba(139,251,3,0.18)"
      />

      {/* === Iso card top-right (the "fynt" anchor card with the floating block) === */}
      <path
        transform="matrix(.86603 .5 -.86603 .5 699.789 71)"
        fill="#121212"
        stroke="rgba(139,251,3,0.65)"
        d="M0 0h59.958v59.958H0z"
      />
      <path
        transform="matrix(.86603 .5 0 1 647.863 100.979)"
        fill="#1f1f1f"
        stroke="rgba(139,251,3,0.55)"
        d="M0 0h59.958v14.989H0z"
      />
      <path
        transform="matrix(.86603 -.5 0 1 699.789 130.957)"
        fill="#1f1f1f"
        stroke="rgba(139,251,3,0.55)"
        d="M0 0h59.958v14.989H0z"
      />
      <circle cx="1.319" cy="1.319" r="1.319" transform="matrix(.86603 .5 -.86603 .5 699.527 120.776)" fill="#d9d9d9" />
      <circle cx="1.319" cy="1.319" r="1.319" transform="matrix(.86603 .5 -.86603 .5 699.527 77.222)" fill="#d9d9d9" />
      <circle cx="1.319" cy="1.319" r="1.319" transform="matrix(.86603 .5 -.86603 .5 661.156 100.036)" fill="#d9d9d9" />
      <circle cx="1.319" cy="1.319" r="1.319" transform="matrix(.86603 .5 -.86603 .5 739.969 100.036)" fill="#d9d9d9" />

      {/* === Iso card center — the focal element with the gradient + Fynt block === */}
      <rect
        width="60.203"
        height="60.203"
        rx="2"
        transform="matrix(.86603 .5 -.86603 .5 462.613 197.9)"
        fill="#0c0c0c"
        stroke="#8bfb03"
      />
      <rect
        width="60.203"
        height="15.051"
        rx="2"
        transform="matrix(.86603 .5 0 1 410.473 228.003)"
        fill="#1f1f1f"
        stroke="#8bfb03"
      />
      <rect
        width="60.203"
        height="15.051"
        rx="2"
        transform="matrix(.86603 -.5 0 1 462.613 258.103)"
        fill="#1f1f1f"
        stroke="#8bfb03"
      />
      <path
        d="M501.533 224.608V177.82a4 4 0 0 0-4-4h-69.512a4 4 0 0 0-4 4v46.766a4 4 0 0 0 2.029 3.48l35.106 19.881a4 4 0 0 0 3.971-.017l34.405-19.858a4 4 0 0 0 2.001-3.464Z"
        fill={`url(#${id}-a)`}
        stroke={`url(#${id}-b)`}
      />
      <path
        transform="matrix(.86603 .5 -.86603 .5 462.63 207.182)"
        stroke="#d9d9d9"
        d="M0 .5h41.344v41.344H0z"
      />
      <path
        transform="matrix(.86603 .5 -.86603 .5 462.615 214.706)"
        stroke="#d9d9d9"
        d="M0 .5h25.687v25.687H0z"
      />
      <ellipse cx="462.023" cy="253.588" rx="1.129" ry=".753" fill="#d9d9d9" />
      <ellipse cx="508.682" cy="228.003" rx="1.129" ry=".753" fill="#d9d9d9" />
      <ellipse cx="416.871" cy="228.003" rx="1.129" ry=".753" fill="#d9d9d9" />

      {/* Floating Fynt block (animated) */}
      <HeroFyntBlock id={id} />

      {/* === Iso card lower-left (servers) === */}
      <rect
        width="60.392"
        height="60.392"
        rx="2"
        transform="matrix(.86603 .5 -.86603 .5 53.168 208)"
        fill="#0e0e0e"
        stroke="rgba(139,251,3,0.45)"
      />
      <path
        transform="matrix(.86603 .5 0 1 .865 238.196)"
        fill="#070707"
        stroke="rgba(139,251,3,0.45)"
        d="M0 0h60.203v26.339H0z"
      />
      <path
        transform="matrix(.86603 -.5 0 1 53.543 268.175)"
        fill="#070707"
        stroke="rgba(139,251,3,0.45)"
        d="M0 0h59.958v26.462H0z"
      />

      {/* === Iso card top-left (cards) === */}
      <rect
        width="60.392"
        height="60.392"
        rx="2"
        transform="matrix(.86603 .5 -.86603 .5 222.17 85)"
        fill="#0e0e0e"
        stroke="rgba(139,251,3,0.45)"
      />
      <path
        transform="matrix(.86603 .5 0 1 169.865 115.197)"
        fill="#070707"
        stroke="rgba(139,251,3,0.45)"
        d="M0 0h60.203v26.339H0z"
      />
      <path
        transform="matrix(.86603 -.5 0 1 222.545 145.175)"
        fill="#070707"
        stroke="rgba(139,251,3,0.45)"
        d="M0 0h59.958v26.462H0z"
      />
      <circle
        cx="2.287"
        cy="2.287"
        r="2.287"
        transform="matrix(.86603 .5 -.86603 .5 262.826 113)"
        fill="#8bfb03"
      />

      {/* === Iso card upper-mid (the highlighted one with the yellow circle) === */}
      <rect
        width="60.392"
        height="60.392"
        rx="2"
        transform="matrix(.86603 .5 -.86603 .5 358.168 10)"
        fill="#0e0e0e"
        stroke="rgba(139,251,3,0.45)"
      />
      <path
        transform="matrix(.86603 .5 0 1 305.865 40.196)"
        fill="#070707"
        stroke="rgba(139,251,3,0.45)"
        d="M0 0h60.203v26.339H0z"
      />
      <path
        transform="matrix(.86603 -.5 0 1 358.543 70.175)"
        fill="#070707"
        stroke="rgba(139,251,3,0.45)"
        d="M0 0h59.958v26.462H0z"
      />
      <circle
        cx="2.287"
        cy="2.287"
        r="2.287"
        transform="matrix(.86603 .5 -.86603 .5 396.826 38)"
        fill="#a8ff34"
      />

      {/* Small green accent rectangles (replacing the orange ones) */}
      <rect width="9.818" height="9.818" rx="1" transform="matrix(.86603 .5 -.86603 .5 461.871 358.191)" fill="#8bfb03" />
      <rect width="9.818" height="9.818" rx="1" transform="matrix(.86603 .5 -.86603 .5 674.084 236.28)" fill="#8bfb03" />
      <rect width="9.818" height="9.818" rx="1" transform="matrix(.86603 .5 -.86603 .5 251.16 236.28)" fill="#8bfb03" />
      <rect width="9.818" height="9.818" rx="1" transform="matrix(.86603 .5 -.86603 .5 462.623 119.636)" fill="#8bfb03" />

      {/* connector decorative paths */}
      <path
        d="M597.98 100.46h-15.238m37.152.447a.9.9 0 0 0 .378-.178c.092-.079.142-.173.142-.269 0-.095-.05-.189-.142-.269a.9.9 0 0 0-.378-.177l-26.728-6.515a1.4 1.4 0 0 0-.513-.024 1.1 1.1 0 0 0-.442.152c-.116.077-.188.172-.205.273s.021.203.109.291l5.362 5.248c.323.301.497.647.504 1.001.006.354-.155.702-.467 1.007l-5.399 5.283c-.089.088-.129.19-.112.291s.088.197.204.274.272.13.444.153.352.014.514-.025z"
        transform="translate(100 0)"
        stroke="rgba(139,251,3,0.4)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="m254.865 314.595-39.942 24.125a14 14 0 0 1-14.25.134L86.865 273"
        stroke="rgba(139,251,3,0.4)"
      />

      <defs>
        <linearGradient id={`${id}-a`} x1="462.777" y1="173.82" x2="462.777" y2="249.073" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0a0a0a" stopOpacity="0" />
          <stop offset=".966" stopColor="#8bfb03" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id={`${id}-b`} x1="462.777" y1="173.82" x2="462.777" y2="249.073" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8bfb03" stopOpacity="0" />
          <stop offset="1" stopColor="#8bfb03" />
        </linearGradient>
        <linearGradient id={`${id}-c`} x1="484.937" y1="194.821" x2="455.024" y2="189.546" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5da302" />
          <stop offset="1" stopColor="#5da302" />
        </linearGradient>
        <linearGradient id={`${id}-d`} x1="484.078" y1="199.698" x2="482.173" y2="199.362" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8bfb03" />
          <stop offset="1" stopColor="#8bfb03" />
        </linearGradient>
        <linearGradient id={`${id}-e`} x1="453.766" y1="196.684" x2="449.955" y2="196.012" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8bfb03" />
          <stop offset="1" stopColor="#8bfb03" />
        </linearGradient>
        <linearGradient id={`${id}-f`} x1="481.34" y1="204.073" x2="461.716" y2="200.612" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5da302" />
          <stop offset="1" stopColor="#5da302" />
        </linearGradient>
        <linearGradient id={`${id}-g`} x1="474.306" y1="207.195" x2="464.78" y2="205.515" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5da302" />
          <stop offset="1" stopColor="#5da302" />
        </linearGradient>
        <linearGradient id={`${id}-h`} x1="461.162" y1="203.772" x2="459.066" y2="203.402" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8bfb03" />
          <stop offset="1" stopColor="#8bfb03" />
        </linearGradient>
        <linearGradient id={`${id}-i`} x1="464.051" y1="209.653" x2="461.955" y2="209.284" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8bfb03" />
          <stop offset="1" stopColor="#8bfb03" />
        </linearGradient>
        <linearGradient id={`${id}-j`} x1="458.238" y1="208.097" x2="448.14" y2="206.316" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5da302" />
          <stop offset="1" stopColor="#5da302" />
        </linearGradient>
        <linearGradient id={`${id}-k`} x1="473.434" y1="212.167" x2="471.148" y2="211.764" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8bfb03" />
          <stop offset="1" stopColor="#8bfb03" />
        </linearGradient>
        <linearGradient id={`${id}-l`} x1="460.738" y1="213.973" x2="451.021" y2="212.26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5da302" />
          <stop offset="1" stopColor="#5da302" />
        </linearGradient>
        <linearGradient id={`${id}-m`} x1="470.302" y1="216.537" x2="460.967" y2="214.89" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5da302" />
          <stop offset="1" stopColor="#5da302" />
        </linearGradient>
        <linearGradient id={`${id}-n`} x1="450.342" y1="216.096" x2="448.627" y2="215.793" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8bfb03" />
          <stop offset="1" stopColor="#8bfb03" />
        </linearGradient>
        <linearGradient id={`${id}-o`} x1="459.912" y1="218.659" x2="458.007" y2="218.323" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8bfb03" />
          <stop offset="1" stopColor="#8bfb03" />
        </linearGradient>
        <linearGradient id={`${id}-p`} x1="457.211" y1="222.843" x2="447.684" y2="221.164" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5da302" />
          <stop offset="1" stopColor="#5da302" />
        </linearGradient>
      </defs>
    </svg>
  );
}
