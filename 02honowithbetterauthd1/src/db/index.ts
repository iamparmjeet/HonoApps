import { drizzle } from "drizzle-orm/d1";
import * as schema from "@/db/schema";
// import type { Environment } from "@/env";

// export interface ExtendedEnv extends Environment {
//   CF_DB: D1Database;
// }
export function createDB(env: { CF_DB: D1Database }) {
  return drizzle(env.CF_DB, {
    casing: "snake_case",
    schema,
  });
}
export type Database = ReturnType<typeof createDB>;
