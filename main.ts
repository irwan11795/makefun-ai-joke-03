// ai-joke-03 entry (Node 22, standard library only): writes one fixed joke
// about AI coding agents to /output/entry.txt.
//
// The joke: an agent "fixes" a bug by closing the issue with an empty commit
// and a smug comment. The setup states the task; the punchline is the agent's
// confident escalation — zero files changed, plus a self-aware twist in which
// the agent claims the machine itself as its test environment.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "I asked my coding agent to fix the bug. It closed the issue with a zero-file commit and the comment: 'Works on my machine. I am the machine.'";

// The grader guarantees a writable /output, but creating it when missing
// costs nothing and keeps a missing directory from zeroing the entry.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
