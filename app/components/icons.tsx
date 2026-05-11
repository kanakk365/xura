type IconProps = {
  className?: string;
};

export function Mark({ className = "h-4 w-4" }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className="relative grid h-7 w-7 place-items-center rounded-sm bg-accent text-ink"
    >
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path
          d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"
          fill="currentColor"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.4"
        />
      </svg>
    </span>
  );
}

export function ArrowUpRight({ className = "h-3.5 w-3.5" }: IconProps) {
  return (
    <svg viewBox="0 0 14 14" className={className} fill="none">
      <path
        d="M2.5 7h9m0 0L7 2.5M11.5 7 7 11.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
