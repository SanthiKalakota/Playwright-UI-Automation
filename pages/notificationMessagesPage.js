const { expect } = require('@playwright/test');

// Page object for Notification Messages – clicks and reads the flash message.
class NotificationMessagesPage {
  constructor(page) {
    this.page = page;
    // Heading for the Notification Messages feature.
    this.heading = page.getByRole('heading', { name: 'Notification Message' });
    // Link that triggers a new random flash notification.
    this.clickHereLink = page.getByRole('link', { name: 'Click here' });
    // The flash/alert div that shows the notification text.
    this.flashMessage = page.locator('#flash');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async triggerNotification() {
    await this.clickHereLink.click();
    // Wait for the flash message to become visible after navigation.
    await expect(this.flashMessage).toBeVisible();
  }

  async expectMessageContainsOneOf(possibleMessages) {
    const text = await this.flashMessage.innerText();
    const matched = possibleMessages.some((msg) => text.includes(msg));
    expect(matched).toBe(true);
  }
}

module.exports = { NotificationMessagesPage };
