import { test, expect } from "@playwright/test";

test('Juice Shop is reachable and shows the store title', async ({ page }) => {
    //Arrange + Act
    await page.goto('/');

    //Assert
    await expect(page).toHaveTitle('OWASP Juice Shop')
})