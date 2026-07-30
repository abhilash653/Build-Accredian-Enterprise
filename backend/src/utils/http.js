export class ApiError extends Error {
  constructor(statusCode, message, details = undefined) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.details = details;
  }
}

export function successResponse(data) {
  return {
    success: true,
    data,
    error: null,
  };
}

export function errorResponse(message, details = undefined) {
  return {
    success: false,
    data: null,
    error: {
      message,
      ...(details ? { details } : {}),
    },
  };
}
