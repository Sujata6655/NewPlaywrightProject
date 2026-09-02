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
Error: locator.click: Test timeout of 180000ms exceeded.
Call log:
  - waiting for locator('//*[@id="credentialsForm"]/div/div[1]/div[1]/div/div/input')

```

# Page snapshot

```yaml
- generic [ref=f4e1]:
  - generic [ref=f4e6]:
    - banner [ref=f4e7]:
      - generic [ref=f4e8]:
        - link [ref=f4e9] [cursor=pointer]:
          - /url: /
        - button [ref=f4e13] [cursor=pointer]: Hi, Sunil singh12
    - generic [ref=f4e20]:
      - heading [level=3] [ref=f4e21]: Manage Account
      - separator [ref=f4e22]
      - generic [ref=f4e23]:
        - generic [ref=f4e24]:
          - paragraph [ref=f4e25]: sign-in information
          - paragraph [ref=f4e26]: Username
          - paragraph [ref=f4e27]: sunil.yadav@yopmail.com
          - paragraph [ref=f4e28]: Want to change your password?
          - button [ref=f4e29] [cursor=pointer]: Change Password
        - separator [ref=f4e30]
      - generic [ref=f4e31]:
        - paragraph [ref=f4e33]: Personal Information
        - generic [ref=f4e36]:
          - generic [ref=f4e37]:
            - generic [ref=f4e38]:
              - paragraph [ref=f4e39]: First Name *
              - textbox [ref=f4e42]: Sunil singh12
            - generic [ref=f4e43]:
              - paragraph [ref=f4e44]: Last Name *
              - textbox [ref=f4e47]: yadav
          - generic [ref=f4e48]:
            - generic [ref=f4e50]:
              - paragraph [ref=f4e51]: Country *
              - combobox [ref=f4e52]
            - generic [ref=f4e54]:
              - paragraph [ref=f4e55]: Address line 1 *
              - textbox [ref=f4e58]: magarpatta
            - generic [ref=f4e60]:
              - paragraph [ref=f4e61]: City *
              - textbox [ref=f4e64]: PUNE
            - generic [ref=f4e66]:
              - paragraph [ref=f4e67]: Postal Code *
              - textbox [ref=f4e70]: "411027"
            - generic [ref=f4e71]:
              - button [disabled] [ref=f4e72]: Cancel
              - button [disabled] [ref=f4e73]: Save
        - separator [ref=f4e74]
        - alert [ref=f4e75]:
          - generic [ref=f4e79]: We highly recommend you verify your phone number. Once verified, you can recover your User Account using SMS text as identity verification. You will also have the added benefit of receiving SMS text communications from John Deere.Verify your phone number.
        - generic [ref=f4e85]:
          - generic [ref=f4e86]:
            - paragraph [ref=f4e87]: Phone Number
            - img [ref=f4e88] [cursor=pointer]
          - generic [ref=f4e92]:
            - textbox [ref=f4e93]:
              - /placeholder: 1 (702) 123-4567
              - text: "+919876543229"
            - button [ref=f4e95]
        - separator [ref=f4e98]
      - generic [ref=f4e103]:
        - paragraph [ref=f4e104]: Email Address *
        - textbox [disabled] [ref=f4e108]: sunil.yadav@yopmail.com
        - generic [ref=f4e111]: Edit or change of email address is not allowed if Username is an email address.
      - separator [ref=f4e112]
      - button [ref=f4e113] [cursor=pointer]: Back to previous page
    - contentinfo [ref=f4e115]:
      - navigation [ref=f4e116]:
        - list [ref=f4e117]:
          - listitem [ref=f4e118]:
            - link [ref=f4e119] [cursor=pointer]:
              - /url: https://www.deere.com/en/privacy-and-data/
              - text: Privacy and Data
          - listitem [ref=f4e120]:
            - link [ref=f4e121] [cursor=pointer]:
              - /url: https://www.deere.com/en/privacy-and-data/myjohndeere/terms/
              - text: Terms of Use
          - listitem [ref=f4e122]:
            - link [ref=f4e123] [cursor=pointer]:
              - /url: https://account-helppages.deere.com/contact-us
              - text: Contact Us
      - generic [ref=f4e124]: Copyright © 2026 Deere & Company. All Rights Reserved.
  - dialog [ref=f4e128]:
    - heading "Verify Phone Number close" [level=2] [ref=f4e129]:
      - generic [ref=f4e130]: Verify Phone Number
      - button [ref=f4e131] [cursor=pointer]:
        - img "close" [ref=f4e132]
    - generic [ref=f4e134]:
      - paragraph [ref=f4e135]: Once verified, you can recover your User Account using SMS text as identity verification. You will also have the added benefit of receiving SMS text communications from John Deere.
      - paragraph [ref=f4e136]: Confirm the number you want to have verified for this account. Verification requires a valid phone number capable of receiving SMS text notifications.
      - generic [ref=f4e137]:
        - text: Phone Number
        - generic [ref=f4e138]: "*"
      - generic [ref=f4e139]:
        - textbox "1 (702) 123-4567" [ref=f4e140]: "+91919876543229"
        - 'button "India: + 91" [ref=f4e142]'
      - generic [ref=f4e145]: Standard carrier rates apply.
    - button "Continue" [ref=f4e149] [cursor=pointer]
```

# Test source

```ts
  80  | 
  81  |     await this.phoneTextbox.waitFor({
  82  |       state: 'visible',
  83  |     });
  84  | 
  85  |     await this.phoneTextbox.click();
  86  | 
  87  |     const currentValue =
  88  |       await this.phoneTextbox.inputValue();
  89  | 
  90  |     for (let i = 0; i < currentValue.length + 5; i++) {
  91  |       await this.page.keyboard.press('Backspace');
  92  |     }
  93  | 
  94  |     await this.phoneTextbox.type(phoneNumber);
  95  | 
  96  |     await this.page.keyboard.press('Tab');
  97  | 
  98  |     await expect(this.savePhoneButton).toBeVisible({
  99  |       timeout: 30000,
  100 |     });
  101 | 
  102 |     await this.savePhoneButton.click();
  103 | 
  104 |     await expect(
  105 |       this.page.getByText(
  106 |         'Your personal information is saved.'
  107 |       )
  108 |     ).toBeVisible({
  109 |       timeout: 15000,
  110 |     });
  111 | 
  112 |     console.log('Mobile Number Updated Successfully');
  113 |   }
  114 | 
  115 |   // ==========================================
  116 |   // CLOSE VERIFY PHONE POPUP
  117 |   // ==========================================
  118 | 
  119 |   async closeVerifyPhonePopup() {
  120 |     try {
  121 |       await this.verifyPhoneCloseButton.waitFor({
  122 |         state: 'visible',
  123 |         timeout: 10000,
  124 |       });
  125 | 
  126 |       await this.verifyPhoneCloseButton.click();
  127 | 
  128 |       console.log(
  129 |         'Verify Phone Number Popup Closed'
  130 |       );
  131 | 
  132 |       await this.page.waitForTimeout(2000);
  133 |     } catch {
  134 |       console.log(
  135 |         'Verify Phone Number Popup Not Displayed'
  136 |       );
  137 |     }
  138 |   }
  139 | 
  140 |   // ==========================================
  141 |   // CHANGE PASSWORD
  142 |   // ==========================================
  143 | 
  144 |   async openChangePassword() {
  145 |     await this.closeVerifyPhonePopup();
  146 | 
  147 |     await this.changePasswordButton.scrollIntoViewIfNeeded();
  148 | 
  149 |     await expect(
  150 |       this.changePasswordButton
  151 |     ).toBeVisible({
  152 |       timeout: 30000,
  153 |     });
  154 | 
  155 |     await this.changePasswordButton.click({
  156 |       force: true,
  157 |     });
  158 |   }
  159 | 
  160 |   async handlePopup() {
  161 |     try {
  162 |       await this.okButton.waitFor({
  163 |         state: 'visible',
  164 |         timeout: 5000,
  165 |       });
  166 | 
  167 |       await this.okButton.click();
  168 | 
  169 |       console.log('Popup Handled');
  170 |     } catch {
  171 |       console.log('Popup Not Displayed');
  172 |     }
  173 |   }
  174 | 
  175 |   async enterPasswords(
  176 |     currentPassword: string,
  177 |     newPassword: string,
  178 |     confirmPassword: string
  179 |   ) {
> 180 |     await this.currentPasswordField.click();
      |                                     ^ Error: locator.click: Test timeout of 180000ms exceeded.
  181 |     await this.page.keyboard.press('Control+A');
  182 |     await this.page.keyboard.press('Delete');
  183 |     await this.page.keyboard.type(currentPassword);
  184 | 
  185 |     await this.newPasswordField.click();
  186 |     await this.page.keyboard.press('Control+A');
  187 |     await this.page.keyboard.press('Delete');
  188 |     await this.page.keyboard.type(newPassword);
  189 | 
  190 |     await this.confirmPasswordField.click();
  191 |     await this.page.keyboard.press('Control+A');
  192 |     await this.page.keyboard.press('Delete');
  193 |     await this.page.keyboard.type(confirmPassword);
  194 | 
  195 |     await this.page.keyboard.press('Tab');
  196 |     await this.page.mouse.click(1200, 200);
  197 | 
  198 |     await this.page.waitForTimeout(3000);
  199 |   }
  200 | 
  201 |   async verifyGuidelinesDisplayed() {
  202 |     await expect(this.guidelines).toBeVisible({
  203 |       timeout: 30000,
  204 |     });
  205 |   }
  206 | 
  207 |   async savePassword() {
  208 |     await expect(
  209 |       this.savePasswordButton
  210 |     ).toBeEnabled({
  211 |       timeout: 60000,
  212 |     });
  213 | 
  214 |     await this.savePasswordButton.click();
  215 |   }
  216 | 
  217 |   async verifyPasswordChangedMessage() {
  218 |     await expect(
  219 |       this.passwordChangedMsg
  220 |     ).toBeVisible({
  221 |       timeout: 30000,
  222 |     });
  223 | 
  224 |     console.log(
  225 |       'Password Changed Successfully'
  226 |     );
  227 |   }
  228 | }
  229 | 
```