# Practica · Machina Practica

Practica is the flagship publishing and project-method repository of **Machina Practica**, an ecosystem for disciplined, repeatable agent-assisted software development. Its canonical website is [machinapractica.com](https://machinapractica.com).

Two connected books express the same thesis:

- **Effective Agents** helps human programmers frame, supervise, review, and integrate agent work to produce software that matches their intent.
- **Machina Practica** gives agents and maintainers operational rules, skills, and repository conventions for exact, reliable work.

Skills will turn that method into repeatable workflows. Independently released [`@machinapractica/*` packages](https://github.com/machinapractica/packages) will contain field-tested implementation mechanics. They have separate compatibility and release responsibilities.

This repository is pre-release. It contains the vision, prompt-provenance enforcement, and imported proposals. Book manuscripts, executable skills, and a plugin are not yet available. The package proposal is not a package catalog.

## Read and contribute

- [Vision](VISION.md): audience, thesis, and enduring principles.
- [Editorial plan](docs/EDITORIAL_PLAN.md): proposed book and method work.
- [Project setup proposal](docs/proposals/PROJECT_SETUP_PROPOSAL.md): staged development through focused skills.
- [Package extraction proposal](https://github.com/machinapractica/packages/blob/main/docs/proposals/PACKAGE_EXTRACTION_PROPOSAL.md): proposed runtime boundaries and evidence requirements.
- [Imported bootstrap brief](docs/transitions/MACHINA_PRACTICA_BOOTSTRAP.md): migration decisions and completion criteria.
- [Agent instructions](AGENTS.md) and [prompt ledger](PROMPTS.md): contribution provenance.

Use focused PRs with concrete examples and verifiable claims. Keep product intent in the vision and delivery sequencing in planning documents. Record every development prompt verbatim in the same branch. Enable the tracked hooks with `git config core.hooksPath .githooks`.

Original content is licensed under [GPLv3](LICENSE); see [licensing boundaries](LICENSES.md).

## Website tracer

Run `./scripts/verify.sh` with the pinned toolchain. See [website development](docs/WEBSITE.md) for content ownership, local serving, evidence, and deployment boundaries.
