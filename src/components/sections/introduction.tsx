import { Container } from "../ui";
import { Reveal } from "../animations";

const capabilities = [
  "Responsive web applications",
  "Cross-platform mobile applications",
  "Backend systems & REST APIs",
  "Scalable digital solutions",
];

export function Introduction() {
  return (
    <section className="relative border-t border-border py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
          <Reveal variant="blur">
            <h2 className="font-display text-3xl leading-[1.15] tracking-tight text-text-primary sm:text-4xl md:text-5xl">
              I turn ideas into
              <br />
              functional digital
              <br />
              <span className="text-text-secondary">products.</span>
            </h2>
          </Reveal>

          <div className="flex flex-col justify-center gap-3">
            {capabilities.map((item, i) => (
              <Reveal key={item} variant="up" delay={i * 0.08}>
                <div className="flex items-center gap-3 border-b border-border py-3 font-body text-base text-text-secondary md:text-lg">
                  <span className="h-1 w-1 rounded-full bg-accent-light" />
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
