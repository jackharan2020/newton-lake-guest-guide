import type { Metadata } from "next";
import { property } from "@/data/property";
import { GuestPageHeader } from "@/components/guest/page-header";
import { ResortCard } from "@/components/guest/resort-card";

export const metadata: Metadata = {
  title: "House Rules",
};

export default function RulesPage() {
  return (
    <>
      <GuestPageHeader
        title="House Rules"
        subtitle="Please respect these during your stay"
        backHref="/"
      />

      <main className="space-y-3 px-4 py-6">
        {property.houseRules.map((rule, i) => (
          <ResortCard key={rule} variant="elevated" className="flex gap-4 py-4">
            <span
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-lake font-display text-lg font-medium text-lake-foreground"
              aria-hidden
            >
              {i + 1}
            </span>
            <p className="pt-1.5 text-lg leading-relaxed">{rule}</p>
          </ResortCard>
        ))}
      </main>
    </>
  );
}
