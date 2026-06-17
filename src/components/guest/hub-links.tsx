import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { InstructionTopic } from "@/data/property";
import { TopicIcon } from "@/components/guest/topic-icon";
import { accentClassNames } from "@/lib/system-accent";
import { cn } from "@/lib/utils";

export function HubLinks({
  topics,
  className,
}: {
  topics: InstructionTopic[];
  className?: string;
}) {
  return (
    <ul className={cn("space-y-3 px-4 py-5", className)}>
      {topics.map((topic) => {
        const iconBg = accentClassNames(topic.accent, "icon");
        const border = accentClassNames(topic.accent, "border");
        const bg = accentClassNames(topic.accent, "bg");

        return (
          <li key={topic.id}>
            <Link
              href={topic.href}
              className={cn(
                "group resort-card-interactive flex min-h-[5rem] items-center gap-4 border-2 bg-card px-4 py-4",
                border,
                bg,
              )}
            >
              <span
                className={cn(
                  "flex size-12 shrink-0 items-center justify-center rounded-2xl shadow-sm",
                  "transition-transform duration-200 ease-out",
                  "group-hover:scale-[1.06] group-active:scale-[0.94]",
                  iconBg,
                )}
                aria-hidden
              >
                <TopicIcon name={topic.icon} className="size-6" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-lg font-medium text-foreground">
                  {topic.title}
                </p>
                <p className="mt-0.5 text-base leading-snug text-muted-foreground">
                  {topic.summary}
                </p>
              </div>
              <ChevronRight
                className="size-5 shrink-0 text-driftwood transition-transform duration-200 group-hover:translate-x-0.5 group-active:translate-x-0"
                aria-hidden
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
