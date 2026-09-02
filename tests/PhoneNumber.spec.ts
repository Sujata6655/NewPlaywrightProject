import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProfilePage } from '../pages/profilePage';
import { PhoneNumberPage } from '../pages/PhoneNumberPage';
import testData from '../Fixtures/testData.json';


test('Update Mobile Number Successfully', async ({ page }) => {
  test.setTimeout(180000);
  const profilePage = new ProfilePage(page);

  const loginPage = new LoginPage(page);

  const phoneNumberPage = new PhoneNumberPage(page);

  await loginPage.navigate(testData.Url);

  await loginPage.login(
    testData.email,
    testData.currentPassword
  );

  await profilePage.verifyProfileLoaded();

  await phoneNumberPage.updateMobileNumber(
    testData.mobileNumber
  );

    await phoneNumberPage.closeVerifyPhonePopup();

  await profilePage.logout();

});