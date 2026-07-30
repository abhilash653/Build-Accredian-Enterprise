import app from "./app.js";
import { config } from "./src/config/env.js";

const server = app.listen(config.port, () => {
  console.log(`Accredian Enterprise backend listening on http://localhost:${config.port}`);
});

function shutdown(signal) {
  console.log(`${signal} received, closing server...`);
  server.close(() => {
    process.exit(0);
  });
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
