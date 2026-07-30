import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently closest to the top of the viewport.
 * @param ids - list of section element ids to observe
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const handler = () => {
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [ids]);

  return active;
}

/** Returns true once the page has scrolled past `offset` pixels. */
export function useScrolledPast(offset: number) {
  const [passed, setPassed] = useState(false);
  useEffect(() => {
    const handler = () => setPassed(window.scrollY > offset);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [offset]);
  return passed;
}
