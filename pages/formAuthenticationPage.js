const { expect } = require('@playwright/test');

// Page object for login and logout workflow on Form Authentication.
class FormAuthenticationPage {
  constructor(page) {
    this.page = page;
    this.loginHeading = page.getByRole('heading', { name: 'Login Page' });
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.flashMessage = page.locator('#flash');
    this.logoutButton = page.getByRole('link', { name: 'Logout' });
  }

  async expectLoaded() {
    await expect(this.loginHeading).toBeVisible();
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectLoggedIn(securePath) {
    await expect(this.page).toHaveURL(new RegExp(securePath.replace('/', '\\/')));
    await expect(this.flashMessage).toContainText('You logged into a secure area!');
  }

  async logout() {
    await this.logoutButton.click();
  }

  async expectLoggedOut(logoutMessage) {
    await expect(this.loginHeading).toBeVisible();
    await expect(this.flashMessage).toContainText(logoutMessage);
  }
}

module.exports = { FormAuthenticationPage };
