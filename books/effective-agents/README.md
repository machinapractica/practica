# Effective Agents

The programmer's guide to building reliable software with agents.

**Review draft — 12 September 2026.** This is a proposed table of contents. Only [Chapter 1](01-direct-the-work.md) has been drafted. Chapter titles and sequence are open for review.

## Part I: Direct the work

1. **[Direct the work](01-direct-the-work.md).** Define a useful result, set boundaries, and delegate a change you can check. Follow one example from the initial request to acceptance.
2. **Give the agent what it needs.** Supply repository instructions, domain rules and examples. Keep decisions in durable documents and resolve questions that affect the result.
3. **Agree on scope and authority.** Decide what the agent can carry through independently and where it must stop. Handle discoveries and changes of direction without repeating approvals.

## Part II: Build a project that can be trusted

4. **Describe the product.** Write a short vision: who it serves, what they can do, and what belongs outside it. Use that vision to settle implementation choices.
5. **Make the blank application work.** Establish the build, launch test and source identity before adding features. Provide one command that checks the production output.
6. **Design the first useful journey.** Describe what a person sees and does, including empty states, errors and recovery. Select components that support that journey.
7. **Plan changes you can try.** Break the journey into small, complete changes. Give each one a starting state, expected behavior and a way to verify it.

## Part III: Deliver reliable changes

8. **Build with skills and shared components.** Choose the instructions and packages that fit the task. Check their assumptions and preserve the behavior other projects depend on.
9. **Make results repeatable.** Design explicit state transitions. Control the environment, data, time and external services. Require repeatable CI and exact screenshots within a declared rendering environment.
10. **Investigate a failure.** Reproduce the problem, trace its cause and verify the fix. Work through a timing defect without accepting retries or relaxed comparisons as the solution.
11. **Review and release the result.** Try the ordinary user journey, inspect the change and test records, and identify the build being released. Distinguish completed work from remaining limits.

## Part IV: Keep the system useful

12. **Improve the way you work.** Turn recurring explanations and repairs into better instructions or components. Check that an improvement works in the projects it is meant to help.

## Planned reference material

- A task brief with a worked example.
- A guide to the phase skills and when each is useful.
- A review checklist for behavior, repeatability and release status.
- A glossary of terms used in the book.

## Questions for this draft's review

- Does Chapter 1 establish the reader's role clearly enough to start using the method?
- Is the export example concrete enough, and should it continue through the later chapters?
- Does this sequence give enough attention to changing existing software as well as starting projects?

The [book source and edition plan](../README.md) describes Markdown authorship and the planned Typst print editions.
