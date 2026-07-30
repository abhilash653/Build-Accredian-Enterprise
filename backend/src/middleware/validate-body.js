import { ApiError } from "../utils/http.js";

function flattenFieldErrors(zodError) {
  const fieldErrors = zodError.flatten().fieldErrors;
  return Object.fromEntries(
    Object.entries(fieldErrors).map(([field, messages]) => [field, messages.filter(Boolean)]),
  );
}

export function validateBody(schema) {
  return (req, res, next) => {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) {
      return next(
        new ApiError(400, "Validation failed", {
          fields: flattenFieldErrors(parsed.error),
        }),
      );
    }

    req.body = parsed.data;
    return next();
  };
}
