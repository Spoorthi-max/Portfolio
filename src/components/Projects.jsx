import { useMemo, useState } from "react";
import { categories, projects } from "../data/projects";
import Section from "./Section";
import { FeaturedProjectCard, CompactProjectCard } from "./ProjectCard";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.categories.includes(filter));
  }, [filter]);

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="What I've built"
      description="A selection of software, backend and AI/ML projects — from production-style microservice migrations to applied research."
    >
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === cat
                ? "border-accent/50 bg-accent-soft text-accent"
                : "border-border text-text-muted hover:text-text"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {featured.length > 0 && (
        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => (
            <CompactProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <p className="rounded-xl border border-dashed border-border py-16 text-center text-text-dim">
          No projects in this category yet.
        </p>
      )}
    </Section>
  );
}
