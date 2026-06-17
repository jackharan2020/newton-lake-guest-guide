"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X } from "lucide-react";
import { useHydrated } from "@/hooks/use-hydrated";
import { mapZones, type MapZone } from "@/lib/data/map-zones";
import { cn } from "@/lib/utils";

export function PropertyMap() {
  const [activeZone, setActiveZone] = useState<MapZone | null>(null);
  const hydrated = useHydrated();

  return (
    <div className="space-y-4">
      <div className="resort-card relative overflow-hidden bg-gradient-to-br from-stone/80 to-sand p-4">
        <svg
          viewBox="0 0 100 90"
          className="w-full touch-manipulation"
          role="img"
          aria-label="Interactive property map"
        >
          <title>Newton Lake House property map</title>
          {/* Lake */}
          <ellipse cx="42" cy="88" rx="38" ry="8" className="fill-lake/25" />
          <text x="42" y="89" textAnchor="middle" className="fill-lake text-[3px]">
            Newton Lake
          </text>

          {/* Main house outline */}
          <rect
            x="14"
            y="24"
            width="58"
            height="52"
            rx="2"
            className="fill-white/90 stroke-stone-300"
            strokeWidth="0.5"
          />

          {/* Deck */}
          <rect
            x="8"
            y="8"
            width="66"
            height="14"
            rx="1.5"
            className="fill-stone/90 stroke-driftwood/40"
            strokeWidth="0.4"
          />

          {/* Dock path */}
          <path
            d="M 42 76 L 42 84"
            className="stroke-stone-400"
            strokeWidth="0.6"
            strokeDasharray="1.5 1"
            fill="none"
          />

          {/* Interactive zones */}
          {mapZones.map((zone) => (
            <g key={zone.id}>
              <rect
                x={zone.x}
                y={zone.y}
                width={zone.width}
                height={zone.height}
                rx="1.5"
                className={cn(
                  "cursor-pointer transition-all duration-200",
                  activeZone?.id === zone.id
                    ? "fill-lake/35 stroke-lake"
                    : "fill-stone/50 stroke-driftwood/50 hover:fill-lake/20",
                )}
                strokeWidth="0.4"
                onClick={() => setActiveZone(zone)}
                role="button"
                tabIndex={0}
                aria-label={`${zone.name} — tap for details`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveZone(zone);
                  }
                }}
              />
              <text
                x={zone.x + zone.width / 2}
                y={zone.y + zone.height / 2 + 1}
                textAnchor="middle"
                className="pointer-events-none fill-stone-600 text-[2.8px] font-medium"
              >
                {zone.name.split(" ")[0]}
              </text>
            </g>
          ))}

          {/* Hotspot pins */}
          {mapZones.map((zone) => (
            <circle
              key={`pin-${zone.id}`}
              cx={zone.x + zone.width / 2}
              cy={zone.y - 2}
              r="1.2"
              className={cn(
                "pointer-events-none transition-colors",
                activeZone?.id === zone.id
                  ? "fill-lake"
                  : "fill-lake/60",
              )}
            />
          ))}
        </svg>

        <p className="mt-3 text-center text-sm font-medium text-muted-foreground">
          Tap any area to explore
        </p>
      </div>

      {hydrated ? (
        <AnimatePresence mode="wait">
          {activeZone ? (
            <motion.div
              key={activeZone.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="resort-card p-5"
            >
              <ZoneDetails zone={activeZone} onClose={() => setActiveZone(null)} />
            </motion.div>
          ) : (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-2xl border border-dashed border-border/80 bg-muted/30 px-4 py-6 text-center text-sm text-muted-foreground"
            >
              Select a zone on the map to see details and tips
            </motion.p>
          )}
        </AnimatePresence>
      ) : (
        <p className="rounded-2xl border border-dashed border-border/80 bg-muted/30 px-4 py-6 text-center text-sm text-muted-foreground">
          Select a zone on the map to see details and tips
        </p>
      )}
    </div>
  );
}

function ZoneDetails({
  zone,
  onClose,
}: {
  zone: MapZone;
  onClose: () => void;
}) {
  return (
    <>
      {zone.image && (
        <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl">
          <Image
            src={zone.image.src}
            alt={zone.image.alt}
            fill
            sizes="(max-width: 512px) 100vw, 512px"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-lake/10 text-lake">
            <MapPin className="size-4" />
          </div>
          <div>
            <h3 className="font-display text-lg font-medium tracking-tight">
              {zone.name}
            </h3>
            <p className="mt-1 text-base leading-relaxed text-muted-foreground">
              {zone.description}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full p-1 text-muted-foreground transition hover:bg-muted hover:text-foreground"
          aria-label="Close zone details"
        >
          <X className="size-4" />
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {zone.tips.map((tip) => (
          <li
            key={tip}
            className="flex items-start gap-2.5 text-base text-foreground/85"
          >
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
            {tip}
          </li>
        ))}
      </ul>
    </>
  );
}
