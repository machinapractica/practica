---
layout: base.njk
title: Reusable software packages
description: Packages give coding agents tested components to build with. The first alpha releases handle test records and build identity.
permalink: /packages/
---
# Reusable software packages

Packages are code that an agent can use in your software and its build and test tools. The skills tell the agent how to work; the packages save it from writing the same supporting code again.

We want that reused code to come with clear expectations: explicit state changes, repeatable tests, and checks that catch mistakes. Reuse is useful when it removes work and keeps the behavior you depend on.

## Available now

Two experimental packages are published at `0.1.0-alpha.0`. Both are early releases, with no consumer adopters yet.

### @machinapractica/testing

Tools for recording what a test did and checked. They support bounded waits for observable results, separate browser sessions for different users, screenshot records, and file hashes. Checks run before captures. A failed step stays failed.

It also provides an exact comparison of decoded image pixels. You supply the product checks and deterministic test environment; importing the package doesn't make an uncontrolled screenshot repeatable.

Read the [testing package instructions](https://github.com/machinapractica/packages/blob/main/packages/testing/README.md).

### @machinapractica/build-info

Tools for identifying the source revision and contents of a build, checking whether its files changed, and comparing a running build with an available update. The update check reports what it found; your application decides when to refresh.

Read the [build-info package instructions](https://github.com/machinapractica/packages/blob/main/packages/build-info/README.md).

## Try an explicit alpha version

```sh
npm install @machinapractica/testing@0.1.0-alpha.0
npm install @machinapractica/build-info@0.1.0-alpha.0
```

Choose the package you need. Both use GPLv3. The first releases were published from the tested local artifacts. GitHub trusted publishing is configured for future releases; those first versions have no GitHub provenance attestation.

## What still needs proving

The package tests check their own behavior and installation. We still need to use them in independent projects, remove the code they replace, and show that existing behavior stays intact. Before 1.0, each package needs three real adopters and compatibility tests against retained histories or build artifacts, as appropriate.

Packages for event replay, multiplayer rooms, offline updates and deployment are planned. Their shared behavior needs more work and testing before we publish them. The [package extraction proposal](https://github.com/machinapractica/packages/blob/main/docs/proposals/PACKAGE_EXTRACTION_PROPOSAL.md) has the detailed working notes.
