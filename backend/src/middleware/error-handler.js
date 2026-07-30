import { ApiError, errorResponse } from "../utils/http.js";

export function notFoundHandler(req, res, next) {
  next(new ApiError(404, `Route not found: ${req.method} ${req.originalUrl}`));
}

export function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  const statusCode = err instanceof ApiError ? err.statusCode : err.statusCode || 500;
  const message = err instanceof ApiError ? err.message : err.message || "Internal server error";
  const details = err instanceof ApiError ? err.details : undefined;

  if (statusCode >= 500) {
    console.error(err);
  }

  res.status(statusCode).json(errorResponse(message, details));
}
