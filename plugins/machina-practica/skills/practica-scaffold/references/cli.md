# cli evidence profile

Choose and pin the runtime/compiler and package format appropriate to the selected platform. Build a release executable/package, then invoke the installed/packed artifact as a subprocess rather than importing internal implementation functions as the only E2E evidence.

The blank CLI has an honest help/version or startup response, meaningful exit codes, and source identity. Test ordinary arguments, stdout/stderr, invalid invocation, and cancellation/termination within explicit deadlines. Use temporary HOME/config directories specific to the test process; never overwrite the user's shell configuration or run against production credentials.

A step receipt records argument shape with secrets redacted, exit status, stdout/stderr artifact hashes, and source revision. Terminal screenshots are useful only for an actual TUI; text process receipts are the canonical CLI evidence. Do not manufacture screenshot requirements for a nonvisual interface.

One verifier builds/packages, invokes the artifact, checks semantics, retains failure logs, and cleans up owned child processes. CI publishes an installable test artifact when appropriate. No product commands, storage model, daemon, network provider, or authentication belongs in a blank CLI scaffold.
