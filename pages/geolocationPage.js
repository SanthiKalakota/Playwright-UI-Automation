const { expect } = require('@playwright/test');

// Page object for browser geolocation permission and coordinate assertions.
class GeolocationPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Geolocation' });
    this.whereAmIButton = page.getByRole('button', { name: 'Where am I?' });
    this.latitudeText = page.locator('#lat-value');
    this.longitudeText = page.locator('#long-value');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.whereAmIButton).toBeVisible();
  }

  async setGeolocation(latitude, longitude) {
    const context = this.page.context();
    await context.grantPermissions(['geolocation']);
    await context.setGeolocation({ latitude, longitude });
  }

  async requestLocation() {
    await this.whereAmIButton.click();
  }

  async expectCoordinates(latitude, longitude) {
    await expect(this.latitudeText).toContainText(latitude.toString());
    await expect(this.longitudeText).toContainText(longitude.toString());
  }
}

module.exports = { GeolocationPage };
