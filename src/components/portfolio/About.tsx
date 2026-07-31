import { Reveal } from "../Reveal";

export function About() {
  return (
    <Reveal className="mt-16 sm:mt-20">
      <section aria-label="About">
        <p className="max-w-2xl text-[17px] leading-relaxed text-text-2">
          I'm a frontend engineer with six years of experience, currently on the design system
          team at PayPal — a component library used by 170+ product teams across the company. My
          work sits one layer below product: component APIs, accessibility, build tooling, and
          developer experience. I care about the unglamorous parts — the versioning strategy, the
          keyboard interaction nobody tested, the build step that takes ninety seconds too long.
          Previously at Publicis Sapient and Xoriant.
        </p>
      </section>
    </Reveal>
  );
}
