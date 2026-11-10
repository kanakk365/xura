import { SCENARIOS, LABEL, FLOWS, SWITCH, RUNNING, stepSoc, readout, ariaOf } from "./model.js";

// Routes drawn toward the busbar; the others are drawn away from it.
const TOWARD_BUS = { grid: true, "grid.in": true, "riser.rack1": true, "riser.rack2": true, "riser.ups": true, "riser.fc": true, "riser.lg": true, feeder: false, "hose.1": false, "hose.2": false };
// The utility cable outside and its stub-up inside carry the same flow.
const ALIAS = { "grid.in": "grid" };

/**
 * Brings the Power Hub figure to life. `stage` holds the SVG; `D` is the build's
 * data. Returns { set(scenario, byUser), destroy() }.
 * @param {HTMLElement} stage
 * @param {any} D
 * @param {{ say?: (text: string) => void, onScenario?: (scenario: string, byUser: boolean) => void, tour?: boolean, initial?: string }} [options]
 */
export function mountPowerHub(stage, D, { say = () => {}, onScenario = () => {}, tour = true, initial = "normal" } = {}) {
  const svg = stage.querySelector("svg");
  const $ = (sel) => svg.querySelector(sel);
  const $$ = (sel) => [...svg.querySelectorAll(sel)];
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  const status = stage.querySelector("[data-status]");

  const routes = {};
  for (const g of $$("[data-route]")) (routes[g.dataset.route] ??= []).push(g);
  for (const list of Object.values(routes)) list.sort((a, b) => a.dataset.chunk - b.dataset.chunk);
  const leds = Object.fromEntries($$("[data-led]").map((el) => [el.dataset.led, el]));
  const segs = $$("[data-seg]");
  const bars = $$("[data-bar]");
  const blade = $('[data-part="blade"]');
  const jaws = { grid: $('[data-jaw="grid"]'), hub: $('[data-jaw="hub"]') };
  const rod = $('[data-part="rod"]');
  const holds = rod ? [...rod.querySelectorAll("[data-hold]")] : [];
  const fcLamp = $('[data-lamp="fc"]');
  const txLamp = $('[data-name="tx.lamp"]');

  const state = { scenario: SCENARIOS.includes(initial) ? initial : "normal", soc: 0.6, sw: SWITCH[initial] ?? -1, rod: 0, rodPhase: 0, clock: 0, shown: -1 };
  const phases = {};
  let pinned = !tour;
  let visible = false;
  let frame = 0;
  let last = 0;
  let tourClock = 0;

  const follow = (cur, target, dt, tau) => target + (cur - target) * Math.exp(-dt / tau);

  function flowOf(name) {
    return FLOWS[state.scenario][ALIAS[name] ?? name];
  }

  function drawPulses(dt) {
    for (const [name, list] of Object.entries(routes)) {
      const flow = flowOf(name);
      const hot = new Set();
      const warm = !!flow;
      if (flow) {
        const [seconds, dir] = flow;
        const forward = (dir === "in") === TOWARD_BUS[name];
        if (still.matches) {
          list.forEach((g) => hot.add(g));
        } else {
          phases[name] = ((phases[name] ?? Math.random()) + dt / seconds) % 1;
          const n = list.length;
          for (const offset of [0, 0.5]) {
            const t = (phases[name] + offset) % 1;
            const pos = t * (n + 2) - 1;
            list.forEach((g, i) => {
              const idx = forward ? i : n - 1 - i;
              if (Math.abs(idx - pos) < 0.9) hot.add(g);
            });
          }
        }
      }
      for (const g of list) {
        g.toggleAttribute("data-hot", hot.has(g));
        g.toggleAttribute("data-warm", warm && !hot.has(g));
      }
    }
  }

  function drawBattery() {
    const per = D.modules;
    const charging = state.scenario === "normal";
    for (const id of D.leds) {
      const el = leds[id];
      if (!el) continue;
      const m = +id.split("-")[1];
      const on = state.soc > (m + 0.5) / per;
      const edge = charging ? !on && state.soc > (m - 0.5) / per : false;
      el.toggleAttribute("data-on", on);
      el.toggleAttribute("data-blink", edge && !still.matches);
    }
  }

  function drawSwitch(dt) {
    const target = SWITCH[state.scenario];
    state.sw = still.matches ? target : follow(state.sw, target, dt, 0.08);
    blade?.setAttribute("transform", `rotate(${(D.sw.angle * state.sw).toFixed(2)} ${D.sw.px} ${D.sw.py})`);
    jaws.grid?.toggleAttribute("data-on", state.sw < -0.95);
    jaws.hub?.toggleAttribute("data-on", state.sw > 0.95);
    return Math.abs(state.sw - target) > 0.002;
  }

  function drawRod(dt) {
    const running = RUNNING[state.scenario].lg && !still.matches;
    if (running) state.rodPhase += dt * Math.PI * 2 * 1.4;
    const target = running ? 0.5 - 0.5 * Math.cos(state.rodPhase) : 0;
    state.rod = running ? target : follow(state.rod, 0, dt, 0.2);
    const off = state.rod * D.rod.stroke;
    const dx = D.rod.axis[0] * off;
    const dy = D.rod.axis[1] * off;
    if (rod) {
      rod.setAttribute("transform", off ? `translate(${dx.toFixed(3)} ${dy.toFixed(3)})` : "");
      for (const h of holds) {
        if (off) h.setAttribute("transform", `translate(${(-dx).toFixed(3)} ${(-dy).toFixed(3)})`);
        else h.removeAttribute("transform");
      }
    }
  }

  function drawChargers() {
    const n = 4;
    const t = state.clock;
    for (const el of segs) {
      const [id, i] = el.dataset.seg.split("-").map(Number);
      const speed = state.scenario === "normal" ? 0.9 : 1.6;
      const lit = still.matches ? n : Math.floor((t * speed + id * 0.37) % (n + 1));
      el.toggleAttribute("data-on", +i < lit);
    }
    for (const el of bars) el.toggleAttribute("data-on", true);
  }

  function drawLamps() {
    fcLamp?.toggleAttribute("data-on", RUNNING[state.scenario].fc);
    txLamp?.toggleAttribute("data-on", RUNNING[state.scenario].grid);
  }

  function speak(force = false) {
    const pct = Math.round(state.soc * 100);
    if (force || pct !== state.shown) {
      state.shown = pct;
      say(readout(state.scenario, state.soc));
    }
  }

  function tick(now) {
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
    last = now;
    state.clock += dt;
    if (!still.matches) state.soc = stepSoc(state.soc, state.scenario, dt * 0.35);
    if (!pinned && !still.matches) {
      tourClock += dt;
      if (tourClock > 6.5) {
        tourClock = 0;
        set(SCENARIOS[(SCENARIOS.indexOf(state.scenario) + 1) % SCENARIOS.length], false);
      }
    }
    drawPulses(dt);
    drawBattery();
    drawSwitch(dt);
    drawRod(dt);
    drawChargers();
    speak();
    frame = visible && !still.matches ? requestAnimationFrame(tick) : 0;
  }

  function run() {
    if (!frame && visible) {
      last = 0;
      frame = requestAnimationFrame(tick);
    }
  }

  function paintStill() {
    state.sw = SWITCH[state.scenario];
    state.soc = state.scenario === "normal" ? 0.78 : 0.46;
    drawPulses(0);
    drawBattery();
    drawSwitch(0);
    drawRod(0);
    drawChargers();
    drawLamps();
    speak(true);
  }

  function set(scenario, byUser = true) {
    if (!SCENARIOS.includes(scenario)) return;
    if (byUser) pinned = true;
    tourClock = 0;
    state.scenario = scenario;
    drawLamps();
    if (status) status.textContent = ariaOf(scenario, state.soc);
    onScenario(scenario, byUser);
    speak(true);
    if (still.matches) paintStill();
    else run();
  }

  const onKey = (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    const i = ["1", "2", "3"].indexOf(event.key);
    if (i >= 0) {
      event.preventDefault();
      set(SCENARIOS[i]);
    }
  };
  const onClick = () => set(SCENARIOS[(SCENARIOS.indexOf(state.scenario) + 1) % SCENARIOS.length]);
  stage.addEventListener("keydown", onKey);
  svg.addEventListener("click", onClick);

  const io = new IntersectionObserver(
    (entries) => {
      visible = entries[entries.length - 1].isIntersecting;
      if (!visible) return;
      if (still.matches) paintStill();
      else run();
    },
    { rootMargin: "80px 0px" },
  );
  io.observe(stage);

  paintStill();
  if (status) status.textContent = ariaOf(state.scenario, state.soc);

  return {
    set,
    get scenario() {
      return state.scenario;
    },
    label: (s) => LABEL[s],
    destroy() {
      io.disconnect();
      cancelAnimationFrame(frame);
      stage.removeEventListener("keydown", onKey);
      svg.removeEventListener("click", onClick);
    },
  };
}
