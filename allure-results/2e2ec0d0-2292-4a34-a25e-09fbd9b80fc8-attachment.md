# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Forgotpassward.spec.ts >> Forgot password
- Location: tests\Forgotpassward.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Password Reset')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Password Reset')

```

```yaml
- progressbar:
  - img
- link "Skip to main content":
  - /url: "#main-content"
- banner:
  - img "John Deere logo"
  - link:
    - /url: /
- heading "Reset Password" [level=1]
- separator
- paragraph: testingprod1001@yopmail.com
- text: If you remember your password go back and
- button "Sign In"
- text: .
- paragraph: New Password *
- textbox: TigerMoon48#B
- paragraph: Confirm Password *
- textbox: TigerMoon48#B
- button "Submit"
- text: Strong
- progressbar
- heading "Password Guidelines" [level=2]
- text: "Password must have:"
- list:
  - listitem: 10 to 30 characters
  - listitem: One Uppercase Letter
  - listitem: One Lowercase Letter
  - listitem: One Number
- text: "Password can have:"
- list:
  - listitem: Non-alphanumeric characters
- contentinfo:
  - list:
    - listitem:
      - link "Contact Us":
        - /url: https://account-helppages.deere.com/contact-us
  - text: Copyright © 2026 Deere & Company. All Rights Reserved.
```

# Test source

```ts
  101 |   // ============================
  102 | 
  103 | //   await forgotPasswordPage
  104 | //     .locator('input[type="password"]')
  105 |     
  106 | //     .first()
  107 | //     .fill(newPassword);
  108 | 
  109 | //   await forgotPasswordPage
  110 | //     .locator('input[type="password"]')
  111 | //     .nth(1)
  112 | //     .fill(newPassword);
  113 | 
  114 | //   await forgotPasswordPage
  115 | //     .getByRole('button', { name: /submit/i })
  116 | //     .click();
  117 | 
  118 | //     await forgotPasswordPage.locator('#main-content button')
  119 | 
  120 | // //   await expect(
  121 | // //     forgotPasswordPage.getByText(
  122 | // //       /password reset|successfully reset/i
  123 | // //     )
  124 | // //   ).toBeVisible();
  125 | 
  126 | // ============================
  127 | // Reset Password
  128 | // ============================
  129 | 
  130 | // Strong password
  131 | 
  132 | const newPasswordField = forgotPasswordPage
  133 |   .locator('input[type="password"]')
  134 |   .first();
  135 | 
  136 | const confirmPasswordField = forgotPasswordPage
  137 |   .locator('input[type="password"]')
  138 |   .nth(1);
  139 | 
  140 | // Verify fields exist
  141 | await expect(newPasswordField).toBeVisible();
  142 | await expect(confirmPasswordField).toBeVisible();
  143 | 
  144 | // Enter New Password
  145 | await newPasswordField.click();
  146 | await newPasswordField.pressSequentially(newPassword);
  147 | 
  148 | // Enter Confirm Password
  149 | await confirmPasswordField.click();
  150 | await confirmPasswordField.pressSequentially(newPassword);
  151 | 
  152 | // Trigger blur/validation
  153 | await confirmPasswordField.press('Tab');
  154 | 
  155 | // Wait for frontend validation
  156 | await forgotPasswordPage.waitForTimeout(3000);
  157 | 
  158 | // Verify values
  159 | await expect(newPasswordField).toHaveValue(newPassword);
  160 | await expect(confirmPasswordField).toHaveValue(newPassword);
  161 | 
  162 | // Verify passwords match
  163 | expect(await newPasswordField.inputValue()).toBe(
  164 |   await confirmPasswordField.inputValue()
  165 | );
  166 | 
  167 | // Password format checks
  168 | expect(newPassword.length).toBeGreaterThanOrEqual(10);
  169 | expect(newPassword.length).toBeLessThanOrEqual(30);
  170 | expect(/[A-Z]/.test(newPassword)).toBeTruthy();
  171 | expect(/[a-z]/.test(newPassword)).toBeTruthy();
  172 | expect(/[0-9]/.test(newPassword)).toBeTruthy();
  173 | 
  174 | console.log('Password meets all guidelines');
  175 | 
  176 | // Debug screenshot
  177 | await forgotPasswordPage.screenshot({
  178 |   path: 'password-page.png',
  179 |   fullPage: true,
  180 | });
  181 | 
  182 | // Check if any validation message appears
  183 | const bodyText = await forgotPasswordPage.locator('body').textContent();
  184 | 
  185 | if (bodyText?.includes('Password guidelines')) {
  186 |   console.log('Password validation section found');
  187 | }
  188 | 
  189 | // Submit
  190 | const submitButton = forgotPasswordPage.getByRole('button', {
  191 |   name: /submit/i,
  192 | });
  193 | 
  194 | await expect(submitButton).toBeEnabled();
  195 | await submitButton.click();
  196 | 
  197 | 
  198 | 
  199 | // Password Reset Success
  200 | 
> 201 | await expect(forgotPasswordPage.getByText('Password Reset')).toBeVisible();
      |                                                              ^ Error: expect(locator).toBeVisible() failed
  202 | // Verify Password Reset Success
  203 | 
  204 | await expect(forgotPasswordPage.getByText('You can now Sign In')).toBeVisible();
  205 | 
  206 | // Go to Sign In
  207 | 
  208 | // Click Sign In button
  209 | 
  210 | await forgotPasswordPage.getByRole('button', {name: /sign in/i}).click();
  211 | await forgotPasswordPage.waitForLoadState('domcontentloaded');
  212 | 
  213 | });
```