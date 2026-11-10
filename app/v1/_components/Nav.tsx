"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/v1" },
  { label: "EV Charging", href: "/v1/ev-charging" },
  { label: "Neo Cloud", href: "/v1/neocloud" },
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
    <header className="relative z-30 border-b border-line bg-ink/80 backdrop-blur-[14px]">
      <nav className="mx-auto flex w-full max-w-[var(--doc-max)] items-center gap-4 px-6 py-3.5">
        <Link href="/v1" className="flex items-center" aria-label="Xura home">
          <Image
            src="/xura_logo.png"
            alt="Xura"
            width={875}
            height={200}
            priority
            className="h-7 w-auto"
          />
        </Link>

        <ul className="ml-auto hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`block rounded-full px-3.5 py-1.5 text-[0.76rem] font-medium transition-colors hover:bg-accent hover:text-ink ${
                  isActive(item.href) ? "bg-accent text-ink" : "text-mute"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="ml-auto hidden items-center gap-2 rounded-full border border-line-strong px-4 py-1.5 text-[0.76rem] font-medium text-paper/80 transition-colors hover:border-accent hover:text-accent lg:ml-2 lg:inline-flex"
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
          className="relative z-50 ml-auto inline-grid h-10 w-10 place-items-center rounded-lg border border-line bg-ink-2 text-paper/80 transition-colors hover:border-accent hover:text-accent lg:hidden"
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
              className="fixed inset-x-3 top-20 z-40 origin-top rounded-xl border border-line bg-ink-2 p-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] lg:hidden"
            >
              <ul className="flex flex-col gap-0.5">
                {NAV_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between rounded-lg px-4 py-3 text-[0.95rem] font-medium text-paper/80 transition-colors hover:bg-accent hover:text-ink"
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
