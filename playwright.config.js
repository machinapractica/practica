import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests', timeout: 30000, expect: { timeout: 5000 }, retries: 0, workers: 1,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: { baseURL: 'http://127.0.0.1:4173', browserName: 'chromium', trace: 'retain-on-failure', screenshot: 'only-on-failure' },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1440, height: 1000 } } },
    { name: 'phone', use: { viewport: { width: 390, height: 844 }, isMobile: true, deviceScaleFactor: 1 } }
  ],
  webServer: { command: 'npm run serve', url: 'http://127.0.0.1:4173', reuseExistingServer: false, timeout: 10000, stdout: 'pipe', stderr: 'pipe' }
});
