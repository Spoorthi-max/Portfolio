import { Brain, Code2, Eye, GraduationCap, Server, ShieldHalf } from "lucide-react";
import Section from "./Section";

const interests = [
  { label: "Software Engineering", icon: Code2 },
  { label: "Backend Development", icon: Server },
  { label: "Artificial Intelligence", icon: Brain },
  { label: "Machine Learning", icon: Brain },
  { label: "Computer Vision", icon: Eye },
  { label: "LLM Security", icon: ShieldHalf },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Who I am">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-balance leading-relaxed text-text-muted">
            I&apos;m a final-year Computer Science Engineering student with hands-on experience
            in backend development, AI/ML, and software engineering. I enjoy building practical
            systems, working with real-world datasets, and turning technical ideas into usable
            applications.
          </p>

          <div className="mt-10">
            <p className="mb-4 text-sm font-medium text-text-dim">Areas of interest</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {interests.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-md border border-border bg-surface px-3.5 py-3 text-sm text-text-muted transition-colors hover:border-accent/40 hover:text-text"
                >
                  <Icon size={16} className="shrink-0 text-accent" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-6">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
            <GraduationCap size={20} />
          </div>
          <p className="text-sm font-medium text-text-dim">Education</p>
          <p className="mt-2 text-lg font-semibold text-text">
            Computer Science Engineering
          </p>
          <p className="mt-1 text-sm text-text-muted">KLE Technological University</p>
          <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
            <span className="text-sm text-text-dim">CGPA</span>
            <span className="font-mono text-lg font-semibold text-accent">8.79</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
