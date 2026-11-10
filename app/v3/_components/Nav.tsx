"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const BASE = "/v3";

const PAGES = [
  { label: "Home", href: BASE },
  { label: "EV Charging", href: `${BASE}/ev-charging` },
  { label: "Neo Cloud", href: `${BASE}/neocloud` },
];

const MORE = [
  { label: "Projects", href: "/projects" },
  { label: "Leadership", href: "/leadership" },
  { label: "Advertise", href: `${BASE}/ev-charging#advertise` },
];

/** Sticky top bar. The three product pages sit in a segmented group so the
 *  site's structure reads at a glance; secondary links trail after. */
export function Nav({ cta = { label: "Assess your site", href: "#contact" } }) {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === BASE ? pathname === BASE || pathname === `${BASE}/` : pathname.startsWith(href);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-paper/10 bg-ink/80 backdrop-blur-[14px]" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="op-shell flex h-[72px] items-center gap-8" aria-label="Main">
        <Link href={BASE} className="flex shrink-0 items-center" aria-label="Xura home">
          <Image src="/xura_logo.png" alt="Xura" width={875} height={200} priority className="h-8 w-auto" />
        </Link>

        <ul className="mx-auto hidden items-center gap-8 text-[12px] font-medium uppercase tracking-[0.08em] lg:flex">
          {[...PAGES, ...MORE].map((p) => {
            const active = isActive(p.href);
            return (
              <li key={p.href}>
                <Link
                  href={p.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative block py-1 transition-colors ${active ? "text-paper" : "text-paper/60 hover:text-paper"}`}
                >
                  {p.label}
                  {active ? (
                    <motion.span
                      layoutId="site-nav-line"
                      className="absolute -bottom-1 left-0 h-px w-full bg-accent"
                      transition={{ type: "spring", stiffness: 420, damping: 38 }}
                    />
                  ) : (
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <a
          href={cta.href}
          className="hidden h-10 items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 text-[11px] tracking-[0.08em] text-accent transition-colors hover:bg-accent hover:text-ink lg:inline-flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {cta.label}
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 ml-auto inline-grid h-10 w-10 place-items-center rounded-full border border-paper/15 bg-paper/[0.04] text-paper/80 backdrop-blur-md lg:hidden"
        >
          <span className="relative block h-3.5 w-4">
            <span className={`absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute inset-x-0 top-1/2 h-px bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-3 top-[76px] z-40 rounded-[24px] border border-paper/10 bg-ink-2 p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] lg:hidden"
          >
            <ul className="flex flex-col gap-0.5">
              {[...PAGES, ...MORE].map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-full px-5 py-3 text-[0.95rem] font-medium ${
                      isActive(p.href) ? "bg-accent text-ink" : "text-paper/80 hover:bg-white/5"
                    }`}
                  >
                    {p.label}
                    <span className={`h-1.5 w-1.5 rounded-full ${isActive(p.href) ? "bg-ink" : "bg-accent"}`} />
                  </Link>
                </li>
              ))}
            </ul>
            <a href={cta.href} onClick={() => setOpen(false)} className="op-btn mt-3 w-full">
              {cta.label}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
