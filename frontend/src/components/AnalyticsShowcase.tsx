import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { DASHBOARD_METRICS } from "@/data/site-content";
import { Reveal } from "@/components/Reveal";
import dashboardMock from "@/assets/dashboard-mock.jpg";

const HIGHLIGHTS = [
  "Completion and engagement per team, cohort and role",
  "Skill-lift benchmarking against pre-program baselines",
  "Board-ready ROI exports every quarter",
];

/** Mocked async fetch of live program metrics (swap for a real API call later). */
function useMetrics() {
  const [data, setData] = useState<typeof DASHBOARD_METRICS | null>(null);
  useEffect(() => {
    const t = setTimeout(() => setData(DASHBOARD_METRICS), 900);
    return () => clearTimeout(t);
  }, []);
  return { data, isLoading: data === null };
}

export function AnalyticsShowcase() {
  const { data, isLoading } = useMetrics();

  return (
    <section id="analytics" aria-labelledby="analytics-heading" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Analytics</p>
          <h2 id="analytics-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Real-time visibility into every cohort
          </h2>
          <p className="mt-4 text-muted-foreground">
            The enterprise dashboard tracks completion rates, engagement and business impact as your
            teams learn — so training stops being a black box.
          </p>
          <ul className="mt-7 space-y-3">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid grid-cols-2 gap-4">
            {isLoading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="surface-card p-5">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="mt-3 h-3 w-28" />
                  </div>
                ))
              : data!.map((metric) => (
                  <div key={metric.label} className="surface-card p-5">
                    <dd className="font-display text-2xl font-bold">
                      {metric.value.toLocaleString()}
                      {metric.suffix}
                    </dd>
                    <dt className="mt-1 text-xs text-muted-foreground">{metric.label}</dt>
                  </div>
                ))}
          </dl>
        </Reveal>

        <Reveal delay={120}>
          <div className="surface-card overflow-hidden p-2">
            <img
              src={dashboardMock}
              alt="Accredian Enterprise analytics dashboard showing completion rate trends and learner activity"
              width={1408}
              height={960}
              loading="lazy"
              className="w-full rounded-xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
