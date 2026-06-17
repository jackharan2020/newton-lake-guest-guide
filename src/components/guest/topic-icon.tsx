import {
  Wifi,
  Thermometer,
  Blinds,
  Speaker,
  Tv,
  Flame,
  Map,
  LogOut,
  AlertCircle,
  Lightbulb,
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
  return <Icon className={className} aria-hidden />;
}
