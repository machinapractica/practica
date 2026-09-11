# Prompts

Verbatim prompts used to develop Practica. The prompt comes first; the small note below it records where it landed.

---

> Our goal is to create a github repo that publishes two books: "Effective Agents", a guide for human programmers to efficiently utilize agents for production-quality software projects, and "Machina Practica", a set of rules and skills designed to be injected into new projects to enable the agents to be more effective at delivering code. Write a README.md and a VISION.md for this project, create a git repo, use gh to create a github repo, and put up the initial README.md and VISION.md as the first PR.

Recorded 2026-06-26 from human maintainer. Produced PR #1: https://github.com/anicolao/practica/pull/1

---

> not bad. wherever the concern about eroding standards exists, replace it with the goal of *increasing quality*. For example, in the vision the statement is framed as "want agents to increase leverage without eroding standards" and it should read someting like "want agents to increase leverage while simultaneously raising standards". The real goal here is to enable teams to build *perfect* systems; that is, systems that do exactly what the engineering team intends them to do with no tolerance for imprecision or failure. Revise the docs with this in mind.

Recorded 2026-06-26 from human maintainer. Produced PR #1: https://github.com/anicolao/practica/pull/1

---

> OK we will want to record every prompt verbatim that is used to develop this project. Write an AGENTS.md or similar file that will be respected by all agents being used to write these books that specifies this, and write a PROMPTS.md that includes verbatim all the prompts used so far and the PRs they produced. Put this up as the next PR for review.

Recorded 2026-06-26 from human maintainer. Produced PR #2: https://github.com/anicolao/practica/pull/2

---

> PROMPTS.md markdown is a bit too heavyweight on structure/section headings/boilerplate, with the verbatim prompt itself in a hard to read single-line pre block. Reconsider the formatting to make it easier to read and focus on teh prompt itself rather than metadata. This PR lacks enforcement of its rules, which should be done in a precommit hook, a push hook, and CI workflows.

Recorded 2026-06-26 from human maintainer. Produced PR #2: https://github.com/anicolao/practica/pull/2


---

> Read SETUP_MD.md and follow its directions.

Recorded 2026-09-11 from human maintainer. PR: pending organization creation and transfer. The named file was absent; the agent read SETUP_MP.md and asked whether that was the intended execution brief.

---

> yes

Recorded 2026-09-11 from human maintainer. PR: pending organization creation and transfer. Confirms SETUP_MP.md as the execution brief. SETUP_MP.md, SETUP_PROPOSAL.md, and OURWAY_PROPOSAL.md are imported planning artifacts; this agent did not author their research or original text.

---

> Read SETUP_MD.md and follow its directions.

> yes

Recorded 2026-09-11 from human maintainer. Repeated verbatim from the bootstrap entries above to associate the same instructions with the separate website PR (pending). The confirmation refers to SETUP_MP.md. This branch prepares the website tracer and its build/evidence/deployment workflow.

---

> ok I logged into npm and created the machinapractica org. npm is logged in. Tell me again why I have to use github's website and waht the minimal steps are

Recorded 2026-09-11 from human maintainer. PR: pending bootstrap publication. Continues the authorized organization, repository, and website bootstrap.

---

> ok I have done it. let's complete setup

Recorded 2026-09-11 from human maintainer. PR: pending bootstrap publication. Continues the authorized organization, repository, and website bootstrap.

---

> GPLv3

Recorded 2026-09-11 from human maintainer. PR: pending bootstrap publication. Selects GPLv3 for original repository content.

Publication reference (2026-09-11): the bootstrap prompts recorded above produced https://github.com/machinapractica/practica/pull/3. This resolves their earlier pending PR references without changing historical prompt text.

Publication reference (2026-09-11): the bootstrap and GPLv3 prompts above also produced the separate website PR https://github.com/machinapractica/practica/pull/4.

Bootstrap validation note (2026-09-11, PR #4): the continuation prompt above includes upgrading the pinned Pages artifact action to v4, whose nested upload action is also pinned, to satisfy the verified organization SHA policy.

Bootstrap validation note (2026-09-11, PR #4): provenance fetches retain history instead of truncating main to depth one, so advancing main through a merge does not break ancestry checks or later pushes.

---

> I haven't had to do this manual work in the past. In ../annasdadpress teh agent was ablet o configur the settings for pages ... is this because we're working in an org? Minimize my manual work

Recorded 2026-09-11 from human maintainer. PR: pending domain launch follow-up. The authenticated Pages API supports custom domains and HTTPS for organization repositories. The separate optional Pages domain-claim verification is deferred under this instruction, following the existing Anna’s Dad Press setup; it is not a publishing prerequisite. Configure DNS and HTTPS through existing authorized tools and document actual results.

Publication reference (2026-09-11): the domain-launch continuation above produced https://github.com/machinapractica/practica/pull/5.
