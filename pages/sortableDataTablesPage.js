const { expect } = require('@playwright/test');

// Page object for Sortable Data Tables sorting operations.
class SortableDataTablesPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Data Tables' });
    this.lastNameHeader = page.locator('#table1 th').filter({ hasText: 'Last Name' }).first();
    this.lastNameColumnCells = page.locator('#table1 tbody tr td:nth-child(1)');
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.lastNameHeader).toBeVisible();
  }

  async sortByLastName() {
    await this.lastNameHeader.click();
  }

  async getLastNames() {
    return this.lastNameColumnCells.allInnerTexts();
  }

  async expectAscendingLastNames() {
    const names = (await this.getLastNames()).map((name) => name.trim());
    const sorted = [...names].sort((a, b) => a.localeCompare(b));
    expect(names).toEqual(sorted);
  }
}

module.exports = { SortableDataTablesPage };
