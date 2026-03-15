const { expect } = require('@playwright/test');

// Page object for Status Codes page and code-specific navigation.
class StatusCodesPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Status Codes' });
    this.content = page.locator('#content');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async openCode(code) {
    await this.page.getByRole('link', { name: code }).click();
  }

  async expectCodeText(code) {
    await expect(this.content).toContainText(`This page returned a ${code} status code`);
  }
}

module.exports = { StatusCodesPage };
