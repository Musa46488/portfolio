"use client";

import { motion, useReducedMotion, Variants } from "motion/react";
import { ReactNode } from "react";

type RevealVariant = "up" | "blur" | "scale" | "clip";

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  /** Fraction of the element that must enter the viewport before animating. */
  amount?: number;
}

const variantMap: Record<RevealVariant, Variants> = {
  up: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  blur: {
    hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
  clip: {
    hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
    visible: { opacity: 1, clipPath: "inset(0 0 0% 0)" },
  },
};

/**
 * Wraps content in a scroll-triggered reveal. Deliberately varies motion
 * shape (variant) per call-site so sections don't all animate identically.
 * Respects prefers-reduced-motion by disabling transform/opacity animation.
 */
export function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 0.7,
  className,
  amount = 0.3,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variantMap[variant]}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
