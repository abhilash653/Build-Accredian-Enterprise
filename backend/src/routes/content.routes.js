import { Router } from "express";
import { getPrograms, getTestimonials } from "../controllers/content.controller.js";
import { asyncHandler } from "../middleware/async-handler.js";

export const contentRouter = Router();

contentRouter.get("/programs", asyncHandler(getPrograms));
contentRouter.get("/testimonials", asyncHandler(getTestimonials));
