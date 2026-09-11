---
name: practica-scaffold
description: Prepare a truthful blank application and production-build evidence for a chosen web, native, desktop, CLI, or service platform, before product architecture.
---

# Practica scaffold

Read accepted intent/domain, the selected target, and repository constraints. Confirm only a consequential missing platform choice; honor an explicitly selected stack. Do not copy a sibling application wholesale.

Read [the evidence contract](references/evidence-contract.md), then only the selected profile: [web](references/web.md), [iOS](references/ios.md), [Android](references/android.md), [desktop](references/desktop.md), [CLI](references/cli.md), or [service](references/service.md). Compose profiles only when the user requests multiple surfaces.

The deliverable is the smallest honest startup surface that says the product is not implemented yet, plus a pinned development environment, release/production build, visible source identity, one complete local verifier, semantic launch tests, and retained evidence. Web reusable template fragments are in assets/web/; they are components to adapt, not a universal generator.

Do not add domain entities, game rules, a product event model, authentication, persistence, Firebase, speculative routes, or simulated future features. Runtime architecture belongs to the MVP phase. Testing/build/deployment mechanics are appropriate here.

Adapt E2E_GUIDE.md from the versioned contract with selected viewports/devices and a canonical baseline environment. Explain exactly which checks are automated, visual, simulator, physical-device, or production. Use candidate evidence until pixels have actually been reviewed. Never claim a template has been proven on a target that was not built and run.

Use existing pinned toolchains where available; otherwise resolve supported versions at execution time and lock them. One documented command must fail if any required build/test step fails. Add CI and a safe preview or installable artifact when the target permits it; publication uses existing authorization, and missing external access does not prevent local implementation/evidence.

For Pages, separate repository publishing settings from optional account/domain verification. An authenticated administrator can set the custom domain and HTTPS via API for user or organization repositories. Never put administrator credentials in untrusted PR jobs. Preview templates must validate artifact identity and preserve production.

Add repository workflow/evidence guidance to AGENTS.md, preserving existing rules. Record provenance where required. Review the diff against the blank-shell boundary, run its verifier, inspect the resulting screenshots/receipts, and deliver this phase. User-authorized combined phases may continue after their dependencies are satisfied.
