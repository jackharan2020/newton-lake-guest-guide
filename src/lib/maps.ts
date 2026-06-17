import type { ExplorePlace } from "@/data/property";

/** Apple Maps directions URL — opens the Maps app on iPhone/iPad, or Apple Maps on the web elsewhere */
export function appleMapsDirectionsUrl(place: ExplorePlace): string {
  const destination = `${place.name}, ${place.address}`;
  return `https://maps.apple.com/?daddr=${encodeURIComponent(destination)}`;
}
