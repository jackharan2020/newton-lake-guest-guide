"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Compass,
  Home,
  Map,
  MessageCircle,
  Wifi,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/guide", label: "Guide", icon: BookOpen },
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/map", label: "Map", icon: Map },
  { href: "/contact", label: "Contact", icon: MessageCircle },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-background/80 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-lg items-center justify-around px-2 py-2">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex min-w-[3.5rem] flex-col items-center gap-0.5 rounded-xl px-3 py-1.5 text-[10px] font-medium transition-all duration-200",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground/80",
              )}
            >
              <span
                className={cn(
                  "flex size-8 items-center justify-center rounded-full transition-all duration-200",
                  isActive && "bg-foreground text-background shadow-sm",
                )}
              >
                <Icon className="size-[18px]" strokeWidth={isActive ? 2.25 : 2} />
              </span>
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function WifiQuickLink() {
  return (
    <Link
      href="/wifi"
      className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md transition hover:bg-white/30"
    >
      <Wifi className="size-3.5" />
      WiFi
    </Link>
  );
}
