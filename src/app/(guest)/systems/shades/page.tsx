import type { Metadata } from "next";
import { property, getSystemCategory } from "@/data/property";
import { GuestPageHeader } from "@/components/guest/page-header";
import { ShadesGuideView } from "@/components/guest/shades-guide-view";

const category = getSystemCategory("shades")!;

export const metadata: Metadata = {
  title: "Window Shades & Blinds",
};

export default function ShadesPage() {
  return (
    <>
      <GuestPageHeader
        title={category.title}
        subtitle="Most shades adjust on their own — override only if you want to"
        backHref="/systems"
      />
      <ShadesGuideView guide={property.shadesGuide} />
    </>
  );
}
