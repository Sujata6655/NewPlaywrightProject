import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

import { PhoneNumberPage } from '../pages/PhoneNumberPage';
import testData from '../Fixtures/testData.json';

test('Update mobile number and verify profile API response', async ({ page }) => {
  test.setTimeout(180000);

  const loginPage = new LoginPage(page);

  const phoneNumberPage = new PhoneNumberPage(page);

  await loginPage.navigate(testData.Url);
  await loginPage.login(testData.email, testData.currentPassword);
  // await phoneNumberPage.verifyProfileLoaded();
const saveApiResponse = page.waitForResponse(
  response =>
    ['xhr', 'fetch'].includes(response.request().resourceType()) &&
    response.url().includes('/api/v1/profileservice/'),
  { timeout: 30000 }
);

  await Promise.all([
    saveApiResponse,
    phoneNumberPage.updateMobileNumber(testData.mobileNumber),
  ]);

  const response = await saveApiResponse;

  expect(
    response.status(),
    `Mobile number API failed: ${response.request().method()} ${response.url()}`
  ).toBeGreaterThanOrEqual(200);
  expect(response.status()).toBeLessThan(300);
  console.log(response.status());

  await expect(phoneNumberPage.phoneTextbox).toHaveValue(testData.mobileNumber);

  await phoneNumberPage.closeVerifyPhonePopup();
  await phoneNumberPage.logout();
});