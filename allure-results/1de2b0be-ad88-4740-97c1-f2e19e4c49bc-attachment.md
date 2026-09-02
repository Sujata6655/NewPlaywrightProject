# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test.spec.ts >> Edit Profile and Change Password
- Location: tests\test.spec.ts:3:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByText(/ok/i).first()
    - locator resolved to <option value="CK">Cook Islands</option>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    92 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

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
  53  |   const okButton = page.getByText(/ok/i);
  54  | 
  55  |   if (await okButton.count()) {
> 56  |     await okButton.first().click();
      |                            ^ Error: locator.click: Test ended.
  57  |   }
  58  | 
  59  |   // Wait for Change Password page
  60  |   await expect(
  61  |     page.getByText('Current Password')
  62  |   ).toBeVisible({
  63  |     timeout: 30000,
  64  |   });
  65  | 
  66  |   // Fill Password Fields
  67  | 
  68  |   await page
  69  |     .locator('label:has-text("Current Password")')
  70  |     .locator('..')
  71  |     .locator('input')
  72  |     .fill(currentPassword);
  73  | 
  74  |   await page
  75  |     .locator('label:has-text("New Password")')
  76  |     .locator('..')
  77  |     .locator('input')
  78  |     .fill(newPassword);
  79  | 
  80  |   await page
  81  |     .locator('label:has-text("Confirm New Password")')
  82  |     .locator('..')
  83  |     .locator('input')
  84  |     .fill(newPassword);
  85  | 
  86  |   // Save Password
  87  |   await page.getByRole('button', { name: /save/i }).click();
  88  | 
  89  |   // Wait for Success Message
  90  |   await page.waitForTimeout(5000);
  91  | 
  92  |   // Open Profile Dropdown
  93  |   const profileDropdown = page.locator(
  94  |     '/html/body/div/div/div/div/div/header/div/div/div/button'
  95  |   );
  96  | 
  97  |   await expect(profileDropdown).toBeVisible({
  98  |     timeout: 30000,
  99  |   });
  100 | 
  101 |   await profileDropdown.click();
  102 | 
  103 |   // Logout
  104 |   const logoutButton = page.locator(
  105 |     '/html/body/div[2]/div[3]/ul/li'
  106 |   );
  107 | 
  108 |   await expect(logoutButton).toBeVisible({
  109 |     timeout: 10000,
  110 |   });
  111 | 
  112 |   await logoutButton.click();
  113 | 
  114 |   // Open URL Again
  115 |   await page.goto(
  116 |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  117 |   );
  118 | 
  119 |   // Login With New Password
  120 |   await page.locator('#input28').fill(email);
  121 |   await page.locator('#form20 input[type="submit"]').click();
  122 | 
  123 |   await page.locator('#input54').fill(newPassword);
  124 |   await page.locator('#form46 input[type="submit"]').click();
  125 | 
  126 |   // Verify Successful Login
  127 |   await expect(
  128 |     page.locator('input[name="firstName"]')
  129 |   ).toBeVisible({
  130 |     timeout: 60000,
  131 |   });
  132 | 
  133 |   console.log('Successfully logged in with new password');
  134 | });
  135 | 
```