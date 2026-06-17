import type { Metadata } from "next";
import Link from "next/link";
import { Recycle } from "lucide-react";
import { property } from "@/data/property";
import type { GarbageRecycling } from "@/data/property";
import { GuestPageHeader } from "@/components/guest/page-header";
import { ResortCard } from "@/components/guest/resort-card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Checkout Guide",
};

function ChecklistSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-display text-xl font-medium text-foreground">
        {title}
      </h2>
      <ol className="space-y-3">
        {items.map((item, i) => (
          <li
            key={item}
            className="flex gap-3 rounded-2xl border border-border/50 bg-card/60 p-4 text-lg leading-relaxed"
          >
            <span
              className="flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-lake/30 font-display text-sm font-medium text-lake"
              aria-hidden
            >
              {i + 1}
            </span>
            <span className="pt-0.5">{item}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function BinIndicator({
  color,
  label,
}: {
  color: string;
  label: string;
}) {
  const isRecycling = color === "green";

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl border px-4 py-3",
        isRecycling
          ? "border-evergreen/20 bg-evergreen/[0.06]"
          : "border-slate-lake/20 bg-slate-lake/[0.05]",
      )}
    >
      <span
        className={cn(
          "size-4 shrink-0 rounded-full ring-2 ring-white/80",
          isRecycling ? "bg-evergreen" : "bg-driftwood",
        )}
        aria-hidden
      />
      <p className="text-base leading-snug text-foreground">
        The{" "}
        <strong className="font-semibold capitalize">{color} bin</strong>
        {isRecycling ? " is" : "s are"} for{" "}
        <strong className="font-semibold">{label}</strong>.
      </p>
    </div>
  );
}

function TrashRecyclingSection({ garbage }: { garbage: GarbageRecycling }) {
  return (
    <section aria-labelledby="trash-recycling-heading" className="space-y-4">
      <div className="flex items-center gap-3">
        <span
          className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-evergreen/12 text-evergreen"
          aria-hidden
        >
          <Recycle className="size-6 stroke-[2.25]" />
        </span>
        <h2
          id="trash-recycling-heading"
          className="font-display text-xl font-medium text-foreground sm:text-2xl"
        >
          Trash &amp; Recycling
        </h2>
      </div>

      <ResortCard
        variant="elevated"
        className="border-evergreen/15 bg-gradient-to-br from-evergreen/[0.05] via-card to-lake/[0.04]"
      >
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="h-auto rounded-full border-evergreen/25 bg-evergreen/12 px-3 py-1 text-sm font-semibold text-evergreen hover:bg-evergreen/12">
            {garbage.pickupBadge}
          </Badge>
        </div>

        <p className="mt-4 text-lg leading-relaxed text-foreground">
          {garbage.sundayStayIntro}
        </p>

        <ul className="mt-5 space-y-3">
          {garbage.instructions.map((item) => (
            <li key={item} className="flex gap-3 text-lg leading-relaxed">
              <span
                className="mt-2.5 size-2 shrink-0 rounded-full bg-lake"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 space-y-2.5">
          <BinIndicator
            color={garbage.recyclingBinColor}
            label={garbage.recyclingBinLabel}
          />
          <BinIndicator
            color={garbage.trashBinColor}
            label={garbage.trashBinLabel}
          />
        </div>

        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          {garbage.baggingNote}
        </p>

        <p className="mt-4 border-t border-border/60 pt-4 text-base leading-relaxed text-foreground/90">
          {garbage.closingNote}
        </p>
      </ResortCard>
    </section>
  );
}

export default function CheckoutPage() {
  const { checkout, garbage } = property;

  return (
    <>
      <GuestPageHeader
        title="Checkout Guide"
        subtitle={`Departure by ${checkout.time}`}
        backHref="/"
      />

      <main className="space-y-8 px-4 py-6">
        <ChecklistSection title="Before you leave" items={checkout.checklist} />
        <TrashRecyclingSection garbage={garbage} />
        <ChecklistSection title="Dishwasher" items={checkout.dishwasher} />
        <ChecklistSection title="Grill" items={checkout.grill} />

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center font-semibold text-lake underline underline-offset-4"
          >
            Back to home
          </Link>
        </div>
      </main>
    </>
  );
}
