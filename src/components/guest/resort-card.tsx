import { cn } from "@/lib/utils";

type ResortCardProps = {
  children: React.ReactNode;
  className?: string;
  /** glass = frosted panel, elevated = shadow card, flat = minimal */
  variant?: "glass" | "elevated" | "flat";
  as?: "div" | "section";
  id?: string;
  "aria-labelledby"?: string;
};

export function ResortCard({
  children,
  className,
  variant = "elevated",
  as: Tag = "div",
  id,
  "aria-labelledby": ariaLabelledby,
}: ResortCardProps) {
  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        "rounded-2xl p-5",
        variant === "glass" && "glass-panel shadow-[var(--shadow-resort)]",
        variant === "elevated" && "resort-card",
        variant === "flat" &&
          "border border-border/60 bg-card/80",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
