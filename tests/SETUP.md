# Project Setup

This file describes how to set up and run the Playwright + Cucumber automation project locally.

## Prerequisites

- Node.js installed
- npm installed
- Internet access to download dependencies and Playwright browser binaries

## Clone The Repository

```bash
git clone <your-repository-url>
cd AIAgentMCP
```

## Install Dependencies

Use the project root directory to install all packages:

```bash
npm install
```

If you are using Windows PowerShell and script execution blocks `npm`, use:

```bash
npm.cmd install
```

## Install Playwright Browser

This project is currently configured to run in Chromium.
Install the required Playwright browser with:

```bash
npx playwright install chromium
```

If needed in Windows PowerShell:

```bash
npx.cmd playwright install chromium
```

## Project Configuration

- Main configuration file: `playwright.config.js`
- Playwright test directory: `./tests`
- Active automation flow: Cucumber feature files under `features/`
- Step definitions: `features/step-definitions/`
- Page objects: `pages/`
- Test data: `test-data/`

## Run The Tests

Run the default BDD suite:

```bash
npm run test
```

Run all available suites and generate all reports:

```bash
npm run test:all:reports
```

Run suites individually:

```bash
npm run test:bdd
npm run test:bdd:smoke
npm run test:bdd:regression
npm run test:bdd:advanced
npm run test:bdd:auth-dynamic
npm run test:bdd:interaction
npm run test:bdd:browser-ui
npm run test:bdd:secure-dom
```

On Windows PowerShell, replace `npm` with `npm.cmd` if required.

## Generated Reports

After execution, reports are generated in:

- `reports/`
- `playwright-report/`

Main HTML report examples:

- `reports/cucumber-report.html`
- `reports/cucumber-smoke-report.html`
- `reports/cucumber-regression-report.html`
- `reports/cucumber-advanced-report.html`
- `reports/cucumber-auth-dynamic-report.html`
- `reports/cucumber-interaction-report.html`
- `reports/cucumber-browser-ui-report.html`
- `reports/cucumber-secure-dom-report.html`

## Recommended Local Workflow

1. Install dependencies.
2. Install the Chromium browser for Playwright.
3. Run `npm run test` for a basic verification.
4. Run `npm run test:all:reports` for full coverage.
5. Open the generated HTML report from the `reports/` folder.