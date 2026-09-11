---
name: practica-project
description: Route a project request to the appropriate Practica phase—vision, domain, scaffold, MVP design, plan, tracer, or read-only audit—while preserving the user’s requested scope.
---

# Practica project

This is a dispatcher, not a build-everything command.

Determine what the user explicitly requested, what accepted artifacts exist, and what work is already authorized. Inspect only enough to route. ../../scripts/phase_contract.py inspect PATH reports file-based observations; it cannot infer approval or that a verifier is green.

| Evidence | Applicable skill |
| --- | --- |
| Intent needs definition | ../practica-vision/SKILL.md |
| Intent established; external domain unclear | ../practica-domain/SKILL.md |
| Intent/domain understood; chosen platform unproven | ../practica-scaffold/SKILL.md |
| Platform proven; useful product/design undecided | ../practica-mvp-design/SKILL.md |
| Design accepted; tracer sequence absent | ../practica-plan/SKILL.md |
| Plan accepted; a named outcome requested | ../practica-tracer/SKILL.md |
| Boundaries/evidence need inspection | ../practica-audit/SKILL.md |

Read only the selected entrypoint and its relevant references. If installed without sibling skills, report the unavailable capability and follow the applicable document contract directly; do not claim to have invoked an unavailable skill.

An explicit request for a particular phase takes precedence over the table. Do not force a user back through completed phases because a preferred filename is absent. Ask only about missing information that actually blocks the requested phase; progress on independent work while waiting.

Default to the requested phase. If the user authorizes several phases or a one-shot project, execute in phase order with separate artifacts and proportionate commits; do not add approval stops between already-authorized phases. A broad authorization still does not permit unrelated work, purchases, invitations, or consumer migrations.

End with the concrete artifacts, validation, unresolved decisions, and next applicable phase. Do not turn a next-step suggestion into an unrequested action.
