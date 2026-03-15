const { expect } = require('@playwright/test');

// Page object for /context_menu where right-click raises a browser alert.
class ContextMenuPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Context Menu' });
    this.hotSpot = page.locator('#hot-spot');
  }

  async goto(baseUrl) {
    const target = new URL('/context_menu', baseUrl).toString();
    await this.page.goto(target);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.hotSpot).toBeVisible();
  }

  async openContextMenuAndAcceptAlert() {
    const dialogPromise = this.page.waitForEvent('dialog', { timeout: 10000 });
    const triggerPromise = this.page.evaluate(() => {
      const element = document.querySelector('#hot-spot');
      if (!element) {
        throw new Error('Context menu hotspot was not found in DOM.');
      }

      element.dispatchEvent(new MouseEvent('contextmenu', {
        bubbles: true,
        cancelable: true,
        view: window,
        button: 2,
      }));
    });

    const dialog = await dialogPromise;
    const message = dialog.message();
    await dialog.accept();
    await triggerPromise;
    return message;
  }
}

module.exports = { ContextMenuPage };
