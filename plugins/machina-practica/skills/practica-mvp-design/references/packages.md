# Package candidates

Consult the current machinapractica/packages README and each package's compatibility report before recommending installation. This bundle does not assume npm publication or consumer adoption.

| Need already selected by the design | Candidate |
| --- | --- |
| Browser test steps, captures, walkthroughs | @machinapractica/testing |
| Reproducible artifact/source identity | @machinapractica/build-info |
| Static paths, artifact checks, deployment receipts | @machinapractica/pages |
| Deterministic replay and explicit migrations | @machinapractica/events |
| Firestore append/subscription mechanics | @machinapractica/events-firestore, only if its emulator/compatibility evidence exists |
| Multi-actor join/rejoin/rematch protocol | @machinapractica/rooms, after a suitable transport contract |
| Offline shell and interruption-safe activation | @machinapractica/pwa |
| Shared/private surface protocol geometry | @machinapractica/tabletop-protocol, only when shared invariants are demonstrated |

A missing or experimental package is not a blocker: use a small project-local equivalent or defer the capability. Do not import any runtime candidate during vision/domain. Scaffold may use testing/build/deployment tools but should not add product state, Firebase, rooms, or PWA implicitly. Zero consumer migrations during library development means zero adoption claims.
