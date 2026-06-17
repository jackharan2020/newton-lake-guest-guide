import Image from "next/image";
import { Blinds, MapPin, Mic, Radio } from "lucide-react";
import { ResortCard } from "@/components/guest/resort-card";
import type { ShadesArea, ShadesGuide } from "@/data/property";

export function ShadesGuideView({ guide }: { guide: ShadesGuide }) {
  return (
    <article className="space-y-8 px-4 py-6">
      <ResortCard variant="flat" className="border-evergreen/30 bg-evergreen/[0.06]">
        <p className="text-lg font-semibold leading-relaxed text-foreground">
          {guide.overview}
        </p>
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
          {guide.automaticNote}
        </p>
      </ResortCard>

      <p className="text-base leading-relaxed text-muted-foreground">
        {guide.overrideNote}
      </p>

      {guide.voiceDevice && guide.voiceCommandExamples?.length ? (
        <VoiceAssistantCard
          device={guide.voiceDevice}
          commands={guide.voiceCommandExamples}
        />
      ) : null}

      <section aria-labelledby="shades-areas-heading">
        <h2 id="shades-areas-heading" className="sr-only">
          Shade and blind controls by room
        </h2>
        <ul className="space-y-5">
          {guide.areas.map((area) => (
            <li key={area.id}>
              <ShadeAreaCard
                area={area}
                remoteDevice={
                  area.controlType === "remote" ? guide.remoteDevice : undefined
                }
                voiceDevice={
                  area.controlType === "voice" ? guide.voiceDevice : undefined
                }
              />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="shades-troubleshooting">
        <p className="resort-kicker mb-1">Common questions</p>
        <h2 id="shades-troubleshooting" className="resort-section-title mb-4">
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

function VoiceAssistantCard({
  device,
  commands,
}: {
  device: NonNullable<ShadesGuide["voiceDevice"]>;
  commands: string[];
}) {
  return (
    <ResortCard variant="elevated" className="overflow-hidden p-0">
      <div className="p-5">
        <div className="flex items-start gap-3">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-evergreen/12 text-evergreen">
            <Mic className="size-6" aria-hidden />
          </span>
          <div>
            <p className="resort-kicker">Voice control</p>
            <h2 className="font-display text-2xl font-medium leading-tight">
              Google Nest Hub
            </h2>
            <p className="mt-1 text-base text-muted-foreground">
              Kitchen blind and couch blind
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,280px)] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Example commands
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {commands.map((phrase) => (
                <li
                  key={phrase}
                  className="rounded-xl border border-evergreen/20 bg-evergreen/[0.06] px-4 py-3.5 text-center text-base font-semibold leading-snug text-foreground sm:text-lg"
                >
                  &ldquo;{phrase}&rdquo;
                </li>
              ))}
            </ul>
          </div>

          <figure className="mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[6/5] w-full overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
              <Image
                src={device.path}
                alt={device.alt}
                fill
                className="object-contain p-3"
                sizes="(max-width: 512px) 280px, 280px"
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

function ShadeAreaCard({
  area,
  remoteDevice,
  voiceDevice,
}: {
  area: ShadesArea;
  remoteDevice?: ShadesGuide["remoteDevice"];
  voiceDevice?: ShadesGuide["voiceDevice"];
}) {
  const isVoice = area.controlType === "voice";

  return (
    <ResortCard variant="elevated" className="overflow-hidden p-0">
      {area.photoPath ? (
        <figure className="relative aspect-[16/9] w-full">
          <Image
            src={area.photoPath}
            alt={area.photoAlt ?? area.title}
            fill
            className="object-cover"
            sizes="(max-width: 512px) 100vw, 512px"
          />
        </figure>
      ) : null}

      <div className="p-5">
        <div className="flex items-start gap-3">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-evergreen/12 text-evergreen">
            {isVoice ? (
              <Mic className="size-6" aria-hidden />
            ) : (
              <Blinds className="size-6" aria-hidden />
            )}
          </span>
          <div>
            <h3 className="font-display text-2xl font-medium leading-tight">
              {area.title}
            </h3>
            <p className="mt-1 flex items-center gap-1.5 text-base text-muted-foreground">
              <MapPin className="size-4 shrink-0" aria-hidden />
              {area.location}
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-xl bg-stone/50 p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            How to control
          </p>
          <p className="mt-1 flex items-center gap-2 text-lg font-semibold text-foreground">
            {isVoice ? (
              <Mic className="size-5 shrink-0 text-evergreen" aria-hidden />
            ) : (
              <Radio className="size-5 shrink-0 text-evergreen" aria-hidden />
            )}
            {area.controlMethod}
          </p>
          {area.defaultOperation ? (
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              {area.defaultOperation}
            </p>
          ) : null}
        </div>

        {area.remoteButtons && area.remoteButtons.length > 0 ? (
          <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,160px)] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Remote buttons
              </p>
              <ul className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {area.remoteButtons.map((btn) => (
                  <li
                    key={btn.label}
                    className="rounded-xl border border-evergreen/20 bg-card p-3 text-center"
                  >
                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-evergreen font-display text-lg font-medium text-white">
                      {btn.label}
                    </span>
                    <p className="mt-2 text-sm leading-snug text-foreground">
                      {btn.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {remoteDevice ? (
              <figure className="mx-auto w-full max-w-[140px] sm:max-w-[160px] lg:mx-0 lg:w-full lg:max-w-[170px]">
                <div className="relative aspect-[3/10] w-full overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
                  <Image
                    src={remoteDevice.path}
                    alt={remoteDevice.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 512px) 140px, 170px"
                  />
                </div>
                <figcaption className="mt-2 text-center text-sm leading-snug text-muted-foreground lg:text-left">
                  {remoteDevice.caption}
                </figcaption>
              </figure>
            ) : null}
          </div>
        ) : null}

        {area.voiceCommands && area.voiceCommands.length > 0 ? (
          <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,240px)] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                What to say
              </p>
              <ul className="space-y-2">
                {area.voiceCommands.map((phrase) => (
                  <li
                    key={phrase}
                    className="rounded-xl border border-evergreen/20 bg-evergreen/[0.06] px-4 py-3 text-center text-lg font-semibold text-foreground"
                  >
                    &ldquo;{phrase}&rdquo;
                  </li>
                ))}
              </ul>
            </div>

            {voiceDevice ? (
              <figure className="mx-auto w-full max-w-[240px] lg:mx-0 lg:w-full lg:max-w-[260px]">
                <div className="relative aspect-[6/5] w-full overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
                  <Image
                    src={voiceDevice.path}
                    alt={voiceDevice.alt}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 512px) 240px, 260px"
                  />
                </div>
                <figcaption className="mt-2 text-center text-sm leading-snug text-muted-foreground lg:text-left">
                  {voiceDevice.caption}
                </figcaption>
              </figure>
            ) : null}
          </div>
        ) : null}

        <div className="mt-5">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Steps
          </p>
          <ol className="space-y-3">
            {area.steps.map((step, i) => (
              <li key={step.text} className="flex gap-3">
                <span
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-evergreen text-sm font-bold text-white"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <p className="pt-1 text-lg leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </ResortCard>
  );
}
