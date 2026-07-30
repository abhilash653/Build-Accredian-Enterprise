import { readFile } from "node:fs/promises";
import path from "node:path";
import { config } from "../config/env.js";

const cache = new Map();

async function loadJson(fileName) {
  if (cache.has(fileName)) {
    return cache.get(fileName);
  }

  const filePath = path.join(config.dataDir, fileName);
  const raw = await readFile(filePath, "utf8");
  const parsed = JSON.parse(raw);
  cache.set(fileName, parsed);
  return parsed;
}

export const contentService = {
  loadPrograms: () => loadJson("programs.json"),
  loadTestimonials: () => loadJson("testimonials.json"),
};
