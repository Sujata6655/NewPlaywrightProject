# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: changepassword.spec.ts >> Edit Profile and Change Password
- Location: tests\changepassword.spec.ts:7:5

# Error details

```
TypeError: _changepasswordpage.ChangePasswordPage is not a constructor
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | import { ProfilePage } from '../pages/profilePage';
  4  | import { ChangePasswordPage } from '../pages/changepasswordpage';
  5  | import { testData } from '../Fixtures/testData';
  6  | 
  7  | test('Edit Profile and Change Password', async ({ page }) => {
  8  |   test.setTimeout(180000);
  9  | 
  10 |   const loginPage = new LoginPage(page);
  11 |   const profilePage = new ProfilePage(page);
> 12 |   const changePasswordPage = new ChangePasswordPage(page);
     |                              ^ TypeError: _changepasswordpage.ChangePasswordPage is not a constructor
  13 | 
  14 |   await loginPage.navigate();
  15 | 
  16 |   await loginPage.login(
  17 |     testData.email,
  18 |     testData.currentPassword
  19 |   );
  20 | 
  21 |   await profilePage.verifyProfileLoaded();
  22 | 
  23 |   await profilePage.updateFirstName(
  24 |     testData.firstName
  25 |   );
  26 | 
  27 |   await profilePage.openChangePassword();
  28 | 
  29 |   await changePasswordPage.handlePopup();
  30 | 
  31 |   await changePasswordPage.enterPasswords(
  32 |     testData.currentPassword,
  33 |     testData.newPassword,
  34 |     testData.confirmPassword
  35 |   );
  36 | 
  37 |   await changePasswordPage.verifyGuidelinesDisplayed();
  38 | 
  39 |   await changePasswordPage.verifySaveEnabled();
  40 | 
  41 |   await changePasswordPage.savePassword();
  42 | 
  43 |   await changePasswordPage.verifyPasswordChangedMessage();
  44 | 
  45 |   await profilePage.logout();
  46 | 
  47 |   await loginPage.navigate();
  48 | 
  49 |   await loginPage.login(
  50 |     testData.email,
  51 |     testData.newPassword
  52 |   );
  53 | 
  54 |   await profilePage.verifyProfileLoaded();
  55 | 
  56 |   console.log(
  57 |     'Password changed and login successful'
  58 |   );
  59 | });
```