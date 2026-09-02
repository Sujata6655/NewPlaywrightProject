# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Finalflow.spec.ts >> Edit Profile, Mobile Number and Change Password
- Location: tests\Finalflow.spec.ts:7:5

# Error details

```
Error: locator.waitFor: Test ended.
Call log:
  - waiting for getByText('Your personal information is saved.') to be visible

```

# Test source

```ts
  1   | import { test } from '@playwright/test';
  2   | import { LoginPage } from '../pages/LoginPage';
  3   | import { ProfilePage } from '../pages/profilePage';
  4   | import { FinalFlowPage } from '../pages/FinalFlowPage';
  5   | import testData from '../Fixtures/testData.json';
  6   | 
  7   | test('Edit Profile, Mobile Number and Change Password', async ({
  8   |   page,
  9   | }) => {
  10  |   test.setTimeout(180000);
  11  | 
  12  |   const loginPage = new LoginPage(page);
  13  |   const profilePage = new ProfilePage(page);
  14  |   const finalFlowPage = new FinalFlowPage(page);
  15  | 
  16  |   // Login
  17  |   //wait loginPage.navigate();
  18  |   await loginPage.navigate(
  19  |   testData.Url
  20  | );
  21  | 
  22  | 
  23  |   await loginPage.login(
  24  |     testData.email,
  25  |     testData.currentPassword
  26  |   );
  27  | 
  28  |   // Verify Profile Loaded
  29  |   await profilePage.verifyProfileLoaded();
  30  | 
  31  |   // Update First Name
  32  |   await profilePage.updateFirstName(
  33  |     testData.firstName
  34  |   );
  35  | 
  36  |   // First Name Success Validation
  37  |   await page
  38  |     .getByText('Your personal information is saved.')
> 39  |     .waitFor({
      |      ^ Error: locator.waitFor: Test ended.
  40  |       state: 'visible',
  41  |       timeout: 15000,
  42  |     });
  43  | 
  44  |   // Update Mobile Number
  45  |   await finalFlowPage.updateMobileNumber(
  46  |     testData.mobileNumber
  47  |   );
  48  | 
  49  |   // Open Change Password
  50  |   await finalFlowPage.openChangePassword();
  51  | 
  52  |   // Handle Optional Popup
  53  |   await finalFlowPage.handlePopup();
  54  | 
  55  |   // Enter Password Details
  56  |   await finalFlowPage.enterPasswords(
  57  |     testData.currentPassword,
  58  |     testData.newPassword,
  59  |     testData.confirmPassword
  60  |   );
  61  | 
  62  |   // Verify Password Guidelines
  63  |   await finalFlowPage.verifyGuidelinesDisplayed();
  64  | 
  65  |   // Save Password
  66  |   await finalFlowPage.savePassword();
  67  | 
  68  |   // Verify Password Changed Message
  69  |   await finalFlowPage.verifyPasswordChangedMessage();
  70  | 
  71  |   // Logout
  72  |   await profilePage.logout();
  73  | 
  74  |   // Login Again With New Password
  75  | //   await loginPage.navigate();
  76  | 
  77  | //   await loginPage.login(
  78  | //     testData.email,
  79  | //     testData.newPassword
  80  | //   );
  81  | // Logout
  82  | // Logout
  83  | // await profilePage.logout();
  84  | 
  85  | // ==========================================
  86  | // OPEN OPERATIONS CENTER IN NEW TAB
  87  | // ==========================================
  88  | 
  89  | 
  90  | 
  91  | 
  92  | // Logout
  93  | 
  94  | 
  95  | // Open New Tab
  96  | // Open New Tab
  97  | 5
  98  | const page2 = await page.context().newPage();
  99  | 
  100 | // Login with New Password
  101 | const loginPage2 = new LoginPage(page2);
  102 | 
  103 | await loginPage2.login(
  104 |   testData.email,
  105 |   testData.newPassword
  106 | );
  107 | 
  108 | // Verify Login Success
  109 | const profilePage2 = new ProfilePage(page2);
  110 | 
  111 | await profilePage2.verifyProfileLoaded();
  112 | 
  113 | console.log(
  114 |   'Successfully logged into Operations Center with the new password'
  115 | );
  116 | 
  117 | // Verify Login Success
  118 | await profilePage.verifyProfileLoaded();
  119 | 
  120 |   // Verify Login Success
  121 |   await profilePage.verifyProfileLoaded();
  122 | 
  123 |   console.log(
  124 |     'First Name Updated, Mobile Number Updated, Password Changed and Login Successful'
  125 |   );
  126 | });
```