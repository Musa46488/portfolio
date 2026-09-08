import { Container, Button } from "../ui";
import { Reveal } from "../animations";
import { site } from "@/src/data";

/**
 * No backend/form yet — per brief. Structured so a future POST handler
 * (e.g. an app/api/contact route) can replace the mailto CTA without
 * touching layout or copy.
 */
export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border py-28 md:py-40"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-120 w-120 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[140px]" />

      <Container className="relative text-center">
        <Reveal variant="blur">
          <h2 className="mx-auto max-w-2xl font-display text-4xl leading-[1.05] tracking-tight text-text-primary sm:text-5xl md:text-6xl">
            Let&rsquo;s build something great.
          </h2>
        </Reveal>

        <Reveal variant="up" delay={0.1}>
          <p className="mx-auto mt-6 max-w-md font-body text-text-secondary">
            Have an idea, project, or problem that needs a digital solution?
            Let&rsquo;s talk.
          </p>
        </Reveal>

        <Reveal variant="up" delay={0.2}>
          <div className="mt-10 flex justify-center">
            <Button href={`mailto:${site.email}`}>Start a Conversation</Button>
          </div>
        </Reveal>

        <Reveal variant="up" delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 font-body text-sm text-text-secondary">
            <a
              href={`mailto:${site.email}`}
              className="hover:text-text-primary"
            >
              {site.email}
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
        </Reveal>
      </Container>
    </section>
  );
}
