import type { Context, Next } from "hono";
import auth from "../lib/auth-cli";

export const withAuth = () => async (c: Context, next: Next) => {
  const session = await auth.api.getSession(c.req.raw);
  c.set("session", session);
  await next();
};
