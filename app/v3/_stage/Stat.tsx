type StatProps = {
  figure: string;
  label: string;
  suffix?: string;
};

export function Stat({ figure, label, suffix }: StatProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-baseline gap-1.5">
        <span className="font-display tracking-normal text-3xl font-normal leading-none text-paper sm:text-4xl lg:text-5xl">
          {figure}
        </span>
        {suffix && (
          <span className="font-medium text-[10px] tracking-[0.16em] uppercase text-accent sm:text-[11px]">
            {suffix}
          </span>
        )}
      </div>
      <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-mute sm:text-[11px]">
        {label}
      </span>
    </div>
  );
}
