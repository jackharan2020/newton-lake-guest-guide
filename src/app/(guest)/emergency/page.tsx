import type { Metadata } from "next";
import Link from "next/link";
import { Cross, MapPin, Phone } from "lucide-react";
import { property } from "@/data/property";
import { GuestPageHeader } from "@/components/guest/page-header";
import { ContactButtons } from "@/components/guest/contact-buttons";
import { ResortCard } from "@/components/guest/resort-card";

export const metadata: Metadata = {
  title: "Emergency",
};

export default function EmergencyPage() {
  const { host, emergency, address } = property;

  return (
    <>
      <GuestPageHeader
        title="Emergency & Contact"
        subtitle="If you need anything during your stay, Frank is just a call or text away."
      />

      <main className="space-y-6 px-4 py-6">
        {/* Host contact — primary, prominent */}
        <ResortCard
          as="section"
          aria-labelledby="assist-heading"
          className="border-lake/20 bg-gradient-to-br from-lake/[0.07] via-card to-evergreen/[0.05] p-6 shadow-[var(--shadow-resort-lg)]"
        >
          <h2
            id="assist-heading"
            className="mt-1 font-display text-2xl font-medium leading-tight tracking-tight sm:text-[1.75rem]"
          >
            Need Assistance?
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
            For any questions about the property, house systems, Wi-Fi,
            amenities, check-in/check-out, or issues during your stay, please
            contact:
          </p>

          <div className="mt-5 rounded-2xl border border-lake/15 bg-card/80 p-5">
            <p className="font-display text-xl font-medium text-foreground">
              Frank <span className="text-muted-foreground">(Host)</span>
            </p>
            <a
              href={`tel:${host.phone.replace(/\D/g, "")}`}
              className="mt-2 flex min-h-12 items-center gap-2 font-display text-[1.75rem] font-medium leading-none tracking-tight text-lake sm:text-3xl"
            >
              <Phone className="size-7 shrink-0 sm:size-8" aria-hidden />
              {host.phone}
            </a>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Guests are welcome to call or text Frank. Text messages are often
              the fastest way to reach him.
            </p>
            <div className="mt-5">
              <ContactButtons host={host} />
            </div>
          </div>
        </ResortCard>

        {/* 911 — clear but calm */}
        <ResortCard
          as="section"
          aria-labelledby="emergency-heading"
          variant="flat"
          className="border-lake/20 bg-lake/[0.04]"
        >
          <p className="resort-kicker text-slate-lake">Life-threatening emergency</p>
          <h2
            id="emergency-heading"
            className="mt-1 font-display text-xl font-medium sm:text-2xl"
          >
            Call 911
          </h2>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            For fire, medical, or police emergencies requiring immediate
            response.
          </p>
          <a
            href={`tel:${emergency.emergencyPhone}`}
            className="mt-4 inline-flex min-h-14 items-center gap-3 rounded-2xl bg-lake px-6 font-display text-2xl font-medium text-lake-foreground shadow-[var(--shadow-resort)] transition-transform active:scale-[0.98]"
          >
            <Phone className="size-6 shrink-0" aria-hidden />
            {emergency.emergencyPhone}
          </a>
        </ResortCard>

        {/* Hospital */}
        <ResortCard as="section" aria-labelledby="hospital-heading" variant="elevated">
          <div className="flex items-start gap-3">
            <span
              className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-evergreen/10 text-evergreen"
              aria-hidden
            >
              <Cross className="size-5" />
            </span>
            <div>
              <h2
                id="hospital-heading"
                className="font-display text-xl font-medium sm:text-2xl"
              >
                Nearest hospital
              </h2>
              <p className="mt-2 text-lg font-semibold leading-snug">
                {emergency.hospitalName}
              </p>
              <a
                href={`tel:${emergency.hospitalPhone.replace(/\D/g, "")}`}
                className="mt-2 inline-flex min-h-12 items-center text-lg font-bold text-lake underline underline-offset-4"
              >
                {emergency.hospitalPhone}
              </a>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {emergency.hospitalNote}
              </p>
            </div>
          </div>
        </ResortCard>

        {emergency.additionalContacts.length > 0 ? (
          <ResortCard as="section" aria-labelledby="other-numbers-heading" variant="elevated">
            <h2
              id="other-numbers-heading"
              className="font-display text-xl font-medium sm:text-2xl"
            >
              Other helpful numbers
            </h2>
            <ul className="mt-4 space-y-3">
              {emergency.additionalContacts.map((c) => (
                <li key={c.label}>
                  <a
                    href={`tel:${c.phone.replace(/\D/g, "")}`}
                    className="inline-flex min-h-12 items-center text-lg font-semibold text-lake underline underline-offset-4"
                  >
                    {c.label}: {c.phone}
                  </a>
                </li>
              ))}
            </ul>
          </ResortCard>
        ) : null}

        {/* Property address */}
        <ResortCard as="section" aria-labelledby="address-heading" variant="elevated">
          <div className="flex items-start gap-3">
            <span
              className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-lake/10 text-lake"
              aria-hidden
            >
              <MapPin className="size-5" />
            </span>
            <div>
              <h2
                id="address-heading"
                className="font-display text-xl font-medium sm:text-2xl"
              >
                Property address
              </h2>
              <p className="mt-2 text-lg leading-relaxed">{address.formatted}</p>
              <p className="mt-1 text-base text-muted-foreground">
                Share this address with emergency services if needed.
              </p>
            </div>
          </div>
        </ResortCard>

        {/* Safety notes */}
        <ResortCard as="section" aria-labelledby="safety-heading" variant="elevated">
          <h2
            id="safety-heading"
            className="font-display text-xl font-medium sm:text-2xl"
          >
            Safety notes
          </h2>

          <div className="mt-5 rounded-2xl border border-evergreen/15 bg-evergreen/[0.04] p-5">
            <h3 className="font-display text-lg font-medium text-evergreen">
              First Aid Kit
            </h3>
            <p className="mt-2 text-lg leading-relaxed">
              A first aid kit is located in{" "}
              <strong className="font-semibold text-foreground">
                either the basement kitchen or the basement closet
              </strong>
              . Check both spots if you need it — it will be in one of those two
              locations.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Please familiarize yourself with these locations upon arrival.
            </p>
          </div>
        </ResortCard>

        {/* Smart lock */}
        <ResortCard as="section" aria-labelledby="smart-lock-heading" variant="elevated">
          <h2
            id="smart-lock-heading"
            className="font-display text-xl font-medium sm:text-2xl"
          >
            Smart lock
          </h2>
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
