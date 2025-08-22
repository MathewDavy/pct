import type { TestInfo } from "@playwright/test";

export async function screenshotOnFailure({ page }, testInfo: TestInfo) {
  if (testInfo.status !== testInfo.expectedStatus) {
    const screenshotPath = testInfo.outputPath(`failure.png`);
    testInfo.attachments.push({
      name: "screenshot",
      path: screenshotPath,
      contentType: "image/png",
    });
    await page.screenshot({ path: screenshotPath, timeout: 5000 });
  }
}
