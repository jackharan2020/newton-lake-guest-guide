import { GuestBottomNav } from "@/components/guest/bottom-nav";

export function GuestAppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="guest-ui min-h-dvh bg-background pb-[calc(4.75rem+env(safe-area-inset-bottom))] text-base">
      <div className="mx-auto min-h-dvh max-w-lg">{children}</div>
      <GuestBottomNav />
    </div>
  );
}
