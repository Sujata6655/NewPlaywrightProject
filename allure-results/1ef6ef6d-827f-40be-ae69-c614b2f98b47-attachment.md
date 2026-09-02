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

Locator: getByText('Your personal information is saved.')
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByText('Your personal information is saved.')

```

```yaml
- dialog "Verify Phone Number close":
  - heading "Verify Phone Number close" [level=2]:
    - text: Verify Phone Number
    - button "close":
      - img "close"
  - paragraph: Once verified, you can recover your User Account using SMS text as identity verification. You will also have the added benefit of receiving SMS text communications from John Deere.
  - paragraph: Confirm the number you want to have verified for this account. Verification requires a valid phone number capable of receiving SMS text notifications.
  - text: Phone Number *
  - textbox "1 (702) 123-4567": "+91919876543229"
  - 'button "India: + 91"'
  - text: Standard carrier rates apply.
  - button "Continue"
```

# Test source

```ts
  33  |     this.phoneTextbox = page.locator(
  34  |       'xpath=//*[@id="profilePhoneDetailsId"]//input'
  35  |     );
  36  | 
  37  |     this.savePhoneButton = page.locator(
  38  |       'xpath=//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]'
  39  |     );
  40  | 
  41  |     // Verify Phone Popup Close
  42  |     this.verifyPhoneCloseButton = page.locator(
  43  |       'xpath=//*[@id=":r2k:"]/button'
  44  |     );
  45  | 
  46  |     // Change Password
  47  |     this.changePasswordButton = page.locator(
  48  |       'xpath=//*[@id="sigInInfoId"]/div/button'
  49  |     );
  50  | 
  51  |     this.currentPasswordField = page.locator(
  52  |       'xpath=//*[@id="credentialsForm"]/div/div[1]/div[1]/div/div/input'
  53  |     );
  54  | 
  55  |     this.newPasswordField = page.locator(
  56  |       'xpath=//*[@id="credentialsForm"]/div/div[1]/div[2]/div/div/input'
  57  |     );
  58  | 
  59  |     this.confirmPasswordField = page.locator(
  60  |       'xpath=//*[@id="credentialsForm"]/div/div[1]/div[3]/div/div/input'
  61  |     );
  62  | 
  63  |     this.savePasswordButton = page.locator(
  64  |       'xpath=//*[@id="credentialsForm"]/button[2]'
  65  |     );
  66  | 
  67  |     this.guidelines = page.getByText(
  68  |       'Password Guidelines'
  69  |     );
  70  | 
  71  |     this.passwordChangedMsg = page.getByText(
  72  |       'password is changed'
  73  |     );
  74  | 
  75  |     this.okButton = page.locator(
  76  |       '//button[contains(.,"ok")]'
  77  |     );
  78  | this.operationsEmailInput = page.locator(
  79  |   'xpath=//*[@id="input28"]'
  80  | );
  81  | 
  82  | this.operationsNextButton = page.locator(
  83  |   'xpath=//*[@id="form20"]/div[2]/input'
  84  | );
  85  | 
  86  | this.operationsPasswordInput = page.locator(
  87  |   'xpath=//*[@id="input54"]'
  88  | );
  89  | 
  90  | this.operationsSignInButton = page.locator(
  91  |   'xpath=//*[@id="form46"]/div[2]/input'
  92  | );
  93  | this.operationsCenterButton = page.locator(
  94  |   'xpath=//*[@id="app-mount"]/div/div/div[1]/div[1]/a[1]/button'
  95  | );
  96  | 
  97  |   }
  98  | 
  99  |   // ==========================================
  100 |   // MOBILE NUMBER
  101 |   // ==========================================
  102 | 
  103 |   async updateMobileNumber(phoneNumber: string) {
  104 |     await this.phoneTextbox.scrollIntoViewIfNeeded();
  105 | 
  106 |     await this.phoneTextbox.waitFor({
  107 |       state: 'visible',
  108 |     });
  109 | 
  110 |     await this.phoneTextbox.click();
  111 | 
  112 |     const currentValue =
  113 |       await this.phoneTextbox.inputValue();
  114 | 
  115 |     for (let i = 0; i < currentValue.length + 5; i++) {
  116 |       await this.page.keyboard.press('Backspace');
  117 |     }
  118 | 
  119 |     await this.phoneTextbox.type(phoneNumber);
  120 | 
  121 |     await this.page.keyboard.press('Tab');
  122 | 
  123 |     await expect(this.savePhoneButton).toBeVisible({
  124 |       timeout: 30000,
  125 |     });
  126 | 
  127 |     await this.savePhoneButton.click();
  128 | 
  129 |     await expect(
  130 |       this.page.getByText(
  131 |         'Your personal information is saved.'
  132 |       )
> 133 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  134 |       timeout: 15000,
  135 |     });
  136 | 
  137 |     console.log('Mobile Number Updated Successfully');
  138 |   }
  139 | 
  140 |   // ==========================================
  141 |   // CLOSE VERIFY PHONE POPUP
  142 | async closeVerifyPhonePopup() {
  143 |   try {
  144 |     const closeButton = this.page.locator(
  145 |       'xpath=//*[@aria-label="close"]/parent::button'
  146 |     );
  147 | 
  148 |     await closeButton.waitFor({
  149 |       state: 'visible',
  150 |       timeout: 10000,
  151 |     });
  152 | 
  153 |     await closeButton.click({
  154 |       force: true,
  155 |     });
  156 | 
  157 |     console.log('Verify Phone Number Popup Closed');
  158 |   } catch (error) {
  159 |     console.log('Failed to close popup:', error);
  160 |   }
  161 | }
  162 | 
  163 |   // ==========================================
  164 |   // CHANGE PASSWORD
  165 |   // ==========================================
  166 | 
  167 |   async openChangePassword() {
  168 |     await this.closeVerifyPhonePopup();
  169 | 
  170 |     await this.changePasswordButton.scrollIntoViewIfNeeded();
  171 | 
  172 |     await expect(
  173 |       this.changePasswordButton
  174 |     ).toBeVisible({
  175 |       timeout: 30000,
  176 |     });
  177 | 
  178 |     await this.changePasswordButton.click({
  179 |       force: true,
  180 |     });
  181 |   }
  182 | 
  183 |   async handlePopup() {
  184 |     try {
  185 |       await this.okButton.waitFor({
  186 |         state: 'visible',
  187 |         timeout: 5000,
  188 |       });
  189 | 
  190 |       await this.okButton.click();
  191 | 
  192 |       console.log('Popup Handled');
  193 |     } catch {
  194 |       console.log('Popup Not Displayed');
  195 |     }
  196 |   }
  197 | 
  198 |   async enterPasswords(
  199 |     currentPassword: string,
  200 |     newPassword: string,
  201 |     confirmPassword: string
  202 |   ) {
  203 |     await this.currentPasswordField.click();
  204 |     await this.page.keyboard.press('Control+A');
  205 |     await this.page.keyboard.press('Delete');
  206 |     await this.page.keyboard.type(currentPassword);
  207 | 
  208 |     await this.newPasswordField.click();
  209 |     await this.page.keyboard.press('Control+A');
  210 |     await this.page.keyboard.press('Delete');
  211 |     await this.page.keyboard.type(newPassword);
  212 | 
  213 |     await this.confirmPasswordField.click();
  214 |     await this.page.keyboard.press('Control+A');
  215 |     await this.page.keyboard.press('Delete');
  216 |     await this.page.keyboard.type(confirmPassword);
  217 | 
  218 |     await this.page.keyboard.press('Tab');
  219 |     await this.page.mouse.click(1200, 200);
  220 | 
  221 |     await this.page.waitForTimeout(3000);
  222 |   }
  223 | 
  224 |   async verifyGuidelinesDisplayed() {
  225 |     await expect(this.guidelines).toBeVisible({
  226 |       timeout: 30000,
  227 |     });
  228 |   }
  229 | 
  230 |   async savePassword() {
  231 |     await expect(
  232 |       this.savePasswordButton
  233 |     ).toBeEnabled({
```