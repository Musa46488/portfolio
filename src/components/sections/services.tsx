import { Container, SectionHeading, Tag, SectionVisual } from "../ui";
import { Reveal } from "../animations";
import { services } from "@/src/data";

const visualAspect = {
  "web-development-visual": "wide",
  "mobile-development-visual": "wide",
  "backend-api-visual": "wide",
} as const;

export function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-border py-24 md:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="What I build for clients."
          description="Three focused disciplines, applied together to take an idea from concept to a working product."
        />

        <div className="mt-16 flex flex-col gap-6">
          {services.map((service, i) => (
            <Reveal key={service.slug} variant="blur" delay={i * 0.05}>
              <article className="service-card grid grid-cols-1 gap-8 rounded-3xl border border-border bg-surface p-8 transition-colors duration-500 hover:border-accent/40 md:grid-cols-[auto_1fr_1fr] md:items-center md:p-12">
                <span className="font-display text-5xl text-accent-light md:text-6xl">
                  {service.number}
                </span>

                <div>
                  <h3 className="font-display text-2xl text-text-primary md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-md font-body text-text-secondary">
                    {service.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </div>

                <SectionVisual
                  assetId={service.visualPlaceholder}
                  alt={`Abstract visual representing ${service.title}`}
                  aspect={
                    visualAspect[
                      service.visualPlaceholder as keyof typeof visualAspect
                    ] ?? "landscape"
                  }
                />
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
