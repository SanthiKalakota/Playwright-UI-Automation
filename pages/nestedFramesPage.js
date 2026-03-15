const { expect } = require('@playwright/test');

// Page object for Nested Frames – verifies body text in each sub-frame.
class NestedFramesPage {
  constructor(page) {
    this.page = page;
    // Frame locators for the three top-row sub-frames.
    this.leftFrame = page
      .frameLocator('frame[name="frame-top"]')
      .frameLocator('frame[name="frame-left"]')
      .locator('body');
    this.middleFrame = page
      .frameLocator('frame[name="frame-top"]')
      .frameLocator('frame[name="frame-middle"]')
      .locator('body');
    this.rightFrame = page
      .frameLocator('frame[name="frame-top"]')
      .frameLocator('frame[name="frame-right"]')
      .locator('body');
    // The standalone bottom frame.
    this.bottomFrame = page
      .frameLocator('frame[name="frame-bottom"]')
      .locator('body');
  }

  async expectFrameTexts(left, middle, right, bottom) {
    await expect(this.leftFrame).toContainText(left);
    await expect(this.middleFrame).toContainText(middle);
    await expect(this.rightFrame).toContainText(right);
    await expect(this.bottomFrame).toContainText(bottom);
  }
}

module.exports = { NestedFramesPage };
