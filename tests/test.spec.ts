import { test, expect } from '@playwright/test';

test('Edit Profile and Change Password', async ({ page }) => {
  test.setTimeout(120000);

  const email = 'sunil.yadav@yopmail.com';
  const currentPassword = '4e5r6t7y$E%R^T&Y';
  const newPassword = '4e5r6t7y$E%R^T&u';
  const confirmPassword ='4e5r6t7y$E%R^T&u';

  // Open URL
  await page.goto(
    'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  );

  // Login
  await page.locator('#input28').fill(email);
  await page.locator('#form20 input[type="submit"]').click();

  await page.locator('#input54').fill(currentPassword);
  await page.locator('#form46 input[type="submit"]').click();

  // Wait for Profile Page
  const firstName = page.locator('input[name="firstName"]');

  await expect(firstName).toBeVisible({
    timeout: 60000,
  });

  // Update First Name
  await firstName.clear();
  await firstName.fill('Sunil S');

  // Save Personal Information
  await page
    .locator('//*[@id="addressDetailsId"]/div[5]/button[2]')
    .click();

  await page.waitForTimeout(3000);

  // Change Password
  const changePasswordButton = page.locator(
    '//*[@id="sigInInfoId"]/div/button'
  );

  await expect(changePasswordButton).toBeVisible({
    timeout: 30000,
  });

  await changePasswordButton.scrollIntoViewIfNeeded();
  await changePasswordButton.click();

  // Handle Confirmation Popup (if displayed)
 // Handle confirmation popup
const popupMessage = page.getByText(
  'Any unsaved information will be lost.'
);

// Popup may or may not appear

const okButton = page.locator('//button[contains(.,"ok")]');

try {

await okButton.waitFor({

state: 'visible',

timeout: 5000,

});

 

await okButton.click();

console.log('Popup handled');

} catch {

console.log('Popup not displayed');

}
// Click OK button


  // Wait for Change Password page
  // await expect(
  //   page.getByText('Current Password')
  // ).toBeVisible({
  //   timeout: 10000,
  // });
  // Wait for Change Password page




  // // Wait for password fields
  const passwordFields = page.locator('input[type="password"]');

  await expect(passwordFields.first()).toBeVisible({
    timeout: 5000,
  });

  // Current Password
// Current Password

// Current Password

await page.locator(

'xpath=//*[@id="credentialsForm"]/div/div[1]/div[1]/div/div/input'

).fill(currentPassword);
await page.keyboard.press('Tab');

// New Password

await page.locator(

'xpath=//*[@id="credentialsForm"]/div/div[1]/div[2]/div/div/input'

).fill(newPassword);
await page.keyboard.press('Tab');

// Confirm Password

await page.locator(

'xpath=//*[@id="credentialsForm"]/div/div[1]/div[3]/div/div/input'

).fill(confirmPassword);

await page.keyboard.press('Tab');



  // Save Password
  await page.getByRole('button', { name: /save/i }).click();

  // Wait for Success Message
  await page.waitForTimeout(5000);

  // Open Profile Dropdown
  const profileDropdown = page.locator(
    '/html/body/div/div/div/div/div/header/div/div/div/button'
  );

  await expect(profileDropdown).toBeVisible({
    timeout: 30000,
  });

  await profileDropdown.click();

  // Logout
  const logoutButton = page.locator(
    '/html/body/div[2]/div[3]/ul/li'
  );

  await expect(logoutButton).toBeVisible({
    timeout: 10000,
  });

  await logoutButton.click();

  // Open URL Again
  await page.goto(
    'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  );

  // Login With New Password
  await page.locator('#input28').fill(email);
  await page.locator('#form20 input[type="submit"]').click();

  await page.locator('#input54').fill(newPassword);
  await page.locator('#form46 input[type="submit"]').click();

  // Verify Successful Login
  await expect(
    page.locator('input[name="firstName"]')
  ).toBeVisible({
    timeout: 60000,
  });

  console.log('Successfully logged in with new password');
});
