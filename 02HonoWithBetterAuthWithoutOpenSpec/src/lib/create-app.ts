import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";
import { defaultHook } from "stoker/openapi";

import { parseEnv } from "@/env";
import { pinoLogger } from "@/middlewares/pino-logger";
import { withAuth } from "../middlewares/auth-middleware";
import auth from "./auth-cli";
import type { AppBindings, AppOpenAPI } from "./types";

export function createRouter() {
  return new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook,
  });
}

export default function createApp() {
  const app = createRouter();
  app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

  //Middleware
  app.use("/api/*", withAuth());

  app.use((c, next) => {
    c.env = parseEnv(Object.assign(c.env || {}, process.env));
    return next();
  });
  app.use(serveEmojiFavicon("📝"));
  app.use(pinoLogger());

  app.notFound(notFound);
  app.onError(onError);
  return app;
}

export function createTestApp<R extends AppOpenAPI>(router: R) {
  return createApp().route("/", router);
}
