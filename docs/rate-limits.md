# Rate limits

Counters live in Postgres (`dz_rate_limits`) when `DATABASE_URL` is set, otherwise in memory. If the counter cannot be read the request is allowed (fail open).

Defaults per 10 minutes (signed-in per user / anonymous per IP): chat 120 / 40, Neo 120 / 40, debug assistant 60 / 20, transcribe 60 / 15, resume 20 / 15. Signup: 5 per hour per IP and 3 per hour per email. Login: 10 per 10 min per email, 100 per 10 min per IP.

Change any value with `RL_<SCOPE>_USER` / `RL_<SCOPE>_ANON` (see `.env.example`). `REQUIRE_LOGIN_FOR_AI=true` makes chat, debug and transcribe need sign-in (Neo stays open). `AI_DAILY_CALL_CAP=N` caps total AI calls per UTC day. A blocked call returns HTTP 429 with `Retry-After`; the message is in both `error` and `reply`, which the existing screens already display.
