import { successResponse } from "../utils/http.js";

export function getHealth(req, res) {
  res.json(
    successResponse({
      status: "ok",
      timestamp: new Date().toISOString(),
    }),
  );
}
