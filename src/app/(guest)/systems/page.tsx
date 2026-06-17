import type { Metadata } from "next";
import { property } from "@/data/property";
import { GuestPageHeader } from "@/components/guest/page-header";
import { SystemCategoryCard } from "@/components/guest/system-category-card";

export const metadata: Metadata = {
  title: "House Systems",
};

export default function SystemsPage() {
  return (
    <>
      <GuestPageHeader
        title="House Systems"
        subtitle="Tap the category you want to control"
      />

      <div className="space-y-4 px-4 py-6">
        {property.systemCategories.map((category) => (
          <SystemCategoryCard key={category.id} category={category} />
        ))}
      </div>
    </>
  );
}
