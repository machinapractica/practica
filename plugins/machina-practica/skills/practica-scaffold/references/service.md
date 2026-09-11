# service evidence profile

Pin the selected runtime/compiler, dependency lock, and release/container build. A blank service may expose health/version endpoints that prove process readiness and source identity; it does not perform product checks, authentication, persistence, or background jobs.

Start the built artifact on an OS-assigned available port (or a deliberately reserved test endpoint), wait for an observable healthy response with a deadline, and exercise the public protocol. Distinguish liveness, readiness, and build identity. On launch failure, retain stdout/stderr and exit status rather than retrying until a transient error disappears.

Use local fixture servers, isolated temporary data, explicit timeouts, and no production endpoints. Record request/response semantics, status, headers/body hashes as appropriate, source revision, and failure diagnostics. Screenshots apply only to an actual accompanying UI, not a JSON health endpoint.

The verifier must stop its process tree and release ports in a finally/trap path. CI builds the production image/package and tests it; deployment preview is separate from merely publishing an image. Compose with the web profile only when the user requested a UI+service target.
