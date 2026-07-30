import { TESTIMONIALS } from "@/data/site-content";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Reveal } from "@/components/Reveal";

/** Three-up grid of L&D leader testimonials. */
export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Testimonials
          </p>
          <h2 id="testimonials-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            What L&amp;D leaders tell us
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <TestimonialCard quote={t.quote} name={t.name} role={t.role} company={t.company} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
