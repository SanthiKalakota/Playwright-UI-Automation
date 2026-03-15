const { expect } = require('@playwright/test');

// Page object for file download interactions and API link extraction.
class FileDownloadPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'File Downloader' });
    this.downloadLinks = page.locator('#content a');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.downloadLinks.first()).toBeVisible();
  }

  async getFirstDownloadHref() {
    return this.downloadLinks.first().getAttribute('href');
  }

  async downloadFirstFile() {
    const downloadPromise = this.page.waitForEvent('download');
    await this.downloadLinks.first().click();
    return downloadPromise;
  }
}

module.exports = { FileDownloadPage };
