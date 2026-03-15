const { expect } = require('@playwright/test');

// Page object for Shadow DOM page, validating text inside shadow-root elements.
class ShadowDomPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Simple template' });
    this.paragraphs = page.locator('my-paragraph');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.paragraphs.first()).toBeVisible();
  }

  async expectParagraphContains(text) {
    await expect(this.paragraphs.first()).toContainText(text);
  }
}

module.exports = { ShadowDomPage };
