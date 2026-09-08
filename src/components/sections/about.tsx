import { Container, SectionHeading } from "../ui";
import { Reveal } from "../animations";
import { journey } from "@/src/data";

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-border py-24 md:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr]">
          <SectionHeading eyebrow="About" title="The journey so far." />

          <div>
            <div className="flex flex-col">
              {journey.map((step, i) => (
                <Reveal key={step} variant="up" delay={i * 0.08}>
                  <div className="flex items-center gap-4 border-b border-border py-4 last:border-0">
                    <span className="font-body text-xs text-text-secondary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl text-text-primary md:text-2xl">
                      {step}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal variant="up" delay={0.3}>
              <p className="mt-8 max-w-md font-body text-text-secondary">
                Musa&rsquo;s path started with interactive experiences —
                exploring game development and Unity — before expanding into
                mobile and full-stack development. That creative background
                still shapes how he approaches interfaces today. His current
                focus is building practical, scalable applications across web
                and mobile platforms.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
