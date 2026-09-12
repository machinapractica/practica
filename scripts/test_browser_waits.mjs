import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { forbiddenWaits } from '../plugins/machina-practica/skills/practica-scaffold/assets/web/check-browser-waits.mjs';
const checker = new URL('../plugins/machina-practica/skills/practica-scaffold/assets/web/check-browser-waits.mjs', import.meta.url);

test('finds JS/TS direct, optional, computed and aliased fixed-wait references', () => {
  for (const expression of ['await page.waitForTimeout(100)', "await page['waitForTimeout'](100)", 'await page?.waitForTimeout(100)', 'const pause = page.waitForTimeout', 'const { waitForTimeout: pause } = page']) {
    assert.equal(forbiddenWaits(`const page: Page = browserPage;\n${expression}`, 'example.spec.ts').length, 1);
  }
});
test('does not mistake comments, string examples, state assertions or deadline timers for the forbidden API', () => {
  assert.deepEqual(forbiddenWaits(`// page.waitForTimeout(100) is forbidden\nconst explanation = 'page.waitForTimeout(100)';\nawait expect(page.getByText('Connected')).toBeVisible();\nconst deadline = setTimeout(() => reject(new Error('Timeout')), 5000);`, 'example.spec.mjs'), []);
});
test('CLI fails on a violation or invalid source and succeeds on observable waits', () => {
  const directory = mkdtempSync(join(tmpdir(), 'machina-wait-policy-'));
  const file = join(directory, 'example.spec.ts');
  try {
    for (const [source, status] of [['await page.waitForTimeout(100)', 1], ['const =', 1], ["await page.getByText('Connected').waitFor()", 0]]) {
      writeFileSync(file, source);
      const result = spawnSync(process.execPath, [checker.pathname, file], { encoding: 'utf8' });
      assert.equal(result.status, status, result.stderr);
    }
  } finally { rmSync(directory, { recursive: true, force: true }); }
});
