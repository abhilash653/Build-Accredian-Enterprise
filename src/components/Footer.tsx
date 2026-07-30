import { useState, type FormEvent } from "react";
import { GraduationCap, Linkedin, Twitter, Youtube, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FOOTER_COLUMNS } from "@/data/site-content";

const SOCIALS = [
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "X (Twitter)", icon: Twitter, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      toast.error("Enter a valid email address.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setEmail("");
    toast.success("You're subscribed to the enterprise L&D newsletter.");
  };

  return (
    <footer className="border-t border-border bg-surface pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-bold">Accredian Enterprise</span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Enterprise upskilling in Data Science, AI, Product and Leadership — delivered with
              IITs, IIMs and global universities.
            </p>
            <form onSubmit={onSubscribe} className="mt-6 flex max-w-sm gap-2">
              <label htmlFor="newsletter" className="sr-only">
                Email address for newsletter
              </label>
              <Input
                id="newsletter"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                autoComplete="email"
              />
              <Button type="submit" disabled={loading} className="shrink-0">
                {loading ? <Loader2 className="size-4 animate-spin" /> : "Subscribe"}
              </Button>
            </form>
            <ul className="mt-6 flex gap-2">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="grid gap-8 sm:grid-cols-4">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="text-sm font-semibold">Contact</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li>
                  <a
                    href="mailto:enterprise@accredian.com"
                    className="transition-colors hover:text-primary"
                  >
                    enterprise@accredian.com
                  </a>
                </li>
                <li>
                  <a href="tel:+911234567890" className="transition-colors hover:text-primary">
                    +91 12345 67890
                  </a>
                </li>
                <li>Bengaluru · Delhi NCR · Singapore</li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Accredian Enterprise. All rights reserved.</p>
          <p className="flex gap-5">
            <a href="#top" className="hover:text-primary">
              Privacy
            </a>
            <a href="#top" className="hover:text-primary">
              Terms
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
