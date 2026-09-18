import { GraduationCap } from "lucide-react";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <div className="flex flex-wrap items-center gap-5 rounded-xl border border-border bg-surface p-7">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
          <GraduationCap size={22} />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-text">KLE Technological University</p>
          <p className="mt-1 text-sm text-text-muted">
            Bachelor of Engineering — Computer Science Engineering
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-text-dim">CGPA</p>
          <p className="font-mono text-xl font-semibold text-accent">8.79</p>
        </div>
      </div>
    </Section>
  );
}
