import { Router } from "express";
import { createLead, listLeads } from "../controllers/leads.controller.js";
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

leadsRouter.get("/", requireAdminKey, asyncHandler(listLeads));
