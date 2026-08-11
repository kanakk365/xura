import Image from "next/image";

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
  return (
    <section id="team" className="doc-section">
      <div className="doc-shell">
        <p className="kicker">Meet the team</p>

        <h2 className="doc-h2 mt-4 max-w-[26ch]">
          The team you talk to is the team that{" "}
          <span className="text-accent">delivers</span>.
        </h2>

        <p className="doc-lead mt-3.5">
          Our team combines deep expertise across energy, real estate, and
          technology to design and deploy battery storage and EV charging
          systems that operate reliably under real grid and site constraints.
        </p>

        <ul className="mt-9 grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {MEMBERS.map((m) => (
            <li key={m.name} className="flex flex-col bg-ink-2">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#080808]">
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top grayscale"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center">
                    <span className="font-display text-[3.5rem] font-extrabold text-mute">
                      {m.initials}
                    </span>
                  </div>
                )}
              </div>

              <div className="border-t border-line p-5">
                <h3 className="font-display text-[1.15rem] font-bold leading-tight text-paper">
                  {m.name}
                </h3>
                <p
                  className={`mt-1.5 font-mono text-[0.66rem] uppercase tracking-[0.14em] ${
                    m.tbd ? "text-mute" : "text-accent"
                  }`}
                >
                  {m.role}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="doc-callout mt-4">
          This blend of operational experience and disciplined execution allows
          Xura to bridge strategy and delivery &mdash; ensuring projects are
          built responsibly and perform as intended over time.
        </div>
      </div>
    </section>
  );
}
