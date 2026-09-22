import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PasswordChangePage } from '../pages/PasswordChangePage';

import testData from '../Fixtures/testData.json';

test('Change password and verify API response', async ({ page }) => {
  test.setTimeout(180000);

  const loginPage = new LoginPage(page);
  const passwordChangePage = new PasswordChangePage(page);

  await loginPage.navigate(testData.Url);
  await loginPage.login(testData.email, testData.currentPassword);

  await passwordChangePage.openChangePassword();
  await passwordChangePage.handlePopup();
  await passwordChangePage.enterPasswords(
    testData.currentPassword,
    testData.newPassword,
    testData.confirmPassword
  );

  await passwordChangePage.verifyGuidelinesDisplayed();

  //// Start listening for the Password Change API response

  const passwordApiResponse = page.waitForResponse(
    response => {
      // Get the request associated with this response
      const request = response.request();
      // Capture request payload/body. If body is null, use empty string.
      const requestBody = request.postData() ?? '';
     //
// Return true only for the password change API request
      return (
        // Accept only XHR or Fetch network requests
        ['xhr', 'fetch'].includes(request.resourceType()) &&
        // URL must contain '/api/'
        /\/api\//i.test(response.url()) &&
        // URL or request body must contain the word 'password'
        /password/i.test(`${response.url()} ${requestBody}`) &&
        // Exclude toggle and phone verification APIs
        !/toggle|phoneverification/i.test(response.url())
      );
    },
    // Maximum wait time for API response
    { timeout: 30000 }
  );

  await Promise.all([
    passwordApiResponse,
    passwordChangePage.savePassword(),
  ]);

  // Wait for the captured Password Change API response
  const response = await passwordApiResponse;
 // Verify that the HTTP method used for password change

// is POST, PUT, or PATCH (valid update operations)
  expect(
    response.request().method(),
    'Password change must be submitted as an API mutation'
  ).toMatch(/^(POST|PUT|PATCH)$/);
  // Verify that the API response status is 200 or higher

// If it fails, display the API method and URL in the error message
  expect(
    response.status(),
    // Verify that the API response status is less than 300

// This confirms the response is in the successful 2xx range
    `Password change API failed: ${response.request().method()} ${response.url()}`
  ).toBeGreaterThanOrEqual(200);
  expect(response.status()).toBeLessThan(300);
  console.log(response.status());

  await passwordChangePage.verifyPasswordChangedMessage();
  await passwordChangePage.logout();
});
