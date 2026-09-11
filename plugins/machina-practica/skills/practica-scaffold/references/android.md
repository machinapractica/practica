# android evidence profile

Pin the selected JDK, Android Gradle Plugin, Gradle wrapper/checksum, SDK/build tools, and emulator API/device image. Do not infer application architecture from a Kotlin/Java/Compose/View choice.

Build the appropriate release APK/AAB and a deterministic instrumentation target. Launch through the ordinary activity/launcher entry using ActivityScenario or UI Automator as appropriate. Assert a semantic UI identifier/text and visible source identity before screenshot capture. Espresso idling resources or bounded UI Automator conditions replace sleeps.

Use a single ordered step helper to produce assertion receipts and walkthroughs alongside device screenshots. Keep emulator data isolated and test assets local. Preserve logcat, instrumentation results, build logs, screenshots, and failed-step diagnostics. The verifier must propagate Gradle/instrumentation failures and clean up only its owned emulator resources.

CI should reproduce the pinned emulator baseline and retain an installable test artifact. Do not label emulator evidence as physical-device, Play Store, push-notification, camera, or background-execution proof. Signing and store publication are separate authorized operations.

This is a platform adaptation, not a claim that an Android starter has been built. Apply only when the selected project requests an Android scaffold.
