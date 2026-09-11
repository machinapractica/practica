# Tracer record

Use a short ID/title followed by the ordinary entry and visible outcome. Specify prerequisites, domain behavior/invariants, state/storage/transport effects, interface changes, deterministic fixtures, unit/contract/E2E checks, visual states, documentation/status changes, verifier command, and explicit deferrals.

Good shapes:
- Game: create a room, join from a second device, accept one action, reload and reconstruct the same visible state.
- Authoring: define one component, produce one projection, validate it, and show the result/diagnostic.
- Monitoring: submit one local target, execute one check, persist its observation, and show status.

Split further if one outcome depends on several unresolved designs. Infrastructure is part of the first tracer that exposes its value. Plans describe future evidence; scenario readmes describe executed evidence.
