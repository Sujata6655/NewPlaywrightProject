# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test.spec.ts >> Edit Profile and Change Password
- Location: tests\test.spec.ts:3:5

# Error details

```
Error: locator.fill: Error: Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]
Call log:
  - waiting for locator('//*[@id="credentialsForm"]/div/div[1]/div[2]/div/div')
    - locator resolved to <div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth Mui-focused MuiInputBase-formControl css-bhqrz4">…</div>
    - fill("Testing@QAE15")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Page snapshot

```yaml
- generic [ref=f4e6]:
  - banner [ref=f4e7]:
    - generic [ref=f4e8]:
      - link "Go to home" [ref=f4e9] [cursor=pointer]:
        - /url: /
        - img "John Deere Logo" [ref=f4e10]
      - button [ref=f4e13] [cursor=pointer]
  - generic [ref=f4e20]:
    - heading "Change Password" [level=3] [ref=f4e21]
    - separator [ref=f4e22]
    - generic [ref=f4e23]:
      - generic [ref=f4e24]:
        - generic [ref=f4e25]:
          - generic [ref=f4e26]:
            - paragraph [ref=f4e27]: Current Password *
            - textbox [ref=f4e30]: Testing@QAE14
          - generic [ref=f4e31]:
            - paragraph [ref=f4e32]: New Password *
            - textbox [active] [ref=f4e35]
          - generic [ref=f4e40]:
            - paragraph [ref=f4e41]: Confirm New Password *
            - textbox [ref=f4e44]
        - generic [ref=f4e50]:
          - heading "Password Guidelines" [level=4] [ref=f4e51]
          - generic [ref=f4e52]:
            - paragraph [ref=f4e53]: "Password must have:"
            - list [ref=f4e54]:
              - listitem [ref=f4e55]: 10 to 30 characters
              - listitem [ref=f4e56]: One Uppercase Letter
              - listitem [ref=f4e57]: One Lowercase Letter
              - listitem [ref=f4e58]: One Number
            - paragraph [ref=f4e59]: "Password can have:"
            - list [ref=f4e60]:
              - listitem [ref=f4e61]: Non-alphanumeric characters
      - separator [ref=f4e62]
      - button "Back" [ref=f4e63] [cursor=pointer]
      - button "Save" [disabled] [ref=f4e64]
  - generic [ref=f4e65]:
    - contentinfo [ref=f4e66]:
      - navigation "footer navigation" [ref=f4e67]:
        - list [ref=f4e68]:
          - listitem [ref=f4e69]:
            - link "Privacy and Data" [ref=f4e70] [cursor=pointer]:
              - /url: https://www.deere.com/en/privacy-and-data/
          - listitem [ref=f4e71]:
            - link "Terms of Use" [ref=f4e72] [cursor=pointer]:
              - /url: https://www.deere.com/en/privacy-and-data/myjohndeere/terms/
          - listitem [ref=f4e73]:
            - link "Contact Us" [ref=f4e74] [cursor=pointer]:
              - /url: https://account-helppages.deere.com/contact-us
      - generic [ref=f4e75]: Copyright © 2026 Deere & Company. All Rights Reserved.
    - list
```

# Test source

```ts
  24  |   const firstName = page.locator('input[name="firstName"]');
  25  | 
  26  |   await expect(firstName).toBeVisible({
  27  |     timeout: 60000,
  28  |   });
  29  | 
  30  |   // Update First Name
  31  |   await firstName.clear();
  32  |   await firstName.fill('Sunil S');
  33  | 
  34  |   // Save Personal Information
  35  |   await page
  36  |     .locator('//*[@id="addressDetailsId"]/div[5]/button[2]')
  37  |     .click();
  38  | 
  39  |   await page.waitForTimeout(3000);
  40  | 
  41  |   // Change Password
  42  |   const changePasswordButton = page.locator(
  43  |     '//*[@id="sigInInfoId"]/div/button'
  44  |   );
  45  | 
  46  |   await expect(changePasswordButton).toBeVisible({
  47  |     timeout: 30000,
  48  |   });
  49  | 
  50  |   await changePasswordButton.scrollIntoViewIfNeeded();
  51  |   await changePasswordButton.click();
  52  | 
  53  |   // Handle Confirmation Popup (if displayed)
  54  |  // Handle confirmation popup
  55  | const popupMessage = page.getByText(
  56  |   'Any unsaved information will be lost.'
  57  | );
  58  | 
  59  | // Popup may or may not appear
  60  | 
  61  | const okButton = page.locator('//button[contains(.,"ok")]');
  62  | 
  63  | try {
  64  | 
  65  | await okButton.waitFor({
  66  | 
  67  | state: 'visible',
  68  | 
  69  | timeout: 5000,
  70  | 
  71  | });
  72  | 
  73  |  
  74  | 
  75  | await okButton.click();
  76  | 
  77  | console.log('Popup handled');
  78  | 
  79  | } catch {
  80  | 
  81  | console.log('Popup not displayed');
  82  | 
  83  | }
  84  | // Click OK button
  85  | 
  86  | 
  87  |   // Wait for Change Password page
  88  |   // await expect(
  89  |   //   page.getByText('Current Password')
  90  |   // ).toBeVisible({
  91  |   //   timeout: 10000,
  92  |   // });
  93  |   // Wait for Change Password page
  94  | 
  95  | 
  96  | 
  97  | 
  98  |   // // Wait for password fields
  99  |   const passwordFields = page.locator('input[type="password"]');
  100 | 
  101 |   await expect(passwordFields.first()).toBeVisible({
  102 |     timeout: 5000,
  103 |   });
  104 | 
  105 |   // Current Password
  106 | // Current Password
  107 | 
  108 | const currentPasswordField = page.locator(
  109 | 
  110 | 'xpath=/html/body/div/div/div/div/div/div[1]/div/div/div/form/div/div[1]/div[1]/div/div/input'
  111 | 
  112 | );
  113 | 
  114 | await currentPasswordField.click();
  115 | 
  116 | await currentPasswordField.fill(currentPassword);
  117 | 
  118 |  const newPasswordField = page.locator(
  119 | 
  120 | '//*[@id="credentialsForm"]/div/div[1]/div[2]/div/div'
  121 | );
  122 | await newPasswordField .click();
  123 | 
> 124 | await newPasswordField .fill(newPassword);
      |                         ^ Error: locator.fill: Error: Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]
  125 | 
  126 | const confirmPasswordField = page.locator(
  127 | 
  128 | '[id=":r13:"]'
  129 | );
  130 | 
  131 | await confirmPasswordField.click();
  132 | 
  133 | await confirmPasswordField.fill(confirmPassword);
  134 | 
  135 | 
  136 | 
  137 | 
  138 | 
  139 | 
  140 |   // Save Password
  141 |   await page.getByRole('button', { name: /save/i }).click();
  142 | 
  143 |   // Wait for Success Message
  144 |   await page.waitForTimeout(5000);
  145 | 
  146 |   // Open Profile Dropdown
  147 |   const profileDropdown = page.locator(
  148 |     '/html/body/div/div/div/div/div/header/div/div/div/button'
  149 |   );
  150 | 
  151 |   await expect(profileDropdown).toBeVisible({
  152 |     timeout: 30000,
  153 |   });
  154 | 
  155 |   await profileDropdown.click();
  156 | 
  157 |   // Logout
  158 |   const logoutButton = page.locator(
  159 |     '/html/body/div[2]/div[3]/ul/li'
  160 |   );
  161 | 
  162 |   await expect(logoutButton).toBeVisible({
  163 |     timeout: 10000,
  164 |   });
  165 | 
  166 |   await logoutButton.click();
  167 | 
  168 |   // Open URL Again
  169 |   await page.goto(
  170 |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  171 |   );
  172 | 
  173 |   // Login With New Password
  174 |   await page.locator('#input28').fill(email);
  175 |   await page.locator('#form20 input[type="submit"]').click();
  176 | 
  177 |   await page.locator('#input54').fill(newPassword);
  178 |   await page.locator('#form46 input[type="submit"]').click();
  179 | 
  180 |   // Verify Successful Login
  181 |   await expect(
  182 |     page.locator('input[name="firstName"]')
  183 |   ).toBeVisible({
  184 |     timeout: 60000,
  185 |   });
  186 | 
  187 |   console.log('Successfully logged in with new password');
  188 | });
  189 | 
```