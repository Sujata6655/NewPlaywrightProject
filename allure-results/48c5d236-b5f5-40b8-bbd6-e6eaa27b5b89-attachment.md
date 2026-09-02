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
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
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
  59  |   timeout: 5000,
  60  | });
  61  | 
  62  | // Click OK button
  63  | const okButton = page.locator('//button[normalize-space()="ok"]');
  64  | 
  65  | await expect(okButton).toBeVisible({
  66  |   timeout: 5000,
  67  | });
  68  | 
  69  | await okButton.click();
  70  | 
  71  | 
  72  |   // Wait for Change Password page
  73  |   // await expect(
  74  |   //   page.getByText('Current Password')
  75  |   // ).toBeVisible({
  76  |   //   timeout: 10000,
  77  |   // });
  78  |   // Wait for Change Password page
  79  | 
  80  | 
  81  | 
  82  | 
  83  |   // // Wait for password fields
  84  |   const passwordFields = page.locator('input[type="password"]');
  85  | 
  86  |   await expect(passwordFields.first()).toBeVisible({
  87  |     timeout: 5000,
  88  |   });
  89  | 
  90  |  
  91  | 
  92  | 
  93  |   // Save Password
  94  |   await page.getByRole('button', { name: /save/i }).click();
  95  | 
  96  |   // Wait for Success Message
  97  |   await page.waitForTimeout(5000);
  98  | 
  99  |   // Open Profile Dropdown
  100 |   const profileDropdown = page.locator(
  101 |     '/html/body/div/div/div/div/div/header/div/div/div/button'
  102 |   );
  103 | 
  104 |   await expect(profileDropdown).toBeVisible({
  105 |     timeout: 30000,
  106 |   });
  107 | 
  108 |   await profileDropdown.click();
  109 | 
  110 |   // Logout
  111 |   const logoutButton = page.locator(
  112 |     '/html/body/div[2]/div[3]/ul/li'
  113 |   );
  114 | 
  115 |   await expect(logoutButton).toBeVisible({
  116 |     timeout: 10000,
  117 |   });
  118 | 
  119 |   await logoutButton.click();
  120 | 
  121 |   // Open URL Again
  122 |   await page.goto(
  123 |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  124 |   );
  125 | 
  126 |   // Login With New Password
  127 |   await page.locator('#input28').fill(email);
  128 |   await page.locator('#form20 input[type="submit"]').click();
  129 | 
  130 |   await page.locator('#input54').fill(newPassword);
  131 |   await page.locator('#form46 input[type="submit"]').click();
  132 | 
  133 |   // Verify Successful Login
  134 |   await expect(
  135 |     page.locator('input[name="firstName"]')
  136 |   ).toBeVisible({
  137 |     timeout: 60000,
  138 |   });
  139 | 
  140 |   console.log('Successfully logged in with new password');
  141 | });
  142 | 
```