const { expect } = require('@playwright/test');

// Page object for Add/Remove Elements operations.
class AddRemoveElementsPage {
  constructor(page) {
    this.page = page;
    this.pageHeading = page.getByRole('heading', { name: 'Add/Remove Elements' });
    this.addElementButton = page.getByRole('button', { name: 'Add Element' });
    this.deleteButtons = page.locator('#elements button');
  }

  async expectLoaded() {
    await expect(this.pageHeading).toBeVisible();
    await expect(this.addElementButton).toBeVisible();
  }

  async addElements(count) {
    for (let index = 0; index < count; index += 1) {
      await this.addElementButton.click();
    }
  }

  async expectDeleteButtonsCount(expectedCount) {
    await expect(this.deleteButtons).toHaveCount(expectedCount);
  }

  async removeAllElements() {
    const count = await this.deleteButtons.count();

    // Always click the first visible delete button until list is empty.
    for (let index = 0; index < count; index += 1) {
      await this.deleteButtons.first().click();
    }
  }
}

module.exports = { AddRemoveElementsPage };
