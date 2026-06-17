import Image from "next/image";
import type { ImageEntry } from "@/lib/data/images";
import { cn } from "@/lib/utils";

type PropertyPhotoProps = {
  image: ImageEntry;
  priority?: boolean;
  className?: string;
  aspect?: "video" | "wide" | "hero";
  overlay?: boolean;
};

const aspectClasses = {
  video: "aspect-[4/3]",
  wide: "aspect-[16/10]",
  hero: "aspect-[4/5] sm:aspect-[16/10]",
};

export function PropertyPhoto({
  image,
  priority = false,
  className,
  aspect = "wide",
  overlay = false,
}: PropertyPhotoProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl",
        aspectClasses[aspect],
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="(max-width: 512px) 100vw, 512px"
        className="object-cover"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      )}
    </div>
  );
}
