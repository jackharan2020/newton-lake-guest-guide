import type { Metadata } from "next";
import Link from "next/link";
import { property } from "@/data/property";
import { GuestPageHeader } from "@/components/guest/page-header";
import { ContactButtons } from "@/components/guest/contact-buttons";
import { ResortCard } from "@/components/guest/resort-card";

export const metadata: Metadata = {
  title: "Emergency",
};

export default function EmergencyPage() {
  const { host, emergency, smartLock, address } = property;

  return (
    <>
      <GuestPageHeader
        title="Emergency & Contact"
        subtitle="Call 911 for life-threatening emergencies"
      />

      <main className="space-y-5 px-4 py-6">
        <ResortCard
          variant="flat"
          className="border-destructive/25 bg-destructive/5"
        >
          <p className="resort-kicker text-destructive">Life-threatening</p>
          <h2 className="font-display text-xl font-medium">Emergency</h2>
          <a
            href={`tel:${emergency.emergencyPhone}`}
            className="mt-3 block font-display text-4xl font-medium text-destructive"
          >
            {emergency.emergencyPhone}
          </a>
        </ResortCard>

        <ResortCard variant="elevated">
          <h2 className="font-display text-xl font-medium">Your hosts</h2>
          <p className="mt-1 text-lg text-muted-foreground">
            {host.responseTime}
          </p>
          <div className="mt-4">
            <ContactButtons host={host} />
          </div>
        </ResortCard>

        <ResortCard variant="elevated">
          <h2 className="font-display text-xl font-medium">Hospital</h2>
          <p className="mt-2 text-lg font-semibold">{emergency.hospitalName}</p>
          <a
            href={`tel:${emergency.hospitalPhone.replace(/\D/g, "")}`}
            className="mt-1 block text-lg font-bold text-lake underline underline-offset-4"
          >
            {emergency.hospitalPhone}
          </a>
          <p className="mt-2 text-base text-muted-foreground">
            {emergency.hospitalNote}
          </p>
        </ResortCard>

        {emergency.additionalContacts.length > 0 ? (
          <ResortCard variant="elevated">
            <h2 className="font-display text-xl font-medium">Other numbers</h2>
            <ul className="mt-3 space-y-2">
              {emergency.additionalContacts.map((c) => (
                <li key={c.label}>
                  <a
                    href={`tel:${c.phone.replace(/\D/g, "")}`}
                    className="text-lg font-semibold text-lake underline underline-offset-4"
                  >
                    {c.label}: {c.phone}
                  </a>
                </li>
              ))}
            </ul>
          </ResortCard>
        ) : null}

        <ResortCard variant="elevated">
          <h2 className="font-display text-xl font-medium">Property address</h2>
          <p className="mt-2 text-lg">{address.formatted}</p>
        </ResortCard>

        <ResortCard variant="elevated">
          <h2 className="font-display text-xl font-medium">Safety notes</h2>
          <ul className="mt-3 space-y-2.5 text-lg leading-relaxed">
            {emergency.notes.map((note) => (
              <li key={note} className="flex gap-2.5">
                <span className="text-gold" aria-hidden>
                  —
                </span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </ResortCard>

        <ResortCard variant="elevated">
          <h2 className="font-display text-xl font-medium">Smart lock</h2>
          <p className="mt-1 text-base text-muted-foreground">
            {smartLock.location}
          </p>
          <Link
            href="/systems/smart-lock"
            className="mt-4 inline-flex min-h-12 items-center font-semibold text-lake underline underline-offset-4"
          >
            View step-by-step instructions
          </Link>
        </ResortCard>
      </main>
    </>
  );
}
