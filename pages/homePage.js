// Home page object for listing and opening feature links.
class HomePage {
  constructor(page, baseUrl) {
    this.page = page;
    this.baseUrl = baseUrl;
    this.homeHeading = page.getByRole('heading', { name: 'Welcome to the-internet' });
    this.featureLinks = page.locator('ul li a');
  }

  async goto() {
    await this.page.goto(this.baseUrl);
    await this.homeHeading.waitFor({ state: 'visible' });
  }

  async getAllLinks() {
    const linkCount = await this.featureLinks.count();
    const links = [];

    for (let index = 0; index < linkCount; index += 1) {
      const anchor = this.featureLinks.nth(index);
      const name = (await anchor.innerText()).trim();
      const href = await anchor.getAttribute('href');

      if (name && href) {
        // Keep only visible link text and href for data comparison.
        links.push({ name, path: href.trim() });
      }
    }

    return links;
  }

  async clickLinkByName(linkName) {
    // `hasText` keeps the selector readable for navigation steps.
    const target = this.page.locator('ul li a', { hasText: linkName }).first();
    await target.waitFor({ state: 'visible' });
    await target.click();
  }
}

module.exports = { HomePage };
