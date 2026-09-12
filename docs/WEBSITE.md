# Website development

The books are being written; the skills and packages are experimental. Follow the [website style guide](WEBSITE_STYLE_GUIDE.md) when editing public copy. GitHub Pages publishes verified main-branch artifacts to [machinapractica.com](https://machinapractica.com). The custom domain and DNS are configured through the authenticated GitHub and Cloudflare APIs.

## Verify from a clean checkout

Install Node **24.18.1** and npm **11.16.0**, then run one command at the repository root:

```sh
./scripts/verify.sh
```

It installs exact locked dependencies and Chromium, builds the production artifact, and runs the browser suite. Linux hosts also need Playwright's system packages (`npx --no-install playwright install-deps chromium` after `npm ci --ignore-scripts`); the pinned Ubuntu CI image installs these explicitly. Dependency downloads require network access. Browser journeys use only the locally served artifact and reject external requests.

`npm run serve` serves `_site` at http://127.0.0.1:4173 after building. The verifier uses that same production server; it refuses an already occupied test port. It has explicit timeouts and zero retries.

## Choice and content ownership

Eleventy 3.1.6 generates static HTML without client-side JavaScript. It supports Markdown and a shared layout without a client framework. The cost is a Node development dependency tree and an explicit configuration for publishing selected repository content. Node, npm, Eleventy, Playwright, and action revisions are pinned; package-lock.json fixes transitive dependencies.

The vision is rendered from VISION.md through a virtual template. The public setup page in site/project-setup.md explains the sequence in plain language and links to the original proposal, which remains intact. Future book manuscripts can use the same mechanism. Package research stays in its separate repository and is linked, not duplicated. Do not create install instructions before skills/packages exist.

## Evidence

Playwright opens the ordinary home page at 1440×1000 and 390×844, asserts current status and exact source revision, captures the home page, follows the programmer's guide → goals and skills → setup sequence, captures the rewritten pages, and reads package status. Each run attaches its walkthrough and screenshots under test-results/. The HTML report is in playwright-report/; stage logs are in evidence/. CI retains these as revision-named review artifacts, including traces and failure screenshots when a test fails.

The suite also visits every generated HTML page, checks metadata, local links and fragment destinations, asserts responsive document width, and exercises missing-page recovery and keyboard skip navigation. Screenshot capture follows visible semantic assertions. Screenshots are review evidence, not automatically approved pixel baselines. No simulator or Chromium emulation proves physical-device, Safari, Firefox, screen-reader, DNS, TLS, or production behavior.

The footer links to the Git source revision. Dirty local builds say “Local changes”; CI refuses dirty builds so a deployed artifact cannot silently claim an unrelated revision.

## Deployment

The Website workflow verifies PRs with read-only repository access. Only main can upload a Pages artifact and enter the github-pages deployment environment. Only the deploy job gets pages:write and id-token:write. Actions are pinned to full commit SHAs. Configure Pages for Actions and the environment for main before merging the website PR. Protect main with the actual site-verify and prompt-provenance checks once they exist. PR evidence artifacts are available for review; there is no public PR preview in this first tracer.

References: [Eleventy virtual templates](https://www.11ty.dev/docs/virtual-templates/), [Playwright web server](https://playwright.dev/docs/test-webserver), [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Domain administration

The repository Pages API supports both `cname` and `https_enforced` for organization-owned repositories. Configure the custom domain before adding DNS, wait for the certificate, then enable HTTPS and verify the apex and www redirect. Use an authenticated administrator locally for settings changes; CI deployment needs only its existing Pages/OIDC permissions.

Cloudflare hosts four GitHub Pages apex A records, four apex AAAA records, and a www CNAME to `machinapractica.github.io`, all with proxying disabled. Preserve unrelated records.

GitHub's optional account/organization Pages domain-claim verification is separate from configuring the site's domain and issuing its HTTPS certificate. It remains deferred under the owner's instruction to minimize manual setup, matching the Anna’s Dad Press deployment. If that extra verification is added later, use the Pages challenge provided by GitHub; general organization badge verification is a different feature.

The organization has one owner and no ordinary members. Requiring organization-wide 2FA and restricting future members' deletion/transfer, visibility changes, and outside invitations are separate website-only security controls, not deployment prerequisites. Those settings remain deferred; repository protections and secret protection are already active.
