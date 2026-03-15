const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');

// Step definitions for A/B Testing and Add/Remove feature files.
// Shared browser lifecycle is configured in hooks.js.
Given('I open the The Internet homepage', async function () {
  this.poManager = new POManager(this.page);
  this.homePage = this.poManager.getHomePage();
  this.featurePage = this.poManager.getFeaturePage();
  this.abTestingPage = this.poManager.getAbTestingPage();
  this.addRemoveElementsPage = this.poManager.getAddRemoveElementsPage();

  await this.homePage.goto();
});

When('I navigate to {string} link', async function (linkName) {
  await this.homePage.clickLinkByName(linkName);
});

Then('I should be on path {string}', async function (expectedPath) {
  await this.featurePage.expectOnPath(expectedPath);
});

Then(/^I should see A\/B Testing page content$/, async function () {
  await this.abTestingPage.expectLoaded();
});

Then('I add {int} elements', async function (count) {
  await this.addRemoveElementsPage.expectLoaded();
  await this.addRemoveElementsPage.addElements(count);
});

Then('I should see {int} delete buttons', async function (expectedCount) {
  await this.addRemoveElementsPage.expectDeleteButtonsCount(expectedCount);
});

When('I remove all elements', async function () {
  await this.addRemoveElementsPage.removeAllElements();
});
