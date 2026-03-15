const { expect } = require('@playwright/test');

// Page object for /checkboxes to toggle and assert checkbox states.
class CheckboxesPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Checkboxes' });
    this.checkboxes = page.locator('input[type="checkbox"]');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.checkboxes).toHaveCount(2);
  }

  async checkAll() {
    const count = await this.checkboxes.count();
    for (let index = 0; index < count; index += 1) {
      await this.checkboxes.nth(index).check();
    }
  }

  async uncheckFirst() {
    await this.checkboxes.first().uncheck();
  }

  async expectAllChecked() {
    const count = await this.checkboxes.count();
    for (let index = 0; index < count; index += 1) {
      await expect(this.checkboxes.nth(index)).toBeChecked();
    }
  }

  async expectFirstUnchecked() {
    await expect(this.checkboxes.first()).not.toBeChecked();
  }
}

module.exports = { CheckboxesPage };
