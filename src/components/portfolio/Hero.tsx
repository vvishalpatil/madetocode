import { GitHubIcon, MailIcon } from "../icons";

const focusAreas = ["Frontend", "Design Systems", "Accessibility", "Developer Experience"];

const stack = [
  { label: "React", className: "bg-[#61DAFB]/10 text-[#61DAFB] border-[#61DAFB]/30" },
  { label: "TypeScript", className: "bg-[#3178C6]/10 text-[#3178C6] border-[#3178C6]/30" },
  { label: "Vite", className: "bg-accent-dim text-accent border-accent-border" },
  { label: "Storybook", className: "bg-[#FF4785]/10 text-[#FF4785] border-[#FF4785]/30" },
  { label: "Vitest", className: "bg-[#6E9F18]/10 text-[#6E9F18] border-[#6E9F18]/30" },
];

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-[#0A0A0A]">
      <div
        className="pointer-events-none absolute left-0 top-0 h-40 w-40 opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(255,92,26,0.5) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 600px 400px at 80% 30%, rgba(255,92,26,0.08), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1100px] gap-10 px-6 py-16 sm:grid-cols-[1.1fr_0.9fr] sm:gap-8 sm:px-10 sm:py-20">
        <div>
          <p className="font-mono text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="text-accent">{"<"}</span> VISHAL{" "}
            <span className="text-accent">PATIL</span>{" "}
            <span className="text-accent">{"/>"}</span>
          </p>

          <div className="mt-5 inline-block rounded border border-accent-border bg-accent-dim px-4 py-2 text-sm font-medium tracking-wide text-white/90">
            Code. Build. Solve. Grow.
          </div>

          <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-wide text-white/60 sm:text-sm">
            {focusAreas.map((area, i) => (
              <span key={area} className="flex items-center gap-2">
                {area}
                {i < focusAreas.length - 1 && <span className="text-accent">•</span>}
              </span>
            ))}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {stack.map((tech) => (
              <span
                key={tech.label}
                className={`rounded-md border px-3 py-1.5 text-xs font-semibold ${tech.className}`}
              >
                {tech.label}
              </span>
            ))}
          </div>

          <div className="mt-10 inline-flex items-start gap-3 rounded-lg border border-accent-border bg-white/[0.03] px-5 py-4">
            <span aria-hidden="true" className="text-2xl text-accent">
              ↗
            </span>
            <div>
              <p className="text-2xl font-bold text-accent">6+</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                Years of experience
              </p>
              <p className="mt-1 text-xs text-white/40">Building accessible, production UI</p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-end sm:items-end">
          <p className="mb-4 max-w-[240px] text-right italic leading-snug text-white/70 sm:text-lg">
            Solving hard UI problems.
            <br />
            Sharing what I learn.
            <br />
            <span className="text-accent not-italic">Building accessible software.</span>
          </p>
          <img
            src="/vishal-photo.png"
            alt="Vishal Patil"
            width={480}
            height={640}
            className="w-full max-w-[280px] rounded-2xl object-cover shadow-2xl shadow-black/50"
          />
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-6 px-6 py-5 text-sm text-white/70 sm:justify-between sm:px-10">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://github.com/vvishalpatil"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
            <a
              href="mailto:vishalpatil948@gmail.com"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <MailIcon className="size-4" />
              Email
            </a>
          </div>
          <a
            href="mailto:vishalpatil948@gmail.com"
            className="rounded-btn bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Let's build something
          </a>
        </div>
      </div>
    </header>
  );
}
