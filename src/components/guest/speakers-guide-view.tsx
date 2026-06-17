import Image from "next/image";
import {
  Airplay,
  Home,
  Layers,
  MapPin,
  Smartphone,
  Speaker,
  Trees,
  Wifi,
} from "lucide-react";
import { ResortCard } from "@/components/guest/resort-card";
import type {
  SpeakerControlMethod,
  SpeakerZone,
  SpeakersGuide,
} from "@/data/property";

export function SpeakersGuideView({ guide }: { guide: SpeakersGuide }) {
  return (
    <article className="space-y-8 px-4 py-6">
      <ResortCard variant="flat" className="border-teal/30 bg-teal/[0.06]">
        <p className="text-lg font-semibold leading-relaxed text-foreground">
          {guide.overview}
        </p>
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
          {guide.groupingNote}
        </p>
      </ResortCard>

      <ResortCard variant="flat" className="border-lake/35 bg-lake/10">
        <div className="flex items-start gap-3">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-lake/15 text-lake">
            <Wifi className="size-6" aria-hidden />
          </span>
          <div>
            <p className="resort-kicker">Important</p>
            <p className="mt-1 text-lg font-semibold leading-relaxed text-foreground">
              {guide.wifiRequiredNote}
            </p>
          </div>
        </div>
      </ResortCard>

      <section aria-labelledby="control-methods-heading">
        <h2 id="control-methods-heading" className="resort-section-title mb-4">
          Control Methods
        </h2>
        <ul className="grid gap-5 lg:grid-cols-2">
          {guide.controlMethods.map((method) => (
            <li key={method.id}>
              <ControlMethodCard method={method} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="outdoor-zones-heading">
        <div className="mb-4 flex items-center gap-2">
          <Trees className="size-6 text-teal" aria-hidden />
          <h2 id="outdoor-zones-heading" className="resort-section-title">
            Outdoor Zones
          </h2>
        </div>
        <ul className="space-y-5">
          {guide.outdoorZones.map((zone) => (
            <li key={zone.id}>
              <SpeakerZoneCard zone={zone} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="indoor-zones-heading">
        <div className="mb-4 flex items-center gap-2">
          <Home className="size-6 text-teal" aria-hidden />
          <h2 id="indoor-zones-heading" className="resort-section-title">
            Indoor Zones
          </h2>
        </div>
        <ul className="space-y-5">
          {guide.indoorZones.map((zone) => (
            <li key={zone.id}>
              <SpeakerZoneCard zone={zone} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="grouping-heading">
        <h2 id="grouping-heading" className="resort-section-title mb-4">
          Grouping Speakers
        </h2>
        <ResortCard variant="elevated">
          <div className="flex items-start gap-3">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-teal/12 text-teal">
              <Layers className="size-6" aria-hidden />
            </span>
            <div>
              <p className="text-lg leading-relaxed text-foreground">
                Group multiple rooms together to play the same music wherever
                you are spending time.
              </p>
              <p className="mt-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Examples
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {guide.groupingExamples.map((example) => (
                  <li
                    key={example}
                    className="rounded-xl border border-teal/20 bg-teal/[0.06] px-4 py-3 text-center text-base font-semibold text-foreground"
                  >
                    {example}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Mix and match rooms depending on where you are spending time.
              </p>
            </div>
          </div>
        </ResortCard>
      </section>

      <section aria-labelledby="courtesy-heading">
        <ResortCard
          variant="flat"
          className="border-lake/30 bg-lake/[0.06]"
          aria-labelledby="courtesy-heading"
        >
          <p className="resort-kicker">Courtesy to neighbors</p>
          <h2 id="courtesy-heading" className="resort-section-title mt-1">
            {guide.courtesy.title}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-foreground">
            {guide.courtesy.intro}
          </p>
          <p className="mt-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
            When finished listening
          </p>
          <ul className="mt-2 space-y-2.5">
            {guide.courtesy.guidelines.map((guideline) => (
              <li
                key={guideline}
                className="flex gap-2.5 text-base leading-relaxed text-foreground"
              >
                <span className="text-lake" aria-hidden>
                  —
                </span>
                {guideline}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {guide.courtesy.closing}
          </p>
        </ResortCard>
      </section>

      <section aria-labelledby="speakers-troubleshooting">
        <p className="resort-kicker mb-1">Common questions</p>
        <h2 id="speakers-troubleshooting" className="resort-section-title mb-4">
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
    </article>
  );
}

function ControlMethodCard({ method }: { method: SpeakerControlMethod }) {
  const isAirPlay = method.id === "airplay";
  const Icon = isAirPlay ? Airplay : Smartphone;

  return (
    <ResortCard variant="elevated" className="h-full">
      <div className="flex items-start gap-3">
        <span
          className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${
            isAirPlay ? "bg-slate-900 text-white" : "bg-teal/12 text-teal"
          }`}
        >
          <Icon className="size-6" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-2xl font-medium leading-tight">
            {method.title}
          </h3>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            {method.description}
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm font-bold uppercase tracking-wider text-muted-foreground">
        {isAirPlay ? "What you can do" : "Complete control of"}
      </p>
      <ul className="mt-2 grid gap-2 sm:grid-cols-2">
        {method.features.map((feature) => (
          <li
            key={feature}
            className="rounded-xl border border-teal/15 bg-teal/[0.04] px-3 py-2.5 text-sm text-foreground"
          >
            {feature}
          </li>
        ))}
      </ul>

      {method.steps && method.steps.length > 0 ? (
        <div className="mt-5">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Step-by-step
          </p>
          <ol className="space-y-3">
            {method.steps.map((step, i) => (
              <li key={step.text} className="flex gap-3">
                <span
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-white"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <p className="pt-1 text-base leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </ResortCard>
  );
}

function SpeakerZoneCard({ zone }: { zone: SpeakerZone }) {
  return (
    <ResortCard variant="elevated" className="overflow-hidden p-0">
      {zone.photoPath ? (
        <figure className="relative aspect-[16/9] w-full">
          <Image
            src={zone.photoPath}
            alt={zone.photoAlt ?? zone.title}
            fill
            className="object-cover"
            sizes="(max-width: 512px) 100vw, 512px"
          />
        </figure>
      ) : null}

      <div className="p-5">
        <div className="flex items-start gap-3">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-teal/12 text-teal">
            <Speaker className="size-6" aria-hidden />
          </span>
          <div>
            <h3 className="font-display text-2xl font-medium leading-tight">
              {zone.title}
            </h3>
            <p className="mt-1 flex items-center gap-1.5 text-base text-muted-foreground">
              <MapPin className="size-4 shrink-0" aria-hidden />
              {zone.location}
            </p>
          </div>
        </div>
      </div>
    </ResortCard>
  );
}
