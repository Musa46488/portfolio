import Image from "next/image";
import { cn } from "../../lib/utils";

interface SectionVisualProps {
  /** Filename (without extension) under /public/images — also used as alt fallback */
  assetId: string;
  alt: string;
  aspect?: "square" | "portrait" | "landscape" | "wide";
  className?: string;
  priority?: boolean;
}

const aspectClasses: Record<
  NonNullable<SectionVisualProps["aspect"]>,
  string
> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

/**
 * Renders a final custom visual asset from /public/images, framed
 * consistently with the rest of the site (rounded border, ambient glow,
 * object-cover). Swaps in for VisualPlaceholder once real art exists.
 */
export function SectionVisual({
  assetId,
  alt,
  aspect = "landscape",
  className,
  priority = false,
}: SectionVisualProps) {
  return (
    <div className="card-tilt-wrapper">
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-border bg-surface animate-card-tilt",
          aspectClasses[aspect],
          className,
        )}
      >
        <Image
          src={`/images/${assetId}.png`}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          loading="eager"
          priority={priority}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/20 via-transparent to-transparent" />
      </div>
    </div>
  );
} 
