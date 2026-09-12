---
layout: base.njk
title: Field-tested mechanics
description: Proposed packages under @machinapractica will extract reusable mechanics after source inventory and compatibility work.
permalink: /packages/
---
# Field-tested mechanics

The proposed `@machinapractica/*` packages will contain reusable implementation mechanics: evidence capture, build identity, deterministic replay, and other boundaries justified by working consumer code.

A shared package should remove duplication and maintenance while preserving product-specific rules, privacy boundaries, and presentation. Three real adopters and historical compatibility evidence are required before 1.0.

**Status: experimental alpha releases on npm.** `@machinapractica/testing` and `@machinapractica/build-info` are published at `0.1.0-alpha.0`, with source inventory and tests in the package repository. There are no consumer adopters yet.

Read the [package extraction proposal](https://github.com/machinapractica/packages/blob/main/docs/proposals/PACKAGE_EXTRACTION_PROPOSAL.md) in the [package repository](https://github.com/machinapractica/packages). The `@machinapractica` npm scope is reserved; release tooling and remaining evidence gates are documented in the repository.
