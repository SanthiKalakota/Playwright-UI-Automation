const { expect } = require('@playwright/test');

// Page object for verifying sticky floating menu behavior while scrolling.
class FloatingMenuPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Floating Menu' });
    this.menu = page.locator('#menu');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.menu).toBeVisible();
  }

  async scrollDeep() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async clickMenuLink(linkName) {
    await this.menu.getByRole('link', { name: linkName }).click();
  }

  async expectMenuVisibleAfterScroll() {
    await expect(this.menu).toBeVisible();
  }
}

module.exports = { FloatingMenuPage };
