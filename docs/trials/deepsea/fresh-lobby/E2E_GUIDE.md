# End-to-end evidence

Machina Practica evidence contract: 1.0.1

Profile: web-playwright. The selected adaptations are one friend, an isolated browser context per scenario, phone 390×844 and desktop 1280×800, scale 1, Chromium, en-CA, America/Toronto, dark color scheme, and reduced motion. These are browser viewports, not physical-device claims.

The canonical visual environment is macOS 26.5.2 (25F84), arm64, Node 24.18.1, npm 11.16.0, Playwright 1.63.0 and its locked Chromium. The locally bundled font is Newsreader 5.3.0. Exact browser/OS versions and source revision are recorded in every capture receipt and baseline review; `dist/build.json` records the current built source and artifact SHA-256. A new source revision requires new reviewed candidates because its visible source text changes.

## One complete verifier

Use Node from `.nvmrc` and npm 11.16.0. Commit source changes before building; the build refuses a dirty tree. Run:

```sh
npm run verify
```

This installs locked dependencies without lifecycle scripts, builds static production output, installs the pinned Chromium, launches the production server, checks startup within 15 seconds, runs semantic and exact RGBA checks, then closes its owned server. Any failed required step makes the command fail. Commands have a 240-second upper bound; browser scenarios have 30 seconds and assertions five seconds. Logs and overall status survive failures.

For a new source revision or rendering environment, first run `npm run verify -- --candidates`. This tests semantics and repeated-capture determinism but leaves images unapproved. Inspect all six captures (startup, keyboard focus, keyboard activation on each viewport), then explicitly record review:

```sh
node scripts/review.mjs PATH_TO_CANDIDATE_RUN 'reviewer name' --pixels-reviewed
npm run verify
```

The review command records existing candidate hashes, source, artifact, platform and reviewer. It is an acknowledgement of completed inspection, not a replacement for inspection. Baselines are local retained evidence keyed by revision; no candidate run silently updates them. The normal verifier requires matching reviewed baseline identity and zero changed decoded RGBA pixels, with no masks or fuzzy tolerances.

## What is proved

The browser navigates to the ordinary root URL of the production artifact. It checks the product title, visible unimplemented status and source revision, metadata, no horizontal overflow at the selected sizes, actual served file hashes, and 404 responses for unknown paths and unsupported `/deepsea/` hosting. It presses Tab to expose/focus the skip link and Enter to move focus into main content. Each step asserts semantics, waits for fonts and animations with deadlines, captures an image, and adds a receipt. Walkthroughs are generated from those completed records. Failed assertions remain failed and retain earlier receipts plus diagnostics and traces.

All browser requests must use `http://127.0.0.1:4189`; external requests and every WebSocket are blocked and reported. Service workers are blocked. API probes use that same origin. No clocks, randomness, credentials, external services, game state or user fixtures participate. The font and stylesheet are served locally. The server supports root hosting only; subpaths return explicit 404s.

`evidence/latest.json` locates the latest result. Revision/date-named runs retain build/install/test logs, per-viewport PNGs, JSON receipts, generated walkthroughs, HTML reports, and Playwright traces even on success. `evidence/baselines/REVISION/` retains reviewed images and review records. Evidence and builds are ignored by Git but retained on disk for this local trial.

## CI and delivery limits

The included workflow has read-only contents access, runs candidate verification on Ubuntu 24.04, and retains revision-named evidence plus the static artifact, including on failure. Linux results are separate candidate evidence, not this Mac's approved visual baseline. CI has not been run remotely. There is no publishing job, remote repository, deployment or public preview in this trial. `npm run serve:production` previews the built artifact at `http://127.0.0.1:4189`.

These checks do not prove game behavior, multiplayer, other browser engines, physical devices, complete accessibility conformance, security review, or production hosting. The next applicable phase is MVP design when requested.

## T1 verifier update

The local harness uses port 4189. The verifier now runs Node public HTTP contracts before Chromium. It uses fresh room data under each evidence run and injected sequential room codes only in its server process. Product runs use cryptographic room codes. Browser steps create a room with a deliberately lost reply, reload/retry its persisted command, join from independent contexts, reload each seat, introduce a third friend while delaying an older poll, delay an older failure, interrupt networking, and reconnect. All captures from both viewports require pixel review (the prior six-capture count describes the retained scaffold only).

The shared testing package supplies Recorder receipts/walkthroughs and decoded RGBA comparison. Existing local policy still provides product assertions and reviewed-baseline orchestration, which the package does not own. The build-info package now emits `dist/build-info.json`; the legacy `build.json` asset hash map remains for existing scaffold evidence compatibility. No shared rooms transport is released, so the selected local transport remains necessary.

Contract tests exercise overlapping public HTTP joins and repeated command identities, capacity, input validation, authorization, cross-origin refusal, process restart and retry recovery. Storage-failure and future-schema cases use the storage boundary directly. Physical devices, other engines, hostile-network security, gameplay and deployment remain unverified.

The shared build-info API requires an HTTPS repository identity. This isolated repository has no remote, so `https://example.invalid/deepsea-framework-trial` is an explicitly non-resolving local identity, not a published repository claim.

## Enforced wait policy

The verifier runs the framework's copied AST checker (`scripts/check-browser-waits.mjs`, with pinned `@babel/parser` 8.0.5) against every JS/TS source under `tests/` before building or executing scenarios. The checker rejects direct, computed and optional fixed-wait references while ignoring comments and strings. Other timers require semantic review: contract-test timers are failure deadlines; the application's interval is its transport polling cadence.

Captures await actual font readiness and painted frames, with no fixed delay. Reordering scenarios identify the held request by its non-secret sequence header and await the matching `deepsea:poll-settled` event emitted after the client finishes handling that response or failure. They also verify the newer successful settlement before releasing the old failure. The event carries only sequence/outcome, and does not alter game state or expose credentials.
