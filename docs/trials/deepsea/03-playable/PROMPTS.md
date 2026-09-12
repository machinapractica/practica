# Request provenance

## Initial vision request

```text
$practica-vision I want to build Deep Sea Adventure as a multiplayer web game for friends on their own devices. Write the README and vision.
```

## Domain and scaffold request

```text
Continue in /Users/anicolao/projects/machinapractica/deepsea-framework-trial. Use the framework skills under /Users/anicolao/projects/machinapractica/practica/plugins/machina-practica/skills, starting with practica-project. Preserve the vision trial output for evaluation; do not edit the framework. Local git commits are permitted; remote writes are not. Record the request verbatim in the trial's PROMPTS.md. Report the actual result and verifier output, including screenshots for review.

The vision is accepted. Use a faithful base-game adaptation for friends, with GPLv3 for our code. Use the rules and explicitly documented project conventions in https://github.com/anicolao/deepsea/blob/f7caf9f4d7473f637ac6cbc71509f545c59e8d9a/RULES_SUMMARY.md as the starting material.

$practica-project Summarize the rules, then build and verify the blank web application. Keep this trial local for now.
```

The initial README and VISION are preserved in commit 9c6824a. VISION.md remains byte-for-byte unchanged. The later request settles faithful base-game adaptation and code licensing; historical questions in the preserved vision do not reopen those decisions.

## Playable game request

```text
Continue in /Users/anicolao/projects/machinapractica/deepsea-framework-trial. Use the current framework skills under /Users/anicolao/projects/machinapractica/practica/plugins/machina-practica/skills, starting with practica-project and loading the skills it selects. Do not edit the framework or other repositories. Local git commits and dependency installation are permitted. Remote writes remain outside this trial. Record this request verbatim. This is a combined design/planning/implementation evaluation; you may make reasonable product decisions within the accepted intent and documented rules conventions. Report milestone progress and retain the result of each verifier run.

The rules and blank app are accepted.

$practica-project Design and plan the playable Deep Sea game, then implement the plan. Keep it local for this trial, with friends joining from separate browsers. I want to play a complete three-dive game and start another one.
```

## Concurrency review request

```text
A parent review of the in-progress server reproduced a concurrency defect through its public HTTP interface: two overlapping joins both returned 201, but the final room contained only Host and Alice instead of Host, Alice and Bob. The reproduction is /tmp/deepsea-concurrent-join-review.mjs; it starts its own server and temporary data directory without modifying your files. The current practica-tracer skill now includes an explicit atomic acceptance and overlapping-request requirement. Read that updated skill, investigate this failure, and continue the authorized build and verification. Record this request verbatim and retain the failure plus the verified correction. Do not edit the framework.
```

## Obsolete-response review request

```text
Parent browser review of the T1 production artifact reproduced a second race. A host sees Alice join, then a delayed older GET response removes Alice from the host's roster until the next poll. The server still retains Alice. Reproduction: /tmp/deepsea-stale-view-review.mjs (isolated server, two ordinary browser users, one delayed real response; no source changes). The practica-tracer skill now also requires obsolete-response handling and response-reordering tests. Read the updated requirement, investigate the observed failure and continue the authorized build. Record this request verbatim and retain the correction's verification. Do not edit the framework.
```
