import { Reveal } from "../Reveal";

const timeline = [
  {
    title: "PayPal",
    badge: "Current",
    dot: "bg-accent text-white",
    meta: "Software Engineer 2 · Bengaluru",
    desc: "Enterprise Design System — component architecture, accessibility, internationalisation, and the build tooling the library ships on.",
  },
  {
    title: "Publicis Sapient",
    badge: null,
    dot: "bg-accent text-white",
    meta: "Associate Technology L2 · Mumbai",
    desc: "Built customer-facing loyalty program frontend end to end. Led legacy → React migration for a business payments platform.",
  },
  {
    title: "Xoriant Solutions",
    badge: null,
    dot: "bg-accent text-white",
    meta: "Associate Software Engineer · Pune",
    desc: "Investment analytics platform — dashboards, portfolio boards, and data visualisation in React.",
  },
  {
    title: "Building MadeToCode",
    badge: null,
    dot: "bg-accent-dim border border-accent-border text-accent",
    meta: null,
    desc: "Turning six years of production experience into a structured interview prep roadmap.",
  },
];

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

        <div className="mt-8 rounded-card border border-border bg-surface p-7">
          <p className="text-[11px] font-bold uppercase tracking-[2px] text-text-3">
            Career timeline
          </p>

          <div className="mt-5">
            {timeline.map((item, i) => (
              <div
                key={item.title}
                className={`flex gap-4 py-5 ${
                  i !== timeline.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div
                  aria-hidden="true"
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-medium ${item.dot}`}
                >
                  {i === timeline.length - 1 ? "▶" : "✓"}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    {item.badge && (
                      <span className="rounded-pill border border-accent-border bg-accent-dim px-2.5 py-0.5 text-xs text-accent">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {item.meta && <p className="mt-0.5 text-xs text-text-3">{item.meta}</p>}
                  <p className="mt-1 text-sm text-text-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
