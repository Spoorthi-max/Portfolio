import { Award, FileText, Trophy } from "lucide-react";
import Section from "./Section";
import { achievements, publications, research } from "../data/research";

export default function Research() {
  return (
    <Section
      id="research"
      eyebrow="Research & Achievements"
      title="Research & Achievements"
    >
      <div>
        <p className="mb-4 text-sm font-medium text-text-dim">Competitions & Achievements</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Trophy size={16} />
              </div>
              <p className="font-semibold leading-snug text-text">{item.title}</p>
              <p className="mt-1.5 text-sm text-text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface p-6 lg:col-span-2">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
            <FileText size={18} />
          </div>
          <p className="mb-4 text-sm font-medium text-text-dim">Research</p>
          <div className="space-y-5">
            {research.map((item) => (
              <div key={item.title} className="border-t border-border pt-5 first:border-t-0 first:pt-0">
                <p className="font-medium leading-snug text-text">{item.title}</p>
                <p className="mt-1.5 text-sm text-text-muted">{item.result}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-6">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
            <Award size={18} />
          </div>
          <p className="text-sm font-medium text-text-dim">Publication</p>
          {publications.map((item) => (
            <p key={item.title} className="mt-2 font-semibold leading-snug text-text">
              {item.title}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
