type Step = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  body: string;
  duration: string;
};

const STEPS: Step[] = [
  {
    id: "brief",
    number: "01",
    title: "Brief & match.",
    tagline: "Day 1.",
    body: "Share your goals, audience, and creative direction. We match you with the right tier and confirm available inventory windows.",
    duration: "~24 hrs",
  },
  {
    id: "creative",
    number: "02",
    title: "Creative & sign-off.",
    tagline: "Day 2–4.",
    body: "Upload creative or use our design team. Our editorial reviewer ensures fit, accessibility, and load performance before approval.",
    duration: "48–72 hrs",
  },
  {
    id: "schedule",
    number: "03",
    title: "Schedule & QA.",
    tagline: "Day 4–5.",
    body: "We slot your campaign into the inventory calendar, run pre-flight QA on all device classes, and confirm tracking with you.",
    duration: "~24 hrs",
  },
  {
    id: "live",
    number: "04",
    title: "Launch & monitor.",
    tagline: "Day 5+.",
    body: "Your campaign goes live with real-time delivery telemetry. Reporting cadence follows your tier — daily through weekly briefs.",
    duration: "Ongoing",
  },
];

export function AdvertiseProcess() {
  return (
    <section id="process" className="doc-section">
      <div className="doc-shell">
        <p className="kicker">Process</p>

        <h2 className="doc-h2 mt-4 max-w-[24ch]">
          From brief to <span className="text-accent">live</span> in five days.
        </h2>

        <p className="doc-lead mt-3.5">
          No RFPs, no waterfalls. Four predictable steps with a media planner
          staying close from kickoff to launch.
        </p>

        <ol className="mt-9 grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.id} className="flex flex-col bg-ink-2 p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mark text-[1.9rem] leading-none text-accent">
                  {step.number}
                </span>
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-mute">
                  {step.tagline}
                </span>
              </div>

              <h3 className="mt-4 font-display text-[1.05rem] font-bold leading-[1.25] text-paper">
                {step.title}
              </h3>

              <p className="mt-2 text-[0.88rem] leading-[1.55] text-mute">
                {step.body}
              </p>

              <span className="mt-auto flex items-center gap-2 border-t border-line pt-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-accent sm:mt-6">
                {step.duration}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
