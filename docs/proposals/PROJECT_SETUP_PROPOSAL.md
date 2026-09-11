# Staged software-project setup with Machina Practica skills and packages

Status: research proposal, not an implementation commitment. Imported from `SETUP_PROPOSAL.md`, developed from cross-repository evidence before the Machina Practica organization existed. Original research and evidence are retained; proposed artifact names have been updated.

Companion: [package extraction proposal](https://github.com/machinapractica/packages/blob/main/docs/proposals/PACKAGE_EXTRACTION_PROPOSAL.md).

## Goal

Starting a software project should require only a natural statement of intent:

> I want to implement the Jaipur board game. Write a README.md and a VISION.md for this project.

From there, an agent should be able to follow the established working method without being told again what belongs in a vision, how to summarize a domain, how to scaffold a target platform, what the E2E contract requires, or how to turn an MVP into tracer bullets.

The answer is a hybrid:

- **Machina Practica skills** guide the agent through one deliberately bounded project phase at a time, provide document and scaffold templates, and prevent concerns from leaking into the wrong phase.
- **`@machinapractica` packages** implement proven reusable mechanics such as browser-test evidence, build identity, Pages deployment, event replay, and multiplayer rooms.
- **The project repository** retains its own product intent, domain knowledge, platform choices, architecture, implementation plan, prompt history, and evidence.

This is not a `create-practica-app` generator. The most important reusable asset is the staged method. A package or code template is selected only after the project has reached the phase where that choice belongs.

## The project state machine

The default workflow has six phases. Each phase should normally be one small PR and should stop for review before the next phase.

```text
empty directory
    │
    ▼
1. intent and vision          README + VISION + LICENSE
    │
    ▼
2. domain understanding      RULES_SUMMARY or DOMAIN.md
    │
    ▼
3. platform scaffold         blank/splash app + E2E + CI/CD
    │
    ▼
4. MVP design                product/UX/architecture decisions
    │
    ▼
5. implementation plan       ordered tracer bullets
    │
    ▼
6. implementation loop       one tracer PR at a time
```

The user remains free to combine phases. A simple static utility may go from vision through scaffold in one PR; a well-understood small game may include its MVP and first tracer. The skills should default to one phase because stopping is cheap and disentangling an agent’s premature technical or product decisions is not.

## Why this better matches the repository history

The most successful projects already contain pieces of this method, but the boundaries vary:

- [Practica’s first PR](https://github.com/anicolao/practica/pull/1) began with only the repository’s purpose and vision. Its [prompt ledger](https://github.com/anicolao/practica/blob/main/PROMPTS.md) preserves the simple initiating request and subsequent refinement.
- [Istanbul PR #1](https://github.com/anicolao/istanbul/pull/1), [Sudoku PR #1](https://github.com/anicolao/sudoku/pull/1), and [DRM PR #1](https://github.com/anicolao/drm/pull/1) demonstrate the value of understanding product, rules, and testing before broad implementation, though they sometimes combine several proposed phases.
- [RoboRally’s initial commit](https://github.com/anicolao/roborally/commit/99c27ea2eb35e107b10d3dabf8c2d135bf96a901) captured rules and planning, while [PR #1](https://github.com/anicolao/roborally/pull/1) supplied a runnable web/Firebase/testing/deployment foundation.
- [WFME PR #1](https://github.com/anicolao/wfme/pull/1) is close to the desired platform-scaffold stage: a responsive shell, pinned web toolchain, first E2E journey, explicit CI gates, artifacts, and preview deployment.
- [MediNag’s prompts](https://github.com/anicolao/medinag/blob/main/PROMPTS.md) show the method in conversational form: first adapt the E2E contract, then create a deployed welcome page that does nothing, then add Firebase scheduling, then plan the iOS MVP.
- [Zodiac’s prompts](https://github.com/anicolao/zodiac/blob/main/PROMPTS.md) show both the speed of a more compressed path and predictable omissions when too much is combined: preview visibility, history, and deployed-build identity needed follow-up prompts.

The friction is therefore not a lack of examples. It is that the examples are embedded in repositories and remembered by the maintainer. Skills should make that accumulated method available to the agent at the moment each phase begins.

## Phase boundaries and document contracts

The skills need stronger output contracts than generic Markdown templates. Their principal job is to keep a correct idea in the correct document.

| Artifact | It answers | It must not contain |
| --- | --- | --- |
| `README.md` | What is this repository, who is it for, what is its current status, and where are the authoritative documents? | Detailed roadmap, architecture, speculative features, exhaustive rules, or implementation plan |
| `VISION.md` | What problem or experience should exist, for whom, according to which product principles and non-goals? | Frameworks, databases, file layout, CI, milestones, delivery phases, or a technical roadmap |
| `RULES_SUMMARY.md` / `DOMAIN.md` | What externally defined domain must the software understand? Which terminology, invariants, inputs, outcomes, ambiguities, and sources are authoritative? | UI design, chosen stack, deployment, work breakdown, or invented resolution of ambiguous source material |
| Platform scaffold | Can the selected platform build, launch, test, and deploy a truthful blank product shell? | Game rules, product state model, authentication, persistence, speculative routes, or simulated features |
| `MVP_DESIGN.md` | What exactly will the first useful product do, and how will UX, state, trust, privacy, recovery, accessibility, and platform architecture support it? | A commit-by-commit schedule or claims that implementation already exists |
| `IMPLEMENTATION_PLAN.md` | In what order will independently reviewable tracer bullets realize the approved MVP? What proves each one complete? | New product scope, unresolved architecture hidden as work items, or layers with no visible outcome |
| Scenario `README.md` files | What user journey did an executable test perform, and what evidence did it capture? | Aspirational acceptance criteria that the test does not execute |
| `IMPLEMENTATION_STATUS.md` | Which approved slices are complete, partial, blocked, or unverified now? | Rewriting the original vision, domain, design, or plan to make history look complete |

This separation directly addresses the recurring problem of vision documents accumulating roadmaps and technical decisions. A skill should reject or move misplaced material during generation rather than relying on the maintainer to notice it later.

## Proposed Machina Practica skill set

### 1. `$practica-vision`

**When to use:** an empty or nearly empty directory, from a prompt as small as “I want to implement Jaipur. Write a README and VISION.”

**Inputs:** project name and one-sentence intent. Optional repository visibility, owner/name, and license.

**Reads:** only source material explicitly supplied by the user. It may inspect similarly named software to avoid obvious misunderstanding, but must not import its architecture or roadmap.

**Writes:** `README.md`, `VISION.md`, and `LICENSE` only by default. It may initialize git, create the GitHub repository, and open the first PR when requested.

**Contract:**

- `README.md` is concise: identity, audience, current pre-implementation status, and links.
- `VISION.md` describes users, desired experience, outcomes, principles, non-goals, and important product tensions.
- The vision contains no implementation technology, data model, project phases, estimates, or feature roadmap.
- Unclear product intent becomes a short “questions for review” section or PR-body note, not invented scope.
- The PR contains one commit unless review corrections require another focused commit.

**Stop condition:** open the small PR and report what needs human confirmation. Do not summarize rules, scaffold code, or propose architecture unless the user explicitly requested a later phase too.

### 2. `$practica-domain`

**When to use:** after the intent/vision PR is merged and the user asks the agent to understand the rules, protocol, business process, mathematical system, hardware environment, or other external domain.

**Inputs:** authoritative source material and the kind of domain artifact appropriate to the project.

**Writes:** one primary artifact:

- `RULES_SUMMARY.md` for a game;
- `DOMAIN.md` for a business or service domain;
- `REQUIREMENTS.md` for a tool driven by supplied behavior;
- `SOURCE_AUDIT.md` when understanding depends on an archive, prior implementation, device, or historical documents.

Supporting extracted data may be included only when it is reviewable, redistributable, and needed to validate the summary.

**Contract:**

- identify the exact source, edition, version, or observed system;
- distinguish source facts, interpretations, ambiguities, errata, and proposed resolutions;
- define vocabulary and externally meaningful invariants;
- explain a complete ordinary lifecycle from start to finish;
- cover exceptional/end conditions and hidden information;
- cite page/section/source locations where possible;
- do not select a framework, database, UI, deployment target, or implementation sequence;
- do not silently expand beyond the vision.

**Stop condition:** open a domain-only PR. The user should be able to confirm that the agent understands the target before it writes product code.

For software without an external rulebook, this phase is still useful. MathPub would describe publications, components, projections, mathematical evidence, and authoring workflows. An uptime service would describe checks, observations, incidents, acknowledgement, maintenance windows, and notification semantics.

### 3. `$practica-scaffold`

**When to use:** after product intent and domain understanding are accepted, but before MVP architecture. The user selects a target platform or asks the skill to recommend one.

**Variants:**

- `$practica-scaffold web`
- `$practica-scaffold ios`
- `$practica-scaffold android`
- `$practica-scaffold desktop`
- `$practica-scaffold cli`
- `$practica-scaffold service`
- composed profiles such as `web+service` or `ios+web-receiver` only when explicitly requested.

**Writes:** the smallest honest application that builds and displays a blank, splash, or “project not implemented yet” startup surface on the target platform, plus development tooling, the canonical E2E strategy, CI, and preview/deployment plumbing.

**Contract shared by every platform:**

- pin the toolchain and make one documented command run the complete change verification;
- produce a release/production build, not only a development launch;
- expose build/source identity;
- include a semantic launch test and reviewed screenshot for every canonical target form factor;
- generate an adjacent human-readable walkthrough from the same test steps;
- use event-driven waits with explicit bounds, no arbitrary sleeps, no retries that hide failure, and deterministic local inputs;
- retain logs, traces, screenshots, and native result bundles on failure;
- add CI for static checks, tests, and production build;
- add a safe PR preview or installable test artifact where the platform permits it;
- bundle test-critical fonts/assets and avoid production services in E2E;
- record platform limitations and unperformed physical-device or production checks;
- add `AGENTS.md` with the repository workflow and evidence rules;
- optionally start `PROMPTS.md`, without forcing it into the initial three-file PR.

**What it must not do:** choose the application’s event model, add Firebase/authentication, create production domain entities, design the MVP, or add placeholder implementations of future features. Those decisions belong in the approved MVP design.

This is deliberately smaller than RoboRally PR #1. The scaffold should prove “this platform can carry the project” before it proves multiplayer transport or game replay.

### 4. `$practica-mvp-design`

**When to use:** once the blank scaffold proves the platform and the domain summary is approved.

**Writes:** `MVP_DESIGN.md` and, only when material, a separate `UX_DESIGN.md` or `ARCHITECTURE.md`. Prefer one coherent design document over three overlapping ones.

**Contract:**

- define one bounded useful outcome and explicit non-goals;
- describe the complete primary user journey and recovery/error states;
- map approved domain rules into product behavior without re-summarizing the whole domain;
- decide surfaces, responsive behavior, accessibility, offline behavior, and privacy;
- decide canonical state, commands/events, time/randomness, persistence, migrations, replay, trust, authorization, viewer projections, external systems, and failure behavior;
- identify which `@machinapractica` packages fit and why; packages must not dictate the design;
- specify acceptance evidence, including what automation cannot prove;
- label open decisions and stop for review rather than burying them in the implementation plan;
- contain no ordered commit/PR sequence.

Mockups are appropriate when spatial layout or a novel interaction is a consequential design question, as in Sudoku, Hunger, TTLauncher, and Zodiac. The skill must label them as review references rather than production assets or pixel specifications.

### 5. `$practica-plan`

**When to use:** after the MVP design is approved.

**Writes:** `IMPLEMENTATION_PLAN.md`, optionally initial empty scenario directories/readmes only if they materially aid review.

**Contract:** every step is an independently useful tracer bullet that travels through the real production boundaries available at that point. A tracer names:

- user-visible entry and outcome;
- domain behavior and invariants added;
- state/event/repository/transport changes;
- UI or interface changes;
- unit, contract, rules, and E2E evidence;
- fixtures and visual states;
- documentation/status updates;
- full verification command;
- explicit deferrals and prerequisites.

The plan starts with the smallest real product path after the already-complete scaffold. For a multiplayer game that is often create room → join → deterministic setup → one visible accepted action → reload/replay. For MathPub it could be define one component → generate one projection → validate → render. For uptime it could be define one HTTP check → execute → persist observation → display current status.

No step should be “build the backend,” “implement the reducer,” or “create all cards.” Infrastructure appears just in time inside the first tracer that needs it. Large rule sets are divided into ordinary user journeys, as Istanbul and WFME eventually did.

### 6. `$practica-tracer`

**When to use:** repeatedly after the implementation plan is merged.

**Inputs:** one tracer number or named outcome.

**Contract:**

- create one short-lived branch and one PR;
- implement only the selected tracer and prerequisites already named in the plan;
- preserve deterministic domain boundaries and historical compatibility;
- exercise ordinary interfaces rather than inserting state behind the product;
- assert semantic outcomes before screenshots;
- update scenario documentation and `IMPLEMENTATION_STATUS.md` truthfully;
- run the complete repository verifier and inspect visual artifacts;
- report exact evidence and remaining manual gates;
- stop after the tracer even if the next step is obvious.

The preferred commit shape is one coherent implementation commit followed, when needed, by one separately reviewable visual-baseline/evidence commit. Small corrections discovered during review should remain focused rather than triggering unrelated refactors.

### 7. `$practica-audit`

This optional skill inspects a repository at any phase and reports boundary violations without changing it. Examples include technical decisions in `VISION.md`, roadmap text in `README.md`, unreviewed product decisions first appearing in `IMPLEMENTATION_PLAN.md`, scaffold code that simulates unfinished features, E2E guides that drifted from the canonical strategy, arbitrary waits, missing scenario walkthroughs, and implementation status written as if planned work were complete.

It provides a migration path for existing repositories and a way to validate the skills themselves.

## The umbrella skill

`$practica-project` should be a thin dispatcher, not an autonomous “build everything” command. It examines the directory and selects the next applicable skill:

| Observed state | Default suggestion |
| --- | --- |
| Empty directory | `$practica-vision` |
| README/vision but no domain artifact | `$practica-domain` |
| Domain understood but no executable target | `$practica-scaffold <platform>` |
| Green blank scaffold but no approved MVP | `$practica-mvp-design` |
| Approved MVP but no tracer plan | `$practica-plan` |
| Approved plan | `$practica-tracer <next step>` |

It should never advance multiple phases merely because it can. A user can explicitly say “continue through scaffold” or “one-shot this small project,” but the default response to a phase request is a phase-sized PR.

This lets the initiating prompts remain natural:

```text
$practica-project I want to implement the Jaipur board game. Write a README.md
and a VISION.md for this project, create the repository, and put them up as
the first PR with the license.
```

The skill—not the prompt—knows that `VISION.md` excludes roadmap and technology, that the output is only three files, and that it must stop after opening the PR.

## Skill assets and templates

The skills should share a versioned resource bundle:

```text
skills/
  practica-project/
  practica-vision/
  practica-domain/
    references/game-rules.md
    references/business-domain.md
    references/tool-requirements.md
  practica-scaffold/
    references/evidence-contract.md
    references/web.md
    references/ios.md
    references/android.md
    references/desktop.md
    references/cli.md
    references/service.md
    templates/e2e/
    templates/ci/
  practica-mvp-design/
  practica-plan/
  practica-tracer/
  practica-audit/
```

The templates should define required questions and invariants, not impose boilerplate prose. Generated documents should sound specific to the project and remain short enough to review.

### Canonical E2E strategy

The E2E strategy is the clearest example of something that should no longer be copied informally from Food, Jaipur, or RoboRally. `$practica-scaffold` should carry one platform-neutral evidence contract plus complete platform adaptations.

For web projects, the scaffold should use `@machinapractica/testing` for the executable step/evidence mechanics. The generated `E2E_GUIDE.md` should include a version marker such as:

```text
Machina Practica evidence contract: 1.x
Profile: web-playwright
Project adaptations: phone, desktop, 4K tabletop
```

The skill can then audit or upgrade the guide without overwriting project-specific scenario maps. Native profiles should produce the same conceptual evidence—semantic receipts, bounded waits, screenshots, result artifacts, and build identity—through XCTest/XCUITest, Android instrumentation, or desktop tooling even when an npm package cannot run there.

The complete strategy must include:

- what an E2E scenario proves and does not prove;
- ordinary user-action requirements;
- unified step ordering: act → wait for observable state → assert semantics → stabilize deterministic presentation → capture → document;
- scenario folder and walkthrough structure;
- clock, randomness, animation, font, network, and fixture rules;
- canonical baseline platform and cross-platform review policy;
- zero-diff expectations and explicit exceptions;
- Firebase/emulator or local-only isolation;
- multi-actor and viewer/privacy assertions where applicable;
- production-build execution;
- local commands, CI artifacts, and baseline-review workflow;
- a review checklist.

This prevents the partial reuse seen in early GotFive setup, where the guide, workflow platform, screenshot authority, and desired application framework diverged.

## Division of responsibility: skills versus packages

Skills decide **how to work and what belongs in the current phase**. Packages provide **tested mechanics once the phase has authorized them**.

| Concern | Skill responsibility | Package/template responsibility |
| --- | --- | --- |
| Vision purity | Generate/review only product intent | Document schema/checklist; no runtime package |
| Domain understanding | Read sources, distinguish facts and ambiguity | Domain-specific reference templates |
| Blank platform scaffold | Select profile, create minimal target, stop before product architecture | Platform scaffold files and CI templates |
| E2E evidence | Adapt canonical strategy and define viewports/manual gates | `@machinapractica/testing` on web; native template helpers elsewhere |
| Build identity | Require visible revision and artifact linkage | `@machinapractica/build-info` |
| Pages previews | Require safe preview and verify it | `@machinapractica/pages` plus explicit GitHub workflow templates |
| Event sourcing | Decide whether the MVP needs it | `@machinapractica/events` only after MVP approval |
| Firebase event transport | Define trust/privacy/authorization | `@machinapractica/events-firestore` when selected |
| Room lifecycle | Define roles, hidden information, and reconnect semantics | `@machinapractica/rooms` when selected |
| Offline PWA | Decide interruption, deletion, and freshness behavior | `@machinapractica/pwa` when selected |
| Tracer delivery | Enforce one outcome and complete evidence | Consumer packages used as ordinary dependencies |

The platform scaffold can safely use testing, build-info, and deployment packages because those prove the scaffold itself. It should not import events, Firebase, rooms, or PWA packages until the MVP design selects those capabilities.

If an `@machinapractica` package is not ready, the skill may generate a small project-local implementation following the same contract. Project creation must not be blocked on central-library maturity.

## Small PR and commit policy

The default history for a new project should look like this:

| PR | Expected contents | Preferred commits |
| --- | --- | --- |
| #1 Intent | `README.md`, `VISION.md`, `LICENSE` | One initial intent commit; one correction commit only if review changes the vision |
| #2 Domain | `RULES_SUMMARY.md` or equivalent, source notes if needed | One domain summary; optional separate verified-data/source correction |
| #3 Scaffold | Blank target app, toolchain, E2E guide/helper/launch scenario, CI/CD and preview | 1. target/build scaffold; 2. executable evidence; 3. CI/deployment, when separation improves review |
| #4 MVP design | `MVP_DESIGN.md`, optional UX/architecture companion | One design commit; follow-up decision corrections kept distinct |
| #5 Plan | `IMPLEMENTATION_PLAN.md`, initial status | One tracer-plan commit |
| #6+ Tracers | One user-visible vertical slice | One implementation commit plus optional reviewed-baseline commit |

PR size is governed by conceptual scope, not line count. A generated lock file or first screenshot set can be large while still belonging to one scaffold concern. Conversely, changing vision, architecture, platform, and gameplay in a 50-line PR is still too broad.

Skills should preserve the repository’s prior documents rather than continually rewriting them. Changed decisions receive an explicit amendment, ADR, or new design revision; `IMPLEMENTATION_STATUS.md` records reality. This avoids turning plans into retroactive descriptions of whatever happened.

## Example project sequences

### A tabletop game such as Jaipur

1. `$practica-vision`: README, product vision, license. No Svelte, Firebase, rules, or roadmap.
2. `$practica-domain game`: summarize the exact rules edition, components, setup, turn, scoring, end conditions, hidden information, and ambiguities.
3. `$practica-scaffold web`: a responsive blank Jaipur splash on phone and tabletop, pinned SvelteKit toolchain, full E2E contract, launch screenshots, CI, build identity, and retained Pages preview. No room or cards yet.
4. `$practica-mvp-design`: select shared tabletop/private phones, trustworthy-client or server authority, append-only replay, room identity, privacy projections, responsive geometry, recovery, and the exact MVP rules subset. Select relevant `@machinapractica` packages.
5. `$practica-plan`: divide the MVP into create/join, deterministic setup/private hands, take good, take camels, exchange, sell, scoring, complete match, replay/recovery, and accessibility tracers.
6. `$practica-tracer 1`: implement only create/join through real transport and reload.

### MathPub-like authoring software

1. Vision defines reproducible, inspectable mathematical publishing for authors and agents without choosing TeX/Sage/Tauri.
2. Domain defines components, publications, projections, seeds, mathematical evidence, provenance, and author-review workflow.
3. Scaffold proves the chosen CLI/desktop/web surfaces build and launch, with a blank workspace, synthetic non-mathematical fixture, E2E evidence, and CI.
4. MVP design selects TeX/Sage, component schemas, trust boundaries, projection isolation, diagnostics, and preview architecture.
5. Plan begins with one real component producing one checked worksheet/solution projection end to end.

### An uptime service

1. Vision defines whose systems are monitored, what confidence and calm response should feel like, and what is deliberately not promised.
2. Domain defines checks, observations, transitions, incidents, notification/acknowledgement, maintenance, and retention semantics.
3. Scaffold launches a blank service and status UI, proves packaging, health, E2E, CI, deployment preview, and build identity without performing real checks.
4. MVP design selects scheduling, persistence, failure thresholds, notification trust, secrets, tenancy, and recovery.
5. Plan starts with one local HTTP target and one full check → observation → status transition → UI journey.

The same phase skills work because they organize knowledge and evidence, not because the projects share a UI framework.

## One-shot policy

The user, not the skill, decides how many phases to combine. The skill can advise using these signals:

**Keep phases separate when:**

- the domain has an external rulebook, archive, regulation, protocol, or production history;
- hidden information, multiple actors, native platforms, hardware, credentials, or external mutations are involved;
- the MVP has more than one primary user journey;
- source assets or licensing need review;
- a mistaken state/trust decision would invalidate later work.

**Combining through scaffold is reasonable when:**

- the product is local-only or static;
- the complete domain fits in a short reviewed statement;
- there is one surface and one primary journey;
- the platform and deployment are already standard;
- the PR remains easy to review as distinct commits.

**Combining MVP and implementation is reasonable only when:** the first useful product is itself one tracer, as with a tiny calibration tool or shuffled category deck.

Even in one-shot mode, the agent should create commits in phase order and run the same boundary audit. One-shot means fewer review stops, not blended documents or skipped evidence.

## What not to build first

- Do not begin with a universal source-code generator. It would encode platform and architecture decisions earlier than this method permits.
- Do not create one enormous `$practica-new-project` skill containing every domain and platform rule. Use a dispatcher plus focused skills and references.
- Do not make `@machinapractica/events` or Firebase the default for all projects. They become candidates during MVP design.
- Do not force a design system. The commonality across the projects is engineering method and evidence, not visual identity.
- Do not copy a sibling branch wholesale. QuorTexTT and GotFive show how quickly framework, naming, internal-state assertions, and baseline assumptions become accidental requirements.
- Do not make `PROMPTS.md` the product specification. It is provenance; reviewed artifacts are authoritative.
- Do not let the implementation plan resolve product or architecture questions that should return to MVP review.

## Implementation order for this system

### Step 1: create the document-boundary skills

Implement `$practica-vision`, `$practica-domain`, `$practica-mvp-design`, and `$practica-plan` first. They require no central runtime packages and directly address the highest-frequency friction: mixed-purpose documents, skipped confirmation points, and plans that invent design.

Test them by running the same seed prompt for three shapes—a game, MathPub-like authoring system, and uptime service—and auditing that each phase writes only its permitted artifacts.

### Step 2: create the scaffold skill and evidence profiles

Implement `$practica-scaffold` with web first, using RoboRally, WFME, Sudoku, Food’s E2E guide, and the prompt history in MediNag as source evidence. Its first acceptance case is intentionally modest: blank app, exact build identity, one semantic responsive launch journey, reviewed screenshots/walkthrough, full local verifier, CI, and a real preview.

Add iOS and Android profiles from the native evidence in Player, Hunger, MediNag, and Todo only after the web profile works from an empty directory.

### Step 3: publish the minimum packages needed by scaffolds

Build `@machinapractica/testing`, `@machinapractica/build-info`, and `@machinapractica/pages` in that order. These packages support project creation without choosing product architecture. Until each is proven, the scaffold skill can install project-local equivalents from its templates.

### Step 4: create the tracer and audit skills

Implement `$practica-tracer` and `$practica-audit`. Use the audit in CI for structural rules that can be checked mechanically and as an agent review for semantic boundaries that cannot be reduced to keywords.

### Step 5: connect later Machina Practica packages to MVP design

As `@machinapractica/events`, `@machinapractica/events-firestore`, `@machinapractica/rooms`, and `@machinapractica/pwa` mature, teach `$practica-mvp-design` when to recommend them and `$practica-tracer` how to apply them. Do not retrofit those packages into the earlier vision/domain/scaffold phases.

## Definition of success

The system works when the maintainer can give the same brief prompts they already use and reliably receive:

- a vision with no architecture or roadmap;
- a domain summary with no premature UI or technology;
- a blank but real target-platform scaffold with the complete established E2E strategy and CI/CD;
- an MVP design that makes product and technical decisions explicitly after the platform is proven;
- an implementation plan made entirely of reviewable tracer bullets;
- small PRs and commits that stop at the requested boundary;
- optional adoption of `@machinapractica` packages at the phase where their concerns become real.

The maintainer’s judgment about when to one-shot remains available, but it is no longer the only place the method exists. The skills carry the defaults; the packages carry the mechanics; each repository carries the project-specific truth.
