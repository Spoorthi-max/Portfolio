import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

function GithubButton({ href }) {
  const isPlaceholder = !href || href.startsWith("#");
  return (
    <a
      href={isPlaceholder ? undefined : href}
      target={isPlaceholder ? undefined : "_blank"}
      rel={isPlaceholder ? undefined : "noreferrer"}
      aria-disabled={isPlaceholder}
      title={isPlaceholder ? "Add GitHub repository URL" : "View on GitHub"}
      className={`inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
        isPlaceholder
          ? "cursor-not-allowed border-dashed border-border text-text-dim"
          : "border-border text-text hover:border-accent/50 hover:text-accent"
      }`}
    >
      <GithubIcon size={15} />
      {isPlaceholder ? "Add GitHub URL" : "GitHub"}
    </a>
  );
}

export function FeaturedProjectCard({ project }) {
  return (
    <article className="rounded-xl border border-border bg-surface p-7 transition-colors hover:border-accent/40 sm:p-9">
      <div className="flex flex-wrap items-start justify-between gap-3">
        {project.tagline && (
          <p className="font-mono text-xs font-medium tracking-wide text-accent">
            {project.tagline}
          </p>
        )}
      </div>

      <h3 className="mt-2 text-balance text-xl font-semibold text-text sm:text-2xl">
        {project.name}
      </h3>

      <p className="mt-3 max-w-2xl leading-relaxed text-text-muted">{project.description}</p>

      {project.features.length > 0 && (
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-xs text-text-muted"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-3 border-t border-border pt-6">
        <GithubButton href={project.github} />
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}

export function CompactProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40">
      {project.tagline && (
        <p className="mb-1.5 font-mono text-[11px] font-medium tracking-wide text-accent">
          {project.tagline}
        </p>
      )}
      <h3 className="text-base font-semibold text-text">{project.name}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-text-muted">
        {project.description}
      </p>

      {project.features.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs text-text-muted">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-surface-2 px-2.5 py-0.5 font-mono text-[11px] text-text-muted"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-5 border-t border-border pt-4">
        <GithubButton href={project.github} />
      </div>
    </article>
  );
}
