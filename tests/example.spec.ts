import { test, expect } from '@playwright/test';
  
test('text box form submission smoke test', async ({ page }) => {

  await page.goto('/text-box');
  await page.getByPlaceholder('Full Name').fill('Zenzi Tester');
  await page.getByPlaceholder('name@example.com').fill('zenzi.tester@example.com');
  await page.getByPlaceholder('Current Address').fill('123 Test Automation Lane');
  await page.getByRole('button', { name: /submit/i }).click();
  await expect(
    page.locator('id=name'))
  .toContainText('Zenzi Tester');
  await expect(page.locator('id=email')
  ).toContainText('zenzi.tester@example.com');
});


