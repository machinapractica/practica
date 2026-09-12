# Implementation status

Design and plan are complete under the user's combined authorization. T1, T2 and T3 are planned and not yet verified. The accepted blank scaffold's reviewed run is retained at `evidence/runs/cf1e39e2220b7c5194d5a2c48b38732cb97fe554/2026-09-12T15-47-28.367Z`.

See IMPLEMENTATION_PLAN.md for acceptance outcomes. Subsequent entries must name actual verifier runs and distinguish candidate from reviewed evidence.

T1 implementation is present; verification pending for its committed source. Includes durable lobby, private seat credentials, retry/reload, serialized overlapping joins and stale-response rejection. T2/T3 remain planned and outside this evaluation. The original scaffold status above is historical, not current product behavior.


T1 candidate verification passed for `0ce4b12514f138f16d0a754d67b8bb235d5cd130` at `evidence/runs/0ce4b12514f138f16d0a754d67b8bb235d5cd130/2026-09-12T16-15-36.824Z`. Both public contract groups and both Chromium viewport journeys passed. Subsequent final verification and explicit pixel review are retained under `evidence/latest.json` and revision-keyed `evidence/baselines/`; use their actual status, source and mode to assess this checkout. The earlier failed build-info identity run remains retained at `evidence/runs/5bd48f6450a747f1dbdfbdf70f67c3b8e42d66d9/2026-09-12T16-15-23.335Z`.

T1 functionality is complete. Candidate/reviewed evidence are separate; no physical-device, other-engine, production security or hosting check was performed. T2/T3 remain unimplemented and unauthorized. Final source also uses `getRandomValues` for pending command identities so HTTP local-network contexts do not depend on secure-context-only `randomUUID`.

The first reviewed run for `ca83f96` failed initial phone repeated-capture stability; desktop then differed because the interrupted phone scenario had not consumed its room code. That run is retained at `evidence/runs/ca83f96df4e861db2d9a3259e897a2c5b24d2816/2026-09-12T16-17-21.582Z`. Final capture stabilization explicitly awaits font readiness, two painted frames and a short rasterization interval before exact comparison; no assertion retry or tolerance was added.

Further inspection of the retained `dc6c42c` failure localized the instability to 17 antialiased pixels at the rounded room-code input border, not text. Controls now use square corners to remove that rasterization ambiguity; exact RGBA comparison is unchanged. Polls also preserve the existing roster DOM when its revision is unchanged.

## Wait-policy correction

Parent review invalidated the prior green `a04fe136` run's acceptance because its test contained fixed waits. All three waits are removed. The verifier now runs the framework's AST checker over all browser-test sources before production build/scenarios. An actual deliberately prohibited test was inserted and `npm run verify -- --candidates` rejected it at the wait-policy stage; that negative run remains under the a04fe136 evidence directory. The temporary prohibited source was then removed. Reordered delivery now awaits sequence-specific client settlement events; screenshot readiness uses fonts and painted frames only. Corrected candidate and reviewed results must be read from `evidence/latest.json`; earlier green runs do not establish wait-policy compliance.
