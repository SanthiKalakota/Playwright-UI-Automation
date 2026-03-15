const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

// Shared cucumber hooks for browser lifecycle and context cleanup.
setDefaultTimeout(90 * 1000);

Before(async function () {
  const headless = process.env.HEADLESS !== 'false';
  this.browser = await chromium.launch({ headless });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  // Dispose API contexts created by feature-specific step definitions.
  if (this.apiContext) {
    await this.apiContext.dispose();
    this.apiContext = null;
  }

  if (this.authDynamicApiContext) {
    await this.authDynamicApiContext.dispose();
    this.authDynamicApiContext = null;
  }

  if (this.context) {
    await this.context.close();
    this.context = null;
  }

  if (this.browser) {
    await this.browser.close();
    this.browser = null;
  }
});
