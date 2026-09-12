---
name: practica-tracer
description: Implement one selected end-to-end outcome from an accepted plan, with ordinary-interface tests, compatibility evidence, and truthful status updates.
---

# Practica tracer

Read the selected tracer, accepted MVP/domain, current status, and verifier before editing. If no tracer is identified, select the next unblocked outcome only when the user authorized continued implementation; otherwise clarify the missing selection.

Create one focused branch/PR using the repository's workflow. Implement only the selected outcome and prerequisites named in the plan. If a newly discovered design decision changes product scope, record the issue and resolve it with the user's intent instead of silently expanding the tracer.

Before extending project-local evidence or build-identity machinery, consult ../practica-mvp-design/references/packages.md and prefer available shared mechanics that fit. Record an actual API or capability gap when retaining a local equivalent.

Keep domain boundaries deterministic where the design requires it. Inject time/randomness and preserve consumer histories through explicit migrations. Do not change existing consumer repositories merely because a reusable package is now available.

For shared mutable state, define the atomic acceptance boundary: read current state, validate authority/version, apply the command and commit it as one serialized operation. Complete asynchronous input collection before entering that boundary, or re-read and revalidate under a transaction/lock. A single-threaded runtime does not make a read-modify-write sequence atomic across an await. Exercise overlapping requests through the public interface and verify that accepted operations are neither lost nor applied twice; sequential stale-version checks alone do not prove this.

For asynchronous views of authoritative state, define how the client rejects obsolete responses. A late poll, command reply or failure must not replace a newer accepted view or its connection status. Test response reordering explicitly with real user actions and delayed transport delivery; successful reload and ordinary reconnect tests do not establish this property.

Tests must exercise ordinary controls or public interfaces. Fixtures may seed deterministic prerequisites; they must not perform the action the scenario claims to test. Assert semantic outcomes before stabilizing and capturing screenshots. Read ../practica-scaffold/references/evidence-contract.md when the existing project lacks an equivalent contract.

Include negative and recovery evidence introduced by the slice: conflict, reload/replay, interruption, migration, viewer privacy, or failure as applicable. Preserve candidate/reviewed image distinction; do not bless baselines automatically or hide failures with retries.

For browser work, verify that the runner enforces the existing wait policy against newly added tests. If it lacks enforcement, use ../practica-scaffold/references/web.md. Do not accept a green test run that contains prohibited fixed waits, including delays described as font or screenshot stabilization.

Update executed scenario walkthroughs from actual step records and IMPLEMENTATION_STATUS.md with complete/partial/blocked/unverified states. Do not rewrite approved plans or visions to fit whatever happened. Run the complete repository verifier and inspect visual evidence. Keep unperformed device/production/security checks explicit.

Prefer one coherent implementation commit plus a separately reviewable baseline/evidence commit when needed. Follow prompt provenance. Finish the selected tracer; advance only if the user authorized additional work, not because the next step exists.
