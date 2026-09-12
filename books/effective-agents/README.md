# Effective Agents

The programmer's guide to building reliable software with agents.

**Review draft — 12 September 2026.** The book starts with establishing a product and building a working foundation. Only [Chapter 1: Describe the product](01-describe-the-product.md) is drafted; the remaining chapters are an outline.

The method is being extracted from the projects behind the Machina Practica components. The [source notes](SOURCE_NOTES.md) identify the repositories, revisions and observed practices behind this draft. Chapter order is our organization of those practices; the projects did not all follow an identical sequence.

## Part I: Build a project that can be trusted

1. **[Describe the product](01-describe-the-product.md).** Establish the product's purpose, intended experience and boundaries. Read the domain sources. Use the early Sudoku, Hunger, Player and RoboRally documents to understand what belongs in the foundation.
2. **Make the blank application work.** Build and launch the target application, establish its test contract, identify the build, and prove the deployment or installation path. Compare the web foundations in Sudoku, Hunger, X-Wing and RoboRally with Player's native launch story.
3. **Design the first useful journey.** Turn the product into a complete experience with explicit state, recovery and privacy decisions. Compare Hunger's check-ins, Player's import-to-playback path and the shared/private surfaces in the games.
4. **Plan changes you can try.** Use the tracer plans from Hunger, Player, X-Wing and RoboRally: each increment crosses the real application and ends in a user-visible result. Preserve the differences in their commit and PR arrangements.

## Part II: Deliver reliable changes

5. **Build with skills and shared components.** Follow the recorded reuse from Food and Jaipur into Hunger, and from Jaipur and RoboRally into X-Wing. Explain what Machina Practica is extracting from those local implementations and what still needs consumer validation.
6. **Make results repeatable.** Work through the source projects' explicit inputs, isolated state, observable waits, semantic checks and reviewed screenshots. Apply the system's exact-comparison requirement while recording source deviations honestly.
7. **Investigate a failure.** Develop a case study from a retained source fix, its test and its follow-up history. Select and inspect that history before drafting the chapter.
8. **Review and release the result.** Connect a completed user journey to its walkthrough, screenshots, source revision and deployed or installed artifact. Preserve the native qualification limits documented in Player.

## Part III: Keep the system useful

9. **Extract what repeats.** Compare implementations, separate common mechanics from product policy, and test compatibility. Use the testing and build-info extraction records; distinguish retained references from actual package adopters.

## Editorial work remaining

Review the opening chapter against its sources, then draft the application-foundation chapter from the early shell commits and their launch tests. Later chapters need equally specific source studies before prose is written. No invented application or generic prompting prelude is part of this outline.

The [book source and edition plan](../README.md) describes Markdown authorship and the planned Typst print editions.
