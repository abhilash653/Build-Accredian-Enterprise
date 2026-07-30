import { FAQS } from "@/data/site-content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";

/** Accordion of common enterprise questions. */
export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">FAQ</p>
          <h2 id="faq-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Questions enterprises ask
          </h2>
          <p className="mt-4 text-muted-foreground">
            Can't find what you need? Reach the enterprise team at{" "}
            <a
              href="mailto:enterprise@accredian.com"
              className="font-medium text-primary underline underline-offset-4"
            >
              enterprise@accredian.com
            </a>
            .
          </p>
        </Reveal>
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
