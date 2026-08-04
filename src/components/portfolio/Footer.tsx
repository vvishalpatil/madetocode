import { GitHubIcon, LinkedInIcon, MailIcon } from "../icons";

const links = [
  { label: "GitHub", href: "https://github.com/vvishalpatil", Icon: GitHubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/vishalpatil37", Icon: LinkedInIcon },
  { label: "Email", href: "mailto:vishalpatil948@gmail.com", Icon: MailIcon },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border pt-10">
      <h2 className="text-2xl font-bold tracking-tight text-text">
        Currently open to interesting problems.
      </h2>
      <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-text-2">
        If you're working on design systems, component libraries, or anything where the
        accessibility and API details actually matter — I'd like to hear about it.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {links.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            {...(href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noreferrer" })}
            className="inline-flex items-center gap-2 rounded-pill border border-border px-4 py-2 text-sm text-text-2 transition-colors hover:border-accent-border hover:bg-accent-dim hover:text-text"
          >
            <Icon className="size-4" />
            {label}
          </a>
        ))}
        {/* Re-enable once public/resume.pdf exists — currently a 404. */}
        {/* <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 rounded-pill border border-border px-4 py-2 text-sm text-text-2 transition-colors hover:border-accent-border hover:bg-accent-dim hover:text-text"
        >
          Résumé
        </a> */}
      </div>

      <p className="mt-10 text-xs text-text-3">© 2026 Vishal Patil</p>
    </footer>
  );
}
