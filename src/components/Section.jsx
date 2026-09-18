import { useInView } from "../hooks/useInView";

export default function Section({ id, eyebrow, title, description, children, className = "" }) {
  const [ref, inView] = useInView();

  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 fade-section ${inView ? "in-view" : ""}`}
      >
        {(eyebrow || title) && (
          <div className="mb-12 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 font-mono text-sm font-medium tracking-wide text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-relaxed text-text-muted">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
