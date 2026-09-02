import { test, expect } from '@playwright/test';

test('Forgot password', async ({ page, browser, context }) => {

  const email = 'testingprod1001@yopmail.com';
  const newPassword = 'TigerMoon48#B';

  await page.goto('https://operationscenter.deere.com/');

  await expect(page).toHaveTitle(/OperationsCenter/i);

  await page.getByRole('button', { name: 'Sign In' }).click();

  const [forgotPasswordPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Forgot Username or Password' }).click()
  ]);

  await forgotPasswordPage.waitForLoadState('domcontentloaded');

  const usernameInput = forgotPasswordPage.locator('#username-input');

  await usernameInput.waitFor({ state: 'visible' });

  await usernameInput.fill(email);

  await forgotPasswordPage
    .locator("#phonenumberForm button[type='submit']")
    .click();

  // OTP page loaded
  await forgotPasswordPage
    .locator('#confirmationCodeForm')
    .waitFor({ state: 'visible' });

  // ============================
  // Open Yopmail
  // ============================

  const yopmailPage = await browser.newPage();

  await yopmailPage.goto('https://yopmail.com/', {
    waitUntil: 'domcontentloaded'
  });

  const emailName = email.split('@')[0];

  await yopmailPage.locator('#login').fill(emailName);

  await yopmailPage.keyboard.press('Enter');

  // Wait mailbox frame
  await yopmailPage.waitForSelector('#ifmail', {
    timeout: 30000
  });

  const mailFrame = yopmailPage.frameLocator('#ifmail');

  await mailFrame.locator('body').waitFor({
    state: 'visible',
    timeout: 30000
  });

  const mailText =
    await mailFrame.locator('body').textContent();

  console.log(mailText);

  // Capture OTP
  const otpMatch = mailText?.match(/\b\d{6}\b/);

  if (!otpMatch) {
    throw new Error('OTP not found in email');
  }

  const otp = otpMatch[0];

  console.log(`Captured OTP: ${otp}`);

  // ============================
  // Back to recovery page
  // ============================

  await forgotPasswordPage.bringToFront();

  const otpInputs =
    forgotPasswordPage.locator(
      '#confirmationCodeForm input'
    );

  for (let i = 0; i < 6; i++) {
    await otpInputs.nth(i).fill(otp[i]);
  }

  await forgotPasswordPage
    .getByRole('button', { name: /next/i })
    .click();

  // ============================
  // Reset Password
  // ============================



// Strong password

const newPasswordField = forgotPasswordPage
  .locator('input[type="password"]')
  .first();

const confirmPasswordField = forgotPasswordPage
  .locator('input[type="password"]')
  .nth(1);

// Verify fields exist
await expect(newPasswordField).toBeVisible();
await expect(confirmPasswordField).toBeVisible();

// Enter New Password
await newPasswordField.click();
await newPasswordField.pressSequentially(newPassword);

// Enter Confirm Password
await confirmPasswordField.click();
await confirmPasswordField.pressSequentially(newPassword);

// Trigger blur/validation
await confirmPasswordField.press('Tab');

// Wait for frontend validation
await forgotPasswordPage.waitForTimeout(3000);

// Verify values
await expect(newPasswordField).toHaveValue(newPassword);
await expect(confirmPasswordField).toHaveValue(newPassword);

// Verify passwords match
expect(await newPasswordField.inputValue()).toBe(
  await confirmPasswordField.inputValue()
);

// Password format checks
expect(newPassword.length).toBeGreaterThanOrEqual(10);
expect(newPassword.length).toBeLessThanOrEqual(30);
expect(/[A-Z]/.test(newPassword)).toBeTruthy();
expect(/[a-z]/.test(newPassword)).toBeTruthy();
expect(/[0-9]/.test(newPassword)).toBeTruthy();

console.log('Password meets all guidelines');

// Debug screenshot
await forgotPasswordPage.screenshot({
  path: 'password-page.png',
  fullPage: true,
});

// Check if any validation message appears
const bodyText = await forgotPasswordPage.locator('body').textContent();

if (bodyText?.includes('Password guidelines')) {
  console.log('Password validation section found');
}

// Submit
const submitButton = forgotPasswordPage.getByRole('button', {
  name: /submit/i,
});

await expect(submitButton).toBeEnabled();
await submitButton.click();




// Password Reset Success

await expect(forgotPasswordPage.getByText('Password Reset')).toBeVisible();
// Verify Password Reset Success

await expect(forgotPasswordPage.getByText('You can now Sign In')).toBeVisible();

// Go to Sign In

// Click Sign In button

 await forgotPasswordPage.getByRole('button', {name: /sign in/i}).click();
 await forgotPasswordPage.waitForLoadState('domcontentloaded');

});