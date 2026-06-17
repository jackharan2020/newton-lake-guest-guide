import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type QuickActionCardProps = {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent?: string;
  className?: string;
};

export function QuickActionCard({
  href,
  title,
  description,
  icon: Icon,
  accent = "bg-stone-100 text-stone-700",
  className,
}: QuickActionCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col rounded-2xl border border-border/60 bg-card p-4 shadow-sm transition-all duration-300 hover:border-border hover:shadow-md active:scale-[0.98]",
        className,
      )}
    >
      <div
        className={cn(
          "mb-3 flex size-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105",
          accent,
        )}
      >
        <Icon className="size-5" strokeWidth={1.75} />
      </div>
      <div className="flex flex-1 items-end justify-between gap-2">
        <div>
          <h3 className="text-[15px] font-semibold tracking-tight">{title}</h3>
          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
        <ChevronRight className="size-4 shrink-0 text-muted-foreground/50 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
