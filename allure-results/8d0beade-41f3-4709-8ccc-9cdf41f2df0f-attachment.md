# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test.spec.ts >> Edit Profile and Change Password
- Location: tests\test.spec.ts:3:5

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for getByLabel(/Current Password/i)

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
  9   | 
  10  |   // Open URL
  11  |   await page.goto(
  12  |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  13  |   );
  14  | 
  15  |   // Login
  16  |   await page.locator('#input28').fill(email);
  17  |   await page.locator('#form20 input[type="submit"]').click();
  18  | 
  19  |   await page.locator('#input54').fill(currentPassword);
  20  |   await page.locator('#form46 input[type="submit"]').click();
  21  | 
  22  |   // Wait for Profile Page
  23  |   const firstName = page.locator('input[name="firstName"]');
  24  | 
  25  |   await expect(firstName).toBeVisible({
  26  |     timeout: 60000,
  27  |   });
  28  | 
  29  |   // Update First Name
  30  |   await firstName.clear();
  31  |   await firstName.fill('Sunil S');
  32  | 
  33  |   // Save Personal Information
  34  |   await page
  35  |     .locator('//*[@id="addressDetailsId"]/div[5]/button[2]')
  36  |     .click();
  37  | 
  38  |   await page.waitForTimeout(3000);
  39  | 
  40  |   // Change Password
  41  |   const changePasswordButton = page.locator(
  42  |     '//*[@id="sigInInfoId"]/div/button'
  43  |   );
  44  | 
  45  |   await expect(changePasswordButton).toBeVisible({
  46  |     timeout: 30000,
  47  |   });
  48  | 
  49  |   await changePasswordButton.scrollIntoViewIfNeeded();
  50  |   await changePasswordButton.click();
  51  | 
  52  |   // Handle Confirmation Popup (if displayed)
  53  |  // Handle confirmation popup
  54  | const popupMessage = page.getByText(
  55  |   'Any unsaved information will be lost.'
  56  | );
  57  | 
  58  | await expect(popupMessage).toBeVisible({
  59  |   timeout: 10000,
  60  | });
  61  | 
  62  | // Click OK button
  63  | const okButton = page.locator('//button[normalize-space()="ok"]');
  64  | 
  65  | await expect(okButton).toBeVisible({
  66  |   timeout: 10000,
  67  | });
  68  | 
  69  | await okButton.click();
  70  | 
  71  |   // Wait for Change Password page
  72  |   await expect(
  73  |     page.getByText('Current Password')
  74  |   ).toBeVisible({
  75  |     timeout: 10000,
  76  |   });
  77  | 
  78  |   // Fill Password Fields
> 79  | await page.getByLabel(/Current Password/i).fill(currentPassword);
      |                                            ^ Error: locator.fill: Test ended.
  80  | 
  81  | await page.getByLabel(/New Password/i).fill(newPassword);
  82  | 
  83  | await page.getByLabel(/Confirm New Password/i).fill(newPassword);
  84  | 
  85  |   // Save Password
  86  |   await page.getByRole('button', { name: /save/i }).click();
  87  | 
  88  |   // Wait for Success Message
  89  |   await page.waitForTimeout(5000);
  90  | 
  91  |   // Open Profile Dropdown
  92  |   const profileDropdown = page.locator(
  93  |     '/html/body/div/div/div/div/div/header/div/div/div/button'
  94  |   );
  95  | 
  96  |   await expect(profileDropdown).toBeVisible({
  97  |     timeout: 30000,
  98  |   });
  99  | 
  100 |   await profileDropdown.click();
  101 | 
  102 |   // Logout
  103 |   const logoutButton = page.locator(
  104 |     '/html/body/div[2]/div[3]/ul/li'
  105 |   );
  106 | 
  107 |   await expect(logoutButton).toBeVisible({
  108 |     timeout: 10000,
  109 |   });
  110 | 
  111 |   await logoutButton.click();
  112 | 
  113 |   // Open URL Again
  114 |   await page.goto(
  115 |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  116 |   );
  117 | 
  118 |   // Login With New Password
  119 |   await page.locator('#input28').fill(email);
  120 |   await page.locator('#form20 input[type="submit"]').click();
  121 | 
  122 |   await page.locator('#input54').fill(newPassword);
  123 |   await page.locator('#form46 input[type="submit"]').click();
  124 | 
  125 |   // Verify Successful Login
  126 |   await expect(
  127 |     page.locator('input[name="firstName"]')
  128 |   ).toBeVisible({
  129 |     timeout: 60000,
  130 |   });
  131 | 
  132 |   console.log('Successfully logged in with new password');
  133 | });
  134 | 
```