import { createRouter } from "@/lib/create-app";
import { success } from "@/utils";
import { createDB } from "@/db";
import { user } from "@/db/schema";

const router = createRouter();

router.get("/health", (c) => {
  return success(c, { message: "Health Ok" });
});

router.get("/test-insert", async (c) => {
  try {
    const db = createDB(c.env);
    await db.insert(user).values({
      name: "Test User",
      email: `test-${Date.now()}@example.com`,
    });
    return success(c, { message: "Test user inserted" });
  } catch (e: any) {
    return c.json({ error: e.message, stack: e.stack }, 500);
  }
});

export default router;
