import { Reveal } from "../Reveal";

const stack = [
  "React",
  "TypeScript",
  "JavaScript ES6+",
  "Redux",
  "vanilla-extract",
  "Vite",
  "Webpack",
  "Rollup",
  "Storybook",
  "Lerna",
  "Jest",
  "React Testing Library",
  "Node.js",
  "Express",
  "Accessibility (a11y)",
  "i18n / l10n",
  "Design Tokens",
  "Performance",
];

export function StackStrip() {
  return (
    <Reveal className="mt-12 border-t border-border pt-10">
      <p className="text-[11px] font-bold uppercase tracking-[2px] text-text-3">
        What I work with daily
      </p>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-pill border border-border bg-surface px-4 py-1.5 text-[13px] text-text-2 transition-colors hover:border-accent-border hover:bg-accent-dim"
          >
            {tech}
          </span>
        ))}
      </div>
    </Reveal>
  );
}
