# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Edit-profile.spec.ts >> Forgot password
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
- paragraph: "AuthSdkError: Unable to retrieve OAuth redirect params from storage"
- contentinfo:
  - navigation "footer navigation":
    - list
  - text: Copyright © 2026 Deere & Company. All Rights Reserved.
- list
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Forgot password', async ({ page, browser, context }) => {
  4  | 
  5  |   const email = 'sunil.yadav@yopmail.com';
  6  |   const Password = 'Test@111111';
  7  |   
  8  | 
  9  | await page.goto('https://signin.johndeere.com/oauth2/ausabzzga86EIeR4l1t7/v1/authorize?client_id=0oa4tbcmsrJlPC47S5d7&code_challenge=Phz2ae48l71MuAJG9hz4WSR1NSb_-cLodzlAkfu5j9g&code_challenge_method=S256&nonce=H7EwyRcXtMaXIH6KlUdMOwsLWZHQpM4fibDG1vaypAs3eiExNlnluuVZR0Vxih6f&redirect_uri=https%3A%2F%2Faccount.deere.com%2Factmgmt%2Fcallback&response_type=code&state=twunIfKMwbT6BLSSihNhoIArTzyD3DSEAOdtfr3dz0dWsjOZFl6rv0C3GLf7d8CO&scope=profile%20openid');
  10 | await expect(page).toHaveTitle('John Deere - Sign In');
  11 | const usernameInput = page.locator('#input28');
  12 |  await usernameInput.waitFor({ state: 'visible' });
  13 |  await usernameInput.fill(email);
  14 |  const nextButton = page.locator("//*[@id='form20']/div[2]/input").click();
  15 | 
  16 |  const passwordInput = page.locator('#input54');
  17 |   await usernameInput.waitFor({ state: 'visible' });
  18 |  await passwordInput.fill(Password);
  19 | 
  20 |  await page.locator("#form46 input[type='submit']").click()
  21 | 
  22 |   await page.waitForLoadState('domcontentloaded');
  23 | 
  24 |  
  25 |  await expect(page).toHaveTitle('Edit Profile');
  26 |  const nameField = page.locator('//*[@id=":r2:"]');
  27 | 
  28 | // Check field is visible and enabled
  29 | 
> 30 | await expect(nameField).toBeVisible();
     |                         ^ Error: expect(locator).toBeVisible() failed
  31 | 
  32 | await expect(nameField).toBeEnabled();
  33 | const frame = page.frameLocator('iframe');
  34 | 
  35 | // Clear existing value
  36 | 
  37 | await nameField.clear();
  38 | 
  39 | // Enter new name
  40 | await nameField.fill('Sunil S');
  41 |  await usernameInput.waitFor({ state: 'visible' });
  42 | //click on save button
  43 | await page.locator('//*[@id="addressDetailsId"]/div[5]/button[2]').click();
  44 | // Verify success message is displayed
  45 | 
  46 | await expect(page.getByText(/success/i)).toBeVisible();
  47 | 
  48 | });
  49 | 
```