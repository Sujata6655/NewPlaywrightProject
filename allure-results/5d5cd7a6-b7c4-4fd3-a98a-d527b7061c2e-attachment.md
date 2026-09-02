# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test.spec.ts >> Edit Profile
- Location: tests\test.spec.ts:4:5

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
    - waiting for "https://signin.johndeere.com/login/token/redirect?stateToken=02.id.oYm2XRj-KQpuv4Ri5GuuVFVp-mPIAhjcEmQWxY-F" navigation to finish...
  - Protocol error (Runtime.callFunctionOn): Internal server error, session closed.

```

```yaml
- main:
  - heading "John Deere logo logo" [level=1]:
    - img "John Deere logo logo"
  - heading "Sign In" [level=2]
  - text: sunil.yadav@yopmail.com
  - alert
  - text: Password
  - textbox "Password":
    - /placeholder: ""
    - text: Test@111111
  - text: 
  - button "Sign In" [disabled]
  - link "Forgot Username or Password":
    - /url: https://account.deere.com/actmgmt/forgotpassword?TARGET=https://account.deere.com
  - link "Back to sign in":
    - /url: "#"
- link "Contact Us":
  - /url: "https://account-helppages.deere.com/signin-help "
- text: Copyright © 2026 Deere & Company. All Rights Reserved.
```

# Test source

```ts
  1  | 
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | test('Edit Profile', async ({ page }) => {
  5  | 
  6  |   const email = 'sunil.yadav@yopmail.com';
  7  |   const password = 'Test@111111';
  8  | 
  9  |   await page.goto(
  10 |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  11 |   );
  12 | 
  13 |   // Username
  14 |   await page.locator('#input28').fill(email);
  15 | 
  16 |   // Next
  17 |   await page.locator("//*[@id='form20']/div[2]/input").click();
  18 | 
  19 |   // Password
  20 |   await page.locator('#input54').fill(password);
  21 | 
  22 |   // Sign In
  23 |   await page.locator("#form46 input[type='submit']").click();
  24 | 
  25 |   await page.waitForLoadState('networkidle');
  26 | 
  27 |   // Verify Personal Information section
  28 |   await expect(
  29 |     page.getByText(/Personal Information/i)
> 30 |   ).toBeVisible({ timeout: 60000 });
     |     ^ Error: expect(locator).toBeVisible() failed
  31 | 
  32 |   // First Name
  33 |   const nameField = page.locator('//*[@id=":r2:"]');
  34 | 
  35 |   await expect(nameField).toBeVisible();
  36 |   await expect(nameField).toBeEnabled();
  37 | 
  38 |   await nameField.clear();
  39 |   await nameField.fill('Sunil S');
  40 | 
  41 |   // Save Personal Information
  42 |   await page.locator('//*[@id="addressDetailsId"]/div[5]/button[2]').click();
  43 | 
  44 |   await expect(
  45 |     page.getByText(/Your personal information is saved/i)
  46 |   ).toBeVisible({ timeout: 30000 });
  47 | 
  48 |   // Mobile Number
  49 |  // Mobile Number
  50 | const mobileField = page.locator("//input[@id='mobile' and @type='tel']");
  51 | 
  52 | await mobileField.scrollIntoViewIfNeeded();
  53 | await expect(mobileField).toBeVisible();
  54 | 
  55 | // Clear existing number
  56 | await mobileField.click();
  57 | await mobileField.press('Control+A');
  58 | await mobileField.press('Backspace');
  59 | 
  60 | // Enter new number
  61 | await mobileField.fill('9876543222');
  62 | 
  63 | // Move focus out so Save button gets enabled
  64 | await page.keyboard.press('Tab');
  65 | 
  66 | // Save
  67 | const saveButton = page.getByRole('button', { name: /^Save$/ });
  68 | 
  69 | await expect(saveButton).toBeEnabled({ timeout: 10000 });
  70 | await saveButton.click();
  71 | 
  72 | // Verify Success Message
  73 | await expect(
  74 |   page.getByText(/Updated Successfully/i)
  75 | ).toBeVisible({ timeout: 30000 });
  76 | 
  77 | // Close Popup
  78 | await page.locator("//*[@id=':ru:']/button").click();
  79 | });
```