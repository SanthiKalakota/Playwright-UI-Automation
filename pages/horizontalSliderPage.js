const { expect } = require('@playwright/test');

// Page object for keyboard-driven horizontal slider changes.
class HorizontalSliderPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Horizontal Slider' });
    this.slider = page.locator('input[type="range"]');
    this.valueLabel = page.locator('#range');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.slider).toBeVisible();
  }

  async setValue(targetValue) {
    await this.slider.focus();

    while ((await this.valueLabel.textContent()).trim() !== targetValue) {
      await this.slider.press('ArrowRight');
    }
  }

  async expectValue(targetValue) {
    await expect(this.valueLabel).toHaveText(targetValue);
  }
}

module.exports = { HorizontalSliderPage };
