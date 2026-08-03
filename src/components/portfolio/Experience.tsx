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
      "Building PayPal's enterprise Design System — 70+ reusable React components consumed by 170+ internal teams company-wide.",
    bullets: [
      "Architected components with **React, TypeScript, and vanilla-extract**, ensuring cross-browser compatibility, multilingual support, and consistent behaviour across devices.",
      "Introduced **compound component architecture** to Modal, Dialog, Card, and Accordion — enabling custom UI composition for consuming teams while maintaining full backward compatibility.",
      "Drive **component API design decisions** — defining prop interfaces and event contracts so components stay intuitive across 170+ teams.",
      "Cut build times by **70%** by migrating the build tooling to Vite, improving developer experience across the team.",
      "Built a **Live Edit Plugin for Storybook**, letting engineers test and validate components in real time without leaving the docs.",
      "Developed a **test generator agent** that identifies coverage gaps and writes meaningful tests — raising coverage from 71% to 90% in two days.",
      "Extended the design system's **MCP server** to detect newer library versions, letting downstream teams review required changes from the changelog.",
      "Automated the PR workflow end to end — commits, PR creation, stage links, and Slack reviewer notifications — reducing developer friction across every release.",
      "Set up **Lerna monorepo versioning**, semantic release, ESLint/Prettier standards, and a Sonar quality gate in CI.",
      "Improved component quality through performance optimisations (code-splitting, lazy loading, caching) and increased snapshot test coverage by **25%**.",
      "Collaborate closely with design, **accessibility**, and motion experts on every new component addition.",
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
      "Part of the team that migrated a legacy **Business Payments platform** to a modern React stack — extracting reusable components, restructuring routing with React Router, and implementing Redux for state management.",
      "Developed and tested UI components with **React, Jest, and React Testing Library**, and set up project structure and Webpack build pipelines across both projects.",
      "Aligned with backend and design teams on **Swagger/OpenAPI contracts** and authored API mapping documentation for the team.",
      "Identified and resolved UI performance and design consistency issues through code and design reviews across sprint cycles.",
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
      "Developed the **User Dashboard, Portfolio Creation Board, and Best Performing Portfolios Board** in React.js.",
      "Built **data visualisation features** to display portfolio performance, and handled REST API integration for fetching and mapping financial data to the UI.",
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
