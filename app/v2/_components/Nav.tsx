"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/v2" },
  { label: "EV Charging", href: "/v2/ev-charging" },
  { label: "Neo Cloud", href: "/v2/neocloud" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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

  const isActive = (href: string) => pathname === href;

  return (
    <header className="relative z-30">
      <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 px-5 pt-5 sm:px-10 sm:pt-6 lg:px-16">
        <Link href="/v2" className="flex items-center" aria-label="Xura home">
          <Image
            src="/xura_logo.png"
            alt="Xura"
            width={875}
            height={200}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-9 text-[12px] font-medium uppercase tracking-[0.08em] lg:flex">
          {NAV_LINKS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`group relative block transition-colors hover:text-paper ${isActive(item.href) ? "text-paper" : "text-paper/70"}`}
                >
                <span>{item.label}</span>
                <span className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 group-hover:w-full ${isActive(item.href) ? "w-full" : "w-0"}`} />
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden h-10 items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 text-[11px] font-normal tracking-[0.08em] text-accent transition-colors hover:bg-accent hover:text-ink lg:inline-flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Contact
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="vs-mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 inline-grid h-10 w-10 place-items-center rounded-full border border-paper/15 bg-paper/[0.04] text-paper/80 backdrop-blur-md transition-colors hover:border-paper/30 hover:text-paper lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3.5 w-4">
            <span className={`absolute left-0 right-0 top-0 h-px bg-current transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-current transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute bottom-0 left-0 right-0 h-px bg-current transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-ink/80 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />
            <motion.div
              key="panel"
              id="vs-mobile-nav"
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.2, 0.7, 0.1, 1] }}
              className="fixed inset-x-3 top-20 z-40 origin-top rounded-3xl border border-paper/10 bg-ink-2/95 p-6 backdrop-blur-xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] lg:hidden"
            >
              <ul className="flex flex-col gap-0.5">
                {NAV_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between rounded-2xl px-4 py-3 text-[0.95rem] font-medium text-paper/80 transition-colors hover:bg-accent hover:text-ink"
                    >
                      <span>{item.label}</span>
                      <span className="h-1.5 w-1.5 rounded-[2px] bg-accent transition-colors group-hover:bg-ink" />
                    </Link>
                  </li>
                ))}
              </ul>
              <a href="#contact" onClick={() => setOpen(false)} className="doc-btn mt-3 w-full">
                Contact
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
