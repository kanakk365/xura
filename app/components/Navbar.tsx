import { Mark } from "./icons";

const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Strategy", href: "#strategy" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="relative z-20">
      <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 pt-6 sm:px-10 lg:px-16">
        <a href="#" className="flex items-center gap-2">
          <Mark />
          <span className="font-display tracking-normal text-2xl font-normal tracking-[0.1em] text-paper">
            xura
          </span>
        </a>

        <ul className="hidden items-center gap-9 text-[12px] font-medium uppercase tracking-[0.08em] text-paper/70 md:flex">
          {NAV_LINKS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="group relative transition-colors hover:text-paper"
              >
                <span>{item.label}</span>
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden h-10 items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 text-[11px] font-normal tracking-[0.08em] text-accent transition-colors hover:bg-accent hover:text-ink md:inline-flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Contact Us
        </a>
      </nav>
    </header>
  );
}
