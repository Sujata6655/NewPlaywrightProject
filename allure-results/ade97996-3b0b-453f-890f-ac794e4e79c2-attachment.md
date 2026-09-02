# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: editmo.spec.ts >> Edit Profile, Mobile Number and Change Password
- Location: tests\editmo.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('input[name="firstName"]')
Expected: visible
Timeout: 60000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 60000ms
  - waiting for locator('input[name="firstName"]')

```

```yaml
- main:
  - heading "John Deere logo logo" [level=1]:
    - img "John Deere logo logo"
  - heading "Sign In" [level=2]
  - text: sunil.yadav@yopmail.com
  - alert:
    - alert:
      - text: 
      - paragraph: Unable to sign in
  - text: Password
  - textbox "Password":
    - /placeholder: ""
    - text: OldPassword
  - text: 
  - button "Sign In"
  - link "Forgot Username or Password":
    - /url: https://account.deere.com/actmgmt/forgotpassword?TARGET=https://account.deere.com
  - link "Back to sign in":
    - /url: "#"
- link "Contact Us":
  - /url: "https://account-helppages.deere.com/signin-help "
- text: Copyright © 2026 Deere & Company. All Rights Reserved.
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test('Edit Profile, Mobile Number and Change Password', async ({ page }) => {
  4   |   test.setTimeout(180000);
  5   | 
  6   |   const email = 'sunil.yadav@yopmail.com';
  7   | 
  8   |   const currentPassword = 'OldPassword';
  9   |   const newPassword = 'NewPassword';
  10  |   const confirmPassword = 'NewPassword';
  11  | 
  12  |   const updatedFirstName = 'Sunil S';
  13  |   const updatedMobileNumber = '+919876543229';
  14  | 
  15  |   // Login
  16  |   await page.goto(
  17  |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  18  |   );
  19  | 
  20  |   await page.locator('#input28').fill(email);
  21  |   await page.locator('#form20 input[type="submit"]').click();
  22  | 
  23  |   await page.locator('#input54').fill(currentPassword);
  24  |   await page.locator('#form46 input[type="submit"]').click();
  25  | 
  26  |   // Verify Profile Page
  27  |   const firstName = page.locator('input[name="firstName"]');
  28  | 
> 29  |   await expect(firstName).toBeVisible({
      |                           ^ Error: expect(locator).toBeVisible() failed
  30  |     timeout: 60000,
  31  |   });
  32  | 
  33  |   // =====================================================
  34  |   // UPDATE FIRST NAME
  35  |   // =====================================================
  36  | 
  37  |   await firstName.click();
  38  |   await firstName.clear();
  39  |   await firstName.fill(updatedFirstName);
  40  | 
  41  |   await page
  42  |     .locator('xpath=//*[@id="addressDetailsId"]/div[5]/button[2]')
  43  |     .click();
  44  | 
  45  |   // First Name Success Message
  46  |   await expect(
  47  |     page.getByText(/success|updated|saved/i)
  48  |   ).toBeVisible({
  49  |     timeout: 15000,
  50  |   });
  51  | 
  52  |   console.log('First Name Updated Successfully');
  53  | 
  54  |   // =====================================================
  55  |   // UPDATE MOBILE NUMBER
  56  |   // =====================================================
  57  | 
  58  |   await page.locator('#profilePhoneDetailsId').scrollIntoViewIfNeeded();
  59  | 
  60  |   const phoneTextbox = page.locator(
  61  |     'xpath=//*[@id="profilePhoneDetailsId"]//input'
  62  |   );
  63  | 
  64  |   await phoneTextbox.waitFor({
  65  |     state: 'visible',
  66  |   });
  67  | 
  68  |   await phoneTextbox.click();
  69  | 
  70  |   await page.keyboard.press('Control+A');
  71  |   await page.keyboard.press('Delete');
  72  | 
  73  |   await phoneTextbox.fill(updatedMobileNumber);
  74  | 
  75  |   const savePhoneButton = page.locator(
  76  |     'xpath=//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]'
  77  |   );
  78  | 
  79  |   await expect(savePhoneButton).toBeVisible();
  80  | 
  81  |   await savePhoneButton.click();
  82  | 
  83  |   // Mobile Number Success Validation
  84  |   await expect(
  85  |     page.getByText(/success|updated|saved/i)
  86  |   ).toBeVisible({
  87  |     timeout: 15000,
  88  |   });
  89  | 
  90  |   console.log('Mobile Number Updated Successfully');
  91  | 
  92  |   // =====================================================
  93  |   // CHANGE PASSWORD
  94  |   // =====================================================
  95  | 
  96  |   const changePasswordButton = page.locator(
  97  |     'xpath=//*[@id="sigInInfoId"]/div/button'
  98  |   );
  99  | 
  100 |   await changePasswordButton.scrollIntoViewIfNeeded();
  101 | 
  102 |   await expect(changePasswordButton).toBeVisible({
  103 |     timeout: 30000,
  104 |   });
  105 | 
  106 |   await changePasswordButton.click();
  107 | 
  108 |   // Optional Popup
  109 |   const okButton = page.locator('//button[contains(.,"ok")]');
  110 | 
  111 |   try {
  112 |     await okButton.waitFor({
  113 |       state: 'visible',
  114 |       timeout: 5000,
  115 |     });
  116 | 
  117 |     await okButton.click();
  118 |   } catch {
  119 |     console.log('Popup not displayed');
  120 |   }
  121 | 
  122 |   // Current Password
  123 |   const currentPwd = page.locator(
  124 |     'xpath=//*[@id="credentialsForm"]/div/div[1]/div[1]/div/div/input'
  125 |   );
  126 | 
  127 |   await currentPwd.click();
  128 |   await page.keyboard.press('Control+A');
  129 |   await page.keyboard.press('Delete');
```