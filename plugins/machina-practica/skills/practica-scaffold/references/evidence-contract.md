# Machina Practica evidence contract 1.0.0

Record `Machina Practica evidence contract: 1.0.0`, the selected profile, project adaptations, canonical baseline environment, and current source revision in E2E_GUIDE.md. Preserve project-specific scenario maps when upgrading the contract.

A scenario proves only the interactions and assertions it actually executes on the tested artifact. It does not prove physical hardware, production credentials, security review, accessibility conformance, or other engines by implication.

## One step, one receipt

Execute ordinary action → bounded observable readiness → semantic assertion → deterministic presentation stabilization → capture → documentation. Generate the walkthrough from completed step records, not a second hand-maintained list. A failed assertion must not acquire a passing receipt. Retain partial successful steps and failure diagnostics with an overall failed status.

Each capture records contract version, scenario, step, actor, viewport/device, platform, source revision, artifact/build identity when available, relative path, and content hash. Numbering is assigned by the helper, not hand-maintained at call sites. Keep scenario output directories separate between concurrent workers. Avoid private values in artifact names or receipts.

## Determinism and isolation

Inject fixed clocks/seeds where application behavior uses them. Use event/state readiness with a deadline and useful last-observation diagnostics; no arbitrary sleeps or retries that hide failures. Bound font/animation readiness too. Do not convert detached animation errors into blanket success. Avoid a global no-scroll or fixed-touch-target rule: the product decides those policies.

Bundle test-critical fonts/assets, isolate temporary storage per scenario, and use local fixtures or emulators. Declare allowed network origins/endpoints and assert violations. Network interception must account for service workers and WebSockets or explicitly report what it cannot observe. Multi-actor scenarios need separate contexts and assertions for each viewer's permitted information. Browser fixture setup must not perform the action claimed by the scenario.

## Production and visual evidence

Build and launch the release/production artifact with the same public entry point used by people. Expose its source identity. Use one documented verifier that propagates failures and retains logs, screenshots, traces, and native result bundles even on failure. Readiness checks need deadlines; launch failures must clean up owned processes.

Choose canonical phone/desktop/tabletop or native devices from the project, not from this template. Screenshots are candidates until reviewed. Exact RGBA/zero-pixel comparison is an opt-in policy on a pinned rendering environment; encoded PNG byte equality is not pixel equality. Cross-platform output is separate evidence, not a replacement baseline. Baseline update writes candidates and never silently approves them; review records identify candidate hashes and source.

## CI and delivery

Untrusted PR jobs use read-only access and deterministic fixtures. Retain revision-named artifacts, plus failure logs/traces. Trusted preview publication validates repository, PR, run, head SHA, artifact identity and paths; preserve production and unrelated PR previews. Do not execute code from an untrusted artifact in a privileged job. Native distribution may use an unsigned test artifact where signing is unavailable; label that limit.

Review: ordinary actions executed? semantics before capture? complete source/artifact identity? bounded deterministic readiness? no hidden external service? correct actors/viewports? candidates separately reviewed? current walkthrough? evidence retained on failure? unperformed checks stated?
