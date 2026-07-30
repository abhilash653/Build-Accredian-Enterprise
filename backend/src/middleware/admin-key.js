import { ApiError } from "../utils/http.js";
import { config } from "../config/env.js";

export function requireAdminKey(req, res, next) {
  const providedKey = req.get("x-admin-key") ?? "";
  if (!providedKey || providedKey !== config.adminKey) {
    return next(new ApiError(401, "Invalid admin key"));
  }
  return next();
}
