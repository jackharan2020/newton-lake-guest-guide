import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { pageHeaderImage } from "@/lib/page-header-images";

type GuestPageHeaderProps = {
  title: string;
  subtitle?: string;
  backHref?: string;
};

export function GuestPageHeader({
  title,
  subtitle,
  backHref,
}: GuestPageHeaderProps) {
  return (
    <header className="page-header relative h-[10.5rem] overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={pageHeaderImage.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="page-header-bg object-cover object-center"
        />
      </div>

      <div className="page-header-overlay absolute inset-0" aria-hidden />
      <div className="page-header-text-scrim absolute inset-x-0 bottom-0 h-[70%]" aria-hidden />

      <div className="relative flex h-full flex-col justify-end px-5 pb-5 pt-4">
        {backHref ? (
          <Link
            href={backHref}
            className="page-header-back mb-2 inline-flex min-h-10 w-fit items-center gap-1 rounded-full bg-black/25 px-3 py-1.5 text-sm font-semibold text-white/95 backdrop-blur-sm transition-opacity active:opacity-70"
          >
            <ChevronLeft className="size-4" aria-hidden />
            Back
          </Link>
        ) : null}

        <div className="page-header-content">
          <h1 className="page-header-title font-display text-[1.625rem] font-medium leading-tight tracking-tight text-white sm:text-[1.875rem]">
            {title}
          </h1>
          {subtitle ? (
            <p className="page-header-subtitle mt-1.5 max-w-xl text-base leading-snug text-white/90 sm:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </header>
  );
}
