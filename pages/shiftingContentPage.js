const { expect } = require('@playwright/test');

// Page object for Shifting Content examples navigation.
class ShiftingContentPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Shifting Content' });
    this.exampleOneLink = page.getByRole('link', { name: 'Example 1: Menu Element' });
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.exampleOneLink).toBeVisible();
  }

  async openMenuExample() {
    await this.exampleOneLink.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async expectOnPath(expectedPath) {
    await expect.poll(() => new URL(this.page.url()).pathname).toBe(expectedPath);
  }
}

module.exports = { ShiftingContentPage };
