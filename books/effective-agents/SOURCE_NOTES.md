# Editorial source notes

The chapter teaches the reader to build a game with the framework. These notes retain its research and distinguish observed results from expectations.

## Source project

Reviewed Deepsea at `f7caf9f4d7473f637ac6cbc71509f545c59e8d9a`: [prompt history](https://github.com/anicolao/deepsea/blob/f7caf9f4d7473f637ac6cbc71509f545c59e8d9a/PROMPTS.md), README, vision, rules summary, MVP design, E2E guide, implementation plan and two-player walkthrough. The original repository remains unchanged.

The history establishes the product and the reasons for the method: separate intent from implementation, research the rules, establish repeatable verification and deliver complete player journeys. Some of those practices originally arrived as corrective prompts. The framework should supply them without requiring the reader to repeat those corrections.

At that revision, Deepsea implemented the multiplayer lobby through confirmed start and reload, with a working preview. Gameplay and the three-dive lifecycle were still planned. The new trial's results must not be attributed to that original implementation.

## Framework trial

The [retained trial report](../../docs/trials/deepsea/README.md) includes exact agent requests, outputs and verification evidence. An independent agent works in a separate local repository with the framework skills and the chapter's product requests. The harness names its workspace, skill location and allowed side effects; it does not repeat the skills' engineering or document rules.

The chapter's three prompts come from those requests. Its installation step was tested separately with Codex's actual skill discovery. This distinction matters: the build trial explicitly loads the skill files; the discovery check proves that the project installation exposes their names to Codex. Neither alone proves all possible host integrations.

| Chapter action | Evidence |
| --- | --- |
| Install project skills | Installer tests plus retained Codex 0.154.0 discovery of all eight skills |
| Describe the game | Vision trial produced README and VISION with no architecture or plan; no corrective prompt |
| Establish rules and run the blank app | Sourced rules and production browser checks; phone and desktop captures reviewed and compared exactly |
| Build and play three dives | See the playable-game phase in the trial report for its current result and limits |

The trial deliberately keeps delivery local. GitHub provisioning, Firebase and public preview deployment from the original project's history are not prerequisites for this exercise. A local trial does not qualify the deployment workflow or demonstrate repeatability across operating systems.

## Rules and assets

The [pinned rules summary](https://github.com/anicolao/deepsea/blob/f7caf9f4d7473f637ac6cbc71509f545c59e8d9a/RULES_SUMMARY.md) identifies publisher material, community sources and accepted project conventions. The trial uses that summary as starting material; it does not claim publisher verification of the conventions. The chapter asks the reader to review product rules. It uses original graphics and GPLv3 for original code.

## Earlier research

The [cross-project notes](research/CROSS_PROJECT_NOTES.md) retain the component-corpus research for later chapters. They are editorial material, not the opening lesson's structure. A single successful trial is evidence of that execution, not a measured reliability rate across projects or agents.
