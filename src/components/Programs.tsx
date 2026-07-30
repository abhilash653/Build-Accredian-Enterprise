import { ArrowUpRight } from "lucide-react";
import { PROGRAMS } from "@/data/site-content";
import { Reveal } from "@/components/Reveal";

/** Program tracks offered to enterprise teams. */
export function Programs() {
  return (
    <section id="programs" aria-labelledby="programs-heading" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Programs</p>
          <h2 id="programs-heading" className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
            Four tracks, co-designed around your roadmap
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {PROGRAMS.map((program, i) => (
            <Reveal key={program.slug} delay={i * 70}>
              <article className="surface-card group h-full p-7 transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{program.title}</h3>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                  />
                </div>
                <p className="mt-3 text-muted-foreground">{program.blurb}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {program.tracks.map((track) => (
                    <li
                      key={track}
                      className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
                    >
                      {track}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
