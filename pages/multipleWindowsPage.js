const { expect } = require('@playwright/test');

// Page object for Multiple Windows – opens a new tab and validates its content.
class MultipleWindowsPage {
  constructor(page) {
    this.page = page;
    // Heading on the main Multiple Windows page.
    this.heading = page.getByRole('heading', { name: 'Opening a new window' });
    // Link that opens a new browser tab.
    this.clickHereLink = page.getByRole('link', { name: 'Click Here' });
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async openNewWindow() {
    // waitForEvent('popup') captures the new page before it navigates.
    const popupPromise = this.page.context().waitForEvent('page');
    await this.clickHereLink.click();
    const newPage = await popupPromise;
    await newPage.waitForLoadState('domcontentloaded');
    return newPage;
  }

  async expectNewWindowHeading(newPage, headingText) {
    const heading = newPage.getByRole('heading', { name: headingText });
    await expect(heading).toBeVisible();
  }

  async expectNewWindowPath(newPage, expectedPath) {
    await expect.poll(() => new URL(newPage.url()).pathname).toBe(expectedPath);
  }
}

module.exports = { MultipleWindowsPage };
