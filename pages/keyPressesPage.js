const { expect } = require('@playwright/test');

// Page object for Key Presses – sends a keyboard key and reads back the result.
class KeyPressesPage {
  constructor(page) {
    this.page = page;
    // Heading that confirms we are on the correct feature page.
    this.heading = page.getByRole('heading', { name: 'Key Presses' });
    // The input field that captures key events.
    this.keyInput = page.locator('#target');
    // The result paragraph that shows which key was pressed.
    this.result = page.locator('#result');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.keyInput).toBeVisible();
  }

  async pressKey(key) {
    // Focus the input and dispatch the key so the page registers it.
    await this.keyInput.focus();
    await this.page.keyboard.press(key);
  }

  async expectResult(expectedText) {
    await expect(this.result).toHaveText(expectedText);
  }
}

module.exports = { KeyPressesPage };
