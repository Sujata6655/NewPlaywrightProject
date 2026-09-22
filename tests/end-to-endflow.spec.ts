import { test, expect } from '@playwright/test';

test('Edit Profile and Change Password', async ({ page }) => {
  test.setTimeout(180000);

  const email = 'sunil.yadav@yopmail.com';

  const currentPassword = '';
  const newPassword = '';
   const confirmPassword = '';


  // Open URL
  await page.goto(
    'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  );

  // Login
  await page.locator('#input28').fill(email);
  await page.locator('#form20 input[type="submit"]').click();

  await page.locator('#input54').fill(currentPassword);
  await page.locator('#form46 input[type="submit"]').click();

  // Verify Profile Page
  const firstName = page.locator('input[name="firstName"]');

  await expect(firstName).toBeVisible({
    timeout: 60000,
  });

  // Update First Name
  await firstName.clear();
  await firstName.fill('Sunil S');

  // Save Personal Information
  await page
    .locator('xpath=//*[@id="addressDetailsId"]/div[5]/button[2]')
    .click();

  await page.waitForTimeout(3000);

  // Click Change Password
  const changePasswordButton = page.locator(
    'xpath=//*[@id="sigInInfoId"]/div/button'
  );

  await expect(changePasswordButton).toBeVisible({
    timeout: 30000,
  });

  await changePasswordButton.scrollIntoViewIfNeeded();
  await changePasswordButton.click();

  // Optional Popup
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

  // Current Password
// Current Password
const currentPwd = page.locator(
  'xpath=//*[@id="credentialsForm"]/div/div[1]/div[1]/div/div/input'
);

await currentPwd.click();
await page.keyboard.press('Control+A');
await page.keyboard.press('Delete');
await page.keyboard.type(currentPassword);

// New Password
const newPwd = page.locator(
  'xpath=//*[@id="credentialsForm"]/div/div[1]/div[2]/div/div/input'
);

await newPwd.click();
await page.keyboard.press('Control+A');
await page.keyboard.press('Delete');
await page.keyboard.type(newPassword);

// Confirm Password
const confirmPwd = page.locator(
  'xpath=//*[@id="credentialsForm"]/div/div[1]/div[3]/div/div/input'
);

await confirmPwd.click();
await page.keyboard.press('Control+A');
await page.keyboard.press('Delete');
await page.keyboard.type(confirmPassword );

// Trigger validation
await page.keyboard.press('Tab');
await page.mouse.click(1200, 200);

await page.waitForTimeout(3000);

// Check Save button enabled
await page.locator('xpath=//*[@id="credentialsForm"]/button[2]').click();

// console.log('Save Enabled:', await saveButton.isEnabled());

// await expect(saveButton).toBeEnabled({
//   timeout: 30000,
// });


  

  // Trigger Validation
//   await page.locator('text=Password Guidelines').click();




// const guidelines = page.getByText('Password Guidelines');


// await expect(guidelines).toBeVisible();

  // Save Password

//   const saveButton = page.getByRole('button', { name: /^Save$/ });

//  

// await expect(saveButton).toBeEnabled({

// timeout: 30000,

// });

await expect(

page.getByText(' password is changed')

).toBeVisible();

// await saveButton.click();
//   await page.getByRole('button', { name: /^Save$/ }).click();

//   await page.waitForTimeout(5000);

  // Open User Dropdown
  const profileDropdown = page.locator(
    '//*[@id="root"]/div/div/div/div/header/div/div/div/button'
  );

  await expect(profileDropdown).toBeVisible({
    timeout: 30000,
  });

  await profileDropdown.click();

  // Logout
  const logoutButton = page.locator(
    'xpath=/html/body/div[2]/div[3]/ul/li'
  );

  await expect(logoutButton).toBeVisible({
    timeout: 10000,
  });

  await logoutButton.click();

  // Login again with New Password
  await page.goto(
    'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  );

  await page.locator('#input28').fill(email);
  await page.locator('#form20 input[type="submit"]').click();

  await page.locator('#input54').fill(newPassword);
  await page.locator('#form46 input[type="submit"]').click();

  // Verify Login Successful
  await expect(
    page.locator('input[name="firstName"]')
  ).toBeVisible({
    timeout: 60000,
  });

  console.log('Password changed and login successful');
});