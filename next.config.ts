import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  fallbacks: {
    document: "/offline",
  },
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/wifi", destination: "/#wifi", permanent: false },
      { source: "/guide", destination: "/systems", permanent: false },
      { source: "/contact", destination: "/emergency", permanent: false },
      { source: "/systems/thermostat", destination: "/systems/climate", permanent: false },
      { source: "/systems/hvac", destination: "/systems/climate", permanent: false },
      { source: "/entertainment", destination: "/systems", permanent: false },
      { source: "/entertainment/tv", destination: "/systems/entertainment", permanent: false },
      { source: "/entertainment/speakers", destination: "/systems/speakers", permanent: false },
      { source: "/entertainment/airplay", destination: "/systems/speakers", permanent: false },
      { source: "/entertainment/google-home", destination: "/systems/speakers", permanent: false },
      { source: "/fire", destination: "/outdoor", permanent: false },
      { source: "/fire/fire-pit", destination: "/fire/charcoal-grill", permanent: false },
      { source: "/explore", destination: "/guides", permanent: false },
    ];
  },
};

export default withPWA(nextConfig);
