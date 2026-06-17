import type { Metadata } from "next";
import { getTopicsByCategory } from "@/data/property";
import { GuestPageHeader } from "@/components/guest/page-header";
import { HubLinks } from "@/components/guest/hub-links";

export const metadata: Metadata = {
  title: "Entertainment",
};

export default function EntertainmentPage() {
  const topics = getTopicsByCategory("entertainment");

  return (
    <>
      <GuestPageHeader
        title="Entertainment"
        subtitle="TVs, speakers, AirPlay, and Google Home"
      />
      <HubLinks topics={topics} />
    </>
  );
}
