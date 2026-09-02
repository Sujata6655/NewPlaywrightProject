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
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - main [ref=f1e3]:
    - heading [level=1] [ref=f1e5]:
      - img "John Deere logo logo" [ref=f1e6]
    - generic [ref=f1e9]:
      - generic [ref=f1e16]:
        - generic [ref=f1e17]:
          - heading "Sign In" [level=2] [ref=f1e18]
          - generic [ref=f1e19]: sunil.yadav@yopmail.com
          - alert
          - generic [ref=f1e21]:
            - generic [ref=f1e22]: Password
            - generic [ref=f1e23]:
              - generic:
                - textbox "Password":
                  - /placeholder: ""
                  - text: Test@111111
                - generic:
                  - generic: 
                  - text: 
        - button "Sign In" [disabled] [ref=f1e25]
      - generic [ref=f1e27]:
        - link "Forgot Username or Password" [ref=f1e28] [cursor=pointer]:
          - /url: https://account.deere.com/actmgmt/forgotpassword?TARGET=https://account.deere.com
        - link "Back to sign in" [ref=f1e29] [cursor=pointer]:
          - /url: "#"
  - generic [ref=f1e30]:
    - link "Contact Us" [ref=f1e32] [cursor=pointer]:
      - /url: "https://account-helppages.deere.com/signin-help "
    - generic [ref=f1e33]: Copyright © 2026 Deere & Company. All Rights Reserved.
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
> 22 | page.waitForLoadState('networkidle'),
     |      ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  23 | 
  24 | page.locator("#form46 input[type='submit']").click()
  25 | 
  26 | await expect(page).toHaveTitle('Edit Profile');
  27 | 
  28 |  const nameField = page.locator('//*[@id=":r2:"]');
  29 | 
  30 | // Check field is visible and enabled
  31 | 
  32 | await expect(nameField).toBeVisible();
  33 | 
  34 | await expect(nameField).toBeEnabled();
  35 | const frame = page.frameLocator('iframe');
  36 | 
  37 | // Clear existing value
  38 | 
  39 | await nameField.clear();
  40 | 
  41 | // Enter new name
  42 | await nameField.fill('Sunil S');
  43 |  await usernameInput.waitFor({ state: 'visible' });
  44 | //click on save button
  45 | await page.locator('//*[@id="addressDetailsId"]/div[5]/button[2]').click();
  46 | // Verify success message is displayed
  47 | 
  48 | await expect(page.getByText(/success/i)).toBeVisible();
  49 | 
  50 | });
  51 | 
```