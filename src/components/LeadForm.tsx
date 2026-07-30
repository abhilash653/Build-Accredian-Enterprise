import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { INTEREST_AREAS, TEAM_SIZES } from "@/data/site-content";
import { submitLead, type LeadPayload } from "@/lib/leads";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<keyof LeadPayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const selectClass =
  "h-10 w-full rounded-md border border-input bg-background px-3 text-sm shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none";

/** Enterprise lead capture form with client-side validation and mocked POST /api/leads. */
export function LeadForm() {
  const [values, setValues] = useState<LeadPayload>({
    fullName: "",
    workEmail: "",
    company: "",
    teamSize: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const set = (key: keyof LeadPayload, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next: Errors = {};
    if (!values.fullName.trim()) next.fullName = "Please enter your full name.";
    if (!values.workEmail.trim()) next.workEmail = "Please enter your work email.";
    else if (!EMAIL_RE.test(values.workEmail.trim())) next.workEmail = "Enter a valid email address.";
    if (!values.company.trim()) next.company = "Please enter your company name.";
    if (!values.teamSize) next.teamSize = "Select a team size.";
    if (!values.interest) next.interest = "Select an area of interest.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setStatus("loading");
    try {
      await submitLead(values);
      setStatus("success");
      toast.success("Thanks — our enterprise team will reach out within one business day.");
    } catch {
      setStatus("idle");
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Contact</p>
          <h2 id="contact-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Book a demo with our enterprise team
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your teams and goals. We'll come back with a skill-gap view and an
            indicative program plan — usually within one business day.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            <li>• 30-minute discovery call, no obligation</li>
            <li>• Sample curriculum and cohort plan</li>
            <li>• Pricing tiers for your headcount</li>
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <div className="surface-card p-6 sm:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle2 className="size-12 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold">Request received</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thanks {values.fullName.split(" ")[0]} — an enterprise advisor will email{" "}
                  {values.workEmail} shortly with next steps.
                </p>
                <Button
                  variant="outline"
                  className="mt-6 rounded-full"
                  onClick={() => {
                    setValues({
                      fullName: "",
                      workEmail: "",
                      company: "",
                      teamSize: "",
                      interest: "",
                      message: "",
                    });
                    setStatus("idle");
                  }}
                >
                  Submit another request
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" id="fullName" error={errors.fullName}>
                  <Input
                    id="fullName"
                    value={values.fullName}
                    onChange={(e) => set("fullName", e.target.value)}
                    maxLength={100}
                    autoComplete="name"
                    aria-invalid={!!errors.fullName}
                    placeholder="Ananya Rao"
                  />
                </Field>

                <Field label="Work email" id="workEmail" error={errors.workEmail}>
                  <Input
                    id="workEmail"
                    type="email"
                    value={values.workEmail}
                    onChange={(e) => set("workEmail", e.target.value)}
                    maxLength={255}
                    autoComplete="email"
                    aria-invalid={!!errors.workEmail}
                    placeholder="you@company.com"
                  />
                </Field>

                <Field label="Company name" id="company" error={errors.company}>
                  <Input
                    id="company"
                    value={values.company}
                    onChange={(e) => set("company", e.target.value)}
                    maxLength={120}
                    autoComplete="organization"
                    aria-invalid={!!errors.company}
                    placeholder="Acme Technologies"
                  />
                </Field>

                <Field label="Team size" id="teamSize" error={errors.teamSize}>
                  <select
                    id="teamSize"
                    className={selectClass}
                    value={values.teamSize}
                    aria-invalid={!!errors.teamSize}
                    onChange={(e) => set("teamSize", e.target.value)}
                  >
                    <option value="">Select team size</option>
                    {TEAM_SIZES.map((size) => (
                      <option key={size} value={size}>
                        {size} people
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  label="Area of interest"
                  id="interest"
                  error={errors.interest}
                  className="sm:col-span-2"
                >
                  <select
                    id="interest"
                    className={selectClass}
                    value={values.interest}
                    aria-invalid={!!errors.interest}
                    onChange={(e) => set("interest", e.target.value)}
                  >
                    <option value="">Select an area</option>
                    {INTEREST_AREAS.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Message (optional)" id="message" className="sm:col-span-2">
                  <Textarea
                    id="message"
                    rows={4}
                    maxLength={1000}
                    value={values.message}
                    onChange={(e) => set("message", e.target.value)}
                    placeholder="Tell us about your teams, timelines or goals."
                  />
                </Field>

                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full rounded-full"
                  >
                    {status === "loading" && <Loader2 className="size-4 animate-spin" />}
                    {status === "loading" ? "Sending request…" : "Book a Demo"}
                  </Button>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    We'll only use your details to respond to this enquiry.
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * @prop {string} label - visible field label
 * @prop {string} id - matching input id
 * @prop {string} [error] - validation message
 */
function Field({
  label,
  id,
  error,
  className,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
