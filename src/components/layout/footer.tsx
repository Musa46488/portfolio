"use client";

import { Container } from "../ui";
import { site } from "../../data";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-display text-lg text-text-primary">{site.name}</p>
          <p className="mt-1 font-body text-sm text-text-secondary">
            Full-Stack &amp; Cross-Platform Developer
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 font-body text-sm text-text-secondary">
          <a href={`mailto:${site.email}`} className="hover:text-text-primary">
            Email
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-text-primary"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-text-primary"
          >
            GitHub
          </a>
        </div>

        <div className="flex w-full items-center justify-between gap-4 border-t border-border pt-6 text-xs text-text-secondary md:w-auto md:border-0 md:pt-0">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <a href="#top" className="hover:text-text-primary">
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}
