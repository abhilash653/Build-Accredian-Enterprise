import { contentService } from "../services/content-service.js";
import { successResponse } from "../utils/http.js";

export async function getPrograms(req, res) {
  const programs = await contentService.loadPrograms();
  res.json(successResponse(programs));
}

export async function getTestimonials(req, res) {
  const testimonials = await contentService.loadTestimonials();
  res.json(successResponse(testimonials));
}
