# web evidence profile

Use the user's stack or the smallest maintained static build appropriate to the platform decision. Preserve existing Nix/toolchain pinning. Resolve exact supported Node, package manager, browser runner, and framework versions when applying this profile; commit a lockfile.

The shell has one startup surface and a visible source revision. Produce static/release output and serve that output for tests, with root/subpath behavior explicit. Do not use a dev server as the only acceptance target. Provide one verifier that installs locked dependencies, builds, launches with bounded readiness, runs browser scenarios, and closes owned processes.

Use @machinapractica/testing only when its packed/released version is available and its limits fit. Otherwise adapt the local fragment in ../assets/web/launch.spec.ts.template with Playwright's ordinary API. Keep action, ready assertion, capture, and walkthrough tied together. The package is an implementation option, not a reason to create a dependency on an unpublished name.

Test semantic startup and visible identity at the canonical phone and desktop sizes (add tabletop only if required). Verify local links/assets, metadata, missing-page handling, and keyboard entry. Network policy is local/same-origin; service workers are blocked unless their behavior is actually under test.

A read-only PR workflow builds/tests and uploads evidence. A trusted Pages workflow uses only the required pages/id-token writes and verifies the exact artifact. Safe retained previews need ownership/identity validation and production preservation; if the host supports only artifacts, report that limit instead of promising a public preview.

The template fragments here are reusable assets, not a generated new project. Native and real-project scaffold acceptance remain separate exercises; do not claim a framework has been proven merely because a fragment parses.
