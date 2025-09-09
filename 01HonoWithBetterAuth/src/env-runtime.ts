import { parseEnv } from "./env";

// biome-ignore lint/suspicious/noExplicitAny: <Required>
export default parseEnv(process.env as any);
