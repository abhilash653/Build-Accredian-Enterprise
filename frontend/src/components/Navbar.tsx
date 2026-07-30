import { useEffect, useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/data/site-content";
import { useActiveSection, useScrolledPast } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const IDS = NAV_LINKS.map((l) => l.id);

/** Sticky top navigation with in-page anchors and a mobile slide-in drawer. */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(IDS);
  const scrolled = useScrolledPast(12);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Accredian <span className="text-primary">Enterprise</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? "true" : undefined}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                active === link.id
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="lg" className="rounded-full shadow-[var(--shadow-soft)]">
            <a href="#contact">Book a Demo</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 top-18 z-40 bg-foreground/20 transition-opacity md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-[78%] max-w-xs border-l border-border bg-background px-6 pt-24 pb-8 shadow-[var(--shadow-lift)] transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
        hidden={!open}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-lg px-3 py-3 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                active === link.id ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted",
              )}
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="lg" className="mt-4 w-full rounded-full">
            <a href="#contact" onClick={() => setOpen(false)}>
              Book a Demo
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
