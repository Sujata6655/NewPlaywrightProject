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
Error: expect(locator).toBeVisible() failed

Locator: getByText('Edit Profile')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for getByText('Edit Profile')
    - waiting for "https://signin.johndeere.com/enduser/callback?code=iRZhbjOv8Kb0WTysSTBwmbuQIVMt-4mp0Vj68XgvAMM&state=jbWpLNMnooMV670KpfQ1YO4ZFyIhAWcUNKaMYT2vWJq2e1kJrcoMQcp4gvltE55B" navigation to finish...
    - navigated to "https://signin.johndeere.com/enduser/callback?code=iRZhbjOv8Kb0WTysSTBwmbuQIVMt-4mp0Vj68XgvAMM&state=jbWpLNMnooMV670KpfQ1YO4ZFyIhAWcUNKaMYT2vWJq2e1kJrcoMQcp4gvltE55B"
  - Test timeout of 30000ms exceeded.

```

```yaml
- navigation "Main navigation":
  - button "Close navigation" [expanded]
  - link "John Deere logo":
    - /url: https://www.deere.com
    - img "John Deere logo"
  - heading "Dashboard" [level=2]
  - link "My Apps":
    - /url: /app/UserHome
    - img
    - text: My Apps
  - button "Drag handle":
    - img
  - list:
    - listitem:
      - link "Work":
        - /url: /app/UserHome/tabwjaoqaffLxRxTS5d7
  - status
  - button "Notifications 1":
    - img
    - text: Notifications 1
  - paragraph: "Last sign in: a few seconds ago"
  - paragraph: © 2026 Okta, Inc.
  - paragraph:
    - link "Privacy":
      - /url: /privacy
- banner:
  - search:
    - text: Search your apps, tab to navigate between search results
    - paragraph: Optional
    - searchbox "Search your apps, tab to navigate between search results Optional"
  - link "Skip to Content":
    - /url: "#main-content"
- banner:
  - button "sunil singhR John Deere Open account dropdown menu":
    - text: sunil singhR John Deere
    - img
- main:
  - region "My Apps":
    - button "Collapse My Apps section":
      - img
      - text: My Apps
    - img
    - text: Add apps to your launcher Please contact your admin for assistance.
  - heading "Support" [level=2]
  - text: "Help:"
  - link "WebAuthSupport@JohnDeere.com Opens in a new tab":
    - /url: mailto:WebAuthSupport@JohnDeere.com
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
  9  | await page.goto('https://signin.johndeere.com/');
  10 | await expect(page).toHaveTitle('John Deere - Sign In');
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
  26 | 
  27 | await page.waitForURL('**', { timeout: 30000 });
  28 | console.log(page.url());
  29 | 
  30 | // Verify Edit Profile is visible
  31 | 
  32 | await expect(
  33 | 
  34 | page.getByText('Edit Profile')
  35 | 
> 36 | ).toBeVisible({ timeout: 30000 });
     |   ^ Error: expect(locator).toBeVisible() failed
  37 | 
  38 | // Click Edit Profile
  39 | 
  40 | await page.getByText('Edit Profile').click();
  41 | 
  42 |  
  43 | 
  44 |   // Check current URL
  45 | 
  46 | 
  47 |  
  48 | 
  49 |  
  50 |  const nameField = page.locator('//*[@id=":r2:"]');
  51 | 
  52 | // Check field is visible and enabled
  53 | 
  54 | await expect(nameField).toBeVisible();
  55 | 
  56 | await expect(nameField).toBeEnabled();
  57 | const frame = page.frameLocator('iframe');
  58 | 
  59 | // Clear existing value
  60 | 
  61 | await nameField.clear();
  62 | 
  63 | // Enter new name
  64 | await nameField.fill('Sunil S');
  65 |  await usernameInput.waitFor({ state: 'visible' });
  66 | //click on save button
  67 | await page.locator('//*[@id="addressDetailsId"]/div[5]/button[2]').click();
  68 | // Verify success message is displayed
  69 | 
  70 | await expect(page.getByText(/success/i)).toBeVisible();
  71 | 
  72 | });
  73 | 
```