import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_STATS } from "@/data/site-content";
import heroVisual from "@/assets/hero-visual.jpg";

/** Above-the-fold hero with dual CTAs, stat strip and supporting illustration. */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:px-8">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Enterprise L&amp;D, built with IITs &amp; IIMs
          </p>
          <h1 className="mt-6 text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
            Upskill Your Workforce at Scale
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            We partner with IITs, IIMs and global universities to deliver curated programs in Data
            Science, AI, Product and Leadership — with live mentorship and real-time analytics on
            every cohort.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="group rounded-full px-7 shadow-[var(--shadow-lift)]">
              <a href="#contact">
                Talk to Us
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7">
              <a href="#programs">Explore Programs</a>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="border-l border-border pl-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-bold sm:text-3xl">{stat.value}</dd>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="surface-card overflow-hidden p-2">
            <img
              src={heroVisual}
              alt="Illustration of an enterprise team reviewing a learning progress dashboard"
              width={1280}
              height={1024}
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
