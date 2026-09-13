---
layout: base.njk
title: Reusable software packages
description: Packages give coding agents tested components to build with. The first alpha releases handle test records and build identity.
permalink: /packages/
---
# Reusable software packages

Reusable packages give the agent tested components with consistent behavior across projects. They carry the system's engineering standards into the software, its builds, and its tests.

The skills guide the work. The packages provide the code. Together, they let the agent concentrate on the product while building on reliable foundations.

## Available now

The testing package is at `0.1.0-alpha.1`; build-info is at `0.1.0-alpha.0`. Both are early releases. The [Deep Sea trial](https://github.com/machinapractica/practica/blob/main/docs/trials/deepsea/README.md) uses them in a new local application; adoption in the existing source projects remains future work.

### @machinapractica/testing

Record verified test results with bounded waits, separate browser sessions for each user, screenshot records, and file hashes. The package runs checks before captures and preserves failed results.

Installing it also adds a Git commit check for fixed sleeps in tests. The project setup skill configures this check and its CI command automatically. Existing commit hooks keep working.

Exact pixel comparisons support deterministic screenshots. Combine them with controlled inputs and a fixed rendering environment to get repeatable results.

Read the [testing package instructions](https://github.com/machinapractica/packages/blob/main/packages/testing/README.md).

### @machinapractica/build-info

Identify the source revision and contents of a build, detect changed files, and check for available updates. Your application controls when to refresh.

Read the [build-info package instructions](https://github.com/machinapractica/packages/blob/main/packages/build-info/README.md).

## Try an explicit alpha version

```sh
npm install --save-dev --save-exact @machinapractica/testing@0.1.0-alpha.1
npx --no-install mp-testing setup
npm install @machinapractica/build-info@0.1.0-alpha.0
```

Choose the package you need. Both use GPLv3. The first releases were published from the tested local artifacts. Those initial versions have no GitHub provenance attestation. Testing alpha.1 uses GitHub trusted publishing.

## Adoption and validation

The packages have tests for behavior and installation. The next step is adoption in independent projects, with compatibility checks that preserve existing behavior. Before 1.0, each package needs three real adopters and compatibility tests against retained histories or build artifacts, as appropriate.

Packages for event replay, multiplayer rooms, offline updates and deployment are planned. Each will follow the same process of implementation, testing and adoption. The [package extraction proposal](https://github.com/machinapractica/packages/blob/main/docs/proposals/PACKAGE_EXTRACTION_PROPOSAL.md) has the detailed working notes.
