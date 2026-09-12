# Deep Sea Adventure

A multiplayer web game for friends to play Deep Sea Adventure together, each on their own device.

The aim is to make a shared game with friends feel easy to follow and enjoyable through a browser. The intended audience is an existing group of friends who want to play together.

## Current status

The T1 lobby lets friends create and join rooms from separate browsers and recover their seats after reload. Gameplay remains unavailable. See the T1 section below for persistence and recovery limits.

The accepted direction is a faithful base-game adaptation using the explicitly documented conventions in the supplied rules summary. The initial vision-trial documents remain preserved in commit `9c6824a`; VISION.md is unchanged for evaluation.

## Run and verify

Use Node 24.18.1 and npm 11.16.0. The application uses HTML/CSS/JavaScript, a durable Node room server, and locked public API and Playwright browser tests. Commit source changes before building.

`npm run verify` installs dependencies, builds, tests the production artifact, and compares exact pixels with reviewed local baselines. For the first run on a revision, generate candidates with `npm run verify -- --candidates`, inspect and record their review as described in [E2E_GUIDE.md](E2E_GUIDE.md), then run the normal verifier. All results remain under `evidence/`; `evidence/latest.json` identifies the latest run.

After verification, `npm run serve:production` serves the artifact at `http://127.0.0.1:4189`. Hosting is rooted at `/`; arbitrary subpaths return 404. Nothing has been published remotely.

## Project documents

- [VISION.md](VISION.md) is the authoritative statement of the desired experience, outcomes, principles, and scope questions.
- [RULES_SUMMARY.md](RULES_SUMMARY.md) records the sourced game lifecycle and accepted conventions.
- [E2E_GUIDE.md](E2E_GUIDE.md) defines the verifier, screenshot review, and evidence limits.
- [PROMPTS.md](PROMPTS.md) preserves requests and subsequent accepted decisions.
- This README describes the project and its current state.

Project code is licensed under [GNU GPLv3](LICENSE), SPDX `GPL-3.0-only`. The locally bundled Newsreader font is OFL-licensed; its license accompanies the production artifact. The supplied game's rules reference is attributed in RULES_SUMMARY.md.

## T1 recoverable lobby

The root form now creates and joins durable rooms for up to six friends. Each browser retains its own seat; reload and connection recovery preserve it. Interrupted create/join commands can be explicitly retried, including after reload, without taking another seat. Gameplay remains unavailable; T2 and T3 are not authorized by this evaluation.

Run `npm run serve:production` after building, then open `http://127.0.0.1:4189`. Set `HOST=0.0.0.0` for a trusted local-network trial. Snapshots and a server token-derivation key are stored in `.local-data/`; preserve that whole directory across restarts. Clearing browser storage loses its seat credentials. The most recently used room reopens automatically. There is no seat replacement or room deletion UI. Use ordinary names and share room codes with friends; this is not Internet-ready authentication.

Room mutations collect the complete request before a synchronous read/validate/clone/write/rename/publish boundary. Persisted command hashes deduplicate retries; the server derives the same cryptographic bearer token from its private key and a high-entropy command identity, persisting only the token hash in room snapshots. Client polls use monotonically issued request numbers and room revisions to reject obsolete views and failures.
