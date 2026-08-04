import type { ReactNode } from "react";
import { Reveal } from "../Reveal";

function renderBold(text: string): ReactNode {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-text">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

type Company = {
  name: string;
  role: string;
  location: string;
  current: boolean;
  highlight: string;
  bullets: string[];
};

const companies: Company[] = [
  {
    name: "PayPal",
    role: "Software Engineer 2, Frontend",
    location: "Bengaluru, India",
    current: true,
    highlight:
      "Part of the team building PayPal's enterprise Design System — the React component library product teams across the company build their interfaces on.",
    bullets: [
      "Introduced **compound component architecture** to Modal, Dialog, Card, and Accordion — enabling custom UI composition for consuming teams while maintaining full backward compatibility.",
      "Drive **component API design decisions** — defining prop interfaces and event contracts so components stay predictable for every team that depends on them.",
      "Migrated the library's build tooling to **Vite**, cutting build times and tightening the local feedback loop for the whole team.",
      "Built a **Live Edit Plugin for Storybook**, letting engineers test and validate components in real time without leaving the docs.",
    ],
  },
  {
    name: "Publicis Sapient",
    role: "Associate Technology L2, Frontend",
    location: "Mumbai, India",
    current: false,
    highlight:
      "Delivered a customer-facing Loyalty Program journey from scratch to production, and led a legacy banking platform's migration to React.",
    bullets: [
      "Built the **end-to-end frontend for a Loyalty Program Journey** — enabling users to link or join third-party loyalty cards to their bank payment card — shipped to production with direct client recognition.",
      "Part of the team that migrated a legacy **Business Payments platform** to a modern React stack — extracting reusable components, restructuring routing, and introducing Redux for state management.",
    ],
  },
  {
    name: "Xoriant Solutions",
    role: "Associate Software Engineer, Frontend",
    location: "Pune, India",
    current: false,
    highlight:
      "Built frontend modules for an investment analytics platform used to track and compare portfolio performance.",
    bullets: [
      "Built the **user dashboard, portfolio creation board, and performance comparison views** in React, including the data visualisation layer for portfolio performance.",
    ],
  },
];

export function Experience() {
  return (
    <Reveal className="mt-16 sm:mt-20">
      <section aria-labelledby="experience-heading">
        <p className="text-[11px] font-bold uppercase tracking-[2.5px] text-accent">Experience</p>
        <h2 id="experience-heading" className="mt-2 text-2xl font-bold tracking-tight text-text">
          Six years of production frontend.
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] text-text-2">
          Design systems, platform migrations, and customer-facing products — across fintech,
          banking, and investment platforms.
        </p>

        <div className="mt-8">
          {companies.map((company, i) => (
            <div
              key={company.name}
              className={`py-7 ${i !== companies.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <h3 className="text-xl font-bold tracking-tight text-text">{company.name}</h3>
                {company.current && (
                  <span className="rounded-pill border border-accent-border bg-accent-dim px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                    Current
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm font-medium text-text-2">{company.role}</p>
              <p className="text-[13px] text-text-3">{company.location}</p>

              <p className="mt-4 border-l-2 border-accent py-0.5 pl-3.5 text-[15px] font-medium text-text">
                {company.highlight}
              </p>

              <ul className="mt-4 space-y-2">
                {company.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex items-start gap-2.5 text-sm leading-relaxed text-text-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-text-3" />
                    <span>{renderBold(bullet)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
