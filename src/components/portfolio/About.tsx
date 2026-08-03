import { Reveal } from "../Reveal";

const stats = [
  { value: "170+", label: "Internal teams using components I build" },
  { value: "70+", label: "Production React components shipped" },
  { value: "~6", label: "Years building frontend at scale" },
  { value: "3", label: "Companies shipping production frontend" },
];

const timeline = [
  {
    title: "PayPal",
    badge: "Current",
    dot: "bg-accent text-white",
    meta: "Software Engineer 2 · Bengaluru",
    desc: "Enterprise Design System — 70+ React components, 170+ consuming teams. Compound component architecture, a11y, i18n.",
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
            I'm a frontend engineer at <strong className="text-text">PayPal</strong> with{" "}
            <strong className="text-text">~6 years of experience</strong>. I work on PayPal's
            enterprise Design System: a library of{" "}
            <strong className="text-text">70+ production React components</strong> consumed by{" "}
            <strong className="text-text">170+ internal teams</strong> across the company.
          </p>
          <p>
            Modal dialogs. Accordions. Cards. Autocomplete.{" "}
            <strong className="text-text">These aren't practice problems — they're my job.</strong>{" "}
            I've architected them with compound component patterns, made them accessible,
            localized them across languages, and maintained backward compatibility while 170+
            teams depend on them.
          </p>
          <p>
            I care about{" "}
            <strong className="text-text">
              the trade-offs, edge cases, and API design decisions that actually matter at scale
            </strong>{" "}
            — not the clean solution you'd find in a tutorial.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-card border border-border bg-surface p-5">
              <div className="text-[30px] font-bold text-accent">{stat.value}</div>
              <div className="mt-1 text-sm text-text-2">{stat.label}</div>
            </div>
          ))}
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
