import { Reveal } from "./Reveal";

const cards = [
  {
    status: "Live now",
    statusClass: "border-accent-border bg-accent-dim text-accent",
    icon: "⚡",
    title: "Machine Coding",
    body: "Build real UI components under interview pressure. Every video covers the build, edge cases, accessibility, and the follow-up questions interviewers always ask.",
    bullets: [
      "Debounced search & autocomplete",
      "Accessible modal dialog",
      "Infinite scroll & virtualization",
      "Drag-and-drop kanban board",
      "+16 more problems",
    ],
    featured: true,
  },
  {
    status: "Coming soon",
    statusClass: "border-border bg-surface text-text-2",
    icon: "🧩",
    title: "Core DSA",
    body: "Not a full LeetCode bootcamp. The curated 25 patterns engineers actually get asked — with nothing that wastes your time.",
    bullets: [
      "Arrays, strings, hashmaps",
      "Two pointers & sliding window",
      "Trees & basic recursion",
      "What to skip entirely",
    ],
    featured: false,
  },
  {
    status: "Coming later",
    statusClass: "border-border bg-surface text-text-2",
    icon: "🏗️",
    title: "System Design",
    body: "Design Twitter's feed, an autocomplete at scale, a design system. Real architectural decisions from inside big tech.",
    bullets: [
      "Micro-frontend architecture",
      "Performance at scale",
      "Real-time systems with WebSockets",
      "CDN, caching, rendering strategies",
    ],
    featured: false,
  },
];

export function Tracks() {
  return (
    <section id="tracks" className="mx-auto max-w-[1200px] px-6 py-24 md:px-12">
      <Reveal>
        <p className="text-[11px] font-bold uppercase tracking-[2.5px] text-accent">
          Curriculum
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-[-1px] sm:text-4xl">
          Three rounds. Every discipline.
        </h2>
        <p className="mt-4 max-w-2xl text-[17px] text-text-2">
          Frontend track is live now. Backend and Full Stack are in the roadmap — same
          structure, different discipline.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-pill bg-text px-4 py-1.5 text-sm text-white">Frontend</span>
          <span className="rounded-pill border border-border bg-surface px-4 py-1.5 text-sm text-text-2">
            Backend · Coming soon
          </span>
          <span className="rounded-pill border border-border bg-surface px-4 py-1.5 text-sm text-text-2">
            Full Stack · Coming soon
          </span>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <Reveal key={card.title}>
            <div
              className={`h-full rounded-card border p-8 transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] ${
                card.featured
                  ? "border-accent-border bg-accent-dim"
                  : "border-border bg-bg"
              }`}
            >
              <span
                className={`inline-block rounded-pill border px-3 py-1 text-xs ${card.statusClass}`}
              >
                {card.status}
              </span>

              <div className="mt-4 text-2xl">{card.icon}</div>
              <h3 className="mt-2 text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm text-text-2">{card.body}</p>

              <ul className="mt-5 space-y-2.5">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-text-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
