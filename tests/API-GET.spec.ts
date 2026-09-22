import { test, expect } from '@playwright/test';

test('Verify API Response', async ({ request }) => {

  const response = await request.get(
    'https://account.deere.com/api/v1/contentservice/toggles/phoneverification/countries/IN'
  );

  console.log('Status Code:', response.status());

  expect(response.ok()).toBeTruthy();

  const responseBody = await response.text();

  console.log('Response:', responseBody);
});