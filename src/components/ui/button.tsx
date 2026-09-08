"use client";

import { cn } from "../../lib/utils";
import { motion, HTMLMotionProps } from "motion/react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium font-body tracking-wide transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light";

const variants: Record<Variant, string> = {
  primary: "bg-text-primary text-bg hover:bg-accent-light",
  secondary: "border border-border text-text-primary hover:border-accent",
  ghost: "text-text-secondary hover:text-text-primary",
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = CommonProps &
  HTMLMotionProps<"button"> & { href?: undefined };

type ButtonAsLink = CommonProps & HTMLMotionProps<"a"> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], className);

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as HTMLMotionProps<"a">;
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        {...anchorRest}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      {...(rest as HTMLMotionProps<"button">)}
    >
      {children}
    </motion.button>
  );
}
