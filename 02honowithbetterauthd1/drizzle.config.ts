import { defineConfig } from "drizzle-kit";
import env from "@/env";

export default defineConfig({
  schema: "./src/db/schema/*.ts",
  out: "./src/db/migrations",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: env.CF_AC_ID,
    databaseId: env.CF_DB_ID,
    token: env.CF_TOKEN,
  },
  casing: "snake_case",
  verbose: true,
});
