"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS: { label: string; href: string }[][] = [
  [
    { label: "Solutions", href: "/#solutions" },
    { label: "Strategy", href: "/strategy" },
    { label: "Leadership", href: "/leadership" },
    { label: "Projects", href: "/projects" },
  ],
  [
    { label: "Advertise", href: "/advertise" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ],
];

export function Footer() {
  const reduce = useReducedMotion();

  return (
    <footer className="relative bg-ink pt-20 sm:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:gap-14 sm:pb-14 lg:grid-cols-[1.4fr_0.6fr_0.6fr_0.7fr] lg:gap-10 lg:pb-20">
          <div>
            <Link href="/" className="flex items-center" aria-label="Xura home">
              <Image
                src="/xura_logo.png"
                alt="Xura"
                width={875}
                height={200}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-paper/60">
              Site-level energy infrastructure for commercial and fleet
              facilities. EV charging, battery storage, and microgrid
              configuration&mdash;designed around your meter, not against it.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-paper/[0.08] bg-paper/[0.02] px-4 py-2">
              <span className="font-mono text-[10px] font-normal tracking-[0.24em] text-mute">
                Operated by
              </span>
              <span className="font-mono text-[11px] font-normal tracking-[0.1em] text-paper">
                Charge Capital Partners
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:contents">
            {FOOTER_LINKS.map((col, i) => (
              <div key={i}>
                <p className="mb-5 font-mono text-[10px] font-normal tracking-[0.3em] text-mute">
                  {i === 0 ? "Explore" : "Engage"}
                </p>
                <ul className="flex flex-col gap-3">
                  {col.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-sm text-paper/70 transition-colors hover:text-paper"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent/0 transition-colors group-hover:bg-accent" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <p className="mb-5 font-mono text-[10px] font-normal tracking-[0.3em] text-mute">
              Get in touch
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-paper/65">
              Every site presents different constraints. Start with a site
              review to define a realistic path forward.
            </p>

            <Link
              href="/#contact"
              className="group mt-7 inline-flex h-10 items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 text-[11px] font-normal tracking-[0.08em] text-accent transition-colors hover:bg-accent hover:text-ink"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent transition-colors group-hover:bg-ink" />
              Request a site review
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden pb-4">
          <div
            aria-hidden="true"
            className="select-none text-center leading-none"
            style={{
              fontFamily: "var(--font-mark)",
              fontWeight: 400,
              fontSize: "clamp(40px, 11vw, 160px)",
              letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.05)",
              WebkitTextStroke: "1px rgba(255,255,255,0.12)",
              transform: "scaleX(1.2)",
              transformOrigin: "center",
            }}
          >
            XURA
          </div>
          <div className="relative mt-2">
            <div className="h-px w-full bg-paper/[0.06]" />
            <motion.div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(to right, rgba(139,251,3,0) 0%, rgba(139,251,3,0.6) 50%, rgba(139,251,3,0) 100%)",
              }}
              initial={{ scaleX: reduce ? 1 : 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 2.4, ease: [0.2, 0.7, 0.1, 1] }}
            />
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-paper/[0.06] py-6 text-[10.5px] font-medium uppercase tracking-[0.08em] text-mute sm:flex-row sm:items-center sm:py-7 sm:text-[11px]">
          <span>© {new Date().getFullYear()} Xura Partners. All rights reserved.</span>
          <a
            href="#"
            className="font-mono transition-colors hover:text-paper"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
