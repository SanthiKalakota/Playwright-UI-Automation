const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');
const { browserUiLinksData } = require('../../test-data/browserUiLinks.data');

// Step definitions for browser-ui-links.feature.
// Shared browser and API context cleanup are configured in hooks.js.
Given('I open homepage for browser UI links suite', async function () {
  this.poManager = new POManager(this.page, { baseUrl: browserUiLinksData.baseUrl });
  this.homePage = this.poManager.getHomePage();
  this.featurePage = this.poManager.getFeaturePage();
  this.geolocationPage = this.poManager.getGeolocationPage();
  this.horizontalSliderPage = this.poManager.getHorizontalSliderPage();
  this.hoversPage = this.poManager.getHoversPage();
  this.infiniteScrollPage = this.poManager.getInfiniteScrollPage();
  this.inputsPage = this.poManager.getInputsPage();
  this.jqueryUiMenusPage = this.poManager.getJQueryUiMenusPage();
  this.javaScriptAlertsPage = this.poManager.getJavaScriptAlertsPage();
  this.javaScriptErrorPage = this.poManager.getJavaScriptErrorPage();
  this.browserUiPageErrors = this.javaScriptErrorPage.capturePageErrors();

  await this.homePage.goto();
});

When('I navigate to browser UI link {string}', async function (linkName) {
  await this.homePage.clickLinkByName(linkName);
});

Then('I should be on browser UI path {string}', async function (expectedPath) {
  await this.featurePage.expectOnPath(expectedPath);
});

Then('I perform geolocation operation', async function () {
  await this.geolocationPage.expectLoaded();
  await this.geolocationPage.setGeolocation(browserUiLinksData.geolocation.latitude, browserUiLinksData.geolocation.longitude);
  await this.geolocationPage.requestLocation();
  await this.geolocationPage.expectCoordinates(browserUiLinksData.geolocation.latitude, browserUiLinksData.geolocation.longitude);
});

Then('I perform horizontal slider operation', async function () {
  await this.horizontalSliderPage.expectLoaded();
  await this.horizontalSliderPage.setValue(browserUiLinksData.horizontalSlider.targetValue);
  await this.horizontalSliderPage.expectValue(browserUiLinksData.horizontalSlider.targetValue);
});

Then('I perform hovers operation', async function () {
  await this.hoversPage.expectLoaded();
  await this.hoversPage.hoverFirstFigure();
  await this.hoversPage.expectFirstUserVisible(browserUiLinksData.hovers.expectedUser);
});

Then('I perform infinite scroll operation', async function () {
  await this.infiniteScrollPage.expectLoaded();
  await this.infiniteScrollPage.loadUntilMinimumParagraphs(browserUiLinksData.infiniteScroll.minimumParagraphs);
  await this.infiniteScrollPage.expectMinimumParagraphs(browserUiLinksData.infiniteScroll.minimumParagraphs);
});

Then('I perform inputs operation', async function () {
  await this.inputsPage.expectLoaded();
  await this.inputsPage.enterValue(browserUiLinksData.inputs.inputValue);
  await this.inputsPage.expectValue(browserUiLinksData.inputs.inputValue);
  await this.inputsPage.incrementOnce();
  await this.inputsPage.expectValue((Number(browserUiLinksData.inputs.inputValue) + 1).toString());
});

Then('I perform jquery ui menus operation', async function () {
  await this.jqueryUiMenusPage.expectLoaded();
  await this.jqueryUiMenusPage.openDownloadsMenu();
  await this.jqueryUiMenusPage.expectPdfItemVisible();
  await this.jqueryUiMenusPage.clickPdfItem();
});

Then('I perform javascript alerts operations', async function () {
  await this.javaScriptAlertsPage.expectLoaded();
  await this.javaScriptAlertsPage.acceptAlert();
  await this.javaScriptAlertsPage.expectResult('You successfully clicked an alert');
  await this.javaScriptAlertsPage.dismissConfirm();
  await this.javaScriptAlertsPage.expectResult('You clicked: Cancel');
  await this.javaScriptAlertsPage.submitPrompt(browserUiLinksData.javascriptAlerts.promptText);
  await this.javaScriptAlertsPage.expectResult(`You entered: ${browserUiLinksData.javascriptAlerts.promptText}`);
});

Then('I perform javascript error operation', async function () {
  await this.javaScriptErrorPage.expectLoaded();
  await this.javaScriptErrorPage.expectDescription(browserUiLinksData.javascriptOnloadError.expectedText);
  await this.page.waitForTimeout(200);
  expect(this.browserUiPageErrors.length).toBeGreaterThanOrEqual(1);
});
