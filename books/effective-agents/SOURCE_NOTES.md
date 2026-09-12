# Source notes for Effective Agents

Reviewed 12 September 2026. These notes are the evidence record for the outline and Chapter 1, not a claim that every future chapter has been researched or that the source applications were requalified in this review.

## Scope

The complete retained component corpus is the seven repositories in the packages repository's [source manifest](https://github.com/machinapractica/packages/blob/main/fixtures/source-manifest.json): Sudoku, Hunger, X-Wing, Ark Nova, RoboRally, Player and Food. All seven were inspected for this revision. Inspection covered committed product/design documents, available plans and test guides, early commit history, and retained helper or receipt implementations. Current launch walkthroughs were also inspected where available; they must not be mistaken for the contents of the first shell commit.

The wider extraction and setup proposals reference additional projects. The supporting examples below were checked in local committed source as well. The proposals are research leads and synthesis, not substitutes for inspecting the projects. No source repository was modified and no application test suite was rerun for this editorial work.

## Complete component-corpus comparison

Links pin the inspected source. Player's product review uses the newer local commit shown here; the package's retained native receipt remains pinned to `f497872fa719de7aa96758caa55bb325d6f228d1` in the extraction manifest.

| Project and inspected revision | Product foundation | Implementation and verification practice | Difference to preserve |
| --- | --- | --- | --- |
| [Sudoku, 815c59a](https://github.com/anicolao/sudoku/tree/815c59ab9ec0acede404f8dc8a808449e1f62e0c) | `VISION.md`, early `MVP_DESIGN.md`, `UX_DESIGN.md`; local-only puzzle experience. | `E2E_GUIDE.md`, numbered browser journeys and `tests/e2e/helpers/test-step-helper.ts`; semantic checks precede captures and generated walkthroughs. | Current product documentation has evolved from the initial design. Use the early revision when describing startup. |
| [Hunger, 784ebfa](https://github.com/anicolao/hunger/tree/784ebfa32724089867d8ec70332e690f9fbd520f) | `VISION.md`, `MVP_DESIGN.md`, `UX_DESIGN.md` and retained domain sources. | `IMPLEMENTATION_PLAN.md` orders complete capabilities; `E2E_GUIDE.md` explicitly adapts Food and Jaipur; helper checks precede capture. | Its plan uses serial verified commits in one PR, not one PR per phase or tracer. Product goals are not demonstrated health outcomes. |
| [X-Wing, 015e73c](https://github.com/anicolao/xwing/tree/015e73c79c6d795cfbcec903cfa0f50d9c3ef8f9) | `VISION.md`, `RULES_SUMMARY.md`; explicit rules edition and shared/private surfaces. | `IMPLEMENTATION_PLAN.md` names Jaipur and RoboRally as models; real interface, event/reducer/persistence paths, screenshots and walkthroughs. | Its domain and physical surfaces determine what an end-to-end journey must cross. |
| [Ark Nova, 5d5ba6c](https://github.com/anicolao/arknova/tree/5d5ba6cdea76e6e611c8d2fb46cbdf6503b88184) | `README.md`, `DESIGN_OVERVIEW.md`, `RULES_SUMMARY.md`; design before implementation. | `E2E_GUIDE.md` names Food and PhotoStore; the multi-surface helper runs each surface's semantic checks before its image. | A real Go server, JSONL log and projections; not a Firebase application and not the proposed document layout. |
| [RoboRally, ca63494](https://github.com/anicolao/roborally/tree/ca63494e49613d21b6a0daee29ad08823e05558f) | `README.md`, `EDITIONS.md`, `RULES.md`, `IMPLEMENTATION_PLAN.md`; exact 2005 edition. | Plan and E2E guide require complete user capabilities through real browser, reducer and emulator paths; retained helper combines assertions and capture. | Architecture and schedule coexist in the plan. The first foundation includes Firebase readiness; it is larger than the proposed blank scaffold. |
| [Player, 5f8e9e4](https://github.com/anicolao/player/tree/5f8e9e4d09f5a6f39e42bab608a2a6e7677ca7ba) | `VISION.md`, `MVP_DESIGN.md`, `UX_DESIGN.md`; local audiobook import and listening. | `IMPLEMENTATION_PLAN.md`, `E2E_GUIDE.md`, launch UI tests, walkthroughs and retained native qualification receipt code. | Design and shell share an initial commit. The delivery plan records a change from stacked PRs to serial commits. Native qualification is not browser evidence. |
| [Food, e474802](https://github.com/anicolao/food/tree/e4748026d41a0ee7621deb8498fcbec72650d6f6) | `MVP_DESIGN.md` connects photo logging, estimation, storage and user stories. | `E2E_GUIDE.md` specifies a unified verification/capture/documentation step and deterministic comparisons; source service worker is retained for later PWA extraction. | No root `VISION.md` in the inspected tree. Its extended-nutrition implementation plan is organized by layers; it is not evidence for the later tracer-plan discipline. |

The recurring foundation is explicit product knowledge and a verifiable path through the application. A uniform document set, universal PR cadence, and identical startup sequence are **not** observed across all seven.

## Early project history

These are actual commits, inspected with `git show` and commit-ordered history. They support chronology rather than inferring it from today's file names.

- **Sudoku:** [2d45d2a](https://github.com/anicolao/sudoku/commit/2d45d2ad64677fae06a1a245547fe7dd896fb9cc) contains README, vision, MVP/UX design and E2E guide; `8d5f780` follows with the application and preview CI. The early README explicitly calls itself a design milestone.
- **Hunger:** [7ae1152](https://github.com/anicolao/hunger/commit/7ae11527feb7f6c6b760725b57fae2f0c47f34c0) contains product sources, vision, MVP/UX design, E2E guide and toolchain files. It explicitly says the application is not scaffolded. `7c63772` adds the landing shell and first browser tracer; later `b0531da` records the implementation slices.
- **RoboRally:** [99c27ea](https://github.com/anicolao/roborally/commit/99c27ea2eb35e107b10d3dabf8c2d135bf96a901) documents the 2005 implementation; `755444c` supplies the first application foundation, followed by room and gameplay slices.
- **X-Wing:** `7d8168f` establishes the project foundation; `747d25b` adds the application, E2E plan and previews. Later product refinements must not be described as already present in that initial foundation.
- **Ark Nova:** `bb1363a` introduces project design; `774c687` adds technical architecture and the E2E guide; `ce53c5a` introduces a tracer-bullet roadmap. This is not the exact six-phase sequence proposed for new projects.
- **Player:** [18b629f](https://github.com/anicolao/player/commit/18b629fa6a4fa53c17b0a75e8551826c92a6cf66) combines product documents, native application scaffold and launch-story test. `7bea36f` later plans tracer bullets, followed by import/playback and position-restoration implementations.
- **Food:** early commits move through inspiration, environment/E2E conventions, MVP design, user stories and the event-store design before the initial MVP implementation. Its subsequent evolution supplied testing practices to other projects; it did not start with the final Machina Practica process.

## Supporting projects and explicit reuse

- [Jaipur's plan](https://github.com/anicolao/jaipur/blob/9dfd7ac287f5a8f6eac2a2bcec79333dd222335b/IMPLEMENTATION_PLAN.md) describes complete playable slices and names Rebel Princess as its model. Its early history goes from documented implementation to application shell, rooms and deterministic private rounds.
- [Istanbul's vision](https://github.com/anicolao/istanbul/blob/5dcf490f96579b54edea40dae5e93ff14bfd8ed3/VISION.md) describes the intended experience; its early history establishes project documents and an E2E contract before the shell and verification pipeline.
- [WFME](https://github.com/anicolao/wfme/tree/2866be21df1d64f01757de1d32746e5ed0dd5efb) starts with game design, then a responsive scaffold, reproducible toolchain and retained previews. It supports the application-foundation chapter.
- [MediNag's prompt ledger](https://github.com/anicolao/medinag/blob/feac1901b01510ce3e8c2045f72958166e10a6d3/PROMPTS.md) explicitly asks first to adapt Food's E2E guide and then to deploy a welcome page with no other behavior. This is direct human process evidence for the blank-shell step.
- [PhotoStore's E2E guide](https://github.com/anicolao/photostore/blob/691538588b66d99fcf4dfeccb857f69d8747b141/E2E_GUIDE.md) explicitly follows Food's testing strategy. Its vision and design overview separate the desired photo-library experience from event-store architecture.
- [MathPub's vision](https://github.com/anicolao/mathpub/blob/73597685dfaae5cf17810c2004991cf87c0d592c/VISION.md) defines reproducible mathematical publishing. Its early history moves from vision to MVP design and a Nix toolchain, providing a non-game comparison.
- [Zodiac](https://github.com/anicolao/zodiac/tree/d15821f1902b9643b86f3f29cc98af26742ce006) compresses the start into MVP documents followed by implementation, then preview and history work. It is evidence of a different grouping, not proof of one required phase cadence.

## What may be taught from this review

| Draft material | Basis and limit |
| --- | --- |
| Chapter 1: product, domain and current status | Early documents across the retained corpus; edition boundaries in RoboRally/X-Wing. Exact file responsibilities come from the setup proposal's synthesis. |
| Foundation, design and tracer-plan outline | Early shell history, launch walkthroughs and the Hunger/Player/X-Wing/RoboRally plans. Grouping and ordering vary. |
| Reuse and deterministic evidence outline | Explicit source-to-source reuse statements, retained browser helpers and native receipts. These establish repeated mechanics, not universal success or new-package adoption. |
| Failure investigation chapter | No case study drafted. Inspect a concrete defect, repair and verification history before writing one. |
| Extraction chapter | The packages source manifest and source inventory distinguish common boundaries, local policy, compatibility references and unperformed adoption. |

## Standards and source deviations

Machina Practica requires race conditions to be avoided by design, CI to be repeatable in its declared environment and screenshot comparisons to be exact. Inspection is not permission to inherit contrary source behavior. For example, Player's inspected E2E guide allows an 8/255 per-channel decoder difference, and Istanbul's inspected history includes an antialiasing-tolerance change. Record such deviations when studying them; do not present them as satisfying the system's zero-difference standard or hide them to make the history look uniform.

The six-phase setup sequence is a proposed organization of accumulated practice. Neither these notes nor the draft claim every source repository obeyed it, or that the experimental skills have now reproduced it in new projects.
