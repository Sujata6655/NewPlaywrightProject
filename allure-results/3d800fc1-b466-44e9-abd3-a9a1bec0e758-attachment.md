# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PasswordChange.spec.ts >> Change Password >> User should be able to change password successfully
- Location: tests\PasswordChange.spec.ts:7:7

# Error details

```
TypeError: passwordChangePage.openChangePassword is not a function
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | import { PasswordChangePage } from '../pages/PasswordChangePage';
  3  | import testData from '../Fixtures/testData.json';
  4  | 
  5  | test.describe('Change Password', () => {
  6  | 
  7  |   test('User should be able to change password successfully', async ({ page }) => {
  8  | 
  9  |     const passwordChangePage = new PasswordChangePage(page);
  10 | 
  11 |     // Open Change Password Screen
> 12 |     await passwordChangePage.openChangePassword();
     |                              ^ TypeError: passwordChangePage.openChangePassword is not a function
  13 | 
  14 |     // Verify Password Guidelines
  15 |     await passwordChangePage.verifyGuidelinesDisplayed();
  16 | 
  17 |     // Enter Password Details
  18 |     await passwordChangePage.enterPasswords(
  19 |       testData.currentPassword,
  20 |       testData.newPassword,
  21 |       testData.confirmPassword
  22 |     );
  23 | 
  24 |     // Save Password
  25 |     await passwordChangePage.savePassword();
  26 | 
  27 |     // Verify Success Message
  28 |     await passwordChangePage.verifyPasswordChangedMessage();
  29 | 
  30 |     // Handle Success Popup
  31 |     await passwordChangePage.handlePopup();
  32 |   });
  33 | 
  34 | });
```