# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PasswordChange.spec.ts >> Change Password >> User should be able to change password successfully
- Location: tests\PasswordChange.spec.ts:8:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeEnabled() failed

Locator:  locator('//*[@id="credentialsForm"]/button[2]')
Expected: enabled
Received: disabled

Call log:
  - Expect "toBeEnabled" with timeout 30000ms
  - waiting for locator('//*[@id="credentialsForm"]/button[2]')
    19 × locator resolved to <button disabled tabindex="-1" type="submit" class="MuiButtonBase-root MuiButton-root MuiButton-primary MuiButton-primaryPrimary MuiButton-sizeSmall MuiButton-primarySizeSmall MuiButton-colorPrimary Mui-disabled MuiButton-root MuiButton-primary MuiButton-primaryPrimary MuiButton-sizeSmall MuiButton-primarySizeSmall MuiButton-colorPrimary ml-3 mt-2 mb-2 css-5rc0w6">Save</button>
       - unexpected value "disabled"
  - Test timeout of 30000ms exceeded.

```

```yaml
- button "Save" [disabled]
```

# Test source

```ts
  1   | import { Page, Locator, expect } from '@playwright/test';
  2   | 
  3   | export class PasswordChangePage {
  4   |   readonly page: Page;
  5   | 
  6   |   readonly changePasswordButton: Locator;
  7   |   readonly currentPasswordField: Locator;
  8   |   readonly newPasswordField: Locator;
  9   |   readonly confirmPasswordField: Locator;
  10  |   readonly savePasswordButton: Locator;
  11  | 
  12  |   readonly guidelines: Locator;
  13  |   readonly passwordChangedMsg: Locator;
  14  |   readonly okButton: Locator;
  15  | 
  16  |   constructor(page: Page) {
  17  |     this.page = page;
  18  | 
  19  |     this.changePasswordButton = page.locator(
  20  |       'xpath=//*[@id="sigInInfoId"]/div/button'
  21  |     );
  22  | 
  23  |     this.currentPasswordField = page.locator(
  24  |       'xpath=//*[@id="credentialsForm"]/div/div[1]/div[1]/div/div/input'
  25  |     );
  26  | 
  27  |     this.newPasswordField = page.locator(
  28  |       'xpath=//*[@id="credentialsForm"]/div/div[1]/div[2]/div/div/input'
  29  |     );
  30  | 
  31  |     this.confirmPasswordField = page.locator(
  32  |       'xpath=//*[@id="credentialsForm"]/div/div[1]/div[3]/div/div/input'
  33  |     );
  34  | 
  35  |     this.savePasswordButton = page.locator(
  36  |       'xpath=//*[@id="credentialsForm"]/button[2]'
  37  |     );
  38  | 
  39  |     this.guidelines = page.getByText('Password Guidelines');
  40  | 
  41  |     this.passwordChangedMsg = page.getByText(
  42  |       /password is changed|password changed successfully/i
  43  |     );
  44  | 
  45  |     this.okButton = page.locator(
  46  |       '//button[contains(.,"OK") or contains(.,"Ok") or contains(.,"ok")]'
  47  |     );
  48  |   }
  49  | 
  50  |   async verifyProfileLoaded() {
  51  |     await expect(this.changePasswordButton).toBeVisible({
  52  |       timeout: 60000,
  53  |     });
  54  |   }
  55  | 
  56  |   async openChangePassword() {
  57  |     await this.changePasswordButton.scrollIntoViewIfNeeded();
  58  | 
  59  |     await expect(this.changePasswordButton).toBeVisible({
  60  |       timeout: 30000,
  61  |     });
  62  | 
  63  |     await this.changePasswordButton.click();
  64  |   }
  65  | 
  66  |   async verifyGuidelinesDisplayed() {
  67  |     await expect(this.guidelines).toBeVisible({
  68  |       timeout: 30000,
  69  |     });
  70  |   }
  71  | 
  72  |   async enterPasswords(
  73  |     currentPassword: string,
  74  |     newPassword: string,
  75  |     confirmPassword: string
  76  |   ) {
  77  |     await this.currentPasswordField.clear();
  78  |     await this.currentPasswordField.fill(currentPassword);
  79  | 
  80  |     await this.newPasswordField.clear();
  81  |     await this.newPasswordField.fill(newPassword);
  82  | 
  83  |     await this.confirmPasswordField.clear();
  84  |     await this.confirmPasswordField.fill(confirmPassword);
  85  |   }
  86  | 
  87  |   async savePassword() {
> 88  |     await expect(this.savePasswordButton).toBeEnabled({
      |                                           ^ Error: expect(locator).toBeEnabled() failed
  89  |       timeout: 30000,
  90  |     });
  91  | 
  92  |     await this.savePasswordButton.click();
  93  |   }
  94  | 
  95  |   async verifyPasswordChangedMessage() {
  96  |     await expect(this.passwordChangedMsg).toBeVisible({
  97  |       timeout: 30000,
  98  |     });
  99  | 
  100 |     console.log('Password Changed Successfully');
  101 |   }
  102 | 
  103 |   async handlePopup() {
  104 |     const popupVisible = await this.okButton
  105 |       .isVisible()
  106 |       .catch(() => false);
  107 | 
  108 |     if (popupVisible) {
  109 |       await this.okButton.click();
  110 |       console.log('Popup Handled');
  111 |     } else {
  112 |       console.log('Popup Not Displayed');
  113 |     }
  114 |   }
  115 | 
  116 |   async changePassword(
  117 |     currentPassword: string,
  118 |     newPassword: string,
  119 |     confirmPassword: string
  120 |   ) {
  121 |     await this.openChangePassword();
  122 | 
  123 |     await this.verifyGuidelinesDisplayed();
  124 | 
  125 |     await this.enterPasswords(
  126 |       currentPassword,
  127 |       newPassword,
  128 |       confirmPassword
  129 |     );
  130 | 
  131 |     await this.savePassword();
  132 | 
  133 |     await this.verifyPasswordChangedMessage();
  134 | 
  135 |     await this.handlePopup();
  136 |   }
  137 | }
```