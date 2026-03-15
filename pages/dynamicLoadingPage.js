const { expect } = require('@playwright/test');

// Page object for Dynamic Loading examples 1 and 2.
class DynamicLoadingPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Dynamically Loaded Page Elements' });
    this.exampleOneLink = page.getByRole('link', { name: 'Example 1: Element on page that is hidden' });
    this.exampleTwoLink = page.getByRole('link', { name: 'Example 2: Element rendered after the fact' });
    this.startButton = page.locator('#start button');
    this.helloWorld = page.locator('#finish h4');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async openExampleOne() {
    await this.exampleOneLink.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async openExampleTwo() {
    await this.exampleTwoLink.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async startAndWaitForMessage(expectedText) {
    await this.startButton.click();
    await expect(this.helloWorld).toHaveText(expectedText, { timeout: 15000 });
  }
}

module.exports = { DynamicLoadingPage };
