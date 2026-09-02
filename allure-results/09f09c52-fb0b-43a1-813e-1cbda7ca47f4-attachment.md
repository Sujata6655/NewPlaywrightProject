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
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#main-content')
    - waiting for "https://signin.johndeere.com/login/token/redirect?stateToken=02.id.Pqrh_hW1qm6G8EvnMfVS80WcHBrZANdW32gZ5qPW" navigation to finish...
    - navigated to "https://account.deere.com/actmgmt/callback?code=_SBhZbh4XbZjxk67AM5xlLyWe85lZ0R2BGC9P6iXc_k&state=twunIfKMwbT6BLSSihNhoIArTzyD3DSEAOdtfr3dz0dWsjOZFl6rv0C3GLf7d8CO"

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
> 25 |  await page.locator('#main-content').click();
     |                                      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  26 | 
  27 |  await expect(page.getByText('Edit Profile')).toBeVisible({ timeout: 15000 });
  28 | 
  29 |   // Check current URL
  30 | 7
  31 | console.log('URL:', page.url());
  32 |   //await expect(page).toHaveURL(/manage-account/i);
  33 | 
  34 |  
  35 |  const nameField = page.locator('//*[@id=":r2:"]');
  36 | 
  37 | // Check field is visible and enabled
  38 | 
  39 | await expect(nameField).toBeVisible();
  40 | 
  41 | await expect(nameField).toBeEnabled();
  42 | const frame = page.frameLocator('iframe');
  43 | 
  44 | // Clear existing value
  45 | 
  46 | await nameField.clear();
  47 | 
  48 | // Enter new name
  49 | await nameField.fill('Sunil S');
  50 |  await usernameInput.waitFor({ state: 'visible' });
  51 | //click on save button
  52 | await page.locator('//*[@id="addressDetailsId"]/div[5]/button[2]').click();
  53 | // Verify success message is displayed
  54 | 
  55 | await expect(page.getByText(/success/i)).toBeVisible();
  56 | 
  57 | });
  58 | 
```