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

## T1 evaluation request

Work only in /tmp/machina-deepsea-fresh-lobby, an isolated evaluation workspace containing accepted vision, rules, scaffold, design and implementation plan. Use the current skill at /Users/anicolao/projects/machinapractica/practica/plugins/machina-practica/skills/practica-tracer/SKILL.md and the references it selects. Do not edit the framework or other repositories. Local commits and dependency installation are permitted; remote writes are not. This evaluation authorizes only the first planned outcome, T1. Record this request verbatim and report actual artifacts, verification and any unresolved issues.

$practica-tracer Implement the first planned outcome: friends create and join a room from separate browsers and recover their seats after reload.

Evaluation harness resource allocation: another local trial owns 127.0.0.1:4179. Use 127.0.0.1:4189 for this isolated trial's application and browser verifier. Keep all application data within your own workspace. Record this harness constraint verbatim.

## T1 wait-policy review correction

Parent review found that your reported final source a04fe136 contains prohibited fixed waits in tests/launch.spec.mjs: 100 ms before captures and 150 ms after each delayed-response release. These invalidate its wait-policy acceptance despite the green verifier. Read the current practica-tracer skill and its updated web reference. The framework now includes a reusable AST-based fixed-wait checker with its own positive/negative tests. Correct the trial and integrate the framework's enforcement into its verifier, then retain actual verification and reviewed screenshot results. Record this feedback verbatim. Keep the scope at T1 and do not edit the framework or other repositories.
