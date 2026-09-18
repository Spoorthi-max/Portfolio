import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { site } from "../data/site";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="rounded-2xl border border-border bg-surface px-8 py-16 text-center sm:px-16">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Let&apos;s Build Something
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-text-muted">
          I&apos;m always interested in software engineering, AI/ML, backend systems, research,
          and opportunities to build impactful technology.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:brightness-110"
          >
            <Mail size={16} />
            Email Me
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-text-muted transition-all hover:-translate-y-0.5 hover:text-text"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-text-muted transition-all hover:-translate-y-0.5 hover:text-text"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}
