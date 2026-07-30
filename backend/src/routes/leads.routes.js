import { Router } from "express";
import { createLead, listLeads, searchLeads } from "../controllers/leads.controller.js";
import { requireAdminKey } from "../middleware/admin-key.js";
import { asyncHandler } from "../middleware/async-handler.js";
import { leadSubmissionLimiter } from "../middleware/lead-rate-limit.js";
import { validateBody } from "../middleware/validate-body.js";
import { leadSubmissionSchema } from "../validation/leads.schema.js";

export const leadsRouter = Router();

leadsRouter.post(
  "/",
  leadSubmissionLimiter,
  validateBody(leadSubmissionSchema),
  asyncHandler(createLead),
);

// Public-ish search endpoint used by the demo UI to look up leads by name.
leadsRouter.get("/search", asyncHandler(searchLeads));

leadsRouter.get("/", requireAdminKey, asyncHandler(listLeads));
