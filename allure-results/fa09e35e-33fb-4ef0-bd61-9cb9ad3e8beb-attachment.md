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
  - waiting for locator('input[type="password"]').first() to be visible

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
  126 | const newPasswordField =
  127 | 
  128 | forgotPasswordPage.locator('input[type="password"]').first();
  129 | 
  130 | const confirmPasswordField =
  131 | 
  132 | forgotPasswordPage.locator('input[type="password"]').nth(1);
  133 | 
  134 | // Fill New Password
  135 | 
> 136 | await newPasswordField.waitFor({ state: 'visible' });
      |                        ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  137 | 
  138 | await newPasswordField.fill(newPassword);
  139 | 
  140 | // Verify New Password entered
  141 | 
  142 | await expect(newPasswordField).toHaveValue(newPassword);
  143 | 
  144 | 
  145 | // Fill Confirm Password
  146 | 
  147 | await confirmPasswordField.waitFor({ state: 'visible' });
  148 | 
  149 | await confirmPasswordField.fill(newPassword);
  150 | 
  151 | 
  152 | 
  153 | // Verify Confirm Password entered
  154 | 
  155 | // Fill Confirm Password
  156 | await confirmPasswordField.waitFor({ state: 'visible' });
  157 | await confirmPasswordField.fill(newPassword);
  158 | await confirmPasswordField.press('Tab');
  159 | await forgotPasswordPage.waitForTimeout(1000);
  160 |  
  161 | // Verify Confirm Password entered
  162 | await expect(confirmPasswordField).toHaveValue(newPassword);
  163 |  await forgotPasswordPage.screenshot({ path: 'debug-confirm-password.png', fullPage: true });
  164 | 
  165 | // await expect(confirmPasswordField).toHaveValue(newPassword);
  166 | 
  167 | // // Verify both passwords match
  168 | 
  169 | // const enteredPassword = await newPasswordField.inputValue();
  170 | 
  171 | // const enteredConfirmPassword = await confirmPasswordField.inputValue();
  172 | 
  173 | // expect(enteredPassword).toBe(enteredConfirmPassword);
  174 | 
  175 | 
  176 | 
  177 | // // Verify "Confirm password is required" message is gone
  178 | 
  179 | // await expect(
  180 | 
  181 | // forgotPasswordPage.getByText('Confirm password is required')
  182 | 
  183 | // ).not.toBeVisible();
  184 | 
  185 | 
  186 | 
  187 | // ===============================
  188 | 
  189 | // Password Guideline Validation
  190 | 
  191 | // ===============================
  192 | 
  193 | 
  194 | // Length 10-30 characters
  195 | 
  196 | expect(newPassword.length).toBeGreaterThanOrEqual(10);
  197 | 
  198 | expect(newPassword.length).toBeLessThanOrEqual(30);
  199 | 
  200 | 
  201 | 
  202 | // One uppercase letter
  203 | 
  204 | expect(/[A-Z]/.test(newPassword)).toBeTruthy();
  205 | 
  206 | 
  207 | 
  208 | // One lowercase letter
  209 | 
  210 | expect(/[a-z]/.test(newPassword)).toBeTruthy();
  211 | expect(/[0-9]/.test(newPassword)).toBeTruthy();
  212 | 
  213 | 
  214 | 
  215 | console.log('Password meets all guidelines');
  216 | 
  217 | const errorMsg = forgotPasswordPage.getByText('Password guidelines not matched');
  218 | await expect(errorMsg).toBeHidden({ timeout: 5000 });
  219 |  
  220 | 
  221 | 
  222 | // Submit button should be enabled
  223 | 
  224 | const submitButton1 = forgotPasswordPage.getByRole('button', {
  225 | 
  226 | name: 'Submit'
  227 | 
  228 | });
  229 | 
  230 | await expect(submitButton1).toBeEnabled();
  231 | await submitButton1.click();
  232 | });
```