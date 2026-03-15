const { expect } = require('@playwright/test');

// Page object for Exit Intent modal behavior.
class ExitIntentPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Exit Intent' });
    this.modalTitle = page.locator('.modal-title h3');
    this.closeButton = page.locator('.modal-footer p');
    this.modal = page.locator('.modal');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async triggerExitIntent() {
    // Trigger mouseleave behavior directly to make automation deterministic.
    await this.page.evaluate(() => {
      document.documentElement.dispatchEvent(new MouseEvent('mouseleave', {
        bubbles: true,
        cancelable: true,
        clientY: 0,
      }));
    });
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

module.exports = { ExitIntentPage };
