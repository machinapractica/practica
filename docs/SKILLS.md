# Reusable phase skills

The experimental [Machina Practica plugin](../plugins/machina-practica/) contains eight skills: `practica-project` dispatches `vision`, `domain`, `scaffold`, `mvp-design`, `plan`, `tracer`, and read-only `audit`. Each can be used independently. Existing user authorization and repository instructions remain authoritative.

The plugin includes a versioned evidence contract, web launch-test, verifier, Playwright configuration, CI and guide fragments, platform references for web/iOS/Android/desktop/CLI/service, phase-boundary observations, and a behavioral evaluation specification. The native profiles are references, not verified native starter applications. No new project has been generated with these skills yet.

Validate and package from the repository root:

```sh
python3 -m unittest discover -s plugins/machina-practica/scripts -p 'test_*.py'
python3 plugins/machina-practica/scripts/validate_bundle.py --archive .artifacts/machina-practica-0.1.0.zip
```

The archive is reproducible and includes both portable `plugin.json` and the Codex compatibility manifest. It follows the [official plugin layout](https://developers.openai.com/plugins/build/plugins). Install the `plugins/machina-practica` directory through a host that supports that layout; this repository does not modify global agent configuration or enable skills in other projects.

`phase_contract.py check PHASE PATH...` checks changed paths, not prose meaning. `--allow PATH` records an already-authorized exception; it does not grant permission. `inspect ROOT` reports observed documents without inferring approval. Scope checks and bundle validation pass independently of model behavior. `evals/cases.json` specifies game, authoring-tool and service evaluations for later authorized execution; it is not a passing evaluation report.

## Proposal coverage

All eight phase instructions are implemented. The web evidence contract and portable resources are available for review. Project creation, native qualification, model behavioral evaluations, adoption in existing repositories, and publication through a marketplace remain unperformed. The current scope deliberately exercises the tools only against temporary unit fixtures.

See [proposal implementation status](IMPLEMENTATION_STATUS.md) for delivered components and remaining gates.
