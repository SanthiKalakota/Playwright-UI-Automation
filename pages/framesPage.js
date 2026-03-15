const { expect } = require('@playwright/test');

// Page object for Frames landing page, iframe editor, and nested frames.
class FramesPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Frames' });
    this.iframeLink = page.getByRole('link', { name: 'iFrame' });
    this.nestedFramesLink = page.getByRole('link', { name: 'Nested Frames' });
    this.editorBody = page.frameLocator('#mce_0_ifr').locator('#tinymce');
    this.leftFrameBody = page.frameLocator('frame[name="frame-top"]').frameLocator('frame[name="frame-left"]').locator('body');
    this.bottomFrameBody = page.frameLocator('frame[name="frame-bottom"]').locator('body');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.iframeLink).toBeVisible();
    await expect(this.nestedFramesLink).toBeVisible();
  }

  async openIFramePage() {
    await this.iframeLink.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async expectEditorText(text) {
    await expect(this.editorBody).toContainText(text);
  }

  async openNestedFramesPage(baseUrl, nestedFramesPath) {
    await this.page.goto(`${baseUrl.replace(/\/$/, '')}${nestedFramesPath}`);
  }

  async expectNestedFrameText(leftText, bottomText) {
    await expect(this.leftFrameBody).toContainText(leftText);
    await expect(this.bottomFrameBody).toContainText(bottomText);
  }
}

module.exports = { FramesPage };
