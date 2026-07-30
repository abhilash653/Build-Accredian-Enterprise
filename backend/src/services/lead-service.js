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
}

export const leadService = new LeadService();
