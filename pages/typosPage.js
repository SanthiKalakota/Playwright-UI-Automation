const { expect } = require('@playwright/test');

// Page object for Typos page with tolerant typo assertion.
class TyposPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Typos' });
    this.paragraphs = page.locator('#content p');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.paragraphs.first()).toBeVisible();
  }

  async expectTypoPattern(pattern) {
    const text = await this.paragraphs.nth(1).innerText();
    expect(text).toMatch(new RegExp(pattern, 'i'));
  }
}

module.exports = { TyposPage };
