const { expect } = require('@playwright/test');

// Page object for Dynamic Content refresh validations.
class DynamicContentPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Dynamic Content' });
    this.firstRowText = page.locator('#content .row .large-10.columns').first();
    this.refreshLink = page.getByRole('link', { name: 'click here' });
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.firstRowText).toBeVisible();
  }

  async getFirstRowContent() {
    return (await this.firstRowText.innerText()).trim();
  }

  async refresh() {
    await this.refreshLink.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async expectContentChanges(maxRefreshAttempts) {
    const initial = await this.getFirstRowContent();

    for (let attempt = 1; attempt <= maxRefreshAttempts; attempt += 1) {
      await this.refresh();
      const next = await this.getFirstRowContent();
      if (next !== initial) {
        return;
      }
    }

    throw new Error('Dynamic content did not change within allowed refresh attempts.');
  }
}

module.exports = { DynamicContentPage };
