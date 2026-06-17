"use client";

import { CopyField } from "@/components/wifi/copy-field";
import { ResortCard } from "@/components/guest/resort-card";
import { FadeIn } from "@/components/shared/fade-in";
import type { WifiConfig } from "@/data/property";

export function WifiCard({ wifi }: { wifi: WifiConfig }) {
  return (
    <FadeIn>
      <ResortCard
        id="wifi"
        as="section"
        variant="elevated"
        aria-labelledby="wifi-heading"
        className="scroll-mt-4 border-lake/15"
      >
        <p className="resort-kicker">Connect in seconds</p>
        <h2 id="wifi-heading" className="resort-section-title mt-1">
          WiFi
        </h2>
        <p className="mt-2 text-base leading-relaxed text-muted-foreground">
          Select the network below, then copy the password into your Wi-Fi settings.
        </p>
        <div className="mt-4 space-y-3">
          <WifiDetailRow label="Network name" value={wifi.networkName} />
          <CopyField label="Password" value={wifi.password} />
        </div>
        {wifi.connectionSteps.length > 0 ? (
          <ol className="mt-5 space-y-3 text-base leading-relaxed text-foreground">
            {wifi.connectionSteps.map((step, i) => (
              <li key={step} className="flex gap-3">
                <span
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-lake text-sm font-bold text-lake-foreground"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        ) : null}
      </ResortCard>
    </FadeIn>
  );
}

function WifiDetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-lake/15 bg-lake/[0.04] px-4 py-3">
      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 font-mono text-xl font-semibold text-foreground">
        {value}
      </p>
    </div>
  );
}
