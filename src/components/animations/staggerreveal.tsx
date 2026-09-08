"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  amount?: number;
}

const container = {
  hidden: {},
  visible: (staggerDelay: number) => ({
    transition: { staggerChildren: staggerDelay },
  }),
};

export const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Wrap a list of elements; give each child the `staggerItem` variants to animate in sequence. */
export function StaggerReveal({
  children,
  className,
  staggerDelay = 0.08,
  amount = 0.3,
}: StaggerRevealProps) {
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
      variants={container}
      custom={staggerDelay}
    >
      {children}
    </motion.div>
  );
}
