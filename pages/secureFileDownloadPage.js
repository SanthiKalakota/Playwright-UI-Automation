const { expect } = require('@playwright/test');

// Page object for Secure File Download, including protected-route behavior checks.
class SecureFileDownloadPage {
  constructor(page) {
    this.page = page;
    this.downloadLinks = page.locator('#content a');
    this.loginHeading = page.getByRole('heading', { name: 'Login Page' });
    this.pageBody = page.locator('body');
  }

  async expectLoadedOnEitherPath(primaryPath, fallbackPath) {
    await expect.poll(() => new URL(this.page.url()).pathname).toEqual(expect.stringMatching(new RegExp(`^(${primaryPath}|${fallbackPath})$`)));
  }

  async expectLoginPromptIfRedirected(fallbackPath) {
    const currentPath = new URL(this.page.url()).pathname;
    if (currentPath === fallbackPath) {
      await expect(this.loginHeading).toBeVisible();
    }
  }

  async expectDownloadLinksWhenAuthorized(primaryPath) {
    const currentPath = new URL(this.page.url()).pathname;
    if (currentPath === primaryPath) {
      const linkCount = await this.downloadLinks.count();
      if (linkCount > 0) {
        await expect(this.downloadLinks.first()).toBeVisible();
      } else {
        // Some environments return plain text unauthorized on /download_secure.
        await expect(this.pageBody).toContainText('Not authorized');
      }
    }
  }
}

module.exports = { SecureFileDownloadPage };
