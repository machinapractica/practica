import { test, expect } from '@playwright/test';
import { readdir } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const revision = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();

test('read the landing page and follow the books, method, and proposals', async ({ page, context }, info) => {
  const failures = [];
  const steps = [];
  page.on('pageerror', error => failures.push(error.message));
  page.on('console', message => { if (message.type() === 'error') failures.push(message.text()); });
  await context.route('**/*', async route => {
    const url = new URL(route.request().url());
    if (url.origin !== 'http://127.0.0.1:4173') { failures.push('Unexpected network: ' + url.origin); await route.abort(); }
    else await route.continue();
  });
  async function record(name) {
    const file = info.outputPath(name + '.png');
    await page.screenshot({ path: file, fullPage: true });
    await info.attach(name, { path: file, contentType: 'image/png' });
    steps.push(name + '.png');
  }
  await test.step('Open the ordinary home page and verify truthful status', async () => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Build software with agents');
    await expect(page.locator('.lede')).toContainText('Machina Practica is a system for building reliable software.');
    await expect(page.locator('#parts + ol > li')).toHaveCount(3);
    for (const role of ["A programmer's guide.", 'Skills for the agent.', 'Reusable software packages.']) {
      await expect(page.locator('#parts + ol')).toContainText(role);
    }
    await expect(page.locator('#expectations + p + ul')).toContainText('Expect zero pixel differences');
    await expect(page.getByText('Eight experimental skills are available in source.', { exact: false })).toBeVisible();
    await expect(page.locator('footer a').filter({ hasText: 'Source' })).toHaveAttribute('href', 'https://github.com/machinapractica/practica/commit/' + revision);
    await record('01-home');
  });
  await test.step('Read the books and the project goals', async () => {
    await page.getByRole('navigation').getByRole('link', { name: "Books", exact: true }).click();
    await expect(page.getByRole('heading', { name: "The books" })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Effective Agents', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Chapter 1: Build a game: Deep Sea', exact: true })).toHaveAttribute('href', 'https://github.com/machinapractica/practica/blob/main/books/effective-agents/01-build-deep-sea.md');
    await expect(page.getByRole('heading', { name: 'Markdown and print editions', exact: true })).toBeVisible();
    await record('02-human-guide');
    await page.getByRole('main').getByRole('link', { name: 'the goals behind it', exact: true }).click();
    await expect(page.getByRole('heading', { name: "What we're trying to build", exact: true })).toBeVisible();
    await record('03-goals');
  });
  await test.step('Read the agent instructions and follow the setup sequence', async () => {
    await page.getByRole('navigation').getByRole('link', { name: 'Skills', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'What a skill does' })).toBeVisible();
    await expect(page.getByText('The current skill bundle is packaged for Codex.', { exact: false })).toBeVisible();
    await record('04-method');
    await page.getByRole('link', { name: 'setting up a project', exact: true }).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Setting up a project');
    await expect(page.getByRole('heading', { name: '3. Prove the blank application works' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'project setup proposal', exact: true })).toHaveAttribute('href', 'https://github.com/machinapractica/practica/blob/main/docs/proposals/PROJECT_SETUP_PROPOSAL.md');
    await record('05-setup');
  });
  await test.step('Read the package status', async () => {
    await page.getByRole('navigation').getByRole('link', { name: 'Packages', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Reusable software packages', exact: true })).toBeVisible();
    await expect(page.getByText('The testing package is at', { exact: false })).toBeVisible();
    await expect(page.locator('pre')).toContainText('@machinapractica/testing@0.1.0-alpha.1');
    await expect(page.locator('pre')).toContainText('@machinapractica/build-info@0.1.0-alpha.0');
    await expect(page.getByRole('link', { name: 'package extraction proposal' })).toHaveAttribute('href', 'https://github.com/machinapractica/packages/blob/main/docs/proposals/PACKAGE_EXTRACTION_PROPOSAL.md');
    await record('06-packages');
  });
  expect(failures).toEqual([]);
  expect(await context.cookies()).toEqual([]);
  await info.attach('walkthrough.md', { body: Buffer.from('# Website tracer\n\nRevision: ' + revision + '\nViewport: ' + info.project.name + '\n\nOpened home; checked the three parts, reliability expectations, availability and source revision; followed the human guide → goals and method → setup sequence; checked alpha package instructions. Screenshots follow semantic assertions.\n\n' + steps.join('\n')), contentType: 'text/markdown' });
});

test('every production page has metadata, valid local links, and responsive width', async ({ page, request }) => {
  const files = await readdir('_site', { recursive: true });
  for (const file of files.filter(file => file.endsWith('.html'))) {
    const route = '/' + file.replaceAll('\\', '/').replace(/index\.html$/, '');
    await page.goto(route);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page).toHaveTitle(/.+ · Machina Practica$/);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('meta[name="viewport"]')).toHaveAttribute('content', /width=device-width/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://machinapractica.com' + route);
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    expect(await page.locator('script, iframe, form').count()).toBe(0);
    const links = await page.locator('a[href], link[href]').evaluateAll(nodes => nodes.map(node => node.href));
    for (const href of links) {
      const url = new URL(href);
      if (url.origin !== 'http://127.0.0.1:4173') continue;
      expect((await request.get(url.pathname)).status(), href).toBe(200);
      if (url.hash) {
        if (url.pathname !== new URL(page.url()).pathname) {
          const target = await page.context().newPage();
          await target.goto(url.pathname);
          expect(await target.locator('[id]').evaluateAll((nodes, id) => nodes.some(node => node.id === id), decodeURIComponent(url.hash.slice(1))), href).toBe(true);
          await target.close();
        } else {
          expect(await page.locator('[id]').evaluateAll((nodes, id) => nodes.some(node => node.id === id), decodeURIComponent(url.hash.slice(1))), href).toBe(true);
        }
      }
    }
  }
});

test('missing page returns a useful 404 and keyboard navigation reaches content', async ({ page }) => {
  const response = await page.goto('/missing-page');
  expect(response.status()).toBe(404);
  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
  await page.getByRole('link', { name: 'Return to the home page' }).click();
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('main')).toBeFocused();
});
