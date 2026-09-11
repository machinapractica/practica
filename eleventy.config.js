import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

export default function (config) {
  const revision = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
  const dirty = execFileSync('git', ['status', '--porcelain'], { encoding: 'utf8' }).trim().length > 0;
  if (process.env.CI && dirty) throw new Error('Production CI build requires a clean checkout');
  config.addGlobalData('build', { revision, dirty, short: revision.slice(0, 7) });
  config.addPassthroughCopy('site/assets');
  config.addTemplate('vision.md', readFileSync('VISION.md', 'utf8'), {
    layout: 'base.njk', title: 'The vision', description: 'The thesis and principles behind Machina Practica.', permalink: '/vision/'
  });
  config.addTemplate('project-setup.md', readFileSync('docs/proposals/PROJECT_SETUP_PROPOSAL.md', 'utf8'), {
    layout: 'base.njk', title: 'Project setup proposal', description: 'A research proposal for staged software development with focused agent skills.', permalink: '/proposals/project-setup/'
  });
  return { dir: { input: 'site', output: '_site' }, markdownTemplateEngine: false, htmlTemplateEngine: 'njk' };
}
