import type { Metadata } from "next";
import { getSystemCategory, property } from "@/data/property";
import { GuestPageHeader } from "@/components/guest/page-header";
import { ClimateControlView } from "@/components/guest/climate-control-view";

const category = getSystemCategory("climate")!;

export const metadata: Metadata = {
  title: "Climate Control",
};

export default function ClimateControlPage() {
  return (
    <>
      <GuestPageHeader
        title={category.title}
        subtitle={category.description}
        backHref="/systems"
      />
      <ClimateControlView guide={property.climateControl} />
    </>
  );
}
