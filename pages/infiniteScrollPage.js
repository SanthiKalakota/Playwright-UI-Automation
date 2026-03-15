const { expect } = require('@playwright/test');

// Page object for loading additional paragraphs through scrolling.
class InfiniteScrollPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Infinite Scroll' });
    this.paragraphs = page.locator('.jscroll-added');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async loadUntilMinimumParagraphs(minimumParagraphs) {
    while ((await this.paragraphs.count()) < minimumParagraphs) {
      await this.page.mouse.wheel(0, 5000);
      await this.page.waitForTimeout(400);
    }
  }

  async expectMinimumParagraphs(minimumParagraphs) {
    expect(await this.paragraphs.count()).toBeGreaterThanOrEqual(minimumParagraphs);
  }
}

module.exports = { InfiniteScrollPage };
