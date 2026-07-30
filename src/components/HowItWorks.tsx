import { PROCESS_STEPS } from "@/data/site-content";
import { Reveal } from "@/components/Reveal";

/** Four-step process: horizontal stepper on desktop, vertical timeline on mobile. */
export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Process</p>
          <h2 id="how-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-muted-foreground">
            From first assessment to quarterly business review — a repeatable operating rhythm for
            enterprise upskilling.
          </p>
        </Reveal>

        <ol className="relative mt-14 grid gap-10 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden="true"
            className="absolute top-5 left-5 hidden h-px w-full bg-border lg:block"
          />
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 90} as="li" className="relative pl-16 lg:pl-0">
              <span
                aria-hidden="true"
                className="absolute top-10 bottom-[-2.5rem] left-5 w-px bg-border last:hidden lg:hidden"
              />
              <span className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-full border border-border bg-background font-display text-sm font-bold text-primary lg:relative lg:mb-6">
                {step.step}
              </span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground lg:pr-6">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
