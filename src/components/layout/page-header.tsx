import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  backHref?: string;
  className?: string;
};

export function PageHeader({
  title,
  subtitle,
  backHref = "/",
  className,
}: PageHeaderProps) {
  return (
    <header className={cn("px-5 pt-4 pb-2", className)}>
      {backHref && (
        <Link
          href={backHref}
          className="mb-3 inline-flex items-center gap-0.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-4" />
          Back
        </Link>
      )}
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      )}
    </header>
  );
}
