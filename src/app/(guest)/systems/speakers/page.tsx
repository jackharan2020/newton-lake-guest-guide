import type { Metadata } from "next";
import { property, getSystemCategory } from "@/data/property";
import { GuestPageHeader } from "@/components/guest/page-header";
import { SpeakersGuideView } from "@/components/guest/speakers-guide-view";

const category = getSystemCategory("speakers")!;

export const metadata: Metadata = {
  title: "Speakers & Music",
};

export default function SpeakersPage() {
  return (
    <>
      <GuestPageHeader
        title={category.title}
        subtitle={category.description}
        backHref="/systems"
      />
      <SpeakersGuideView guide={property.speakersGuide} />
    </>
  );
}
