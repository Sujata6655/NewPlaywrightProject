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

Locator: locator('form')
Expected: visible
Error: strict mode violation: locator('form') resolved to 3 elements:
    1) <form mt="2" id="profileDetailsId">…</form> aka locator('#profileDetailsId')
    2) <form id="profilePhoneDetailsId">…</form> aka locator('#profilePhoneDetailsId')
    3) <form id="emailIdForm" class="row m-0 align-items-center">…</form> aka locator('#emailIdForm')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('form')

```

# Page snapshot

```yaml
- generic [ref=f4e1]:
  - generic [ref=f4e6]:
    - banner [ref=f4e7]:
      - generic [ref=f4e8]:
        - link [ref=f4e9] [cursor=pointer]:
          - /url: /
        - button [ref=f4e13] [cursor=pointer]: Hi, Sunil S
    - generic [ref=f4e18]:
      - status [ref=f4e19]:
        - generic [ref=f4e23]:
          - paragraph [ref=f4e24]: Success
          - paragraph [ref=f4e25]: Your personal information is saved.
        - button [ref=f4e28] [cursor=pointer]
      - generic [ref=f4e32]:
        - heading [level=3] [ref=f4e33]: Manage Account
        - separator [ref=f4e34]
        - generic [ref=f4e35]:
          - generic [ref=f4e36]:
            - paragraph [ref=f4e37]: sign-in information
            - paragraph [ref=f4e38]: Username
            - paragraph [ref=f4e39]: sunil.yadav@yopmail.com
            - paragraph [ref=f4e40]: Want to change your password?
            - button [ref=f4e41] [cursor=pointer]: Change Password
          - separator [ref=f4e42]
        - generic [ref=f4e43]:
          - paragraph [ref=f4e45]: Personal Information
          - generic [ref=f4e48]:
            - generic [ref=f4e49]:
              - generic [ref=f4e50]:
                - paragraph [ref=f4e51]: First Name *
                - textbox [ref=f4e54]: Sunil S
              - generic [ref=f4e55]:
                - paragraph [ref=f4e56]: Last Name *
                - textbox [ref=f4e59]: yadav
            - generic [ref=f4e60]:
              - generic [ref=f4e62]:
                - paragraph [ref=f4e63]: Country *
                - combobox [ref=f4e64]
              - generic [ref=f4e66]:
                - paragraph [ref=f4e67]: Address line 1 *
                - textbox [ref=f4e70]: magarpatta
              - generic [ref=f4e72]:
                - paragraph [ref=f4e73]: City *
                - textbox [ref=f4e76]: PUNE
              - generic [ref=f4e78]:
                - paragraph [ref=f4e79]: Postal Code *
                - textbox [ref=f4e82]: "411027"
              - generic [ref=f4e83]:
                - button [disabled] [ref=f4e84]: Cancel
                - button [disabled] [ref=f4e85]: Save
          - separator [ref=f4e86]
          - alert [ref=f4e87]:
            - generic [ref=f4e91]: We highly recommend you verify your phone number. Once verified, you can recover your User Account using SMS text as identity verification. You will also have the added benefit of receiving SMS text communications from John Deere.Verify your phone number.
          - generic [ref=f4e97]:
            - generic [ref=f4e98]:
              - paragraph [ref=f4e99]: Phone Number
              - img [ref=f4e100] [cursor=pointer]
            - generic [ref=f4e104]:
              - textbox [ref=f4e105]:
                - /placeholder: 1 (702) 123-4567
                - text: "+919876543222"
              - button [ref=f4e107]
          - separator [ref=f4e110]
        - generic [ref=f4e115]:
          - paragraph [ref=f4e116]: Email Address *
          - textbox [disabled] [ref=f4e120]: sunil.yadav@yopmail.com
          - generic [ref=f4e123]: Edit or change of email address is not allowed if Username is an email address.
        - separator [ref=f4e124]
        - button [ref=f4e125] [cursor=pointer]: Back to previous page
    - contentinfo [ref=f4e127]:
      - navigation [ref=f4e128]:
        - list [ref=f4e129]:
          - listitem [ref=f4e130]:
            - link [ref=f4e131] [cursor=pointer]:
              - /url: https://www.deere.com/en/privacy-and-data/
              - text: Privacy and Data
          - listitem [ref=f4e132]:
            - link [ref=f4e133] [cursor=pointer]:
              - /url: https://www.deere.com/en/privacy-and-data/myjohndeere/terms/
              - text: Terms of Use
          - listitem [ref=f4e134]:
            - link [ref=f4e135] [cursor=pointer]:
              - /url: https://account-helppages.deere.com/contact-us
              - text: Contact Us
      - generic [ref=f4e136]: Copyright © 2026 Deere & Company. All Rights Reserved.
  - dialog [ref=f4e140]:
    - img [ref=f4e142] [cursor=pointer]
    - generic [ref=f4e144]:
      - paragraph [ref=f4e148]: Any unsaved information will be lost.
      - generic [ref=f4e149]:
        - button "Cancel" [ref=f4e150] [cursor=pointer]
        - button "ok" [ref=f4e151] [cursor=pointer]
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
  22  |     .toBeVisible({ timeout: 60000 });
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
  34  | 
  35  |  // Verify Success Message
  36  |   await expect(
  37  |     page.getByText(/Your personal information is saved/i)
  38  |   ).toBeVisible({ timeout: 20000 });
  39  | 
  40  |   // Close success popup if displayed
  41  |   // const closeButton = page.locator(
  42  |   //   '//*[@id="main-content"]/div/div[1]/div/div[3]/div/button'
  43  |   // );
  44  | 
  45  |   // if (await closeButton.isVisible()) {
  46  |   //   await closeButton.click();
  47  |   // }
  48  | 
  49  |   // Click Change Password
  50  |   const changePasswordButton = page.locator(
  51  |     '//*[@id="sigInInfoId"]/div/button'
  52  |   );
  53  | 
  54  |   await expect(changePasswordButton)
  55  |     .toBeVisible({ timeout: 30000 });
  56  | 
  57  |   await changePasswordButton.click();
  58  | 
  59  |   // Wait for password form
> 60  |   await expect(page.locator('form')).toBeVisible();
      |                                      ^ Error: expect(locator).toBeVisible() failed
  61  | 
  62  |   // Current Password
  63  |   // await page
  64  |   //   .locator('input[type="password"]')
  65  |   //   .nth(0)
  66  |   //   .fill(currentPassword);
  67  | 
  68  |   await expect(
  69  | 
  70  | page.locator('input[type="password"]').first()
  71  | 
  72  | ).toBeVisible({ timeout: 30000 });
  73  | 
  74  |   // New Password
  75  |   await page
  76  |     .locator('input[type="password"]')
  77  |     .nth(1)
  78  |     .fill(newPassword);
  79  | 
  80  |   // Confirm Password
  81  |   await page
  82  |     .locator('input[type="password"]')
  83  |     .nth(2)
  84  |     .fill(newPassword);
  85  | 
  86  |   // Save Password
  87  |   await page.getByRole('button', { name: /save/i }).click();
  88  | 
  89  |   // Success Message
  90  |   await expect(
  91  |     page.getByText(/success|updated|changed/i)
  92  |   ).toBeVisible({ timeout: 30000 });
  93  | 
  94  |   // Logout (if available)
  95  |   const logoutBtn = page.getByRole('button', {
  96  |     name: /logout/i
  97  |   });
  98  | 
  99  |   if (await logoutBtn.isVisible()) {
  100 |     await logoutBtn.click();
  101 |   }
  102 | 
  103 |   // Login again with new password
  104 |   await page.goto(
  105 |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  106 |   );
  107 | 
  108 |   await page.locator('#input28').fill(email);
  109 |   await page.locator('#form20 input[type="submit"]').click();
  110 | 
  111 |   await page.locator('#input54').fill(newPassword);
  112 |   await page.locator('#form46 input[type="submit"]').click();
  113 | 
  114 |   // Verify successful login
  115 |   await expect(
  116 |     page.locator('input[name="firstName"]')
  117 |   ).toBeVisible({ timeout: 60000 });
  118 | });
```