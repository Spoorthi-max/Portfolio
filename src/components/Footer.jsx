import { GithubIcon, LinkedinIcon } from "./icons";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm font-semibold text-text">{site.name}</p>
          <p className="mt-1 text-xs text-text-dim">{site.tagline}</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-text-muted transition-colors hover:text-accent"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-text-muted transition-colors hover:text-accent"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>

        <p className="text-xs text-text-dim">© 2026 {site.name}</p>
      </div>
    </footer>
  );
}
