import { About } from "../components/portfolio/About";
import { Experience } from "../components/portfolio/Experience";
import { FeaturedProject } from "../components/portfolio/FeaturedProject";
import { Hero } from "../components/portfolio/Hero";
import { Recognition } from "../components/portfolio/Recognition";
import { StackStrip } from "../components/portfolio/StackStrip";

export function Portfolio() {
  return (
    <div className="bg-bg text-text">
      <Hero />
      <main className="mx-auto max-w-[680px] px-6 pb-32">
        <About />
        <StackStrip />
        <Experience />
        <Recognition />
        <FeaturedProject />
      </main>
    </div>
  );
}
