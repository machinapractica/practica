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
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Make intentexecutable.');
    await expect(page.getByText('Book manuscripts and executable skills are not yet available.', { exact: false })).toBeVisible();
    await expect(page.locator('footer a').filter({ hasText: 'Source' })).toHaveAttribute('href', 'https://github.com/machinapractica/practica/commit/' + revision);
    await record('01-home');
  });
  await test.step('Read the books and follow the shared vision', async () => {
    await page.getByRole('navigation').getByRole('link', { name: 'Books', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Two connected books' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Effective Agents', exact: true })).toBeVisible();
    await page.getByRole('main').getByRole('link', { name: 'vision', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Vision', exact: true })).toBeVisible();
  });
  await test.step('Follow the method to its proposed workflow', async () => {
    await page.getByRole('navigation').getByRole('link', { name: 'Method', exact: true }).click();
    await expect(page.getByText('No executable skills or installable plugin are available yet.', { exact: false })).toBeVisible();
    await page.getByRole('link', { name: 'project setup proposal', exact: true }).click();
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Staged software-project setup');
    await expect(page.getByText('Status: research proposal', { exact: false })).toBeVisible();
    await record('02-proposal');
  });
  await test.step('Read the package status', async () => {
    await page.getByRole('navigation').getByRole('link', { name: 'Packages', exact: true }).click();
    await expect(page.getByText('No packages are available from this project.', { exact: false })).toBeVisible();
    await expect(page.getByRole('link', { name: 'package extraction proposal' })).toHaveAttribute('href', 'https://github.com/machinapractica/packages/blob/main/docs/proposals/PACKAGE_EXTRACTION_PROPOSAL.md');
  });
  expect(failures).toEqual([]);
  expect(await context.cookies()).toEqual([]);
  await info.attach('walkthrough.md', { body: Buffer.from('# Website tracer\n\nRevision: ' + revision + '\nViewport: ' + info.project.name + '\n\nOpened home; asserted prerelease status and source revision; followed books → vision and method → proposal; checked package status. Screenshots follow semantic assertions.\n\n' + steps.join('\n')), contentType: 'text/markdown' });
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
