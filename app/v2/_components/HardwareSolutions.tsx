import Image from "next/image";

import { SectionHead } from "./SectionHead";

type Spec = { label: string; value: string };

type Item = {
  tag: string;
  title: string;
  body: string;
  specs: Spec[];
  cta: { label: string; href: string };
  image: string;
  plate: string;
};

const ITEMS: Item[] = [
  {
    tag: "Safe energy storage",
    title: "Battery energy storage system (BESS)",
    body: "Modular, liquid-cooled storage forms the backbone of every Power Hub. Ultra-stable LFP chemistry in a proprietary thermal-shield enclosure exceeds UL 9540A and passes the Napkin Test with zero cell-to-cell propagation.",
    specs: [
      { label: "Discharge rate", value: "Up to 2.5C peak" },
      { label: "Safety rating", value: "UL 9540A + Napkin" },
      { label: "Applications", value: "Peak shave + EV + VPP" },
    ],
    cta: { label: "Request BESS spec sheet", href: "#contact" },
    image: "/2.png",
    plate: "XURA-BESS // modular liquid-cooled enclosure",
  },
  {
    tag: "Mission-critical power quality",
    title: "Industrial & AI-grade UPS",
    body: "Seamless continuity for commercial facilities, edge data centers and autonomous microgrids. Solid-state double conversion removes sags, harmonic distortion and micro-outages, bridging the gap in under 2 ms while on-site generation and storage move into islanded mode.",
    specs: [
      { label: "Transfer time", value: "< 2 ms" },
      { label: "Efficiency", value: "Up to 98.6%" },
      { label: "Architecture", value: "Hot-swappable N+1" },
    ],
    cta: { label: "Configure UPS protection", href: "#contact" },
    image: "/3.png",
    plate: "XURA-UPS // zero-latency double-conversion array",
  },
  {
    tag: "24/7 primary on-site generation",
    title: "Solid-oxide fuel cell",
    body: "Inspired by the Bloom Energy Server platform: continuous baseload power on site where grid capacity falls short. An electrochemical reaction, not combustion, turns natural gas, biogas or hydrogen into power with virtually zero NOx, SOx or particulates, and no water in normal operation.",
    specs: [
      { label: "Conversion", value: "Electrochemical" },
      { label: "Water usage", value: "Zero operational" },
      { label: "Power density", value: "Modular 325 kW+ blocks" },
    ],
    cta: { label: "Assess a site for fuel-cell baseload", href: "#contact" },
    image: "/4.png",
    plate: "XURA-SOFC // fuel-cell server architecture",
  },
  {
    tag: "Fuel-flexible dispatchable power",
    title: "Dispatchable linear generator",
    body: "Modelled on the Mainspring linear generator: non-flame prime movers convert linear motion directly into electricity through copper coils. They ramp instantly to follow EV and building load spikes and move across natural gas, biogas, RNG and 100% green hydrogen.",
    specs: [
      { label: "Fuel flexibility", value: "NG · biogas · 100% H₂" },
      { label: "Dispatchability", value: "Fast load-following" },
      { label: "NOx emissions", value: "Near-zero, low-temp" },
    ],
    cta: { label: "Evaluate linear-generator fit", href: "#contact" },
    image: "/img/arctrust/charger.jpg",
    plate: "XURA-LIN // linear oscillator core",
  },
  {
    tag: "The new gas station for commercial real estate",
    title: "Level 3 charging with 2.5C discharge",
    body: "Conventional Level 3 chargers overwhelm local transformers and trigger heavy demand charges. Xura pairs dual-cable dispensers with 2.5C battery storage. Each charger carries native NACS and CCS1 ports with no adapters, serving 3 to 6 parking spaces (scalable to 20 chargers) from a compact 350 to 2,500 sq ft Power Hub.",
    specs: [
      { label: "Battery boost", value: "2.5C discharge" },
      { label: "Connectors", value: "Native NACS + CCS1" },
      { label: "Landlord lease", value: "10 + 10 yr, zero CapEx" },
    ],
    cta: { label: "Host a 2.5C charging hub", href: "#contact" },
    image: "/1.png",
    plate: "XURA-EV // battery-buffered Level 3 hub",
  },
];

export function HardwareSolutions() {
  return (
    <section id="solutions" className="doc-section">
      <div className="doc-shell">
        <SectionHead
          kicker="Hardware & generation portfolio"
          title={
            <>
              Five building blocks. Generation, safe storage and{" "}
              <span className="text-accent">2.5C</span> charging.
            </>
          }
          lead="High-safety battery storage, industrial UPS conditioning, solid-oxide fuel cells, linear generators and ultra-fast Level 3 charging — combined to suit what each site and utility can actually support."
        />

        <div className="mt-9 flex flex-col gap-4">
          {ITEMS.map((item, i) => (
            <article key={item.title} className="doc-figure grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
              <div className={`flex flex-col p-6 sm:p-8 ${i % 2 ? "lg:order-2" : ""}`}>
                <span className="doc-tag w-fit">
                  {item.tag} &middot; {String(i + 1).padStart(2, "0")} / 05
                </span>
                <h3 className="doc-h3 mt-4 text-[1.35rem]">{item.title}</h3>
                <p className="mt-3 max-w-[50ch] text-[0.92rem] leading-[1.6] text-mute">{item.body}</p>
                <a href={item.cta.href} className="mt-6 w-fit font-mono text-[0.78rem] text-accent underline-offset-4 hover:underline">
                  {item.cta.label} &rarr;
                </a>
              </div>

              <div className={`relative flex flex-col border-t border-line bg-[#080808] lg:border-t-0 ${i % 2 ? "lg:order-1 lg:border-r" : "lg:border-l"}`}>
                <div className="relative aspect-[4/3] w-full flex-1 min-h-[220px]">
                  <Image src={item.image} alt={item.title} fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
                </div>
                <dl className={`grid grid-cols-1 gap-3 p-5 sm:grid-cols-3 border-t border-line`}>
                  {item.specs.map((s) => (
                    <div key={s.label} className="stat-tile !p-4">
                      <dt className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-mute">{s.label}</dt>
                      <dd className="mt-2.5 font-display text-[1rem] font-extrabold leading-tight text-paper">{s.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="border-t border-line px-5 py-2.5 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-mute">
                  <span className="text-accent">FIG.</span> {item.plate}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
