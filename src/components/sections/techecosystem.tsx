"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Container, SectionHeading, SystemVisual } from "../ui";
import { Reveal } from "../animations";
import { techEcosystem } from "@/src/data";

export function TechEcosystem() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative border-t border-border py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <SectionHeading
            eyebrow="Technology Ecosystem"
            title="A connected toolset."
            description="Grouped by where each technology sits in a product — not ranked by percentage. Hover a technology for context."
          />
          <Reveal
            variant="scale"
            className="hidden justify-self-end opacity-70 lg:block"
          >
            <SystemVisual className="w-64" />
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {techEcosystem.map((group, gi) => (
            <Reveal
              key={group.label}
              variant="up"
              delay={gi * 0.05}
              className="bg-surface p-8"
            >
              <h3 className="font-display text-sm uppercase tracking-[0.15em] text-accent-light">
                {group.label}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    onMouseEnter={() => setHovered(item.name)}
                    onMouseLeave={() => setHovered(null)}
                    className="relative"
                  >
                    <span className="font-body text-base text-text-primary">
                      {item.name}
                    </span>
                    <motion.p
                      initial={false}
                      animate={{
                        height: hovered === item.name ? "auto" : 0,
                        opacity: hovered === item.name ? 1 : 0,
                      }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden font-body text-xs text-text-secondary"
                    >
                      {item.context}
                    </motion.p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
