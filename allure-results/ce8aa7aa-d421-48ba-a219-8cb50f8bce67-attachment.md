# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Edit-profile.spec.ts >> Edit Profile and Change Password
- Location: tests\Edit-profile.spec.ts:3:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /Sign In/i
Received string:  ""
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    9 × locator resolved to <html>…</html>
      - unexpected value "Edit Profile"
    - waiting for "https://signin.johndeere.com/oauth2/ausabzzga86EIeR4l1t7/v1/authorize?client_id=0oa4tbcmsrJlPC47S5d7&code_challenge=M9ijaouT1KBsFWTadxESTCH4u6JwkWsvXglrTIlAW8Y&code_challenge_method=S256&nonce=wCDLTb…" navigation to finish...
    - navigated to "https://signin.johndeere.com/oauth2/ausabzzga86EIeR4l1t7/v1/authorize?client_id=0oa4tbcmsrJlPC47S5d7&code_challenge=M9ijaouT1KBsFWTadxESTCH4u6JwkWsvXglrTIlAW8Y&code_challenge_method=S256&nonce=wCDLTb…"
    - locator resolved to <html>…</html>
    - unexpected value ""

```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - link "Contact Us" [ref=f1e4] [cursor=pointer]:
    - /url: "https://account-helppages.deere.com/signin-help "
  - generic [ref=f1e5]: Copyright © 2026 Deere & Company. All Rights Reserved.
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test('Edit Profile and Change Password', async ({ page }) => {
  4   | 
  5   |   const email = 'sunil.yadav@yopmail.com';
  6   |   const currentPassword = 'Test@111111';
  7   |   const newPassword = 'Test@111114';
  8   | 
  9   |   // Step 1: Open URL
  10  |   await page.goto(
  11  |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  12  |   );
  13  | 
  14  |   // Step 2: Verify Sign In title
> 15  |   await expect(page).toHaveTitle(/Sign In/i);
      |                      ^ Error: expect(page).toHaveTitle(expected) failed
  16  | 
  17  |   // Login
  18  |   await page.locator('#input28').fill(email);
  19  |   await page.locator("//*[@id='form20']/div[2]/input").click();
  20  | 
  21  |   await page.locator('#input54').fill(currentPassword);
  22  |   await page.locator("#form46 input[type='submit']").click();
  23  | 
  24  |   await page.waitForLoadState('networkidle');
  25  | 
  26  |   // Step 3: Verify Edit Profile page opened
  27  |   await expect(
  28  |     page.getByText(/Personal Information/i)
  29  |   ).toBeVisible({ timeout: 60000 });
  30  | 
  31  |   // Step 4: Edit First Name
  32  |   const firstName = page.locator('//*[@id=":r2:"]');
  33  | 
  34  |   await expect(firstName).toBeVisible();
  35  |   await firstName.clear();
  36  |   await firstName.fill('Sunil S');
  37  | 
  38  |   // Step 5: Save
  39  |   await page.locator('//*[@[@id=":ressDetailsId"]/div[5]/button[2]').click();
  40  | 
  41  |   // Step 6: Verify Success Message
  42  |   await expect(
  43  |     page.getByText(/Your personal information is saved/i)
  44  |   ).toBeVisible({ timeout: 30000 });
  45  | 
  46  |   // Step 7: Scroll Down
  47  |   await page.mouse.wheel(0, 1000);
  48  | 
  49  |   // Step 8: Update Mobile Number
  50  |   const mobileField = page.locator('#mobile');
  51  | 
  52  |   await mobileField.scrollIntoViewIfNeeded();
  53  |   await mobileField.click();
  54  |   await mobileField.press('Control+A');
  55  |   await mobileField.press('Backspace');
  56  |   await mobileField.fill('9876543222');
  57  | 
  58  |   await page.keyboard.press('Tab');
  59  | 
  60  |   // Step 9: Save Mobile Number
  61  |   await page
  62  |     .locator('//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]')
  63  |     .click();
  64  | 
  65  |   // Step 10: Verify Success Message
  66  |   await expect(
  67  |     page.getByText(/Updated Successfully/i)
  68  |   ).toBeVisible({ timeout: 30000 });
  69  | 
  70  |   // Close Success Popup if displayed
  71  |   // await page.locator("//*[@id=':ru:']/button").click();
  72  | 
  73  |   // Step 11: Scroll Up
  74  |   await page.mouse.wheel(0, -1000);
  75  | 
  76  |   // Step 12: Click Change Password
  77  |   await page.getByRole('button', { name: /change password/i }).click();
  78  | 
  79  |   // Step 13: Enter Current Password
  80  |   await page.locator('//*[@id="credentialsForm"]').fill(currentPassword);
  81  | 
  82  |   // Step 14: Enter New Password
  83  |   await page.locator('//*[@id=":rl:"]').fill(newPassword);
  84  | 
  85  |   // Step 15: Enter Confirm Password
  86  |   await page.locator('//*[@id="credentialsForm"]//div[3]//input"]').fill(newPassword);
  87  | 
  88  |   // Step 16: Verify Password Guideline
  89  |   await expect(
  90  |     page.getByText(/password/i)
  91  |   ).toBeVisible();
  92  | 
  93  |   // Step 17: Save Password
  94  |   await page.getByRole('button', { name: /^Save$/ }).click();
  95  | 
  96  |   // Step 18: Verify Password Changed Successfully
  97  |   await expect(
  98  |     page.getByText(/success/i)
  99  |   ).toBeVisible({ timeout: 30000 });
  100 | 
  101 |   // Step 19: Logout
  102 |   await page.getByRole('button', { name: /logout/i }).click();
  103 | 
  104 |   // Step 20: Open URL Again
  105 |   await page.goto(
  106 |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  107 |   );
  108 | 
  109 |   // Step 21: Login with New Password
  110 |   await page.locator('#input28').fill(email);
  111 |   await page.locator("//*[@id='form20']/div[2]/input").click();
  112 | 
  113 |   await page.locator('#input54').fill(newPassword);
  114 |   await page.locator("#form46 input[type='submit']").click();
  115 | 
```