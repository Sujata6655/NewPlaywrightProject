import { expect, test } from '@playwright/test';
import { AddressPage } from '../pages/AddressPage';
import { LoginPage } from '../pages/LoginPage';
import testData from '../Fixtures/testData.json';

test.setTimeout(120000);

type AddressData = {
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  zipCode: string;
  address: string;
  state: string;
};

const firstAddress: AddressData = {
  firstName: testData.firstName,
  lastName: testData.lastName,
  country: testData.country,
  city: testData.city,
  zipCode: testData.zipCode,
  address: testData.address,
  state: testData.state,
};

const secondAddress: AddressData = {
  firstName: testData.firstName1,
  lastName: testData.lastName1,
  country: testData.country1,
  city: testData.city1,
  zipCode: testData.zipCode1,
  address: testData.address1,
  state: testData.state1,
};

function isAddressSaveResponse(
  response: import('@playwright/test').Response
) {
  const url = response.url();
  const resourceType = response.request().resourceType();

  return (
    ['xhr', 'fetch'].includes(resourceType) &&
    !/login|token/i.test(url)
  );
}

async function updateAndVerifyApi(
  page: import('@playwright/test').Page,
  addressPage: AddressPage,
  addressData: AddressData
) {
  console.log(
    `Updating address for Country: ${addressData.country}, State: ${addressData.state}`
  );

  const saveResponse =
    await addressPage.updatePersonalInfo(
      addressData.firstName,
      addressData.lastName,
      addressData.country,
      addressData.city,
      addressData.zipCode,
      addressData.address,
      addressData.state,
      () =>
        page.waitForResponse(
          isAddressSaveResponse,
          { timeout: 30000 }
        )
    );

  expect(saveResponse).toBeDefined();

  const response =
    saveResponse as import('@playwright/test').Response;

  expect(
    response.status(),
    `Address save API failed: ${response.request().method()} ${response.url()}`
  ).toBeGreaterThanOrEqual(200);

  expect(response.status()).toBeLessThan(300);

  await expect(addressPage.firstName)
    .toHaveValue(addressData.firstName);

  await expect(addressPage.lastName)
    .toHaveValue(addressData.lastName);

  await expect(addressPage.address)
    .toHaveValue(addressData.address);

  await expect(addressPage.city)
    .toHaveValue(addressData.city);

  await expect(addressPage.zipCode)
    .toHaveValue(addressData.zipCode);

  await page.screenshot({
    path: `address-${addressData.country}-${addressData.state}.png`,
    fullPage: true,
  });
}

test(
  'Update address through UI and verify save API response',
  async ({ page }, testInfo) => {
    const loginPage = new LoginPage(page);
    const addressPage = new AddressPage(page);

    await testInfo.attach(
      'address-data-used.json',
      {
        body: JSON.stringify(
          {
            firstAddress,
            secondAddress,
          },
          null,
          2
        ),
        contentType: 'application/json',
      }
    );

    await loginPage.navigate(
      testData.Url
    );

    await loginPage.login(
      testData.email,
      testData.currentPassword
    );

    await addressPage.verifyProfileLoaded();

    await updateAndVerifyApi(
      page,
      addressPage,
      firstAddress
    );

    await updateAndVerifyApi(
      page,
      addressPage,
      secondAddress
    );

    await addressPage.logout();
  }
);