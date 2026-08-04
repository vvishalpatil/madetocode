import { Reveal } from "../Reveal";

export function Writing() {
  return (
    <Reveal className="mt-16 sm:mt-20">
      <section aria-labelledby="writing-heading">
        <p className="text-[11px] font-bold uppercase tracking-[2.5px] text-accent">Writing</p>
        <h2 id="writing-heading" className="mt-2 text-2xl font-bold tracking-tight text-text">
          Notes on components, accessibility, and build tooling.
        </h2>

        <div className="mt-8 flex items-center justify-center rounded-card border border-dashed border-border bg-surface p-12 text-center">
          <span className="rounded-pill border border-border bg-bg px-4 py-1.5 text-sm text-text-2">
            Coming soon
          </span>
        </div>
      </section>
    </Reveal>
  );
}
