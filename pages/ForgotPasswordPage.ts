import {
  Page,
  Browser,
  BrowserContext,
  expect,
} from '@playwright/test';

export class ForgotPasswordPage {
  readonly page: Page;
  readonly browser: Browser;
  readonly context: BrowserContext;

  constructor(
    page: Page,
    browser: Browser,
    context: BrowserContext
  ) {
    this.page = page;
    this.browser = browser;
    this.context = context;
  }

  async navigateToOperationsCenter() {
    await this.page.goto(
      'https://operationscenter.deere.com/'
    );

    await this.page.waitForLoadState('networkidle');
  }

  async openForgotPasswordPage(): Promise<Page> {
    await this.page
      .getByRole('button', { name: 'Sign In' })
      .click();

    // const [forgotPasswordPage] = await Promise.all([
    //   this.context.waitForEvent('page'),
    //   this.page
    //     .getByRole('link', {
    //       name: /Forgot Username or Password/i,
    //     })
    //     .click(),
    // ]);

    const [forgotPasswordPage] = await Promise.all([

this.context.waitForEvent('page'),

this.page.locator('#forgot-password').click(),

]);
    await forgotPasswordPage.waitForLoadState();

    return forgotPasswordPage;
  }

  async submitEmail(
    forgotPasswordPage: Page,
    email: string
  ) {
    const usernameInput =
      forgotPasswordPage.locator('#username-input');

    await expect(usernameInput).toBeVisible({
      timeout: 30000,
    });

    await usernameInput.click();
  
 
    console.log(
      'Entered Email:',
      await usernameInput.inputValue()
    );

    await forgotPasswordPage
      .locator(
        "#phonenumberForm button[type='submit']"
      )
      .click();

    await forgotPasswordPage
      .locator('#confirmationCodeForm')
      .waitFor({
        state: 'visible',
        timeout: 30000,
      });
  }

  async getOtpFromYopmail(
    email: string
  ): Promise<string> {
    const yopmailPage =
      await this.browser.newPage();

    await yopmailPage.goto(
      'https://yopmail.com/',
      {
        waitUntil: 'domcontentloaded',
      }
    );

    const inboxName = email.split('@')[0];

    await yopmailPage.locator('#login').fill(
      inboxName
    );

    await yopmailPage.keyboard.press('Enter');

    let otp: string | null = null;

    for (let i = 0; i < 10; i++) {
      console.log(
        `Checking mailbox attempt ${
          i + 1
        }`
      );

      await yopmailPage.reload();

      const mailFrame =
        yopmailPage.frameLocator('#ifmail');

      await mailFrame
        .locator('body')
        .waitFor({
          state: 'visible',
          timeout: 30000,
        });

      const bodyText =
        await mailFrame
          .locator('body')
          .textContent();

      const match =
        bodyText?.match(/\b\d{6}\b/);

      if (match) {
        otp = match[0];
        break;
      }

      await yopmailPage.waitForTimeout(5000);
    }

    await yopmailPage.close();

    if (!otp) {
      throw new Error('OTP not found');
    }

    return otp;
  }

  async enterOtp(
    forgotPasswordPage: Page,
    otp: string
  ) {
    const otpInputs =
      forgotPasswordPage.locator(
        '#confirmationCodeForm input'
      );

    for (let i = 0; i < 6; i++) {
      await otpInputs.nth(i).fill(otp[i]);
    }

    await forgotPasswordPage
      .getByRole('button', {
        name: /Next/i,
      })
      .click();
  }

  async resetPassword(
    forgotPasswordPage: Page,
    password: string
  ) {
    const newPassword =
      forgotPasswordPage
        .locator('input[type="password"]')
        .first();

    const confirmPassword =
      forgotPasswordPage
        .locator('input[type="password"]')
        .nth(1);

    await expect(newPassword).toBeVisible();
    await expect(confirmPassword).toBeVisible();

    await newPassword.fill(password);
    await confirmPassword.fill(password);

    await expect(newPassword).toHaveValue(
      password
    );

    await expect(confirmPassword).toHaveValue(
      password
    );
  }

  async clickSignIn(
    forgotPasswordPage: Page
  ) {
    await forgotPasswordPage
      .getByRole('button', {
        name: /Sign In/i,
      })
      .click();
  }
}