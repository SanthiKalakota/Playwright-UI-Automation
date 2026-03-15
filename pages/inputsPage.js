const { expect } = require('@playwright/test');

// Page object for numeric input typing and keyboard increment checks.
class InputsPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Inputs' });
    this.input = page.locator('input[type="number"]');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.input).toBeVisible();
  }

  async enterValue(value) {
    await this.input.fill(value);
  }

  async incrementOnce() {
    await this.input.press('ArrowUp');
  }

  async expectValue(value) {
    await expect(this.input).toHaveValue(value);
  }
}

module.exports = { InputsPage };
