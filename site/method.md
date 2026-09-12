---
layout: base.njk
title: The method and agent skills
description: You define the job and check the result. The agent follows matching instructions and reuses tested components. Here is the working sequence.
permalink: /method/
---
# The method and agent skills

Here, an agent is a coding tool built around a language model. It can read files, edit code and run tools. The method gives you and the agent a shared way to work. You decide what the software should do and what the agent is allowed to change. The agent follows instructions for the task, uses suitable components, and shows what it built and checked. You review the result against the job you agreed on.

The human guide teaches your part. The skills supply the agent's part. The packages supply reusable code. All three need to agree about what counts as finished.

## Work through one question at a time

1. **What are we building, and for whom?** Write down the intended result and what you're leaving out.
2. **What rules must it follow?** Read the relevant sources. Keep unresolved questions visible.
3. **Can we build, run and test it?** Set up a blank application and prove that the build and test tools work before adding product behavior.
4. **What's the first useful thing it should do?** Design one complete user journey, including failures and recovery.
5. **How will we build it in reviewable pieces?** Plan changes that each produce something you can try.
6. **Does this change do its job?** Implement it, test it through the ordinary interface, and review the result.

These steps separate different kinds of decisions. They don't require you to approve the same work repeatedly. You can authorize several steps together when you know what you want.

For a more detailed walkthrough, read [setting up a project](/proposals/project-setup/).

<h2 id="skills">What a skill does</h2>

A skill is a set of instructions the coding agent reads when it takes on a task. It says what to inspect, what to produce, and how to check the work. It can include reference files and small tools.

For example, the setup skill tells the agent to prove that a blank application builds and runs. It keeps the agent from adding an account system or database before you've decided the product needs one. The implementation skill asks it to test the requested behavior before taking a screenshot and reporting success.

There are eight experimental skills: vision, domain research, project setup, product design, planning, implementation, audit, and a dispatcher that selects the appropriate skill. The audit skill inspects a project without changing it.

## Which agents can use this?

The method isn't tied to one model. The current skill bundle is packaged for Codex. Its instructions are readable files, but another agent tool may need different packaging to load them. We haven't verified the bundle with every agent tool.

You can [inspect the skills and bundle instructions](https://github.com/machinapractica/practica/blob/main/docs/SKILLS.md). Their structural checks pass, but they haven't yet been used to create a project. That still needs testing; valid instruction files alone don't prove reliable agent behavior.

## What counts as a passing test?

A test must perform the action it claims to test, wait for an observable result, and check that result. Then it can capture a screenshot and record what happened.

If the test sometimes fails, investigate the cause. Make event order explicit. Control the data, clock, randomness and external services. Use the same toolchain and rendering environment each time. Screenshot comparisons should then have zero pixel differences. Masking a changing area or increasing the allowed difference doesn't fix unexplained variation.

An intentional visual change needs a reviewed new baseline. A different platform needs its own declared rendering environment. Neither is a reason to accept unexplained differences within the same environment.
