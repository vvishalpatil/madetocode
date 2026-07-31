import { Reveal } from "./Reveal";
import { topics } from "../data/topics";

export function Topics() {
  return (
    <section id="topics" className="mx-auto max-w-[1200px] px-6 py-24 md:px-12">
      <Reveal>
        <p className="text-[11px] font-bold uppercase tracking-[2.5px] text-accent">
          Frontend Track — Machine Coding
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-[-1px] sm:text-4xl">
          20 problems. Every interview pattern.
        </h2>
        <p className="mt-4 max-w-2xl text-[17px] text-text-2">
          Each problem covers the full picture — build, edge cases, accessibility, performance,
          and the follow-up questions your interviewer will throw at you.
        </p>
      </Reveal>

      <Reveal className="mt-10 flex flex-wrap gap-3">
        {topics.map((topic, i) => (
          <span
            key={topic.n}
            className={`cursor-default rounded-pill border px-4 py-[9px] text-[13px] transition-colors duration-[180ms] ${
              i < 5
                ? "border-accent-border bg-accent-dim text-text"
                : "border-border bg-surface text-text-2 hover:border-accent-border hover:bg-accent-dim hover:text-text"
            }`}
          >
            <span className="font-mono text-[11px] text-accent">#{topic.n}</span>{" "}
            {topic.label}
          </span>
        ))}
      </Reveal>
    </section>
  );
}
