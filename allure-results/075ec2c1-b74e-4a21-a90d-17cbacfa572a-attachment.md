# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Forgotpassward.spec.ts >> Forgot password
- Location: tests\Forgotpassward.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#confirmationCodeForm') to be visible

```

# Page snapshot

```yaml
- generic [ref=f2e1]:
  - main [ref=f2e3]:
    - heading [level=1] [ref=f2e5]:
      - img "John Deere logo logo" [ref=f2e6]
    - generic [ref=f2e9]:
      - generic [ref=f2e11]:
        - generic [ref=f2e12]:
          - heading "Sign In" [level=2] [ref=f2e13]
          - alert
          - generic [ref=f2e15]:
            - generic [ref=f2e16]: Username
            - textbox "Username" [ref=f2e19]:
              - /placeholder: ""
        - button "Next" [ref=f2e21]
      - generic [ref=f2e22]:
        - generic [ref=f2e23]:
          - link "Forgot Username or Password" [active] [ref=f2e24] [cursor=pointer]:
            - /url: https://account.deere.com/actmgmt/forgotpassword?TARGET=https://operationscenter.deere.com
          - link "Create New Customer Account" [ref=f2e25] [cursor=pointer]:
            - /url: https://account.deere.com/actmgmt/onboarding/registration?TARGET=https://operationscenter.deere.com
        - generic [ref=f2e26]:
          - text: Your use of this account is governed by our
          - link "*Terms of Use" [ref=f2e27] [cursor=pointer]:
            - /url: https://www.deere.com/en/privacy-and-data/myjohndeere/terms/
          - text: and
          - link "*Privacy Notice" [ref=f2e28] [cursor=pointer]:
            - /url: https://www.johndeere.com/trust
          - text: .
        - generic [ref=f2e29]: "*Last updated : June 1, 2024 to support launch of service into several countries."
  - generic [ref=f2e31]:
    - link "Contact Us" [ref=f2e33] [cursor=pointer]:
      - /url: "https://account-helppages.deere.com/signin-help "
    - generic [ref=f2e34]: Copyright © 2026 Deere & Company. All Rights Reserved.
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test('Forgot password', async ({ page, browser, context }) => {
  4   | 
  5   |   const email = 'testingprod1001@yopmail.com';
  6   |   const newPassword = 'TigerMoon48#B';
  7   | 
  8   |   await page.goto('https://operationscenter.deere.com/');
  9   | 
  10  |   await expect(page).toHaveTitle(/OperationsCenter/i);
  11  | 
  12  |   await page.getByRole('button', { name: 'Sign In' }).click();
  13  | 
  14  |   const [forgotPasswordPage] = await Promise.all([
  15  |     context.waitForEvent('page'),
  16  |     page.getByRole('link', { name: 'Forgot Username or Password' }).click()
  17  |   ]);
  18  | 
  19  |   await forgotPasswordPage.waitForLoadState('domcontentloaded');
  20  | 
  21  |   const usernameInput = forgotPasswordPage.locator('#username-input');
  22  | 
  23  |   await usernameInput.waitFor({ state: 'visible' });
  24  | 
  25  |   await usernameInput.fill(email);
  26  | 
  27  |   await forgotPasswordPage
  28  |     .locator("#phonenumberForm button[type='submit']")
  29  |     .click();
  30  | 
  31  |   // OTP page loaded
  32  |   await forgotPasswordPage
  33  |     .locator('#confirmationCodeForm')
> 34  |     .waitFor({ state: 'visible' });
      |      ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  35  | 
  36  |   // ============================
  37  |   // Open Yopmail
  38  |   // ============================
  39  | 
  40  |   const yopmailPage = await browser.newPage();
  41  | 
  42  |   await yopmailPage.goto('https://yopmail.com/', {
  43  |     waitUntil: 'domcontentloaded'
  44  |   });
  45  | 
  46  |   const emailName = email.split('@')[0];
  47  | 
  48  |   await yopmailPage.locator('#login').fill(emailName);
  49  | 
  50  |   await yopmailPage.keyboard.press('Enter');
  51  | 
  52  |   // Wait mailbox frame
  53  |   await yopmailPage.waitForSelector('#ifmail', {
  54  |     timeout: 30000
  55  |   });
  56  | 
  57  |   const mailFrame = yopmailPage.frameLocator('#ifmail');
  58  | 
  59  |   await mailFrame.locator('body').waitFor({
  60  |     state: 'visible',
  61  |     timeout: 30000
  62  |   });
  63  | 
  64  |   const mailText =
  65  |     await mailFrame.locator('body').textContent();
  66  | 
  67  |   console.log(mailText);
  68  | 
  69  |   // Capture OTP
  70  |   const otpMatch = mailText?.match(/\b\d{6}\b/);
  71  | 
  72  |   if (!otpMatch) {
  73  |     throw new Error('OTP not found in email');
  74  |   }
  75  | 
  76  |   const otp = otpMatch[0];
  77  | 
  78  |   console.log(`Captured OTP: ${otp}`);
  79  | 
  80  |   // ============================
  81  |   // Back to recovery page
  82  |   // ============================
  83  | 
  84  |   await forgotPasswordPage.bringToFront();
  85  | 
  86  |   const otpInputs =
  87  |     forgotPasswordPage.locator(
  88  |       '#confirmationCodeForm input'
  89  |     );
  90  | 
  91  |   for (let i = 0; i < 6; i++) {
  92  |     await otpInputs.nth(i).fill(otp[i]);
  93  |   }
  94  | 
  95  |   await forgotPasswordPage
  96  |     .getByRole('button', { name: /next/i })
  97  |     .click();
  98  | 
  99  |   // ============================
  100 |   // Reset Password
  101 |   // ============================
  102 | 
  103 | //   await forgotPasswordPage
  104 | //     .locator('input[type="password"]')
  105 |     
  106 | //     .first()
  107 | //     .fill(newPassword);
  108 | 
  109 | //   await forgotPasswordPage
  110 | //     .locator('input[type="password"]')
  111 | //     .nth(1)
  112 | //     .fill(newPassword);
  113 | 
  114 | //   await forgotPasswordPage
  115 | //     .getByRole('button', { name: /submit/i })
  116 | //     .click();
  117 | 
  118 | //     await forgotPasswordPage.locator('#main-content button')
  119 | 
  120 | // //   await expect(
  121 | // //     forgotPasswordPage.getByText(
  122 | // //       /password reset|successfully reset/i
  123 | // //     )
  124 | // //   ).toBeVisible();
  125 | 
  126 | // ============================
  127 | // Reset Password
  128 | // ============================
  129 | 
  130 | // Strong password
  131 | 
  132 | const newPasswordField = forgotPasswordPage
  133 |   .locator('input[type="password"]')
  134 |   .first();
```