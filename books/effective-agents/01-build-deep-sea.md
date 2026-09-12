# 1. Build a game: Deep Sea

Let's build a multiplayer browser game. Each player is a diver looking for treasure. Everyone shares the oxygen supply, and each diver has to decide when to turn back. Your job is to guide a coding agent from an empty directory to a game you can play with friends.

We'll use Deep Sea Adventure by Oink Games as the game to implement. Work through the steps in order. At each step, give the agent the prompt, read or try what it produces, and correct anything that doesn't match the game you intend to build.

The prompts below are ready to adapt. They name the result for each step; the agent handles the file edits, commands and pull requests. A pull request, or PR, groups changes so you can review them before they become part of the main version of your project.

## Before you start

You'll need a coding agent that can edit files and run terminal commands, a GitHub account, and Nix with flakes enabled. Later, you'll need a Firebase project for the multiplayer preview. Use two browser profiles or separate devices when testing players; two tabs can share the same player identity.

Create an empty directory called `deepsea-learning` and open your agent there. Keep the project separate from any existing game repository. Have the game's rules available for the agent to read. Use the base game, without the Boost expansion, and use simple original shapes for the graphics.

You don't need to install the Machina Practica skills to follow this chapter. Here, you'll give the instructions explicitly and learn what each stage is for.

## 1. Describe the game

Begin with two short documents:

```text
We're building a multiplayer web version of Deep Sea Adventure by Oink
Games, with each player using their own device. Write README.md and
VISION.md.

Keep VISION.md about the finished experience: the tension of collecting
treasure, sharing oxygen and deciding when to return. Put current project
status in README.md. Leave milestones, implementation plans, visual
direction and success criteria out of the vision.
```

Read both files. The vision can be a couple of paragraphs. It should describe the game you want people to experience. If it starts choosing a framework, planning releases or designing screens, ask the agent to move those decisions out.

Check the multiplayer assumption now. “A game for several players” could mean passing one device around. This game gives each player their own browser.

## 2. Put the project on GitHub

Keep a record of your prompts as you work. This will let you return to a decision and see what you actually asked for.

```text
Record all my project prompts so far verbatim in PROMPTS.md. For future
entries, use a numbered heading with a short summary, then the exact prompt.
Add a Husky pre-commit check that requires a prompt-log update with project
changes and preserves earlier entries.

Use a Nix flake for Git, gh and the other development tools we need, and
commit its lockfile. Check GitHub authentication and guide me through login
if necessary. Create a public repository named deepsea-learning under my
GitHub account, with GPLv3 for our original contributions.

Keep main as an empty starting point and open the initial documentation
and tooling as a PR for review.
```

The agent may need you to complete a browser login. Once authenticated, let it create the repository and PR. Check that the documents are in the PR, rather than already merged into `main`.

Read the changes and have the agent fix anything missing. Then tell it to merge the PR and return to an up-to-date `main`. Repeat that review-and-merge step at the later milestones too.

## 3. Establish the rules and MVP

The minimum viable product, or MVP, is the first complete version you intend to play. For this game, use a private group of two to six friends, playing from separate browsers.

```text
On a new branch, read the base-game rules and write RULES_SUMMARY.md.
Identify the sources and distinguish verified rules from ambiguities or
proposed resolutions. Cover setup, turns, oxygen, movement, treasure,
returning, lost treasure, subsequent dives and final scoring.

Write MVP_DESIGN.md for a multiplayer browser game for two to six friends.
Use SvelteKit and TypeScript, static hosting on GitHub Pages, anonymous
Firebase identities and an immutable Firestore event history. Derive game
state by deterministic replay. Include creating and joining a room,
readiness, three dives, results, reload and reconnect behavior.

Assume invited friends who trust each other. Leave bots, matchmaking,
chat and ranked play outside this MVP. Explain the limits of client-side
hidden information. Write a standalone design for this game, with open
questions clearly identified. Open a PR for review.
```

Read the rules summary against your rulebook. Pay particular attention to when oxygen is charged, what happens to a diver who fails to return, and how lost treasure is arranged for the next dive. Ask about discrepancies before accepting an interpretation. Record any resolution that is a project convention as such.

Read the room flow as a player. Can a friend open an invitation and join? What happens after a reload? What happens if the host leaves? These decisions belong in the design before they become accidental behavior in code.

The event history is how browsers agree. It records accepted actions, and replay derives the current board from them. A reload should reconstruct the same game, including dice already rolled. This architecture assumes trusted friends: hiding treasure in the interface does not conceal it from someone inspecting the downloaded data. Accept that limitation for this exercise.

## 4. Design what players see

Now make the experience concrete:

```text
Create UX_DESIGN.md with generated mockups so we can review the user
experience. Show phone and desktop layouts for creating and joining a
room, readiness, a diver's turn, returning, lost-treasure cleanup and
results. Include waiting, pending actions, errors and reconnection.

Make oxygen, the active diver, carried treasure and available actions easy
to understand. Explain how each screen leads to the next. Use original
placeholder graphics. Open the design as the next PR.
```

Use an agent with image-generation support for this step. The pictures are design references; the application still has to be built.

Walk through the mockups in order. On a turn screen, can you tell whose turn it is and what you can do? On a waiting screen, can you tell what you're waiting for? On a small phone, can you read the oxygen supply without scrolling away from the action?

Give concrete feedback and have the agent update the design. Merge it when the intended player journey is clear.

## 5. Build a coming-soon page and prove it works

Your first running version is deliberately small: a page that identifies the game and says it is coming soon. Use it to establish the build, tests and preview deployment.

Give the agent this reference for the testing mechanics:

[Deep Sea E2E guide](https://github.com/anicolao/deepsea/blob/f7caf9f4d7473f637ac6cbc71509f545c59e8d9a/E2E_GUIDE.md).

```text
Write E2E_GUIDE.md and build the initial application with only a
splash/coming-soon screen. Adapt the supplied E2E guide for this repository.

Run browser tests against the production build on phone and desktop.
Use bounded waits for observable state, never fixed delays. Verify meaning
before screenshots, with no masking, fuzzy comparison or retries. Require
zero pixel differences in the pinned rendering environment. Generate each
scenario's walkthrough from the same steps as its checks and screenshots.

Provide one verification command. Enforce the E2E rules in pre-commit
checks and CI, including tests showing that prohibited patterns fail.
Publish the exact tested build at a retained PR preview URL. Open a PR.
```

Open the preview link yourself, on a phone as well as a desktop if available. You should see the game title and coming-soon message. There should be no controls pretending to start a game.

Read the generated test walkthrough. Check that it describes the page you opened and contains screenshots from both screen sizes. Ask the agent to show which checks enforce each rule in the E2E guide. A rule written in a Markdown file still needs an implementation.

Have the agent investigate any failing check. Review intentional visual changes before accepting new screenshot baselines. Once the page, verification and preview all work, merge the PR.

## 6. Plan the route to a playable game

You now have a design and a working delivery path. Ask for the implementation sequence:

```text
Write IMPLEMENTATION_PLAN.md on a new branch. Start from the tested
coming-soon page and lay out the work to reach the complete multiplayer
MVP. For each step, describe what a player can do, its dependencies and
how we will verify it. Keep unfinished work clearly marked. Open a PR.
```

Look for this progression: settle the remaining rules and replay decisions; establish multiplayer storage and tests; create and join a room; play a turn; finish a dive; complete three dives; recover from interruptions; check the full experience and deployment.

Infrastructure has to lead somewhere you can try. Group the room foundation with its interface so the first multiplayer PR lets you create a room and invite another player.

## 7. Get two players into a room

Build that first complete path:

```text
Implement the foundation through the room, readiness and start flow.
Resolve the open rules decisions explicitly and record the accepted
versions. Add the emulator tests, immutable event repository and real UI
needed for two players to create, invite, join, ready and start.

Every PR must include a working preview and manual steps I can follow.
Provision a dedicated preview backend as part of this work; ask me for
any account setup you cannot complete with the available access.

Browser scenarios must create the room and join through ordinary controls,
using independent player contexts. Do not create a database fixture and
navigate straight to a populated room as proof that this journey works.
Run verification and the deployed-preview journey before reporting ready.
```

Firebase emulators support isolated local tests. The hosted preview also needs a real preview backend. Give the agent access to configure that environment when needed, then have it verify the deployed URL. A working static page with a disconnected backend is unfinished multiplayer work.

Try the preview from the beginning:

1. Enter a name and create a room.
2. Copy the invitation into a separate browser profile or send it to a friend.
3. Join with a second name. Both browsers should show the same roster.
4. Ready both players, choose the first diver as host, and start.
5. Reload each browser. Each player should retain their seat and see the confirmed start.

Also try joining after the room has started. The newcomer should receive an explanation, not silently appear in the crew.

If the agent only demonstrates preloaded data, send it back to complete this path. Your acceptance check is whether you can perform the promised actions on the preview.

## 8. Add the game in playable increments

Once the lobby works, return to the plan. Build one complete turn next:

```text
Implement the next complete player journey: a diver chooses direction,
rolls, moves and resolves the landing choice. The other browser must see
the same confirmed oxygen, position, cargo and next player. Reload must
not reroll the dice or charge oxygen twice.

Include the rules, persistence, UI and tests required for that journey.
Keep the PR preview usable and give me the steps to try it. Leave later
plan items for subsequent PRs.
```

Play the turn in two browsers. Follow what happens in the observing browser as well as the active one. A multiplayer action is complete when everyone sees the agreed result.

Continue with the next two increments:

- **Finish a dive.** Exercise a safe return and a loss, review the treasure and scores, and complete cleanup. Both browsers must agree before continuing.
- **Finish a game.** Play three dives, inspect the final result, then create a new game. The completed game's history should remain available.

For each increment, ask the agent to implement the next named journey from the plan, run its checks and provide a usable preview. Try it before merging. Keep checks for earlier journeys running as the game grows.

Finally, work through the plan's remaining recovery, six-player, keyboard, phone and deployment checks. Disconnect and reconnect a player. Reload during play. Try the invitation from another device. Record anything still unverified instead of marking the whole MVP complete because the happy path works once.

You've now worked through the method at the scale of a game: describe it, understand its rules, design the experience, establish a tested delivery path, and build complete player journeys. The following chapters examine those stages in more detail.
