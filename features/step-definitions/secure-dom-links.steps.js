const { Given, When, Then } = require('@cucumber/cucumber');
const { expect, request } = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');
const { secureDomLinksData } = require('../../test-data/secureDomLinks.data');

// Step definitions for secure-dom-links.feature.
// Shared browser and API context cleanup are configured in hooks.js.
Given('I open homepage for secure dom links suite', async function () {
  this.apiContext = await request.newContext();
  this.poManager = new POManager(this.page, { baseUrl: secureDomLinksData.baseUrl });
  this.homePage = this.poManager.getHomePage();
  this.featurePage = this.poManager.getFeaturePage();
  this.secureFileDownloadPage = this.poManager.getSecureFileDownloadPage();
  this.shadowDomPage = this.poManager.getShadowDomPage();
  this.shiftingContentPage = this.poManager.getShiftingContentPage();
  this.slowResourcesPage = this.poManager.getSlowResourcesPage();
  this.sortableDataTablesPage = this.poManager.getSortableDataTablesPage();
  this.statusCodesPage = this.poManager.getStatusCodesPage();
  this.typosPage = this.poManager.getTyposPage();
  this.wysiwygEditorPage = this.poManager.getWysiwygEditorPage();

  await this.homePage.goto();
});

When('I navigate to secure dom link {string}', async function (linkName) {
  await this.homePage.clickLinkByName(linkName);
});

Then('I should be on secure dom path {string}', async function (expectedPath) {
  await this.featurePage.expectOnPath(expectedPath);
});

Then('I should be on secure dom path {string} or {string}', async function (primaryPath, fallbackPath) {
  await this.secureFileDownloadPage.expectLoadedOnEitherPath(primaryPath, fallbackPath);
});

Then('I perform secure file download operation', async function () {
  await this.secureFileDownloadPage.expectLoginPromptIfRedirected(secureDomLinksData.secureFileDownload.fallbackPath);
  await this.secureFileDownloadPage.expectDownloadLinksWhenAuthorized(secureDomLinksData.secureFileDownload.path);

  const apiResponse = await this.apiContext.get(`${secureDomLinksData.baseUrl}download_secure`, { maxRedirects: 0 });
  expect([301, 302, 303, 307, 308, 401]).toContain(apiResponse.status());
});

Then('I perform shadow dom operation', async function () {
  await this.shadowDomPage.expectLoaded();
  await this.shadowDomPage.expectParagraphContains(secureDomLinksData.shadowDom.expectedText);
});

Then('I perform shifting content operation', async function () {
  await this.shiftingContentPage.expectLoaded();
  await this.shiftingContentPage.openMenuExample();
  await this.shiftingContentPage.expectOnPath(secureDomLinksData.shiftingContent.menuExamplePath);
});

Then('I perform slow resources operation', async function () {
  await this.slowResourcesPage.expectLoaded();
  const apiResponse = await this.apiContext.get(`${secureDomLinksData.baseUrl}slow`);
  expect(apiResponse.status()).toBeGreaterThanOrEqual(secureDomLinksData.slowResources.minStatus);
});

Then('I perform sortable data tables operation', async function () {
  await this.sortableDataTablesPage.expectLoaded();
  await this.sortableDataTablesPage.sortByLastName();
  await this.sortableDataTablesPage.expectAscendingLastNames();
});

Then('I perform status codes operation', async function () {
  await this.statusCodesPage.expectLoaded();
  await this.statusCodesPage.openCode(secureDomLinksData.statusCodes.targetCode);
  await this.statusCodesPage.expectCodeText(secureDomLinksData.statusCodes.targetCode);

  const apiResponse = await this.apiContext.get(`${secureDomLinksData.baseUrl}${secureDomLinksData.statusCodes.apiPath}`);
  expect(apiResponse.status()).toBe(200);
});

Then('I perform typos operation', async function () {
  await this.typosPage.expectLoaded();
  await this.typosPage.expectTypoPattern(secureDomLinksData.typos.expectedPattern);
});

Then('I perform wysiwyg editor operation', async function () {
  await this.wysiwygEditorPage.expectLoaded();
  await this.wysiwygEditorPage.updateTextWhenEditable(secureDomLinksData.wysiwygEditor.editorText);
  await this.wysiwygEditorPage.expectTextOrDefault(secureDomLinksData.wysiwygEditor.editorText);
});
