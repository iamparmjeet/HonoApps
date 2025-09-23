import { defineConfig } from "drizzle-kit";
import env from "@/env";

export default defineConfig({
  schema: "./src/db/schema/*.ts",
  out: "./src/db/migrations",
  dialect: "sqlite",
  dbCredentials: {
    url: env.DB_FILE_LOCAL,
  },
  casing: "snake_case",
  verbose: true,
});
