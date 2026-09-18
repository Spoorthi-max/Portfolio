import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { site } from "../data/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] scroll-mt-16 items-center overflow-hidden border-b border-border"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_35%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <p className="animate-fade-in font-mono text-sm font-medium tracking-wide text-accent">
          Hi, I&apos;m
        </p>

        <h1 className="mt-4 animate-fade-in text-balance text-4xl font-extrabold tracking-tight text-text sm:text-6xl">
          Spoorthi Hiremath
        </h1>

        <p className="mt-4 max-w-2xl animate-fade-in text-lg font-medium text-text-muted sm:text-xl">
          Final-Year Computer Science Engineering Student
        </p>

        <p className="mt-2 animate-fade-in font-mono text-sm font-medium tracking-wide text-text-dim sm:text-base">
          Software Development • AI/ML • Backend Systems
        </p>

        <p className="mt-6 max-w-xl animate-fade-in text-balance leading-relaxed text-text-muted">
          Building practical software systems and AI-powered solutions across backend
          development, machine learning, and intelligent applications.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-[#04110e] transition-transform hover:-translate-y-0.5 hover:brightness-110"
          >
            View Projects
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

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-text-dim transition-colors hover:text-accent sm:block"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
