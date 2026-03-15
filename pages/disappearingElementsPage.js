const { expect } = require('@playwright/test');

// Page object for Disappearing Elements menu interactions.
class DisappearingElementsPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Disappearing Elements' });
    this.menuLinks = page.locator('#content ul li a');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async expectMinimumMenuLinks(minimum) {
    const count = await this.menuLinks.count();
    expect(count).toBeGreaterThanOrEqual(minimum);
  }

  async clickFirstMenuLink() {
    const firstLink = this.menuLinks.first();
    const linkName = (await firstLink.innerText()).trim();
    await firstLink.click();
    await this.page.waitForLoadState('domcontentloaded');
    return linkName;
  }
}

module.exports = { DisappearingElementsPage };
