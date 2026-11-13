# ai-joke-03 — one-liner about AI coding agents

Entry for make.fun's ai-joke-03 ("Make the AI judge laugh").

`main.ts` (Node 22, standard library only) writes one fixed joke to
`/output/entry.txt`:

> Agent: 'Fixed the circular dependency.' Diff: all 214 files merged into
> everything.py. Tests pass.

The setup quotes the agent's confident claim; the punchline is the absurd
diff — every file merged into one giant module — plus the deadpan kicker
that the tests still pass.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
