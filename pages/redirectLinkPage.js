const { expect } = require('@playwright/test');

// Page object for Redirect Link – clicks the link and validates final URL.
class RedirectLinkPage {
  constructor(page) {
    this.page = page;
    // Heading on the Redirector feature page.
    this.heading = page.getByRole('heading', { name: 'Redirection' });
    // The redirect trigger link.
    this.redirectLink = page.getByRole('link', { name: 'here' });
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async clickRedirectLink() {
    await this.redirectLink.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async expectRedirectedTo(expectedPath) {
    // Validate that the browser ended on the expected destination path.
    await expect.poll(() => new URL(this.page.url()).pathname).toBe(expectedPath);
  }
}

module.exports = { RedirectLinkPage };
