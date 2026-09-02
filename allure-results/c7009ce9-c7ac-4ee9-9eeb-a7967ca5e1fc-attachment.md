# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: changepassword.spec.ts >> Edit Profile and Change Password
- Location: tests\changepassword.spec.ts:7:5

# Error details

```
Error: expect(locator).toBeEnabled() failed

Locator:  getByRole('button', { name: /^Save$/ })
Expected: enabled
Received: disabled
Timeout:  30000ms

Call log:
  - Expect "toBeEnabled" with timeout 30000ms
  - waiting for getByRole('button', { name: /^Save$/ })
    62 × locator resolved to <button disabled tabindex="-1" type="submit" class="MuiButtonBase-root MuiButton-root MuiButton-primary MuiButton-primaryPrimary MuiButton-sizeSmall MuiButton-primarySizeSmall MuiButton-colorPrimary Mui-disabled MuiButton-root MuiButton-primary MuiButton-primaryPrimary MuiButton-sizeSmall MuiButton-primarySizeSmall MuiButton-colorPrimary ml-3 mt-2 mb-2 css-5rc0w6">Save</button>
       - unexpected value "disabled"

```

```yaml
- button "Save" [disabled]
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class changepasswordpage {
  4  |   readonly page: Page;
  5  |   readonly currentPasswordField: Locator;
  6  |   readonly newPasswordField: Locator;
  7  |   readonly confirmPasswordField: Locator;
  8  |   readonly saveButton: Locator;
  9  |   readonly guidelines: Locator;
  10 |   readonly passwordChangedMsg: Locator;
  11 |   readonly okButton: Locator;
  12 | 
  13 |   constructor(page: Page) {
  14 |     this.page = page;
  15 | 
  16 |     this.currentPasswordField = page.locator(
  17 |       'xpath=//*[@id="credentialsForm"]/div/div[1]/div[1]/div/div/input'
  18 |     );
  19 | 
  20 |     this.newPasswordField = page.locator(
  21 |       'xpath=//*[@id="credentialsForm"]/div/div[1]/div[2]/div/div/input'
  22 |     );
  23 | 
  24 |     this.confirmPasswordField = page.locator(
  25 |       'xpath=//*[@id="credentialsForm"]/div/div[1]/div[3]/div/div/input'
  26 |     );
  27 | 
  28 |     this.saveButton = page.getByRole('button', { name: /^Save$/ });
  29 | 
  30 | 
  31 |     this.guidelines = page.getByText('Password Guidelines');
  32 | 
  33 |     this.passwordChangedMsg = page.getByText(
  34 |       'password is changed'
  35 |     );
  36 | 
  37 |     this.okButton = page.locator(
  38 |       '//button[contains(.,"ok")]'
  39 |     );
  40 |   }
  41 | 
  42 |   async handlePopup() {
  43 |     try {
  44 |       await this.okButton.waitFor({
  45 |         state: 'visible',
  46 |         timeout: 5000,
  47 |       });
  48 | 
  49 |       await this.okButton.click();
  50 |     } catch {
  51 |       console.log('Popup not displayed');
  52 |     }
  53 |   }
  54 | 
  55 |   async enterPasswords(
  56 |     currentPassword: string,
  57 |     newPassword: string,
  58 |     confirmPassword: string
  59 |   ) {
  60 |     await this.currentPasswordField.fill(currentPassword);
  61 | 
  62 |     await this.newPasswordField.fill(newPassword);
  63 | 
  64 |     await this.confirmPasswordField.fill(confirmPassword);
  65 | 
  66 |     await this.page.keyboard.press('Tab');
  67 |   }
  68 | 
  69 |   async verifyGuidelinesDisplayed() {
  70 |     await expect(this.guidelines).toBeVisible();
  71 |   }
  72 | 
  73 |   async verifySaveEnabled() {
> 74 |     await expect(this.saveButton).toBeEnabled({
     |                                   ^ Error: expect(locator).toBeEnabled() failed
  75 |       timeout: 30000,
  76 |     });
  77 |   }
  78 | 
  79 |   async savePassword() {
  80 |     await this.saveButton.click();
  81 |   }
  82 | 
  83 |   async verifyPasswordChangedMessage() {
  84 |     await expect(this.passwordChangedMsg).toBeVisible({
  85 |       timeout: 30000,
  86 |     });
  87 |   }
  88 | }
```