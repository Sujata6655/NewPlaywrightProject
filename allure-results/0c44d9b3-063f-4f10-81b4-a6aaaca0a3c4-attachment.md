# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: changepassword.spec.ts >> Edit Profile and Change Password
- Location: tests\changepassword.spec.ts:6:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('input[name="firstName"]')
Expected: visible
Timeout: 60000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 60000ms
  - waiting for locator('input[name="firstName"]')

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
    - text: 4e5r6t7y$E%R^T&j
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
  1  | import { Page, expect } from '@playwright/test';
  2  | 
  3  | export class ProfilePage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   firstName = this.page.locator('input[name="firstName"]');
  7  | 
  8  |   savePersonalInfoButton = this.page.locator(
  9  |     'xpath=//*[@id="addressDetailsId"]/div[5]/button[2]'
  10 |   );
  11 | 
  12 |   changePasswordButton = this.page.locator(
  13 |     'xpath[5=//*[@id="sigInInfoId"]/v/button'
  14 |   );
  15 | 
  16 |   profileDropdown = this.page.locator(
  17 |     '//*[@id="root"]/div/div/div/div/header/div/div/div/button'
  18 |   );
  19 | 
  20 |   logoutButton = this.page.locator(
  21 |     'xpath=/html/body/div[2]/div[3]/ul/li'
  22 |   );
  23 | 
  24 |   async verifyProfileLoaded() {
> 25 |     await expect(this.firstName).toBeVisible({
     |                                  ^ Error: expect(locator).toBeVisible() failed
  26 |       timeout: 60000,
  27 |     });
  28 |   }
  29 | 
  30 |   async updateFirstName(firstName: string) {
  31 |     await this.firstName.clear();
  32 |     await this.firstName.fill(firstName);
  33 | 
  34 |     await this.savePersonalInfoButton.click();
  35 |   }
  36 | 
  37 |   async openChangePassword() {
  38 |     await expect(this.changePasswordButton).toBeVisible();
  39 | 
  40 |     await this.changePasswordButton.scrollIntoViewIfNeeded();
  41 |     await this.changePasswordButton.click();
  42 |   }
  43 | 
  44 |   async logout() {
  45 |     await this.profileDropdown.click();
  46 |     await this.logoutButton.click();
  47 |   }
  48 | }
```