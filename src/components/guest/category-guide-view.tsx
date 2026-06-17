import { ResortCard } from "@/components/guest/resort-card";
import type { SystemGuide } from "@/data/property";

export function CategoryGuideView({ guide }: { guide: SystemGuide }) {
  return (
    <article className="space-y-8 px-4 py-6">
      <p className="text-lg leading-relaxed text-muted-foreground">{guide.intro}</p>

      {guide.sections.map((section) => (
        <section key={section.id} aria-labelledby={`section-${section.id}`}>
          <h2
            id={`section-${section.id}`}
            className="resort-section-title mb-4"
          >
            {section.title}
          </h2>
          <ol className="space-y-3">
            {section.steps.map((step, i) => (
              <li
                key={step.text}
                className="flex gap-3 rounded-2xl border border-border/50 bg-card/60 p-4"
              >
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-lake font-display text-lg font-medium text-lake-foreground"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <p className="pt-1.5 text-lg leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>
      ))}

      {guide.troubleshooting.length > 0 ? (
        <section aria-labelledby="guide-troubleshooting">
          <p className="resort-kicker mb-1">Need help?</p>
          <h2 id="guide-troubleshooting" className="resort-section-title mb-4">
            Troubleshooting
          </h2>
          <ul className="space-y-3">
            {guide.troubleshooting.map((item) => (
              <li key={item.question}>
                <ResortCard variant="elevated" className="py-4">
                  <h3 className="text-lg font-bold">{item.question}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </ResortCard>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
