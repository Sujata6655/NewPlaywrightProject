import { expect, Page, Browser, BrowserContext } from '@playwright/test';

export class forgot {
  private page: Page;
  private browser: Browser;
  private context: BrowserContext;

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

    await expect(this.page).toHaveTitle(
      /OperationsCenter/i
    );
  }

  async openForgotPasswordPage() {
    await this.page
      .getByRole('button', { name: 'Sign In' })
      .click();

    // const [forgotPasswordPage] =
    //   await Promise.all([
    //     this.context.waitForEvent('page'),
    //     this.page
    //       .getByRole('link', {
    //         name: 'Forgot Username or Password',
    //       })
    //       .click(),
    //   ]);
    
    const [forgotPasswordPage] = await Promise.all([

this.context.waitForEvent('page'),

this.page.locator('#forgot-password').click(),

]);

    await forgotPasswordPage.waitForLoadState(
      'domcontentloaded'
    );

    return forgotPasswordPage;
  }

  async submitEmail(
    forgotPasswordPage: Page,
    email: string
  ) {
    const usernameInput =
      forgotPasswordPage.locator(
        '#username-input'
      );

    await usernameInput.waitFor({
      state: 'visible',
    });

    await usernameInput.fill(email);

    await forgotPasswordPage
      .locator(
        "#phonenumberForm button[type='submit']"
      )
      .click();

    await forgotPasswordPage
      .locator('#confirmationCodeForm')
      .waitFor({
        state: 'visible',
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

    const emailName =
      email.split('@')[0];

    await yopmailPage
      .locator('#login')
      .fill(emailName);

    await yopmailPage.keyboard.press(
      'Enter'
    );

    await yopmailPage.waitForSelector(
      '#ifmail',
      {
        timeout: 30000,
      }
    );

    const mailFrame =
      yopmailPage.frameLocator('#ifmail');

    await mailFrame
      .locator('body')
      .waitFor({
        state: 'visible',
        timeout: 30000,
      });

    const mailText =
      await mailFrame
        .locator('body')
        .textContent();

    const otpMatch =
      mailText?.match(/\b\d{6}\b/);

    if (!otpMatch) {
      throw new Error(
        'OTP not found in email'
      );
    }

    const otp = otpMatch[0];

    console.log(
      `Captured OTP: ${otp}`
    );

    return otp;
  }

  async enterOtp(
    forgotPasswordPage: Page,
    otp: string
  ) {
    await forgotPasswordPage.bringToFront();

    const otpInputs =
      forgotPasswordPage.locator(
        '#confirmationCodeForm input'
      );

    for (let i = 0; i < 6; i++) {
      await otpInputs
        .nth(i)
        .fill(otp[i]);
    }

    await forgotPasswordPage
      .getByRole('button', {
        name: /next/i,
      })
      .click();
  }

  async resetPassword(
    forgotPasswordPage: Page,
    newPassword: string
  ) {
    const newPasswordField =
      forgotPasswordPage
        .locator('input[type="password"]')
        .first();

    const confirmPasswordField =
      forgotPasswordPage
        .locator('input[type="password"]')
        .nth(1);

    await expect(
      newPasswordField
    ).toBeVisible();

    await expect(
      confirmPasswordField
    ).toBeVisible();

    await newPasswordField.click();
    await newPasswordField.pressSequentially(
      newPassword
    );

    await confirmPasswordField.click();
    await confirmPasswordField.pressSequentially(
      newPassword
    );

    await confirmPasswordField.press(
      'Tab'
    );

    // await forgotPasswordPage.waitForTimeout(
    //   5000
    // );

    // await expect(
    //   newPasswordField
    // ).toHaveValue(newPassword);

    // await expect(
    //   confirmPasswordField
    // ).toHaveValue(newPassword);

    // expect(
    //   await newPasswordField.inputValue()
    // ).toBe(
    //   await confirmPasswordField.inputValue()
    // );

//     const submitButton = forgotPasswordPage.locator(
//   'button[type="submit"]'
// );
const submitButton =
  forgotPasswordPage.locator(
    'button[type="submit"]'
  );

await expect(submitButton).toBeEnabled();

await submitButton.click({
  force: true,
});

 await submitButton.waitFor({
  state: 'visible',
  timeout: 30000
});
await expect(submitButton).toBeVisible();
await expect(submitButton).toBeEnabled();

await submitButton.click();

    // const submitButton =
    //   forgotPasswordPage.getByRole(
    //     'button',
    //     {
    //       name: /submit/i,
    //     }
    //   );

    await expect(
      submitButton
    ).toBeEnabled();

    await submitButton.click();
   

console.log('Submit clicked');

    await expect(
      forgotPasswordPage.getByText(
        'Password Reset'
      )
    ).toBeVisible();

    await expect(
      forgotPasswordPage.getByText(
        'You can now Sign In'
      )
    ).toBeVisible();
  }

  async clickSignIn(
    forgotPasswordPage: Page
  ) {
    await forgotPasswordPage
      .getByRole('button', {
        name: /sign in/i,
      })
      .click();

    await forgotPasswordPage.waitForLoadState(
      'domcontentloaded'
    );
  }
}