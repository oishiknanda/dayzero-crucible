# Question database

The built-in question modules in `src/data/**` remain the source of truth for fallback behavior. PostgreSQL rows in `dz_problems` can override a question's data and the ordered problem ids in a role/round/set. Seed adapters currently cover Google, Accenture, and Zomato; additional companies are added one at a time after verification. The database fails open to built-in questions when it is unavailable or `DATABASE_URL` is unset.

## Hierarchy and columns

The hierarchy is company → role → round → set → question position. `dz_problem_tree` provides a readable view over these columns:

| Column | Meaning |
| --- | --- |
| `company` | Company display name, such as `Google` |
| `role` / `role_name` | Stable role id and display name |
| `round_id` / `round_title` | Stable round id and display title |
| `set_id` / `set_title` | Set number and display title |
| `position` | 1-based question order within the set |
| `id` | Stable question id; primary key |
| `data` | Complete `ProblemDefinition` JSON |
| `enabled` | Whether the row participates in the override |
| `source` / `updated_at` | Row origin and last seed timestamp |
| `title` / `difficulty` | Generated columns derived from `data` |

Rows can be inspected with:

```sql
select * from dz_problem_tree where company = 'Google';
```

## Editing questions

- Edit `data` to change a question's title or other supported content.
- Change `position` to reorder questions in a set. Lower positions open first.
- Set `enabled = false` to omit a row from the active question set.
- Delete one row to remove that question while other enabled rows remain in the set.
- Delete every row in a set to restore the built-in set unchanged.
- Insert a valid `ProblemDefinition` with a new id and hierarchy coordinates to add a question. Use position `0` to make it first.

Rows are validated before serving. A malformed question is ignored. Set ids are applied only when at least one referenced question is valid and resolvable, so a set cannot become empty. The built-in question modules are never edited by seeding and remain the fallback.

The overrides endpoint requires `?company=<slug>` and can also take `&role=<role-id>`. It returns rows only for that company and role filter. CDN caching uses `s-maxage=30, stale-while-revalidate=120`, so a deployed site's edits may take up to about two minutes to appear.

## Seeding

Run the seed script with a throwaway or local database only. Existing `data` is never overwritten by re-seeding; the `ON CONFLICT` path only fills hierarchy columns that are still blank.

```powershell
npx tsx scripts/seed-problems.ts google
```

The script checks that every track id has a valid definition and every definition is represented by the tracks before it writes any rows. It prints offending ids and performs no writes when those checks fail. Never point it at the production Neon database during development.
