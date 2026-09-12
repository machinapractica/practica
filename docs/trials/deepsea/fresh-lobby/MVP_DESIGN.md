# Playable local game

The accepted outcome is a group of 2–6 friends joining from separate browsers, playing the faithful three-dive base game, seeing the winner, and starting another game in the same room. The user authorizes design decisions and implementation together. [VISION.md](VISION.md) remains preserved; [RULES_SUMMARY.md](RULES_SUMMARY.md) is the rule authority, including its `base-1` conventions.

## Journey and surfaces

A friend opens the root page, enters a display name, and creates a room. Other friends enter its six-character code and their own names. A lobby lists all players in join order (clockwise seat order). The host chooses the most recent swimmer as first player and starts once 2–6 are present. Joining after start is refused; spectators and seat replacement are outside this MVP.

Every browser shows the same path, oxygen, dive number, current diver, public dice, directions, carried unit counts/levels, and banked scores. Each player controls only their own turn. After oxygen is spent, the current diver chooses direction before rolling. Landing controls allow leaving, collecting treasure, or placing one selected carried unit on a blank. The submarine ends participation for that dive. A compact rules reminder explains this sequence, burden and scoring.

When a dive ends, safe and stranded outcomes are visible. Stranded owners arrange their carried units in the desired loss order, then confirm; empty losses need no confirmation. Only after all required owners confirm are losses stacked deepest-first, blanks removed, and the next dive made available. The host starts the next dive, retaining banked scores. After dive three the result shows points, individual level-4 count, and all winners in a shared tie. The host starts another game with the same seats and selected starter; path, oxygen, dive count, scores and game identity reset.

Use a responsive card layout, readable levels and symbols, text labels for every action, real form labels, visible keyboard focus, an error alert and a polite connection/status region. The path wraps in order on narrow screens with numbered spaces; ordinary vertical scrolling is allowed. No color-only player identity. Core flows work by keyboard. Animations and time-sensitive inputs are unnecessary.

## Authority, transport and privacy

One local Node process is the authoritative room owner. It serves the built static client and same-origin JSON API. Browsers poll every 500 ms and after commands; server revisions prevent unnecessary rerenders. HTTP is sufficient for a turn-based local trial. No hosted service, account provider, WebSocket or service worker is needed.

Creating/joining issues a cryptographically random bearer token for that seat; the browser stores it locally per room, and the server persists only its hash. Names and room codes identify a room socially but cannot authorize turns. The server checks token, role, game phase, current player, expected revision and command ID. All command IDs are deduplicated for the room lifetime. Cross-origin browser mutations are rejected. This is a trusted local-network trial, not an Internet-ready authentication system.

Hidden tile point values, deck order values, random state and other players' credentials never enter API projections. Levels and stack sizes are public. Banked tile values are public after recovery. The client cannot choose dice or point values. Production uses server cryptographic randomness; the verifier may inject a fixed random sequence at process launch, never through a browser endpoint. Reducer rules accept randomness as an input for deterministic unit tests. There are no game clocks or turn timeouts.

## Persistence and recovery

Server-owned version-1 JSON snapshots in `.local-data/` contain rooms, tokens' hashes, `base-1` ruleset, current game, and accepted command IDs. A command is applied to a clone and persisted by temporary-file rename before becoming visible. A failed write rejects the command and leaves authoritative memory unchanged. This small single-process store needs no database or event replay layer.

The same browser reopens the room with its stored token after reload or interruption. Offline state disables actions and preserves the last visible board. A pending action is saved locally before sending; after an ambiguous network failure, explicit retry resends the same ID. Rejected actions explain the reason and refresh authoritative state. Stale tabs get conflict responses rather than extra moves. A disconnected active player pauses progress until returning; no bot, kick, host migration or replacement policy is promised.

Restarting the server reloads snapshots. Unknown storage/ruleset versions fail startup visibly; there are no existing game histories to migrate. Future schema changes require explicit migration or a documented compatibility refusal, never silent deletion. The process binds loopback by default; `HOST=0.0.0.0` permits friends on the same network. No remote deployment is part of this trial.

## Packages and evidence decisions

Inspected the current shared packages README, implementation-status and source-inventory reports, plus installed alpha APIs. npm provides `@machinapractica/testing` and `@machinapractica/build-info` at `0.1.0-alpha.0`; both are adopted for new recording/RGBA and artifact identity mechanics. Their reports cover Chromium/package contracts, not this game. The testing package emits receipt contract 1.0.0; our surrounding evidence policy remains 1.0.1. Product assertions, baseline review, PNG decoding, and verifier orchestration stay local because the package deliberately does not own them. Existing scaffold receipts remain readable historical evidence.

`@machinapractica/rooms` is unavailable from npm (404) and deferred in its source report. A small local HTTP room boundary is needed. No events, Firestore, PWA, tabletop or deployment package is required by this design.

Acceptance combines deterministic rule tests, public API authorization/privacy/conflict/restart tests, and real production-browser journeys with independent contexts. Browser tests must create/join/start/roll/choose/finish/rematch using ordinary controls, retain both actors' permitted views, and show reload recovery. Unit fixtures cover rare edge rules that a single ordinary match cannot reliably reach. All verifier runs retain logs, traces and candidate captures; reviewed exact RGBA baselines remain distinct. Physical devices, other engines, hostile-network security and public hosting remain unverified.

No decision blocks this local implementation. Public matchmaking, chat, audio, spectators, AI players, expansions, offline play and deployment are non-goals.
