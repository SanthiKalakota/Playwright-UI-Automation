const { expect } = require('@playwright/test');

// Page object for hover-revealed profile cards.
class HoversPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Hovers' });
    this.figures = page.locator('.figure');
    this.figureCaptions = page.locator('.figcaption');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.figures.first()).toBeVisible();
  }

  async hoverFirstFigure() {
    await this.figures.first().hover();
  }

  async expectFirstUserVisible(expectedUser) {
    await expect(this.figureCaptions.first()).toContainText(expectedUser);
    await expect(this.figureCaptions.first().getByRole('link', { name: 'View profile' })).toBeVisible();
  }
}

module.exports = { HoversPage };
