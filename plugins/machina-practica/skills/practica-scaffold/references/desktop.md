# desktop evidence profile

Start from the chosen desktop target and OS support matrix. Select native, Tauri, Electron, or another shell only as a platform decision; avoid borrowing product architecture from a sibling app. Pin compiler/runtime, packaging tools, and the tested OS/window environment.

Build the distributable/release application. Launch its ordinary entry, assert the blank startup state and visible source identity, and capture the real window using the target's accessibility/automation framework. A browser-renderer test alone is not proof of native menus, filesystem dialogs, installer behavior, or the packaged application.

Use bounded accessibility/observable readiness, isolated user data, deterministic assets, and one ordered receipt per action/assertion/capture. Retain process logs, OS crash reports where available, screenshots, and installer/build evidence. Test packaging and launch separately where code signing is unavailable and label unsigned artifacts.

Document canonical window sizes, scale factor, OS version, and keyboard/accessibility checks. A CLI companion needs its own process receipts. Do not add updater, cloud sync, document model, or product storage during the blank scaffold. This profile is guidance; real packaged-target execution remains required for project acceptance.
