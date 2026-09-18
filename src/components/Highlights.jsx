const stats = [
  { value: "8.79", label: "CGPA" },
  { value: "34", label: "Worldwide Rank — WiDS Datathon 2025" },
  { value: "88%", label: "Dice Score — OCT Segmentation" },
  { value: "2026", label: "Published Researcher" },
];

export default function Highlights() {
  return (
    <section className="border-b border-border py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-surface p-6 text-center transition-colors hover:border-accent/40"
            >
              <p className="font-mono text-3xl font-bold text-accent sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs leading-snug text-text-muted sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
