const { expect } = require('@playwright/test');

// Page object for /basic_auth where credentials are passed in the URL.
class BasicAuthPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Basic Auth' });
    this.successMessage = page.locator('#content p').first();
  }

  async gotoWithCredentials(baseUrl, username, password) {
    const target = new URL(baseUrl);
    target.pathname = '/basic_auth';
    target.username = username;
    target.password = password;

    await this.page.goto(target.toString());
  }

  async expectAuthenticated() {
    await expect(this.heading).toBeVisible();
    await expect(this.successMessage).toContainText('Congratulations');
  }
}

module.exports = { BasicAuthPage };
