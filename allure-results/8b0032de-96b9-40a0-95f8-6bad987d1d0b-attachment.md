# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Edit-profile.spec.ts >> Edit Profile
- Location: tests\Edit-profile.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Edit Profile"
Received: "John Deere - Sign In"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    8 × locator resolved to <html>…</html>
      - unexpected value "John Deere - Sign In"
    - waiting for "https://signin.johndeere.com/login/token/redirect?stateToken=02.id.GKW0OzNA2D5c6yUgYBLdIuWHW-OT13uLRL9J2Vey" navigation to finish...

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
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Edit Profile', async ({ page, browser, context }) => {
  4  | 
  5  |   const email = 'sunil.yadav@yopmail.com';
  6  |   const Password = 'Test@111111';
  7  |   
  8  | 
  9  | await page.goto('https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/');
  10 | //await expect(page).toHaveTitle('John Deere - Sign In');
  11 | const usernameInput = page.locator('#input28');
  12 |  await usernameInput.waitFor({ state: 'visible' });
  13 |  await usernameInput.fill(email);
  14 |  const nextButton = page.locator("//*[@id='form20']/div[2]/input").click();
  15 | 
  16 |  const passwordInput = page.locator('#input54');
  17 |   await usernameInput.waitFor({ state: 'visible' });
  18 |  await passwordInput.fill(Password);
  19 | // Sign In
  20 | 
  21 | 
  22 | page.waitForLoadState('networkidle'),
  23 | 
  24 | page.locator("#form46 input[type='submit']").click()
  25 | 
> 26 | await expect(page).toHaveTitle('Edit Profile');
     |                    ^ Error: expect(page).toHaveTitle(expected) failed
  27 | 
  28 | await expect(
  29 | 
  30 | await page
  31 | 
  32 | .frameLocator('iframe')
  33 | 
  34 | .getByText('Personal Information'));
  35 | 
  36 | 
  37 | 
  38 |  const nameField = page.locator('//*[@id=":r2:"]');
  39 | 
  40 | // Check field is visible and enabled
  41 | 
  42 | await expect(nameField).toBeVisible();
  43 | 
  44 | await expect(nameField).toBeEnabled();
  45 | const frame = page.frameLocator('iframe');
  46 | 
  47 | // Clear existing value
  48 | 
  49 | await nameField.clear();
  50 | 
  51 | // Enter new name
  52 | await nameField.fill('Sunil S');
  53 |  await usernameInput.waitFor({ state: 'visible' });
  54 | //click on save button
  55 | await page.locator('//*[@id="addressDetailsId"]/div[5]/button[2]').click();
  56 | // Verify success message is displayed
  57 | 
  58 | await expect(page.getByText(/success/i)).toBeVisible();
  59 | 
  60 | });
  61 | 
```