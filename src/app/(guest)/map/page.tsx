import type { Metadata } from "next";
import { GuestPageHeader } from "@/components/guest/page-header";
import { PropertyMap } from "@/components/map/property-map";

export const metadata: Metadata = {
  title: "Property Map",
};

export default function MapPage() {
  return (
    <>
      <GuestPageHeader
        title="Property Map"
        subtitle="Tap a zone to see where things are"
      />

      <main className="px-4 py-6">
        <PropertyMap />
      </main>
    </>
  );
}
