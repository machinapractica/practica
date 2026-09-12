# web evidence profile

Use the user's stack or the smallest maintained static build appropriate to the platform decision. Preserve existing Nix/toolchain pinning. Resolve exact supported Node, package manager, browser runner, and framework versions when applying this profile; commit a lockfile.

The shell has one startup surface and a visible source revision. Produce static/release output and serve that output for tests, with root/subpath behavior explicit. Do not use a dev server as the only acceptance target. Provide one verifier that installs locked dependencies, builds, launches with bounded readiness, runs browser scenarios, and closes owned processes.

Before writing evidence or build-identity helpers, check the published or packed @machinapractica/testing and @machinapractica/build-info packages and read their current API/limits. Prefer those shared mechanics when they fit; install an explicit available version. If either is unavailable or unsuitable, record the concrete reason for a local equivalent. Do not recreate a recorder, exact-pixel comparator or artifact manifest merely because it is easy to write. For ordinary launch assertions, adapt the local fragment in ../assets/web/launch.spec.ts.template with Playwright's ordinary API. Keep action, ready assertion, capture, and walkthrough tied together. The package is an implementation option, not a reason to create a dependency on an unpublished name.

Make the verifier reject Playwright's `waitForTimeout` API in browser tests. Use an existing AST-aware linter rule or copy ../assets/web/check-browser-waits.mjs and install a pinned `@babel/parser` dev dependency (the asset is tested with 8.0.5). Run it against every browser-test source file before the scenarios. Prove that a deliberately prohibited call makes verification fail. It ignores comments/string examples and parses JS/TS; it is not a proof that every timer or readiness condition is correct. Review other timer uses semantically.

Never add a sleep to make a screenshot settle. Wait for actual fonts/assets/application readiness and remove uncontrolled rendering changes; retain and investigate exact-image failures. For reordered network tests, observe completion of the delayed response and the client's handling before asserting the final view. A sleep is not that observation.

Test semantic startup and visible identity at the canonical phone and desktop sizes (add tabletop only if required). Verify local links/assets, metadata, missing-page handling, and keyboard entry. Network policy is local/same-origin; service workers are blocked unless their behavior is actually under test.

A read-only PR workflow builds/tests and uploads evidence. A trusted Pages workflow uses only the required pages/id-token writes and verifies the exact artifact. Safe retained previews need ownership/identity validation and production preservation; if the host supports only artifacts, report that limit instead of promising a public preview.

The template fragments here are reusable assets, not a generated new project. Native and real-project scaffold acceptance remain separate exercises; do not claim a framework has been proven merely because a fragment parses.
