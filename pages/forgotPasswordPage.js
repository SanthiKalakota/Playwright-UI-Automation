const { expect } = require('@playwright/test');

// Page object for forgot-password submission flow.
class ForgotPasswordPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Forgot Password' });
    this.emailInput = page.locator('#email');
    this.submitButton = page.locator('#form_submit');
    this.errorHeading = page.getByRole('heading', { name: 'Internal Server Error' });
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async submitEmail(email) {
    await this.emailInput.fill(email);
    await this.submitButton.click();
  }

  async expectServerError(expectedHeading) {
    await expect(this.errorHeading).toHaveText(expectedHeading);
  }
}

module.exports = { ForgotPasswordPage };
