import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { InstructionTopic } from "@/data/property";
import { cn } from "@/lib/utils";

export function HubLinks({
  topics,
  className,
}: {
  topics: InstructionTopic[];
  className?: string;
}) {
  return (
    <ul className={cn("space-y-2.5 px-4 py-5", className)}>
      {topics.map((topic) => (
        <li key={topic.id}>
          <Link
            href={topic.href}
            className="resort-card-interactive flex min-h-[4.75rem] items-center gap-4 bg-card px-4 py-4"
          >
            <span
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-lake/8 font-display text-lg font-medium text-lake"
              aria-hidden
            >
              {topic.title.charAt(0)}
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-display text-lg font-medium text-foreground">
                {topic.title}
              </p>
              <p className="mt-0.5 text-base text-muted-foreground">
                {topic.summary}
              </p>
            </div>
            <ChevronRight
              className="size-5 shrink-0 text-driftwood"
              aria-hidden
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
