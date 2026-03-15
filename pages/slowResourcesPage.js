const { expect } = require('@playwright/test');

// Page object for Slow Resources feature page.
class SlowResourcesPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Slow Resources' });
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }
}

module.exports = { SlowResourcesPage };
