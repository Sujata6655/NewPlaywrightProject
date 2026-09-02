# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test1.spec.ts >> Edit Profile and Change Password
- Location: tests\test1.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(' password is changed')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(' password is changed')

```

```yaml
- progressbar:
  - img
- banner:
  - link "Go to home":
    - /url: /
    - img "John Deere Logo"
  - button "Hi, Sunil S"
- heading "Change Password" [level=3]
- separator
- paragraph: Current Password *
- textbox: 4e5r6t7y$E%R^T&m
- paragraph: New Password *
- textbox: 4e5r6t7y$E%R^T&n
- paragraph: Confirm New Password *
- textbox: 4e5r6t7y$E%R^T&n
- text: Strong
- progressbar
- heading "Password Guidelines" [level=4]
- paragraph: "Password must have:"
- list:
  - listitem: 10 to 30 characters
  - listitem: One Uppercase Letter
  - listitem: One Lowercase Letter
  - listitem: One Number
- paragraph: "Password can have:"
- list:
  - listitem: Non-alphanumeric characters
- separator
- button "Back"
- button "Save"
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
  46  |   );
  47  | 
  48  |   await expect(changePasswordButton).toBeVisible({
  49  |     timeout: 30000,
  50  |   });
  51  | 
  52  |   await changePasswordButton.scrollIntoViewIfNeeded();
  53  |   await changePasswordButton.click();
  54  | 
  55  |   // Optional Popup
  56  |   const okButton = page.locator('//button[contains(.,"ok")]');
  57  | 
  58  |   try {
  59  |     await okButton.waitFor({
  60  |       state: 'visible',
  61  |       timeout: 5000,
  62  |     });
  63  | 
  64  |     await okButton.click();
  65  |     console.log('Popup handled');
  66  |   } catch {
  67  |     console.log('Popup not displayed');
  68  |   }
  69  | 
  70  |   // Current Password
  71  | // Current Password
  72  | const currentPwd = page.locator(
  73  |   'xpath=//*[@id="credentialsForm"]/div/div[1]/div[1]/div/div/input'
  74  | );
  75  | 
  76  | await currentPwd.click();
  77  | await page.keyboard.press('Control+A');
  78  | await page.keyboard.press('Delete');
  79  | await page.keyboard.type(currentPassword);
  80  | 
  81  | // New Password
  82  | const newPwd = page.locator(
  83  |   'xpath=//*[@id="credentialsForm"]/div/div[1]/div[2]/div/div/input'
  84  | );
  85  | 
  86  | await newPwd.click();
  87  | await page.keyboard.press('Control+A');
  88  | await page.keyboard.press('Delete');
  89  | await page.keyboard.type(newPassword);
  90  | 
  91  | // Confirm Password
  92  | const confirmPwd = page.locator(
  93  |   'xpath=//*[@id="credentialsForm"]/div/div[1]/div[3]/div/div/input'
  94  | );
  95  | 
  96  | await confirmPwd.click();
  97  | await page.keyboard.press('Control+A');
  98  | await page.keyboard.press('Delete');
  99  | await page.keyboard.type(confirmPassword );
  100 | 
  101 | // Trigger validation
  102 | await page.keyboard.press('Tab');
  103 | await page.mouse.click(1200, 200);
  104 | 
  105 | await page.waitForTimeout(3000);
  106 | 
  107 | // Check Save button enabled
  108 | await page.locator('xpath=//*[@id="credentialsForm"]/button[2]').click();
  109 | 
  110 | // console.log('Save Enabled:', await saveButton.isEnabled());
  111 | 
  112 | // await expect(saveButton).toBeEnabled({
  113 | //   timeout: 30000,
  114 | // });
  115 | 
  116 | 
  117 |   
  118 | 
  119 |   // Trigger Validation
  120 | //   await page.locator('text=Password Guidelines').click();
  121 | 
  122 | 
  123 | 
  124 | 
  125 | const guidelines = page.getByText('Password Guidelines');
  126 | 
  127 | 
  128 | await expect(guidelines).toBeVisible();
  129 | 
  130 |   // Save Password
  131 | 
  132 |   const saveButton = page.getByRole('button', { name: /^Save$/ });
  133 | 
  134 |  
  135 | 
  136 | await expect(saveButton).toBeEnabled({
  137 | 
  138 | timeout: 30000,
  139 | 
  140 | });
  141 | 
  142 | await expect(
  143 | 
  144 | page.getByText(' password is changed')
  145 | 
> 146 | ).toBeVisible();
      |   ^ Error: expect(locator).toBeVisible() failed
  147 | 
  148 | // await saveButton.click();
  149 | //   await page.getByRole('button', { name: /^Save$/ }).click();
  150 | 
  151 | //   await page.waitForTimeout(5000);
  152 | 
  153 |   // Open User Dropdown
  154 |   const profileDropdown = page.locator(
  155 |     '//*[@id="root"]/div/div/div/div/header/div/div/div/button'
  156 |   );
  157 | 
  158 |   await expect(profileDropdown).toBeVisible({
  159 |     timeout: 30000,
  160 |   });
  161 | 
  162 |   await profileDropdown.click();
  163 | 
  164 |   // Logout
  165 |   const logoutButton = page.locator(
  166 |     'xpath=/html/body/div[2]/div[3]/ul/li'
  167 |   );
  168 | 
  169 |   await expect(logoutButton).toBeVisible({
  170 |     timeout: 10000,
  171 |   });
  172 | 
  173 |   await logoutButton.click();
  174 | 
  175 |   // Login again with New Password
  176 |   await page.goto(
  177 |     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  178 |   );
  179 | 
  180 |   await page.locator('#input28').fill(email);
  181 |   await page.locator('#form20 input[type="submit"]').click();
  182 | 
  183 |   await page.locator('#input54').fill(newPassword);
  184 |   await page.locator('#form46 input[type="submit"]').click();
  185 | 
  186 |   // Verify Login Successful
  187 |   await expect(
  188 |     page.locator('input[name="firstName"]')
  189 |   ).toBeVisible({
  190 |     timeout: 60000,
  191 |   });
  192 | 
  193 |   console.log('Password changed and login successful');
  194 | });
```