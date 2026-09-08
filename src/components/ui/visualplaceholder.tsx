import { cn } from "../../lib/utils";

interface VisualPlaceholderProps {
  /** Identifier matching the final asset filename, e.g. "hero-visual" */
  assetId: string;
  /** Human label shown in the placeholder, e.g. "Hero Visual" */
  label: string;
  aspect?: "square" | "portrait" | "landscape" | "wide";
  className?: string;
}

const aspectClasses: Record<
  NonNullable<VisualPlaceholderProps["aspect"]>,
  string
> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

/**
 * Stand-in for the final custom visual assets referenced in the brief
 * (hero, service, and project imagery). Renders an on-brand abstract
 * composition — grid, gradient lighting, glass fragments — so layout and
 * spacing are correct ahead of the real asset. Swap for next/image once
 * final visuals (matching data-asset-id) are supplied.
 */
export function VisualPlaceholder({
  assetId,
  label,
  aspect = "landscape",
  className,
}: VisualPlaceholderProps) {
  return (
    <div
      data-asset-id={assetId}
      role="img"
      aria-label={`${label} — placeholder pending final visual asset`}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-surface",
        aspectClasses[aspect],
        className,
      )}
    >
      {/* subtle technical grid */}
      <div className="absolute inset-0 bg-grid-faint bg-[size:32px_32px] opacity-[0.15]" />

      {/* gradient light */}
      <div className="absolute -left-1/4 -top-1/4 h-2/3 w-2/3 rounded-full bg-accent/25 blur-[80px]" />
      <div className="absolute -bottom-1/4 -right-1/4 h-2/3 w-2/3 rounded-full bg-accent-blue/20 blur-[90px]" />

      {/* glass-like interface fragment */}
      <div className="absolute right-6 top-6 h-16 w-24 rounded-lg border border-white/10 bg-white/[0.03] backdrop-blur-sm md:h-20 md:w-32" />
      <div className="absolute bottom-8 left-6 h-2 w-20 rounded-full bg-white/5" />

      {/* label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
        <span className="font-body text-[10px] uppercase tracking-[0.25em] text-text-secondary">
          Visual placeholder
        </span>
        <span className="font-display text-lg text-text-primary/80">
          {label}
        </span>
      </div>
    </div>
  );
}
