import { ArrowRight, Flame, Snowflake, Thermometer } from "lucide-react";
import { ResortCard } from "@/components/guest/resort-card";
import type { ClimateControlGuide, ThermostatZone } from "@/data/property";

export function ClimateControlView({ guide }: { guide: ClimateControlGuide }) {
  return (
    <article className="space-y-8 px-4 py-6">
      <p className="text-lg leading-relaxed text-muted-foreground">{guide.intro}</p>

      <ResortCard variant="flat" className="border-gold/35 bg-gold/10">
        <p className="resort-kicker">Important</p>
        <h2 className="resort-section-title mt-1">{guide.importantRule}</h2>
        <ul className="mt-4 space-y-2.5 text-base leading-relaxed">
          {guide.importantRuleDetails.map((tip) => (
            <li key={tip} className="flex gap-2.5">
              <span className="text-gold" aria-hidden>
                —
              </span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </ResortCard>

      <section aria-labelledby="thermostats-heading">
        <p className="resort-kicker mb-1">Find the right one</p>
        <h2 id="thermostats-heading" className="resort-section-title mb-4">
          Your four thermostats
        </h2>
        <ul className="space-y-4">
          {guide.thermostats.map((zone) => (
            <li key={zone.id}>
              <ThermostatCard zone={zone} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="nest-heading">
        <p className="resort-kicker mb-1">First time using Nest?</p>
        <h2 id="nest-heading" className="resort-section-title">
          How to adjust a Nest thermostat
        </h2>
        <ol className="mt-5 space-y-3">
          {guide.nestSteps.map((step, i) => (
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
        <p className="mt-4 text-base text-muted-foreground">
          The basement thermostat uses a dial or buttons instead — turn or press
          to the temperature you want.
        </p>
      </section>

      <section aria-labelledby="season-heading">
        <p className="resort-kicker mb-1">Seasonal tips</p>
        <h2 id="season-heading" className="resort-section-title mb-4">
          Summer vs. winter
        </h2>
        <div className="grid gap-4">
          {guide.seasonGuides.map((season) => (
            <ResortCard key={season.season} variant="elevated">
              <h3 className="font-display text-xl font-medium">{season.season}</h3>
              <ul className="mt-3 space-y-2.5 text-base leading-relaxed">
                {season.tips.map((tip) => (
                  <li key={tip} className="flex gap-2.5">
                    <span className="text-lake" aria-hidden>
                      •
                    </span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </ResortCard>
          ))}
        </div>
      </section>

      <section aria-labelledby="climate-troubleshooting-heading">
        <p className="resort-kicker mb-1">Common questions</p>
        <h2 id="climate-troubleshooting-heading" className="resort-section-title mb-4">
          Troubleshooting
        </h2>
        <ul className="space-y-3">
          {guide.troubleshooting.map((item) => (
            <li key={item.question}>
              <ResortCard variant="elevated" className="py-4">
                <h3 className="text-lg font-bold text-foreground">
                  {item.question}
                </h3>
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

function ThermostatCard({ zone }: { zone: ThermostatZone }) {
  const isCooling = zone.mode === "cooling";
  const ModeIcon = isCooling ? Snowflake : Flame;

  return (
    <ResortCard variant="elevated" className="p-5">
        <div className="flex flex-wrap items-start gap-3">
          <span
            className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${
              isCooling ? "bg-lake/10 text-lake" : "bg-gold/15 text-gold-foreground"
            }`}
          >
            <ModeIcon className="size-6" aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-xl font-medium">{zone.shortName}</h3>
            <p
              className={`mt-1 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold uppercase tracking-wide ${
                isCooling
                  ? "bg-lake/10 text-lake"
                  : "bg-gold/20 text-gold-foreground"
              }`}
            >
              {isCooling ? "Cooling" : "Heating"}
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-3 rounded-xl bg-stone/50 p-4">
          <FlowRow
            icon={<Thermometer className="size-5" aria-hidden />}
            label="Location"
            value={zone.location}
            detail={zone.locationDetail}
          />
          <div className="flex items-center justify-center py-1 text-driftwood" aria-hidden>
            <ArrowRight className="size-5 rotate-90" />
          </div>
          <FlowRow
            icon={<ModeIcon className="size-5" aria-hidden />}
            label="Controls"
            value={zone.controls}
            detail={zone.controlsDetail.join(" ")}
          />
        </div>

        {zone.type === "standard" ? (
          <p className="mt-3 text-sm font-semibold text-muted-foreground">
            Standard thermostat — not a Nest. Use the dial or buttons on the unit.
          </p>
        ) : null}
    </ResortCard>
  );
}

function FlowRow({
  icon,
  label,
  value,
  detail,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  detail?: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 shrink-0 text-lake">{icon}</span>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="mt-0.5 text-lg font-bold text-foreground">{value}</p>
        {detail ? (
          <p className="mt-1 text-base leading-relaxed text-muted-foreground">
            {detail}
          </p>
        ) : null}
      </div>
    </div>
  );
}
