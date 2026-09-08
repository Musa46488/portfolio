import { cn } from "../../lib/utils";
import { Reveal } from "../animations";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center mx-auto", className)}>
      {eyebrow && (
        <Reveal variant="up">
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal variant="blur" delay={0.05}>
        <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-text-primary sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal variant="up" delay={0.15}>
          <p
            className={cn(
              "mt-5 max-w-xl font-body text-base text-text-secondary md:text-lg",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
