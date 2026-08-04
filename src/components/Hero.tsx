import { CodeWindow } from "./CodeWindow";
import { InstagramIcon, YouTubeIcon } from "./icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(255,92,26,0.07), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-12 md:py-32">
        <div>
          <div className="inline-flex items-center gap-2 rounded-pill border border-accent-border bg-accent-dim px-4 py-1.5 text-sm text-accent">
            <span className="size-2 rounded-full bg-accent animate-[pulse-dot_2s_infinite]" />
            Frontend track live — Backend &amp; more coming
          </div>

          <h1 className="mt-6 text-[40px] font-bold leading-[1.05] tracking-[-1.5px] sm:text-[56px]">
            The interview prep roadmap for <span className="text-accent">engineers.</span>
          </h1>

          <p className="mt-6 max-w-lg text-[17px] text-text-2">
            A structured path to crack frontend, backend, and full-stack interviews at top
            companies. Machine coding. DSA. System Design — in the order that actually matters.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://youtube.com/@madetocode7"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-btn bg-text px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <YouTubeIcon className="size-4" />
              Watch on YouTube
            </a>
            <a
              href="https://instagram.com/madetocode"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-btn border border-border px-5 py-3 text-sm font-medium text-text transition-colors hover:border-text-2"
            >
              <InstagramIcon className="size-4" />
              Follow @madetocode
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <CodeWindow />
        </div>
      </div>
    </section>
  );
}
