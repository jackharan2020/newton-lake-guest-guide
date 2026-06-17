"use client";

import { Check, Copy } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";

type CopyFieldProps = {
  label: string;
  value: string;
  copyLabel?: string;
  mono?: boolean;
};

export function CopyField({
  label,
  value,
  copyLabel,
  mono = true,
}: CopyFieldProps) {
  const { copy, copied } = useCopyToClipboard();

  return (
    <div className="rounded-xl border border-border/60 bg-stone/40 p-4">
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </p>
      <div className="mt-2 flex items-center justify-between gap-3">
        <p
          className={cn(
            "text-xl font-bold tracking-tight text-foreground",
            mono && "font-mono text-lg",
          )}
        >
          {value}
        </p>
        <button
          type="button"
          onClick={() => copy(value, copyLabel ?? `${label} copied`)}
          className={cn(
            "flex min-h-11 shrink-0 items-center gap-1.5 rounded-xl px-4 text-sm font-bold transition-all duration-200",
            copied
              ? "bg-evergreen/15 text-evergreen"
              : "bg-lake text-lake-foreground active:scale-[0.98]",
          )}
          aria-label={`Copy ${label}`}
        >
          {copied ? (
            <>
              <Check className="size-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="size-4" />
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
}
