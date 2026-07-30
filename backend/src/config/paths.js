import path from "node:path";
import { fileURLToPath } from "node:url";

const currentFile = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFile);

export const backendRoot = path.resolve(currentDir, "..", "..");
export const defaultDataDir = path.join(backendRoot, "src", "data");

export function resolveDataPath(fileName) {
  return path.join(defaultDataDir, fileName);
}
