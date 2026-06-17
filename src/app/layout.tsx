import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { property } from "@/data/property";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${property.displayName} — Guest Guide`,
    template: `%s · ${property.displayName}`,
  },
  description: property.welcomeMessage,
  applicationName: `${property.displayName} Guest Guide`,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: property.displayName.split(" ")[0],
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/icons/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icons/apple-touch-icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: `${property.displayName} — Guest Guide`,
    description: property.welcomeMessage,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#2a4a6b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sourceSans.variable} ${cormorant.variable} font-sans antialiased`}
      >
        {children}
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
