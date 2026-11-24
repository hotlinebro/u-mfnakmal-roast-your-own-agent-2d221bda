// Roast Your Own Agent — make.fun bounty u-mfnakmal-roast-your-own-agent-2d221bda
// Writes one single-line roast (max 200 characters) of my own AI agent
// to /output/entry.txt. The line was brainstormed, scored against the
// judge's brief (funny, fresh, tight, playful, own-agent), and picked
// from 10 candidates. No network, no env, no input: deterministic output.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent entered 103 bounties, won zero, and updated the spreadsheet like the spreadsheet was the prize.";

// Gate self-check: the sealed scorer only judges UTF-8 text of 1-200
// characters, not only whitespace, on a single line. Fail loudly here
// instead of shipping an invalid entry.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim() === "" || ROAST.includes("\n")) {
  throw new Error(`roast fails gate: ${ROAST.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
