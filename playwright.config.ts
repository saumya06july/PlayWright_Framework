import { defineConfig, devices } from '@playwright/test';
import { appendFile } from 'node:fs';


export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html'],['allure-playwright']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',
    headless:false,
   
    trace: 'on-first-retry',
    screenshot : 'only-on-failure',
    video :'on',
    baseURL :'https://naveenautomationlabs.com/opencart/index.php'

  },
  metadata:
  {
    appUserName :'saumya1991july@gmail.com',
    appPassword :'test@123'
  },

  /* Configure projects for major browsers */
  projects: [
      // ✅ Chromium
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        viewport: { width: 1920, height: 1080 },
        launchOptions: {
          args: []
        }
      },
    },

    // ✅ Firefox
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        viewport: { width: 1920, height: 1080 }
        // ⚠️ Firefox ignores --start-maximized
      },
    },

    // ✅ WebKit (Safari engine)
    {
      name: 'webkit',
      use: {
        browserName: 'webkit',
        viewport: { width: 1920, height: 1080 }
      },
    },

    // ✅ Google Chrome (branded)
    {
      name: 'Google Chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        viewport: null,
        launchOptions: {
          args: ['--start-maximized']
        }
      },
    },

    // ✅ Microsoft Edge
    {
      name: 'Microsoft Edge',
      use: {
        browserName: 'chromium',
        channel: 'msedge',
        viewport: null,
        launchOptions: {
          args: ['--start-maximized']
        }
      },
    },
  ],

 
});
