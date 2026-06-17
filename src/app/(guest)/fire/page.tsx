import type { Metadata } from "next";
import { getTopicsByCategory } from "@/data/property";
import { GuestPageHeader } from "@/components/guest/page-header";
import { HubLinks } from "@/components/guest/hub-links";

export const metadata: Metadata = {
  title: "Fire Features",
};

export default function FirePage() {
  const topics = getTopicsByCategory("fire");

  return (
    <>
      <GuestPageHeader
        title="Fire Features"
        subtitle="Indoor fireplace and outdoor fire tables"
      />
      <HubLinks topics={topics} />
    </>
  );
}
