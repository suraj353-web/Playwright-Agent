import { Locator, Page } from '@playwright/test';

export class AddEmployeePage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    this.saveButton = page.getByRole('button', { name: 'Save' });
  }

  async enterEmployeeDetails(firstName: string, lastName: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
  }

  async saveEmployee(): Promise<void> {
    await this.saveButton.click();
  }

  employeeNameHeading(fullName: string): Locator {
    return this.page.getByRole('heading', { name: fullName });
  }
}
