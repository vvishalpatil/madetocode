import { Reveal } from "../Reveal";

export function Projects() {
  return (
    <Reveal className="mt-16 sm:mt-20">
      <section aria-labelledby="projects-heading">
        <p className="text-[11px] font-bold uppercase tracking-[2.5px] text-accent">Projects</p>
        <h2 id="projects-heading" className="mt-2 text-2xl font-bold tracking-tight text-text">
          Things I'm building.
        </h2>

        <div className="mt-8 space-y-4">
          <div className="rounded-card border border-accent-border bg-accent-dim p-7">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-lg font-semibold text-text">MadeToCode</h3>
              <span className="rounded-pill border border-accent-border bg-bg px-3 py-0.5 text-xs text-accent">
                In progress
              </span>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-text-2">
              An interview prep roadmap for engineers — machine coding, DSA, and system design,
              structured as a path rather than scattered content. Designing, building, and writing
              it end to end.
            </p>
            <div className="mt-5 flex flex-wrap gap-6 text-sm">
              <a
                href="https://youtube.com/@madetocode7"
                target="_blank"
                rel="noreferrer"
                className="text-accent underline-offset-4 hover:underline"
              >
                YouTube
              </a>
              <a
                href="https://instagram.com/madetocode"
                target="_blank"
                rel="noreferrer"
                className="text-accent underline-offset-4 hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
