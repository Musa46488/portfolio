"use client";

import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  Variants,
} from "motion/react";
import { Container, Button } from "../ui";
import { site } from "../../data";
import Image from "next/image";

const rotatingWords = ["Web Applications", "Mobile Apps", "Scalable Systems"];

const loadVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:56px_56px] opacity-[0.06]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px] animate-drift" />

      <Container className="relative">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={loadVariants}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-accent-blue" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-blue" />
          </span>
          <span className="font-body text-xs text-text-secondary">
            {site.availability}
          </span>
        </motion.div>

        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <motion.h1
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={loadVariants}
              className="font-display text-[15vw] leading-[0.92] tracking-tight text-text-primary sm:text-7xl md:text-8xl lg:text-[6.5rem]"
            >
              Building
              <br />
              Digital
              <br />
              <span className="bg-accent-gradient bg-clip-text text-transparent">
                Experiences.
              </span>
            </motion.h1>

            <motion.div
              custom={0.35}
              initial="hidden"
              animate="visible"
              variants={loadVariants}
              className="mt-8 flex h-8 items-center font-body text-lg text-text-secondary md:text-xl"
            >
              <span className="mr-2">Specializing in</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={
                    shouldReduceMotion ? undefined : { opacity: 0, y: 12 }
                  }
                  animate={
                    shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-medium text-accent-light"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.div
              custom={0.5}
              initial="hidden"
              animate="visible"
              variants={loadVariants}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="#work">Explore My Work</Button>
              <Button href="#contact" variant="secondary">
                Let&rsquo;s Work Together
              </Button>
            </motion.div>
          </div>

          <motion.div
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={loadVariants}
            className="relative mx-auto w-full max-w-xl lg:-mr-10 lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <Image
                src="/images/hero-visual.png"
                alt="Abstract diagram of connected web, mobile, backend, and cloud systems"
                width={1200}
                height={800}
                priority
                className="h-auto w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        <motion.p
          custom={0.6}
          initial="hidden"
          animate="visible"
          variants={loadVariants}
          className="mt-16 max-w-md font-body text-sm text-text-secondary md:mt-20"
        >
          {site.name} — {site.role}
        </motion.p>
      </Container>
    </section>
  );
}
