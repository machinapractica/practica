# What we're trying to build

Machina Practica is a method for developing software with coding agents. We want humans and agents to work from the same instructions and expectations, and to reuse components that have been tested properly. The result should be reliable software built faster, with less repeated work.

## How the pieces fit

The project has three parts:

- **A manual for humans.** Learn how to define a job, give an agent the right information, decide what it can do, and check its work.
- **Skills and instructions for agents.** Give the agent a repeatable way to do the work the manual teaches you to ask for.
- **Software packages.** Give the agent tested components for common jobs, so each project doesn't have to invent them again.

You learn how to use the method. The agent knows which method you're using. The shared components support the behavior you both expect.

The planned human book is called *Effective Agents*. Its companion manual for agents is called *Machina Practica*. The instructions and packages should also be useful on their own, without requiring someone to read two books before making a change.

## Who this is for

This is for programmers who use coding agents and want to trust the resulting software. It's also for people maintaining the instructions and tools those agents use.

You remain responsible for deciding what to build and accepting the result. The agent should make more of the work practical to delegate, while making its changes easier to inspect and test.

## The standards we want

Common faults in existing software shouldn't become assumptions in our method. An agent may have seen plenty of flaky tests or advice to hide screenshot differences. We want its instructions and components to teach different expectations.

**Avoid races by design.** Make the order of state changes clear. A correct result should follow from that design, without depending on lucky timing.

**Make CI 100% repeatable in its declared environment.** The same source and controlled inputs should produce the same build and test results. A failure that disappears on a retry still needs an explanation and a fix.

**Make screenshots fully deterministic in the chosen rendering environment.** Fix the data, clock, fonts, animations and other inputs that affect the image. Expect zero pixel differences. Unexplained variation must be fixed before a screenshot can be trusted as a check. Intentional visual changes need explicit review.

**Test what the person actually does.** A test should use the application's ordinary interface and check the result. A screenshot alone doesn't prove that the action worked.

**Prove shared components in real projects.** Keep the tests and old examples that show which behavior must be preserved. Reuse should remove duplicated code and maintenance.

These are the standards we're building toward. They aren't a claim that every part of this young project already meets them. Each instruction and component needs evidence that it works.

## How we'll teach it

Use worked examples and direct instructions. If we say “give the agent context,” show which files to give it, what questions to settle, and how to tell whether the information was enough.

Keep decisions, instructions and test results available for review. Explain failures and limits plainly. Improve the method when real use shows that a step is unclear or a component doesn't behave as intended.

## What success looks like

A programmer can understand the method, direct an agent with it, and check the result without reconstructing the agent's reasoning. The agent can follow the agreed steps and reuse components without quietly lowering the quality bar. Real projects show less repeated work and more reliable results.
