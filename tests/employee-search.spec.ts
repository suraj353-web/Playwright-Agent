import { expect, test } from '@playwright/test';

test('searches for an employee in the PIM module', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'PIM' }).click();

  await expect(page).toHaveURL(/\/web\/index\.php\/pim\/viewEmployeeList/);
  await expect(page.getByRole('heading', { name: 'Employee Information' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Type for hints...' }).first().fill('Peter');
  await page.getByRole('option', { name: 'Peter Mac Anderson' }).click();
  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page.getByText('(1) Record Found')).toBeVisible();
  await expect(page.getByRole('row', { name: /0007 Peter Mac Anderson/ })).toBeVisible();
});