# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Forgot-password.spec.ts >> Forgot Password Flow
- Location: tests\Forgot-password.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.pressSequentially: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[type="password"]').nth(1)
    - locator resolved to <input value="" id=":rj:" type="password" autocomplete="on" aria-invalid="false" name="confirmCredential" class="MuiInputBase-input MuiInput-input MuiInputBase-inputSizeSmall css-1xvtbz5"/>
  - elementHandle.type("TigerMoon48#B")

```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - banner [ref=f2e4]:
    - generic [ref=f2e5]:
      - link [ref=f2e7] [cursor=pointer]:
        - /url: .
      - navigation [ref=f2e8]:
        - generic [ref=f2e10]:
          - link " Home" [ref=f2e11] [cursor=pointer]:
            - /url: .
            - generic [ref=f2e12]: 
            - text: Home
          - link " Donate" [ref=f2e13] [cursor=pointer]:
            - /url: donate
            - generic [ref=f2e14]: 
            - text: Donate
          - link " Domains" [ref=f2e15] [cursor=pointer]:
            - /url: add-domain
            - generic [ref=f2e16]: 
            - text: Domains
          - link " Random" [ref=f2e17] [cursor=pointer]:
            - /url: email-generator
            - generic [ref=f2e18]: 
            - text: Random
        - generic [ref=f2e24]:
          - generic [ref=f2e25]:
            - img "Temporary Email" [ref=f2e26]
            - text: English
          - generic [ref=f2e27]: 
  - main [ref=f2e32]:
    - generic [ref=f2e34]:
      - generic [ref=f2e35]: testingprod1001@yopmail.com
      - generic [ref=f2e36]:
        - generic [ref=f2e37]:
          - text: Alias
          - button "" [ref=f2e38] [cursor=pointer]
          - text: ":"
        - generic [ref=f2e40]:
          - emphasis [ref=f2e41]: alt.sq-clsr1xy
          - text: "@yopmail.com"
        - button "" [ref=f2e43] [cursor=pointer]
    - generic [ref=f2e45]:
      - generic [ref=f2e47]:
        - generic [ref=f2e48]:
          - button "" [ref=f2e50] [cursor=pointer]
          - button "" [disabled] [ref=f2e53]
          - button "" [ref=f2e57] [cursor=pointer]
          - generic [ref=f2e59]:
            - button "" [disabled] [ref=f2e61]
            - generic [ref=f2e63]: page 1
            - button "" [ref=f2e65] [cursor=pointer]
          - generic [ref=f2e67]: 165 mails
          - button "" [ref=f2e70] [cursor=pointer]
        - iframe [ref=f2e73]:
          - generic [ref=f3e2]:
            - generic [ref=f3e3]: today
            - generic [ref=f3e4]:
              - checkbox [ref=f3e6]
              - button "13:37 John Deere Reset Your Password" [ref=f3e7] [cursor=pointer]:
                - generic [ref=f3e8]:
                  - generic [ref=f3e9]: 13:37
                  - generic [ref=f3e10]: John Deere
                - generic [ref=f3e11]: Reset Your Password
            - generic [ref=f3e12]:
              - checkbox [ref=f3e14]
              - button "13:06 John Deere Reset Your Password" [ref=f3e15] [cursor=pointer]:
                - generic [ref=f3e16]:
                  - generic [ref=f3e17]: 13:06
                  - generic [ref=f3e18]: John Deere
                - generic [ref=f3e19]: Reset Your Password
            - generic [ref=f3e20]:
              - checkbox [ref=f3e22]
              - button "12:48 John Deere Reset Your Password" [ref=f3e23] [cursor=pointer]:
                - generic [ref=f3e24]:
                  - generic [ref=f3e25]: 12:48
                  - generic [ref=f3e26]: John Deere
                - generic [ref=f3e27]: Reset Your Password
            - generic [ref=f3e28]:
              - checkbox [ref=f3e30]
              - button "12:37 John Deere Reset Your Password" [ref=f3e31] [cursor=pointer]:
                - generic [ref=f3e32]:
                  - generic [ref=f3e33]: 12:37
                  - generic [ref=f3e34]: John Deere
                - generic [ref=f3e35]: Reset Your Password
            - generic [ref=f3e36]:
              - checkbox [ref=f3e38]
              - button "12:30 John Deere Password Change Successful" [ref=f3e39] [cursor=pointer]:
                - generic [ref=f3e40]:
                  - generic [ref=f3e41]: 12:30
                  - generic [ref=f3e42]: John Deere
                - generic [ref=f3e43]: Password Change Successful
            - generic [ref=f3e44]:
              - checkbox [ref=f3e46]
              - button "12:29 John Deere Reset Your Password" [ref=f3e47] [cursor=pointer]:
                - generic [ref=f3e48]:
                  - generic [ref=f3e49]: 12:29
                  - generic [ref=f3e50]: John Deere
                - generic [ref=f3e51]: Reset Your Password
            - generic [ref=f3e52]:
              - checkbox [ref=f3e54]
              - button "12:00 John Deere Password Change Successful" [ref=f3e55] [cursor=pointer]:
                - generic [ref=f3e56]:
                  - generic [ref=f3e57]: 12:00
                  - generic [ref=f3e58]: John Deere
                - generic [ref=f3e59]: Password Change Successful
            - generic [ref=f3e60]:
              - checkbox [ref=f3e62]
              - button "12:00 John Deere Reset Your Password" [ref=f3e63] [cursor=pointer]:
                - generic [ref=f3e64]:
                  - generic [ref=f3e65]: 12:00
                  - generic [ref=f3e66]: John Deere
                - generic [ref=f3e67]: Reset Your Password
            - generic [ref=f3e68]:
              - checkbox [ref=f3e70]
              - button "11:59 John Deere Reset Your Password" [ref=f3e71] [cursor=pointer]:
                - generic [ref=f3e72]:
                  - generic [ref=f3e73]: 11:59
                  - generic [ref=f3e74]: John Deere
                - generic [ref=f3e75]: Reset Your Password
            - generic [ref=f3e76]:
              - checkbox [ref=f3e78]
              - button "11:58 John Deere Password Change Successful" [ref=f3e79] [cursor=pointer]:
                - generic [ref=f3e80]:
                  - generic [ref=f3e81]: 11:58
                  - generic [ref=f3e82]: John Deere
                - generic [ref=f3e83]: Password Change Successful
            - generic [ref=f3e84]:
              - checkbox [ref=f3e86]
              - button "11:57 John Deere Reset Your Password" [ref=f3e87] [cursor=pointer]:
                - generic [ref=f3e88]:
                  - generic [ref=f3e89]: 11:57
                  - generic [ref=f3e90]: John Deere
                - generic [ref=f3e91]: Reset Your Password
            - generic [ref=f3e92]:
              - checkbox [ref=f3e94]
              - button "11:57 John Deere Reset Your Password" [ref=f3e95] [cursor=pointer]:
                - generic [ref=f3e96]:
                  - generic [ref=f3e97]: 11:57
                  - generic [ref=f3e98]: John Deere
                - generic [ref=f3e99]: Reset Your Password
            - generic [ref=f3e100]:
              - checkbox [ref=f3e102]
              - button "11:55 John Deere Password Change Successful" [ref=f3e103] [cursor=pointer]:
                - generic [ref=f3e104]:
                  - generic [ref=f3e105]: 11:55
                  - generic [ref=f3e106]: John Deere
                - generic [ref=f3e107]: Password Change Successful
            - generic [ref=f3e108]:
              - checkbox [ref=f3e110]
              - button "11:54 John Deere Reset Your Password" [ref=f3e111] [cursor=pointer]:
                - generic [ref=f3e112]:
                  - generic [ref=f3e113]: 11:54
                  - generic [ref=f3e114]: John Deere
                - generic [ref=f3e115]: Reset Your Password
            - generic [ref=f3e116]:
              - checkbox [ref=f3e118]
              - button "11:54 John Deere Reset Your Password" [ref=f3e119] [cursor=pointer]:
                - generic [ref=f3e120]:
                  - generic [ref=f3e121]: 11:54
                  - generic [ref=f3e122]: John Deere
                - generic [ref=f3e123]: Reset Your Password
      - iframe [ref=f2e79]:
        - generic [ref=f5e1]:
          - banner [ref=f5e2]:
            - generic [ref=f5e3]:
              - generic [ref=f5e4]:
                - button " Deliverability" [ref=f5e5] [cursor=pointer]:
                  - generic [ref=f5e6]: 
                  - generic [ref=f5e7]: Deliverability
                - generic [ref=f5e8]:
                  - button " Reply" [ref=f5e9] [cursor=pointer]:
                    - generic [ref=f5e10]: 
                    - generic [ref=f5e11]: Reply
                  - button " Forward" [ref=f5e12] [cursor=pointer]:
                    - generic [ref=f5e13]: 
                    - generic [ref=f5e14]: Forward
              - button " Print" [ref=f5e15] [cursor=pointer]:
                - generic [ref=f5e16]: 
                - generic [ref=f5e17]: Print
              - button " Delete" [ref=f5e18] [cursor=pointer]:
                - generic [ref=f5e19]: 
                - generic [ref=f5e20]: Delete
              - button "" [ref=f5e21] [cursor=pointer]
            - generic [ref=f5e23]:
              - generic [ref=f5e24]: Reset Your Password
              - generic [ref=f5e25]:
                - generic [ref=f5e26]: 
                - generic [ref=f5e27]: John Deere <confirmation@johndeere.com>
              - generic [ref=f5e28]:
                - generic [ref=f5e29]: 
                - generic [ref=f5e30]: Monday, August 24, 2026 1:37:14 PM
          - main [ref=f5e31]:
            - generic [ref=f5e34]:
              - table [ref=f5e35]:
                - rowgroup [ref=f5e36]:
                  - row [ref=f5e37]:
                    - cell [ref=f5e38]:
                      - table [ref=f5e39]:
                        - rowgroup [ref=f5e40]:
                          - row [ref=f5e41]:
                            - cell [ref=f5e42]:
                              - link "John Deere John Deere":
                                - /url: https://www.deere.com
                                - img "John Deere" [ref=f5e43] [cursor=pointer]
                                - generic:
                                  - link "John Deere":
                                    - /url: https://www.deere.com
                  - row [ref=f5e44]:
                    - cell [ref=f5e45]
                  - row [ref=f5e46]:
                    - cell [ref=f5e47]:
                      - table [ref=f5e48]:
                        - rowgroup [ref=f5e49]:
                          - row [ref=f5e50]:
                            - cell [ref=f5e51]:
                              - generic [ref=f5e52]:
                                - paragraph [ref=f5e53]:
                                  - strong [ref=f5e54]: 670242 is your John Deere verification code
                                - paragraph [ref=f5e55]: Use the verification code to reset your password.
                                - paragraph [ref=f5e56]:
                                  - text: If you need assistance, do not reply to this email.
                                  - link "Contact Us" [ref=f5e57] [cursor=pointer]:
                                    - /url: https://account-helppages.deere.com/contact-us
                                - paragraph [ref=f5e58]: If you did not trigger forgot password flow for your John Deere account, please ignore this email.
              - table [ref=f5e59]:
                - rowgroup [ref=f5e60]:
                  - row [ref=f5e61]:
                    - cell [ref=f5e62]:
                      - strong [ref=f5e63]: Copyright © 2026 Deere & Company. All Rights Reserved
  - contentinfo [ref=f2e82]
```

# Test source

```ts
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
  88  |       throw new Error(
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
> 138 |     await confirmPasswordField.pressSequentially(
      |                                ^ Error: locator.pressSequentially: Test timeout of 30000ms exceeded.
  139 |       password
  140 |     );
  141 | 
  142 |     await confirmPasswordField.press('Tab');
  143 | 
  144 |     await expect(newPasswordField).toHaveValue(password);
  145 | 
  146 |     await expect(confirmPasswordField).toHaveValue(password);
  147 | 
  148 |     await forgotPasswordPage.getByRole('button', {name: /submit/i,})
  149 |       .click();
  150 |   }
  151 | 
  152 |   async verifyResetSuccess(
  153 |   forgotPasswordPage: Page
  154 |   ) {
  155 |     await expect(
  156 |       forgotPasswordPage.getByText('Password Reset')).toBeVisible({ timeout: 30000 });
  157 | 
  158 |     await expect(
  159 |       forgotPasswordPage.getByText(
  160 |         'You can now Sign In'
  161 |       )
  162 |     ).toBeVisible({ timeout: 30000 });
  163 |   }
  164 | 
  165 |  async clickSignIn(forgotPasswordPage: Page) {
  166 |   const signInLink = forgotPasswordPage.getByRole('link', { name: 'Sign In' });
  167 |   await signInLink.waitFor({ state: 'visible' });
  168 |   await signInLink.click();
  169 | }
  170 |  
  171 |   
  172 | }
  173 | 
  174 | 
  175 |   // async saveStorageState(
  176 |   // //   forgotPasswordPage: Page
  177 |   // // // ) {
  178 |   // // //   await forgotPasswordPage
  179 |   // // //     .context()
  180 |   // // //     .storageState({
  181 |   // // //       path: 'auth/auth.json',
  182 |  
  183 | 
  184 | 
```