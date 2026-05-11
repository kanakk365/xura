import type { ReactNode } from "react";

export function BentoShell({ children }: { children: ReactNode }) {
  return (
    <div className="h-full rounded-[40px] bg-ink-2 p-[5px]">
      <div className="h-full rounded-[37px] border border-paper/10 p-[2px]">
        <div className="h-full overflow-hidden rounded-[34px] border border-paper/[0.05]">
          {children}
        </div>
      </div>
    </div>
  );
}
