import "./site.css";

import ClickSpark from "./_bits/ClickSpark";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClickSpark sparkColor="#8bfb03" shape="line" sparkCount={9} sparkRadius={22} sparkSize={9} duration={420} className="flex flex-1 flex-col">
      <div className="v3-site flex flex-1 flex-col">{children}</div>
    </ClickSpark>
  );
}
