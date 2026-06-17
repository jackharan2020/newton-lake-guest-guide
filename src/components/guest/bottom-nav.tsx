"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Settings2,
  Trees,
  BookOpen,
  LogOut,
} from "lucide-react";
import { useHydrated } from "@/hooks/use-hydrated";
import { cn } from "@/lib/utils";

const items = [
  { href: "/", label: "Home", icon: Home },
  { href: "/systems", label: "Systems", icon: Settings2 },
  { href: "/outdoor", label: "Outdoor", icon: Trees },
  { href: "/guides", label: "Guides", icon: BookOpen },
  { href: "/checkout", label: "Check-out", icon: LogOut },
];

export function GuestBottomNav() {
  const pathname = usePathname();
  const hydrated = useHydrated();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 glass-panel pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_24px_-4px_oklch(0.28_0.04_250_/_0.08)]"
      aria-label="Main navigation"
    >
      <div className="mx-auto grid max-w-lg grid-cols-5">
        {items.map(({ href, label, icon: Icon }) => {
          const isActive =
            hydrated &&
            (href === "/"
              ? pathname === "/"
              : pathname === href ||
                pathname.startsWith(`${href}/`) ||
                (href === "/outdoor" && pathname.startsWith("/fire")));

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "relative flex min-h-[3.5rem] flex-col items-center justify-center gap-0.5 px-1 py-2 text-[10px] font-bold uppercase tracking-wide transition-colors duration-200",
                isActive
                  ? "text-lake"
                  : "text-muted-foreground active:text-lake",
              )}
            >
              {isActive ? (
                <span
                  className="absolute inset-x-3 top-0 h-0.5 rounded-full bg-gold"
                  aria-hidden
                />
              ) : null}
              <Icon
                className={cn("size-6", isActive && "stroke-[2.25]")}
                aria-hidden
              />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
