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
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
=========================== logs ===========================
  "commit" event fired
  "domcontentloaded" event fired
============================================================
```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - main [ref=f1e3]:
    - heading [level=1] [ref=f1e5]:
      - img "John Deere logo logo" [ref=f1e6]
    - generic [ref=f1e9]:
      - generic [ref=f1e11]:
        - generic [ref=f1e12]:
          - heading "Sign In" [level=2] [ref=f1e13]
          - alert
          - generic [ref=f1e15]:
            - generic [ref=f1e16]: Username
            - generic [ref=f1e17]:
              - generic:
                - textbox "Username":
                  - /placeholder: ""
                  - text: sunil.yadav@yopmail.com
        - button "Next" [disabled] [ref=f1e19]
      - generic [ref=f1e20]:
        - generic [ref=f1e21]:
          - link "Forgot Username or Password" [ref=f1e22] [cursor=pointer]:
            - /url: https://account.deere.com/actmgmt/forgotpassword?TARGET=https://account.deere.com
          - link "Create New Customer Account" [ref=f1e23] [cursor=pointer]:
            - /url: https://account.deere.com/actmgmt/onboarding/registration?TARGET=https://account.deere.com
        - generic [ref=f1e24]:
          - text: Your use of this account is governed by our
          - link "*Terms of Use" [ref=f1e25] [cursor=pointer]:
            - /url: https://www.deere.com/en/privacy-and-data/myjohndeere/terms/
          - text: and
          - link "*Privacy Notice" [ref=f1e26] [cursor=pointer]:
            - /url: https://www.johndeere.com/trust
          - text: .
        - generic [ref=f1e27]: "*Last updated : June 1, 2024 to support launch of service into several countries."
  - generic [ref=f1e29]:
    - link "Contact Us" [ref=f1e31] [cursor=pointer]:
      - /url: "https://account-helppages.deere.com/signin-help "
    - generic [ref=f1e32]: Copyright © 2026 Deere & Company. All Rights Reserved.
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
> 23  |   await page.waitForLoadState('networkidle');
      |              ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  24  | 
  25  |   //await page.waitForTimeout(50000);
  26  | //   await expect(page).toHaveTitle(/Edit Profile/i, {
  27  | 
  28  | 
  29  | // timeout: 60000
  30  | 
  31  | // });
  32  | 
  33  |  await expect(page).toHaveTitle(/John Deere - Sign In|Edit Profile/i);
  34  | 
  35  | 
  36  | 
  37  | 
  38  |   //Step 3: Verify Edit Profile page opened
  39  |   // await expect(page.getByText(/Personal Information/i)
  40  |   // ).toBeVisible({ timeout: 60000 });
  41  | 
  42  |   // Step 4: Edit First Name
  43  |   const firstName = page.locator('//input[@name="firstName"]');
  44  | 
  45  |   await expect(firstName).toBeVisible();
  46  |   await firstName.clear();
  47  |   await firstName.fill('Sunil S');
  48  | 
  49  | 
  50  | // Step 4: Edit First Name
  51  | 
  52  | 
  53  | 
  54  |   // Step 5: Save
  55  |   await page.locator('//*[@id="addressDetailsId"]/div[5]/button[2]').click();
  56  | 
  57  |   // Step 6: Verify Success Message
  58  |   
  59  |   await expect(
  60  |     page.getByText(/Your personal information is saved/i)
  61  |   ).toBeVisible({ timeout: 20000 });
  62  | 
  63  |   await page.locator('//*[@id="main-content"]/div/div[1]/div/div[3]/div/button').click();
  64  | 
  65  |   // Step 7: Scroll Down
  66  |  // await page.mouse.wheel(0, 1000);
  67  | 
  68  | //   // Step 8: Update Mobile Number
  69  | //   const mobileField = page.locator('//input[@id="mobile" and @type="tel"]');
  70  | 
  71  | //   //await mobileField.scrollIntoViewIfNeeded();
  72  | //   await mobileField.waitFor({
  73  | 
  74  | // state: 'visible',
  75  | 
  76  | // timeout: 40000
  77  | 
  78  | // });
  79  | 
  80  | // console.log(await mobileField.isEnabled()); // false
  81  | 
  82  | // console.log(await mobileField.isDisabled()); // true
  83  | 
  84  | // //   await mobileField.click();
  85  | // //   await mobileField.press('Control+A');
  86  | // //   await page.keyboard.press('Delete');
  87  | // //   await mobileField.fill('9876543222');
  88  | // //   await page.keyboard.press('Tab');
  89  | 
  90  | // await mobileField.click();
  91  | 
  92  | // // Cursor ko end me le jao
  93  | 
  94  | // await page.keyboard.press('End');
  95  | 
  96  | // // Existing digits one by one delete karo
  97  | 
  98  | // for (let i = 0; i < 10; i++) {
  99  | 
  100 | // await page.keyboard.press('Backspace');
  101 | 
  102 | // }
  103 | 
  104 | // // Naya number ek-ek digit type karo
  105 | 
  106 | // const newMobile = '9876543227';
  107 | 
  108 | // for (const digit of newMobile) {
  109 | 
  110 | // await page.keyboard.type(digit);
  111 | 
  112 | // }
  113 | 
  114 | // await page.keyboard.press('Tab');
  115 | 
  116 | //   // Step 9: Save Mobile Number
  117 | //   await page
  118 | //     .locator('//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]')
  119 | //     .click();
  120 | 
  121 | //   // Step 10: Verify Success Message
  122 | // const successPopup = page.locator(
  123 | 
```