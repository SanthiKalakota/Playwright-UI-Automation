const { expect } = require('@playwright/test');

// Page object for validating JavaScript onload error behavior.
class JavaScriptErrorPage {
  constructor(page) {
    this.page = page;
    this.description = page.locator('p').first();
  }

  async expectLoaded() {
    await expect(this.description).toBeVisible();
  }

  async expectDescription(text) {
    await expect(this.description).toContainText(text);
  }

  capturePageErrors() {
    const errors = [];
    this.page.on('pageerror', (error) => {
      errors.push(error.message);
    });
    return errors;
  }
}

module.exports = { JavaScriptErrorPage };
