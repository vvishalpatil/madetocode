import { Reveal } from "./Reveal";

const stats = [
  { value: "6", label: "Years of production frontend experience" },
  { value: "20+", label: "Machine coding problems with full walkthroughs" },
  { value: "3", label: "Interview rounds covered per discipline" },
  { value: "3+", label: "Disciplines planned: Frontend, Backend, Full Stack" },
];

const roadmap = [
  {
    title: "Machine Coding",
    badge: "Live now",
    dot: "bg-accent text-white",
    desc: "Build UI components under time pressure. Graded the way interviewers actually score it.",
  },
  {
    title: "Core DSA",
    badge: null,
    dot: "bg-accent-dim border border-accent-border text-accent",
    desc: "The 25 patterns that actually appear in frontend & backend interviews — nothing more.",
  },
  {
    title: "System Design",
    badge: null,
    dot: "bg-surface-2 border border-border text-text-2",
    desc: "Frontend and backend architecture — from component design to distributed systems.",
  },
  {
    title: "Mock Interviews & Cohorts",
    badge: null,
    dot: "bg-surface-2 border border-border text-text-2",
    desc: "Live sessions with real feedback. Practice the full loop end to end.",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1200px] px-6 py-24 md:px-12">
      <Reveal>
        <p className="text-[11px] font-bold uppercase tracking-[2.5px] text-accent">
          Why MadeToCode
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-1px] sm:text-4xl">
          A structured roadmap, not scattered content.
        </h2>
        <p className="mt-4 max-w-2xl text-[17px] text-text-2">
          Most interview prep is random YouTube videos and guesswork. MadeToCode is a curated
          path covering every round, every discipline, in the right order.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        <Reveal>
          <div className="space-y-5 text-[16px] leading-relaxed text-text-2">
            <p>
              Hey, I'm <strong className="text-text">Vishal Patil</strong> — a frontend engineer
              with <strong className="text-text">6 years of experience</strong> building
              production-grade systems. After researching what top companies actually test in
              interviews, I built MadeToCode as the structured roadmap I wish I had.
            </p>
            <p>
              The problem with most prep content is that it's fragmented —{" "}
              <strong className="text-text">
                machine coding videos here, LeetCode grind there, vague system design articles
                somewhere else
              </strong>
              . Nobody tells you what to study, in what order, or what interviewers are actually
              grading.
            </p>
            <p>
              MadeToCode fixes that.{" "}
              <strong className="text-text">One structured path, discipline by discipline.</strong>
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-card border border-border bg-surface p-5"
              >
                <div className="text-[30px] font-bold text-accent">{stat.value}</div>
                <div className="mt-1 text-sm text-text-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-card border border-border bg-surface p-7">
            <p className="text-[11px] font-bold uppercase tracking-[2px] text-text-3">
              The Prep Roadmap
            </p>

            <div className="mt-5">
              {roadmap.map((step, i) => (
                <div
                  key={step.title}
                  className={`flex gap-4 py-5 ${
                    i !== roadmap.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-medium ${step.dot}`}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold">{step.title}</h3>
                      {step.badge && (
                        <span className="rounded-pill border border-accent-border bg-accent-dim px-2.5 py-0.5 text-xs text-accent">
                          {step.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-text-2">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
