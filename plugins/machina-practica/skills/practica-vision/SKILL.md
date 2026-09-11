---
name: practica-vision
description: Write a project README and product vision from stated intent, keeping architecture, rules research, and delivery planning out of the initial phase.
---

# Practica vision

Turn the user's stated intent into a small, reviewable product definition.

Read supplied material and existing README/VISION first. Preserve accepted decisions and the user's requested output scope. An unfamiliar name may need identification; it does not justify importing another product's stack, features, or roadmap.

Write README.md and VISION.md. Include LICENSE only when the license is supplied or already established for this project; do not infer that a new project must use this plugin's GPL license. Follow any existing provenance requirements even when that adds PROMPTS.md to the default three-file boundary.

README answers identity, audience, current reality, and where authoritative documents live. VISION answers desired experience, outcomes, principles, non-goals, and product tensions. Adapt [the document questions](references/questions.md) instead of emitting every heading mechanically.

Keep frameworks, databases, data models, directory layout, schedules, milestones, and speculative feature lists out of the vision. If the user explicitly gives technical constraints, retain them in the handoff/PR description or existing appropriate document without presenting them as product principles. Preserve quoted source material when relocating misplaced content in an existing vision.

For uncertainty, state a narrow question or assumption, without inventing product scope. Reuse choices and authorization already in the conversation. Create a remote repository or PR only within the user's requested scope.

Before handoff, inspect the actual diff: default outputs are README.md, VISION.md, and an authorized LICENSE plus required provenance. The helper ../../scripts/phase_contract.py can check changed paths; semantic purity still needs judgment. Report current pre-implementation status honestly. Complete this phase; continue to a later phase only when the user's request covers it.
