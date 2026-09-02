import { test, expect } from '@playwright/test';

test('Edit Profile and Change Password', async ({ page }) => {

  const email = 'sunil.yadav@yopmail.com';
  const currentPassword = 'Test@111114';
  const newPassword = 'Test@111115';

  // Step 1: Open URL
  await page.goto(
    'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  );

  // Step 2: Verify Sign In title
//   await expect(page).toHaveTitle(/Sign In/i);

  // Login
  await page.locator('#input28').fill(email);
  await page.locator("//*[@id='form20']/div[2]/input").click();

  await page.locator('#input54').fill(currentPassword);
  await page.locator("#form46 input[type='submit']").click();
  await page.waitForLoadState('networkidle');

  // await page.waitForTimeout(50000);
//   await expect(page).toHaveTitle(/Edit Profile/i, {


// timeout: 60000

// });

 //await expect(page).toHaveTitle(/John Deere - Sign In|Edit Profile/i);




  //Step 3: Verify Edit Profile page opened
  // await expect(page.getByText(/Personal Information/i)
  // ).toBeVisible({ timeout: 60000 });

  // Step 4: Edit First Name
  const firstName = page.locator('//input[@name="firstName"]');

  await expect(firstName).toBeVisible();
  await firstName.clear();
  await firstName.fill('Sunil S');


// Step 4: Edit First Name



  // Step 5: Save
  await page.locator('//*[@id="addressDetailsId"]/div[5]/button[2]').click();

  // Step 6: Verify Success Message
  
  await expect(
    page.getByText(/Your personal information is saved/i)
  ).toBeVisible({ timeout: 20000 });

  await page.locator('//*[@id="main-content"]/div/div[1]/div/div[3]/div/button').click();

  // Step 7: Scroll Down
 // await page.mouse.wheel(0, 1000);

//   // Step 8: Update Mobile Number
//   const mobileField = page.locator('//input[@id="mobile" and @type="tel"]');

//   //await mobileField.scrollIntoViewIfNeeded();
//   await mobileField.waitFor({

// state: 'visible',

// timeout: 40000

// });

// console.log(await mobileField.isEnabled()); // false

// console.log(await mobileField.isDisabled()); // true

// //   await mobileField.click();
// //   await mobileField.press('Control+A');
// //   await page.keyboard.press('Delete');
// //   await mobileField.fill('9876543222');
// //   await page.keyboard.press('Tab');

// await mobileField.click();

// // Cursor ko end me le jao

// await page.keyboard.press('End');

// // Existing digits one by one delete karo

// for (let i = 0; i < 10; i++) {

// await page.keyboard.press('Backspace');

// }

// // Naya number ek-ek digit type karo

// const newMobile = '9876543227';

// for (const digit of newMobile) {

// await page.keyboard.type(digit);

// }

// await page.keyboard.press('Tab');

//   // Step 9: Save Mobile Number
//   await page
//     .locator('//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]')
//     .click();

//   // Step 10: Verify Success Message
// const successPopup = page.locator(

// 'xpath=/html[2/body/div[1]/div/div/div/diviv[1]/div/div[1]/div/div[2]'

// );



// await expect(successPopup).toContainText(/Updated Successfully/i);

// await expect(successPopup).toBeVisible();

//await expect(successPopup).toContainText(/Updated Successfully/i);

//   const closeButton = page.locator(

// '//*[@id="main-content"]/div/div[1]/div/div[3]/div/button'

// );

// await expect(closeButton).toBeVisible();

// await closeButton.click();

  //Close Success Popup if displayed
//   await page.locator("//*[@id=':ru:']/button").click();



  // Step 11: Scroll Up


  // Step 12: Click Change Password
const changePasswordButton = page.locator(

'xpath=//*[@id="sigInInfoId"]/div/button'

);

await expect(changePasswordButton).toBeVisible();

await changePasswordButton.click();

  // Step 13: Enter Current Password
  await page.locator('//*[@id="credentialsForm"]').fill(currentPassword);

  // Step 14: Enter New Password
  await page.locator('//*[@id=":rl:"]').fill(newPassword);

  // Step 15: Enter Confirm Password
  await page.locator('//*[@id="credentialsForm"]//div[3]//input"]').fill(newPassword);

  // Step 16: Verify Password Guideline
  await expect(
    page.getByText(/password/i)
  ).toBeVisible();

  // Step 17: Save Password
  await page.getByRole('button', { name: /^Save$/ }).click();

  // Step 18: Verify Password Changed Successfully
  await expect(
    page.getByText(/success/i)
  ).toBeVisible({ timeout: 30000 });

  // Step 19: Logout
  await page.getByRole('button', { name: /logout/i }).click();

  // Step 20: Open URL Again
  await page.goto(
    'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
  );

  // Step 21: Login with New Password
  await page.locator('#input28').fill(email);
  await page.locator("//*[@id='form20']/div[2]/input").click();

  await page.locator('#input54').fill(newPassword);
  await page.locator("#form46 input[type='submit']").click();

  await page.waitForLoadState('networkidle');

  await expect(
    page.getByText(/Personal Information/i)
  ).toBeVisible({ timeout: 60000 });

});
