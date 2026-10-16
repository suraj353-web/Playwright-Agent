import { Locator, Page } from '@playwright/test';

export class PIMPage {
  readonly page: Page;
  readonly addEmployeeLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addEmployeeLink = page.getByRole('link', { name: 'Add Employee' });
  }

  async openAddEmployeeForm(): Promise<void> {
    await this.addEmployeeLink.click();
  }
}
