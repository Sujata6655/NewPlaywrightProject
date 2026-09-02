import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly nextButton: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  

  constructor(page: Page) {
    this.page = page;

    this.emailInput = page.locator('#input28');
    this.nextButton = page.locator('#form20 input[type="submit"]');

    this.passwordInput = page.locator('#input54');
    this.signInButton = page.locator('#form46 input[type="submit"]');
    
  }

//   async navigate() {
//     await this.page.goto(
//       'https://account.deere.com/actmgmt/profile?TARGET=https://map.deere.com/'
//     );
//   }
async navigate(url: string) {
  await this.page.goto(url);
}

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.nextButton.click();

    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}