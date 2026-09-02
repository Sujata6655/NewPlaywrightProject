# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Forgot-password.spec.ts >> Forgot Password Flow
- Location: tests\Forgot-password.spec.ts:5:5

# Error details

```
Error: OTP not found
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
  1   | import { Page, Browser, expect } from '@playwright/test';
  2   | 
  3   | export class ForgotPasswordPage {
  4   |   constructor(
  5   |     private page: Page,
  6   |     private browser: Browser
  7   |   ) {}
  8   | 
  9   |   async launchApplication(url: string) {
  10  |     await this.page.goto(url);
  11  |     await expect(this.page).toHaveTitle(/OperationsCenter/i);
  12  |   }
  13  | 
  14  |   async openForgotPassword(context: any) {
  15  |     await this.page
  16  |       .getByRole('button', { name: 'Sign In' })
  17  |       .click();
  18  | 
  19  |     const [forgotPasswordPage] = await Promise.all([
  20  |       context.waitForEvent('page'),
  21  |       this.page
  22  |         .getByRole('link', {
  23  |           name: 'Forgot Username or Password',
  24  |         })
  25  |         .click(),
  26  |     ]);
  27  | 
  28  |     await forgotPasswordPage.waitForLoadState(
  29  |       'domcontentloaded'
  30  |     );
  31  | 
  32  |     return forgotPasswordPage;
  33  |   }
  34  | 
  35  |   async enterEmail(
  36  |     forgotPasswordPage: Page,
  37  |     email: string
  38  |   ) {
  39  |     await forgotPasswordPage
  40  |       .locator('#username-input')
  41  |       .fill(email);
  42  | 
  43  |     await forgotPasswordPage
  44  |       .locator(
  45  |         "#phonenumberForm button[type='submit']"
  46  |       )
  47  |       .click();
  48  |   }
  49  | 
  50  |   async getOTP(email: string) {
  51  |     const yopmailPage =
  52  |       await this.browser.newPage();
  53  | 
  54  |     await yopmailPage.goto(
  55  |       'https://yopmail.com/',
  56  |       {
  57  |         waitUntil: 'domcontentloaded',
  58  |       }
  59  |     );
  60  | 
  61  |     const emailName =
  62  |       email.split('@')[0];
  63  | 
  64  |     await yopmailPage
  65  |       .locator('#login')
  66  |       .fill(emailName);
  67  | 
  68  |     await yopmailPage.keyboard.press(
  69  |       'Enter'
  70  |     );
  71  | 
  72  |     await yopmailPage.waitForSelector(
  73  |       '#ifmail'
  74  |     );
  75  | 
  76  |     const mailFrame =
  77  |       yopmailPage.frameLocator('#ifmail');
  78  | 
  79  |     const text =
  80  |       await mailFrame
  81  |         .locator('body')
  82  |         .textContent();
  83  | 
  84  |     const otpMatch =
  85  |       text?.match(/\b\d{6}\b/);
  86  | 
  87  |     if (!otpMatch) {
> 88  |       throw new Error(
      |             ^ Error: OTP not found
  89  |         'OTP not found'
  90  |       );
  91  |     }
  92  | 
  93  |     return otpMatch[0];
  94  |   }
  95  | 
  96  |   async enterOTP(
  97  |     forgotPasswordPage: Page,
  98  |     otp: string
  99  |   ) {
  100 |     const otpInputs =
  101 |       forgotPasswordPage.locator(
  102 |         '#confirmationCodeForm input'
  103 |       );
  104 | 
  105 |     for (let i = 0; i < 6; i++) {
  106 |       await otpInputs.nth(i).fill(otp[i]);
  107 |     }
  108 | 
  109 |     await forgotPasswordPage
  110 |       .getByRole('button', {
  111 |         name: /next/i,
  112 |       })
  113 |       .click();
  114 |   }
  115 | 
  116 |   async resetPassword(
  117 |     forgotPasswordPage: Page,
  118 |     password: string
  119 |   ) {
  120 |     const newPasswordField =
  121 |       forgotPasswordPage
  122 |         .locator(
  123 |           'input[type="password"]'
  124 |         )
  125 |         .first();
  126 | 
  127 |     const confirmPasswordField =
  128 |       forgotPasswordPage
  129 |         .locator(
  130 |           'input[type="password"]'
  131 |         )
  132 |         .nth(1);
  133 | 
  134 |     await newPasswordField.pressSequentially(
  135 |       password
  136 |     );
  137 | 
  138 |     await confirmPasswordField.pressSequentially(
  139 |       password
  140 |     );
  141 | 
  142 |     await confirmPasswordField.press(
  143 |       'Tab'
  144 |     );
  145 | 
  146 |     await expect(
  147 |       newPasswordField
  148 |     ).toHaveValue(password);
  149 | 
  150 |     await expect(
  151 |       confirmPasswordField
  152 |     ).toHaveValue(password);
  153 | 
  154 |     await forgotPasswordPage
  155 |       .getByRole('button', {
  156 |         name: /submit/i,
  157 |       })
  158 |       .click();
  159 |   }
  160 | 
  161 |   async verifyResetSuccess(
  162 |     forgotPasswordPage: Page
  163 |   ) {
  164 |     await expect(
  165 |       forgotPasswordPage.getByText('Password Reset')).toBeVisible({ timeout: 30000 });
  166 | 
  167 |     await expect(
  168 |       forgotPasswordPage.getByText(
  169 |         'You can now Sign In'
  170 |       )
  171 |     ).toBeVisible({ timeout: 30000 });
  172 |   }
  173 | 
  174 | //  async clickSignIn(forgotPasswordPage: Page) {
  175 | //   const signInLink = forgotPasswordPage.getByRole('link', { name: 'Sign In' });
  176 | //   await signInLink.waitFor({ state: 'visible' });
  177 | //   await signInLink.click();
  178 | // }
  179 |  
  180 |   
  181 | }
  182 | 
  183 | 
  184 |   // async saveStorageState(
  185 |   // //   forgotPasswordPage: Page
  186 |   // // // ) {
  187 |   // // //   await forgotPasswordPage
  188 |   // // //     .context()
```