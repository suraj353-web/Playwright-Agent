import { expect, test } from '@playwright/test';

test('verifies Admin module access', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'Admin' }).click();

  await expect(page).toHaveURL(/\/web\/index\.php\/admin\/viewSystemUsers/);
  await expect(page.getByRole('heading', { name: 'System Users' })).toBeVisible();
  await expect(page.getByRole('button', { name: /Add/ })).toBeVisible();
});