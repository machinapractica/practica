# Implementation plan

The user authorized design, planning and implementation together. This plan follows the accepted rules and [MVP_DESIGN.md](MVP_DESIGN.md), starting after the proven blank scaffold. No dates or remote work are implied.

## T1 — Friends share a recoverable lobby

Entry/outcome: one friend creates a room through the root form, another joins by code, and both see the roster. Reload restores the original seat. Prerequisite: accepted scaffold and design.

Introduce the same-origin server, durable version-1 room snapshots, random seat tokens, validated create/join/read commands and client polling because this outcome needs them. Render root/lobby, inline errors and connection status; keep gameplay explicitly unavailable until T2. Fixtures provide deterministic room-code randomness only in verifier processes. Contract tests cover invalid codes/names, capacity, unauthorized reads, future-schema refusal and restart persistence. Browser evidence captures independent host/guest views, reload and interrupted connection recovery. Preserve prior scaffold evidence and update current startup assertions.

Detailed independence check: users can create and join a durable room using ordinary controls without a game engine. A reload proves browser-seat recovery; a process restart contract proves transport/storage recovery. Failed writes must leave no half-created room. This milestone defers turns, scoring and rematch explicitly.

## T2 — Friends take turns and finish a dive

Prerequisite: T1. Entry/outcome: host selects the first swimmer and starts; each active friend chooses direction, rolls and resolves landing through their controls; safe return or oxygen exhaustion reaches a visible dive summary.

Add deterministic `base-1` rule transitions and server-private tile values. Persist game snapshots with revisions and deduplicated commands; validate active actor and role on the server. Render oxygen, ordered path, players, burdens, dice, landing actions and dive outcomes. Owner-selected loss ordering and indivisible stack grouping are part of completing a dive. Use seeded shuffle/dice prerequisites, never seed a completed user action. Unit tests cover movement/occupied end, zero movement, no reversal, oxygen timing, hidden projection, safe bank, loss order, stack indivisibility and cleanup. Public API tests cover forbidden/stale/duplicate actions and write failure. E2E performs a dive, reloads mid-turn, and asserts both browser projections.

This slice defers starting later dives and final match/rematch UI until T3, preserving the completed first-dive summary.

## T3 — Complete three dives and start another game

Prerequisite: T2. Entry/outcome: the host starts subsequent dives from their summaries, everybody sees the final scoring and tie result after dive three, then the host starts a fresh game in the same room.

Implement next-starter conventions, bank retention, empty-path completion, total scoring with level-4 tie-break/shared winners, and fresh game identity/reset. Reuse authoritative persistence and token seats. Add final result, start-next-dive and play-again controls. Unit evidence covers previous scores surviving failure, empty treasure path, all tie cases and clean rematch state. Browser evidence creates and joins normally, plays all three dives via ordinary controls with real server boundaries, asserts final results in both contexts, starts another game, and proves new scores/dive/oxygen and retained seats. Add a third-browser unauthorized/stale negative check and server-restart contract. No unperformed physical-device or production claim.

## Verification and documentation for every tracer

Each tracer uses a focused local implementation commit on the local playable-game branch and updates IMPLEMENTATION_STATUS.md truthfully. The complete verifier is `npm run verify -- --candidates` for a new source, followed after actual image review by `npm run verify` for exact reviewed-baseline comparison. It includes locked install, production build, Node unit/API contracts and Playwright scenarios. Every run, including failures, remains under revision/date-named `evidence/runs/`. Browser step receipts generate walkthroughs; relevant screenshots cover phone and desktop plus actor-specific game states. README and E2E_GUIDE track actual behavior and recovery limits. The final phase does not authorize remote publication.
