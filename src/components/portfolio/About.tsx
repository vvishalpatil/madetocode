import { Reveal } from "../Reveal";

export function About() {
  return (
    <Reveal className="mt-16 sm:mt-20">
      <section aria-label="About">
        <div className="space-y-5 text-[16px] leading-relaxed text-text-2">
          <p>
            I'm a frontend engineer at <strong className="text-text">PayPal</strong>, working on
            our enterprise Design System — the React component library product teams across the
            company build their interfaces on. My work sits one layer below product:{" "}
            <strong className="text-text">
              component APIs, accessibility, build tooling, and developer experience
            </strong>
            .
          </p>
          <p>
            Modal dialogs. Accordions. Cards. Autocomplete.{" "}
            <strong className="text-text">These aren't practice problems — they're my job.</strong>{" "}
            I've architected them with compound component patterns, made them accessible,
            localized them across languages, and kept them backward compatible while every
            consuming team depends on them shipping without breakage.
          </p>
          <p>
            I care about{" "}
            <strong className="text-text">
              the trade-offs, edge cases, and API design decisions that only surface at scale
            </strong>{" "}
            — the versioning strategy, the keyboard interaction nobody tested, the build step that
            takes ninety seconds too long.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
