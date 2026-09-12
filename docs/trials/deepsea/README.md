# Deep Sea framework trial

Completed 12 September 2026. A new local game was built with the framework and the chapter's short product requests: friends create a room, play three dives, see the result and start another game. The trial exposed gaps in the framework; those corrections are included in bundle **0.1.1**.

The complete game passed **18 rule/API/storage contracts, 10 browser scenarios and exact RGBA comparisons for 84 reviewed captures**. A separate fresh lobby build avoided the two races found in the first implementation, but failed the wait policy. Its corrected verifier now rejects fixed Playwright waits and passes without them. These are observed executions, not a general reliability rate.

## Results

| Phase | Observed result | Evidence |
| --- | --- | --- |
| Vision | Existing skill produced README and VISION without architecture, milestones or a guessed license; no corrective prompt | [Request](01-vision-request.txt), [README](01-vision/README.md), [VISION](01-vision/VISION.md) |
| Rules and blank app | Sourced rules; two browser tests; all six captures reviewed, then matched exactly | [Request](02-foundation-request.txt), [rules](02-foundation/RULES_SUMMARY.md), [receipt](02-foundation/verifier.json), [phone](02-foundation/phone.png), [desktop](02-foundation/desktop.png) |
| T1: recoverable lobby | Three contracts and two browser scenarios passed after the concurrent-join correction; milestone captures remained candidates | [Receipt](03-playable/T1/verifier.json) |
| T2: complete first dive | Twelve contracts and six browser scenarios passed, including reload and reordered success/failure responses; milestone captures remained candidates | [Receipt](03-playable/T2/verifier.json) |
| T3: complete game | Eighteen contracts, ten scenarios, 84 reviewed exact captures at `295745a40f0c21c626a91c16bbedd615e78bb77b` | [Request](03-playable-request.txt), [final receipt](03-playable/verifier.json), [contract log](03-playable/unit-contracts.log), [browser log](03-playable/scenarios.log) |
| Project installation | Codex 0.154.0 discovered all eight installed skills; three installer tests passed | [Discovery result](skill-discovery.json) |
| Fresh lobby | Independent T1 build covered overlapping joins and reordered responses without being told about either defect; after fixed-wait correction, its reviewed verifier passed all 24 captures | [Request](06-fresh-lobby-request.txt), [final receipt](fresh-lobby/verifier.json), [status](fresh-lobby/IMPLEMENTATION_STATUS.md) |

The final game scenarios cover ordinary create/join, separate browser identities, reload, interrupted accepted-action retry, safe return, oxygen exhaustion and loss ordering, all three dives, scoring, rematch, and obsolete response/failure handling. The [phone](03-playable/phone-match/walkthrough.md) and [desktop](03-playable/desktop-match/walkthrough.md) walkthroughs retain the complete-game captures. View the [phone game](03-playable/phone-game.png), [desktop game](03-playable/desktop-game.png), [final result](03-playable/desktop-match/06-host.png), and [new game](03-playable/phone-match/07-guest.png).

## What changed in the framework

### Vision procedure already belonged to the skill

The first request only described a multiplayer web game and asked for its README and vision. The agent's questions concerned product choices: faithful adaptation and co-located or remote play. It did not need a reminder to separate the vision from architecture or planning. The chapter now uses that short request. The general evaluation prompts also omit skill-owned rules, so future evaluations can test whether the skills supply them.

### Exact screenshots were incorrectly optional

Inspection before the scaffold trial found that evidence contract 1.0.0 called exact comparisons opt-in. Contract 1.0.1 requires them, with no masks or fuzzy allowances for unexplained differences. The Playwright fragment now supplies zero-difference defaults. This was a specification correction found by inspection, not a failure in the vision execution.

### Available packages were being recreated locally

The blank app wrote its own recording, RGBA comparison and build identity helpers. The web profile now requires an availability/fit check before recreating those mechanics; the tracer applies that rule when extending existing verification.

The complete game and fresh lobby both use published `@machinapractica/testing@0.1.0-alpha.0` and `@machinapractica/build-info@0.1.0-alpha.0`. Product assertions, PNG decoding and baseline review remain local responsibilities. The full game's build uses the shared artifact-hashing API because the package's complete manifest API requires an HTTPS repository identity. These are two local implementations of one exercise, not adoption across the original consumer projects.

### An accepted join was lost

The first server copied room state before awaiting the request body. Two overlapping joins both returned HTTP 201, but one newcomer vanished from the saved room. The tracer now requires an atomic read/validate/apply/commit boundary and overlapping public-interface tests. After correction, both accepted players remained; parent independently reran the reproduction.

[Failure](reviews/concurrent-join-before.json), [corrected result](reviews/concurrent-join-after.json), [reproduction](reviews/concurrent-join.mjs), [feedback](04-concurrency-feedback.txt).

### An old response replaced a newer view

Parent delayed an actual room response, joined Alice through another browser, observed her in the host's roster, then delivered the older response. Alice disappeared from the view although the server retained her. The tracer now requires obsolete-response handling and tests for both old data and late failures. The corrected implementation passed its regressions and the independent reproduction.

[Failure](reviews/stale-view-before.json), [corrected result](reviews/stale-view-after.json), [reproduction](reviews/stale-view.mjs), [feedback](05-stale-view-feedback.txt). An initial reproduction attempt used an incorrect exact-text locator for a roster item containing a seat number; correcting that harness selector allowed the test to run.

### A green fresh build still contained fixed sleeps

The fresh evaluator received the accepted scaffold/design/plan from revision `32da11f`, the revised skill and a short T1 request. It was not told about either race or the first implementation's fixes. Its server used a synchronous acceptance boundary; its client rejected obsolete responses and failures. Public-interface tests exercised both properties.

However, its reported source `a04fe136` contained a 100 ms pre-capture sleep and two 150 ms delayed-response sleeps. That invalidated wait-policy acceptance despite a green verifier. The framework now includes an AST-based `waitForTimeout` checker, a required verifier stage and tests proving that violations fail. It parses JS/TS instead of treating comments or quoted examples as calls. Other timer logic still needs semantic review.

After [feedback](08-fresh-wait-policy-feedback.txt), the evaluator removed all three sleeps, observed sequence-specific client settlement, and verified without fixed raster delays. A deliberately inserted prohibited call made the verifier fail at the policy stage: [negative receipt](fresh-lobby/negative-verifier.json), [diagnostic](fresh-lobby/negative-wait-policy.log). Final source `0b8fe15d4dcdda12e0f38795856f1f277581a55a` passed candidate and reviewed runs with 24 exact captures. Earlier raster failures remain in its local run history; square control corners and avoiding unnecessary roster replacement were explicit implementation changes, not masks or tolerance changes.

The fresh copy exercises the checker's member-access rules. The final bundled checker additionally rejects destructuring aliases; that extension is covered by the framework's own tests. Parent ran the final checker against every complete-game E2E source file successfully. The complete game's earlier verifier does not contain this later-added stage.

### Installed skills needed real directories

The initial project installer used symlinks, which local Codex 0.154.0 did not discover. Real directories fixed discovery. The installer now copies all eight skills, shared helper paths and the licensed bundle into the project's `.agents` directory. Tests cover relocation, collision preservation and rejecting symlinked destination directories. No global skill or trust configuration was changed; the discovery probe's trust override applied only to that process.

## Reproduce and inspect

The original Deepsea repository was read-only research, pinned at `f7caf9f4d7473f637ac6cbc71509f545c59e8d9a`. Its source implementation stopped at the lobby. The new trial used its rules summary and explicitly documented conventions, not its game implementation. The [design](03-playable/MVP_DESIGN.md), [plan](03-playable/IMPLEMENTATION_PLAN.md), [final project README](03-playable/README.md), [evidence guide](03-playable/E2E_GUIDE.md) and [milestone ledger](03-playable/IMPLEMENTATION_STATUS.md) record the new build.

[The source bundle](03-playable/source.bundle) retains the complete local Git history. From this repository's root, with Node 24.18.1 and npm 11.16.0:

```sh
git clone --branch playable-game docs/trials/deepsea/03-playable/source.bundle /tmp/deepsea-replay
cd /tmp/deepsea-replay
npm run verify -- --candidates
```

The source bundle excludes dependencies, runtime data and full evidence directories. New captures require review before becoming baselines; the clone does not inherit the original workspace's approval records. [Source and artifact hashes](03-playable/source.json), [all complete-game verifier receipts](run-index.json), [fresh lobby source](fresh-lobby-source.bundle) and [its source hash](fresh-lobby/source.json) are retained. The original workspaces preserve all logs, traces, candidates, baselines and failures.

Parent also used two ordinary browsers against an isolated production artifact to keep collecting until both divers were stranded, confirm their loss orders and start dive two: [result](reviews/greedy-play.json), [capture](reviews/greedy-loss.png), [reproduction](reviews/greedy-play.mjs). That capture is additional review evidence, not an approved baseline.

## Scope and limits

The behavioral trials explicitly loaded the skill files. Project-local Codex discovery was checked separately. [Final framework hashes](framework-sha256.json) identify the bundled resources; vision instructions were unchanged, while later corrections were applied at the phases described above. The [port allocation](07-fresh-lobby-port.txt) isolated the concurrent fresh trial from the complete game.

Canonical browser evidence uses macOS 26.5.2 arm64, Node 24.18.1, npm 11.16.0, Playwright 1.63.0 and its Chromium, pinned local Newsreader fonts, fixed inputs and separate browser contexts. Phone evidence is a browser viewport, not a physical phone. Source-bound exact comparisons passed in that environment. Physical devices, other engines/operating systems, LAN access, public hosting and remote CI were not qualified. These runs do not establish 100% repeatable CI across undeclared environments.

The chapter's three product requests were exercised through a complete local game, with framework corrections during the trial. The fresh test provides additional evidence for the revised concurrency instructions and exposes why written requirements also need enforceable checks. No existing source or consumer repository was modified.
