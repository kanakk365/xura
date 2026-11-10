import type { ReactNode } from "react";

export function SectionHead({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <>
      <p className="kicker">{kicker}</p>
      <h2 className="doc-h2 mt-4 max-w-[24ch]">{title}</h2>
      {lead && <p className="doc-lead mt-3.5">{lead}</p>}
    </>
  );
}
