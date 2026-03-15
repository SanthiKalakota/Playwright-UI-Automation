const { expect } = require('@playwright/test');

// Page object for Dynamic Controls checkbox and input operations.
class DynamicControlsPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Dynamic Controls' });
    this.checkbox = page.locator('#checkbox');
    this.checkboxActionButton = page.locator('#checkbox-example button');
    this.input = page.locator('#input-example input');
    this.inputActionButton = page.locator('#input-example button');
    this.message = page.locator('#message');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async removeCheckbox() {
    await expect(this.checkboxActionButton).toHaveText('Remove');
    await this.checkboxActionButton.click();
    await expect(this.checkboxActionButton).toHaveText('Add');
    await expect(this.checkbox).toHaveCount(0);
  }

  async addCheckboxBack() {
    await expect(this.checkboxActionButton).toHaveText('Add');
    await this.checkboxActionButton.click();
    await expect(this.checkboxActionButton).toHaveText('Remove');
    await expect(this.checkbox).toHaveCount(1);
  }

  async enableInput() {
    if (await this.input.isDisabled()) {
      await this.inputActionButton.click();
      await expect(this.message).toContainText("It's enabled!");
    }
    await expect(this.input).toBeEnabled();
  }

  async typeInInput(text) {
    await this.input.fill(text);
    await expect(this.input).toHaveValue(text);
  }
}

module.exports = { DynamicControlsPage };
