import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProfilePage } from '../pages/profilePage';
import { FinalFlowPage } from '../pages/FinalFlowPage';
import testData from '../Fixtures/testData.json';

test('Edit Profile, Mobile Number and Change Password', async ({
  page,
}) => {
  test.setTimeout(180000);

  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);
  const passwordChangePage = new FinalFlowPage(page);

  // Login
  //wait loginPage.navigate();
  await loginPage.navigate(
  testData.Url
);


  await loginPage.login(
    testData.email,
    testData.currentPassword
  );

  // Verify Profile Loaded
  await profilePage.verifyProfileLoaded();

  // Update First Name


  // Open Change Password
  await passwordChangePage.openChangePassword();

  // Handle Optional Popup
  await passwordChangePage.handlePopup();

  // Enter Password Details
  await passwordChangePage.enterPasswords(
    testData.currentPassword,
    testData.newPassword,
    testData.confirmPassword
  );

  // Verify Password Guidelines
  await passwordChangePage.verifyGuidelinesDisplayed();

  // Save Password
  await passwordChangePage.savePassword();

  // Verify Password Changed Message
  await passwordChangePage.verifyPasswordChangedMessage();

  // Logout
  await profilePage.logout();

  // Login Again With New Password
//   await loginPage.navigate();

//   await loginPage.login(
//     testData.email,
//     testData.newPassword
//   );
// Logout
// Logout
// await profilePage.logout();

// ==========================================
// OPEN OPERATIONS CENTER IN NEW TAB
// ==========================================

// Logout
// Logout



});