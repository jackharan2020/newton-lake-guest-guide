import Image from "next/image";
import { ResortCard } from "@/components/guest/resort-card";
import type { InstructionTopic } from "@/data/property";

export function InstructionView({ topic }: { topic: InstructionTopic }) {
  return (
    <article className="space-y-6 px-4 py-6">
      <p className="text-lg leading-relaxed text-muted-foreground">
        {topic.summary}
      </p>

      {topic.photoPath ? (
        <figure className="overflow-hidden rounded-2xl shadow-[var(--shadow-resort)]">
          <Image
            src={topic.photoPath}
            alt={topic.photoAlt ?? topic.title}
            width={800}
            height={500}
            className="h-auto w-full object-cover"
            sizes="(max-width: 512px) 100vw, 512px"
          />
        </figure>
      ) : null}

      <section aria-labelledby="steps-heading">
        <p className="resort-kicker mb-1">Step by step</p>
        <h2 id="steps-heading" className="resort-section-title">
          How to use
        </h2>
        <ol className="mt-5 space-y-4">
          {topic.steps.map((step, i) => (
            <li
              key={step.text}
              className="flex gap-4 rounded-2xl border border-border/50 bg-card/60 p-4"
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

      {topic.troubleshooting && topic.troubleshooting.length > 0 ? (
        <ResortCard
          variant="flat"
          as="section"
          aria-labelledby="troubleshooting-heading"
          className="border-gold/30 bg-gold/8"
        >
          <p className="resort-kicker">
            {topic.footerSectionKicker ?? "Need help?"}
          </p>
          <h2 id="troubleshooting-heading" className="resort-section-title mt-1">
            {topic.footerSectionTitle ?? "Troubleshooting"}
          </h2>
          <ul className="mt-4 space-y-2.5 text-base leading-relaxed">
            {topic.troubleshooting.map((tip) => (
              <li key={tip} className="flex gap-2.5">
                <span className="text-gold" aria-hidden>
                  —
                </span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </ResortCard>
      ) : null}
    </article>
  );
}
