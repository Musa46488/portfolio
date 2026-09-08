"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container, SectionHeading, Tag, SectionVisual } from "../ui";
import { Reveal } from "../animations";
import { projects } from "@/src/data";
import { cn } from "../../lib/utils";
import { MoreWorkSection } from "./moreworksection";

export function FeaturedWork() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const [showMoreProjects, setShowMoreProjects] = useState(false);

  return (
    <section
      id="work"
      className="relative border-t border-border py-24 md:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected projects."
          description="A mix of full-stack web applications and cross-platform mobile apps — built end to end, from schema to interface."
        />

        {/* FEATURED PROJECTS GRID */}
        <div className="mt-20 flex flex-col gap-28 md:gap-36">
          {featuredProjects.map((project, i) => {
            const reversed = i % 2 === 1;
            return (
              <article
                key={project.slug}
                className="tilt-hover-target grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal
                  variant="scale"
                  className={cn(reversed && "lg:order-2")}
                >
                  <SectionVisual
                    assetId={project.visualPlaceholder}
                    alt={`Abstract visual representing the ${project.title} project`}
                    aspect="wide"
                  />
                </Reveal>

                <Reveal variant="up" className={cn(reversed && "lg:order-1")}>
                  <span className="font-display text-sm text-accent-light">
                    {String(i + 1).padStart(2, "0")} — {project.type}
                  </span>
                  <h3 className="mt-3 font-display text-3xl text-text-primary md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-md font-body text-text-secondary">
                    {project.description}
                  </p>

                  <ul className="mt-6 flex flex-col gap-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 font-body text-sm text-text-secondary"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-light" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>

        {/* TOGGLE BUTTON */}
        {otherProjects.length > 0 && (
          <div className="mt-24 flex justify-center">
            <button
              onClick={() => setShowMoreProjects((prev) => !prev)}
              className="group inline-flex items-center gap-3 rounded-full border border-border bg-surface px-8 py-4 font-body text-sm font-medium text-text-primary transition-all duration-300 hover:border-accent-light/50 hover:bg-surface/80 hover:text-accent-light hover:shadow-lg"
            >
              <span>
                {showMoreProjects
                  ? "Hide additional projects"
                  : `Explore ${otherProjects.length} more project${
                      otherProjects.length > 1 ? "s" : ""
                    }`}
              </span>
              <motion.svg
                animate={{ rotate: showMoreProjects ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </button>
          </div>
        )}

        {/* MORE WORK ACCORDION */}
        <MoreWorkSection projects={otherProjects} isOpen={showMoreProjects} />
      </Container>
    </section>
  );
}
