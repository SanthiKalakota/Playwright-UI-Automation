const { expect } = require('@playwright/test');

// Page object for uploading a local file.
class FileUploadPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'File Uploader' });
    this.fileInput = page.locator('#file-upload');
    this.submitButton = page.locator('#file-submit');
    this.uploadedHeading = page.getByRole('heading', { name: 'File Uploaded!' });
    this.uploadedFiles = page.locator('#uploaded-files');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.fileInput).toBeVisible();
  }

  async uploadFile(filePath) {
    await this.fileInput.setInputFiles(filePath);
    await this.submitButton.click();
  }

  async expectUploadSuccess(expectedHeading, expectedFileName) {
    await expect(this.uploadedHeading).toHaveText(expectedHeading);
    await expect(this.uploadedFiles).toHaveText(expectedFileName);
  }
}

module.exports = { FileUploadPage };
