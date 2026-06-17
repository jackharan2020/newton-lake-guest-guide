"use client";

import Link from "next/link";
import { homeQuickAccess } from "@/data/property";
import { TopicIcon } from "@/components/guest/topic-icon";
import { accentClassNames } from "@/lib/system-accent";
import { StaggerContainer, StaggerItem } from "@/components/shared/fade-in";
import { cn } from "@/lib/utils";

export function QuickAccessGrid() {
  return (
    <section aria-labelledby="quick-access-heading">
      <h2 id="quick-access-heading" className="resort-section-title mb-4">
        Quick access
      </h2>
      <StaggerContainer className="grid grid-cols-2 gap-3">
        {homeQuickAccess.map((item) => {
          const iconBg = accentClassNames(item.accent, "icon");
          const border = accentClassNames(item.accent, "border");
          const bg = accentClassNames(item.accent, "bg");

          return (
            <StaggerItem key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "resort-card-interactive flex min-h-[7rem] flex-col gap-2.5 border-2 p-4",
                  border,
                  bg,
                )}
              >
                <span
                  className={cn(
                    "flex size-12 items-center justify-center rounded-2xl",
                    iconBg,
                  )}
                >
                  <TopicIcon
                    name={item.icon}
                    className="size-6 stroke-[2.25]"
                  />
                </span>
                <div>
                  <p className="text-sm font-bold leading-tight text-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
