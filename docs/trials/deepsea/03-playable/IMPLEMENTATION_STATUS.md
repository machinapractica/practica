# Implementation status

**T1, T2 and T3 are implemented and functionally verified.** The local game supports separate-browser rooms, authoritative turns, loss ordering, all three dives, scoring and a fresh game with retained seats. The final functional run below passed 18 Node contracts and 10 browser scenarios. The newest source-bound verifier result is [evidence/latest.json](evidence/latest.json); its `mode` distinguishes candidates from reviewed exact-pixel verification. Review records live under `evidence/baselines/`.

| Milestone | Actual outcome | Evidence |
| --- | --- | --- |
| T1 | Create/join/reload/reconnect; durable seats; overlapping joins preserve every accepted player | Corrected run `11e2c0c/2026-09-12T16-00-40.022Z`: 3 Node contracts, 2 browser scenarios passed |
| T2 | Complete first dive; hidden projections; rule edges; stale/duplicate/overlapping commands; monotonic views under delayed transport | Corrected run `6f7ff59/2026-09-12T16-07-18.690Z`: 12 Node contracts, 6 browser scenarios passed |
| T3 | Three dives, bank retention, points/level-4/shared-tie scoring, rematch and opening turn of game two | Run `aa6baa0/2026-09-12T16-10-17.188Z`: 17 Node contracts, 8 browser scenarios passed |
| Final recovery acceptance | Lost accepted-action reply, reload and idempotent retry; actual oxygen exhaustion/loss-order UI; static hashes and private-path refusal | Run `51ee417/2026-09-12T16-13-41.845Z`: 18 Node contracts and all 10 phone/desktop scenarios passed |

Paths above abbreviate source revisions; full revision/date directories remain under `evidence/runs/`. These recorded runs were candidates. Source-bound review and subsequent exact RGBA comparison are separately recorded by the verifier and review tooling, not inferred from these rows.

## Retained failures and corrections

- `dce48d5/2026-09-12T15-59-02.750Z`: Node contracts passed; browser harness failed because tracing was already owned by Playwright. Removed duplicate tracing control; `dd5bc0b/2026-09-12T15-59-29.166Z` passed 2 Node and 2 browser scenarios.
- Parent concurrency review invalidated the earlier sequential acceptance: two overlapping joins returned 201 but one player was lost. `evidence/reviews/concurrent-join-before.json` preserves the failure; `concurrent-join-after.json` preserves the correction. Input collection now finishes before synchronous read/validate/apply/persist. Later contracts cover overlapping joins and conflicting/idempotent commands.
- `3fe8e9b/2026-09-12T16-05-31.510Z` passed 12 Node and 4 browser scenarios, but parent review exposed late-poll visual rollback. `evidence/reviews/stale-view-before.json` records rollback; `stale-view-after.json` records no rollback after monotonic revision and request-settlement handling. Delayed success and failure tests now check transient regressions.

Every verifier invocation retains its logs, receipts, screenshots and traces, including failures. The accepted scaffold remains available at `cf1e39e`; initial vision outputs at `9c6824a`. VISION.md and RULES_SUMMARY.md are unchanged by the playable-game work.

No remote writes, deployment or external service were used. CI is defined but unexecuted remotely. Physical devices, LAN/firewalls, other browser engines and public-hosting security remain unverified. A disconnected player pauses their turn; seat tokens are recovered only in the original browser storage. No implementation-plan work remains for this local trial.
