# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Edit-profile.spec.ts >> Edit Profile and Change Password
- Location: tests\Edit-profile.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/Personal Information/i)
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 60000ms
  - waiting for getByText(/Personal Information/i)
    - waiting for "https://signin.johndeere.com/login/token/redirect?stateToken=02.id.cihiXvtXDJ3_l9g_oGSn4drvAtWbc8hOC0WvrAmY" navigation to finish...
    - navigated to "https://account.deere.com/actmgmt/callback?code=ascZXa1VzOdAN4QF_Ikq6gXDMlzSR4La_2oFKM8vxHk&state=M0Wnp394zk37qq7Hb690XDK69pTqJ7tgzhVYEAF7UdKeE154i4j2uqEbVFzOZz7P"
  - Protocol error (Runtime.callFunctionOn): Internal server error, session closed.

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
  15  | //   await expect(page).toHaveTitle(/Sign In/i);
  16  | 
  17  |   // Login
  18  |   await page.locator('#input28').fill(email);
  19  |   await page.locator("//*[@id='form20']/div[2]/input").click();
  20  | 
  21  |   await page.locator('#input54').fill(currentPassword);
  22  |   await page.locator("#form46 input[type='submit']").click();
  23  | 
  24  |   await page.waitForLoadState('domcontentloaded');
  25  | 
  26  |   // Step 3: Verify Edit Profile page opened
  27  |   await expect(
  28  |     page.getByText(/Personal Information/i)
> 29  |   ).toBeVisible({ timeout: 60000 });
      |     ^ Error: expect(locator).toBeVisible() failed
  30  | 
  31  |   // Step 4: Edit First Name
  32  |   const firstName = page.locator('//input[@name="firstName"]');
  33  | 
  34  |   await expect(firstName).toBeVisible();
  35  |   await firstName.clear();
  36  |   await firstName.fill('Sunil S');
  37  | 
  38  |   // Step 5: Save
  39  |   await page.locator('//*[@id="addressDetailsId"]/div[5]/button[2]').click();
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
  50  |   const mobileField = page.locator('//input[@id="mobile" and @type="tel"]');
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
  73  | 
  74  | 
  75  |   // Step 11: Scroll Up
  76  |   await page.mouse.wheel(0, -1000);
  77  | 
  78  |   // Step 12: Click Change Password
  79  |   await page.getByRole('button', { name: /change password/i }).click();
  80  | 
  81  |   // Step 13: Enter Current Password
  82  |   await page.locator('//*[@id="credentialsForm"]').fill(currentPassword);
  83  | 
  84  |   // Step 14: Enter New Password
  85  |   await page.locator('//*[@id=":rl:"]').fill(newPassword);
  86  | 
  87  |   // Step 15: Enter Confirm Password
  88  |   await page.locator('//*[@id="credentialsForm"]//div[3]//input"]').fill(newPassword);
  89  | 
  90  |   // Step 16: Verify Password Guideline
  91  |   await expect(
  92  |     page.getByText(/password/i)
  93  |   ).toBeVisible();
  94  | 
  95  |   // Step 17: Save Password
  96  |   await page.getByRole('button', { name: /^Save$/ }).click();
  97  | 
  98  |   // Step 18: Verify Password Changed Successfully
  99  |   await expect(
  100 |     page.getByText(/success/i)
  101 |   ).toBeVisible({ timeout: 30000 });
  102 | 
  103 |   // Step 19: Logout
  104 |   await page.getByRole('button', { name: /logout/i }).click();
  105 | 
  106 |   // Step 20: Open URL Again
  107 |   await page.goto(
  108 |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  109 |   );
  110 | 
  111 |   // Step 21: Login with New Password
  112 |   await page.locator('#input28').fill(email);
  113 |   await page.locator("//*[@id='form20']/div[2]/input").click();
  114 | 
  115 |   await page.locator('#input54').fill(newPassword);
  116 |   await page.locator("#form46 input[type='submit']").click();
  117 | 
  118 |   await page.waitForLoadState('networkidle');
  119 | 
  120 |   await expect(
  121 |     page.getByText(/Personal Information/i)
  122 |   ).toBeVisible({ timeout: 60000 });
  123 | 
  124 | });
```