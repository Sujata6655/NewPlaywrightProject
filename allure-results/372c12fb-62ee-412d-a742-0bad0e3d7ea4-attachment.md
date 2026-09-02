# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Finalflow.spec.ts >> Edit Profile, Mobile Number and Change Password
- Location: tests\Finalflow.spec.ts:7:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('input[name="firstName"]')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 60000ms
  - waiting for locator('input[name="firstName"]')
  - Test ended.

```

```yaml
- main:
  - heading "John Deere logo logo" [level=1]:
    - img "John Deere logo logo"
  - heading "Sign In" [level=2]
  - text: sunil.yadav@yopmail.com
  - alert:
    - alert:
      - text: 
      - paragraph: Unable to sign in
  - text: Password
  - textbox "Password":
    - /placeholder: ""
    - text: Testingqaengineer1211@
  - text: 
  - button "Sign In"
  - link "Forgot Username or Password":
    - /url: https://account.deere.com/actmgmt/forgotpassword?TARGET=https://account.deere.com
  - link "Back to sign in":
    - /url: "#"
- link "Contact Us":
  - /url: "https://account-helppages.deere.com/signin-help "
- text: Copyright © 2026 Deere & Company. All Rights Reserved.
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class ProfilePage {
  4  |   readonly page: Page;
  5  |   readonly firstName: Locator;
  6  |   readonly savePersonalInfoButton: Locator;
  7  |   readonly changePasswordButton: Locator;
  8  |   readonly profileDropdown: Locator;
  9  |   readonly logoutButton: Locator;
  10 | 
  11 |   constructor(page: Page) {
  12 |     this.page = page;
  13 | 
  14 |     this.firstName = page.locator('input[name="firstName"]');
  15 | 
  16 |     this.savePersonalInfoButton = page.locator(
  17 |       'xpath=//*[@id="addressDetailsId"]/div[5]/button[2]'
  18 |     );
  19 | 
  20 |     this.changePasswordButton = page.locator(
  21 |       'xpath=//*[@id="sigInInfoId"]/div/button'
  22 |     );
  23 | 
  24 |     this.profileDropdown = page.locator(
  25 |       'xpath=//*[@id="root"]/div/div/div/div/header/div/div/div/button'
  26 |     );
  27 | 
  28 |     this.logoutButton = page.locator(
  29 |       'xpath=/html/body/div[2]/div[3]/ul/li'
  30 |     );
  31 |   }
  32 | 
  33 |   async verifyProfileLoaded() {
> 34 |     await expect(this.firstName).toBeVisible({
     |                                  ^ Error: expect(locator).toBeVisible() failed
  35 |       timeout: 60000,
  36 |     });
  37 |   }
  38 | 
  39 |   async updateFirstName(firstName: string) {
  40 |     await this.firstName.clear();
  41 |     await this.firstName.fill(firstName);
  42 | 
  43 |     await this.savePersonalInfoButton.click();
  44 |   }
  45 | 
  46 |   async openChangePassword() {
  47 |     await expect(this.changePasswordButton).toBeVisible({
  48 |       timeout: 30000,
  49 |     });
  50 | 
  51 |     await this.changePasswordButton.scrollIntoViewIfNeeded();
  52 |     await this.changePasswordButton.click();
  53 |   }
  54 | 
  55 |   async logout() {
  56 |     await expect(this.profileDropdown).toBeVisible();
  57 | 
  58 |     await this.profileDropdown.click();
  59 | 
  60 |     await expect(this.logoutButton).toBeVisible();
  61 | 
  62 |     await this.logoutButton.click();
  63 |   }
  64 | }
```