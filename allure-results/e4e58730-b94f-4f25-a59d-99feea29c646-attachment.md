# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Edit-profile.spec.ts >> Edit Profile
- Location: tests\Edit-profile.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//*[@id=":r2:"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//*[@id=":r2:"]')

```

```yaml
- progressbar:
  - img
- banner:
  - link "Go to home":
    - /url: /
    - img "John Deere Logo"
- progressbar:
  - img
- separator
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
  26 | await expect(page).toHaveTitle('Edit Profile');
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
> 42 | await expect(nameField).toBeVisible();
     |                         ^ Error: expect(locator).toBeVisible() failed
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