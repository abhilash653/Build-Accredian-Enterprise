import { Router } from "express";
import { healthRouter } from "./health.routes.js";
import { leadsRouter } from "./leads.routes.js";
import { contentRouter } from "./content.routes.js";

export const apiRouter = Router();

apiRouter.use("/health", healthRouter);
apiRouter.use("/leads", leadsRouter);
apiRouter.use("/", contentRouter);
