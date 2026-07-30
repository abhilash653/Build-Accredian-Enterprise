import "dotenv/config";
import path from "node:path";
import { z } from "zod";
import { backendRoot, defaultDataDir } from "./paths.js";

const envSchema = z.object({
  PORT: z.coerce.number().int().positive().default(4000),
  ALLOWED_ORIGIN: z.string().default("http://localhost:5173"),
  ADMIN_API_KEY: z.string().min(1).default("change-me-in-development"),
  DATA_DIR: z.string().optional(),
});

const parsed = envSchema.parse(process.env);

function parseOrigins(raw) {
  return raw
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

export const config = {
  port: parsed.PORT,
  allowedOrigins: parseOrigins(parsed.ALLOWED_ORIGIN),
  adminKey: parsed.ADMIN_API_KEY,
  dataDir: parsed.DATA_DIR
    ? path.isAbsolute(parsed.DATA_DIR)
      ? parsed.DATA_DIR
      : path.resolve(backendRoot, parsed.DATA_DIR)
    : defaultDataDir,
};
