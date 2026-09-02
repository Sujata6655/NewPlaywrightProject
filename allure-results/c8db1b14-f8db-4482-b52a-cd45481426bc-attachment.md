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
    - waiting for "https://signin.johndeere.com/login/token/redirect?stateToken=02.id.eXGjwI_duDZEAsR9nZ5QEmlP-l5OMUqo1Mr2pVMV" navigation to finish...
    - navigated to "https://account.deere.com/actmgmt/callback?code=6aN6-XTcPTDlM8pO3zVjuJ1JjPH0kj3_umUU-5NHwRo&state=ASGH4zSoyN0ItFhpK43iRpwu3zyZNkY1StPyo0XL4ydn76oXC7VTf1WVYqBAVqM2"
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
  23  |   await page.waitForLoadState('networkidle');
  24  | 
  25  | 
  26  | 
  27  | 
  28  |   // Step 3: Verify Edit Profile page opened
  29  |   await expect(
  30  |     page.getByText(/Personal Information/i)
> 31  |   ).toBeVisible({ timeout: 60000 });
      |     ^ Error: expect(locator).toBeVisible() failed
  32  | 
  33  |   // Step 4: Edit First Name
  34  |   const firstName = page.locator('//input[@name="firstName"]');
  35  | 
  36  |   await expect(firstName).toBeVisible();
  37  |   await firstName.clear();
  38  |   await firstName.fill('Sunil S');
  39  | 
  40  |   // Step 5: Save
  41  |   await page.locator('//*[@id="addressDetailsId"]/div[5]/button[2]').click();
  42  | 
  43  |   // Step 6: Verify Success Message
  44  |   await expect(
  45  |     page.getByText(/Your personal information is saved/i)
  46  |   ).toBeVisible({ timeout: 30000 });
  47  | 
  48  |   // Step 7: Scroll Down
  49  |   await page.mouse.wheel(0, 1000);
  50  | 
  51  |   // Step 8: Update Mobile Number
  52  |   const mobileField = page.locator('//input[@id="mobile" and @type="tel"]');
  53  | 
  54  |   await mobileField.scrollIntoViewIfNeeded();
  55  |   await mobileField.click();
  56  |   await mobileField.press('Control+A');
  57  |   await mobileField.press('Backspace');
  58  |   await mobileField.fill('9876543222');
  59  | 
  60  |   await page.keyboard.press('Tab');
  61  | 
  62  |   // Step 9: Save Mobile Number
  63  |   await page
  64  |     .locator('//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]')
  65  |     .click();
  66  | 
  67  |   // Step 10: Verify Success Message
  68  |   await expect(
  69  |     page.getByText(/Updated Successfully/i)
  70  |   ).toBeVisible({ timeout: 30000 });
  71  | 
  72  |   // Close Success Popup if displayed
  73  |   // await page.locator("//*[@id=':ru:']/button").click();
  74  | 
  75  | 
  76  | 
  77  |   // Step 11: Scroll Up
  78  |   await page.mouse.wheel(0, -1000);
  79  | 
  80  |   // Step 12: Click Change Password
  81  |   await page.getByRole('button', { name: /change password/i }).click();
  82  | 
  83  |   // Step 13: Enter Current Password
  84  |   await page.locator('//*[@id="credentialsForm"]').fill(currentPassword);
  85  | 
  86  |   // Step 14: Enter New Password
  87  |   await page.locator('//*[@id=":rl:"]').fill(newPassword);
  88  | 
  89  |   // Step 15: Enter Confirm Password
  90  |   await page.locator('//*[@id="credentialsForm"]//div[3]//input"]').fill(newPassword);
  91  | 
  92  |   // Step 16: Verify Password Guideline
  93  |   await expect(
  94  |     page.getByText(/password/i)
  95  |   ).toBeVisible();
  96  | 
  97  |   // Step 17: Save Password
  98  |   await page.getByRole('button', { name: /^Save$/ }).click();
  99  | 
  100 |   // Step 18: Verify Password Changed Successfully
  101 |   await expect(
  102 |     page.getByText(/success/i)
  103 |   ).toBeVisible({ timeout: 30000 });
  104 | 
  105 |   // Step 19: Logout
  106 |   await page.getByRole('button', { name: /logout/i }).click();
  107 | 
  108 |   // Step 20: Open URL Again
  109 |   await page.goto(
  110 |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  111 |   );
  112 | 
  113 |   // Step 21: Login with New Password
  114 |   await page.locator('#input28').fill(email);
  115 |   await page.locator("//*[@id='form20']/div[2]/input").click();
  116 | 
  117 |   await page.locator('#input54').fill(newPassword);
  118 |   await page.locator("#form46 input[type='submit']").click();
  119 | 
  120 |   await page.waitForLoadState('networkidle');
  121 | 
  122 |   await expect(
  123 |     page.getByText(/Personal Information/i)
  124 |   ).toBeVisible({ timeout: 60000 });
  125 | 
  126 | });
```