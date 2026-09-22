

import { test } from '@playwright/test';
import { forgot } from '../pages/forgot';
import testData from '../Fixtures/testData.json';

test('Forgot password', async ({ page, browser, context }) => {
  const forgotPassword = new forgot(
    page,
    browser,
    context
  );

  await forgotPassword.navigateToOperationsCenter();

  const forgotPasswordPage =
    await forgotPassword.openForgotPasswordPage();

  await forgotPassword.submitEmail(
    forgotPasswordPage,
    testData.Email,
    
  );

  const otp = await forgotPassword.getOtpFromYopmail(
    testData.Email
  );

  await forgotPassword.enterOtp(
    forgotPasswordPage,
    otp
  );

  await forgotPassword.resetPassword(
    forgotPasswordPage,
    testData.newPassword1
  );

  await forgotPassword.clickSignIn(
    forgotPasswordPage
  );
});