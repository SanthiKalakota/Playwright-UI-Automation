const { expect } = require('@playwright/test');

// Page object for Dropdown selection operations.
class DropdownPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Dropdown List' });
    this.dropdown = page.locator('#dropdown');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.dropdown).toBeVisible();
  }

  async selectByLabel(label) {
    await this.dropdown.selectOption({ label });
  }

  async expectSelectedByLabel(label) {
    await expect(this.dropdown).toHaveValue(label === 'Option 1' ? '1' : '2');
  }
}

module.exports = { DropdownPage };
