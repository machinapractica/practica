# 1. Describe the product

**Effective Agents — review draft, 12 September 2026.** This chapter draws on the source projects listed in the [source notes](SOURCE_NOTES.md). The examples are existing repository documents and history.

Start by establishing what you're building. Put the product's purpose, intended experience and boundaries somewhere the agent can read and you can review. That gives the later design and implementation a stable reference.

This is how several of the source projects began. Sudoku's first substantive commit contained its vision, MVP design, UX design and test guide. Hunger established its product sources and design before adding an application shell. RoboRally began with the chosen game edition, rules and an implementation plan. Player combined its product documents with a runnable iPhone shell in its initial commit. Their foundations differ in size, but each makes the intended product explicit. [Early project history](SOURCE_NOTES.md#early-project-history)

We'll start with that foundation, then build the application and verification environment, design the first useful journey, and plan its implementation in complete slices.

## Write down the experience you're trying to create

Sudoku's early vision describes a puzzle that remembers your place, works without an account or connection, and supports thoughtful play on phones, tablets and desktops. That description gives later decisions something to answer to. Account creation and cloud synchronization would change the product's premise. Interruption recovery supports it. [Sudoku's initial vision](https://github.com/anicolao/sudoku/blob/2d45d2ad64677fae06a1a245547fe7dd896fb9cc/VISION.md)

Hunger starts from a different experience: a thirty-day program for learning about hunger and fullness through short check-ins. Its design makes the intended benefit explicit: the records should produce useful personal observations. It excludes calorie and nutrient entry. Those choices distinguish the product from Food, another extraction source whose MVP centers on photographing food and estimating nutrition. Similar subject matter leads to different software because the purpose is different. [Hunger's foundation](https://github.com/anicolao/hunger/blob/7ae11527feb7f6c6b760725b57fae2f0c47f34c0/MVP_DESIGN.md), [Food's MVP](https://github.com/anicolao/food/blob/e4748026d41a0ee7621deb8498fcbec72650d6f6/MVP_DESIGN.md)

Player's initial vision centers on people bringing their own audiobook files into a dependable local library. Import, ordering, metadata repair and preservation of listening position follow from that purpose. They belong in the product definition because they explain what makes this particular player useful. [Player's initial vision](https://github.com/anicolao/player/blob/18b629fa6a4fa53c17b0a75e8551826c92a6cf66/VISION.md)

For your project, make the same kinds of decisions explicit. Who will use it? What should they be able to do? What should the experience protect as the software grows? What tempting additions would take it away from that purpose?

These answers should be specific enough to settle a disagreement about scope. Sudoku's account-free operation and Hunger's exclusion of calorie entry do that. A promise to be “easy to use” would leave much more undecided.

## Establish which domain you're implementing

For a game, the title alone may leave the rules ambiguous. RoboRally identifies the 2005 Avalon Hill edition and separates it from other editions. Its repository keeps an edition survey and an implementation-oriented rules summary. X-Wing similarly identifies FFG's Second Edition Rules Reference v1.3.2 and treats later AMG formats as separate compatibility targets. [RoboRally's edition record](https://github.com/anicolao/roborally/blob/ca63494e49613d21b6a0daee29ad08823e05558f/EDITIONS.md), [X-Wing's product vision](https://github.com/anicolao/xwing/blob/015e73c79c6d795cfbcec903cfa0f50d9c3ef8f9/VISION.md)

This is work the agent must do before it can implement the right game. It needs to read the selected sources, record the rules it will use, and preserve unresolved questions. A familiar rule from a different edition is still the wrong rule.

The same concern appears outside games. Hunger's foundation retains source material about hunger and fullness alongside its product documents. Player defines which local audio files and import paths its first product will support. The relevant source might be a rulebook, a file format, an existing archive or an application being replaced. Establish what the project must understand, and keep that knowledge available beside the product description.

## Give each document a clear job

The source repositories use different document names and boundaries. Ark Nova describes its product and constraints in a README and design overview. RoboRally puts architecture and the delivery sequence together in its implementation plan. Sudoku's early README explicitly directs readers to separate product, technical, UX and testing documents. [Ark Nova's design overview](https://github.com/anicolao/arknova/blob/5d5ba6cdea76e6e611c8d2fb46cbdf6503b88184/DESIGN_OVERVIEW.md), [RoboRally's plan](https://github.com/anicolao/roborally/blob/ca63494e49613d21b6a0daee29ad08823e05558f/IMPLEMENTATION_PLAN.md), [Sudoku's early README](https://github.com/anicolao/sudoku/blob/2d45d2ad64677fae06a1a245547fe7dd896fb9cc/README.md)

Machina Practica makes those responsibilities explicit:

| Document | Its job |
| --- | --- |
| `README.md` | Introduce the repository, state its current status and point to the working documents. |
| `VISION.md` | Define the product's purpose, intended experience, principles and non-goals. |
| Rules or domain summary | Record the external knowledge the implementation must respect, with its sources and unresolved questions. |
| MVP design | Decide how the first useful product behaves and how its technical design supports that behavior. |
| Implementation plan | Order the work into complete, verifiable increments. |

This document separation is the synthesis in the [project setup proposal](../../docs/proposals/PROJECT_SETUP_PROPOSAL.md#phase-boundaries-and-document-contracts). It sharpens boundaries that vary in the source projects. It is not a claim that every repository already used these exact files.

Begin with the product and domain. Keep framework choices and the delivery schedule for their design and planning documents. That lets you revise an implementation choice without changing the reason the product exists.

## State what exists now

Hunger's early README says the repository contains product sources and MVP design and that the application has not yet been scaffolded. Sudoku's early README identifies a design milestone. Player's initial README can go further: it records a runnable SwiftUI scaffold and a launch-story test. Each statement describes the actual stage of that repository.

Use that distinction in your own README. Describe the intended product, then state what is implemented. A reader should be able to tell whether they are reviewing an idea, launching a shell or trying working product behavior.

The history matters here. Today's application may contain many completed features; its current README cannot show you what was present at the foundation stage. When learning from another project, read the early revision as well as the current one.

## Carry the foundation into the next stage

Before building the application foundation, review the product description and the domain material together. They should identify the intended users and experience, establish the relevant sources and boundaries, and make the current implementation status clear.

The next chapter follows the early application shells and launch tests. Sudoku and Hunger added their shells after the design foundation. RoboRally's first implementation established its development and deployment contract, including Firebase readiness. Player's first commit already included a native shell. Those differences will stay visible as we extract the common job: prove that the target application can build, launch and be checked before depending on it for broader product work.
