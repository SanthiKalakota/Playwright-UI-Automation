const { Given, When, Then } = require('@cucumber/cucumber');
const { expect, request } = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');
const { advancedLinksData } = require('../../test-data/advancedLinks.data');

// Step definitions for advanced-links.feature using POM + API validations.
// Shared browser and API context cleanup are configured in hooks.js.

Given('I open The Internet homepage for advanced links suite', async function () {
  // Reuse the existing shared browser/page from the other step-definition hooks.
  this.apiContext = await request.newContext();
  this.poManager = new POManager(this.page, { baseUrl: advancedLinksData.baseUrl });
  this.homePage = this.poManager.getHomePage();
  this.featurePage = this.poManager.getFeaturePage();
  this.basicAuthPage = this.poManager.getBasicAuthPage();
  this.brokenImagesPage = this.poManager.getBrokenImagesPage();
  this.challengingDomPage = this.poManager.getChallengingDomPage();
  this.checkboxesPage = this.poManager.getCheckboxesPage();
  this.contextMenuPage = this.poManager.getContextMenuPage();

  await this.homePage.goto();
});

When('I navigate to advanced link {string}', async function (linkName) {
  await this.homePage.clickLinkByName(linkName);
});

When('I authenticate advanced Basic Auth with configured credentials', async function () {
  await this.basicAuthPage.gotoWithCredentials(
    advancedLinksData.baseUrl,
    advancedLinksData.basicAuth.username,
    advancedLinksData.basicAuth.password,
  );
});

Then('I should land on advanced path {string}', async function (expectedPath) {
  await this.featurePage.expectOnPath(expectedPath);
});

Then('I should see advanced Basic Auth success content', async function () {
  await this.basicAuthPage.expectAuthenticated();
});

Then('I should validate broken images through UI and API', async function () {
  await this.brokenImagesPage.expectLoaded();

  const brokenUi = await this.brokenImagesPage.countRenderedBrokenImages();
  expect(brokenUi).toBeGreaterThanOrEqual(advancedLinksData.brokenImages.minBrokenRenderedImages);

  const apiResults = await this.brokenImagesPage.checkImageStatusesWithApi(this.apiContext, advancedLinksData.baseUrl);
  const brokenApi = apiResults.filter((item) => !item.ok).length;
  expect(brokenApi).toBeGreaterThanOrEqual(advancedLinksData.brokenImages.minBrokenApiResponses);
});

Then('I perform advanced Challenging DOM operations', async function () {
  await this.challengingDomPage.expectLoaded();
  await this.challengingDomPage.clickTopButtons();
  await this.challengingDomPage.useFirstRowActions();
  await this.challengingDomPage.expectTableHasRows();
});

Then('I perform advanced checkbox operations', async function () {
  await this.checkboxesPage.expectLoaded();
  await this.checkboxesPage.checkAll();
  await this.checkboxesPage.expectAllChecked();
  await this.checkboxesPage.uncheckFirst();
  await this.checkboxesPage.expectFirstUnchecked();
});

Then('I perform advanced context menu operation', async function () {
  await this.contextMenuPage.goto(advancedLinksData.baseUrl);
  await this.contextMenuPage.expectLoaded();
  const message = await this.contextMenuPage.openContextMenuAndAcceptAlert();
  expect(message).toBe(advancedLinksData.contextMenu.expectedAlertMessage);
});
