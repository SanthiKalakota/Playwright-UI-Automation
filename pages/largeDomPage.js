const { expect } = require('@playwright/test');

// Page object for Large & Deep DOM – verifies deep cell accessibility.
class LargeDomPage {
  constructor(page) {
    this.page = page;
    // Main heading for the large DOM feature.
    this.heading = page.getByRole('heading', { name: 'Large & Deep DOM' });
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async expectCellExists(cellId) {
    // Use attribute selector to avoid CSS parsing issues with dots in IDs.
    const cell = this.page.locator(`[id="${cellId}"]`);
    await expect(cell).toBeAttached();
  }

  async countSiblings() {
    // Return total sibling-span count as a basic DOM depth metric.
    return this.page.locator('[id^="sibling-"]').count();
  }
}

module.exports = { LargeDomPage };
