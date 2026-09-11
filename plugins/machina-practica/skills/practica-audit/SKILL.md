---
name: practica-audit
description: Inspect project phase boundaries, provenance, and test evidence without modifying the repository; distinguish mechanical findings from semantic judgment.
---

# Practica audit

Perform a read-only review unless the user separately asks for fixes. Do not run project commands with unknown side effects merely to inspect evidence. Prefer tracked files, existing logs, and read-only Git queries.

Establish the requested phase and user-approved exceptions first. Inspect the actual diff and authoritative artifacts. ../../scripts/phase_contract.py check PHASE PATH... identifies path-boundary violations; it does not judge prose semantics, grant approval, or prove implementation works.

Review semantic boundaries: product intent in VISION; external facts/ambiguity in domain summaries; explicit product/trust/architecture decisions in MVP design; ordered end-to-end outcomes in the plan; observed reality in status. A keyword such as 'database' in a quoted source is not automatically a violation. Explain context with path/line evidence.

For scaffolds, look for invented product behavior or infrastructure unrelated to proving startup. For tests, compare walkthrough claims to actual actions/assertions, source revision to artifacts, baseline candidates to review records, canonical platform to CI, and timeouts to observable conditions. Identify arbitrary waits, hidden production-service dependencies, silent retries, or tests that bypass the action they claim to prove.

Prioritize findings by consequence and provide a concrete correction without editing files. Distinguish confirmed errors, questions, and unverified claims. If reviewing skills themselves, use the three shapes in ../../evals/cases.json; static contract tests do not substitute for independent behavioral evaluation.

Report scope inspected, findings with evidence, and limitations. Do not mark a phase approved, migrate a consumer, or create a project as a side effect of an audit.
