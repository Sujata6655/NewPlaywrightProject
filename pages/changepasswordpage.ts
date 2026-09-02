import { Page, Locator, expect } from '@playwright/test';

export class changepasswordpage {
  readonly page: Page;
  readonly currentPasswordField: Locator;
  readonly newPasswordField: Locator;
  readonly confirmPasswordField: Locator;
  readonly saveButton: Locator;
  readonly guidelines: Locator;
  readonly passwordChangedMsg: Locator;
  readonly okButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.currentPasswordField = page.locator(
      'xpath=//*[@id="credentialsForm"]/div/div[1]/div[1]/div/div/input'
    );

    this.newPasswordField = page.locator(
      'xpath=//*[@id="credentialsForm"]/div/div[1]/div[2]/div/div/input'
    );

    this.confirmPasswordField = page.locator(
      'xpath=//*[@id="credentialsForm"]/div/div[1]/div[3]/div/div/input'
    );

    this.saveButton = page.locator(
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
  }

  async handlePopup() {
    try {
      await this.okButton.waitFor({
        state: 'visible',
        timeout: 5000,
      });

      await this.okButton.click();
    } catch {
      console.log('Popup not displayed');
    }
  }

  async enterPasswords(
    currentPassword: string,
    newPassword: string,
    confirmPassword: string
  ) {
    // Current Password
    await this.currentPasswordField.click();
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Delete');
    await this.page.keyboard.type(currentPassword);

    // New Password
    await this.newPasswordField.click();
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Delete');
    await this.page.keyboard.type(newPassword);

    // Confirm Password
    await this.confirmPasswordField.click();
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Delete');
    await this.page.keyboard.type(confirmPassword);

    // Trigger Validation
    await this.page.keyboard.press('Tab');
    await this.page.mouse.click(1200, 200);

    await this.page.waitForTimeout(3000);

    console.log(
      'Save Button Enabled:',
      await this.saveButton.isEnabled()
    );

    console.log(
      'Save Button Disabled Attribute:',
      await this.saveButton.getAttribute('disabled')
    );
  }

  async verifyGuidelinesDisplayed() {
    await expect(this.guidelines).toBeVisible({
      timeout: 30000,
    });
  }

  async savePassword() {
    console.log(
      'Visible:',
      await this.saveButton.isVisible()
    );

    console.log(
      'Enabled Before Click:',
      await this.saveButton.isEnabled()
    );

    await expect(this.saveButton).toBeEnabled({
      timeout: 60000,
    });

    await this.saveButton.scrollIntoViewIfNeeded();

    await this.saveButton.click();
  }

  async verifyPasswordChangedMessage() {
    await expect(
      this.passwordChangedMsg
    ).toBeVisible({
      timeout: 30000,
    });
  }
}