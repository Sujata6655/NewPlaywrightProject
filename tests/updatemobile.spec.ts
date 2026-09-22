// // import { test } from '@playwright/test';

// // test.use({
// //   storageState: 'playwright/.auth/user.json',
// // });

// // test('Verify Storage State', async ({ page }) => {
// //   await page.goto('https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/');

// //   console.log('Current URL:', page.url());

// //   const cookies = await page.context().cookies();
// //   console.log('Cookies Count:', cookies.length);

// //   await page.pause();
// // });

// import { test, expect } from '@playwright/test';
// import testData from '../Fixtures/testData.json';

// test('Update Mobile Number Successfully', async ({ page }) => {
//   await page.goto(testData.Url);

//   const phoneTextbox = page.locator(
//     'xpath=//*[@id="profilePhoneDetailsId"]//input'
//   );

//   await phoneTextbox.fill(testData.mobileNumber);

//   console.log('Mobile Number Entered:', testData.mobileNumber);

//   // rest of the steps...
// });

import { test, expect } from '@playwright/test';
import testData from '../Fixtures/testData.json';

test.use({
  storageState: 'playwright/.auth/user.json',
});

test('Update Mobile Number Successfully', async ({ page }) => {
  test.setTimeout(180000);

  await page.goto(testData.Url);

  // Phone Textbox
  const phoneTextbox = page.locator(
    'xpath=//*[@id="profilePhoneDetailsId"]//input'
  );

  // Save Button
  const savePhoneButton = page.locator(
    'xpath=//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]'
  );

  // First Close Button
  const close1button = page.locator(
    'xpath=//*[@id="main-content"]/div/div[1]/div/div[3]/div/button'
  );

  // Verify Phone Popup Close Button
  const verifyPhoneCloseButton = page.locator(
    'xpath=//*[@id=":ru:"]/button'
  );

  // OK Button
  const okButton = page.locator(
    '//button[contains(.,"ok")]'
  );

  // Update Mobile Number
  await phoneTextbox.scrollIntoViewIfNeeded();
  await phoneTextbox.waitFor({ state: 'visible' });

  await phoneTextbox.click();

  const currentValue = await phoneTextbox.inputValue();

  for (let i = 0; i < currentValue.length + 5; i++) {
    await page.keyboard.press('Backspace');
  }

  await phoneTextbox.fill(testData.mobileNumber);

  console.log('Mobile Number Entered:', testData.mobileNumber);

  await page.keyboard.press('Tab');

  await expect(savePhoneButton).toBeVisible({
    timeout: 30000,
  });

  await savePhoneButton.click();

  // First Popup Close
  try {
    await close1button.waitFor({
      state: 'visible',
      timeout: 10000,
    });

    await close1button.click();

    console.log('First Popup Closed');
  } catch {
    console.log('First Popup Not Displayed');
  }

  // Verify Phone Popup Close
  try {
    await verifyPhoneCloseButton.waitFor({
      state: 'visible',
      timeout: 10000,
    });

    await verifyPhoneCloseButton.click();

    console.log('Verify Phone Popup Closed');
  } catch {
    console.log('Verify Phone Popup Not Displayed');
  }

  // OK Button Click (if displayed)
  try {
    await okButton.waitFor({
      state: 'visible',
      timeout: 5000,
    });

    await okButton.click();

    console.log('OK Button Clicked');
  } catch {
    console.log('OK Button Not Displayed');
  }
});
