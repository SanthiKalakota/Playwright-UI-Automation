const path = require('path');
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect, request } = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');
const { interactionLinksData } = require('../../test-data/interactionLinks.data');

// Step definitions for interaction-links.feature.
// Shared browser and API context cleanup are configured in hooks.js.
Given('I open homepage for interaction links suite', async function () {
  this.apiContext = await request.newContext();
  this.poManager = new POManager(this.page, { baseUrl: interactionLinksData.baseUrl });
  this.homePage = this.poManager.getHomePage();
  this.featurePage = this.poManager.getFeaturePage();
  this.entryAdPage = this.poManager.getEntryAdPage();
  this.exitIntentPage = this.poManager.getExitIntentPage();
  this.fileDownloadPage = this.poManager.getFileDownloadPage();
  this.fileUploadPage = this.poManager.getFileUploadPage();
  this.floatingMenuPage = this.poManager.getFloatingMenuPage();
  this.forgotPasswordPage = this.poManager.getForgotPasswordPage();
  this.formAuthenticationPage = this.poManager.getFormAuthenticationPage();
  this.framesPage = this.poManager.getFramesPage();

  await this.homePage.goto();
});

When('I navigate to interaction link {string}', async function (linkName) {
  await this.homePage.clickLinkByName(linkName);
});

Then('I should be on interaction path {string}', async function (expectedPath) {
  await this.featurePage.expectOnPath(expectedPath);
});

Then('I perform entry ad operation', async function () {
  await this.entryAdPage.expectLoaded();
  await this.entryAdPage.expectModalVisible(interactionLinksData.entryAd.modalTitle);
  await this.entryAdPage.closeModal();
});

Then('I perform exit intent operation', async function () {
  await this.exitIntentPage.expectLoaded();
  await this.exitIntentPage.triggerExitIntent();
  await this.exitIntentPage.expectModalVisible(interactionLinksData.exitIntent.modalTitle);
  await this.exitIntentPage.closeModal();
});

Then('I perform file download operation', async function () {
  await this.fileDownloadPage.expectLoaded();
  const href = await this.fileDownloadPage.getFirstDownloadHref();
  const absoluteDownloadUrl = new URL(href, interactionLinksData.baseUrl).toString();
  const apiResponse = await this.apiContext.get(absoluteDownloadUrl);
  expect(apiResponse.ok()).toBeTruthy();
  const download = await this.fileDownloadPage.downloadFirstFile();
  expect(await download.suggestedFilename()).toBeTruthy();
});

Then('I perform file upload operation', async function () {
  const uploadFilePath = path.join(__dirname, '..', '..', 'test-data', interactionLinksData.fileUpload.uploadFileName);
  await this.fileUploadPage.expectLoaded();
  await this.fileUploadPage.uploadFile(uploadFilePath);
  await this.fileUploadPage.expectUploadSuccess(
    interactionLinksData.fileUpload.uploadedHeading,
    interactionLinksData.fileUpload.uploadFileName,
  );
});

Then('I perform floating menu operation', async function () {
  await this.floatingMenuPage.expectLoaded();
  await this.floatingMenuPage.scrollDeep();
  await this.floatingMenuPage.expectMenuVisibleAfterScroll();
  await this.floatingMenuPage.clickMenuLink(interactionLinksData.floatingMenu.targetLink);
  await expect(this.page).toHaveURL(/#news/);
});

Then('I perform forgot password operation', async function () {
  await this.forgotPasswordPage.expectLoaded();
  await this.forgotPasswordPage.submitEmail(interactionLinksData.forgotPassword.email);
  await this.forgotPasswordPage.expectServerError(interactionLinksData.forgotPassword.errorHeading);
});

Then('I perform form authentication operation', async function () {
  await this.formAuthenticationPage.expectLoaded();
  await this.formAuthenticationPage.login(
    interactionLinksData.formAuthentication.username,
    interactionLinksData.formAuthentication.password,
  );
  await this.formAuthenticationPage.expectLoggedIn(interactionLinksData.formAuthentication.securePath);
  await this.formAuthenticationPage.logout();
  await this.formAuthenticationPage.expectLoggedOut(interactionLinksData.formAuthentication.logoutMessage);
});

Then('I perform frames operations', async function () {
  await this.framesPage.expectLoaded();
  await this.framesPage.openIFramePage();
  await this.framesPage.expectEditorText(interactionLinksData.frames.defaultEditorText);
  await this.framesPage.openNestedFramesPage(interactionLinksData.baseUrl, interactionLinksData.frames.nestedFramesPath);
  await this.framesPage.expectNestedFrameText(
    interactionLinksData.frames.nestedLeftText,
    interactionLinksData.frames.nestedBottomText,
  );
});
