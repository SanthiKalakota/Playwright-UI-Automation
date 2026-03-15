# Project Structure

```text
AIAgentMCP/
|-- .github/
|-- .vscode/
|-- features/
|   |-- add-remove-elements.feature
|   |-- advanced-links.feature
|   |-- auth-dynamic-links.feature
|   |-- browser-ui-links.feature
|   |-- dom-window-links.feature
|   |-- interaction-links.feature
|   |-- navigation-links.feature
|   |-- secure-dom-links.feature
|   `-- step-definitions/
|       |-- advanced-links.steps.js
|       |-- auth-dynamic-links.steps.js
|       |-- browser-ui-links.steps.js
|       |-- dom-window-links.steps.js
|       |-- hooks.js
|       |-- interaction-links.steps.js
|       |-- navigation-links.steps.js
|       `-- secure-dom-links.steps.js
|-- node_modules/
|-- pageObjects/
|   `-- POManager.js
|-- pages/
|   |-- abTestingPage.js
|   |-- addRemoveElementsPage.js
|   |-- basicAuthPage.js
|   |-- brokenImagesPage.js
|   |-- challengingDomPage.js
|   |-- checkboxesPage.js
|   |-- contextMenuPage.js
|   |-- digestAuthPage.js
|   |-- disappearingElementsPage.js
|   |-- dragAndDropPage.js
|   |-- dropdownPage.js
|   |-- dynamicContentPage.js
|   |-- dynamicControlsPage.js
|   |-- dynamicLoadingPage.js
|   |-- entryAdPage.js
|   |-- exitIntentPage.js
|   |-- featurePage.js
|   |-- fileDownloadPage.js
|   |-- fileUploadPage.js
|   |-- floatingMenuPage.js
|   |-- forgotPasswordPage.js
|   |-- formAuthenticationPage.js
|   |-- framesPage.js
|   |-- geolocationPage.js
|   |-- homePage.js
|   |-- horizontalSliderPage.js
|   |-- hoversPage.js
|   |-- infiniteScrollPage.js
|   |-- inputsPage.js
|   |-- javascriptAlertsPage.js
|   |-- javascriptErrorPage.js
|   |-- jqueryUiMenusPage.js
|   |-- keyPressesPage.js
|   |-- largeDomPage.js
|   |-- multipleWindowsPage.js
|   |-- nestedFramesPage.js
|   |-- notificationMessagesPage.js
|   |-- redirectLinkPage.js
|   |-- secureFileDownloadPage.js
|   |-- shadowDomPage.js
|   |-- shiftingContentPage.js
|   |-- slowResourcesPage.js
|   |-- sortableDataTablesPage.js
|   |-- statusCodesPage.js
|   |-- typosPage.js
|   `-- wysiwygEditorPage.js
|-- playwright-report/
|   `-- index.html
|-- reports/
|   |-- cucumber-advanced-report.html
|   |-- cucumber-advanced-report.json
|   |-- cucumber-auth-dynamic-report.html
|   |-- cucumber-auth-dynamic-report.json
|   |-- cucumber-browser-ui-report.html
|   |-- cucumber-browser-ui-report.json
|   |-- cucumber-dom-window-report.html
|   |-- cucumber-dom-window-report.json
|   |-- cucumber-interaction-report.html
|   |-- cucumber-interaction-report.json
|   |-- cucumber-regression-report.html
|   |-- cucumber-regression-report.json
|   |-- cucumber-report.html
|   |-- cucumber-report.json
|   |-- cucumber-secure-dom-report.html
|   |-- cucumber-secure-dom-report.json
|   |-- cucumber-smoke-report.html
|   `-- cucumber-smoke-report.json
|-- test-data/
|   |-- advancedLinks.data.js
|   |-- authDynamicLinks.data.js
|   |-- browserUiLinks.data.js
|   |-- domWindowLinks.data.js
|   |-- herokuLinks.data.js
|   |-- interactionLinks.data.js
|   |-- navigationLinks.data.js
|   |-- sample-upload.txt
|   `-- secureDomLinks.data.js
|-- test-results/
|-- tests/
|   |-- PROJECT_STRUCTURE.md
|   `-- README.md
|-- .gitignore
|-- package-lock.json
|-- package.json
`-- playwright.config.js
```

## Notes

- `features/` contains the BDD scenarios.
- `features/step-definitions/` contains step implementations and hooks.
- `pages/` contains page object models.
- `test-data/` contains test inputs and reusable data files.
- `reports/` and `playwright-report/` contain generated execution reports.
- `tests/` currently stores project documentation.