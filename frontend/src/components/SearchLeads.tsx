import { useState, type FormEvent } from "react";
import { searchLeads } from "@/lib/leads";

type LeadRecord = {
  id: string;
  createdAt: string;
  fullName: string;
  workEmail: string;
  companyName: string;
  teamSize?: string;
  interestArea?: string;
  message?: string;
};

export function SearchLeads() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<LeadRecord[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSearch(e?: FormEvent<HTMLFormElement>) {
    e?.preventDefault();
    setError(null);
    setLoading(true);
    setResults(null);

    try {
      const leads = await searchLeads(query);
      setResults(leads);
    } catch (err: any) {
      setError(err?.message ?? "Unable to search booked demos.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto max-w-5xl px-5 py-8 sm:px-8">
      <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Booked demo search</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Find your booked demo details
            </h2>
          </div>
          <form onSubmit={handleSearch} className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="sr-only" htmlFor="demo-search-input">
              Search by full name
            </label>
            <input
              id="demo-search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter full name"
              className="min-w-0 rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/50"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Searching…" : "Search"}
            </button>
          </form>
        </div>

        {error ? (
          <div className="mt-6 rounded-2xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {error}
          </div>
        ) : null}

        {results ? (
          <div className="mt-6 space-y-4">
            {results.length === 0 ? (
              <div className="rounded-2xl border border-border bg-background px-4 py-5 text-sm text-muted-foreground">
                No booked demos found for that name.
              </div>
            ) : (
              results.map((lead) => (
                <div key={lead.id} className="rounded-3xl border border-border bg-background p-5 shadow-sm">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0">
                      <p className="text-lg font-semibold text-foreground truncate">{lead.fullName}</p>
                      <p className="mt-1 text-sm text-muted-foreground truncate">
                        {lead.companyName} • {lead.workEmail}
                      </p>
                    </div>
                    <p className="whitespace-nowrap text-xs text-muted-foreground">
                      {new Date(lead.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Team size</p>
                      <p className="mt-1 text-sm text-foreground">{lead.teamSize ?? "—"}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Interest</p>
                      <p className="mt-1 text-sm text-foreground">{lead.interestArea ?? "—"}</p>
                    </div>
                    {lead.message ? (
                      <div className="sm:col-span-3">
                        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Message</p>
                        <p className="mt-1 text-sm text-foreground">{lead.message}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}

