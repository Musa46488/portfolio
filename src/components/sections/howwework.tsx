import { Container, SectionHeading } from "../ui";
import { Reveal } from "../animations";
import { processSteps } from "@/src/data";

export function HowWeWork() {
  return (
    <section className="relative border-t border-border py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="Have an idea? Let&rsquo;s build it."
        />

        <div className="relative mt-20">
          {/* connection line */}
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-0 md:top-4 md:h-px md:w-full" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
            {processSteps.map((step, i) => (
              <Reveal
                key={step.number}
                variant="up"
                delay={i * 0.08}
                className="relative pl-10 md:pl-0 md:pt-10"
              >
                <span className="absolute left-1.5 top-1 h-3 w-3 rounded-full bg-accent-light md:left-1/2 md:top-0 md:-translate-x-1/2" />
                <span className="font-display text-xs text-text-secondary">
                  {step.number}
                </span>
                <h3 className="mt-2 font-display text-xl text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-sm text-text-secondary">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
