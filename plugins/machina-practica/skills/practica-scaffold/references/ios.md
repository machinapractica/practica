# ios evidence profile

Use a selected Swift/Xcode toolchain and pin the Xcode version, simulator runtime/device, dependency resolution, and project-generation tool if used. Record signing and bundle identifier as project choices; do not invent provisioning credentials.

Build a release configuration and an installable simulator test artifact. Launch a blank SwiftUI/UIKit surface via XCUIApplication, assert a stable accessibility identifier and visible build revision, then capture XCUIScreenshot only after the semantic assertion. Use XCTest expectations/waitForExistence with explicit bounds. Do not seed a private route to bypass startup.

Drive activities from one step helper so XCTest activity names, attachments, and a JSON/Markdown receipt use the same ordered records. Retain .xcresult plus simulator/device logs and screenshots on failure. One local verifier should select the pinned destination, build, test, extract receipts, and return the real xcodebuild status (including through pipes).

Use isolated test containers, deterministic launch arguments for time/fixtures, bundled assets, and no production services. Name simulator evidence accurately; camera, notifications, audio routes, background execution, accessibility hardware, and physical-device checks remain separate. Supply unsigned/simulator artifacts when device signing is unavailable, without describing them as TestFlight validation.

This profile is a reference informed by Player and MediNag evidence. It is not a prevalidated native app template. Create and run an actual blank target only when a project scaffold is authorized.
