# What we're trying to build

Machina Practica is a system for building reliable software. It combines a programmer's guide, effective agent skills and reusable software packages. Together, they provide a shared method and tested components for high quality results across projects and problem domains.

## How the pieces fit

The system has three parts:

- **A programmer's guide.** Learn to direct the agent effectively, define successful results and verify the software it delivers.
- **Agent skills.** Equip the agent to apply the shared method to research, planning, implementation and verification.
- **Reusable software packages.** Build on tested components with consistent behavior across projects.

You direct the work. The agent applies the skills. Tested components provide the foundation for reliable results.

*Effective Agents* is the programmer's guide. *Machina Practica*, the companion book, walks through the skills and their goals so people and agents can understand, improve and maintain them. Both books use Markdown source, with Typst print editions planned. The skills and packages also support individual development tasks.

## Who this is for

This is for programmers who use coding agents and want to trust the resulting software. It's also for people maintaining the instructions and tools those agents use.

You remain responsible for deciding what to build and accepting the result. The agent should make more of the work practical to delegate, while making its changes easier to inspect and test.

## Engineering standards

The system sets explicit standards for software quality:

**Avoid races by design.** Make the order of state changes clear. A correct result should follow from that design, without depending on lucky timing.

**Make CI 100% repeatable in its declared environment.** The same source and controlled inputs should produce the same build and test results. A failure that disappears on a retry still needs an explanation and a fix.

**Make screenshots fully deterministic in the chosen rendering environment.** Fix the data, clock, fonts, animations and other inputs that affect the image. Expect zero pixel differences. Unexplained variation must be fixed before a screenshot can be trusted as a check. Intentional visual changes need explicit review.

**Test what the person actually does.** A test should use the application's ordinary interface and check the result. A screenshot alone doesn't prove that the action worked.

**Prove shared components in real projects.** Keep the tests and old examples that show which behavior must be preserved. Reuse should remove duplicated code and maintenance.

These standards guide the design and acceptance of every component. Demonstrate them through tests and use in real projects.

## How we'll teach it

Use worked examples and direct instructions. If we say “give the agent context,” show which files to give it, what questions to settle, and how to tell whether the information was enough.

Keep decisions, instructions and test results available for review. Explain failures and limits plainly. Improve the method when real use shows that a step is unclear or a component doesn't behave as intended.

## Results across projects

The programmer directs the agent effectively. The agent follows a consistent method and builds on tested components. The result is reliable software, built efficiently across a variety of projects and problem domains.
