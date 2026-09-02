# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Finalflow.spec.ts >> Edit Profile, Mobile Number and Change Password
- Location: tests\Finalflow.spec.ts:7:5

# Error details

```
Test timeout of 180000ms exceeded.
```

```
Error: locator.fill: Test timeout of 180000ms exceeded.
Call log:
  - waiting for locator('#input28')

```

# Page snapshot

```yaml
- main [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - img "John Deere" [ref=e5]
      - heading "Operations Center" [level=2] [ref=e7]
    - generic [ref=e8]:
      - generic [ref=e9]:
        - heading [level=1] [ref=e10]:
          - text: See what’s happening
          - strong [ref=e11]: now
          - text: and make better decisions with
          - strong [ref=e12]: all
          - text: your data.
        - generic [ref=e13]:
          - link [ref=e14] [cursor=pointer]:
            - /url: /api/login
            - button "Sign In" [ref=e15]
          - link [ref=e16] [cursor=pointer]:
            - /url: https://account.deere.com/actmgmt/onboarding?TARGET=https://map.deere.com
            - button "Create Account" [ref=e17]
        - generic [ref=e19]:
          - generic [ref=e20]:
            - generic [ref=e21]:
              - img "App icon for Operations Center Mobile app" [ref=e22]
              - img "QR Code for Operations Center Mobile app" [ref=e23]
            - heading "Operations Center Mobile" [level=3] [ref=e24]
            - paragraph [ref=e25]: View machine and work data from anywhere.
          - generic [ref=e26]:
            - generic [ref=e27]:
              - img "App icon for Equipment Mobile app" [ref=e28]
              - img "QR Code for Equipment Mobile app" [ref=e29]
            - heading "Equipment Mobile" [level=3] [ref=e30]
            - paragraph [ref=e31]: Set up, operate, and maintain your equipment.
      - img "Landing Page Image" [ref=e33]
    - generic [ref=e34]:
      - generic [ref=e35]:
        - link "Privacy and Data" [ref=e37] [cursor=pointer]:
          - /url: https://www.deere.com/en/privacy-and-data/
        - link "Cookie Statement" [ref=e39] [cursor=pointer]:
          - /url: https://www.deere.com/en/privacy-and-data/cookie-statement/
        - link "Terms of Use" [ref=e41] [cursor=pointer]:
          - /url: https://www.deere.com/en/privacy-and-data/terms/
        - link "Accessibility" [ref=e43] [cursor=pointer]:
          - /url: https://www.deere.com/en/privacy-and-data/accessibility/
        - link "Contact Us" [ref=e45] [cursor=pointer]:
          - /url: https://www.deere.com/en/our-company/contact-us/
      - generic [ref=e46]: Copyright © 2026 Deere & Company. All Rights Reserved.
      - generic [ref=e47]:
        - link [ref=e48] [cursor=pointer]:
          - /url: http://www.facebook.com/JohnDeereUSCA
        - link [ref=e49] [cursor=pointer]:
          - /url: https://twitter.com/JohnDeere
        - link [ref=e50] [cursor=pointer]:
          - /url: https://www.youtube.com/user/JohnDeere
        - link [ref=e51] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/john-deere
        - link [ref=e52] [cursor=pointer]:
          - /url: http://instagram.com/johndeere
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
  20 |   async navigate() {
  21 |     await this.page.goto(
  22 |       'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  23 |     );
  24 |   }
  25 | 
  26 |   async login(email: string, password: string) {
> 27 |     await this.emailInput.fill(email);
     |                           ^ Error: locator.fill: Test timeout of 180000ms exceeded.
  28 |     await this.nextButton.click();
  29 | 
  30 |     await this.passwordInput.fill(password);
  31 |     await this.signInButton.click();
  32 |   }
  33 | }
```