import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { config } from "../config/env.js";

const leadsFilePath = path.join(config.dataDir, "leads.json");

async function ensureDataFile(filePath) {
  await mkdir(path.dirname(filePath), { recursive: true });
  try {
    await readFile(filePath, "utf8");
  } catch (error) {
    if (error?.code === "ENOENT") {
      await writeFile(filePath, "[]\n", "utf8");
      return;
    }
    throw error;
  }
}

async function readJsonArray(filePath) {
  await ensureDataFile(filePath);
  const raw = await readFile(filePath, "utf8");
  if (!raw.trim()) return [];

  const parsed = JSON.parse(raw);
  return Array.isArray(parsed) ? parsed : [];
}

async function writeJsonAtomic(filePath, data) {
  const tempPath = `${filePath}.${randomUUID()}.tmp`;
  await writeFile(tempPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  await rename(tempPath, filePath);
}

export class LeadRepository {
  constructor(filePath = leadsFilePath) {
    this.filePath = filePath;
    this.queue = Promise.resolve();
  }

  async listAll() {
    const leads = await readJsonArray(this.filePath);
    return leads.sort((left, right) => {
      return new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime();
    });
  }

  async create(input) {
    const record = {
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      ...input,
    };

    await this.enqueue(async () => {
      const leads = await readJsonArray(this.filePath);
      leads.unshift(record);
      await writeJsonAtomic(this.filePath, leads);
    });

    return record;
  }

  async enqueue(task) {
    const next = this.queue.then(task, task);
    this.queue = next.then(
      () => undefined,
      () => undefined,
    );
    return next;
  }
}

export const leadRepository = new LeadRepository();
