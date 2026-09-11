---
name: practica-plan
description: Turn an accepted MVP design into ordered, independently reviewable end-to-end tracer bullets with observable outcomes and evidence; do not invent product scope.
---

# Practica plan

Read the accepted MVP design, domain invariants, platform verifier, and current implementation status. Establish approval from conversation/review evidence, not filenames. Resolve a design gap by returning it to the design decision, not inventing a feature in the plan.

Write IMPLEMENTATION_PLAN.md. Each tracer should travel from an ordinary user/interface entry through the real available production boundaries to an observable useful outcome. Use [the tracer record](references/tracer.md) to specify each step.

For each tracer record: entry/outcome; domain behavior and invariants; state/event/storage/transport implications; interface changes; fixtures; unit/contract/E2E evidence; visual states where relevant; documentation/status changes; complete verification command; prerequisites and explicit deferrals.

Start after the already-proven blank scaffold. Introduce infrastructure just in time for the first visible outcome that needs it. Reject steps such as 'build the backend', 'implement all reducers', or 'create all cards' unless recast as a bounded end-to-end outcome.

Order dependencies explicitly and check for cycles. Preserve the approved product boundary. Keep uncertainty visible and avoid dates/estimates unless requested. Scenario directories may be created only when useful for review; prospective readmes must say 'planned', never imply a test executed.

Review one step in detail: can it ship independently, use ordinary controls, and demonstrate recovery where its new persistence/transport introduces a failure mode? Do not execute the plan unless authorized. Follow existing provenance and PR requirements; the next selected tracer can be obvious without being in scope.
