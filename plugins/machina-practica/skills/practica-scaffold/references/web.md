# web evidence profile

Use the user's stack or the smallest maintained static build appropriate to the platform decision. Preserve existing Nix/toolchain pinning. Resolve exact supported Node, package manager, browser runner, and framework versions when applying this profile; commit a lockfile.

The shell has one startup surface and a visible source revision. Produce static/release output and serve that output for tests, with root/subpath behavior explicit. Do not use a dev server as the only acceptance target. Provide one verifier that installs locked dependencies, builds, launches with bounded readiness, runs browser scenarios, and closes owned processes.

Before writing evidence or build-identity helpers, check the published or packed @machinapractica/testing and @machinapractica/build-info packages and read their current API/limits. Prefer those shared mechanics when they fit; install an explicit available version. If either is unavailable or unsuitable, record the concrete reason for a local equivalent. Do not recreate a recorder, exact-pixel comparator or artifact manifest merely because it is easy to write. For ordinary launch assertions, adapt the local fragment in ../assets/web/launch.spec.ts.template with Playwright's ordinary API. Keep action, ready assertion, capture, and walkthrough tied together. The package is an implementation option, not a reason to create a dependency on an unpublished name.

Install `@machinapractica/testing@0.1.0-alpha.1` (or a later explicitly checked version) and run `npx --no-install mp-testing setup` after dependency installation. This is agent-owned setup: do it without adding instructions to the user's product prompt. The package installs a staged pre-commit check, preserves existing Git hooks, and adds persistent prepare/pretest commands. Run setup even after `--ignore-scripts` and after another hook manager configures the project. Commit the generated package scripts and lockfile. Do not copy or recreate the checker.

Run `npx --no-install mp-testing check` explicitly in the verifier and CI before scenarios; local hooks can be bypassed. Keep test sources and helpers in the package's supported test directories or `*.test.*`/`*.spec.*` files. Read the package README for coverage and exclusions. The package's own packed-install tests prove prohibited commits fail; each project needs to verify that setup and its CI command actually run. Review other timer uses semantically.

Never add a sleep to make a screenshot settle. Wait for actual fonts/assets/application readiness and remove uncontrolled rendering changes; retain and investigate exact-image failures. For reordered network tests, observe completion of the delayed response and the client's handling before asserting the final view. A sleep is not that observation.

Test semantic startup and visible identity at the canonical phone and desktop sizes (add tabletop only if required). Verify local links/assets, metadata, missing-page handling, and keyboard entry. Network policy is local/same-origin; service workers are blocked unless their behavior is actually under test.

A read-only PR workflow builds/tests and uploads evidence. A trusted Pages workflow uses only the required pages/id-token writes and verifies the exact artifact. Safe retained previews need ownership/identity validation and production preservation; if the host supports only artifacts, report that limit instead of promising a public preview.

The template fragments here are reusable assets, not a generated new project. Native and real-project scaffold acceptance remain separate exercises; do not claim a framework has been proven merely because a fragment parses.
