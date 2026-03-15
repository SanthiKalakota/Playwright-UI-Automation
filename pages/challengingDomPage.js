const { expect } = require('@playwright/test');

// Page object for /challenging_dom to exercise dynamic controls and row actions.
class ChallengingDomPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Challenging DOM' });
    this.blueButton = page.locator('.button').first();
    this.alertButton = page.locator('.button.alert');
    this.successButton = page.locator('.button.success');
    this.editLinks = page.locator('a[href="#edit"]');
    this.deleteLinks = page.locator('a[href="#delete"]');
    this.tableRows = page.locator('table tbody tr');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.tableRows.first()).toBeVisible();
  }

  async clickTopButtons() {
    await this.blueButton.click();
    await this.alertButton.click();
    await this.successButton.click();
  }

  async useFirstRowActions() {
    await this.editLinks.first().click();
    await this.deleteLinks.first().click();
  }

  async expectTableHasRows() {
    await expect(this.tableRows).toHaveCount(10);
  }
}

module.exports = { ChallengingDomPage };
