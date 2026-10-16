import { Locator, Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly pimLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pimLink = page.getByRole('link', { name: 'PIM' });
  }

  async navigateToPIM(): Promise<void> {
    await this.pimLink.click();
  }
}
