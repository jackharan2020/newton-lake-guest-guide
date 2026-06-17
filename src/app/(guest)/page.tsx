import type { Metadata } from "next";
import { HomeHero } from "@/components/guest/home-hero";
import { QuickAccessGrid } from "@/components/guest/quick-grid";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <main className="space-y-8 px-4 py-6">
        <QuickAccessGrid />
      </main>
    </>
  );
}
