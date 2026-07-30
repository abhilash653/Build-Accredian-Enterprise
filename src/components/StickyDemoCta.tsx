import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrolledPast } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

/** Mobile-only sticky "Book a Demo" bar that appears after scrolling. */
export function StickyDemoCta() {
  const show = useScrolledPast(600);
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md transition-transform duration-300 md:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="flex items-center gap-2">
        <Button asChild size="lg" className="flex-1 rounded-full">
          <a href="#contact">Book a Demo</a>
        </Button>
        <Button
          variant="outline"
          size="icon"
          aria-label="Back to top"
          className="size-11 rounded-full"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="size-4" />
        </Button>
      </div>
    </div>
  );
}
