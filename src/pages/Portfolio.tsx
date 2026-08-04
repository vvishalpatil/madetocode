import { About } from "../components/portfolio/About";
import { Experience } from "../components/portfolio/Experience";
import { Footer } from "../components/portfolio/Footer";
import { Hero } from "../components/portfolio/Hero";
import { Projects } from "../components/portfolio/Projects";
import { Recognition } from "../components/portfolio/Recognition";
import { StackStrip } from "../components/portfolio/StackStrip";
import { Writing } from "../components/portfolio/Writing";

export function Portfolio() {
  return (
    <div className="bg-bg text-text">
      <Hero />
      <div className="mx-auto max-w-[680px] px-6 pb-24">
        <main>
          <About />
          <Projects />
          <Experience />
          <Recognition />
          <Writing />
          <StackStrip />
        </main>
        <Footer />
      </div>
    </div>
  );
}
