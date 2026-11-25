# Launch checklist (owner actions)

## 1. Host (Vercel, free Hobby plan)
- Import the GitHub repo, production branch = the branch you launch from (not an old `main`).
- Framework: Next.js. Node 20.

## 2. Environment variables (Project > Settings > Environment Variables)
| Name | Where to get it |
|---|---|
| `DATABASE_URL` | Neon dashboard > Connection string > **Pooled** connection. End it with `?sslmode=verify-full` |
| `NEXTAUTH_URL` | Your live site URL, e.g. `https://yourdomain.com` |
| `NEXTAUTH_SECRET` | Run `openssl rand -base64 32` (any long random string) |
| `GEMINI_API_KEY` | Google AI Studio |
| `GROQ_API_KEY` | console.groq.com |
| `FOUNDER_CODE` | Choose a long random code only you know |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Google Cloud Console > Credentials |
| `GITHUB_ID` / `GITHUB_SECRET` | GitHub > Settings > Developer settings > OAuth Apps |
| `NEXT_PUBLIC_CONTACT_EMAIL` | The support email candidates can write to about a proctoring review |
| `JOOBLE_API_KEY` (optional) | Only if you use that job source |
| `REQUIRE_LOGIN_FOR_AI=true`, `AI_DAILY_CALL_CAP=150` (recommended on free AI keys) | See `docs/rate-limits.md` |

Check the exact variable names against `.env.example`.

## 3. OAuth redirect URLs (production)
- Google: `https://YOUR-DOMAIN/api/auth/callback/google`
- GitHub: `https://YOUR-DOMAIN/api/auth/callback/github`

## 4. Secrets
- **Rotate the GitHub OAuth secret that was pasted in chat earlier** (GitHub > OAuth App > Generate new client secret), then update `GITHUB_SECRET`.
- Never commit `.env*` or `.data/`. `.data/store.json` once got committed to old `main` history; decide whether to purge it.

## 5. AI keys are free tier
No spend can be run up, but daily quotas are small (roughly 5-15 active users per day). Check the limits in Google AI Studio and Groq console. Add a paid Gemini key before any public push.

## 6. Database
- Run once: `npx tsx scripts/seed-problems.ts zomato|google|accenture|amazon` (with `DATABASE_URL` set locally). Verify: `select * from dz_problem_tree where company = 'Google';`
- Neon free keeps limited point-in-time history; export a manual backup before launch (`pg_dump` of the pooled/direct string).

## 7. Legal
- Replace `{{CONTACT_EMAIL}}` in `src/app/privacy/page.tsx` and `src/app/terms/page.tsx`, remove the "Draft" notices after a review.

## 8. Smoke test on the live URL
Sign up with email (10+ char password), sign out and in, Google and GitHub login, open a company track, run a proctored round (camera and mic prompts), send chat and Neo messages, `/hiring-alerts`, `/profile` (download data, delete a throwaway account), `/privacy`, `/terms`, `/founder` with your code.

## 9. Rollback
Vercel > Deployments > pick the last good one > Promote to Production. Code rollback: `git revert <merge-commit>`.

## Later work (not done)
Email verification and password reset, error monitoring (Sentry), load testing, zod validation on every JSON route.
