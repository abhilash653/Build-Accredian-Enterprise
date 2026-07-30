import type { VercelRequest, VercelResponse } from "@vercel/node";
import serverEntry from "../dist/server/server.js";

function buildRequest(req: VercelRequest): Request {
  const url = new URL(req.url ?? "", `https://${req.headers.host ?? "localhost"}`);
  const headers = new Headers();

  for (const [key, value] of Object.entries(req.headers)) {
    if (!value) continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(key, item);
      }
    } else {
      headers.set(key, value);
    }
  }

  let body: BodyInit | null = null;
  if (req.method && req.method !== "GET" && req.method !== "HEAD") {
    if (req.rawBody) {
      body = req.rawBody;
    } else if (typeof req.body === "string") {
      body = req.body;
    } else if (req.body != null) {
      body = JSON.stringify(req.body);
    }
  }

  return new Request(url.toString(), {
    method: req.method,
    headers,
    body,
  });
}

function writeResponse(res: VercelResponse, response: Response) {
  response.headers.forEach((value, key) => {
    if (key.toLowerCase() === "set-cookie") {
      res.setHeader(key, response.headers.getAll(key));
    } else {
      res.setHeader(key, value);
    }
  });

  res.status(response.status);
  return response.arrayBuffer().then((buffer) => {
    res.end(Buffer.from(buffer));
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const request = buildRequest(req);
  const response = await serverEntry.fetch(request, {}, {});
  await writeResponse(res, response);
}
