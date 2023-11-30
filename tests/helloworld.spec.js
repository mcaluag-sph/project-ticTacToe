// @ts-check
const { test, expect } = require("@playwright/test");

test("Hello World", async ( { page }) => {
    // Given: TTT page loaded
    await page.goto('/');

    // When: Page loaded

    // Then: TTT Title visible
    await expect(page.getByText("Tic Tac Toe")).toBeVisible();
})