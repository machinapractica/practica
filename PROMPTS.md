# Prompts

Verbatim prompts used to develop Practica. The prompt comes first; the small note below it records where it landed.

---

> Our goal is to create a github repo that publishes two books: "Effective Agents", a guide for human programmers to efficiently utilize agents for production-quality software projects, and "Machina Practica", a set of rules and skills designed to be injected into new projects to enable the agents to be more effective at delivering code. Write a README.md and a VISION.md for this project, create a git repo, use gh to create a github repo, and put up the initial README.md and VISION.md as the first PR.

Recorded 2026-06-26 from human maintainer. Produced PR #1: https://github.com/anicolao/practica/pull/1

---

> not bad. wherever the concern about eroding standards exists, replace it with the goal of *increasing quality*. For example, in the vision the statement is framed as "want agents to increase leverage without eroding standards" and it should read someting like "want agents to increase leverage while simultaneously raising standards". The real goal here is to enable teams to build *perfect* systems; that is, systems that do exactly what the engineering team intends them to do with no tolerance for imprecision or failure. Revise the docs with this in mind.

Recorded 2026-06-26 from human maintainer. Produced PR #1: https://github.com/anicolao/practica/pull/1

---

> OK we will want to record every prompt verbatim that is used to develop this project. Write an AGENTS.md or similar file that will be respected by all agents being used to write these books that specifies this, and write a PROMPTS.md that includes verbatim all the prompts used so far and the PRs they produced. Put this up as the next PR for review.

Recorded 2026-06-26 from human maintainer. Produced PR #2: https://github.com/anicolao/practica/pull/2

---

> PROMPTS.md markdown is a bit too heavyweight on structure/section headings/boilerplate, with the verbatim prompt itself in a hard to read single-line pre block. Reconsider the formatting to make it easier to read and focus on teh prompt itself rather than metadata. This PR lacks enforcement of its rules, which should be done in a precommit hook, a push hook, and CI workflows.

Recorded 2026-06-26 from human maintainer. Produced PR #2: https://github.com/anicolao/practica/pull/2


---

> Read SETUP_MD.md and follow its directions.

Recorded 2026-09-11 from human maintainer. PR: pending organization creation and transfer. The named file was absent; the agent read SETUP_MP.md and asked whether that was the intended execution brief.

---

> yes

Recorded 2026-09-11 from human maintainer. PR: pending organization creation and transfer. Confirms SETUP_MP.md as the execution brief. SETUP_MP.md, SETUP_PROPOSAL.md, and OURWAY_PROPOSAL.md are imported planning artifacts; this agent did not author their research or original text.

---

> Read SETUP_MD.md and follow its directions.

> yes

Recorded 2026-09-11 from human maintainer. Repeated verbatim from the bootstrap entries above to associate the same instructions with the separate website PR (pending). The confirmation refers to SETUP_MP.md. This branch prepares the website tracer and its build/evidence/deployment workflow.

---

> ok I logged into npm and created the machinapractica org. npm is logged in. Tell me again why I have to use github's website and waht the minimal steps are

Recorded 2026-09-11 from human maintainer. PR: pending bootstrap publication. Continues the authorized organization, repository, and website bootstrap.

---

> ok I have done it. let's complete setup

Recorded 2026-09-11 from human maintainer. PR: pending bootstrap publication. Continues the authorized organization, repository, and website bootstrap.

---

> GPLv3

Recorded 2026-09-11 from human maintainer. PR: pending bootstrap publication. Selects GPLv3 for original repository content.

Publication reference (2026-09-11): the bootstrap prompts recorded above produced https://github.com/machinapractica/practica/pull/3. This resolves their earlier pending PR references without changing historical prompt text.

Publication reference (2026-09-11): the bootstrap and GPLv3 prompts above also produced the separate website PR https://github.com/machinapractica/practica/pull/4.

Bootstrap validation note (2026-09-11, PR #4): the continuation prompt above includes upgrading the pinned Pages artifact action to v4, whose nested upload action is also pinned, to satisfy the verified organization SHA policy.

Bootstrap validation note (2026-09-11, PR #4): provenance fetches retain history instead of truncating main to depth one, so advancing main through a merge does not break ancestry checks or later pushes.

---

> I haven't had to do this manual work in the past. In ../annasdadpress teh agent was ablet o configur the settings for pages ... is this because we're working in an org? Minimize my manual work

Recorded 2026-09-11 from human maintainer. PR: pending domain launch follow-up. The authenticated Pages API supports custom domains and HTTPS for organization repositories. The separate optional Pages domain-claim verification is deferred under this instruction, following the existing Anna’s Dad Press setup; it is not a publishing prerequisite. Configure DNS and HTTPS through existing authorized tools and document actual results.

Publication reference (2026-09-11): the domain-launch continuation above produced https://github.com/machinapractica/practica/pull/5.

---

> OK let's complete as much as possible from SETUP_PROPOSAL.md and OURWAY_PROPOSAL.md without modifying source repositories (that is, create components that are meant to be re-usable, but don't yet put up PRs that morph existing projects to use them; build out the skills that are needed, but don't yet use them to create a new project).

Recorded 2026-09-11 from human maintainer. PRs: pending reusable skills and package implementation. Source repositories are read-only evidence; no consumer migrations or new projects are authorized.

PR reference for the 2026-09-11 reusable-components prompt: https://github.com/machinapractica/practica/pull/6. This PR contains the eight skills, shared resources and validation; it performs no source-repository migration or new-project creation.

Distribution follow-up for PR #6: retain the validated plugin ZIP with CI evidence so the reusable bundle can be downloaded without global installation or generating a project.


## npm publication continuation — 2026-09-12

Actor: user. PR: pending. Continuing the authorized initial publication and trusted-publisher setup. Prompts received verbatim:

> do you still require npm auth? it has gone stale, try again

> done

> done

> done

PR reference for the 2026-09-12 npm publication continuation: https://github.com/machinapractica/practica/pull/7.

## Website voice and purpose — 2026-09-12

Actor: user. PR: pending. Rewrite public copy and establish the website style guide.

```text
I had the following feedback on teh website: "Reading through MachinaPractica.  It's not clear to me whether this is an independent piece of software, a set of skills for a particular LLM, or a methodology for prompting" and I wrote back "ah I'll have to fix it up. It's meant to be a guide for humans working with LLMs, a set of skills/instructions for the LLMs, and a set of packages for the software that fit together as follows: human learns how to "hold it this way"; LLM knows how the human is trying to hold it; LLM re-uses premade components to make its life easier and the end result is reliable software faster, with reused components and skills and pre-designed methodology that is demonstrated to work". Then I read the website and ... well it is a mess. It's full of what I call "high-falutin' nonsense" - fancy marketing words, indirect language, high sounding goals ... crap in other words. We'll need to produce a style guide to fix it and rework all the copy. Stylistically this site should be as informal as possible while reading like a clear manual/book on how to do things. Our goal is to publish a methodology for development that makes humans and agents work well together: a manual for humans so that they know how to use the system, skills for agents so that they execute reliably given that the human understood and follows the methodology, and packages for agents so that they can build faster out of components that work. we want a system where common pitfalls found in other codebases don't exist: that is, usually agetns assume there are race conditions, flaky tests, a need for masking or fuzz in screenshot comparisons; these are all examples of bad patterns that are so prevalent the agent accepts them as fact. Not in our world! our components will be solid components that have different expectations for the software: race conditions are avoided by design, Ci environments are made 100% repeatable, screenshots are made fully deterministic. So, let's redo all the website copy ina much more straighforward style and try to do a better job of communicating this intent, and write a style guide for working on the website so that we can get the voice right over time.
```

PR reference for the 2026-09-12 website voice and purpose prompt: https://github.com/machinapractica/practica/pull/8. Includes the style guide, rewritten public pages and rendered vision, contributor guidance, and matching browser checks.

## Refine the website voice from an edited example — 2026-09-12

Actor: user. PR: pending. Apply the wording and style changes across the website and its style guide.

```text
Look at this edit and try to distill the style and wording changes to make another pass on the website: Now:

Machina Practica is a method for humans and coding agents to build
reliable software together. We're putting it into a human guide,
instructions the agent can follow, and software packages it can
reuse.

You learn how to direct the work. The agent gets instructions that
match your way of working. It uses tested components for the parts
that don't need inventing again. The goal is to get reliable software
built faster, with less repeated explanation and repair

Edited:

Machina Practica is a system for building reliable software.  It
consists of a programmer's guide, skills to make the agent effective,
and reusable software packages that ensure high quality results.

You'll learn how to direct the agent effectively. The agent gets
instructions that match this way of working. Tested components mean
reliable results, across a variety of projects and problem domains.
Welcome to the future of software development.
```

PR linkage for “Refine the website voice from an edited example — 2026-09-12”: https://github.com/machinapractica/practica/pull/9.

## Clarify the books and draft Effective Agents — 2026-09-12

Actor: user
PR: pending

```text
This is looking better and better. The "programmer's guide" is literally the book "Effective Agents", and this is a little unclear/buried in the current format. "Machina Practica" is a walkthrough of the skills that focuses on what their goals are intended to make it possible both to understand the skills and improve/update/maintain them ... I feel this book is a little less well defined. These books will be written in markdown to make them easy for agents to read but we'll want to format them with typst to create professional print copies at some point. Let's try making the website a little clearer about the books and then draft a bit of "Effective Agents" for review, perhaps the table of contents and first chapter.
```

PR linkage for “Clarify the books and draft Effective Agents — 2026-09-12”: https://github.com/machinapractica/practica/pull/10.

## Ground the book in the source projects — 2026-09-12

Actor: user
PR: pending

```text
this direct the work chapter is certified bullshit. we are supposed to be buildign on teh pattenrs we're extracting from the example projects, not making up a process out of thin air. Remove teh entire part from the book and begin with what is now part II. make sure to ground the draft in process that you've seen repeated across all the repositories that we're extracting components from.
```

PR linkage for “Ground the book in the source projects — 2026-09-12”: https://github.com/machinapractica/practica/pull/11.

## Teach through the Deepsea build — 2026-09-12

Actor: user
PR: pending

```text
Hmm. This is still no good. I don't want the book to be a reference to the projects. I want it to bre a how to manual, a practical dive in and get started guide. Let's instead look at deepsea and its prompts, and make the chapter be about building a simple game as an introduction to the method. Let's get the user to build this game following the path that was chosen for deepsea (see its PROMPTS.md).
```

PR linkage for “Teach through the Deepsea build — 2026-09-12”: https://github.com/machinapractica/practica/pull/12.

## Validate the chapter through the framework — 2026-09-12

Actor: user
PR: pending

```text
no this is still not waht I want. I don't want the user to have to prompt about things like keeping the vision clear. that should be in the *skill* not in the *prompt*. we're building a system for creating these results, not literally telling people to do what I've done so far. the goal is to extract these methods so that we do not have to apply workarounds like that. do we have the vision skill defined yet? maybe spend some time actually trying to build deepsea using the framework and the prompts you are authoring and use that to both write and validate the chapter.
```

### Independent vision trial — 2026-09-12

Actor: assistant to evaluation agent. Exact request follows.

```text
Work only in /Users/anicolao/projects/machinapractica/deepsea-framework-trial, an empty evaluation workspace. Read and use the skill at /Users/anicolao/projects/machinapractica/practica/plugins/machina-practica/skills/practica-vision/SKILL.md. Do not edit the skill or other repositories. No remote writes are authorized for this evaluation phase. Complete this request, then report the files created and any questions:

$practica-vision I want to build Deep Sea Adventure as a multiplayer web game for friends on their own devices. Write the README and vision.
```

### Independent foundation trial — 2026-09-12

Actor: assistant to evaluation agent.

```text
Continue in /Users/anicolao/projects/machinapractica/deepsea-framework-trial. Use the framework skills under /Users/anicolao/projects/machinapractica/practica/plugins/machina-practica/skills, starting with practica-project. Preserve the vision trial output for evaluation; do not edit the framework. Local git commits are permitted; remote writes are not. Record the request verbatim in the trial's PROMPTS.md. Report the actual result and verifier output, including screenshots for review.

The vision is accepted. Use a faithful base-game adaptation for friends, with GPLv3 for our code. Use the rules and explicitly documented project conventions in https://github.com/anicolao/deepsea/blob/f7caf9f4d7473f637ac6cbc71509f545c59e8d9a/RULES_SUMMARY.md as the starting material.

$practica-project Summarize the rules, then build and verify the blank web application. Keep this trial local for now.
```

### Independent playable-game trial — 2026-09-12

Actor: assistant to evaluation agent.

```text
Continue in /Users/anicolao/projects/machinapractica/deepsea-framework-trial. Use the current framework skills under /Users/anicolao/projects/machinapractica/practica/plugins/machina-practica/skills, starting with practica-project and loading the skills it selects. Do not edit the framework or other repositories. Local git commits and dependency installation are permitted. Remote writes remain outside this trial. Record this request verbatim. This is a combined design/planning/implementation evaluation; you may make reasonable product decisions within the accepted intent and documented rules conventions. Report milestone progress and retain the result of each verifier run.

The rules and blank app are accepted.

$practica-project Design and plan the playable Deep Sea game, then implement the plan. Keep it local for this trial, with friends joining from separate browsers. I want to play a complete three-dive game and start another one.
```

### Concurrent-join review feedback — 2026-09-12

Actor: assistant to evaluation agent.

```text
A parent review of the in-progress server reproduced a concurrency defect through its public HTTP interface: two overlapping joins both returned 201, but the final room contained only Host and Alice instead of Host, Alice and Bob. The reproduction is /tmp/deepsea-concurrent-join-review.mjs; it starts its own server and temporary data directory without modifying your files. The current practica-tracer skill now includes an explicit atomic acceptance and overlapping-request requirement. Read that updated skill, investigate this failure, and continue the authorized build and verification. Record this request verbatim and retain the failure plus the verified correction. Do not edit the framework.
```

### Out-of-order browser response review — 2026-09-12

Actor: assistant to evaluation agent.

```text
Parent browser review of the T1 production artifact reproduced a second race. A host sees Alice join, then a delayed older GET response removes Alice from the host's roster until the next poll. The server still retains Alice. Reproduction: /tmp/deepsea-stale-view-review.mjs (isolated server, two ordinary browser users, one delayed real response; no source changes). The practica-tracer skill now also requires obsolete-response handling and response-reordering tests. Read the updated requirement, investigate the observed failure and continue the authorized build. Record this request verbatim and retain the correction's verification. Do not edit the framework.
```

### Fresh lobby forward test — 2026-09-12

Actor: assistant to independent evaluation agent.

```text
Work only in /tmp/machina-deepsea-fresh-lobby, an isolated evaluation workspace containing accepted vision, rules, scaffold, design and implementation plan. Use the current skill at /Users/anicolao/projects/machinapractica/practica/plugins/machina-practica/skills/practica-tracer/SKILL.md and the references it selects. Do not edit the framework or other repositories. Local commits and dependency installation are permitted; remote writes are not. This evaluation authorizes only the first planned outcome, T1. Record this request verbatim and report actual artifacts, verification and any unresolved issues.

$practica-tracer Implement the first planned outcome: friends create and join a room from separate browsers and recover their seats after reload.
```

### Fresh trial resource allocation — 2026-09-12

Actor: assistant to independent evaluation agent.

```text
Evaluation harness resource allocation: another local trial owns 127.0.0.1:4179. Use 127.0.0.1:4189 for this isolated trial's application and browser verifier. Keep all application data within your own workspace. Record this harness constraint verbatim.
```

### Fresh trial fixed-wait policy failure — 2026-09-12

Actor: assistant to evaluation agent after its independent report.

```text
Parent review found that your reported final source a04fe136 contains prohibited fixed waits in tests/launch.spec.mjs: 100 ms before captures and 150 ms after each delayed-response release. These invalidate its wait-policy acceptance despite the green verifier. Read the current practica-tracer skill and its updated web reference. The framework now includes a reusable AST-based fixed-wait checker with its own positive/negative tests. Correct the trial and integrate the framework's enforcement into its verifier, then retain actual verification and reviewed screenshot results. Record this feedback verbatim. Keep the scope at T1 and do not edit the framework or other repositories.
```

PR linkage for “Validate the chapter through the framework — 2026-09-12” and its associated evaluation requests: https://github.com/machinapractica/practica/pull/13.

## Package-owned testing enforcement — 2026-09-13

Actor: user
PR: https://github.com/machinapractica/practica/pull/14
Related package PR: https://github.com/machinapractica/packages/pull/5

```text
I notice in the testing you did you encountered fixed sleeps. Can we not enforce the testing rules when the testing package is isntalled? It would ideally put precommits into the project that would fail the fixed waits without the user needing to ask the agent to do that or the agent doing it over again every tiem
```

Integration note: the framework prepare command selects its tracked provenance hooks before wrapping them with testing enforcement. AGENTS.md uses this command so future setup does not accidentally replace the testing hook.
