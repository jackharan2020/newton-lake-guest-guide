import Image from "next/image";
import {
  Lightbulb,
  Mic,
  Sparkles,
  Sun,
  Sunset,
  ToggleLeft,
  Waves,
} from "lucide-react";
import { ResortCard } from "@/components/guest/resort-card";
import type { LightingGuide, LightingTip, LightingZone } from "@/data/property";

const tipIcons: Record<string, typeof Sun> = {
  Morning: Sun,
  Evening: Sunset,
  "Outdoor Entertaining": Waves,
};

export function LightingGuideView({ guide }: { guide: LightingGuide }) {
  return (
    <article className="space-y-8 px-4 py-6">
      <ResortCard variant="flat" className="border-amber/30 bg-amber/[0.06]">
        <p className="text-lg font-semibold leading-relaxed text-foreground">
          {guide.overview}
        </p>
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
          {guide.smartControlNote}
        </p>
      </ResortCard>

      <ResortCard variant="flat" className="border-gold/35 bg-gold/10">
        <p className="resort-kicker">Good to know</p>
        <p className="mt-1 text-lg leading-relaxed text-foreground">
          {guide.reassuringNote}
        </p>
      </ResortCard>

      <section aria-labelledby="wall-switches-heading">
        <h2 id="wall-switches-heading" className="resort-section-title mb-4">
          Wall Switches
        </h2>
        <ResortCard variant="elevated">
          <div className="flex items-start gap-3">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-amber/12 text-amber">
              <ToggleLeft className="size-6" aria-hidden />
            </span>
            <div>
              <p className="text-lg leading-relaxed text-foreground">
                {guide.wallSwitches.description}
              </p>
              <p className="mt-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Examples
              </p>
              <ul className="mt-2 space-y-2">
                {guide.wallSwitches.examples.map((example) => (
                  <li
                    key={example}
                    className="flex gap-2.5 text-base leading-relaxed text-foreground"
                  >
                    <Lightbulb
                      className="mt-0.5 size-4 shrink-0 text-amber"
                      aria-hidden
                    />
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ResortCard>
      </section>

      <section aria-labelledby="smart-lighting-heading">
        <h2 id="smart-lighting-heading" className="resort-section-title mb-4">
          Smart Lighting
        </h2>
        <ResortCard variant="elevated">
          <div className="flex items-start gap-3">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-amber/12 text-amber">
              <Sparkles className="size-6" aria-hidden />
            </span>
            <div>
              <p className="text-lg leading-relaxed text-foreground">
                {guide.smartLighting.description}
              </p>
              <p className="mt-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Capabilities
              </p>
              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {guide.smartLighting.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="rounded-xl border border-amber/20 bg-amber/[0.05] px-3 py-2.5 text-base text-foreground"
                  >
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ResortCard>
      </section>

      {guide.voiceDevice && guide.voiceCommandExamples.length > 0 ? (
        <section aria-labelledby="voice-commands-heading">
          <h2 id="voice-commands-heading" className="resort-section-title mb-4">
            Common Voice Commands
          </h2>
          <VoiceCommandsCard
            device={guide.voiceDevice}
            commands={guide.voiceCommandExamples}
          />
        </section>
      ) : null}

      <section aria-labelledby="lighting-zones-heading">
        <h2 id="lighting-zones-heading" className="resort-section-title mb-4">
          Popular Lighting Zones
        </h2>
        <ul className="space-y-5">
          {guide.zones.map((zone) => (
            <li key={zone.id}>
              <LightingZoneCard zone={zone} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="lighting-tips-heading">
        <h2 id="lighting-tips-heading" className="resort-section-title mb-4">
          Lighting Tips
        </h2>
        <ul className="grid gap-3 sm:grid-cols-3">
          {guide.tips.map((tip) => (
            <li key={tip.title}>
              <LightingTipCard tip={tip} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="lighting-troubleshooting">
        <p className="resort-kicker mb-1">Common questions</p>
        <h2 id="lighting-troubleshooting" className="resort-section-title mb-4">
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

function VoiceCommandsCard({
  device,
  commands,
}: {
  device: NonNullable<LightingGuide["voiceDevice"]>;
  commands: string[];
}) {
  return (
    <ResortCard variant="elevated" className="overflow-hidden p-0">
      <div className="p-5">
        <div className="flex items-start gap-3">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-amber/12 text-amber">
            <Mic className="size-6" aria-hidden />
          </span>
          <div>
            <p className="resort-kicker">Say it out loud</p>
            <h3 className="font-display text-2xl font-medium leading-tight">
              Google Nest Hub
            </h3>
            <p className="mt-1 text-base text-muted-foreground">
              Try these examples around the home
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,260px)] lg:items-start">
          <ul className="grid gap-2 sm:grid-cols-2">
            {commands.map((phrase) => (
              <li
                key={phrase}
                className="rounded-xl border border-amber/25 bg-amber/[0.08] px-4 py-3.5 text-center text-base font-semibold leading-snug text-foreground sm:text-lg"
              >
                &ldquo;{phrase}&rdquo;
              </li>
            ))}
          </ul>

          <figure className="mx-auto w-full max-w-[260px] lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[6/5] w-full overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
              <Image
                src={device.path}
                alt={device.alt}
                fill
                className="object-contain p-3"
                sizes="(max-width: 512px) 260px, 260px"
              />
            </div>
            <figcaption className="mt-2 text-center text-sm leading-snug text-muted-foreground lg:text-left">
              {device.caption}
            </figcaption>
          </figure>
        </div>
      </div>
    </ResortCard>
  );
}

function LightingZoneCard({ zone }: { zone: LightingZone }) {
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
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-amber/12 text-amber">
            <Lightbulb className="size-6" aria-hidden />
          </span>
          <div>
            <h3 className="font-display text-2xl font-medium leading-tight">
              {zone.title}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {zone.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="rounded-full border border-amber/25 bg-amber/[0.08] px-3 py-1 text-sm font-medium text-foreground"
                >
                  {capability}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ResortCard>
  );
}

function LightingTipCard({ tip }: { tip: LightingTip }) {
  const Icon = tipIcons[tip.title] ?? Lightbulb;

  return (
    <ResortCard variant="elevated" className="h-full py-4">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber/12 text-amber">
          <Icon className="size-5" aria-hidden />
        </span>
        <div>
          <h3 className="text-lg font-bold">{tip.title}</h3>
          <p className="mt-1.5 text-base leading-relaxed text-muted-foreground">
            {tip.description}
          </p>
        </div>
      </div>
    </ResortCard>
  );
}
