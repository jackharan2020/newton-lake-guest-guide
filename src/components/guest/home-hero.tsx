"use client";

import Image from "next/image";
import { CalendarDays, Check, Copy, Wifi } from "lucide-react";
import { property } from "@/data/property";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";

export function HomeHero() {
  const { wifi, checkIn, checkOut, displayName, welcomeMessage } = property;

  return (
    <section className="relative min-h-[22rem] w-full overflow-hidden">
      <Image
        src={property.heroImagePath}
        alt={property.heroImageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="hero-gradient absolute inset-0" aria-hidden />

      <div className="relative flex min-h-[22rem] flex-col justify-end px-5 pb-6 pt-16">
        <p className="resort-kicker text-white/90">Guest guide</p>
        <h1 className="font-display text-[2.125rem] font-medium leading-tight tracking-tight text-white">
          {displayName}
        </h1>
        <p className="mt-2 max-w-sm text-base leading-relaxed text-white/85">
          {welcomeMessage}
        </p>

        <div className="glass-panel-dark mt-5 rounded-2xl p-4 text-white">
          <div className="flex items-center gap-2 text-white/80">
            <CalendarDays className="size-4" aria-hidden />
            <span className="text-sm font-medium">
              Check-in {checkIn} · Check-out {checkOut}
            </span>
          </div>

          <div id="wifi" className="mt-4 scroll-mt-4 border-t border-white/15 pt-4">
            <div className="flex items-center gap-2">
              <Wifi className="size-5 text-gold" aria-hidden />
              <span className="text-sm font-semibold uppercase tracking-wider text-white/90">
                WiFi
              </span>
            </div>
            <div className="mt-3 grid gap-2">
              <HeroWifiRow label="Network" value={wifi.networkName} />
              <HeroWifiPasswordRow value={wifi.password} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroWifiRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-white/10 px-3 py-2.5">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
        {label}
      </p>
      <p className="truncate font-mono text-base font-semibold text-white">
        {value}
      </p>
    </div>
  );
}

function HeroWifiPasswordRow({ value }: { value: string }) {
  const { copy, copied } = useCopyToClipboard();

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-white/10 px-3 py-2.5">
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
          Password
        </p>
        <p className="truncate font-mono text-base font-semibold text-white">
          {value}
        </p>
      </div>
      <button
        type="button"
        onClick={() => copy(value, "Password copied")}
        className={cn(
          "flex min-h-10 shrink-0 items-center gap-1.5 rounded-xl px-3 text-sm font-semibold transition-colors",
          "bg-gold/90 text-gold-foreground active:bg-gold",
        )}
        aria-label="Copy password"
      >
        {copied ? (
          <>
            <Check className="size-4" />
            Copied
          </>
        ) : (
          <>
            <Copy className="size-4" />
            Copy
          </>
        )}
      </button>
    </div>
  );
}
