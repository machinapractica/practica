# Website style guide

Write as if you're explaining the method to a programmer sitting beside you. Be informal, direct and useful. The site should read like a manual you can learn from, without having to translate marketing copy first.

This guide applies to public pages, navigation, headings, metadata, captions, error messages, and repository text rendered on the site. It also applies to new book excerpts when we publish them. Read it before changing website copy.

## Explain the project first

A new reader should understand these three parts from the home page:

1. The human guide teaches you how to direct an agent and check its work.
2. The skills give the agent instructions that match the method you've learned.
3. The packages give it tested code to reuse in the software and its tools.

Explain the connection, not just the inventory: you know how to work with the agent; it knows how you're working; it can use components built for the same expectations. The goal is reliable software built faster, with less repeated work.

Lead with what the project is and what a reader can do with it. Introduce the book titles after that. Explain that the companion manual and the overall project share the name Machina Practica when both appear on a page.

## Sound like a person writing instructions

Use “you” for the reader and “we” for the project. Contractions are fine. Prefer ordinary verbs: write, read, build, run, check, fix, reuse. Name who does the work and what they act on.

Keep paragraphs about one subject. Use numbered lists for steps and bullets for real choices or parallel items. Headings should tell readers what they'll learn or do: “What a skill does,” “Check the result,” “What's available.”

Informal doesn't mean sloppy or performatively chatty. Don't add slang, jokes, exclamation marks or “just” to make a difficult task sound easy. Keep useful technical detail and explain unfamiliar terms when they first matter.

Read a draft aloud. If you wouldn't say a sentence to someone asking how this works, rewrite it.

## Replace abstractions with actions

| Avoid | Write something like |
| --- | --- |
| Make intent executable. | Describe the job, let the agent build it, and check the result. |
| One thesis. Two readers. | The human guide and agent instructions teach the same method. |
| Human judgment, agent workflows, and evidence carry intent into working systems. | You define the job. The agent follows the agreed steps and shows what it tested. |
| Leverage field-tested implementation mechanics. | Reuse the code that has already been tested for this job. |
| Produce reviewable evidence. | Save the test results, screenshots and source revision so someone can check them. |
| Establish robust feedback loops. | Run the tests after the change and investigate any failure. |
| A practical operating system for agent-assisted programming. | A development method, a human guide, agent skills and software packages. |

These are editing examples, not mandatory phrases or a forbidden-word checker. “Evidence” can be useful when you've said what the evidence contains. A source quotation may use language we wouldn't use ourselves. Judge what the sentence tells the reader.

Avoid “ecosystem,” “flagship,” “empower,” “unlock,” “transform,” “seamless,” and similar sales language when a concrete description would do the job. Don't replace one slogan with another.

## Show how advice works

After a general instruction, give a small example if the reader still has to guess what to do.

Weak: “Provide sufficient context.”

Useful: “For an export feature, say which records belong in the file, who can export them, and what should happen when there are no records.”

Use one running example where it helps. Don't imply that an illustrative example is a shipped feature or a completed project.

## State the reliability expectations clearly

Our method expects race conditions to be avoided by design, CI to be 100% repeatable in its declared environment, and screenshots to be fully deterministic. Don't soften that into “reduce flakiness” or advise readers to tolerate unexplained variation.

Explain what those expectations require:

- Make state transitions and their order explicit. Wait for observable state instead of guessing how long work takes.
- Pin the environment and control inputs, clocks, randomness, fixtures and external services.
- For screenshots, also control fonts, animations and the rendering environment. Expect zero pixel differences within that environment.
- Fix a flaky test. Don't present retries, screenshot masks or fuzzy comparisons as a cure for unexplained differences.
- Review intentional visual changes before accepting a new baseline. Declare a separate environment for another platform.

Keep the standard separate from proof that we've met it. “This is what our components must do” is a requirement. “This component does it” needs actual test or deployment evidence, with the environment and limits stated. Don't claim identical pixels across arbitrary operating systems or that one package import removes every race from an application.

## Say what exists today

Use present tense for delivered work. Use “planned,” “we want,” or “still needs testing” for work that hasn't happened. Update stale status text when a release ships.

Don't call an implementation proven because it compiles, its instruction files validate, or its own unit tests pass. Distinguish package tests from real consumer adoption, skill file validation from agent behavior, and a deployment plan from a working deployment.

Put the main explanation first, then the relevant status and limits nearby. Don't bury a useful page under a catalogue of internal project gates. Link detailed implementation reports and proposals for readers who need them.

## Use consistent names

- **Machina Practica:** the overall method and publishing project; also the planned companion manual for agents.
- **Effective Agents:** the planned human-facing book.
- **Agent:** a coding tool that can read instructions and work in a repository. Define it when writing for unfamiliar readers.
- **Skill:** reusable task instructions, sometimes with reference files and tools. State which host packaging is actually supported.
- **Package:** reusable software code. Name the job it does before discussing its release machinery.
- **Deterministic:** the same controlled inputs and environment produce the same result. Say which result you mean.

Keep internal terms such as “tracer,” “scaffold,” and “provenance” out of introductions unless the reader needs them. Explain them where they become useful. Prefer “project setup” or “source revision” when that's all you mean.

## Keep public pages readable

Every page should answer one main reader question. Navigation and link labels should say what the destination contains. Descriptions and social previews should explain the page in plain language, not repeat a slogan.

A long internal proposal isn't a substitute for a public explanation. Keep the original research intact, write a useful overview, and link the detailed source. Maintain existing public URLs when rewriting a page.

## Before merging copy

Read the rendered pages on a phone and a desktop, and ask:

- Can a first-time reader explain what the three parts do and why they go together?
- Does each paragraph teach something or help the reader choose a next step?
- Have we named the action, actor and result instead of using an impressive abstraction?
- Are technical terms explained where they're needed?
- Are our reliability requirements clear, without claiming unperformed tests or adoption?
- Are current availability, links and examples accurate?
- Would you say this aloud without feeling like you're reading an advertisement?

Run the website verifier. Its tests check navigation, content presence and rendering behavior. They don't judge whether the writing is clear; that still needs an editorial read.
