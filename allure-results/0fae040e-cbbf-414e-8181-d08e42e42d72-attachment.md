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
Received string:  "Edit Profile"
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    8 × locator resolved to <html>…</html>
      - unexpected value "Edit Profile"
    - waiting for "https://signin.johndeere.com/oauth2/ausabzzga86EIeR4l1t7/v1/authorize?client_id=0oa4tbcmsrJlPC47S5d7&code_challenge=_UIqONrIjg_BKQDRrOXSpR4Py_yakrO7udVkOKzfxj8&code_challenge_method=S256&nonce=rzcNSZ…" navigation to finish...

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
  52 | 
  53 |   // Success message
  54 |  
  55 |  await expect(
  56 | 
  57 | page.getByText('Your personal information is saved.')
  58 | 
  59 | ).toBeVisible({ timeout: 30000 });
  60 | 
  61 | const mobileField = page.locator("//input[@id='mobile' and @type='tel']");
  62 | 
  63 | // Scroll to field
  64 | 
  65 | await mobileField.scrollIntoViewIfNeeded();
  66 | 
  67 | // Verify field
  68 | 
  69 | await expect(mobileField).toBeVisible();
  70 | 
  71 | await expect(mobileField).toBeEnabled();
  72 | // Clear existing value
  73 | 
  74 | await mobileField.clear();
  75 | 
  76 | // Enter new mobile number
  77 | 
  78 | await mobileField.fill('9876543222');
  79 | 
  80 | await page.locator('//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]').click();
  81 | 
  82 | 
  83 | await expect(
  84 | 
  85 | page.getByText('Updated Successfully.')
  86 | 
  87 | ).toBeVisible({ timeout: 30000 });
  88 | const closeButton = page.locator("//*[@id=':ru:']/button").click();
  89 | 
  90 | 
  91 | 
  92 | 
  93 | });
```