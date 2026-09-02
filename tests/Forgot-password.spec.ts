import { test } from '@playwright/test';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';
import { testData } from '../Fixtures/testData';

test(
  'Forgot Password Flow',
  async ({
    page,
    browser,
    context,
  }) => {
    const forgotPassword =
      new ForgotPasswordPage(
        page,
        browser
      );

    await forgotPassword.launchApplication(
      testData.url
    );

    const forgotPasswordPage =
      await forgotPassword.openForgotPassword(
        context
      );

    await forgotPassword.enterEmail(
      forgotPasswordPage,
      testData.email
    );

    const otp =
      await forgotPassword.getOTP(
        testData.email
      );

    await forgotPasswordPage.bringToFront();

    await forgotPassword.enterOTP(
      forgotPasswordPage,
      otp
    );

    await forgotPassword.resetPassword(
      forgotPasswordPage,
      testData.password
    );

    await forgotPassword.verifyResetSuccess(
      forgotPasswordPage
    );

    // await forgotPassword.clickSignIn(
    //   forgotPasswordPage
    // );

await forgotPasswordPage.clickSignIn(forgotPasswordPage);

    // await forgotPassword.saveStorageState(
    //   forgotPasswordPage
    // );
  }
);