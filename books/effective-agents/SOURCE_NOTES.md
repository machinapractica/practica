# Editorial source notes

These notes support the editor. The chapter itself is a practical build guide, not a comparison of repositories.

## Chapter 1: Build a game: Deep Sea

Primary source: [Deepsea's PROMPTS.md at f7caf9f](https://github.com/anicolao/deepsea/blob/f7caf9f4d7473f637ac6cbc71509f545c59e8d9a/PROMPTS.md). Reviewed 12 September 2026 from a read-only local clone, together with the README, vision, rules summary, MVP design, E2E guide, implementation plan, and two-player start walkthrough. The source repository was not changed.

The chapter's prompts are edited teaching adaptations, not verbatim quotations. They consolidate corrections into the initial request so the reader does not have to repeat the original mistakes. The reader creates a separate `deepsea-learning` project; no project was created while writing this chapter.

| Chapter step | Prompt-history basis | Editorial treatment |
| --- | --- | --- |
| Describe the game | 1–2, 4–5 | Correct the filename and state separate-device multiplayer at the start. Keep vision limited to the end state, excluding planning, visual direction and success criteria. |
| Put the project on GitHub | 3, 6–8 | Combine prompt recording, the hook, Nix, authenticated gh, public GPLv3 repository and documentation as the first PR. Use a different repository name for the exercise. |
| Establish rules and MVP | 9–10 | Preserve rules research and multiplayer design together. Supply the selected architecture directly; the reader does not need a Jaipur comparison to follow the lesson. |
| Design the experience | 11 | Preserve generated mockups and UX review before the shell. |
| Prove a coming-soon page | 12–13 | Preserve the E2E guide, initial page, strict screenshot/waiting rules and enforcement audit. Link the pinned guide as an input to the exercise. |
| Plan implementation | 14 | Plan after the tested shell, following the actual prompt order. |
| Deliver a usable multiplayer path | 15–17 | Incorporate the correction from infrastructure-only steps 1–3 to a complete create/join/ready/start journey. Require manual preview use and a live backend from the outset. |
| Complete gameplay | Implementation plan steps 5–10 | Forward exercise based on the existing plan, not a claim of an executed prompt sequence or verified finished game. |

## What the source actually verifies

At `f7caf9f4d7473f637ac6cbc71509f545c59e8d9a`, the [README](https://github.com/anicolao/deepsea/blob/f7caf9f4d7473f637ac6cbc71509f545c59e8d9a/README.md) and [implementation plan](https://github.com/anicolao/deepsea/blob/f7caf9f4d7473f637ac6cbc71509f545c59e8d9a/IMPLEMENTATION_PLAN.md) report implemented room creation, invitations, joining, readiness, starter selection, leaving, confirmed start, reload and live preview verification. Gameplay turns and the complete three-dive game remain unimplemented.

The [two-player walkthrough](https://github.com/anicolao/deepsea/blob/f7caf9f4d7473f637ac6cbc71509f545c59e8d9a/tests/e2e/003-two-player-start/README.md) records readiness/start, leaving/rejoining and late-arrival rejection. The chapter's final gameplay section follows the plan's remaining work. It needs an end-to-end reader trial as those steps are implemented before this can be called a fully exercised tutorial. No Deepsea tests were rerun during the editorial review.

The MVP design's introductory implementation-status paragraph lags behind the README and plan at this revision. Use the latter and the retained walkthroughs for the lobby status; do not propagate that stale paragraph into the tutorial.

## Rules and assets

The [rules summary](https://github.com/anicolao/deepsea/blob/f7caf9f4d7473f637ac6cbc71509f545c59e8d9a/RULES_SUMMARY.md) distinguishes publisher material, community transcriptions and accepted project conventions. The tutorial tells the reader to review sources and resolve discrepancies; it does not claim publisher verification of those conventions. Original placeholder graphics and GPLv3 for original contributions follow the source project's boundaries.

## Earlier research

The [cross-project notes](research/CROSS_PROJECT_NOTES.md) retain the earlier component-corpus research for later chapters. They are research material, not the opening chapter's teaching structure. Keep comparisons, commit history, uncertainty and claim-to-source mappings here rather than interrupting the reader's build instructions.
