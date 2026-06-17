import type { SystemAccent } from "@/data/property";
import { cn } from "@/lib/utils";

export const accentStyles: Record<
  SystemAccent,
  { icon: string; border: string; bg: string; kicker: string }
> = {
  lake: {
    icon: "bg-lake/12 text-lake",
    border: "border-lake/25",
    bg: "bg-lake/[0.04]",
    kicker: "text-lake",
  },
  gold: {
    icon: "bg-gold/20 text-gold-foreground",
    border: "border-gold/30",
    bg: "bg-gold/[0.06]",
    kicker: "text-gold",
  },
  evergreen: {
    icon: "bg-evergreen/12 text-evergreen",
    border: "border-evergreen/25",
    bg: "bg-evergreen/[0.05]",
    kicker: "text-evergreen",
  },
  amber: {
    icon: "bg-amber-100 text-amber-900",
    border: "border-amber-200/80",
    bg: "bg-amber-50/80",
    kicker: "text-amber-800",
  },
  slate: {
    icon: "bg-slate-lake/12 text-slate-lake",
    border: "border-slate-lake/20",
    bg: "bg-slate-lake/[0.04]",
    kicker: "text-slate-lake",
  },
  teal: {
    icon: "bg-teal-100 text-teal-900",
    border: "border-teal-200/70",
    bg: "bg-teal-50/60",
    kicker: "text-teal-800",
  },
  fire: {
    icon: "bg-orange-100 text-orange-900",
    border: "border-orange-200/70",
    bg: "bg-orange-50/50",
    kicker: "text-orange-800",
  },
  rose: {
    icon: "bg-destructive/10 text-destructive",
    border: "border-destructive/20",
    bg: "bg-destructive/[0.04]",
    kicker: "text-destructive",
  },
};

export function getAccentClasses(accent: SystemAccent) {
  return accentStyles[accent];
}

export function accentClassNames(
  accent: SystemAccent,
  part: keyof (typeof accentStyles)[SystemAccent],
) {
  return accentStyles[accent][part];
}
