import type { Metadata } from "next";
import {
  guideCategories,
  guideCategoryLabels,
  getExploreByCategory,
} from "@/data/property";
import { GuestPageHeader } from "@/components/guest/page-header";
import { GuidePlaceCard } from "@/components/guest/guide-place-card";

export const metadata: Metadata = {
  title: "Guides",
};

export default function GuidesPage() {
  return (
    <>
      <GuestPageHeader
        title="Guides"
        subtitle="Restaurants, activities, golf, groceries, and convenience stores nearby"
      />

      <main className="space-y-8 px-4 py-6">
        {guideCategories.map((category) => {
          const places = getExploreByCategory(category);
          if (places.length === 0) return null;

          return (
            <section key={category}>
              <p className="resort-kicker mb-4">
                {guideCategoryLabels[category]}
              </p>
              <ul className="space-y-3">
                {places.map((place) => (
                  <li key={place.id}>
                    <GuidePlaceCard place={place} />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </main>
    </>
  );
}
