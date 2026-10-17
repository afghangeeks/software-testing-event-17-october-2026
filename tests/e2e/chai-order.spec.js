// End-to-end test: we open the real app in a real browser and order chai like a user.
import { test, expect } from "@playwright/test";

test("a user orders two cups of chai", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Chai Time" })).toBeVisible();

  await page.getByRole("button", { name: /add chai/i }).click();
  await page.getByRole("button", { name: /add chai/i }).click();
  await page.getByRole("button", { name: /place your order/i }).click();

  // No fake server here: the name comes from the real /api/hello route.
  await expect(page.getByRole("heading", { name: "Salam, Ali!" })).toBeVisible();
  await expect(page.getByText(/2 cups of chai/i)).toBeVisible();
});
