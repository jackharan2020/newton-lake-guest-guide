"use client";

import { MessageSquare, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import type { HostContact } from "@/data/property";

function phoneDigits(phone: string) {
  return phone.replace(/\D/g, "");
}

export function ContactButtons({ host }: { host: HostContact }) {
  const digits = phoneDigits(host.phone);

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={`tel:${digits}`}
        className={cn(
          "flex min-h-[3.75rem] flex-1 items-center justify-center gap-2.5 rounded-2xl bg-lake px-5 text-lg font-bold text-lake-foreground",
          "shadow-[var(--shadow-resort)] transition-all duration-200 active:scale-[0.98]",
        )}
      >
        <Phone className="size-5 shrink-0" aria-hidden />
        Call {host.name}
      </a>
      <a
        href={`sms:${digits}`}
        className={cn(
          "flex min-h-[3.75rem] flex-1 items-center justify-center gap-2.5 rounded-2xl border-2 border-evergreen/25 bg-evergreen/[0.08] px-5 text-lg font-bold text-evergreen",
          "transition-all duration-200 active:scale-[0.98]",
        )}
      >
        <MessageSquare className="size-5 shrink-0" aria-hidden />
        Text {host.name}
      </a>
    </div>
  );
}
