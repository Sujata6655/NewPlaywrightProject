# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Finalflow.spec.ts >> Edit Profile, Mobile Number and Change Password
- Location: tests\Finalflow.spec.ts:7:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#input28')

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   readonly page: Page;
  5  |   readonly emailInput: Locator;
  6  |   readonly nextButton: Locator;
  7  |   readonly passwordInput: Locator;
  8  |   readonly signInButton: Locator;
  9  | 
  10 |   constructor(page: Page) {
  11 |     this.page = page;
  12 | 
  13 |     this.emailInput = page.locator('#input28');
  14 |     this.nextButton = page.locator('#form20 input[type="submit"]');
  15 | 
  16 |     this.passwordInput = page.locator('#input54');
  17 |     this.signInButton = page.locator('#form46 input[type="submit"]');
  18 |   }
  19 | 
  20 | //   async navigate() {
  21 | //     await this.page.goto(
  22 | //       'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  23 | //     );
  24 | //   }
  25 | async navigate(url: string) {
  26 |   await this.page.goto(url);
  27 | }
  28 | 
  29 |   async login(email: string, password: string) {
> 30 |     await this.emailInput.fill(email);
     |                           ^ Error: locator.fill: Target page, context or browser has been closed
  31 |     await this.nextButton.click();
  32 | 
  33 |     await this.passwordInput.fill(password);
  34 |     await this.signInButton.click();
  35 |   }
  36 | }
```