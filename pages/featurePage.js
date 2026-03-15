const { expect } = require('@playwright/test');

// Shared assertions used by multiple feature-page tests.
class FeaturePage {
  constructor(page) {
    this.page = page;
  }

  normalizePath(inputPath) {
    return inputPath.replace(/\/+$/, '');
  }

  async expectOnPath(expectedPath) {
    await expect.poll(async () => {
      const current = new URL(this.page.url());
      return this.normalizePath(current.pathname);
    }).toBe(this.normalizePath(expectedPath));
  }

  async expectOnAnyPath(expectedPaths) {
    const normalized = expectedPaths.map((path) => this.normalizePath(path));

    // Compare against escaped alternatives such as login redirects.
    await expect.poll(async () => {
      const current = new URL(this.page.url());
      return this.normalizePath(current.pathname);
    }).toEqual(expect.stringMatching(new RegExp(`^(${normalized.map((path) => path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})$`)));
  }

  async expectContentVisible() {
    const content = this.page.locator('#content');
    const contentCount = await content.count();

    if (contentCount > 0) {
      // Some pages render duplicate #content nodes; assert the first visible one.
      await expect(content.first()).toBeVisible();
      return;
    }

    // Fallback for pages like auth/frames/error routes without #content wrapper.
    await expect(this.page.locator('body')).toBeVisible();
  }
}

module.exports = { FeaturePage };
