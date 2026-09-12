---
layout: base.njk
title: Setting up a project
description: Start with the job, understand its rules, prove a blank application can build and run, then plan and implement one useful journey.
permalink: /proposals/project-setup/
---
# Setting up a project

This is the proposed setup sequence behind the experimental skills. It separates product decisions from the work of getting an application to build and run. We still need to try the skills together on a real new project.

## 1. Describe the job

Write a short README and a product vision. Explain who the software is for, what they should be able to do, and what's outside the project. Keep the current status honest: a plan isn't a working application.

The `practica-vision` skill handles this step.

## 2. Understand the rules

Give the agent the sources that define the problem: game rules, business requirements, file formats, or other relevant material. Ask it to summarize the facts and list unanswered questions. Settle those questions before treating an assumption as a requirement.

The `practica-domain` skill handles this step.

## 3. Prove the blank application works

Choose the platform and make the smallest application that builds, starts, and says the product isn't implemented yet. Fix the toolchain versions, expose the source revision, and provide one command that builds and tests the production output.

A launch test should open the application through its normal entry point, check what it shows, and retain the result. Don't add accounts, storage or product behavior just to make the blank application look more complete.

The `practica-scaffold` skill handles this step. It includes platform notes and web test templates. Native platform notes still need to be exercised on their targets.

## 4. Design one useful journey

Decide the first complete thing a person should be able to do. Explain what they see, what changes, what they can trust, and how they recover from mistakes or interruptions. Choose runtime components because this journey needs them.

The `practica-mvp-design` skill handles this step. “MVP” means the first useful version of the product.

## 5. Plan changes you can try

Break the journey into small changes with visible results. Each change should say how to start, what should happen, and how it will be tested. A task such as “build the database layer” doesn't tell a reviewer what a person can now do.

The `practica-plan` skill handles this step.

## 6. Build and check one change

Have the agent implement the selected change, run the complete verifier, and report what passed and what remains untested. Try the ordinary user action. Check the result before capturing screenshots. Investigate inconsistent results instead of adding retries or hiding differences.

The `practica-tracer` skill handles this step. Here, a tracer means a small change that works all the way through the application.

## Use the steps to organize work

You can authorize several steps together. The agent should keep their decisions and outputs clear without asking you to approve work you've already authorized.

`practica-project` selects a skill for the requested task. `practica-audit` reviews the project without changing it. Neither should infer your approval just because a document exists.

Read the [skill instructions](https://github.com/machinapractica/practica/blob/main/docs/SKILLS.md) to inspect the current bundle. The longer [project setup proposal](https://github.com/machinapractica/practica/blob/main/docs/proposals/PROJECT_SETUP_PROPOSAL.md) records the detailed document rules and research behind this sequence.
