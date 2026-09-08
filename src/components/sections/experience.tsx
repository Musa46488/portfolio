import { Container, SectionHeading } from "../ui";
import { Reveal } from "../animations";
import { experience } from "@/src/data";

export function Experience() {
  return (
    <section className="relative border-t border-border py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Building. Learning. Evolving."
        />

        <div className="relative mt-16 max-w-2xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[9px]" />

          <div className="flex flex-col gap-12">
            {experience.map((entry, i) => (
              <Reveal
                key={entry.company}
                variant="up"
                delay={i * 0.05}
                className="relative pl-8 md:pl-10"
              >
                <span
                  className={
                    "absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg md:h-[18px] md:w-[18px] " +
                    (entry.current ? "bg-accent-light" : "bg-border")
                  }
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-xl text-text-primary md:text-2xl">
                    {entry.role}
                  </h3>
                  <span className="font-body text-xs uppercase tracking-wide text-text-secondary">
                    {entry.period}
                  </span>
                </div>
                <p className="mt-1 font-body text-sm text-accent-light">
                  {entry.company}
                </p>
                <ul className="mt-4 flex flex-col gap-2">
                  {entry.summary.map((line) => (
                    <li
                      key={line}
                      className="font-body text-sm text-text-secondary"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
