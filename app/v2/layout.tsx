import type { ReactNode } from "react";

import "./v2.css";

export default function V2Layout({ children }: { children: ReactNode }) {
  return <div className="v2-site flex flex-1 flex-col">{children}</div>;
}
