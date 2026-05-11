import { Contact } from "./components/Contact";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Leadership } from "./components/Leadership";
import { Problem } from "./components/Problem";
import { Projects } from "./components/Projects";
import { Solutions } from "./components/Solutions";
import { Strategy } from "./components/Strategy";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Problem />
      <Solutions />
      <Strategy />
      <Projects />
      <Leadership />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
