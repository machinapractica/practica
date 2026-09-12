# 1. Direct the work

**Effective Agents — review draft, 12 September 2026.** The application and task in this chapter are illustrative. They have not been implemented or tested as part of this draft.

A coding agent can read a repository, change the software and run its tests. Your job is to give that work a useful direction and decide whether the result does what you need.

This book teaches you how to do that. You'll learn to describe a result, give the agent the information and authority to build it, and check what it delivers. You'll also establish engineering standards that make the result dependable as the project grows.

The method belongs to the Machina Practica system. *Effective Agents* is your guide. The agent's skills give it procedures that match the method you learn here. Reusable packages supply tested components for common jobs. You and the agent work from the same expectations.

Let's begin with one change to an existing application.

## Describe what someone will be able to do

Suppose you maintain an application for a community workshop. Organizers use it to see who has signed up for a session. They need to download that list so they can prepare name cards.

You could ask the agent to “add an export button.” The button is easy to picture, but it leaves several product decisions open. Which session does it export? Which fields belong in the file? Who can download it? What happens when nobody has signed up?

Describe the organizer's task first:

> An organizer viewing a workshop session can download a CSV file containing the names of everyone currently signed up for that session. The file has one column, named `Name`, with one row per attendee, ordered alphabetically. It excludes cancelled signups. An empty session produces a file containing the column heading only. Use the application's existing organizer permissions.

Now the agent has a result to build. You also have a result to check.

Notice the decisions you've made. The export belongs to one session. It includes names, with a defined order and a defined empty result. It uses existing access rules. These are product choices; settling them gives the agent room to handle implementation details.

You don't need to prescribe a function name or a particular loop. The agent can inspect the application and choose an implementation that fits. If an existing rule changes the meaning of your request, it should bring that conflict to you.

## Give the agent the relevant sources

A useful task includes enough information to find the existing behavior. Point the agent to the session page, the signup rules and the organizer permission checks. Use actual paths or links from your project.

For this example, you might add:

> Read the repository instructions first. Inspect the session page, signup model and organizer authorization checks. Reuse the existing permission rules and the project's CSV writer. Follow the current download pattern. If any of these are missing or conflict with the requested behavior, explain the issue before making a product decision.

This tells the agent what to learn from the repository and where your request needs discussion. It also helps preserve behavior that other parts of the application already rely on.

Some projects have clear documentation; others make you work through code and tests. Let the agent do that investigation. Ask it to identify the source of a rule when that rule affects the change. You can then settle the question without reading every file yourself.

Keep decisions that will matter again in the repository. A note about which signup states count as current belongs beside the domain rules, where the next task can find it.

## Give it room to finish

The agent needs to know how far it can take the work. A request to investigate, a request to implement and a request to release have different endpoints.

For the workshop export, set a useful boundary:

> Implement the export and its tests. You may change the session page and the application code needed for this behavior. Keep the existing signup and permission rules. Leave email, attendance tracking and unrelated cleanup outside this task. Run the project's verifier and prepare the change for review. Stop before merging or deploying.

That is enough authority to carry out the change without asking permission for each file edit or test run. The stopping point is explicit because this example ends at review. In another task, you can authorize release as well.

If the agent discovers that the work needs a change to the signup rules, it has reached a decision outside this scope. It should explain the discovery, the choices and their consequences. You can decide whether to expand the task or keep the original boundary.

You should be able to delegate a complete piece of work and stay available for decisions that need you.

## Decide how you'll recognize success

Before implementation, make the expected result concrete enough to test. For the example, use a session with two current attendees and one cancelled signup:

| Signup | State |
| --- | --- |
| Zoe Chen | Current |
| Ada Jones | Current |
| Sam Patel | Cancelled |

The downloaded file should contain:

```csv
Name
Ada Jones
Zoe Chen
```

The test should open the session as an organizer, use the download control, and read the resulting file. That checks the complete behavior the organizer needs: finding the control, requesting the export and receiving the right data.

Other checks follow from the request. An empty session should produce the heading alone. A person without organizer access should be unable to retrieve the export, including by requesting it directly. Names containing commas or quotation marks should survive a CSV write-and-read round trip. Existing authorization and CSV tests may already cover some of this; the agent should inspect them and add the coverage the change requires.

Ask the agent to wait for the actual download event. A fixed delay guesses how long the application will take. Waiting for the event, with a bounded timeout, checks the state the test needs.

These details establish a standard: the test must exercise the promised behavior and inspect the result. A screenshot of the button can help review its appearance. The downloaded file tells you whether the export worked.

## Expect reliable checks

In this system, reliable checks are part of the work. A test that passes only when timing happens to work needs investigation.

For the export, control the signup records, their order and the user's permissions. Keep the build and test environment fixed. If visual comparisons are part of the change, also control the fonts, viewport, clock and animations. Within that declared rendering environment, expect zero pixel differences unless you've intentionally changed the appearance and reviewed the new baseline.

When a failure appears, ask the agent to find its cause and verify the repair. A passing retry leaves the original failure unexplained. The same is true of a screenshot mask or a wider comparison tolerance added to hide variation.

Later chapters explain how to design event order and repeatable environments. For now, carry one expectation into each task: the result should follow from controlled conditions and explicit behavior.

## Review the delivered change

When the agent finishes, start with what an organizer can now do. Try the export with the agreed data. Open the file and inspect its contents. Check the empty case and the access boundary, using the test records to see which cases were exercised automatically.

Then inspect the change and its report. You should be able to answer:

- What behavior changed?
- Which checks ran, and what did they establish?
- Which source revision produced the result you're reviewing?
- Is anything unfinished or outside the verification performed?

A report that says “all tests pass” needs enough detail to connect those tests to the requested behavior. If the agent couldn't run a check, that limit should be visible. You can resolve it before accepting the work.

In this example, acceptance means the change is ready for the merge or release decision you reserved. It doesn't imply that deployment has happened.

## Try it on your next change

Choose a small change in a project you know. Write a task brief with four parts:

1. **Result:** what a person will be able to do, including the important empty or failure case.
2. **Sources:** the rules, existing behavior and examples the agent should use.
3. **Authority:** what it may change, what belongs outside the task and where it should stop.
4. **Checks:** the actions and results that will show the change works.

Give the agent that brief and let it investigate the repository. Answer questions that affect the product or the agreed scope. Let it carry the authorized work through to the stopping point, then review the result against the brief.

This is the working relationship the rest of the book develops. You provide direction and decisions. The agent uses the shared method to deliver software you can inspect, test and trust.
