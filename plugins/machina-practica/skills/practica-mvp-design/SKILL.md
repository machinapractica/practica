---
name: practica-mvp-design
description: Define the first useful product journey and its UX, state, trust, recovery, and architecture after intent and platform are established; do not schedule implementation.
---

# Practica mvp design

Read the accepted vision, domain artifact, scaffold evidence, and current user direction. A file's existence is not evidence of approval. If the user explicitly combines phases, preserve their order and keep outputs distinct.

Write MVP_DESIGN.md. Add UX_DESIGN.md or ARCHITECTURE.md only when a material concern cannot remain coherent in one design. Use [decision questions](references/decisions.md) to find omissions, not to force every project into event sourcing or multiple services.

Define one useful outcome, its ordinary entry-to-exit journey, explicit non-goals, and error/recovery states. Map the relevant domain rules to behavior; link the domain summary instead of reproducing it. Decide surfaces, responsive behavior, accessibility, offline promises, privacy, and the information each viewer can see.

Where applicable, decide canonical state, commands/events, determinism, clocks/randomness, storage, versioning/migrations, replay, trust, authorization, and external-system failure. State 'not needed' with a reason for irrelevant concerns. Make ownership of each durable fact and each security decision explicit. Do not claim client-visible data is secret because a UI hides it.

Consult [package selection](references/packages.md) only for capabilities this MVP needs. Verify actual package availability and experimental limits before selecting one. Packages serve the design; their existence is not a reason to add Firebase, PWA, rooms, or event sourcing.

Mockups may resolve a consequential spatial or interaction question; label them as review references, not implemented assets or pixel promises. Specify observable acceptance evidence and what automation cannot prove.

Keep ordered PR/commit sequencing out. Open product or architecture decisions remain explicit; do not hide them as future implementation tasks. Finish the requested design and identify any decisions that actually block the next authorized phase.
