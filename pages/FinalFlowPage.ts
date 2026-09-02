import { Page, Locator, expect } from '@playwright/test';

export class FinalFlowPage {
  readonly page: Page;

  // Mobile Number
  readonly phoneTextbox: Locator;
  readonly savePhoneButton: Locator;
  readonly verifyPhoneCloseButton: Locator;

  // Change Password
  readonly currentPasswordField: Locator;
  readonly newPasswordField: Locator;
  readonly confirmPasswordField: Locator;
  readonly savePasswordButton: Locator;
  readonly changePasswordButton: Locator;
  readonly operationsEmailInput: Locator;
readonly operationsNextButton: Locator;
readonly operationsPasswordInput: Locator;
readonly operationsSignInButton: Locator;
readonly operationsCenterButton: Locator;


  // Validation
  readonly guidelines: Locator;
  readonly passwordChangedMsg: Locator;
  readonly okButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Mobile Number
    this.phoneTextbox = page.locator(
      'xpath=//*[@id="profilePhoneDetailsId"]//input'
    );

    this.savePhoneButton = page.locator(
      'xpath=//*[@id="profilePhoneDetailsId"]/div[2]/div/button[2]'
    );

    // Verify Phone Popup Close
    this.verifyPhoneCloseButton = page.locator(
      'xpath=//*[@id=":r2k:"]/button'
    );

    // Change Password
    this.changePasswordButton = page.locator(
      'xpath=//*[@id="sigInInfoId"]/div/button'
    );

    this.currentPasswordField = page.locator(
      'xpath=//*[@id="credentialsForm"]/div/div[1]/div[1]/div/div/input'
    );

    this.newPasswordField = page.locator(
      'xpath=//*[@id="credentialsForm"]/div/div[1]/div[2]/div/div/input'
    );

    this.confirmPasswordField = page.locator(
      'xpath=//*[@id="credentialsForm"]/div/div[1]/div[3]/div/div/input'
    );

    this.savePasswordButton = page.locator(
      'xpath=//*[@id="credentialsForm"]/button[2]'
    );

    this.guidelines = page.getByText(
      'Password Guidelines'
    );

    this.passwordChangedMsg = page.getByText(
      'password is changed'
    );

    this.okButton = page.locator(
      '//button[contains(.,"ok")]'
    );
this.operationsEmailInput = page.locator(
  'xpath=//*[@id="input28"]'
);

this.operationsNextButton = page.locator(
  'xpath=//*[@id="form20"]/div[2]/input'
);

this.operationsPasswordInput = page.locator(
  'xpath=//*[@id="input54"]'
);

this.operationsSignInButton = page.locator(
  'xpath=//*[@id="form46"]/div[2]/input'
);
this.operationsCenterButton = page.locator(
  'xpath=//*[@id="app-mount"]/div/div/div[1]/div[1]/a[1]/button'
);

  }

  // ==========================================
  // MOBILE NUMBER
  // ==========================================

  async updateMobileNumber(phoneNumber: string) {
    await this.phoneTextbox.scrollIntoViewIfNeeded();

    await this.phoneTextbox.waitFor({
      state: 'visible',
    });

    await this.phoneTextbox.click();

    const currentValue =
      await this.phoneTextbox.inputValue();

    for (let i = 0; i < currentValue.length + 5; i++) {
      await this.page.keyboard.press('Backspace');
    }

    await this.phoneTextbox.type(phoneNumber);

    await this.page.keyboard.press('Tab');

    await expect(this.savePhoneButton).toBeVisible({
      timeout: 30000,
    });

    await this.savePhoneButton.click();

    await expect(
      this.page.getByText(
        'Your personal information is saved.'
      )
    ).toBeVisible({
      timeout: 15000,
    });

    console.log('Mobile Number Updated Successfully');
  }

  // ==========================================
  // CLOSE VERIFY PHONE POPUP
async closeVerifyPhonePopup() {
  try {
    const closeButton = this.page.locator(
      'xpath=//*[@aria-label="close"]/parent::button'
    );

    await closeButton.waitFor({
      state: 'visible',
      timeout: 10000,
    });

    await closeButton.click({
      force: true,
    });

    console.log('Verify Phone Number Popup Closed');
  } catch (error) {
    console.log('Failed to close popup:', error);
  }
}

  // ==========================================
  // CHANGE PASSWORD
  // ==========================================

  async openChangePassword() {
    await this.closeVerifyPhonePopup();

    await this.changePasswordButton.scrollIntoViewIfNeeded();

    await expect(
      this.changePasswordButton
    ).toBeVisible({
      timeout: 30000,
    });

    await this.changePasswordButton.click({
      force: true,
    });
  }

  async handlePopup() {
    try {
      await this.okButton.waitFor({
        state: 'visible',
        timeout: 5000,
      });

      await this.okButton.click();

      console.log('Popup Handled');
    } catch {
      console.log('Popup Not Displayed');
    }
  }

  async enterPasswords(
    currentPassword: string,
    newPassword: string,
    confirmPassword: string
  ) {
    await this.currentPasswordField.click();
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Delete');
    await this.page.keyboard.type(currentPassword);

    await this.newPasswordField.click();
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Delete');
    await this.page.keyboard.type(newPassword);

    await this.confirmPasswordField.click();
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Delete');
    await this.page.keyboard.type(confirmPassword);

    await this.page.keyboard.press('Tab');
    await this.page.mouse.click(1200, 200);

    await this.page.waitForTimeout(3000);
  }

  async verifyGuidelinesDisplayed() {
    await expect(this.guidelines).toBeVisible({
      timeout: 30000,
    });
  }

  async savePassword() {
    await expect(
      this.savePasswordButton
    ).toBeEnabled({
      timeout: 60000,
    });

    await this.savePasswordButton.click();
  }

  async verifyPasswordChangedMessage() {
    await expect(
      this.passwordChangedMsg
    ).toBeVisible({
      timeout: 30000,
    });

    console.log(
      'Password Changed Successfully'
    );
  }
async loginToOperationsCenter(
  email: string,
  password: string
) {
  await this.operationsEmailInput.waitFor({
    state: 'visible',
    timeout: 60000,
  });

  await this.operationsEmailInput.fill(email);

  await this.operationsNextButton.click();

  await this.operationsPasswordInput.waitFor({
    state: 'visible',
    timeout: 60000,
  });

  await this.operationsPasswordInput.fill(password);

  await this.operationsSignInButton.click();
  
}
async clickOperationsCenterButton() {
  await this.operationsCenterButton.waitFor({
    state: 'visible',
    timeout: 60000,
  });

  await this.operationsCenterButton.click();

  console.log(
    'Operations Center Button Clicked Successfully'
  );
}
}
