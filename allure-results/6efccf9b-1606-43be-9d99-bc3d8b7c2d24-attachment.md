# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: editmo.spec.ts >> Edit Profile, Mobile Number and Change Password
- Location: tests\editmo.spec.ts:3:5

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('//*[@id="profilePhoneDetailsId"]//input')
Expected: ""
Received: "+919876543229"
Timeout:  5000ms

Call log:
  - Expect "toHaveValue" with timeout 5000ms
  - waiting for locator('//*[@id="profilePhoneDetailsId"]//input')
    14 × locator resolved to <input type="tel" required="" id="mobile" name="mobile" maxlength="26" class="form-control " value="+919876543229" placeholder="1 (702) 123-4567"/>
       - unexpected value "+919876543229"

```

```yaml
- textbox "1 (702) 123-4567": "+919876543229"
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
  8   |   const currentPassword = 'Testingqaengineer123@';
  9   |   const newPassword = 'Testingqaengineer124@';
  10  |   const confirmPassword = 'Testingqaengineer124@';
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
  29  |   await expect(firstName).toBeVisible({
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
  46  | await expect(
  47  |   page.getByText('Your personal information is saved.')
  48  | ).toBeVisible({
  49  |   timeout: 15000,
  50  | });
  51  | 
  52  |   console.log('First Name Updated Successfully');
  53  | 
  54  |   // =====================================================
  55  |   // UPDATE MOBILE NUMBER
  56  |   // =====================================================
  57  | const phoneTextbox = page.locator(
  58  |   'xpath=//*[@id="profilePhoneDetailsId"]//input'
  59  | );
  60  | 
  61  | await phoneTextbox.waitFor({ state: 'visible' });
  62  | 
  63  | await phoneTextbox.click();
  64  | 
  65  | // Existing value select karo
  66  | await page.keyboard.press('Control+A');
  67  | 
  68  | // Purana number delete karo
  69  | await page.keyboard.press('Backspace');
  70  | 
  71  | // Verify field empty hai
> 72  | await expect(phoneTextbox).toHaveValue('');
      |                            ^ Error: expect(locator).toHaveValue(expected) failed
  73  | 
  74  | // Naya number enter karo
  75  | await phoneTextbox.fill('+919876543229');
  76  | 
  77  | // Focus bahar nikalo taki change event trigger ho
  78  | await page.keyboard.press('Tab');
  79  | 
  80  |   // Mobile Number Success Validation
  81  |   await expect(
  82  |     page.getByText(/success|updated|saved/i)
  83  |   ).toBeVisible({
  84  |     timeout: 15000,
  85  |   });
  86  | 
  87  |   console.log('Mobile Number Updated Successfully');
  88  | 
  89  |   // =====================================================
  90  |   // CHANGE PASSWORD
  91  |   // =====================================================
  92  | 
  93  |   const changePasswordButton = page.locator(
  94  |     'xpath=//*[@id="sigInInfoId"]/div/button'
  95  |   );
  96  | 
  97  |   await changePasswordButton.scrollIntoViewIfNeeded();
  98  | 
  99  |   await expect(changePasswordButton).toBeVisible({
  100 |     timeout: 30000,
  101 |   });
  102 | 
  103 |   await changePasswordButton.click();
  104 | 
  105 |   // Optional Popup
  106 |   const okButton = page.locator('//button[contains(.,"ok")]');
  107 | 
  108 |   try {
  109 |     await okButton.waitFor({
  110 |       state: 'visible',
  111 |       timeout: 5000,
  112 |     });
  113 | 
  114 |     await okButton.click();
  115 |   } catch {
  116 |     console.log('Popup not displayed');
  117 |   }
  118 | 
  119 |   // Current Password
  120 |   const currentPwd = page.locator(
  121 |     'xpath=//*[@id="credentialsForm"]/div/div[1]/div[1]/div/div/input'
  122 |   );
  123 | 
  124 |   await currentPwd.click();
  125 |   await page.keyboard.press('Control+A');
  126 |   await page.keyboard.press('Delete');
  127 |   await currentPwd.fill(currentPassword);
  128 | 
  129 |   // New Password
  130 |   const newPwd = page.locator(
  131 |     'xpath=//*[@id="credentialsForm"]/div/div[1]/div[2]/div/div/input'
  132 |   );
  133 | 
  134 |   await newPwd.click();
  135 |   await page.keyboard.press('Control+A');
  136 |   await page.keyboard.press('Delete');
  137 |   await newPwd.fill(newPassword);
  138 | 
  139 |   // Confirm Password
  140 |   const confirmPwd = page.locator(
  141 |     'xpath=//*[@id="credentialsForm"]/div/div[1]/div[3]/div/div/input'
  142 |   );
  143 | 
  144 |   await confirmPwd.click();
  145 |   await page.keyboard.press('Control+A');
  146 |   await page.keyboard.press('Delete');
  147 |   await confirmPwd.fill(confirmPassword);
  148 | 
  149 |   await page.keyboard.press('Tab');
  150 | 
  151 |   const passwordSaveButton = page.locator(
  152 |     'xpath=//*[@id="credentialsForm"]/button[2]'
  153 |   );
  154 | 
  155 |   await expect(passwordSaveButton).toBeEnabled({
  156 |     timeout: 30000,
  157 |   });
  158 | 
  159 |   await passwordSaveButton.click();
  160 | 
  161 |   // Password Changed Validation
  162 |   await expect(
  163 |     page.getByText(/password is changed|password changed/i)
  164 |   ).toBeVisible({
  165 |     timeout: 15000,
  166 |   });
  167 | 
  168 |   console.log('Password Changed Successfully');
  169 | 
  170 |   // =====================================================
  171 |   // LOGOUT
  172 |   // =====================================================
```