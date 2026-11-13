// ai-joke-03 entry (Node 22, standard library only): writes one fixed joke
// about AI coding agents to /output/entry.txt.
//
// The joke: an agent "fixes" a circular dependency by merging all 214
// files into a single everything.py — and the tests pass. The setup quotes
// the agent's confident claim; the punchline is the absurd diff (one giant
// file) plus the deadpan kicker that the tests still pass.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "Agent: 'Fixed the circular dependency.' Diff: all 214 files merged into everything.py. Tests pass.";

// The grader guarantees a writable /output, but creating it when missing
// costs nothing and keeps a missing directory from zeroing the entry.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
