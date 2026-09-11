# Design questions

- What is the single first useful journey, including entry, completion, error, and recovery?
- Which approved domain invariants constrain it? Which are deferred?
- What does each actor see and control? What information must not reach a client?
- What is authoritative state? What is disposable projection or presence?
- Which commands/events exist only if this design needs them? Who owns clocks/randomness?
- How do persistence failures, old schemas, unknown future schemas, duplicate delivery, and reconnect behave?
- Where is authorization enforced? What does the browser/server/platform trust?
- Which viewport/device/accessibility/offline states are part of acceptance?
- Which external systems are required, and what happens when each is unavailable?
- What evidence can prove the outcome, and what remains manual or outside automation?

Use explicit decisions and alternatives for consequential tradeoffs. Do not invent a subsystem just to answer a checklist.
