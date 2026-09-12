# Deep Sea Adventure

A local multiplayer web game for 2–6 friends, each using their own browser. Play the base game's three dives, bank treasure, compare final scores, and start another game in the same room.

## Play locally

Use Node **24.18.1** and npm **11.16.0**. The current source must be committed so its visible revision identifies the build.

```sh
npm ci --ignore-scripts
npm run build
npm run serve:production
```

Open **http://127.0.0.1:4179**. Enter a name and create a room. In another browser or private browser window, open the same address, enter a different name and the room code, and join. The host selects the most recent swimmer and starts.

For friends on the same local network, run `HOST=0.0.0.0 npm run serve:production` and share `http://YOUR_COMPUTER_LAN_IP:4179`. Keep the host process running. Each friend needs an independent browser session. Physical-device and LAN access have not been verified in this trial.

During a turn, oxygen is spent automatically before direction choice. Choose direction and roll, then collect, leave, or put down treasure. The host starts the next dive after the summary. After three dives, the result uses points, then individual level-4 tiles, then shared victory. **Play again** starts a fresh game with the same seats.

## Recovery and limits

Rooms are saved in `.local-data/`, separate from the production build. Reloading the original browser restores its seat; restarting the server restores saved rooms. If an action's reply is lost, **Retry last action** resends its saved ID without applying it twice. A disconnected player's turn waits for them. There is no host replacement, seat recovery from a different browser, offline play, or public deployment.

The server owns dice, hidden treasure values and command validation. The local HTTP setup is for a trusted network. No accounts, remote services, expansions, chat or spectators are included.

## Verify and review

`npm run verify` installs locked dependencies, builds the production artifact, runs rule/API/storage contracts and independent-browser scenarios, and requires exact decoded RGBA matches against reviewed local baselines. For a new source revision, first run `npm run verify -- --candidates`, inspect its captures, and record review using [E2E_GUIDE.md](E2E_GUIDE.md).

Every run, including failures, is retained in `evidence/runs/`; [evidence/latest.json](evidence/latest.json) identifies the newest result. Evidence is local and ignored by Git. The read-only CI workflow is defined but has not been run remotely.

## Project documents

- [VISION.md](VISION.md): accepted product intent, preserved unchanged from the initial trial.
- [RULES_SUMMARY.md](RULES_SUMMARY.md): source identity, rules lifecycle and accepted `base-1` conventions.
- [MVP_DESIGN.md](MVP_DESIGN.md): user journey, authority, privacy, storage and recovery decisions.
- [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) and [IMPLEMENTATION_STATUS.md](IMPLEMENTATION_STATUS.md): milestone outcomes and actual validation history.
- [E2E_GUIDE.md](E2E_GUIDE.md): verifier and visual evidence contract.
- [PROMPTS.md](PROMPTS.md): verbatim requests, including review findings.

Initial vision-phase outputs are preserved in commit `9c6824a`; the accepted blank app is preserved at `cf1e39e`. Code is [GPLv3](LICENSE), SPDX `GPL-3.0-only`. Bundled Newsreader retains its OFL license in the production artifact. The game rules source is attributed in RULES_SUMMARY.md.
