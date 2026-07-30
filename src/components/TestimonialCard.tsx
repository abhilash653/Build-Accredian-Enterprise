import { Quote } from "lucide-react";

/**
 * @prop {string} quote
 * @prop {string} name
 * @prop {string} role
 * @prop {string} company
 */
export function TestimonialCard({
  quote,
  name,
  role,
  company,
}: {
  quote: string;
  name: string;
  role: string;
  company: string;
}) {
  return (
    <figure className="surface-card flex h-full flex-col p-7">
      <Quote className="size-6 text-primary" aria-hidden="true" />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-border pt-5">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-muted-foreground">
          {role} · {company}
        </p>
      </figcaption>
    </figure>
  );
}
