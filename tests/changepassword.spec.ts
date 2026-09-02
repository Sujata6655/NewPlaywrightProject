import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProfilePage } from '../pages/profilePage';
import { changepasswordpage } from '../pages/changepasswordpage';
import testData from '../Fixtures/testData.json';

test('Edit Profile and Change Password', async ({ page }) => {
  test.setTimeout(180000);

  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);
  const changePasswordPage = new changepasswordpage(page);

  // Login with current password
  await loginPage.navigate();

  await loginPage.login(
    testData.email,
    testData.currentPassword
  );

  // Verify profile page loaded
  await profilePage.verifyProfileLoaded();

  // Update profile
  await profilePage.updateFirstName(
    testData.firstName
  );

  // Open Change Password section
  await profilePage.openChangePassword();

  // Handle optional popup
  await changePasswordPage.handlePopup();

  // Enter passwords and trigger validation
  await changePasswordPage.enterPasswords(
    testData.currentPassword,
    testData.newPassword,
    testData.confirmPassword
  );

//   // Verify Password Guidelines displayed
//   await changePasswordPage.verifyGuidelinesDisplayed();

  // Verify Save button enabled
//   await changePasswordPage.verifySaveEnabled();

  // Click Save button
  await changePasswordPage.savePassword();

  
  // Verify Password Guidelines displayed
  await changePasswordPage.verifyGuidelinesDisplayed();

  // Verify Password Changed Success Message
  await changePasswordPage.verifyPasswordChangedMessage();

  // Logout
  await profilePage.logout();

  // Login again with new password
  await loginPage.navigate();

  await loginPage.login(
    testData.email,
    testData.newPassword
  );

  // Verify login success
  await profilePage.verifyProfileLoaded();

  console.log(
    'Password changed and login successful'
  );
});