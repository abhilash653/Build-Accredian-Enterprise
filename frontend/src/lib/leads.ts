/**
 * Lead submission client.
 * Posts to the Express API when configured, and falls back to a mock only
 * when the backend URL is not provided yet.
 */
export type LeadPayload = {
  fullName: string;
  workEmail: string;
  company: string;
  teamSize: string;
  interest: string;
  message?: string;
};

type ApiEnvelope<T> = {
  success: boolean;
  data: T | null;
  error: null | {
    message: string;
    details?: Record<string, unknown>;
  };
};

type LeadRecord = {
  id: string;
  createdAt: string;
  fullName: string;
  workEmail: string;
  companyName: string;
  teamSize: string;
  interestArea: string;
  message?: string;
};

const apiBaseUrl = import.meta.env.VITE_LEADS_API_BASE_URL?.trim().replace(/\/$/, "");

function buildLeadEndpoint() {
  return apiBaseUrl ? new URL("/api/leads", apiBaseUrl).toString() : "/api/leads";
}

function buildSearchEndpoint() {
  return apiBaseUrl ? new URL("/api/leads/search", apiBaseUrl).toString() : "/api/leads/search";
}

function toBackendPayload(payload: LeadPayload) {
  return {
    fullName: payload.fullName,
    workEmail: payload.workEmail,
    companyName: payload.company,
    teamSize: payload.teamSize,
    interestArea: payload.interest,
    message: payload.message,
  };
}

export async function submitLead(payload: LeadPayload): Promise<LeadRecord | { id: string }> {
  const endpoint = buildLeadEndpoint();
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toBackendPayload(payload)),
    });
    const body = (await res.json().catch(() => null)) as ApiEnvelope<LeadRecord> | null;

    if (res.ok && body?.success && body.data) {
      return body.data;
    }

    if (apiBaseUrl) {
      throw new Error(body?.error?.message ?? `Lead submission failed with status ${res.status}`);
    }
  } catch (error) {
    if (apiBaseUrl) {
      throw error;
    }
  }

  return mockSubmitLead(payload);
}

export async function searchLeads(name: string): Promise<LeadRecord[]> {
  const endpoint = buildSearchEndpoint();
  const url = new URL(endpoint);
  url.searchParams.set("name", name);

  try {
    const res = await fetch(url.toString());
    if (!res.ok) {
      throw new Error(`Search failed with status ${res.status}`);
    }
    const body = (await res.json().catch(() => null)) as ApiEnvelope<{ leads: LeadRecord[] }> | null;
    if (body?.success && body.data?.leads) {
      return body.data.leads;
    }
    throw new Error(body?.error?.message ?? "Search failed");
  } catch (error) {
    if (apiBaseUrl) {
      throw error;
    }
    // Fallback: return empty list if backend not configured
    return [];
  }
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
