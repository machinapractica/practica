import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

export default function (config) {
  const revision = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
  const dirty = execFileSync('git', ['status', '--porcelain'], { encoding: 'utf8' }).trim().length > 0;
  if (process.env.CI && dirty) throw new Error('Production CI build requires a clean checkout');
  config.addGlobalData('build', { revision, dirty, short: revision.slice(0, 7) });
  config.addPassthroughCopy('site/assets');
  config.addTemplate('vision.md', readFileSync('VISION.md', 'utf8'), {
    layout: 'base.njk', title: 'What we’re trying to build', description: 'A system for building reliable software, with a programmer’s guide, agent skills and reusable components.', permalink: '/vision/'
  });
  return { dir: { input: 'site', output: '_site' }, markdownTemplateEngine: false, htmlTemplateEngine: 'njk' };
}
