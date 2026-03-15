const { expect } = require('@playwright/test');

// Page object for Entry Ad modal interactions.
class EntryAdPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Entry Ad' });
    this.modalTitle = page.locator('.modal-title h3');
    this.closeButton = page.locator('.modal-footer p');
    this.modal = page.locator('.modal');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async expectModalVisible(expectedTitle) {
    await expect(this.modal).toBeVisible();
    await expect(this.modalTitle).toHaveText(expectedTitle);
  }

  async closeModal() {
    await this.closeButton.click();
    await expect(this.modal).toBeHidden();
  }
}

module.exports = { EntryAdPage };
