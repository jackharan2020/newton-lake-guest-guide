import type { Metadata } from "next";
import Link from "next/link";
import { property } from "@/data/property";
import { GuestPageHeader } from "@/components/guest/page-header";
import { ResortCard } from "@/components/guest/resort-card";

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
        <ChecklistSection title="Garbage & recycling" items={checkout.garbage} />
        <ChecklistSection title="Dishwasher" items={checkout.dishwasher} />
        <ChecklistSection title="Grill" items={checkout.grill} />

        <ResortCard variant="elevated">
          <p className="resort-kicker">Reminder</p>
          <h2 className="resort-section-title mt-1">Pickup schedule</h2>
          <p className="mt-3 text-lg leading-relaxed">{garbage.pickupSchedule}</p>
          <p className="mt-2 text-base text-muted-foreground">
            Bins: {garbage.binLocation}
          </p>
          <Link
            href="/"
            className="mt-5 inline-flex min-h-12 items-center font-semibold text-lake underline underline-offset-4"
          >
            Back to home
          </Link>
        </ResortCard>
      </main>
    </>
  );
}
