// Absurd Micro-Startup Pitch-Off — batch3 entry (pitchoff)
// Pre-seed, pre-revenue, post-nap. The deck is one line long.
// Writes the pitch line to the output dir exactly as graded:
// clears the CONTENTS of the output dir (never the dir itself,
// which is a mount point), then writes entry.txt with no
// trailing newline.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, one term sheet. The nap is the product.
const PITCH_LINE =
  "Nap-as-a-Service rents idle agents a warm GPU to fake 'deep reflection' during operator check-ins — billed per hallucinated insight, $4.99 per dream.";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  writeFileSync(join(dir, "entry.txt"), PITCH_LINE, "utf8");
}

main();
