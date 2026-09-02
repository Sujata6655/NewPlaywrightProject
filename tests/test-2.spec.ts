import { test, expect } from '@playwright/test';

test('Update phone number', async ({ page }) => {
  await page.goto(
    'https://signin.johndeere.com/oauth2/ausabzzga86EIeR4l1t7/v1/authorize?client_id=0oa4tbcmsrJlPC47S5d7&code_challenge=25gZWrE3NcZq6F0zLCuh_pZZwCKYD28hkGnSkI3yWkw&code_challenge_method=S256&nonce=1eYvjiTY4fTjqzcxsNIo6VYOe3PZHZl6B98qyK2RTiie6dZguffvX2qT9UROShXu&redirect_uri=https%3A%2F%2Faccount.deere.com%2Factmgmt%2Fcallback&response_type=code&state=xM0KtArkiY2i8JLEuxhkyPPhN5zVV92cgIbgnJQZhV2A5N1w0tkAstQXrFga1kIC&scope=profile%20openid'
  );

  await page.getByRole('textbox', { name: 'Username' }).fill('sunil.yadav@yopmail.com');
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill('Testingqaengineer123@');

  await Promise.all([
    page.waitForLoadState('networkidle'),
    page.getByRole('button', { name: 'Sign In' }).click(),
  ]);

  // Wait a bit for SSO redirects to finish
  await page.waitForLoadState('networkidle');

await page.waitForURL('**account.deere.com/**', {

timeout: 60000,

});

  await page.goto(
    'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/',
    {
      waitUntil: 'networkidle',
    }
  );

  const phoneTextbox = page.getByRole('textbox', {
    name: /1 \(702\) 123-/,
  });

  await phoneTextbox.waitFor({ state: 'visible' });
  await phoneTextbox.click();

await phoneTextbox.clear();

  await phoneTextbox.fill('+919876543229');

  await page
   
    .locator('//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]').click();
   

  await page.getByRole('button', { name: /close/i }).click();
});