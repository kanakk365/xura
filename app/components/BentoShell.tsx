import type { ReactNode } from "react";

export function BentoShell({ children }: { children: ReactNode }) {
  return (
    <div className="h-full rounded-[28px] bg-ink-2 p-[4px] sm:rounded-[40px] sm:p-[5px]">
      <div className="h-full rounded-[26px] border border-paper/10 p-[2px] sm:rounded-[37px]">
        <div className="h-full overflow-hidden rounded-[24px] border border-paper/[0.05] sm:rounded-[34px]">
          {children}
        </div>
      </div>
    </div>
  );
}
