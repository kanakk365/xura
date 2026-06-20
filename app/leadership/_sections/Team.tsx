"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

type Member = {
  name: string;
  role: string;
  initials: string;
  image?: string;
  tbd?: boolean;
};

const MEMBERS: Member[] = [
  { name: "Anthony Orso", role: "Chairman", initials: "AO", image: "/team/anthony-orso.jpg" },
  { name: "Keith Delucia", role: "Chief Strategy Officer", initials: "KD", image: "/team/keith-delucia.jpg" },
  { name: "Gideon Pfeffer", role: "Chief Investment Officer", initials: "GP", image: "/team/gideon-pfeffer.jpg" },
  { name: "Ari J. Bensaull", role: "General Counsel", initials: "AB", image: "/team/ari-bensaull.jpeg" },
  { name: "Tom Dwyer", role: "Chief Development Officer", initials: "TD", image: "/team/tom-dwyer.png" },
  { name: "Jaime Pfeffer", role: "Role to be announced", initials: "JP", image: "/team/jaime-pfeffer.jpg", tbd: true },
];

export function LeadershipTeam() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="team"
      ref={ref}
      className="relative bg-ink py-20 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.05]"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-10 lg:px-16">
        <header className="mb-10 flex flex-col gap-6 sm:mb-14 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.1, 1] }}
              className="mb-5 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-mute"
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
                <span className="absolute -inset-1 rounded-full bg-accent/30 blur-[3px]" />
              </span>
              Meet the team
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.1, 1] }}
              className="font-display tracking-normal text-[clamp(1.85rem,5vw,3.5rem)] font-normal leading-[1.05] text-paper"
            >
              The team you talk to is the team that{" "}
              <span className="italic text-accent">delivers</span>.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.1, 1] }}
            className="max-w-[30rem] text-[15px] leading-relaxed text-paper/60 sm:text-base"
          >
            Our team combines deep expertise across energy, real estate, and
            technology to design and deploy battery storage and EV charging
            systems that operate reliably under real grid and site constraints.
          </motion.p>
        </header>

        <ul className="mx-auto grid max-w-[1040px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MEMBERS.map((m, i) => (
            <MemberCard key={m.name} member={m} index={i} isInView={isInView} />
          ))}
        </ul>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.2, 0.7, 0.1, 1] }}
          className="mt-10 max-w-3xl text-[15px] leading-relaxed text-paper/55 sm:mt-12"
        >
          This blend of operational experience and disciplined execution allows
          Xura to bridge strategy and delivery&mdash;ensuring projects are built
          responsibly and perform as intended over time.
        </motion.p>
      </div>
    </section>
  );
}

function MemberCard({
  member,
  index,
  isInView,
}: {
  member: Member;
  index: number;
  isInView: boolean;
}) {
  const delay = 0.3 + index * 0.08;

  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.1, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-paper/[0.08] bg-ink-2/60 transition-colors duration-500 hover:border-accent/30 sm:rounded-[24px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 grid-lines opacity-[0.05]"
      />

      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#080808]">
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 grid-lines opacity-[0.12]"
        />
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover object-top grayscale transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
          />
        ) : (
          <div className="grid h-full w-full place-items-center">
            <span className="font-display tracking-normal text-[3.5rem] font-normal text-paper/40 transition-colors duration-500 group-hover:text-accent">
              {member.initials}
            </span>
          </div>
        )}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-t from-ink-2 via-ink-2/70 to-transparent"
        />
      </div>

      <div className="relative z-20 -mt-7 px-5 pb-5 sm:px-5 sm:pb-5">
        <h3 className="font-display tracking-normal text-[1.2rem] font-normal leading-tight text-paper sm:text-[1.3rem]">
          {member.name}
        </h3>
        <p
          className={`mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] ${
            member.tbd ? "text-mute" : "text-accent"
          }`}
        >
          {member.role}
        </p>
      </div>
    </motion.li>
  );
}
