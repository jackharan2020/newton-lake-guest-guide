import {
  Airplay,
  AlertCircle,
  Anchor,
  Armchair,
  Blinds,
  Fish,
  Flame,
  KeyRound,
  Lightbulb,
  LogOut,
  Map,
  MapPin,
  Mic,
  Sailboat,
  Speaker,
  Sun,
  Thermometer,
  Trees,
  Tv,
  UtensilsCrossed,
  Waves,
  Wifi,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  wifi: Wifi,
  thermometer: Thermometer,
  blinds: Blinds,
  lightbulb: Lightbulb,
  speaker: Speaker,
  tv: Tv,
  flame: Flame,
  firepit: Flame,
  key: KeyRound,
  anchor: Anchor,
  armchair: Armchair,
  trees: Trees,
  sailboat: Sailboat,
  sun: Sun,
  waves: Waves,
  fish: Fish,
  utensils: UtensilsCrossed,
  "map-pin": MapPin,
  airplay: Airplay,
  mic: Mic,
  map: Map,
  checkout: LogOut,
  emergency: AlertCircle,
};

export function TopicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Map;
  return <Icon className={className} aria-hidden strokeWidth={2.25} />;
}
