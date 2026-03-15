const { expect } = require('@playwright/test');

// Page object for A/B Testing where heading can be Variation or Control.
class AbTestingPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: /A\/B Test (Variation|Control)/i });
    this.description = page.locator('#content p').first();
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.description).toContainText('split testing');
  }
}

module.exports = { AbTestingPage };
