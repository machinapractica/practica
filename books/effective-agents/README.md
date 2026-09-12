# Effective Agents

The programmer's guide to building reliable software with agents.

**Review draft — 12 September 2026.** Start with [Chapter 1: Build a game: Deep Sea](01-build-deep-sea.md). It gives you prompts to use, results to inspect and a game to build. The remaining chapters are an outline.

## Get started

1. **[Build a game: Deep Sea](01-build-deep-sea.md).** Install the skills in an empty project. Describe the game, try the first page, then ask the agent to build a complete game you can play in separate browsers.

## Understand each stage

2. **Describe the product and understand its domain.** Keep the vision about the intended experience. Read the sources, resolve ambiguities and define the first useful product.
3. **Design the experience.** Work through screens, actions, waiting states, errors and recovery before committing to implementation.
4. **Establish the build and tests.** Make a small application run through the production build, browser checks and deployment path. Enforce the testing rules.
5. **Plan complete increments.** Give each piece of work an outcome you can try. Bring infrastructure and interface together in usable previews.

## Deliver and maintain reliable software

6. **Build with skills and shared components.** Use reusable instructions and software for established jobs, checking that they fit your product.
7. **Make results repeatable.** Control inputs and the environment. Use observable state, deterministic replay and exact visual checks.
8. **Investigate a failure.** Reproduce a defect, understand its cause, repair it and verify the result.
9. **Review and release.** Try the real user journey, inspect its checks and identify the build that was deployed or installed.
10. **Improve the shared system.** Turn repeated work into maintained skills and components, preserving the behavior that projects depend on.

## Draft status

Chapter 1 uses short product requests with the Machina Practica skills. The exercise has been run from vision through a complete local three-dive game and rematch. The [trial report](../../docs/trials/deepsea/README.md) records the results, framework corrections and fresh lobby evaluation. Physical devices and public deployment remain unqualified.

[Editorial source notes](SOURCE_NOTES.md) retain the provenance and limits outside the chapter. [Book source and editions](../README.md) describes Markdown authorship and planned Typst print editions.
