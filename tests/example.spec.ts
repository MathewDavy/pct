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
  const availSpotsMarch = page.locator(dayLocator);
  console.log(`March spots available: ${await availSpotsMarch.count()}`);
  expect(await availSpotsMarch.count()).toBe(0);

  await nextButton.click();
  const availSpotsApril = page.locator(dayLocator);
  console.log(`April spots available: ${await availSpotsApril.count()}`);
  expect(await availSpotsApril.count()).toBe(0);

  await nextButton.click();
  const availSpotsMay = page.locator(dayLocator);
  console.log(`May spots available: ${await availSpotsMay.count()}`);
  expect(await availSpotsMay.count()).toBe(0);
});
