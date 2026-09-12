---
layout: base.njk
title: Setting up a project
description: Start with the job, understand its rules, prove a blank application can build and run, then plan and implement one useful journey.
permalink: /proposals/project-setup/
---
# Setting up a project

Start with a clear product definition, establish a reliable build and test environment, then deliver one useful journey. The skills organize this work into six steps.

## 1. Describe the job

Write a short README and a product vision. Explain who the software is for, what they should be able to do, and what's outside the project. Record the current implementation status separately.

The `practica-vision` skill handles this step.

## 2. Understand the rules

Give the agent the sources that define the problem: game rules, business requirements, file formats, or other relevant material. Ask it to summarize the facts and list unanswered questions. Resolve open questions before implementation.

The `practica-domain` skill handles this step.

## 3. Prove the blank application works

Choose the platform and make the smallest application that builds, starts, and says the product isn't implemented yet. Fix the toolchain versions, expose the source revision, and provide one command that builds and tests the production output.

A launch test should open the application through its normal entry point, check what it shows, and retain the result. Add accounts, storage and product behavior when the product design calls for them.

The `practica-scaffold` skill handles this step. It includes platform notes and web test templates.

## 4. Design one useful journey

Decide the first complete thing a person should be able to do. Explain what they see, what changes, what they can trust, and how they recover from mistakes or interruptions. Choose runtime components because this journey needs them.

The `practica-mvp-design` skill handles this step. “MVP” means the first useful version of the product.

## 5. Plan changes you can try

Break the journey into small changes with visible results. Each change should say how to start, what should happen, and how it will be tested. Define each change by what a person can do with it.

The `practica-plan` skill handles this step.

## 6. Build and check one change

Have the agent implement the selected change, run the complete verifier, and report what passed and what remains untested. Try the ordinary user action. Check the result before capturing screenshots. Investigate inconsistent results instead of adding retries or hiding differences.

The `practica-tracer` skill handles this step. Here, a tracer means a small change that works all the way through the application.

## Use the steps to organize work

You can authorize several steps together. The agent should keep their decisions and outputs clear without asking you to approve work you've already authorized.

`practica-project` selects a skill for the requested task. `practica-audit` reviews the project without changing it. Both follow the scope you authorize.

Read the [skill instructions](https://github.com/machinapractica/practica/blob/main/docs/SKILLS.md) to inspect the current bundle. The longer [project setup proposal](https://github.com/machinapractica/practica/blob/main/docs/proposals/PROJECT_SETUP_PROPOSAL.md) records the detailed document rules and research behind this sequence.

## Current status

The skills are experimental. This complete sequence has not yet been used to create a project. Native platform notes also need validation on their target devices.
