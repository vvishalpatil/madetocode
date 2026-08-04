import { Reveal } from "../Reveal";

const cards = [
  {
    icon: "🤖",
    title: "Recognized by the team for the test generator agent",
    desc: "Built an agent that identifies meaningful coverage gaps across the library and writes the tests to close them.",
    org: "PayPal",
  },
  {
    icon: "🚀",
    title: "Recognized by dependent teams for unblocking releases",
    desc: "Resolved critical component and live production issues within tight timeframes, unblocking major integration releases across teams.",
    org: "PayPal",
  },
  {
    icon: "🏆",
    title: "Client & internal team appreciation for Loyalty Card Journey",
    desc: "Managed the entire frontend journey from scratch to production for a customer-facing loyalty card product.",
    org: "Publicis Sapient",
  },
];

export function Recognition() {
  return (
    <Reveal className="mt-16 sm:mt-20">
      <section aria-labelledby="recognition-heading">
        <p className="text-[11px] font-bold uppercase tracking-[2.5px] text-accent">
          Recognition
        </p>
        <h2 id="recognition-heading" className="mt-2 text-2xl font-bold tracking-tight text-text">
          Work that got noticed.
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] text-text-2">
          Recognition from clients, dependent teams, and peers — for shipping things that made a
          measurable difference.
        </p>

        <div className="mt-8 space-y-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-card border border-border bg-surface p-7 transition-all duration-200 hover:-translate-y-[3px] hover:border-accent-border"
            >
              <div aria-hidden="true" className="text-2xl">
                {card.icon}
              </div>
              <h3 className="mt-3 text-[15px] font-semibold leading-snug text-text">
                {card.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-text-2">{card.desc}</p>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-wide text-accent">
                {card.org}
              </p>
            </div>
          ))}
        </div>

      </section>
    </Reveal>
  );
}
