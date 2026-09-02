import { Page, Browser, expect } from '@playwright/test';

export class ForgotPasswordPage {
  constructor(
    private page: Page,
    private browser: Browser
  ) {}

  async launchApplication(url: string) {
    await this.page.goto(url);
    await expect(this.page).toHaveTitle(/OperationsCenter/i);
  }

  async openForgotPassword(context: any) {
    await this.page
      .getByRole('button', { name: 'Sign In' })
      .click();

    const [forgotPasswordPage] = await Promise.all([
      context.waitForEvent('page'),
      this.page
        .getByRole('link', {
          name: 'Forgot Username or Password',
        })
        .click(),
    ]);

    await forgotPasswordPage.waitForLoadState(
      'domcontentloaded'
    );

    return forgotPasswordPage;
  }

  async enterEmail(
    forgotPasswordPage: Page,
    email: string
  ) {
    await forgotPasswordPage
      .locator('#username-input')
      .fill(email);

    await forgotPasswordPage
      .locator(
        "#phonenumberForm button[type='submit']"
      )
      .click();
  }

  async getOTP(email: string) {
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

      // await yopmailPage.
      //  locator('#login')
      // .fill(emailName);

      const loginField = yopmailPage.locator('#login');

       await loginField.clear(); // clear existing text

        await loginField.fill(emailName);

        await yopmailPage.keyboard.press(
      'Enter'
    );

    await yopmailPage.waitForSelector(
      '#ifmail'
    );

    const mailFrame =
      yopmailPage.frameLocator('#ifmail');
    

    const text =
      await mailFrame
        .locator('body')
        .textContent();

       

    const otpMatch =
      text?.match(/\b\d{6}\b/);
    
   if (!otpMatch) {
      throw new Error(
        'OTP not found'
      );
    }

    return otpMatch[0];
  }

  async enterOTP(
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
        name: /next/i,
      })
      .click();
  }

  async resetPassword(
    forgotPasswordPage: Page,
    password: string
  ) {
    const newPasswordField =
      forgotPasswordPage
        .locator(
          'input[type="password"]'
        )
        .first();

    const confirmPasswordField =
      forgotPasswordPage
        .locator(
          'input[type="password"]'
        )
        .nth(1);

    await newPasswordField.pressSequentially(
      password
    );

    await confirmPasswordField.pressSequentially(
      password
    );

    await confirmPasswordField.press('Tab');

    await expect(newPasswordField).toHaveValue(password);

    await expect(confirmPasswordField).toHaveValue(password);

    await forgotPasswordPage.getByRole('button', {name: /submit/i,})
      .click();
  }

  async verifyResetSuccess(
  forgotPasswordPage: Page
  ) {
    await expect(
      forgotPasswordPage.getByText('Password Reset')).toBeVisible({ timeout: 30000 });

    await expect(
      forgotPasswordPage.getByText(
        'You can now Sign In'
      )
    ).toBeVisible({ timeout: 20000 });
  }

 async clickSignIn(forgotPasswordPage: Page) {
 await forgotPasswordPage.getByRole('button', { name: /sign in/i }).click();
}
 
  
}


  // async saveStorageState(
  // //   forgotPasswordPage: Page
  // // // ) {
  // // //   await forgotPasswordPage
  // // //     .context()
  // // //     .storageState({
  // // //       path: 'auth/auth.json',
 

