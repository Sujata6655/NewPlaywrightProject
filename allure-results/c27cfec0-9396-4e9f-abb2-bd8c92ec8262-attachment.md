# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test.spec.ts >> Edit Profile and Change Password
- Location: tests\test.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Any unsaved information will be lost.')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText('Any unsaved information will be lost.')

```

```yaml
- banner:
  - link "Go to home":
    - /url: /
    - img "John Deere Logo"
  - button "Hi, Sunil S"
- heading "Change Password" [level=3]
- separator
- paragraph: Current Password *
- textbox
- paragraph: New Password *
- textbox
- paragraph: Confirm New Password *
- textbox
- heading "Password Guidelines" [level=4]
- paragraph: "Password must have:"
- list:
  - listitem: 10 to 30 characters
  - listitem: One Uppercase Letter
  - listitem: One Lowercase Letter
  - listitem: One Number
- paragraph: "Password can have:"
- list:
  - listitem: Non-alphanumeric characters
- separator
- button "Back"
- button "Save" [disabled]
- contentinfo:
  - navigation "footer navigation":
    - list:
      - listitem:
        - link "Privacy and Data":
          - /url: https://www.deere.com/en/privacy-and-data/
      - listitem:
        - link "Terms of Use":
          - /url: https://www.deere.com/en/privacy-and-data/myjohndeere/terms/
      - listitem:
        - link "Contact Us":
          - /url: https://account-helppages.deere.com/contact-us
  - text: Copyright © 2026 Deere & Company. All Rights Reserved.
- list
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
> 58  | await expect(popupMessage).toBeVisible({
      |                            ^ Error: expect(locator).toBeVisible() failed
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
  75  |     timeout: 30000,
  76  |   });
  77  | 
  78  |   // Fill Password Fields
  79  | 
  80  |   await page
  81  |     .locator('label:has-text("Current Password")')
  82  |     .locator('..')
  83  |     .locator('input')
  84  |     .fill(currentPassword);
  85  | 
  86  |   await page
  87  |     .locator('label:has-text("New Password")')
  88  |     .locator('..')
  89  |     .locator('input')
  90  |     .fill(newPassword);
  91  | 
  92  |   await page
  93  |     .locator('label:has-text("Confirm New Password")')
  94  |     .locator('..')
  95  |     .locator('input')
  96  |     .fill(newPassword);
  97  | 
  98  |   // Save Password
  99  |   await page.getByRole('button', { name: /save/i }).click();
  100 | 
  101 |   // Wait for Success Message
  102 |   await page.waitForTimeout(5000);
  103 | 
  104 |   // Open Profile Dropdown
  105 |   const profileDropdown = page.locator(
  106 |     '/html/body/div/div/div/div/div/header/div/div/div/button'
  107 |   );
  108 | 
  109 |   await expect(profileDropdown).toBeVisible({
  110 |     timeout: 30000,
  111 |   });
  112 | 
  113 |   await profileDropdown.click();
  114 | 
  115 |   // Logout
  116 |   const logoutButton = page.locator(
  117 |     '/html/body/div[2]/div[3]/ul/li'
  118 |   );
  119 | 
  120 |   await expect(logoutButton).toBeVisible({
  121 |     timeout: 10000,
  122 |   });
  123 | 
  124 |   await logoutButton.click();
  125 | 
  126 |   // Open URL Again
  127 |   await page.goto(
  128 |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  129 |   );
  130 | 
  131 |   // Login With New Password
  132 |   await page.locator('#input28').fill(email);
  133 |   await page.locator('#form20 input[type="submit"]').click();
  134 | 
  135 |   await page.locator('#input54').fill(newPassword);
  136 |   await page.locator('#form46 input[type="submit"]').click();
  137 | 
  138 |   // Verify Successful Login
  139 |   await expect(
  140 |     page.locator('input[name="firstName"]')
  141 |   ).toBeVisible({
  142 |     timeout: 60000,
  143 |   });
  144 | 
  145 |   console.log('Successfully logged in with new password');
  146 | });
  147 | 
```