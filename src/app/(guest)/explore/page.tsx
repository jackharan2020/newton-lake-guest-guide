import type { Metadata } from "next";
import { exploreCategories, getExploreByCategory } from "@/data/property";
import { GuestPageHeader } from "@/components/guest/page-header";
import { GuidePlaceCard } from "@/components/guest/guide-place-card";

export const metadata: Metadata = {
  title: "Explore Area",
};

export default function ExplorePage() {
  return (
    <>
      <GuestPageHeader
        title="Explore Area"
        subtitle="Restaurants, groceries, and day trips"
        backHref="/"
      />

      <main className="space-y-8 px-4 py-6">
        {exploreCategories.map((category) => {
          const places = getExploreByCategory(category);
          if (places.length === 0) return null;

          return (
            <section key={category}>
              <p className="resort-kicker mb-4">{category}</p>
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
