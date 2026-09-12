# End-to-end evidence

Machina Practica evidence contract: **1.0.1**. Profile: web-playwright, with a production Node server and independent browser actors. The shared `@machinapractica/testing@0.1.0-alpha.0` recorder emits its versioned **1.0.0 receipt schema**; this surrounding policy and the legacy scaffold receipts remain distinct.

## Canonical environment

macOS 26.5.2 (25F84), arm64; Node 24.18.1, npm 11.16.0, Playwright 1.63.0 and its locked Chromium; locally bundled Newsreader 5.3.0. Viewports: phone 390×844 and desktop 1280×800, scale 1, en-CA, America/Toronto, dark color scheme and reduced motion. Exact browser/OS/source/artifact identities accompany each scenario. These are browser viewports, not physical-device evidence.

`dist/build.json` contains the full source SHA, public asset hashes and a shared `hashArtifact` digest over the production tree (including server files). The build refuses a dirty tree. The package's full manifest API requires an HTTPS repository identity, unavailable for this local-only repository, so the project retains its explicit local manifest format and uses the shared hashing API.

## Complete command and retained results

```sh
npm run verify
```

The verifier installs locked packages without lifecycle scripts, builds production output, runs all Node rule/API/storage contracts, installs Chromium, launches the production server, and runs every browser scenario. A failed required step fails the command and retains earlier evidence. Each command has a 240-second bound. Server startup is bounded at 15 seconds; scenario/assertion/recorder deadlines are explicit. Playwright owns and cleans up the launched server and retains multi-context traces.

A new revision first needs `npm run verify -- --candidates`. Inspect **every capture** in that run, then acknowledge the completed inspection:

```sh
node scripts/review.mjs PATH_TO_CANDIDATE_RUN 'reviewer name' --pixels-reviewed
npm run verify
```

The normal verifier requires separately reviewed hashes and source/platform identity, then compares decoded RGBA with zero different pixels. No masks, fuzzy thresholds or automatic approvals. A second capture also checks immediate presentation determinism. New source revisions need new candidates because the visible source text changes. Candidate runs prove executed semantics but do not imply visual approval.

`evidence/latest.json` locates the newest run. Each revision/date directory contains install/build/unit/browser logs, overall `verifier.json`, scenario PNGs and `receipt.json`, generated `walkthrough.md`, and the Playwright report/traces. Partial failed steps remain failed. Review records and images live in `evidence/baselines/REVISION/`. The earlier scaffold and milestone results are retained. Parent race reproductions and before/after outputs live in `evidence/reviews/`.

## Executed scenario boundaries

- **Lobby:** ordinary create/join, separate storage, keyboard entry, reload, connection loss and rejoin.
- **Dive:** start through the host control, accepted roll with interrupted reply, reload and explicit idempotent retry, then ordinary alternating controls through a complete first dive.
- **Loss:** continue outward and collect until oxygen is exhausted, finish that turn, then each stranded owner orders and confirms their lost units.
- **Match:** ordinary create/join/start, all three dives with retained banked scores, final results, a rematch with a new swimmer, and a real opening turn in game two.
- **Reordering:** hold an actual old poll while a newer joined roster arrives, then release the delayed success or transport failure; a DOM observer catches any transient roster/connection regression.

Each recorder step executes its stated public interaction, asserts its result, waits for fonts/animations with deadlines, then captures relevant actor views. Walkthroughs come from the executed receipts. Browser projections are observed through the public read API where the scenario needs to identify the active actor; all gameplay mutations use visible controls. Fixtures only seed server randomness at process launch, never completed user actions.

Browser network is restricted to `http://127.0.0.1:4179`. All WebSockets are rejected and service workers blocked. Expected transport interruption is scoped to its recovery scenario. Tokens use separate actor storage and are absent from artifact names/captures. Each verifier run has its own server data directory and deterministic seed; production uses cryptographic randomness. No external service, game clock or account is required.

Node contracts cover exact components, occupied/zero movement, no reversal, oxygen-ending turn, stacks and ordering, hidden projections, banking, next starter, ties, empty paths, rematch and 32-tile conservation across deterministic full games. Public API contracts cover capacity, unauthorized/stale/duplicate/overlapping requests, reload from disk, unknown-schema refusal and failed storage commits. Static asset checks verify hashes and unavailable private paths.

## Delivery and limits

The included read-only CI workflow runs candidate checks on Ubuntu 24.04 and retains source-named evidence plus the built artifact, even on failure. It has not run remotely. Linux candidates do not replace Mac baselines. No remote repository or deployment is configured.

Other engines, physical phones, actual LAN/firewall behavior, hostile-network security, full accessibility conformance and public hosting remain unverified. The app has no offline-play promise. Losing browser storage loses that browser's seat token; a disconnected player pauses their turn. There is no migration claim for histories that did not exist before this implementation.
