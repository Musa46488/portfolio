type ClassValue = string | number | null | undefined | false;

/** Minimal className combiner - avoids pulling in clsx/tailwind-merge as deps. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
