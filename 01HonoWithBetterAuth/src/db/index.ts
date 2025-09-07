import { drizzle } from "drizzle-orm/d1";
import type { Environment } from "@/env";
import * as schema from "./schema";

export function createDB(env: Environment) {
  const db = drizzle(env.CF_D1_DB_ID, {schema, casing: "snake_case"})
  return {db}
}

export type Database = ReturnType<typeof createDB>["db"]