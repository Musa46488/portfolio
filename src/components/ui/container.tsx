import { cn } from "../../lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
}

export function Container({ children, className, as = "div" }: ContainerProps) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-content px-6 md:px-10 lg:px-16",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
