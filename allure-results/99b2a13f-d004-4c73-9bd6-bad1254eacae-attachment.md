# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test.spec.ts >> Edit Profile and Change Password
- Location: tests\test.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('input[name="firstName"]')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 60000ms
  - waiting for locator('input[name="firstName"]')
    - waiting for "https://signin.johndeere.com/login/token/redirect?stateToken=02.id.f3XB6AaIa7M21BrCnP-797AR0tpEiCNYn_1axFIt" navigation to finish...
    - navigated to "https://account.deere.com/actmgmt/callback?code=y2yQizpoRzZznM_i1w2lWUPTd0UklxWLNiYm1Y2W6eo&state=CRS4H6WfFsLuBpbzUW3DK2C8Eft2TVijx46csTsiwYFjoMfFQrYNg5FRXTGNDY7A"
  - Protocol error (Runtime.callFunctionOn): Internal server error, session closed.

```

```yaml
- banner:
  - link "Go to home":
    - /url: /
    - img "John Deere Logo"
- progressbar:
  - img
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
  4   |   const email = 'sunil.yadav@yopmail.com';
  5   |   const currentPassword = 'Test@111114';
  6   |   const newPassword = 'Test@111115';
  7   | 
  8   |   // Open URL
  9   |   await page.goto(
  10  |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  11  |   );
  12  | 
  13  |   // Login
  14  |   await page.locator('#input28').fill(email);
  15  |   await page.locator('#form20 input[type="submit"]').click();
  16  | 
  17  |   await page.locator('#input54').fill(currentPassword);
  18  |   await page.locator('#form46 input[type="submit"]').click();
  19  | 
  20  |   // Wait for Edit Profile page
  21  |   await expect(page.locator('input[name="firstName"]'))
> 22  |     .toBeVisible({ timeout: 60000 });
      |      ^ Error: expect(locator).toBeVisible() failed
  23  | 
  24  |   // Edit First Name
  25  |   const firstName = page.locator('input[name="firstName"]');
  26  | 
  27  |   await firstName.clear();
  28  |   await firstName.fill('Sunil S');
  29  | 
  30  |   // Save Personal Information
  31  |   await page
  32  |     .locator('//*[@id="addressDetailsId"]/div[5]/button[2]')
  33  |     .click();
  34  |     await page.waitForTimeout(4000);
  35  | 
  36  |  // Verify Success Message
  37  |   await expect(
  38  |     page.getByText(/Your personal information is saved/i)
  39  |   ).toBeVisible({ timeout: 10000 });
  40  | 
  41  |   // Close success popup if displayed
  42  |   // const closeButton = page.locator(
  43  |   //   '//*[@id="main-content"]/div/div[1]/div/div[3]/div/button'
  44  |   // );
  45  | 
  46  |   // if (await closeButton.isVisible()) {
  47  |   //   await closeButton.click();
  48  |   // }
  49  | 
  50  |   // Click Change Password
  51  |   // const changePasswordButton = page.locator(
  52  |   //   '//*[@id="sigInInfoId"]/div/button'
  53  |   // );
  54  | 
  55  |   // await expect(changePasswordButton)
  56  |   //   .toBeVisible({ timeout: 30000 });
  57  | 
  58  |   // await changePasswordButton.click();
  59  | 
  60  |   await expect(
  61  | 
  62  | page.locator('input[type="password"]').first()
  63  | 
  64  | ).toBeVisible({ timeout: 30000 });
  65  | 
  66  |   // Wait for password form
  67  |   await expect(page.locator('form')).toBeVisible();
  68  | 
  69  |   // Current Password
  70  |   // await page
  71  |   //   .locator('input[type="password"]')
  72  |   //   .nth(0)
  73  |   //   .fill(currentPassword);
  74  | 
  75  |   await expect(
  76  | 
  77  | page.locator('input[type="password"]').first()
  78  | 
  79  | ).toBeVisible({ timeout: 30000 });
  80  | 
  81  |   // New Password
  82  |   await page
  83  |     .locator('input[type="password"]')
  84  |     .nth(1)
  85  |     .fill(newPassword);
  86  | 
  87  |   // Confirm Password
  88  |   await page
  89  |     .locator('input[type="password"]')
  90  |     .nth(2)
  91  |     .fill(newPassword);
  92  | 
  93  |   // Save Password
  94  |   await page.getByRole('button', { name: /save/i }).click();
  95  | 
  96  |   // Success Message
  97  |   await expect(
  98  |     page.getByText(/success|updated|changed/i)
  99  |   ).toBeVisible({ timeout: 30000 });
  100 | 
  101 |   // Logout (if available)
  102 |   const logoutBtn = page.getByRole('button', {
  103 |     name: /logout/i
  104 |   });
  105 | 
  106 |   if (await logoutBtn.isVisible()) {
  107 |     await logoutBtn.click();
  108 |   }
  109 | 
  110 |   // Login again with new password
  111 |   await page.goto(
  112 |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  113 |   );
  114 | 
  115 |   await page.locator('#input28').fill(email);
  116 |   await page.locator('#form20 input[type="submit"]').click();
  117 | 
  118 |   await page.locator('#input54').fill(newPassword);
  119 |   await page.locator('#form46 input[type="submit"]').click();
  120 | 
  121 |   // Verify successful login
  122 |   await expect(
```