import type { Metadata } from "next";
import { property, getSystemCategory } from "@/data/property";
import { GuestPageHeader } from "@/components/guest/page-header";
import { LightingGuideView } from "@/components/guest/lighting-guide-view";

const category = getSystemCategory("lighting")!;

export const metadata: Metadata = {
  title: "Lighting",
};

export default function LightingPage() {
  return (
    <>
      <GuestPageHeader
        title={category.title}
        subtitle={category.description}
        backHref="/systems"
      />
      <LightingGuideView guide={property.lightingGuide} />
    </>
  );
}
