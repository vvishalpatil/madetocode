import { About } from "../components/portfolio/About";
import { FeaturedProject } from "../components/portfolio/FeaturedProject";
import { Hero } from "../components/portfolio/Hero";

export function Portfolio() {
  return (
    <div className="bg-bg text-text">
      <Hero />
      <main className="mx-auto max-w-[680px] px-6 pb-32">
        <About />
        <FeaturedProject />
      </main>
    </div>
  );
}
