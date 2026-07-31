export function Hero() {
  return (
    <header className="pt-20 sm:pt-28">
      <p className="font-mono text-sm text-text-2">Vishal Patil — Frontend engineer, Bengaluru</p>

      <h1 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-text sm:text-[42px]">
        I work on design systems and accessible component libraries — the layer other engineers
        build on.
      </h1>

      <div className="mt-6 flex gap-6 text-sm">
        <a
          href="https://github.com/vvishalpatil"
          target="_blank"
          rel="noreferrer"
          className="text-accent underline-offset-4 hover:underline"
        >
          GitHub
        </a>
        <a
          href="mailto:vishalpatil948@gmail.com"
          className="text-accent underline-offset-4 hover:underline"
        >
          Email
        </a>
      </div>
    </header>
  );
}
