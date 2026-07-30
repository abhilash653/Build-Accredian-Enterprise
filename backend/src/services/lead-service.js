import { leadRepository } from "./lead-repository.js";

export class LeadService {
  constructor(repository = leadRepository) {
    this.repository = repository;
  }

  async createLead(input) {
    return this.repository.create(input);
  }

  async listLeads() {
    return this.repository.listAll();
  }

  async findLeadsByName(name) {
    if (!name) return this.repository.listAll();
    const all = await this.repository.listAll();
    const needle = name.trim().toLowerCase();
    return all.filter((l) => String(l.fullName ?? "").toLowerCase().includes(needle));
  }
}

export const leadService = new LeadService();
