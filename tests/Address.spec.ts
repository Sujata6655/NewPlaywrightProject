import { test } from '@playwright/test';
import { AddressPage } from '../pages/AddressPage';
import { LoginPage } from '../pages/LoginPage';
import testData from '../Fixtures/testData.json';

test.setTimeout(120000);

test('Update address details twice and logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const addressPage = new AddressPage(page);

  await loginPage.navigate(testData.Url);
  await loginPage.login(testData.email, testData.currentPassword);
  await addressPage.verifyProfileLoaded();

  // First Data
  await addressPage.updatePersonalInfo(
    testData.firstName,
    testData.lastName,
    testData.country,
    testData.city,
    testData.zipCode,
    testData.address,
    testData.state
  );

  console.log('First profile data saved successfully');

  // Second Data
  await addressPage.updatePersonalInfo(
    testData.firstName1,
    testData.lastName1,
    testData.country1,
    testData.city1,
    testData.zipCode1,
    testData.address1,
    testData.state1
  );

  console.log('Second profile data saved successfully');

  await addressPage.logout();
});