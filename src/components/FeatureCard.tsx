import type { LucideIcon } from "lucide-react";

/**
 * @prop {LucideIcon} icon - lucide icon component
 * @prop {string} title
 * @prop {string} description
 */
export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <article className="surface-card h-full p-7 transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
      <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </article>
  );
}
