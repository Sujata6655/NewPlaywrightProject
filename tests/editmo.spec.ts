import { test, expect } from '@playwright/test';

test('Edit Profile, Mobile Number and Change Password', async ({ page }) => {
  test.setTimeout(180000);

  const email = 'sunil.yadav@yopmail.com';

  const currentPassword = 'Testingqaengineer123@';
  const newPassword = 'Testingqaengineer124@';
  const confirmPassword = 'Testingqaengineer124@';

  const updatedFirstName = 'Sunil S';
  const updatedMobileNumber = '+919876543229';

  // Login
  await page.goto(
    'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  );

  await page.locator('#input28').fill(email);
  await page.locator('#form20 input[type="submit"]').click();

  await page.locator('#input54').fill(currentPassword);
  await page.locator('#form46 input[type="submit"]').click();

  // Verify Profile Page
  const firstName = page.locator('input[name="firstName"]');

  await expect(firstName).toBeVisible({
    timeout: 60000,
  });

  // =====================================================
  // UPDATE FIRST NAME
  // =====================================================

  await firstName.click();
  await firstName.clear();
  await firstName.fill(updatedFirstName);

  await page
    .locator('xpath=//*[@id="addressDetailsId"]/div[5]/button[2]')
    .click();

  // First Name Success Message
await expect(
  page.getByText('Your personal information is saved.')
).toBeVisible({
  timeout: 15000,
});

  console.log('First Name Updated Successfully');

  // =====================================================
  // UPDATE MOBILE NUMBER
  // =====================================================
const phoneTextbox = page.locator(
  'xpath=//*[@id="profilePhoneDetailsId"]//input'
);

await phoneTextbox.waitFor({ state: 'visible' });

await phoneTextbox.click();


const currentValue = await phoneTextbox.inputValue();

for (let i = 0; i < currentValue.length + 5; i++) {
  await page.keyboard.press('Backspace');
}

await phoneTextbox.type('+919876543229');
await page.keyboard.press('Tab');
  console.log('Mobile Number Updated Successfully');

  // =====================================================
  // CHANGE PASSWORD
  // =====================================================

  const changePasswordButton = page.locator(
    'xpath=//*[@id="sigInInfoId"]/div/button'
  );

  await changePasswordButton.scrollIntoViewIfNeeded();

  await expect(changePasswordButton).toBeVisible({
    timeout: 30000,
  });

  await changePasswordButton.click();

  // Optional Popup
  const okButton = page.locator('//button[contains(.,"ok")]');

  try {
    await okButton.waitFor({
      state: 'visible',
      timeout: 5000,
    });

    await okButton.click();
  } catch {
    console.log('Popup not displayed');
  }

//   // Current Password
//   const currentPwd = page.locator(
//     'xpath=//*[@id="credentialsForm"]/div/div[1]/div[1]/div/div/input'
//   );

//   await currentPwd.click();
//   await page.keyboard.press('Control+A');
//   await page.keyboard.press('Delete');
//   await currentPwd.fill(currentPassword);

//   // New Password
//   const newPwd = page.locator(
//     'xpath=//*[@id="credentialsForm"]/div/div[1]/div[2]/div/div/input'
//   );

//   await newPwd.click();
//   await page.keyboard.press('Control+A');
//   await page.keyboard.press('Delete');
//   await newPwd.fill(newPassword);

//   // Confirm Password
//   const confirmPwd = page.locator(
//     'xpath=//*[@id="credentialsForm"]/div/div[1]/div[3]/div/div/input'
//   );

//   await confirmPwd.click();
//   await page.keyboard.press('Control+A');
//   await page.keyboard.press('Delete');
//   await confirmPwd.fill(confirmPassword);

//   await page.keyboard.press('Tab');

//   const passwordSaveButton = page.locator(
//     'xpath=//*[@id="credentialsForm"]/button[2]'
//   );

//   await expect(passwordSaveButton).toBeEnabled({
//     timeout: 30000,
//   });

//   await passwordSaveButton.click();

//   // Password Changed Validation
//   await expect(
//     page.getByText(/password is changed|password changed/i)
//   ).toBeVisible({
//     timeout: 15000,
//   });

//   console.log('Password Changed Successfully');

//   // =====================================================
//   // LOGOUT
//   // =====================================================

//   const profileDropdown = page.locator(
//     'xpath=//*[@id="root"]/div/div/div/div/header/div/div/div/button'
//   );

//   await expect(profileDropdown).toBeVisible({
//     timeout: 30000,
//   });

//   await profileDropdown.click();

//   const logoutButton = page.locator(
//     'xpath=/html/body/div[2]/div[3]/ul/li'
//   );

//   await expect(logoutButton).toBeVisible();
//   await logoutButton.click();

//   // =====================================================
//   // LOGIN WITH NEW PASSWORD
//   // =====================================================

//   await page.goto(
//     'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
//   );

//   await page.locator('#input28').fill(email);
//   await page.locator('#form20 input[type="submit"]').click();

//   await page.locator('#input54').fill(newPassword);
//   await page.locator('#form46 input[type="submit"]').click();

//   await expect(
//     page.locator('input[name="firstName"]')
//   ).toBeVisible({
//     timeout: 60000,
//   });

//   console.log('Login Successful With New Password');

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