# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Edit-profile.spec.ts >> Edit Profile and Change Password
- Location: tests\Edit-profile.spec.ts:3:5

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
  - Test timeout of 30000ms exceeded.

```

```yaml
- progressbar:
  - img
- banner:
  - link "Go to home":
    - /url: /
    - img "John Deere Logo"
  - button "Hi, Sunil S"
- progressbar:
  - img
- separator
- button "Back to previous page"
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
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test('Edit Profile and Change Password', async ({ page }) => {
  4   | 
  5   |   const email = 'sunil.yadav@yopmail.com';
  6   |   const currentPassword = 'Test@111111';
  7   |   const newPassword = 'Test@111114';
  8   | 
  9   |   // Step 1: Open URL
  10  |   await page.goto(
  11  |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  12  |   );
  13  | 
  14  |   // Step 2: Verify Sign In title
  15  | //   await expect(page).toHaveTitle(/Sign In/i);
  16  | 
  17  |   // Login
  18  |   await page.locator('#input28').fill(email);
  19  |   await page.locator("//*[@id='form20']/div[2]/input").click();
  20  | 
  21  |   await page.locator('#input54').fill(currentPassword);
  22  |   await page.locator("#form46 input[type='submit']").click();
  23  |   //await page.waitForLoadState('networkidle');
  24  | 
  25  |   //await page.waitForTimeout(60000);
  26  |   await expect(page).toHaveTitle(/Edit Profile/i, {
  27  | 
  28  | timeout: 60000
  29  | 
  30  | });
  31  | 
  32  | 
  33  | 
  34  | 
  35  |   // Step 3: Verify Edit Profile page opened
  36  |   await expect(
  37  |     page.getByText(/Personal Information/i)
> 38  |   ).toBeVisible({ timeout: 60000 });
      |     ^ Error: expect(locator).toBeVisible() failed
  39  | 
  40  |   // Step 4: Edit First Name
  41  |   const firstName = page.locator('//input[@name="firstName"]');
  42  | 
  43  |   await expect(firstName).toBeVisible();
  44  |   await firstName.clear();
  45  |   await firstName.fill('Sunil S');
  46  | 
  47  |   // Step 5: Save
  48  |   await page.locator('//*[@id="addressDetailsId"]/div[5]/button[2]').click();
  49  | 
  50  |   // Step 6: Verify Success Message
  51  |   await expect(
  52  |     page.getByText(/Your personal information is saved/i)
  53  |   ).toBeVisible({ timeout: 20000 });
  54  | 
  55  |   await page.locator('//*[@id="main-content"]/div/div[1]/div/div[3]/div/button').click();
  56  | 
  57  |   // Step 7: Scroll Down
  58  |  // await page.mouse.wheel(0, 1000);
  59  | 
  60  |   // Step 8: Update Mobile Number
  61  |   const mobileField = page.locator('//input[@id="mobile" and @type="tel"]');
  62  | 
  63  |   await mobileField.scrollIntoViewIfNeeded();
  64  |   await mobileField.waitFor({
  65  | 
  66  | state: 'visible',
  67  | 
  68  | timeout: 30000
  69  | 
  70  | });
  71  | 
  72  | console.log(await mobileField.isEnabled()); // false
  73  | 
  74  | console.log(await mobileField.isDisabled()); // true
  75  | 
  76  | //   await mobileField.click();
  77  | //   await mobileField.press('Control+A');
  78  | //   await page.keyboard.press('Delete');
  79  | //   await mobileField.fill('9876543222');
  80  | //   await page.keyboard.press('Tab');
  81  | 
  82  | await mobileField.click();
  83  | 
  84  | // Cursor ko end me le jao
  85  | 
  86  | await page.keyboard.press('End');
  87  | 
  88  | // Existing digits one by one delete karo
  89  | 
  90  | for (let i = 0; i < 10; i++) {
  91  | 
  92  | await page.keyboard.press('Backspace');
  93  | 
  94  | }
  95  | 
  96  | // Naya number ek-ek digit type karo
  97  | 
  98  | const newMobile = '9876543222';
  99  | 
  100 | for (const digit of newMobile) {
  101 | 
  102 | await page.keyboard.press(digit);
  103 | 
  104 | }
  105 | 
  106 | await page.keyboard.press('Tab');
  107 | 
  108 |   // Step 9: Save Mobile Number
  109 |   await page
  110 |     .locator('//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]')
  111 |     .click();
  112 | 
  113 |   // Step 10: Verify Success Message
  114 | const successPopup = page.locator(
  115 | 
  116 | 'xpath=/html[2/body/div[1]/div/div/div/diviv[1]/div/div[1]/div/div[2]'
  117 | 
  118 | );
  119 | 
  120 | 
  121 | 
  122 | // await expect(successPopup).toContainText(/Updated Successfully/i);
  123 | 
  124 | // await expect(successPopup).toBeVisible();
  125 | 
  126 | //await expect(successPopup).toContainText(/Updated Successfully/i);
  127 | 
  128 |   const closeButton = page.locator(
  129 | 
  130 | '//*[@id="main-content"]/div/div[1]/div/div[3]/div/button'
  131 | 
  132 | );
  133 | 
  134 | // await expect(closeButton).toBeVisible();
  135 | 
  136 | // await closeButton.click();
  137 | 
  138 |   //Close Success Popup if displayed
```