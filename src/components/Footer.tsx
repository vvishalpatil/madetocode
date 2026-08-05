import { InstagramIcon, LinkedInIcon, YouTubeIcon } from "./icons";

const socials = [
  { label: "YouTube", href: "https://youtube.com/@madetocode7", Icon: YouTubeIcon },
  { label: "Instagram", href: "https://instagram.com/madetocode", Icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/vishalpatil", Icon: LinkedInIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-12">
        <div className="text-center md:text-left">
          <div className="text-lg font-bold tracking-[-0.5px]">
            Made<span className="text-accent">To</span>Code
          </div>
          <p className="mt-1 text-xs text-text-3">One problem at a time.</p>
        </div>

        <div className="flex gap-3">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-pill border border-border px-4 py-2 text-sm text-text-2 transition-colors hover:border-text-2 hover:text-text"
            >
              <Icon className="size-4" />
              {label}
            </a>
          ))}
        </div>

        <p className="text-xs text-text-3">© 2026 MadeToCode · madetocode.io</p>
      </div>
    </footer>
  );
}
