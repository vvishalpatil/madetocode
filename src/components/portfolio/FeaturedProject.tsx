import { Reveal } from "../Reveal";
import { ComboboxDemo } from "./ComboboxDemo";

const bullets = [
  "Full WAI-ARIA combobox semantics",
  "Complete keyboard navigation, including type-ahead",
  "Virtualization for large option lists (@tanstack/react-virtual)",
  "Zero styling opinions — headless useCombobox hook with prop-getters",
];

export function FeaturedProject() {
  return (
    <Reveal className="mt-16 sm:mt-20">
      <section aria-labelledby="featured-project-heading">
        <p className="text-[11px] font-bold uppercase tracking-[2.5px] text-accent">
          Featured project
        </p>
        <h2 id="featured-project-heading" className="mt-2 text-2xl font-bold tracking-tight text-text">
          A headless, fully accessible combobox for React. Bring your own markup.
        </h2>

        <div className="mt-8 rounded-card border border-border bg-surface p-6 sm:p-8">
          <ComboboxDemo />
        </div>

        <ul className="mt-8 space-y-2.5">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5 text-[15px] text-text-2">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
              {bullet}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-6 text-sm">
          <a
            href="https://github.com/vvishalpatil"
            target="_blank"
            rel="noreferrer"
            className="text-accent underline-offset-4 hover:underline"
          >
            GitHub
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-accent underline-offset-4 hover:underline"
          >
            Storybook
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-accent underline-offset-4 hover:underline"
          >
            npm
          </a>
        </div>

        <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-text-2">
          Most combobox implementations either ship opinionated styling you have to fight, or get
          the accessibility subtly wrong. I wanted one that did neither.
        </p>
      </section>
    </Reveal>
  );
}
