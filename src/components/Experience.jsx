import { Briefcase } from "lucide-react";
import Section from "./Section";

const highlights = [
  "Migrated backend microservice functionality from Java Spring Boot to Go",
  "Implemented REST APIs",
  "Integrated PostgreSQL",
  "Dockerized services for local deployment",
  "Worked with microservice architecture and backend systems",
];

const tech = ["Go", "REST APIs", "PostgreSQL", "Docker", "Git"];

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="rounded-xl border border-border bg-surface p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <Briefcase size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text">
                Software Development Intern
              </h3>
              <p className="text-sm font-medium text-accent">Infosys CDPI</p>
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-2xl leading-relaxed text-text-muted">
          Worked on DIGIT OSS municipal-service microservices, including migration of backend
          services from Java Spring Boot to Go.
        </p>

        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-2 border-t border-border pt-6">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-xs text-text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
