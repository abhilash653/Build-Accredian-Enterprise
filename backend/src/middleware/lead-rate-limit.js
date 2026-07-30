import rateLimit from "express-rate-limit";
import { errorResponse } from "../utils/http.js";

export const leadSubmissionLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  handler(req, res) {
    res.status(429).json(
      errorResponse("Too many lead submissions from this IP. Please try again later."),
    );
  },
});
