import {
  BadgeCheck,
  GraduationCap,
  LineChart,
  SlidersHorizontal,
  Users,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { FEATURES } from "@/data/site-content";
import { FeatureCard } from "@/components/FeatureCard";
import { Reveal } from "@/components/Reveal";

const ICONS: Record<string, LucideIcon> = {
  GraduationCap,
  Users,
  LineChart,
  UsersRound,
  SlidersHorizontal,
  BadgeCheck,
};

/** Six-card value proposition grid. */
export function Features() {
  return (
    <section id="why-us" aria-labelledby="why-us-heading" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Why us</p>
          <h2 id="why-us-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Why Accredian Enterprise
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything an L&amp;D team needs to run credible, measurable upskilling across hundreds
            of people at once.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 70}>
              <FeatureCard
                icon={ICONS[feature.icon] ?? BadgeCheck}
                title={feature.title}
                description={feature.description}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
