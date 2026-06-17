import Link from "next/link";
import { Wifi } from "lucide-react";
import { GuestAppShell } from "@/components/guest/app-shell";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function OfflinePage() {
  return (
    <GuestAppShell>
      <div className="flex min-h-[70dvh] flex-col items-center justify-center px-6 text-center">
        <div className="flex size-16 items-center justify-center rounded-2xl bg-muted">
          <Wifi className="size-8 text-muted-foreground" />
        </div>
        <h1 className="mt-6 text-2xl font-bold tracking-tight">
          You&apos;re offline
        </h1>
        <p className="mt-2 max-w-xs text-lg text-muted-foreground">
          WiFi and saved pages may still work. Reconnect for the full guide.
        </p>
        <Link
          href="/"
          className={cn(buttonVariants(), "mt-6 min-h-12 rounded-xl px-6 text-lg")}
        >
          Return Home
        </Link>
      </div>
    </GuestAppShell>
  );
}
