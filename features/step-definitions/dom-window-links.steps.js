/**
/**
 * Step definitions for dom-window-links.feature
 * Initializes POManager and all page objects in the Given step,
 * following the same pattern used by all other step definition files.
 */
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');
const { domWindowLinksData: d } = require('../../test-data/domWindowLinks.data.js');

// ══ GIVEN ════════════════════════════════════════════════════════════════════

// Initialise POManager and all page objects for the dom-window suite.
Given('I am on the Heroku home page', async function () {
  this.poManager = new POManager(this.page, { baseUrl: d.baseUrl });
  this.homePage = this.poManager.getHomePage();
  this.featurePage = this.poManager.getFeaturePage();
  this.keyPressesPage = this.poManager.getKeyPressesPage();
  this.largeDomPage = this.poManager.getLargeDomPage();
  this.multipleWindowsPage = this.poManager.getMultipleWindowsPage();
  this.nestedFramesPage = this.poManager.getNestedFramesPage();
  this.notificationMessagesPage = this.poManager.getNotificationMessagesPage();
  this.redirectLinkPage = this.poManager.getRedirectLinkPage();
  await this.homePage.goto();
});

// ══ WHEN ─────────────────────────────────────────────────────────────────────

When('I click the {string} link', async function (linkName) {
  await this.homePage.clickLinkByName(linkName);
});

When('I press the {string} key in the input', async function (key) {
  await this.keyPressesPage.pressKey(key);
});

When('I open the new window', async function () {
  // Store the new page handle on the World so Then steps can access it.
  this.newTab = await this.multipleWindowsPage.openNewWindow();
});

When('I trigger a notification', async function () {
  await this.notificationMessagesPage.triggerNotification();
});

When('I click the redirect link', async function () {
  await this.redirectLinkPage.clickRedirectLink();
});

// ══ THEN ──────────────────────────────────────────────────────────────────────

Then('I should be on the {string} page', async function (expectedPath) {
  await this.featurePage.expectOnPath(expectedPath);
});

// ── Key Presses ───────────────────────────────────────────────────────────────
Then('the Key Presses input is visible', async function () {
  await this.keyPressesPage.expectLoaded();
});

Then('the result should show {string}', async function (expectedText) {
  await this.keyPressesPage.expectResult(expectedText);
});

// ── Large & Deep DOM ──────────────────────────────────────────────────────────
Then('the large DOM page is loaded', async function () {
  await this.largeDomPage.expectLoaded();
});

Then('the deep cell {string} exists in the DOM', async function (cellId) {
  await this.largeDomPage.expectCellExists(cellId);
});

// ── Multiple Windows ──────────────────────────────────────────────────────────
Then('the Multiple Windows page is loaded', async function () {
  await this.multipleWindowsPage.expectLoaded();
});

Then('the new window should be at path {string}', async function (expectedPath) {
  await this.multipleWindowsPage.expectNewWindowPath(this.newTab, expectedPath);
});

Then('the new window should have heading {string}', async function (headingText) {
  await this.multipleWindowsPage.expectNewWindowHeading(this.newTab, headingText);
});

// ── Nested Frames ─────────────────────────────────────────────────────────────
Then(
  'the nested frames should contain texts {string}, {string}, {string} and {string}',
  async function (left, middle, right, bottom) {
    await this.nestedFramesPage.expectFrameTexts(left, middle, right, bottom);
  },
);

// ── Notification Messages ─────────────────────────────────────────────────────
Then('the Notification Messages page is loaded', async function () {
  await this.notificationMessagesPage.expectLoaded();
});

Then('a valid notification flash message should be displayed', async function () {
  await this.notificationMessagesPage.expectMessageContainsOneOf(d.notificationMessages.possibleMessages);
});

// ── Redirect Link ─────────────────────────────────────────────────────────────
Then('the Redirector page is loaded', async function () {
  await this.redirectLinkPage.expectLoaded();
});

Then('I should be redirected to {string}', async function (expectedPath) {
  await this.redirectLinkPage.expectRedirectedTo(expectedPath);
});
