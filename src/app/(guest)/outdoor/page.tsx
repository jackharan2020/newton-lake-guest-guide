import type { Metadata } from "next";
import { getTopicsByCategory } from "@/data/property";
import { GuestPageHeader } from "@/components/guest/page-header";
import { HubLinks } from "@/components/guest/hub-links";

export const metadata: Metadata = {
  title: "Outdoor",
};

export default function OutdoorPage() {
  const fireTopics = getTopicsByCategory("fire");
  const outdoorTopics = getTopicsByCategory("outdoor");

  return (
    <>
      <GuestPageHeader
        title="Outdoor"
        subtitle="Fire features, deck, dock, kayaks, fishing, and lake info"
      />
      <div className="space-y-2 pb-6">
        <section aria-labelledby="fire-features-heading">
          <div className="px-4 pt-5">
            <p className="resort-kicker mb-1">Warm up & unwind</p>
            <h2 id="fire-features-heading" className="resort-section-title">
              Fire Features
            </h2>
          </div>
          <HubLinks topics={fireTopics} className="pt-3" />
        </section>

        <section aria-labelledby="outdoor-amenities-heading">
          <div className="px-4 pt-3">
            <p className="resort-kicker mb-1">Outside the home</p>
            <h2 id="outdoor-amenities-heading" className="resort-section-title">
              Outdoor Amenities
            </h2>
          </div>
          <HubLinks topics={outdoorTopics} className="pt-3" />
        </section>
      </div>
    </>
  );
}
