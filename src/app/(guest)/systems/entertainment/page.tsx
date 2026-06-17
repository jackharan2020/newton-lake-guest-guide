import type { Metadata } from "next";
import { property, getSystemCategory } from "@/data/property";
import { GuestPageHeader } from "@/components/guest/page-header";
import { CategoryGuideView } from "@/components/guest/category-guide-view";

const category = getSystemCategory("entertainment")!;

export const metadata: Metadata = {
  title: "Entertainment",
};

export default function EntertainmentSystemsPage() {
  return (
    <>
      <GuestPageHeader
        title={category.title}
        subtitle={category.description}
        backHref="/systems"
      />
      <CategoryGuideView guide={property.entertainmentGuide} />
    </>
  );
}
