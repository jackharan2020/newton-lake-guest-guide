import Image from "next/image";
import { MapPin } from "lucide-react";
import type { ExplorePlace } from "@/data/property";
import { appleMapsDirectionsUrl } from "@/lib/maps";
import { ResortCard } from "@/components/guest/resort-card";

export function GuidePlaceCard({ place }: { place: ExplorePlace }) {
  return (
    <ResortCard variant="elevated" className="overflow-hidden p-0">
      {place.photoPath ? (
        <figure className="relative aspect-[16/10] w-full">
          <Image
            src={place.photoPath}
            alt={place.photoAlt ?? place.name}
            fill
            className="object-cover"
            sizes="(max-width: 512px) 100vw, 512px"
          />
        </figure>
      ) : null}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <p className="font-display text-lg font-medium">{place.name}</p>
          <span className="shrink-0 rounded-full bg-stone px-2.5 py-0.5 text-xs font-bold text-muted-foreground">
            {place.distance}
          </span>
        </div>
        <p className="mt-2 text-base leading-relaxed text-muted-foreground">
          {place.description}
        </p>
        <p className="mt-3 text-base">
          <span className="font-semibold text-gold">Tip · </span>
          {place.highlight}
        </p>
        <a
          href={appleMapsDirectionsUrl(place)}
          className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border-2 border-lake/20 bg-lake/5 px-4 text-sm font-bold text-lake transition-all duration-200 active:scale-[0.98]"
        >
          <MapPin className="size-4 shrink-0" aria-hidden />
          Directions in Apple Maps
        </a>
      </div>
    </ResortCard>
  );
}
