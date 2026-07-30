/**
 * Lead submission client.
 * Posts to `/api/leads` and falls back to a mocked async response while the
 * Node.js backend is not wired up yet.
 */
export type LeadPayload = {
  fullName: string;
  workEmail: string;
  company: string;
  teamSize: string;
  interest: string;
  message?: string;
};

export async function submitLead(payload: LeadPayload): Promise<{ id: string }> {
  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) return (await res.json()) as { id: string };
  } catch {
    // network/backend not available yet — fall through to the mock
  }
  return mockSubmitLead(payload);
}

/** Temporary stand-in for the future POST /api/leads endpoint. */
function mockSubmitLead(payload: LeadPayload): Promise<{ id: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!payload.workEmail) {
        reject(new Error("Work email is required"));
        return;
      }
      resolve({ id: `lead_${Date.now()}` });
    }, 1100);
  });
}
