# Proposal implementation status

Recorded 2026-09-12. Reusable components and skills are implemented without modifying the source/consumer repositories. The user has now authorized a separate Deep Sea build to test the framework and the book's prompts.

| Setup proposal component | Delivered | Remaining evidence |
| --- | --- | --- |
| Vision and domain | Separate skills; actual Deep Sea vision and rules outputs | Other domains and repeated behavioral trials |
| Scaffold | Blank-shell boundary, evidence contract v1.0.1, six platform profiles, web resources; local blank-app trial with reviewed exact screenshots | Real preview publication; native/hardware runs; other rendering environments |
| MVP design and plan | Separate contracts and package references; executed game design and three-outcome plan | Other project shapes |
| Tracer | Complete three-dive game/rematch; corrected races; fresh lobby evaluation; AST wait enforcement | More independent executions and target environments |
| Audit | Read-only instructions, contextual review, structural path checker | Independent semantic evaluation |
| Dispatcher | Phase routing and persistent authorization; exercised rules-to-scaffold request | Broader routing evaluation |
| Distribution | Portable and Codex-compatible metadata, GPLv3 bundle, reproducible ZIP; project installer and eight-skill Codex discovery | Marketplace distribution; other hosts |
| Verification | Six structural/bundle tests, three installer tests, three AST-policy tests, retained behavioral trial outputs | One observed execution does not establish general reliability |

The [Deep Sea trial report](trials/deepsea/README.md) separates agent behavior, host discovery and framework corrections. The chapter's prompts supply product intent and requested outcomes; the skills supply the procedure.

The [package repository](https://github.com/machinapractica/packages) contains source inventory, retained licensed reference modules and the experimental testing/build-info implementations. Both packages have initial `0.1.0-alpha.0` registry releases and configured GitHub trusted publishers. Their package verifier runs unit, CLI, browser and packed-install contracts. The trial report records whether the new application actually uses them.

Later event/transport/room/tabletop packages remain behind the proposal's historical compatibility and lower-layer adoption gates. PWA/Pages extraction awaits stable build identity and retained offline/deployment fixtures. No empty packages, fabricated histories or demo adoption counts were introduced to bypass those gates.

Read [skill usage and limits](SKILLS.md) for commands. Original research proposals remain intact; this status record does not rewrite their acceptance criteria.

## Package-owned testing enforcement — 2026-09-13

Bundle 0.1.2 delegates fixed-wait policy and Git hook setup to `@machinapractica/testing@0.1.0-alpha.1`. Web setup runs the package command automatically, including after installs with lifecycle scripts disabled. The copied AST checker and its duplicate tests are removed. The website uses the same package check in its verifier. Historical Deep Sea trial records remain unchanged; those trials used the earlier checker.
