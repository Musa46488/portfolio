"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Tag, SectionVisual } from "../ui";

export interface Project {
  slug: string;
  number: string;
  type: string;
  title: string;
  description: string;
  technologies: string[];
  visualPlaceholder: string;
}

interface MoreWorkSectionProps {
  projects: Project[];
  isOpen: boolean;
}

export function MoreWorkSection({ projects, isOpen }: MoreWorkSectionProps) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="more-projects-section"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div className="mt-20 border-t border-border/40 pt-20">
            <div className="mb-10">
              <span className="font-display text-sm text-accent-light">
                More Work
              </span>
              <h3 className="mt-3 font-display text-3xl text-text-primary md:text-4xl">
                More things I&apos;ve built.
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {projects.map((project, i) => (
                <article
                  key={project.slug}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent-light/40"
                >
                  {/* Background Visual Fade */}
                  <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-80">
                    <SectionVisual
                      assetId={project.visualPlaceholder}
                      alt={`Visual representing the ${project.title} project`}
                      aspect="wide"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <span className="font-display text-sm text-accent-light">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-body text-xs text-text-secondary">
                          {project.type}
                        </span>
                      </div>

                      <h4 className="mt-8 font-display text-2xl text-text-primary">
                        {project.title}
                      </h4>

                      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
