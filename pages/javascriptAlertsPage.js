const { expect } = require('@playwright/test');

// Page object for alert, confirm, and prompt dialog handling.
class JavaScriptAlertsPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'JavaScript Alerts' });
    this.result = page.locator('#result');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async acceptAlert() {
    const dialogPromise = this.page.waitForEvent('dialog');
    const triggerPromise = this.page.evaluate(() => {
      jsAlert();
    });
    const dialog = await dialogPromise;
    await dialog.accept();
    await triggerPromise;
  }

  async dismissConfirm() {
    const dialogPromise = this.page.waitForEvent('dialog');
    const triggerPromise = this.page.evaluate(() => {
      jsConfirm();
    });
    const dialog = await dialogPromise;
    await dialog.dismiss();
    await triggerPromise;
  }

  async submitPrompt(promptText) {
    const dialogPromise = this.page.waitForEvent('dialog');
    const triggerPromise = this.page.evaluate(() => {
      jsPrompt();
    });
    const dialog = await dialogPromise;
    await dialog.accept(promptText);
    await triggerPromise;
  }

  async expectResult(text) {
    await expect(this.result).toHaveText(text);
  }
}

module.exports = { JavaScriptAlertsPage };
