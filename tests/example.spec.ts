import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/demosite/);
});

test('book store link', async ({ page }) => {
  await page.goto('/');

  // Click the get book store link.
  await page.getByRole('link', { name: 'books' }).click();

  // Expects page to have a heading with the name of ToolsQA
  await expect(page.getByRole('img', { name: 'Toolsqa' })).toBeVisible();
});
