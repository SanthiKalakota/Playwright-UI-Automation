# Playwright BDD Test Project

This project contains an end-to-end UI automation suite built with Playwright and Cucumber.
It validates multiple flows from The Internet test application using feature files, step definitions, and page objects.

## Tech Stack

- Playwright for browser automation
- Cucumber for BDD-style scenarios
- JavaScript for step definitions, page objects, and test data

## Project Structure

- `features/` stores `.feature` files grouped by business area
- `features/step-definitions/` stores Cucumber step implementations
- `pages/` stores page object classes for each page under test
- `pageObjects/` stores page object management helpers
- `test-data/` stores reusable datasets for tagged suites
- `reports/` stores generated JSON and HTML Cucumber reports
- `playwright-report/` stores the Playwright HTML report output
- `tests/` is configured as Playwright's `testDir` and currently holds project documentation

## Prerequisites

- Node.js installed
- npm installed

## Installation

Run the following command from the project root:

```bash
npm install
```

## Run Tests

Run the default BDD suite:

```bash
npm run test
```

Run all suites and generate all reports:

```bash
npm run test:all:reports
```

Run tagged suites individually:

```bash
npm run test:bdd:smoke
npm run test:bdd:regression
npm run test:bdd:advanced
npm run test:bdd:auth-dynamic
npm run test:bdd:interaction
npm run test:bdd:browser-ui
npm run test:bdd:secure-dom
```

## Reports

Generated reports are available here after execution:

- `reports/cucumber-report.html`
- `reports/cucumber-smoke-report.html`
- `reports/cucumber-regression-report.html`
- `reports/cucumber-advanced-report.html`
- `reports/cucumber-auth-dynamic-report.html`
- `reports/cucumber-interaction-report.html`
- `reports/cucumber-browser-ui-report.html`
- `reports/cucumber-secure-dom-report.html`

## Notes

- The project is currently configured to run in Chromium.
- Playwright config points to `./tests` as the native Playwright test directory.
- The active automated coverage in this repository is driven mainly through Cucumber feature files in `features/`.