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
Error: locator.click: Test timeout of 120000ms exceeded.
Call log:
  - waiting for locator('text=ok').first()
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
    - waiting for element to be visible, enabled and stable
    - element is not visible
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

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
            - textbox [ref=f4e30]
          - generic [ref=f4e31]:
            - paragraph [ref=f4e32]: New Password *
            - textbox [ref=f4e35]
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
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test('Edit Profile and Change Password', async ({ page }) => {
  4   |   test.setTimeout(120000);
  5   | 
  6   |   const email = 'sunil.yadav@yopmail.com';
  7   |   const currentPassword = 'Test@111114';
  8   |   const newPassword = 'Test@111115';
  9   | 
  10  |   // Step 1: Open URL
  11  |   await page.goto(
  12  |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  13  |   );
  14  | 
  15  |   // Step 2: Login
  16  |   await page.locator('#input28').fill(email);
  17  |   await page.locator('#form20 input[type="submit"]').click();
  18  | 
  19  |   await page.locator('#input54').fill(currentPassword);
  20  |   await page.locator('#form46 input[type="submit"]').click();
  21  | 
  22  |   // Step 3: Wait for Profile Page
  23  |   const firstName = page.locator('input[name="firstName"]');
  24  | 
  25  |   await expect(firstName).toBeVisible({
  26  |     timeout: 60000,
  27  |   });
  28  | 
  29  |   // Step 4: Update First Name
  30  |   await firstName.clear();
  31  |   await firstName.fill('Sunil S');
  32  | 
  33  |   // Step 5: Save Personal Information
  34  |   await page
  35  |     .locator('//*[@id="addressDetailsId"]/div[5]/button[2]')
  36  |     .click();
  37  | 
  38  |   await page.waitForTimeout(3000);
  39  | 
  40  |   // Step 6: Change Password
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
  52  |   // Step 7: Handle "Any unsaved information will be lost" popup
  53  |   const okButton = page.locator('text=ok');
  54  | 
  55  |   if (await okButton.count()) {
> 56  |     await okButton.first().click();
      |                            ^ Error: locator.click: Test timeout of 120000ms exceeded.
  57  |   }
  58  | 
  59  |   // Step 8: Wait for Password Fields
  60  |   const passwordFields = page.locator('input[type="password"]');
  61  | 
  62  |   await expect(passwordFields.first()).toBeVisible({
  63  |     timeout: 30000,
  64  |   });
  65  | 
  66  |   // Step 9: Enter Current Password
  67  |   await passwordFields.nth(0).fill(currentPassword);
  68  | 
  69  |   // Step 10: Enter New Password
  70  |   await passwordFields.nth(1).fill(newPassword);
  71  | 
  72  |   // Step 11: Confirm New Password
  73  |   await passwordFields.nth(2).fill(newPassword);
  74  | 
  75  |   // Step 12: Save Password
  76  |   await page.getByRole('button', { name: /save/i }).click();
  77  | 
  78  |   // Step 13: Wait for Success Message
  79  |   await page.waitForTimeout(5000);
  80  | 
  81  |   // Step 14: Open Profile Dropdown
  82  |   const profileDropdown = page.locator(
  83  |     '/html/body/div/div/div/div/div/header/div/div/div/button'
  84  |   );
  85  | 
  86  |   await expect(profileDropdown).toBeVisible({
  87  |     timeout: 30000,
  88  |   });
  89  | 
  90  |   await profileDropdown.click();
  91  | 
  92  |   // Step 15: Logout
  93  |   const logoutButton = page.locator(
  94  |     '/html/body/div[2]/div[3]/ul/li'
  95  |   );
  96  | 
  97  |   await expect(logoutButton).toBeVisible({
  98  |     timeout: 10000,
  99  |   });
  100 | 
  101 |   await logoutButton.click();
  102 | 
  103 |   // Step 16: Open URL Again
  104 |   await page.goto(
  105 |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  106 |   );
  107 | 
  108 |   // Step 17: Login With New Password
  109 |   await page.locator('#input28').fill(email);
  110 |   await page.locator('#form20 input[type="submit"]').click();
  111 | 
  112 |   await page.locator('#input54').fill(newPassword);
  113 |   await page.locator('#form46 input[type="submit"]').click();
  114 | 
  115 |   // Step 18: Verify Successful Login
  116 |   await expect(
  117 |     page.locator('input[name="firstName"]')
  118 |   ).toBeVisible({
  119 |     timeout: 60000,
  120 |   });
  121 | 
  122 |   console.log('Successfully logged in with new password');
  123 | });
```