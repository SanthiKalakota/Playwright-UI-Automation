const { expect } = require('@playwright/test');

// Page object for layered jQuery UI menu navigation.
class JQueryUiMenusPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'JQueryUI - Menu' });
    this.enabledMenu = page.locator('#ui-id-3');
    this.downloadsMenu = page.locator('#ui-id-4');
    this.pdfMenuItem = page.locator('#ui-id-5');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.enabledMenu).toBeVisible();
  }

  async openDownloadsMenu() {
    await this.enabledMenu.hover();
    await this.downloadsMenu.hover();
  }

  async clickPdfItem() {
    await this.pdfMenuItem.click();
  }

  async expectPdfItemVisible() {
    await expect(this.pdfMenuItem).toBeVisible();
  }
}

module.exports = { JQueryUiMenusPage };
