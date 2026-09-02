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
    - waiting for "https://signin.johndeere.com/login/token/redirect?stateToken=02.id.HZ-czqqNrbla40GfUOKCu3r5zo2UgEdKWDuWxFLV" navigation to finish...
    - navigated to "https://account.deere.com/actmgmt/callback?code=gh9kfr_QZ7YvOjMg1O1aBTNP_v7h80OJXQS0qT1nvU4&state=twunIfKMwbT6BLSSihNhoIArTzyD3DSEAOdtfr3dz0dWsjOZFl6rv0C3GLf7d8CO"

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
  20 |  const signIn =page.locator("#form46 input[type='submit']").click();
  21 |  
  22 |  //await expect(page).toHaveTitle('Edit Profile');
  23 |  const nameField = page.locator('//*[@id=":r2:"]');
  24 | 
  25 | // Check field is visible and enabled
  26 | 
> 27 | await expect(nameField).toBeVisible();
     |                         ^ Error: expect(locator).toBeVisible() failed
  28 | 
  29 | await expect(nameField).toBeEnabled();
  30 | const frame = page.frameLocator('iframe');
  31 | 
  32 | // Clear existing value
  33 | 
  34 | await nameField.clear();
  35 | 
  36 | // Enter new name
  37 | await nameField.fill('Sunil S');
  38 |  await usernameInput.waitFor({ state: 'visible' });
  39 | //click on save button
  40 | await page.locator('//*[@id="addressDetailsId"]/div[5]/button[2]').click();
  41 | // Verify success message is displayed
  42 | 
  43 | await expect(page.getByText(/success/i)).toBeVisible();
  44 | 
  45 | });
  46 | 
```