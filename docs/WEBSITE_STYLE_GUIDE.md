# Website style guide

Write for a programmer who wants to build reliable software with agents. Be direct, concise and confident. Explain the system and the results it delivers, then teach the reader how to use it. Plain language can be ambitious and welcoming.

This guide applies to public pages, navigation, headings, metadata, captions, error messages, and repository text rendered on the site. It also applies to new book excerpts when we publish them. Read it before changing website copy.

## Explain the project first

A new reader should understand these three parts from the home page:

1. *Effective Agents*, the programmer's guide, teaches you to direct the agent effectively.
2. The skills make the agent effective within that shared method.
3. The packages provide tested components for reliable results across projects.

Call the complete offering a **system for building reliable software**. Use **method** for the way of working within that system. The guide, skills and packages reinforce one another: the programmer learns the method, the agent follows it, and tested components provide consistent behavior across projects and problem domains.

Lead with what the project is and what a reader can do with it. Name *Effective Agents* when introducing the programmer's guide; they are the same book. Describe *Machina Practica*, the companion book, as a walkthrough of the skills' goals and design for people and agents who want to understand, improve and maintain them. Explain that this book and the overall system share a name. Both books use Markdown source; Typst print editions are planned, not available.

## Learn from the edited introduction

The owner's edited introduction is the voice reference:

> Machina Practica is a system for building reliable software. It consists of a programmer's guide, skills to make the agent effective, and reusable software packages that ensure high quality results.
>
> You'll learn how to direct the agent effectively. The agent gets instructions that match this way of working. Tested components mean reliable results, across a variety of projects and problem domains. Welcome to the future of software development.

Apply the changes behind those sentences:

- **Name the offering directly.** “Is a system” gives the reader a concrete definition. “We're putting it into” narrates our production process.
- **Name the reader precisely.** Use “programmer's guide” rather than “human guide.”
- **Describe function and benefit.** “Skills to make the agent effective” says why the instructions exist. “Instructions the agent can follow” only describes their form.
- **Use a shared method.** “This way of working” refers to the system the programmer learns. “Your way of working” can imply that the system adapts to any existing habits.
- **Prefer positive results.** Explain reliable results and reuse across problem domains. Don't keep selling the system through avoided repetition, repair or reinvention.
- **Compress the explanation.** Give each sentence a distinct job. Remove a second explanation of a relationship the reader already understands.
- **Allow conviction.** The closing invitation is deliberate. A short, confident invitation can follow a concrete explanation; it shouldn't replace that explanation.

Use the introduction as an editorial example, not a phrase template for every paragraph. Preserve the owner's wording when applying an explicit edit. Don't dilute it with automatic qualifiers. Keep actual availability and validation facts in a clearly labeled status section.

## Sound like a person writing instructions

Use “you” for the reader and “we” for the project. Contractions are fine. Prefer ordinary verbs: write, read, build, run, check, fix, reuse. Name who does the work and what they act on.

Keep paragraphs about one subject. Use numbered lists for steps and bullets for real choices or parallel items. Headings should tell readers what they'll learn or do: “What a skill does,” “Check the result,” “What's available.”

Informal doesn't mean sloppy or performatively chatty. Don't add slang, jokes, exclamation marks or “just” to make a difficult task sound easy. Keep useful technical detail and explain unfamiliar terms when they first matter.

Read a draft aloud. If you wouldn't say a sentence to someone asking how this works, rewrite it.

## Replace abstractions with actions

| Avoid | Write something like |
| --- | --- |
| Make intent executable. | Describe the job, let the agent build it, and check the result. |
| One thesis. Two readers. | The programmer's guide and agent skills teach the same method. |
| Human judgment, agent workflows, and evidence carry intent into working systems. | You define the job. The agent follows the agreed steps and shows what it tested. |
| Leverage field-tested implementation mechanics. | Reuse the code that has already been tested for this job. |
| Produce reviewable evidence. | Save the test results, screenshots and source revision so someone can check them. |
| Establish robust feedback loops. | Run the tests after the change and investigate any failure. |
| A practical operating system for agent-assisted programming. | A system with a programmer's guide, agent skills and reusable packages. |

These are editing examples, not mandatory phrases or a forbidden-word checker. “Evidence” can be useful when you've said what the evidence contains. A source quotation may use language we wouldn't use ourselves. Judge what the sentence tells the reader.

Avoid “ecosystem,” “flagship,” “empower,” “unlock,” “transform,” “seamless,” and similar sales language when a concrete description would do the job. A confident statement earns its place when the surrounding copy explains the system and its benefit. The approved “Welcome to the future of software development” is an invitation after the explanation, not a substitute for it.

## Show how advice works

After a general instruction, give a small example if the reader still has to guess what to do.

Weak: “Provide sufficient context.”

Useful: “For an export feature, say which records belong in the file, who can export them, and what should happen when there are no records.”

For the books, derive the method from the repositories supplying our components. Inspect their documents, code and history, retain exact source references, and use their actual examples. Do not invent a generic prompting process or fictional project as the basis of a chapter. Distinguish repeated practice from our proposed organization of it, and record source deviations from the reliability standard.

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

Use present tense to explain the system and each part's purpose. State what is available and what remains unverified in a dedicated status section. A planned guide can teach a method by design while its status clearly says that the manuscript is not yet available. Update that status when the work ships.

Don't call an implementation proven because it compiles, its instruction files validate, or its own unit tests pass. Distinguish package tests from real consumer adoption, skill file validation from agent behavior, and a deployment plan from a working deployment.

Keep status concise and distinct from the main explanation. State missing manuscripts, experimental releases and unverified adoption once, where readers can find them. Retain technical conditions where they affect use: for example, exact screenshot comparisons require a controlled rendering environment. Link detailed implementation reports for the rest.

## Use consistent names

- **Machina Practica:** the complete software development system; also the companion book explaining the skills' goals, design and maintenance.
- **Effective Agents:** the programmer's guide itself. Name it directly, rather than presenting it as a separate resource.
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
- Does each sentence explain the system, state a benefit, or teach an action?
- Have we removed production narration, repeated caveats and explanations the reader no longer needs?
- Have we named the action, actor and result instead of using an impressive abstraction?
- Are technical terms explained where they're needed?
- Are our reliability requirements clear, without claiming unperformed tests or adoption?
- Are current availability, links and examples accurate?
- Does the voice sound clear and confident, with enough substance to support its ambition?

Run the website verifier. Its tests check navigation, content presence and rendering behavior. They don't judge whether the writing is clear; that still needs an editorial read.
