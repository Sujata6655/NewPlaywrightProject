import { chromium, FullConfig } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import testData from '../Fixtures/testData.json';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const loginPage = new LoginPage(page);

  await loginPage.navigate(testData.Url);

  await loginPage.login(
    testData.email,
    testData.currentPassword
  );

  await page.waitForLoadState('networkidle');
await page.waitForTimeout(10000);

console.log('After Login URL:', page.url());

  await page.context().storageState({
    path: 'playwright/.auth/user.json',
  });

  await browser.close();
}

export default globalSetup;
