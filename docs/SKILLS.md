# Reusable phase skills

The experimental [Machina Practica plugin](../plugins/machina-practica/) contains eight skills: `practica-project` dispatches `vision`, `domain`, `scaffold`, `mvp-design`, `plan`, `tracer`, and read-only `audit`. Each can be used independently. Existing user authorization and repository instructions remain authoritative.

The plugin includes a versioned evidence contract, web launch-test, verifier, Playwright configuration, CI and guide fragments, platform references for web/iOS/Android/desktop/CLI/service, phase-boundary observations, and a behavioral evaluation specification. The native profiles are references, not verified native starter applications. The [Deep Sea trial](trials/deepsea/README.md) exercised the skills in a new local project, with requests that omit the procedure the skills should supply.

## Make the skills available in a project

From a checkout of this repository, run:

```sh
python3 scripts/install-project-skills.py /path/to/your/project
```

This installs all eight skills and their shared resources inside the project's `.agents` directory. It does not change global agent configuration. Existing skill names or an existing bundle cause a clear refusal before files are changed. Keep the installed files with the project; moving the project preserves their relative references.

Open the project in Codex and select `practica-vision` or `practica-project`. If newly installed skills are not visible, restart the session. Codex's [local skill documentation](https://learn.chatgpt.com/docs/build-skills#where-codex-loads-local-skills) describes `.agents/skills` discovery. The installer uses real directories: the local Codex 0.154.0 discovery check found all eight copied skills, while the initial symlink arrangement was not discovered.

For example:

```text
$practica-vision I want to build a multiplayer web game for friends. Write the README and vision.
```

The vision skill owns the document boundaries. The user does not need to repeat instructions about keeping architecture or milestones out of the vision.

## Browser wait enforcement

The web resources include `check-browser-waits.mjs`, an AST-based check for Playwright's forbidden `waitForTimeout` API. Copy it into a web project's verifier and pin `@babel/parser` (tested with 8.0.5), or use an equivalent existing lint rule. It handles JS/TS member references, including optional access, literal computed access and direct/destructured method aliases; it ignores comments and string examples. It does not prove arbitrary timer logic is sound. The profile requires a failing prohibited-call fixture and semantic review of other waits.

The website verifier exercises the checker and its three tests. The fresh Deep Sea trial integrated it after review found fixed sleeps in an otherwise passing run; an inserted violation failed verification, and the corrected trial passed without the sleeps.

## Validate the bundle

Validate and package from the repository root:

```sh
python3 -m unittest discover -s plugins/machina-practica/scripts -p 'test_*.py'
python3 plugins/machina-practica/scripts/validate_bundle.py --archive .artifacts/machina-practica-0.1.1.zip
```

The archive is reproducible and includes both portable `plugin.json` and the Codex compatibility manifest. It follows the [official plugin layout](https://developers.openai.com/plugins/build/plugins). Install the `plugins/machina-practica` directory through a host that supports that layout; this repository does not modify global agent configuration or enable skills in other projects.

`phase_contract.py check PHASE PATH...` checks changed paths, not prose meaning. `--allow PATH` records an already-authorized exception; it does not grant permission. `inspect ROOT` reports observed documents without inferring approval. Scope checks and bundle validation pass independently of model behavior. `evals/cases.json` specifies game, authoring-tool and service evaluations for later authorized execution; it is not a passing evaluation report.

## Proposal coverage

All eight phase instructions are implemented. The web evidence contract and portable resources are available for review. The Deep Sea trial adds actual project creation and observed agent behavior to the structural tests. Native qualification, adoption in existing repositories, other-host qualification and marketplace publication remain unperformed. Consult its report for phase-specific results; one trial is not a general reliability measurement.

See [proposal implementation status](IMPLEMENTATION_STATUS.md) for delivered components and remaining gates.
