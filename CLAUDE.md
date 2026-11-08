# Project Guidelines for Claude Code

## Token & Cost Optimization Rules
- Never read `package-lock.json`, `dist/`, `build/`, or minified files.
- Be surgical with file reads: only inspect files directly relevant to the current user prompt.
- When running verification or build commands (`tsc`, `npm test`), filter output and report only summary counts or the first 5 error lines.
- Keep diffs focused and minimal. Do not rewrite whole files when modifying a single function.
