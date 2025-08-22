import { test, expect } from "@playwright/test";
import { screenshotOnFailure } from "../helper";

test.afterEach(screenshotOnFailure);

test("there are no available spots", async ({ page }) => {
  await page.goto(
    "https://portal.permit.pcta.org/availability/mexican-border.php"
  );
  const dayLocator = `xpath=//td//a[not(contains(@class,'full-quota'))]`;
  const nextButton = page.locator(
    `xpath=//button[contains(@class,'fc-next-button')]`
  );
  for (let i = 0; i < 2; i++) {
    expect(await page.locator(dayLocator).count()).toBe(0);
    await nextButton.click();
  }
});

