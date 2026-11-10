import "./site.css";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <div className="v3-site flex flex-1 flex-col">{children}</div>;
}
