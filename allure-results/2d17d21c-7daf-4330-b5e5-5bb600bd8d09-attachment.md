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
  79  | 
  80  |     const text =
  81  |       await mailFrame
  82  |         .locator('body')
  83  |         .textContent();
  84  | 
  85  |        
  86  | 
  87  |     const otpMatch =
  88  |       text?.match(/\b\d{6}\b/);
  89  |     
  90  |    if (!otpMatch) {
> 91  |       throw new Error(
      |             ^ Error: OTP not found
  92  |         'OTP not found'
  93  |       );
  94  |     }
  95  | 
  96  |     return otpMatch[0];
  97  |   }
  98  | 
  99  |   async enterOTP(
  100 |     forgotPasswordPage: Page,
  101 |     otp: string
  102 |   ) {
  103 |     const otpInputs =
  104 |       forgotPasswordPage.locator(
  105 |         '#confirmationCodeForm input'
  106 |       );
  107 | 
  108 |     for (let i = 0; i < 6; i++) {
  109 |       await otpInputs.nth(i).fill(otp[i]);
  110 |     }
  111 | 
  112 |     await forgotPasswordPage
  113 |       .getByRole('button', {
  114 |         name: /next/i,
  115 |       })
  116 |       .click();
  117 |   }
  118 | 
  119 |   async resetPassword(
  120 |     forgotPasswordPage: Page,
  121 |     password: string
  122 |   ) {
  123 |     const newPasswordField =
  124 |       forgotPasswordPage
  125 |         .locator(
  126 |           'input[type="password"]'
  127 |         )
  128 |         .first();
  129 | 
  130 |     const confirmPasswordField =
  131 |       forgotPasswordPage
  132 |         .locator(
  133 |           'input[type="password"]'
  134 |         )
  135 |         .nth(1);
  136 | 
  137 |     await newPasswordField.pressSequentially(
  138 |       password
  139 |     );
  140 | 
  141 |     await confirmPasswordField.pressSequentially(
  142 |       password
  143 |     );
  144 | 
  145 |     await confirmPasswordField.press('Tab');
  146 | 
  147 |     await expect(newPasswordField).toHaveValue(password);
  148 | 
  149 |     await expect(confirmPasswordField).toHaveValue(password);
  150 | 
  151 |     await forgotPasswordPage.getByRole('button', {name: /submit/i,})
  152 |       .click();
  153 |   }
  154 | 
  155 |   async verifyResetSuccess(
  156 |   forgotPasswordPage: Page
  157 |   ) {
  158 |     await expect(
  159 |       forgotPasswordPage.getByText('Password Reset')).toBeVisible({ timeout: 30000 });
  160 | 
  161 |     await expect(
  162 |       forgotPasswordPage.getByText(
  163 |         'You can now Sign In'
  164 |       )
  165 |     ).toBeVisible({ timeout: 20000 });
  166 |   }
  167 | 
  168 |  async clickSignIn(forgotPasswordPage: Page) {
  169 |   const signInLink = forgotPasswordPage.getByRole('link', { name: 'Sign In' });
  170 |   await signInLink.waitFor({ state: 'visible' });
  171 |   await signInLink.click();
  172 | }
  173 |  
  174 |   
  175 | }
  176 | 
  177 | 
  178 |   // async saveStorageState(
  179 |   // //   forgotPasswordPage: Page
  180 |   // // // ) {
  181 |   // // //   await forgotPasswordPage
  182 |   // // //     .context()
  183 |   // // //     .storageState({
  184 |   // // //       path: 'auth/auth.json',
  185 |  
  186 | 
  187 | 
```