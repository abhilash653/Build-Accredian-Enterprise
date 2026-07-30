import { PARTNERS } from "@/data/site-content";
import { Reveal } from "@/components/Reveal";

/** Grayscale partner wordmark strip that gains colour on hover. */
export function LogoStrip() {
  return (
    <Reveal as="section" aria-label="Trusted by leading institutions" className="border-y border-border bg-surface py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
          Programs delivered with
        </p>
        <ul className="mt-7 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {PARTNERS.map((partner) => (
            <li
              key={partner}
              className="font-display text-center text-base font-semibold text-muted-foreground opacity-70 grayscale transition-all duration-300 hover:text-primary hover:opacity-100 hover:grayscale-0"
            >
              {partner}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
