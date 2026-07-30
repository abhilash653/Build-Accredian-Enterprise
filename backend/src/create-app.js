import express from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "./config/env.js";
import { apiRouter } from "./routes/index.js";
import { errorHandler, notFoundHandler } from "./middleware/error-handler.js";
import { ApiError } from "./utils/http.js";

export function createApp() {
  const app = express();

  app.set("trust proxy", 1);
  app.use(morgan("dev"));
  app.use(
    cors({
      origin(origin, callback) {
        if (!origin) {
          return callback(null, true);
        }

        if (config.allowedOrigins.includes(origin)) {
          return callback(null, true);
        }

        return callback(new ApiError(403, `Origin ${origin} is not allowed by CORS`));
      },
      credentials: true,
    }),
  );
  app.use(express.json({ limit: "50kb" }));

  app.get("/", (req, res) => {
    res.json({
      success: true,
      data: {
        name: "Accredian Enterprise API",
        status: "running",
      },
      error: null,
    });
  });

  app.use("/api", apiRouter);
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
