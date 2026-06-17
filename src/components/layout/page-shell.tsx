import { BottomNav } from "@/components/layout/bottom-nav";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-background pb-[calc(4.5rem+env(safe-area-inset-bottom))]">
      <div className="mx-auto min-h-dvh max-w-lg">{children}</div>
      <BottomNav />
    </div>
  );
}
