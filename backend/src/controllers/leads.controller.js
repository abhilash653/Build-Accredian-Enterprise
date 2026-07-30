import { leadService } from "../services/lead-service.js";
import { successResponse } from "../utils/http.js";

export async function createLead(req, res) {
  const lead = await leadService.createLead(req.body);
  res.status(201).json(successResponse(lead));
}

export async function listLeads(req, res) {
  const leads = await leadService.listLeads();
  res.json(successResponse({ leads }));
}

export async function searchLeads(req, res) {
  const name = String(req.query.name ?? "").trim();
  const leads = await leadService.findLeadsByName(name);
  res.json(successResponse({ leads }));
}
