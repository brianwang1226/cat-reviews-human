import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "One star. The food arrives late, the lap is often occupied by a glowing rectangle, and the human sleeps through my 3 a.m. concert.";

// The gate allows under 200 characters; refuse to write an over-long text.
if (line.length < 1 || line.length >= 200) {
  throw new Error(`entry text is ${line.length} characters, must be under 200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
