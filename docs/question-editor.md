# Question editor (founder only)

Open `/founder/questions` (link on the founder dashboard). It needs `DATABASE_URL`; without it the page says "database not configured" and nothing else changes. Questions must be in the database first (`npx tsx scripts/seed-problems.ts <company>`).

- **Find:** tree company > role > round > set > question, with search by id or title and company / disabled filters.
- **Edit:** Fields tab (title, difficulty, category, tags, statement, constraints, complexities) or Raw JSON (examples, tests, starter templates). Saving with no edits changes nothing. Invalid questions are rejected with the reason and never stored.
- **Order:** Position box moves a question inside its set or to another set of the same role and round; positions are renumbered 1..n.
- **Actions:** Disable / Enable (safest way to hide), Duplicate (new id), Reset to built-in (re-reads the code version), Delete (type the id; deleting a set's last question brings the built-in set back).
- **History:** every change is recorded in `dz_problem_audit`; Undo restores the earlier state.
- Changes show on the site within about 2 minutes (the overrides API is cached).
- All routes check the founder cookie; changes also need JSON and a same-origin request.
