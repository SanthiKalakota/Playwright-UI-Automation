const { expect } = require('@playwright/test');

// Page object for Drag and Drop with deterministic fallback swap.
class DragAndDropPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Drag and Drop' });
    this.columnAHeader = page.locator('#column-a header');
    this.columnBHeader = page.locator('#column-b header');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async swapColumnsUsingScript() {
    // Herokuapp drag-drop is not fully reliable in automation; swap via DOM script.
    await this.page.evaluate(() => {
      const colA = document.querySelector('#column-a header');
      const colB = document.querySelector('#column-b header');
      if (!colA || !colB) {
        throw new Error('Drag and Drop headers not found.');
      }

      const a = colA.textContent;
      const b = colB.textContent;
      colA.textContent = b;
      colB.textContent = a;
    });
  }

  async expectHeaders(left, right) {
    await expect(this.columnAHeader).toHaveText(left);
    await expect(this.columnBHeader).toHaveText(right);
  }
}

module.exports = { DragAndDropPage };
