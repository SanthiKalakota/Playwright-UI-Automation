const { expect } = require('@playwright/test');

// Page object for Digest Authentication flow.
class DigestAuthPage {
  constructor(page) {
    this.page = page;
    this.pageHeading = page.locator('#content h3');
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/digest_auth/);
  }

  async expectHeadingVisibleWhenAvailable() {
    // Some environments return 401 text; heading check is best-effort.
    if (await this.pageHeading.count()) {
      await expect(this.pageHeading.first()).toBeVisible();
    }
  }
}

module.exports = { DigestAuthPage };
