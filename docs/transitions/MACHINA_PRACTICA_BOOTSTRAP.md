# Machina Practica ecosystem bootstrap

Status: execution handoff  
Prepared: 2026-09-11  
Owner: Andrew Nicolao (`anicolao`)  
Domain: `machinapractica.com`

## Purpose of this document

This is the execution brief for turning the existing Practica publishing project and two research proposals into one consistently owned Machina Practica ecosystem.

The agent receiving this document should also receive and read, in full:

- `SETUP_PROPOSAL.md`, which defines the staged method for creating software projects with focused agent skills;
- `OURWAY_PROPOSAL.md`, which identifies repeated implementation practices that may be extracted into npm packages.

Those documents contain the research and product reasoning. This document supplies the decisions, names, repository boundaries, migration steps, operational setup, and completion criteria needed to act on them.

Do not implement the complete skill suite or extract the proposed libraries during this bootstrap. Establish trustworthy homes for that work, migrate the proposals, publish a minimal real website, and leave the ecosystem ready for small follow-up PRs.

## Originating instruction

The instruction that produced this handoff was:

> OK I bought machinapractica.com. Write your plan to SETUP_MP.md so that I can take that document, SETUP_PROPOSAL.md, and OURWAY_PROPOSAL.md over to a new directory and agent, they can pick up the context of how we're transforming things, and then set up the npm/github/website for me.

When this document is imported into Practica, do not claim the receiving agent authored it or the two companion proposals. Record the receiving prompt verbatim in `PROMPTS.md` and describe these files as imported planning artifacts.

## Decisions already made

### Identity

Use these names consistently:

| Concern | Name |
| --- | --- |
| Human-facing umbrella brand | **Machina Practica** |
| GitHub organization | `machinapractica` |
| npm organization and scope | `@machinapractica` |
| Website | `https://machinapractica.com` |
| Portable agent plugin identifier | `machina-practica` |
| Project-method and skill prefix | `practica-` |

Examples of the resulting names are `$practica-vision`, `$practica-scaffold`, `@machinapractica/testing`, and `@machinapractica/events`.

Do not use **Ourway** as the new ecosystem name. An unrelated `ourway` GitHub organization already exists, and the `@ourway` npm scope already has packages with shared historical ownership. Do not attempt to move, republish, deprecate, or otherwise change those existing packages during this work.

Do not use plain **Practica** as an organization or npm scope. The GitHub name is occupied and the npm `@practica` scope is used by another Node.js best-practices project. `Practica` remains the name of the flagship repository and the overall method inside the unambiguous Machina Practica ownership namespace.

### Repository boundaries

Begin with three public repositories:

1. `machinapractica/practica`
   - The existing `anicolao/practica` repository, transferred without rewriting history.
   - Canonical home for the two books, the project-development method, executable skills, supporting skill assets, and website source.
   - Publishes the website at `machinapractica.com`.

2. `machinapractica/packages`
   - Monorepo for packages published under `@machinapractica/*`.
   - Initially contains project intent, contribution and release rules, and the renamed extraction proposal; it need not contain a placeholder npm package.

3. `machinapractica/.github`
   - Minimal organization profile and shared community-health files.
   - Do not turn this into a third documentation system or a repository-template framework during bootstrap.

Do not create separate `skills`, `books`, or `website` repositories initially. The skills are the executable form of *Machina Practica*, the books explain the same system to humans and agents, and the website publishes that material. Keeping them together makes changes reviewable as one coherent body of guidance. Runtime packages remain separate because they have independent APIs, compatibility promises, releases, and consumer test matrices.

### Website boundary

The canonical public URL is the apex domain:

```text
https://machinapractica.com
```

`https://www.machinapractica.com` should redirect to the apex. The first website is a truthful, minimal landing and documentation shell, not a marketing launch. It should explain:

- what Machina Practica is;
- the relationship between *Effective Agents* and *Machina Practica*;
- that skills turn the method into repeatable agent workflows;
- that `@machinapractica/*` packages will contain only field-tested implementation mechanics;
- the current pre-release status;
- where to read the source and proposals.

Do not advertise unimplemented skills or unpublished packages as available. Do not add analytics, cookies, accounts, a CMS, email collection, or external fonts to the initial site.

## Verified starting state

These observations were made on 2026-09-11 and must be rechecked before mutation:

- `machinapractica.com` has been purchased.
- Its authoritative nameservers are currently Cloudflare (`gabriella.ns.cloudflare.com` and `sterling.ns.cloudflare.com`).
- The apex and `www` host currently have no resolving web records.
- No GitHub account or organization named `machinapractica` was visible.
- No public npm packages under `@machinapractica/` were visible. This does not reserve the scope; creating the npm organization does.
- GitHub CLI was authenticated as `anicolao` with repository and workflow access, but organization creation or some owner settings may still require the GitHub web interface and fresh authentication.
- npm CLI was not authenticated on the machine where this brief was prepared.
- `anicolao/practica` is public and has `main` as its default branch. It contains `README.md`, `VISION.md`, `AGENTS.md`, `PROMPTS.md`, prompt-provenance hooks, and a prompt-provenance CI workflow. It does not yet contain book manuscripts, skills, a website, or a license file.

Namespace checks are advisory until the organizations are actually created. If either `machinapractica` namespace has become unavailable, stop before inventing a variation: report the conflict and ask the owner to choose a replacement that can be used consistently across GitHub, npm, and the domain identity.

## Operating rules for the bootstrap agent

- Work in small branches and PRs. Do not combine organization migration, editorial restructuring, website implementation, plugin design, and npm package code in one change.
- Preserve the complete Git and pull-request history of `anicolao/practica`. Transfer it; do not recreate or squash it.
- Preserve prompt provenance. Every human prompt used for this work belongs verbatim in the affected repository's `PROMPTS.md` before the PR is handed back.
- Never put passwords, recovery codes, npm tokens, Cloudflare tokens, registrar credentials, or copied session material in a repository, issue, PR, prompt ledger, command output, or chat response.
- Prefer interactive authentication, short-lived credentials, GitHub environments, and OIDC trusted publishing over stored write tokens.
- Do not buy a paid GitHub/npm/hosting plan or enable a paid service without explicit approval. Public npm organizations and public GitHub Pages should be sufficient for the intended initial state, subject to current provider terms.
- Do not publish a dummy npm package merely to demonstrate publishing or reserve a package name. Creating the organization reserves the scope; the first publication should be a real experimental package from the extraction plan.
- Do not perform broad search-and-replace over historical quotations, URLs, summaries, or evidence. Rebrand proposed future artifacts while preserving historical facts.
- Use the current official GitHub, npm, Cloudflare, and OpenAI instructions at execution time. Provider UI, DNS targets, manifest schemas, and publishing requirements may have changed since this document was written.
- If an owner-only browser action is required, complete all safe preparatory work first, then ask for one precise action and verify its result before continuing.

## Target layout

The transferred flagship repository should move toward this structure through focused PRs:

```text
practica/
├── plugin.json                     # added with the first real skill
├── README.md
├── VISION.md
├── AGENTS.md
├── PROMPTS.md
├── LICENSES.md                     # after licensing is confirmed
├── books/
│   ├── effective-agents/
│   └── machina-practica/
├── skills/
│   ├── practica-project/
│   ├── practica-vision/
│   ├── practica-domain/
│   ├── practica-scaffold/
│   ├── practica-mvp-design/
│   ├── practica-plan/
│   ├── practica-tracer/
│   └── practica-audit/
├── site/                            # website source and local assets
└── docs/
    ├── proposals/
    │   └── PROJECT_SETUP_PROPOSAL.md
    └── transitions/
        └── MACHINA_PRACTICA_BOOTSTRAP.md
```

Do not create hollow `SKILL.md` files to make this tree exist. Add `plugin.json` and each skill only when that skill has a focused workflow, activation description, tests, and useful supporting material. Current OpenAI packaging expects a portable root `plugin.json` and discovers skills in `skills/<skill-name>/SKILL.md`; consult the current [skill guidance](https://developers.openai.com/plugins/build/skills) and [plugin packaging guidance](https://developers.openai.com/plugins/build/plugins) before implementing them.

The package repository should begin approximately as:

```text
packages/
├── README.md
├── VISION.md
├── AGENTS.md
├── PROMPTS.md
├── LICENSE
└── docs/
    └── proposals/
        └── PACKAGE_EXTRACTION_PROPOSAL.md
```

Add workspace tooling and a `packages/` source directory only when Wave 0 of the extraction proposal begins. Tooling selected today should not pre-decide the package architecture before duplicated source modules and compatibility fixtures have been inventoried.

## Name transformation for the companion proposals

The two research documents were written before the Machina Practica identity was selected. Migrate them deliberately:

| Old proposal term | New term |
| --- | --- |
| OURWAY / Ourway | Machina Practica |
| `$ourway-project` | `$practica-project` |
| `$ourway-vision` | `$practica-vision` |
| `$ourway-domain` | `$practica-domain` |
| `$ourway-scaffold` | `$practica-scaffold` |
| `$ourway-mvp-design` | `$practica-mvp-design` |
| `$ourway-plan` | `$practica-plan` |
| `$ourway-tracer` | `$practica-tracer` |
| `$ourway-audit` | `$practica-audit` |
| `@ourway/<package>` for proposed packages | `@machinapractica/<package>` |

Rename the files when importing them:

- `SETUP_PROPOSAL.md` becomes `practica/docs/proposals/PROJECT_SETUP_PROPOSAL.md`.
- `OURWAY_PROPOSAL.md` becomes `packages/docs/proposals/PACKAGE_EXTRACTION_PROPOSAL.md`.
- `SETUP_MP.md` becomes `practica/docs/transitions/MACHINA_PRACTICA_BOOTSTRAP.md`.

While editing:

- update titles, proposed package names, skill names, example prompts, folder trees, and internal links;
- retain repository evidence links and the substance of the research;
- retain mentions of actual historical `@ourway/*` packages when they describe real packages rather than proposed names;
- add a short note to each migrated proposal saying it was developed from cross-repository evidence before the Machina Practica organization existed;
- do not silently turn proposals into commitments or claim their work is complete.

## Execution sequence

### Phase 0: preflight and owner gates

Perform read-only checks first:

1. Confirm `gh auth status` identifies `anicolao` and identify any missing scopes without printing credentials.
2. Confirm the `machinapractica` GitHub organization still does not exist.
3. Authenticate npm interactively as the owner's npm user, confirm the username, and confirm that `@machinapractica` is still available.
4. Identify how DNS for `machinapractica.com` can be changed. The current nameservers indicate Cloudflare, but do not assume an API token or browser session exists.
5. Clone `anicolao/practica`, inspect open PRs, repository rules, Pages state, environments, secrets by name only, and default-branch CI.
6. Read `README.md`, `VISION.md`, `AGENTS.md`, `PROMPTS.md`, both companion proposals, and this brief in full.
7. Report the exact state and any owner-only steps before changing ownership or DNS.

Expected owner gates include creating organizations through web interfaces, completing 2FA, approving a repository transfer, or granting narrowly scoped Cloudflare access. Ask for those actions only when they are actually necessary. Do not ask the owner to manually perform steps the authenticated tools can safely perform.

### Phase 1: reserve and configure the identities

Create the GitHub organization `machinapractica` with `anicolao` as an owner. Use the free/public configuration unless the owner explicitly selects another plan. Configure:

- display name **Machina Practica**;
- website `https://machinapractica.com`;
- a concise description derived from the existing vision;
- two-factor authentication requirements where they will not lock out the only owner;
- repository deletion and transfer restricted to organization owners;
- conservative default member permissions;
- an Actions policy that permits the official and specifically reviewed third-party actions the repositories actually use.

Do not create speculative teams. With one maintainer, ownership should remain simple. Document the recovery risk of having only one organization owner and recommend adding a second trusted owner when one exists; do not invent or invite one.

Create the npm organization `machinapractica`, selecting the public-package plan unless the owner authorizes paid private packages. Confirm:

- `anicolao`'s actual npm identity is an owner;
- organization publishing/settings require 2FA where supported;
- package access defaults and team membership do not grant unnecessary publish access;
- no package has been published yet.

Use the current [npm organization instructions](https://docs.npmjs.com/creating-an-organization/). Later package releases should use [npm trusted publishing](https://docs.npmjs.com/trusted-publishers/) from GitHub-hosted Actions with provenance rather than a long-lived publish token, but trusted-publisher configuration belongs with the first real package because npm binds it to an existing package and workflow.

### Phase 2: establish the organization profile

Create `machinapractica/.github` as a public repository. Its first PR should contain only:

- `profile/README.md` with the brand thesis, website link, flagship repository link, and package-repository link;
- a concise `SECURITY.md` that explains private vulnerability reporting without promising an unattended support channel;
- an appropriate license for those repository contents after licensing is confirmed.

Do not add generic issue templates, pull-request boilerplate, a code of conduct, funding links, or elaborate governance until there is a demonstrated need.

### Phase 3: transfer and reframe Practica

Transfer `anicolao/practica` to `machinapractica/practica` using GitHub's supported repository-transfer process. Before confirming the transfer:

- verify that the target organization exists and does not contain a repository named `practica`;
- record the current default branch, open PRs, Actions settings, branch protection/rules, and clone URL;
- ensure the owner can create repositories in the target organization.

Afterward:

- verify issues, PRs, branches, tags, Actions history, and commit history remain available;
- update the local remote to `https://github.com/machinapractica/practica.git`;
- verify the old GitHub URL redirects;
- update canonical repository URLs in live documentation and metadata, while preserving historical prompt text verbatim;
- rerun prompt-provenance checks before other changes.

GitHub documents organization creation and repository transfer separately; use the current [organization creation](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) and [repository transfer](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository) instructions at execution time.

Open a focused documentation PR after the transfer. It should:

- identify Machina Practica as the umbrella and `machinapractica.com` as the site;
- import and rebrand `PROJECT_SETUP_PROPOSAL.md` and this transition brief;
- preserve the two-book thesis;
- move the `Initial Roadmap` out of `VISION.md` into a truthful planning document so the flagship follows its own vision/document boundary;
- add current-state links without claiming the plugin or packages exist;
- record the prompt provenance for the work.

### Phase 4: create the package home

Create the public repository `machinapractica/packages`. Its initial PR should be documentation only:

- `README.md`: repository purpose, current pre-extraction status, relationship to Practica, and the `@machinapractica` scope;
- `VISION.md`: stable outcomes and principles, without a package roadmap or selected monorepo tooling;
- `AGENTS.md` and `PROMPTS.md`: adapt Practica's prompt-provenance contract and enforcement rather than copying it incompletely;
- license material after the owner confirms licensing;
- `docs/proposals/PACKAGE_EXTRACTION_PROPOSAL.md`: the rebranded companion proposal.

The next PR may add prompt-provenance hooks and CI if separating enforcement makes review clearer. Do not initialize a JavaScript workspace, choose a release manager, or publish anything until the proposal's Wave 0 inventory begins.

### Phase 5: build the website tracer

Build the first deployable website in `machinapractica/practica` as its own PR. It is both a public landing page and the first tracer proving the future scaffold/evidence standards.

The implementation should:

- generate a static production artifact from repository-controlled content;
- keep the first dependency surface small and pin the toolchain;
- use only bundled/local assets and system fonts;
- be accessible and readable at phone and desktop widths;
- include semantic metadata, sensible titles/descriptions, and a useful not-found page;
- show the exact source revision or link the deployed artifact visibly to its source commit;
- link to the books, skills, packages, proposals, and GitHub organization using truthful status labels;
- provide one documented local command that performs all verification;
- use no production service or unpublished `@machinapractica` package.

Choose the smallest maintained static-site approach that can later render the Markdown books and skill documentation without copying their contents. Record the choice and its tradeoffs in the PR. Do not introduce a CMS or framework merely for visual polish.

Add tests and evidence proportionate to this first tracer:

- production build succeeds from a clean checkout;
- internal links and required metadata are checked;
- a browser test opens the built site through the ordinary entry point and asserts meaningful visible content;
- phone and desktop screenshots are retained as review artifacts;
- waits are based on observable state with explicit bounds, not arbitrary sleeps;
- CI uploads useful logs, traces, and screenshots on failure;
- dependency, build, and deployment failures are not hidden by retries.

Deploy using GitHub Pages from a GitHub Actions production artifact in the same repository unless a concrete limitation makes another static host materially better. Pin actions by full commit SHA and grant each workflow only the permissions it needs. Configure a protected `github-pages` environment if supported by the selected plan.

### Phase 6: connect and secure the domain

Use `machinapractica.com` as the repository's GitHub Pages custom domain. Follow GitHub's current [custom-domain guidance](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) rather than copying IP addresses from this document.

Perform the work in this order:

1. Verify the custom domain for the GitHub organization using the provider-prescribed DNS TXT record, if that feature is available.
2. Configure the Pages custom domain as `machinapractica.com`.
3. Add the current GitHub-prescribed apex records in Cloudflare.
4. Add `www` as a direct CNAME to the GitHub Pages organization host so GitHub can redirect it to the canonical apex.
5. Do not add wildcard DNS.
6. Keep Cloudflare proxying disabled during GitHub ownership and certificate validation unless current official guidance explicitly supports the proxied setup being used.
7. Wait for DNS and certificate issuance using bounded polling, reporting propagation rather than sleeping indefinitely.
8. Enable HTTPS enforcement only after GitHub shows a valid certificate.
9. Verify apex and `www` over IPv4 and IPv6 where published, from more than one resolver if practical.

The domain currently has no web records, so there is no live site to preserve. Do not modify MX, unrelated TXT, registrar-lock, contact, or nameserver settings. Do not move the domain away from Cloudflare as part of this bootstrap.

### Phase 7: repository protections and operational verification

Once CI names are stable, add repository rules through a separate, auditable organization-setting change:

- protect `main` from force pushes and deletion;
- require pull requests for normal changes;
- require the actual CI checks that exist, not anticipated check names;
- require conversations to be resolved when that does not make solo maintenance impractical;
- allow an explicit owner break-glass path and document its use;
- use least-privilege default workflow permissions;
- enable Dependabot/security features appropriate to public repositories;
- enable private vulnerability reporting if available.

Do not configure rules before the corresponding CI exists, and do not accidentally lock the sole owner out of completing setup. Verify protections with a read-only API query after applying them.

## Licensing decision required once

The existing Practica repository has no license. Before publishing copied templates, book chapters, skills, or npm packages, ask the owner to confirm licensing. The recommended default is:

- MIT for skills, templates, website code, and npm packages;
- Creative Commons Attribution 4.0 International for book manuscripts and explanatory prose;
- explicit notices for third-party examples or assets under their original terms.

This is a recommendation, not prior owner approval. Record the decision once, make file-level boundaries clear, and reuse it across the organization. Do not apply a software license to prose or a prose license to executable code without stating the boundary.

## PR and commit sequence

Keep the bootstrap history easy to understand. A good default is:

| Order | Repository | PR outcome |
| --- | --- | --- |
| 1 | `.github` | Organization identity and security contact exist |
| 2 | `practica` | Repository is transferred; identity and imported proposals are updated |
| 3 | `packages` | Package home and rebranded extraction proposal exist, with no placeholder package |
| 4 | `practica` | Minimal production website, E2E evidence, CI, and Pages deployment exist |
| 5 | external settings | Domain verification, DNS, TLS, repository rules, and final operating checks are complete |

Organization and npm creation are account-level actions rather than PRs. Record them in the final setup report without pretending they are version-controlled changes.

Prefer one coherent commit per PR. Use a second commit when provenance, generated evidence, or review corrections are clearer separately. Do not hide unrelated cleanup inside a transfer or deployment commit.

## Completion criteria

The bootstrap is complete only when all applicable statements are verified:

### Identity and ownership

- `https://github.com/machinapractica` resolves to the correct organization and identifies `anicolao` as an owner.
- `https://www.npmjs.com/org/machinapractica` resolves to the correct npm organization and the owner can administer it with 2FA.
- No new artifact uses `ourway` or plain `@practica` as its proposed namespace.
- `machinapractica.com`, GitHub, npm, package metadata, and plugin metadata use the same human-facing identity.

### Repositories and history

- The three target repositories exist publicly under `machinapractica`.
- Practica's original commits, PRs, issues, and prompt provenance survived the transfer.
- The old `anicolao/practica` URL redirects to the new home.
- Each repository has a clear purpose and no overlapping source of truth.
- The two proposals are rebranded, placed in their correct repositories, linked to each other, and still labeled as proposals.

### Website and domain

- `https://machinapractica.com` serves the production artifact with a valid certificate.
- `https://www.machinapractica.com` redirects to the canonical apex without a certificate warning.
- The deployed page reports or links to the exact source revision.
- A clean local verification and the default-branch CI both pass.
- The deployment workflow can be traced from source commit to uploaded artifact to Pages deployment.
- The site makes no false availability claims and has no analytics, account, email, or external-font dependencies.

### Security and operations

- No persistent publish or DNS credential was committed or printed.
- npm publishing is not enabled through a broad, long-lived automation token.
- Workflow permissions and repository access are least-privilege.
- Branch/ruleset configuration names only checks that actually exist.
- Any unperformed owner, billing, recovery, physical-device, cross-browser, DNS, or production checks are reported explicitly.

## Deliverable from the bootstrap agent

At completion, write a concise setup report containing:

- links to the GitHub organization, npm organization, repositories, merged PRs, Pages deployment, and live site;
- the final DNS records by type and target, excluding secrets;
- the licensing decision;
- exact verification commands and results;
- organization/repository security settings established;
- any remaining owner-only actions or risks;
- the next recommended small PR, which should be either the first document-boundary skill or Wave 0 package inventory—not both.

Do not report the bootstrap as complete while a namespace, transfer, site, DNS, TLS, or required CI check remains merely planned.

## Suggested kickoff prompt for the next agent

Copy this file, `SETUP_PROPOSAL.md`, and `OURWAY_PROPOSAL.md` into an otherwise empty working directory, then use a prompt like:

> Read SETUP_MP.md, SETUP_PROPOSAL.md, and OURWAY_PROPOSAL.md completely. SETUP_MP.md is the execution brief and the other two documents are its research inputs. Carry out the Machina Practica ecosystem bootstrap through small, reviewable PRs. Use the authenticated GitHub, npm, and DNS tooling available to you; preserve Practica's history and prompt provenance; never expose credentials; and ask me only for owner-only authentication, licensing, billing, or account actions that you cannot safely complete. Do not implement the full skill suite or extract packages yet. Continue until every completion criterion in SETUP_MP.md is either verified or reported as a concrete owner action.

