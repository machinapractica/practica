---
layout: base.njk
title: The method and agent skills
description: You define the job and check the result. The agent follows matching instructions and reuses tested components. Here is the working sequence.
permalink: /method/
---
# The method and agent skills

The system gives you and the agent a shared method for building reliable software. You define the result and direct the work. The agent applies the relevant skills, builds with tested components, and verifies what it delivers.

A coding agent uses a language model to read files, edit code and run tools. Skills make that agent effective by giving it clear instructions for each task.

## Work through one question at a time

1. **What are we building, and for whom?** Write down the intended result and what you're leaving out.
2. **What rules must it follow?** Read the relevant sources. Keep unresolved questions visible.
3. **Can we build, run and test it?** Set up a blank application and prove that the build and test tools work before adding product behavior.
4. **What's the first useful thing it should do?** Design one complete user journey, including failures and recovery.
5. **How will we build it in reviewable pieces?** Plan changes that each produce something you can try.
6. **Does this change do its job?** Implement it, test it through the ordinary interface, and review the result.

Each step produces a clear result for the next. Authorize them individually or together to suit the work.

For a more detailed walkthrough, read [setting up a project](/proposals/project-setup/).

<h2 id="skills">What a skill does</h2>

A skill gives the agent a repeatable procedure for a task: what to inspect, what to produce, and how to verify the result. Reference files and tools support the procedure.

The setup skill establishes a working build and test environment. The implementation skill carries a change through to verified behavior. Each keeps the agent focused on the result you authorized.

There are eight experimental skills: vision, domain research, project setup, product design, planning, implementation, audit, and a dispatcher that selects the appropriate skill. The audit skill inspects a project without changing it.

## Which agents can use this?

The method applies across coding agents. The current skill bundle is packaged for Codex. Other tools may need an adapter to load the instructions.

## What counts as a passing test?

A passing test performs the user action, waits for the expected state, and verifies the result. Screenshots and test records follow those checks.

If the test sometimes fails, investigate the cause. Make event order explicit. Control the data, clock, randomness and external services. Use the same toolchain and rendering environment each time. Screenshot comparisons should then have zero pixel differences. Masking a changing area or increasing the allowed difference doesn't fix unexplained variation.

Review a new baseline for an intentional visual change. Declare a separate rendering environment for each platform. Within that environment, require exact results.

## Current status

Eight experimental skills are available. Their structural checks pass; project creation and use with other agent tools remain unverified. Read the [skills and bundle instructions](https://github.com/machinapractica/practica/blob/main/docs/SKILLS.md) for installation and validation details.
