"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Strategy", href: "/#strategy" },
  { label: "Projects", href: "/#projects" },
  { label: "Advertise", href: "/advertise" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const loginHref = pathname?.startsWith("/advertise")
    ? "/login?tab=advertisers"
    : "/login";

  const handleNavClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.includes("#")) return;
    const [path, hash] = href.split("#");
    const onSamePage = (path === "" || path === "/") && (pathname === "/" || pathname === "");
    if (!onSamePage || !hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    e.preventDefault();
    setOpen(false);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (window.history.replaceState) {
      window.history.replaceState(null, "", `#${hash}`);
    }
  };

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="relative z-30">
      <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 pt-5 sm:px-10 sm:pt-6 lg:px-16">
        <Link href="/" className="flex items-center" aria-label="Xura home">
          <Image
            src="/xura_logo.png"
            alt="Xura"
            width={875}
            height={200}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-9 text-[12px] font-medium uppercase tracking-[0.08em] text-paper/70 md:flex">
          {NAV_LINKS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={handleNavClick(item.href)}
                className="group relative transition-colors hover:text-paper"
              >
                <span>{item.label}</span>
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={loginHref}
          className="hidden h-10 items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 text-[11px] font-normal tracking-[0.08em] text-accent transition-colors hover:bg-accent hover:text-ink md:inline-flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Login
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 inline-grid h-10 w-10 place-items-center rounded-full border border-paper/15 bg-paper/[0.04] text-paper/80 backdrop-blur-md transition-colors hover:border-paper/30 hover:text-paper md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 right-0 top-0 h-px bg-current transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 right-0 h-px bg-current transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-ink/70 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />
            <motion.div
              key="mobile-panel"
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.2, 0.7, 0.1, 1] }}
              className="fixed inset-x-3 top-20 z-40 origin-top rounded-3xl border border-paper/10 bg-ink-2/95 p-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl md:hidden"
            >
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        handleNavClick(item.href)(e);
                        setOpen(false);
                      }}
                      className="group flex items-center justify-between rounded-2xl border border-transparent px-4 py-3.5 text-[13px] font-medium uppercase tracking-[0.1em] text-paper/80 transition-colors hover:border-paper/10 hover:bg-paper/[0.04] hover:text-paper"
                    >
                      <span>{item.label}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-accent/0 transition-colors group-hover:bg-accent" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={loginHref}
                onClick={() => setOpen(false)}
                className="mt-4 flex h-12 items-center justify-center gap-2 rounded-full bg-accent text-[12px] font-medium uppercase tracking-[0.12em] text-ink transition-transform active:scale-[0.98]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                Login
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
