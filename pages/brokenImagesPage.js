const { expect } = require('@playwright/test');

// Page object for /broken_images with UI and API image validation helpers.
class BrokenImagesPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Broken Images' });
    this.images = page.locator('#content img');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async countRenderedBrokenImages() {
    const count = await this.images.count();
    let broken = 0;

    for (let index = 0; index < count; index += 1) {
      const image = this.images.nth(index);
      const isBroken = await image.evaluate((element) => {
        return !element.complete || element.naturalWidth === 0;
      });

      if (isBroken) {
        broken += 1;
      }
    }

    return broken;
  }

  async getImageSources() {
    const count = await this.images.count();
    const sources = [];

    for (let index = 0; index < count; index += 1) {
      const src = await this.images.nth(index).getAttribute('src');
      if (src) {
        sources.push(src);
      }
    }

    return sources;
  }

  async checkImageStatusesWithApi(apiContext, baseUrl) {
    const root = new URL(baseUrl);
    const sources = await this.getImageSources();
    const results = [];

    for (const src of sources) {
      const absolute = new URL(src, root.origin).toString();
      const response = await apiContext.get(absolute);
      results.push({ src: absolute, status: response.status(), ok: response.ok() });
    }

    return results;
  }
}

module.exports = { BrokenImagesPage };
