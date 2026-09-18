import Section from "./Section";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Technical Skills" title="Tools & technologies">
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <p className="mb-4 text-sm font-medium text-text-dim">{group.category}</p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border bg-surface-2 px-3 py-1.5 text-sm text-text-muted transition-colors hover:border-accent/40 hover:text-text"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
