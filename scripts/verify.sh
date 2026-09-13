#!/bin/sh
set -eu
cd "$(dirname "$0")/.."
mkdir -p evidence
# Capture each phase's output while preserving its actual exit status.
run() {
  label="$1"
  shift
  if "$@" > "evidence/$label.log" 2>&1; then
    cat "evidence/$label.log"
  else
    result=$?
    cat "evidence/$label.log"
    exit "$result"
  fi
}
run project-skills python3 -m unittest discover -s scripts -p 'test_*.py'
run skills python3 -m unittest discover -s plugins/machina-practica/scripts -p 'test_*.py'
run plugin python3 plugins/machina-practica/scripts/validate_bundle.py --archive .artifacts/machina-practica-0.1.2.zip
run dependencies npm ci --ignore-scripts
run browser-wait-policy npx --no-install mp-testing check
run browser npx --no-install playwright install chromium
run verification npm run verify
