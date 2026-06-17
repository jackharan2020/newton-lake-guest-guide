"use client";

import { Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import type { HostContact } from "@/data/property";

export function ContactButtons({ host }: { host: HostContact }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={`tel:${host.phone.replace(/\D/g, "")}`}
        className={cn(
          "flex min-h-14 flex-1 items-center justify-center gap-2 rounded-2xl bg-lake px-5 text-lg font-bold text-lake-foreground",
          "shadow-[var(--shadow-resort)] transition-all duration-200 active:scale-[0.98]",
        )}
      >
        <Phone className="size-5" aria-hidden />
        Call {host.name}
      </a>
      <a
        href={`mailto:${host.email}`}
        className={cn(
          "flex min-h-14 flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-lake/20 bg-card px-5 text-lg font-bold text-lake",
          "transition-all duration-200 active:scale-[0.98]",
        )}
      >
        <Mail className="size-5" aria-hidden />
        Email
      </a>
    </div>
  );
}
