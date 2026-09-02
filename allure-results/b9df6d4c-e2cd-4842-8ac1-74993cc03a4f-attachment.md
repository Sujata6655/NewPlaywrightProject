# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Edit-profile.spec.ts >> Edit Profile
- Location: tests\Edit-profile.spec.ts:3:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /Sign In/i
Received string:  ""
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    7 × locator resolved to <html>…</html>
      - unexpected value "Edit Profile"
    - waiting for "https://signin.johndeere.com/oauth2/ausabzzga86EIeR4l1t7/v1/authorize?client_id=0oa4tbcmsrJlPC47S5d7&code_challenge=jeTHxK3zaw6bNoOJPxX9Sls1QjY7sBtFrbjukzhij_U&code_challenge_method=S256&nonce=juZzLr…" navigation to finish...
    - navigated to "https://signin.johndeere.com/oauth2/ausabzzga86EIeR4l1t7/v1/authorize?client_id=0oa4tbcmsrJlPC47S5d7&code_challenge=jeTHxK3zaw6bNoOJPxX9Sls1QjY7sBtFrbjukzhij_U&code_challenge_method=S256&nonce=juZzLr…"
    2 × locator resolved to <html>…</html>
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
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Edit Profile', async ({ page }) => {
  4  | 
  5  |   const email = 'sunil.yadav@yopmail.com';
  6  |   const password = 'Test@111111';
  7  | 
  8  |   // Open page
  9  |   await page.goto(
  10 |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  11 |   );
  12 | 
> 13 |   await expect(page).toHaveTitle(/Sign In/i);
     |                      ^ Error: expect(page).toHaveTitle(expected) failed
  14 | 
  15 |   // Username
  16 |   const usernameInput = page.locator('#input28');
  17 |   await usernameInput.waitFor({ state: 'visible' });
  18 |   await usernameInput.fill(email);
  19 | 
  20 |   // Next
  21 |   await page.locator("//*[@id='form20']/div[2]/input").click();
  22 | 
  23 |   // Password
  24 |   const passwordInput = page.locator('#input54');
  25 |   await passwordInput.waitFor({ state: 'visible' });
  26 |   await passwordInput.fill(password);
  27 | 
  28 |   // Sign In
  29 |   await page.locator("#form46 input[type='submit']").click();
  30 | 
  31 |   // Wait for page load
  32 |   await page.waitForLoadState('networkidle');
  33 | 
  34 |   // Verify Personal Information section
  35 |   await expect(
  36 |     page.getByText(/Personal Information/i)
  37 |   ).toBeVisible({ timeout: 60000 });
  38 | 
  39 |   // First Name field
  40 |   const nameField = page.locator('//*[@id=":r2:"]');
  41 | 
  42 |   await expect(nameField).toBeVisible();
  43 |   await expect(nameField).toBeEnabled();
  44 | 
  45 |   // Update value
  46 |   await nameField.clear();
  47 |   await nameField.fill('Sunil S');
  48 | 
  49 |   // Save
  50 |   await page.locator('//*[@id="addressDetailsId"]/div[5]/button[2]').click();
  51 | 
  52 |   // Success message
  53 | await expect(
  54 | 
  55 | page.getByText(/Your personal information is saved/i)
  56 | 
  57 | ).toBeVisible({ timeout: 20000 });
  58 | 
  59 | });
```