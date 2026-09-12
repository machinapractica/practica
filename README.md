# Practica · Machina Practica

Machina Practica is a system for building reliable software. It combines a programmer's guide, effective agent skills and reusable software packages. This repository holds the website, book drafts, and agent skills.

The three parts fit together:

- *Effective Agents*, the programmer's guide, teaches you to direct the agent effectively.
- The skills give the agent instructions that match the method you've learned.
- The [`@machinapractica/*` packages](https://github.com/machinapractica/packages) give it tested software components to reuse.

Tested components support reliable results across projects and problem domains. We expect race conditions to be avoided by design, CI to be repeatable, and screenshots to be deterministic in their declared environment. Each part still has to demonstrate that it meets those expectations.

[Eight experimental skills](docs/SKILLS.md) and two alpha packages are available. *Effective Agents* has a [draft table of contents and first chapter](books/effective-agents/README.md). The companion book, *Machina Practica*, will explain the skills' goals and design to help people and agents maintain them. Both use Markdown source, with Typst print editions planned. The [Deep Sea build trial](docs/trials/deepsea/README.md) tests the skills with the book's prompts and records the results.

Read [how it works](https://machinapractica.com/method/) on the website. Use the [website style guide](docs/WEBSITE_STYLE_GUIDE.md) when editing public copy.

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
