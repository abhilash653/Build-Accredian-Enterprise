import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll-reveal wrapper.
 * @prop {ReactNode} children - content to reveal
 * @prop {number} [delay] - stagger delay in ms
 * @prop {ElementType} [as] - element/tag to render (default: div)
 */
export function Reveal({
  children,
  delay = 0,
  as,
  className,
  ...rest
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
}) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", visible && "is-visible", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
