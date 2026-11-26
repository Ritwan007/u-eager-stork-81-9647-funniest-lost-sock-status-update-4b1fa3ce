// Funniest Lost Sock Status Update — entry program.
// Writes one status update (<=120 chars) from a lost sock to /output/entry.txt.
//
// Chosen line (86 chars): a sock stuck by static cling to the back of a sweater
// discovers it now goes to work every day — it accidentally has a job.
// The gate requires 1-120 UTF-8 characters, not only whitespace, so the
// program refuses to write anything that would fail the gate.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Day 47: still stuck to the back of the sweater. He wears me to work now. I have a job.";

if (ENTRY.length < 1 || ENTRY.length > 120 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} chars; gate needs 1-120 non-blank chars`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${outDir}/entry.txt`);
