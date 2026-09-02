import { test, expect } from '@playwright/test';

test('Edit Profile and Change Password', async ({ page }) => {
  const email = 'sunil.yadav@yopmail.com';
  const oldPassword = '4e5r6t$E%R^T1';
  const newPassword = '4e5r6t$E%R^T2';
   const conrimPassword = '4e5r6t$E%R^T2';

  // Login
  await page.goto(
    'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  );

  await page.getByRole('textbox', { name: 'Username' }).fill(email);
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(oldPassword);
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Verify Profile Page
  await expect(
    page.locator('input[name="firstName"]')
  ).toBeVisible();

  // Update First Name
  await page.locator('input[name="firstName"]').fill('Sunil singhs');

  await page.getByRole('button', { name: /^Save$/ }).first().click();

  // Update Phone Number
  await page
    .getByRole('textbox', { name: '1 (702) 123-' })
    .fill('+919876543221');

  await page
    .locator('#profilePhoneDetailsId')
    .getByRole('button', { name: 'Save' })
    .click();

  // Close Popup if displayed
  const closeBtn = page.getByRole('button', { name: 'close' });

  if (await closeBtn.isVisible().catch(() => false)) {
    await closeBtn.click();
  }

  // Change Password
  await page.getByRole('button', { name: 'Change Password' }).click();

  await page
    .locator('input[name="currentCredential"]')
    .fill(oldPassword);

  await page
    .locator('input[name="credential"]')
    .fill(newPassword);

  await page
    .locator('input[name="confirmCredential"]')
    .fill(newPassword);

  await page.getByRole('button', { name: /^Save$/ }).click();

  // Verify Password Changed Message
  await expect(
    page.getByText(/password is changed/i)
  ).toBeVisible();

  // Logout
  await page.getByRole('button').filter({
    hasText: 'Hi',
  }).click();

  await page.getByRole('menuitem', { name: 'Sign Out' }).click();

  // Login Again Using New Password
  await page.goto(
    'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  );

  await page.getByRole('textbox', { name: 'Username' }).fill(email);
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(newPassword);
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Verify Login Success
  await expect(
    page.locator('input[name="firstName"]')
  ).toBeVisible();

  console.log('Password changed and login successful');
});