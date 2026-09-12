# Deep Sea Adventure: project rules reference

Scope: Oink Games' base game, 2–6 friends, three dives; no Boost or expansion dice. The user selected a faithful adaptation and the explicitly documented conventions in the [supplied summary at commit f7caf9f4d7473f637ac6cbc71509f545c59e8d9a](https://github.com/anicolao/deepsea/blob/f7caf9f4d7473f637ac6cbc71509f545c59e8d9a/RULES_SUMMARY.md), retrieved 2026-09-12. This is the project's starting authority, not independent publisher verification. The source reviewed its references on 2026-09-11 and calls its accepted convention set `base-1`.

## Lifecycle

Start with 32 hidden-value tiles: eight each at levels 1–4, two copies of each value 0–3, 4–7, 8–11, and 12–15 respectively. Their shapes are triangle, square, pentagon, and hexagon. Shuffle levels separately and arrange a shallow-to-deep path. All divers begin aboard the submarine; shared oxygen starts at 25 each dive. The most recent swimmer starts the first dive, followed clockwise. Roll two dice, each with faces 1, 1, 2, 2, 3, 3.

On a diver's turn:

1. Spend oxygen equal to carried units. Even when oxygen reaches zero or below, finish this turn.
2. Choose outward travel or turn home before rolling. A homeward diver cannot turn outward again. Turning home is allowed without treasure after leaving the submarine.
3. Move the dice sum minus carried units, with a minimum of zero. Occupied spaces do not consume movement. Overshoots stop at the submarine or path boundary, subject to the occupied-end convention below.
4. Leave the landing space alone, take its treasure and leave a blank, or put one carried unit onto a blank. Collection is allowed homeward too. Treasure values remain hidden even from their carrier.

A diver reaching the submarine banks treasure and takes no more turns that dive; banked treasure imposes no burden. Play passes clockwise to the next diver still participating. For example, with oxygen 10 and one unit carried, a diver spends one oxygen, chooses homeward, rolls 2+3, moves four unoccupied spaces, and may collect at the destination. With two units now carried, that diver will spend two oxygen on their next turn. This example is an interpretation of the sequence, not an extra rule.

The dive ends after an oxygen-exhausting turn or when everybody is aboard. Safe treasure is revealed and retained. Stranded divers lose this dive's carried treasure. Process those divers deepest first; owners order their losses, which are appended at the deep end in groups of three units, with a smaller final group as needed. A stack is one carrying unit but scores all constituent tile values. Remove blanks and close path gaps. The deepest stranded diver starts next; if everybody returned, the last returner starts. Restore oxygen to 25 and return all divers aboard.

After three dives, most banked points wins. Ties compare individual banked level-4 tiles; an unresolved tie is shared victory. Previously banked winnings survive later failed dives.

## Source facts, conventions, and discrepancies

All locations below refer to the immutable supplied summary linked above. Its linked references are secondary citations here; they were not independently reverified in this trial.

| Claim | Precise source location | Status and consequence |
| --- | --- | --- |
| Components, oxygen, dice, order, three dives | “Setup and objective” | Reported rules; defines setup and scoring horizon. |
| Oxygen, direction, movement, pickup/drop, hidden values | “Each turn”, steps 1–4 and following paragraphs | Reported rules; preserve ordering and hidden information. |
| Safe/stranded outcomes, stacks, cleanup | “Ending a dive”, paragraphs 1–2 | Reported rules; preserve carried-unit versus tile distinction. |
| Starter and level-4 tie count | “Ending a dive”, paragraph 3; “Source discrepancies” | Accepted project baseline; older reference says only “high-level”. |
| Empty-handed return and deepest-first losses | “Source discrepancies”, paragraph 1 | Accepted correction to the older unofficial 2015 transcription. |
| Occupied deepest space on outward overshoot | “Accepted MVP conventions”, bullet 1 | Stop at deepest available reachable space without crossing the end; stay put if none exists. |
| Lost stacks remain indivisible | Same section, bullet 2 | Group up to three carried units, so a resulting stack can exceed three original tiles. |
| No treasure left between dives | Same section, bullet 3 | Resolve remaining dives with zero additional points. |

## Vocabulary and invariants

A tile has a level and hidden point value. A unit is a single tile or an indivisible stack; a blank is an empty path space. Carried units affect oxygen and movement; banked units do neither. Scoring sums banked tile values, not stack counts. No diver sees carried values before safe recovery. Shared oxygen can end a dive for every diver; the exhausting turn still completes.

No rules decision blocks the blank scaffold. Publisher-edition parity remains limited by the supplied summary's community references. The source's links to its protocol, fixtures, and room design do not import those artifacts or application architecture into this trial. Any later rule correction must be explicit and versioned before implementing game behavior.
