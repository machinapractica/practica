# Website development

The site is pre-release. Production publication, domain verification, and TLS remain bootstrap checks until recorded as verified.

## Verify from a clean checkout

Install Node **24.18.1** and npm **11.16.0**, then run one command at the repository root:

```sh
./scripts/verify.sh
```

It installs exact locked dependencies and Chromium, builds the production artifact, and runs the browser suite. Linux hosts also need Playwright's system packages (`npx --no-install playwright install-deps chromium` after `npm ci --ignore-scripts`); the pinned Ubuntu CI image installs these explicitly. Dependency downloads require network access. Browser journeys use only the locally served artifact and reject external requests.

`npm run serve` serves `_site` at http://127.0.0.1:4173 after building. The verifier uses that same production server; it refuses an already occupied test port. It has explicit timeouts and zero retries.

## Choice and content ownership

Eleventy 3.1.6 generates static HTML without client-side JavaScript. It supports Markdown and a shared layout without a client framework. The cost is a Node development dependency tree and an explicit configuration for publishing selected repository content. Node, npm, Eleventy, Playwright, and action revisions are pinned; package-lock.json fixes transitive dependencies.

The vision and setup proposal are rendered from their repository sources through virtual templates, without copying their content into site/. Future book manuscripts can use the same mechanism. Package research stays in its separate repository and is linked, not duplicated. Do not create install instructions before skills/packages exist.

## Evidence

Playwright opens the ordinary home page at 1440×1000 and 390×844, asserts current status and exact source revision, captures the home page, follows books → vision and method → proposal, captures the proposal, and reads package status. Each run attaches its walkthrough and screenshots under test-results/. The HTML report is in playwright-report/; stage logs are in evidence/. CI retains these as revision-named review artifacts, including traces and failure screenshots when a test fails.

The suite also visits every generated HTML page, checks metadata, local links and fragment destinations, asserts responsive document width, and exercises missing-page recovery and keyboard skip navigation. Screenshot capture follows visible semantic assertions. Screenshots are review evidence, not automatically approved pixel baselines. No simulator or Chromium emulation proves physical-device, Safari, Firefox, screen-reader, DNS, TLS, or production behavior.

The footer links to the Git source revision. Dirty local builds say “Local changes”; CI refuses dirty builds so a deployed artifact cannot silently claim an unrelated revision.

## Deployment

The Website workflow verifies PRs with read-only repository access. Only main can upload a Pages artifact and enter the github-pages deployment environment. Only the deploy job gets pages:write and id-token:write. Actions are pinned to full commit SHAs. Configure Pages for Actions and the environment for main before merging the website PR. Protect main with the actual site-verify and prompt-provenance checks once they exist. PR evidence artifacts are available for review; there is no public PR preview in this first tracer.

References: [Eleventy virtual templates](https://www.11ty.dev/docs/virtual-templates/), [Playwright web server](https://playwright.dev/docs/test-webserver), [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
