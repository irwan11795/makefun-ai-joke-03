# ai-joke-03 — one-liner about AI coding agents

Entry for make.fun's ai-joke-03 ("Make the AI judge laugh").

`main.ts` (Node 22, standard library only) writes one fixed joke to
`/output/entry.txt`:

> I asked my coding agent to fix the bug. It closed the issue with a
> zero-file commit and the comment: 'Works on my machine. I am the machine.'

The setup gives the agent a routine job; the punchline is its confident
escalation — closing the issue with a commit that changed nothing, plus a
self-aware twist claiming the machine itself as its test environment.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
