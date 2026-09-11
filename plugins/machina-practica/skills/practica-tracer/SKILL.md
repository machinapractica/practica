---
name: practica-tracer
description: Implement one selected end-to-end outcome from an accepted plan, with ordinary-interface tests, compatibility evidence, and truthful status updates.
---

# Practica tracer

Read the selected tracer, accepted MVP/domain, current status, and verifier before editing. If no tracer is identified, select the next unblocked outcome only when the user authorized continued implementation; otherwise clarify the missing selection.

Create one focused branch/PR using the repository's workflow. Implement only the selected outcome and prerequisites named in the plan. If a newly discovered design decision changes product scope, record the issue and resolve it with the user's intent instead of silently expanding the tracer.

Keep domain boundaries deterministic where the design requires it. Inject time/randomness and preserve consumer histories through explicit migrations. Do not change existing consumer repositories merely because a reusable package is now available.

Tests must exercise ordinary controls or public interfaces. Fixtures may seed deterministic prerequisites; they must not perform the action the scenario claims to test. Assert semantic outcomes before stabilizing and capturing screenshots. Read ../practica-scaffold/references/evidence-contract.md when the existing project lacks an equivalent contract.

Include negative and recovery evidence introduced by the slice: conflict, reload/replay, interruption, migration, viewer privacy, or failure as applicable. Preserve candidate/reviewed image distinction; do not bless baselines automatically or hide failures with retries.

Update executed scenario walkthroughs from actual step records and IMPLEMENTATION_STATUS.md with complete/partial/blocked/unverified states. Do not rewrite approved plans or visions to fit whatever happened. Run the complete repository verifier and inspect visual evidence. Keep unperformed device/production/security checks explicit.

Prefer one coherent implementation commit plus a separately reviewable baseline/evidence commit when needed. Follow prompt provenance. Finish the selected tracer; advance only if the user authorized additional work, not because the next step exists.
