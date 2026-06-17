import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { TopicIcon } from "@/components/guest/topic-icon";
import { accentClassNames } from "@/lib/system-accent";
import type { SystemCategory } from "@/data/property";
import { cn } from "@/lib/utils";

type SystemCategoryCardProps = {
  category: SystemCategory;
  /** compact = home quick grid; full = systems hub */
  variant?: "full" | "compact";
};

export function SystemCategoryCard({
  category,
  variant = "full",
}: SystemCategoryCardProps) {
  const styles = accentClassNames(category.accent, "icon");
  const border = accentClassNames(category.accent, "border");
  const bg = accentClassNames(category.accent, "bg");

  if (variant === "compact") {
    return (
      <Link
        href={category.href}
        className={cn(
          "resort-card-interactive flex min-h-[6.5rem] flex-col justify-between gap-2 border-2 p-3.5",
          border,
          bg,
        )}
      >
        <span
          className={cn(
            "flex size-11 items-center justify-center rounded-2xl",
            styles,
          )}
        >
          <TopicIcon name={category.icon} className="size-5 stroke-[2.25]" />
        </span>
        <div>
          <p className="text-sm font-bold leading-tight text-foreground">
            {category.title}
          </p>
          <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
            {category.description.split(".")[0]}.
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={category.href}
      className={cn(
        "group resort-card-interactive block border-2 p-5",
        border,
        bg,
      )}
    >
      <div className="flex items-start gap-4">
        <span
          className={cn(
            "flex size-14 shrink-0 items-center justify-center rounded-2xl",
            styles,
          )}
        >
          <TopicIcon name={category.icon} className="size-7 stroke-[2.25]" />
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-2xl font-medium leading-tight text-foreground">
            {category.title}
          </h2>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            {category.description}
          </p>
        </div>
        <ChevronRight
          className="mt-1 size-6 shrink-0 text-driftwood transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden
        />
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {category.includes.map((item) => (
          <li
            key={item}
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-semibold",
              border,
              "bg-card/80 text-foreground/80",
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </Link>
  );
}
