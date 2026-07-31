import { useScrolled } from "../hooks/useScrolled";

export function Nav() {
  const scrolled = useScrolled(8);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-border bg-white/88 backdrop-blur" : "border-transparent bg-white/0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:px-12">
        <a href="#" className="text-lg font-bold tracking-[-0.5px]">
          Made<span className="text-accent">To</span>Code
        </a>

        <nav className="hidden items-center gap-8 text-sm text-text-2 md:flex">
          <a href="#tracks" className="transition-colors hover:text-text">
            Curriculum
          </a>
          <a href="#topics" className="transition-colors hover:text-text">
            Topics
          </a>
          <a href="#about" className="transition-colors hover:text-text">
            About
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/madetocode"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-btn border border-border px-4 py-2 text-sm text-text transition-colors hover:border-text-2 sm:inline-block"
          >
            Instagram
          </a>
          <a
            href="#waitlist"
            className="rounded-btn bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Join waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
