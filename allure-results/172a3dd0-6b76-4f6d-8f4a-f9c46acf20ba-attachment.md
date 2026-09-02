# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test.spec.ts >> Edit Profile and Change Password
- Location: tests\test.spec.ts:3:5

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: page.goto: Test timeout of 120000ms exceeded.
Call log:
  - navigating to "https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/", waiting until "load"

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test('Edit Profile and Change Password', async ({ page }) => {
  4   |   test.setTimeout(120000);
  5   | 
  6   |   const email = 'sunil.yadav@yopmail.com';
  7   |   const currentPassword = 'Test@111114';
  8   |   const newPassword = 'Test@111115';
  9   |   const confirmPassword = 'Test@111115';
  10  | 
  11  |   // Open URL
> 12  |   await page.goto(
      |              ^ Error: page.goto: Test timeout of 120000ms exceeded.
  13  |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  14  |   );
  15  | 
  16  |   // Login
  17  |   await page.locator('#input28').fill(email);
  18  |   await page.locator('#form20 input[type="submit"]').click();
  19  | 
  20  |   await page.locator('#input54').fill(currentPassword);
  21  |   await page.locator('#form46 input[type="submit"]').click();
  22  | 
  23  |   // Wait for Profile Page
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
```