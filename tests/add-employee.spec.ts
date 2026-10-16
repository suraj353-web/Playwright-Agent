import { expect, test } from '@playwright/test';
import { AddEmployeePage } from '../pages/AddEmployeePage';
import { DashboardPage } from '../pages/DashboardPage';
import { LoginPage } from '../pages/LoginPage';
import { PIMPage } from '../pages/PIMPage';

test('creates a new employee and displays the employee profile', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const pimPage = new PIMPage(page);
  const addEmployeePage = new AddEmployeePage(page);

  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');

  await dashboardPage.navigateToPIM();
  await pimPage.openAddEmployeeForm();

  await addEmployeePage.enterEmployeeDetails('John123', 'Doe456');
  await addEmployeePage.saveEmployee();

  await expect(page).toHaveURL(/\/web\/index\.php\/pim\/viewPersonalDetails\/empNumber\/\d+/);
  await expect(addEmployeePage.employeeNameHeading('John123 Doe456')).toBeVisible();
});