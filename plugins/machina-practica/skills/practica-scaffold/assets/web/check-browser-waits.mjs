// Install a pinned @babel/parser dev dependency. Run against browser-test source files.
import { parse } from '@babel/parser';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export function forbiddenWaits(source, filename) {
  const plugins = [];
  if (/\.[cm]?tsx?$/.test(filename)) plugins.push('typescript');
  if (/\.[jt]sx$/.test(filename)) plugins.push('jsx');
  const ast = parse(source, { sourceType: 'unambiguous', plugins });
  const findings = [];
  function visit(node) {
    if (!node || typeof node !== 'object') return;
    if (['MemberExpression', 'OptionalMemberExpression'].includes(node.type)) {
      const name = node.computed ? node.property?.value : node.property?.name;
      if (name === 'waitForTimeout') findings.push({ line: node.loc.start.line, column: node.loc.start.column + 1 });
    }
    if (node.type === 'ObjectPattern') {
      for (const property of node.properties) {
        if ((property.key?.name || property.key?.value) === 'waitForTimeout') {
          findings.push({ line: property.loc.start.line, column: property.loc.start.column + 1 });
        }
      }
    }
    for (const value of Object.values(node)) {
      if (Array.isArray(value)) value.forEach(visit);
      else if (value && typeof value === 'object') visit(value);
    }
  }
  visit(ast.program);
  return findings;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const files = process.argv.slice(2);
  if (!files.length) { console.error('Usage: node check-browser-waits.mjs TEST_FILE...'); process.exitCode = 2; }
  for (const file of files) {
    try {
      for (const finding of forbiddenWaits(readFileSync(file, 'utf8'), file)) {
        console.error(`${file}:${finding.line}:${finding.column}: waitForTimeout is prohibited; wait for observable state or transport completion.`);
        process.exitCode = 1;
      }
    } catch (error) { console.error(`${file}: ${error.message}`); process.exitCode = 1; }
  }
}
