const { Given, When, Then } = require('@cucumber/cucumber');
const { expect, request: playwrightRequest } = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');
const { authDynamicLinksData } = require('../../test-data/authDynamicLinks.data');

// Step definitions for auth-dynamic-links.feature.
// Shared browser and API context cleanup are configured in hooks.js.

Given('I open homepage for auth dynamic suite', async function () {
  // Reuse shared browser/page created by existing cucumber hooks.
  this.poManager = new POManager(this.page, { baseUrl: authDynamicLinksData.baseUrl });
  this.homePage = this.poManager.getHomePage();
  this.featurePage = this.poManager.getFeaturePage();
  this.digestAuthPage = this.poManager.getDigestAuthPage();
  this.disappearingElementsPage = this.poManager.getDisappearingElementsPage();
  this.dragAndDropPage = this.poManager.getDragAndDropPage();
  this.dropdownPage = this.poManager.getDropdownPage();
  this.dynamicContentPage = this.poManager.getDynamicContentPage();
  this.dynamicControlsPage = this.poManager.getDynamicControlsPage();
  this.dynamicLoadingPage = this.poManager.getDynamicLoadingPage();

  await this.homePage.goto();
});

When('I navigate to auth dynamic link {string}', async function (linkName) {
  await this.homePage.clickLinkByName(linkName);
});

Then('I should be on auth dynamic path {string}', async function (expectedPath) {
  await this.featurePage.expectOnPath(expectedPath);
});

Then('I verify digest authentication through API', async function () {
  await this.digestAuthPage.expectLoaded();
  await this.digestAuthPage.expectHeadingVisibleWhenAvailable();

  this.authDynamicApiContext = await playwrightRequest.newContext({
    baseURL: authDynamicLinksData.baseUrl,
    httpCredentials: {
      username: authDynamicLinksData.digestAuthentication.username,
      password: authDynamicLinksData.digestAuthentication.password,
    },
  });

  const response = await this.authDynamicApiContext.get('/digest_auth');
  const digestHeader = response.headers()['www-authenticate'] || '';

  expect(response.status()).toBe(401);
  expect(digestHeader).toContain(authDynamicLinksData.digestAuthentication.expectedAuthScheme);
  expect(digestHeader).toContain(authDynamicLinksData.digestAuthentication.expectedRealmText);
});

Then('I perform disappearing elements operation', async function () {
  await this.disappearingElementsPage.expectLoaded();
  await this.disappearingElementsPage.expectMinimumMenuLinks(authDynamicLinksData.disappearingElements.minimumMenuLinks);
  const clickedLinkName = await this.disappearingElementsPage.clickFirstMenuLink();
  expect(clickedLinkName.length).toBeGreaterThan(0);
});

Then('I perform drag and drop operation', async function () {
  await this.dragAndDropPage.expectLoaded();
  await this.dragAndDropPage.swapColumnsUsingScript();
  await this.dragAndDropPage.expectHeaders(
    authDynamicLinksData.dragAndDrop.expectedLeftHeaderAfterSwap,
    authDynamicLinksData.dragAndDrop.expectedRightHeaderAfterSwap,
  );
});

Then('I perform dropdown selection operation', async function () {
  await this.dropdownPage.expectLoaded();
  await this.dropdownPage.selectByLabel(authDynamicLinksData.dropdown.optionOne);
  await this.dropdownPage.expectSelectedByLabel(authDynamicLinksData.dropdown.optionOne);
  await this.dropdownPage.selectByLabel(authDynamicLinksData.dropdown.optionTwo);
  await this.dropdownPage.expectSelectedByLabel(authDynamicLinksData.dropdown.optionTwo);
});

Then('I perform dynamic content refresh operation', async function () {
  await this.dynamicContentPage.expectLoaded();
  await this.dynamicContentPage.expectContentChanges(authDynamicLinksData.dynamicContent.maxRefreshAttempts);
});

Then('I perform dynamic controls operation', async function () {
  await this.dynamicControlsPage.expectLoaded();
  await this.dynamicControlsPage.removeCheckbox();
  await this.dynamicControlsPage.addCheckboxBack();
  await this.dynamicControlsPage.enableInput();
  await this.dynamicControlsPage.typeInInput(authDynamicLinksData.dynamicControls.inputText);
});

Then('I perform dynamic loading operations', async function () {
  await this.dynamicLoadingPage.expectLoaded();
  await this.dynamicLoadingPage.openExampleOne();
  await this.dynamicLoadingPage.startAndWaitForMessage(authDynamicLinksData.dynamicLoading.expectedText);

  await this.page.goto(`${authDynamicLinksData.baseUrl.replace(/\/$/, '')}${authDynamicLinksData.dynamicLoading.path}`);
  await this.dynamicLoadingPage.openExampleTwo();
  await this.dynamicLoadingPage.startAndWaitForMessage(authDynamicLinksData.dynamicLoading.expectedText);
});
