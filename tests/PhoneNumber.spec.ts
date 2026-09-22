import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PhoneNumberPage } from '../pages/PhoneNumberPage';
import testData from '../Fixtures/testData.json';


test('Update Mobile Number Successfully', async ({ page }) => {
  test.setTimeout(180000);
  const phoneNumberPage = new PhoneNumberPage(page);

  const loginPage = new LoginPage(page);

  

  await loginPage.navigate(testData.Url);

  await loginPage.login(
    testData.email,
    testData.currentPassword
  );

  // await phoneNumberPage.verifyProfileLoaded();

  await phoneNumberPage.updateMobileNumber(
    testData.mobileNumber
  );

    await phoneNumberPage.closeVerifyPhonePopup();

  await phoneNumberPage.logout();

});