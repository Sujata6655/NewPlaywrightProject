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
  const finalFlowPage = new FinalFlowPage(page);

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
await profilePage.updatePersonalInfo(

  testData.firstName,
  testData.lastName,
  testData.country,
  testData.city,
  testData.zipCode,
  testData.address,
  testData.state
);

  // First Name Success Validation
  await page
    .getByText('Your personal information is saved.')
    .waitFor({
      state: 'visible',
      timeout: 15000,
    });

  // Update Mobile Number
  await finalFlowPage.updateMobileNumber(
    testData.mobileNumber
  );

  // Open Change Password
  await finalFlowPage.openChangePassword();

  // Handle Optional Popup
  await finalFlowPage.handlePopup();

  // Enter Password Details
  await finalFlowPage.enterPasswords(
    testData.currentPassword,
    testData.newPassword,
    testData.confirmPassword
  );

  // Verify Password Guidelines
  await finalFlowPage.verifyGuidelinesDisplayed();

  // Save Password
  await finalFlowPage.savePassword();

  // Verify Password Changed Message
  await finalFlowPage.verifyPasswordChangedMessage();

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


await page.waitForLoadState('networkidle');

// Open Operations Center in New Tab
const page2 = await page.context().newPage();

const loginPage2 = new LoginPage(page2);

await loginPage2.navigate(
  testData.operationsCenterUrl
);

console.log('URL:', page2.url());

await page2.waitForSelector('#input28', {
  timeout: 60000,
});

const finalFlowPage2 = new FinalFlowPage(page2);

await finalFlowPage2.loginToOperationsCenter(
  testData.email,
  testData.newPassword
);

// Click Operations Center Button
await finalFlowPage2.clickOperationsCenterButton();

console.log(
  'First Name Updated, Mobile Number Updated, Password Changed and Login Successful'
);
// Click Operations Center Button

});